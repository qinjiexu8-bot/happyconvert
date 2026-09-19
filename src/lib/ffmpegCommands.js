import { formatTime } from "./mediaUtils.js";

/**
 * Name of the concat playlist written into the WASM virtual filesystem.
 * Both merge modes go through this single list file, which keeps the merge
 * path to one code branch and, more importantly, means a clip without an
 * audio track degrades into silence instead of aborting the whole job the way
 * a multi-input `concat=n=N:v=1:a=1` filter graph would.
 */
export const MERGE_LIST_FILE = "merge-list.txt";

export function buildMergeListContent(inputNames = []) {
  return inputNames.map((name) => `file '${name}'`).join("\n") + "\n";
}

/** Audio container/extension for each audio-converter target. */
export const AUDIO_TARGET_EXT = {
  mp3: "mp3",
  m4a: "m4a",
  wav: "wav",
  flac: "flac",
  opus: "ogg",
  vorbis: "ogg",
  aiff: "aiff"
};

export const AUDIO_TARGET_FORMATS = Object.keys(AUDIO_TARGET_EXT);

/**
 * 流拷贝合并「看起来成功、实际产出坏文件」的日志签名。
 *
 * 为什么需要它：concat demuxer + `-c copy` 在片段规格不一致时**并不总是返回非零退出码**。
 * 实测（640x360@30/48kHz 拼接 1280x720@25/44.1kHz）：ffmpeg 退出码为 0，但 muxer 反复
 * 报 `non monotonically increasing dts`，第二段的帧与第一段时间戳撞车被丢弃 —— 输出时长
 * 3.70s（应为 4s）、avg_frame_rate 变成 33/1。用户拿到的是一个能打开、但后半段错乱的
 * 文件。所以判定「快速合并是否可信」不能只看退出码，必须同时扫 muxer 的告警。
 */
export const MERGE_COPY_FAILURE_SIGNATURES = [
  /non[- ]monotonically increasing dts/i,
  /application provided invalid/i,
  /non-monotonic dts/i,
  /invalid dts/i,
  /does not match/i,
  /parameters do not match/i,
  /could not find codec parameters/i,
  /timestamp discontinuity/i
];

export function isMergeCopyCorrupt(logLines = []) {
  return logLines.some((line) => MERGE_COPY_FAILURE_SIGNATURES.some((re) => re.test(line)));
}

/** 命中的第一条告警，便于把原因如实写进日志/UI */
export function firstMergeCopyCorruption(logLines = []) {
  return logLines.find((line) => MERGE_COPY_FAILURE_SIGNATURES.some((re) => re.test(line))) || null;
}

/**
 * 快速合并前的预检：用引擎自带的 ffprobe 读取每段片段的流参数。
 *
 * 为什么必须预检而不是等 ffmpeg 报错：concat demuxer + `-c copy` 在片段规格不一致时
 * **可能返回退出码 0 却写出坏文件**。实测 640x360@30/48kHz 拼接 1280x720@25/44.1kHz：
 * 退出码 0、无任何告警，但输出只有 110 帧、时长 3.70s（应 4s），第二段帧丢失。
 * 也就是说「等它失败再回退」这个策略根本不成立 —— 必须自己判断能不能走流拷贝。
 */
export function mergeProbeArgs(path) {
  return ["-v", "error", "-print_format", "json", "-show_streams", "-show_format", path];
}

/** 把 ffprobe 的 JSON 文本压成可比对的签名；解析不出来返回 null（调用方按不可信处理） */
export function mergeStreamSignature(probeText) {
  let data;
  try {
    data = typeof probeText === "string" ? JSON.parse(probeText.trim()) : probeText;
  } catch {
    return null;
  }
  if (!data || !Array.isArray(data.streams) || data.streams.length === 0) return null;
  // 封面图（attached_pic）不是真正的视频轨，不能拿来拼流
  const v = data.streams.find((s) => s.codec_type === "video" && s.disposition?.attached_pic !== 1);
  const a = data.streams.find((s) => s.codec_type === "audio");
  return {
    duration: Number(data.format?.duration || 0),
    hasVideo: !!v,
    hasAudio: !!a,
    frameRate: parseFrameRate(v?.r_frame_rate),
    video: v ? [v.codec_name, `${v.width}x${v.height}`, v.pix_fmt, v.r_frame_rate, v.time_base].join("|") : null,
    audio: a ? [a.codec_name, String(a.sample_rate), String(a.channels), a.channel_layout || "-", a.time_base].join("|") : null
  };
}

/** "30000/1001" → 29.97；解析不出来返回 null */
export function parseFrameRate(rate) {
  if (!rate || typeof rate !== "string") return null;
  const [num, den] = rate.split("/").map(Number);
  if (!num || !den) return null;
  const value = num / den;
  if (!Number.isFinite(value) || value <= 0) return null;
  return Math.round(value * 1000) / 1000;
}

/**
 * 比对所有片段签名。返回 { compatible, reason, detail }。
 * 宁可多走一次重编码，也不放过一个静默损坏的输出 —— 所以任何不确定都判为不可信。
 */
export function compareMergeSignatures(signatures = []) {
  if (signatures.length < 2) return { compatible: false, reason: "not-enough-clips" };
  if (signatures.some((s) => !s)) return { compatible: false, reason: "probe-failed" };
  const first = signatures[0];
  for (let i = 1; i < signatures.length; i += 1) {
    if (signatures[i].video !== first.video) {
      return { compatible: false, reason: "video-mismatch", index: i, detail: `${first.video} → ${signatures[i].video}` };
    }
    if (signatures[i].audio !== first.audio) {
      return { compatible: false, reason: "audio-mismatch", index: i, detail: `${first.audio} → ${signatures[i].audio}` };
    }
  }
  return { compatible: true };
}

/**
 * 统一重编码合并：必须走 `concat` **滤镜**，不能用 concat 解复用器 + 重编码。
 *
 * 实测（640x360@30/48kHz + 1280x720@25/44.1kHz）：解复用器路线输出 3.714833s，
 * 而两段各 2s、应得 4.000000s —— 第二段的帧被丢掉了约 0.29s。加 `+genpts` / `fps_mode cfr`
 * 都救不回来；换成 concat 滤镜则精确得到 4.000000s。原因是解复用器按各文件自己的时间基
 * 叠加时间戳，跨规格时就错位；滤镜是把所有输入解码后按帧序号拼接，天然对齐。
 *
 * 代价（要如实告知用户）：滤镜路线会同时解码所有片段，内存占用随片段数量与时长增长，
 * 而不像解复用器那样顺序读取。
 *
 * clipInfo 里 hasAudio === false 的片段需要静音补齐 —— concat 滤镜要求每个输入贡献相同
 * 数量的流，缺音轨的片段只能另接一路 anullsrc 顶上，长度取其视频时长。
 */
export function mergeReencodeArgs(inputNames, outputName, options, clipInfo = []) {
  const filter = mergeNormalizeFilter(options.mergeWidth, options.mergeHeight, options.mergeFps);
  const inputs = [];
  inputNames.forEach((name) => inputs.push("-i", name));

  const chains = [];
  const concatInputs = [];
  let nextIndex = inputNames.length;

  inputNames.forEach((_, i) => {
    const info = clipInfo[i] || {};
    chains.push(`[${i}:v]${filter}[v${i}]`);
    if (info.hasAudio === false) {
      const seconds = Number(info.duration) > 0 ? Number(info.duration).toFixed(3) : "10";
      inputs.push("-f", "lavfi", "-t", seconds, "-i", "anullsrc=channel_layout=stereo:sample_rate=48000");
      chains.push(`[${nextIndex}:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo[a${i}]`);
      nextIndex += 1;
    } else {
      chains.push(`[${i}:a]aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo[a${i}]`);
    }
    concatInputs.push(`[v${i}][a${i}]`);
  });

  const graph = `${chains.join(";")};${concatInputs.join("")}concat=n=${inputNames.length}:v=1:a=1[vout][aout]`;

  return [
    ...inputs,
    "-filter_complex",
    graph,
    "-map",
    "[vout]",
    "-map",
    "[aout]",
    "-c:v",
    "libx264",
    "-preset",
    "veryfast",
    "-crf",
    "23",
    // 强制 4:2:0，否则异源片段可能带出 yuv444 —— 浏览器 <video> 解不了
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-ar",
    "48000",
    "-ac",
    "2",
    outputName
  ];
}


export function buildCommandPreview(options) {
  const inputName = `input.${options.inputExt || "mp4"}`;

  if (options.selectedTool === "Trim") {
    const codec = options.trimMode === "copy" ? "-c copy" : "-c:v libx264 -crf 23 -c:a aac";
    return `ffmpeg -ss ${formatTime(options.startTimeSec, true)} -to ${formatTime(options.endTimeSec, true)} -i ${inputName} ${codec} output.${options.inputExt}`;
  }

  if (options.selectedTool === "Merge") {
    if (options.mergeMode === "reencode") {
      const count = Math.max(2, options.mergeClipCount || 2);
      const names = Array.from({ length: count }, (_, i) => `merge-in-${i}.mp4`);
      return `ffmpeg ${mergeReencodeArgs(names, "output.mp4", options, []).join(" ")}`;
    }
    return `ffmpeg -f concat -safe 0 -i ${MERGE_LIST_FILE} -c copy output.mp4`;
  }

  if (options.selectedTool === "Audio") {
    const target = options.audioTargetFormat || "mp3";
    const args = audioTargetArgs(target, options.audioConvertKbps);
    return `ffmpeg -i ${inputName} -vn ${args.join(" ")} output.${AUDIO_TARGET_EXT[target]}`;
  }

  if (options.selectedTool === "Compress") {
    const crf = compressionCrf(options.compressionQuality);
    const scaleArg = scaleFilter(options.compressionScale);
    return `ffmpeg -i ${inputName}${scaleArg ? ` -vf ${scaleArg}` : ""} -c:v libx264 -crf ${crf} -preset ${options.compressionPreset} -c:a aac output.mp4`;
  }

  if (options.selectedTool === "Convert") {
    return `ffmpeg -i ${inputName}${convertCodecPreview(options)} output.${options.convertFormat}`;
  }

  if (options.selectedTool === "GIF") {
    const width = options.gifWidth || 480;
    const fps = options.gifFps || 10;
    return `ffmpeg -ss ${formatTime(options.startTimeSec, true)} -to ${formatTime(options.endTimeSec, true)} -i ${inputName} -vf "fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif`;
  }

  if (options.selectedTool === "Extract Audio") {
    const acodec = options.audioExtractFormat === "mp3" ? `-c:a libmp3lame -b:a ${options.audioKbps}` : "-c:a pcm_s16le";
    return `ffmpeg -ss ${formatTime(options.startTimeSec, true)} -to ${formatTime(options.endTimeSec, true)} -i ${inputName} -vn ${acodec} output.${options.audioExtractFormat}`;
  }

  if (options.selectedTool === "Crop") {
    const { w, h, x, y } = roundedCrop(options);
    return `ffmpeg -i ${inputName} -vf "crop=${w}:${h}:${x}:${y}" -c:v libx264 -crf 23 -c:a aac output.mp4`;
  }

  return `ffmpeg -i ${inputName} output.mp4`;
}

export function buildFfmpegArgs(inputName, outputName, options) {
  if (options.selectedTool === "Trim") {
    const args = ["-ss", String(options.startTimeSec), "-to", String(options.endTimeSec), "-i", inputName];
    if (options.trimMode === "copy") {
      args.push("-c", "copy");
    } else {
      args.push("-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-c:a", "aac");
    }
    args.push(outputName);
    return args;
  }

  if (options.selectedTool === "Compress") {
    const args = ["-i", inputName];
    const scale = scaleFilter(options.compressionScale);
    if (scale) args.push("-vf", scale);
    args.push(
      "-c:v",
      "libx264",
      "-preset",
      options.compressionPreset,
      "-crf",
      compressionCrf(options.compressionQuality),
      "-c:a",
      "aac",
      outputName
    );
    return args;
  }

  if (options.selectedTool === "Convert") {
    const args = ["-i", inputName];
    if (options.convertFormat === "mp3" || options.convertFormat === "wav") {
      args.push("-vn");
      if (options.convertFormat === "mp3") {
        args.push("-c:a", "libmp3lame", "-q:a", "2");
      } else {
        args.push("-c:a", "pcm_s16le");
      }
    } else {
      args.push(...videoCodecArgs(options));
      args.push(...audioCodecArgs(options));
    }
    args.push(outputName);
    return args;
  }

  if (options.selectedTool === "GIF") {
    const width = options.gifWidth || 480;
    const fps = options.gifFps || 10;
    return [
      "-ss",
      String(options.startTimeSec),
      "-to",
      String(options.endTimeSec),
      "-i",
      inputName,
      "-vf",
      `fps=${fps},scale=${width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
      outputName
    ];
  }

  if (options.selectedTool === "Extract Audio") {
    const args = ["-ss", String(options.startTimeSec), "-to", String(options.endTimeSec), "-i", inputName, "-vn"];
    if (options.audioExtractFormat === "mp3") {
      args.push("-c:a", "libmp3lame", "-b:a", options.audioKbps);
    } else {
      args.push("-c:a", "pcm_s16le");
    }
    args.push(outputName);
    return args;
  }

  if (options.selectedTool === "Crop") {
    const { w, h, x, y } = roundedCrop(options);
    return [
      "-i",
      inputName,
      "-vf",
      `crop=${w}:${h}:${x}:${y}`,
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "23",
      "-c:a",
      "aac",
      outputName
    ];
  }

  if (options.selectedTool === "Merge") {
    if (options.mergeMode === "reencode") {
      const names = options.mergeInputNames && options.mergeInputNames.length
        ? options.mergeInputNames
        : [inputName];
      return mergeReencodeArgs(names, outputName, options, options.mergeClipInfo || []);
    }
    return ["-f", "concat", "-safe", "0", "-i", MERGE_LIST_FILE, "-c", "copy", outputName];
  }

  if (options.selectedTool === "Audio") {
    const target = options.audioTargetFormat || "mp3";
    return ["-i", inputName, "-vn", ...audioTargetArgs(target, options.audioConvertKbps), outputName];
  }

  return ["-i", inputName, outputName];
}

export function getOutputFormatForTool(options) {
  if (options.selectedTool === "Trim") return options.inputExt;
  if (options.selectedTool === "Convert") return options.convertFormat;
  if (options.selectedTool === "GIF") return "gif";
  if (options.selectedTool === "Extract Audio") return options.audioExtractFormat;
  if (options.selectedTool === "Audio") return AUDIO_TARGET_EXT[options.audioTargetFormat || "mp3"];
  return "mp4";
}

export function getBlobTypeForFormat(format) {
  if (format === "gif") return "image/gif";
  if (format === "mp3") return "audio/mpeg";
  if (format === "m4a") return "audio/mp4";
  if (format === "wav") return "audio/wav";
  if (format === "flac") return "audio/flac";
  if (format === "ogg") return "audio/ogg";
  if (format === "aiff") return "audio/aiff";
  return `video/${format}`;
}

/**
 * Normalise every input frame to one geometry before concatenation.
 * Without scale+pad+setsar the concat demuxer hands frames of differing size
 * and sample aspect ratio to the encoder, which is where clipped edges and
 * "non-monotonous DTS" warnings come from.
 */
function mergeNormalizeFilter(width, height, fps) {
  const w = evenCeil(width || 1280);
  const h = evenCeil(height || 720);
  const rate = fps ? `,fps=${fps}` : "";
  return `scale=${w}:${h}:force_original_aspect_ratio=decrease,pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1${rate}`;
}

/** H.264 needs even dimensions; round up so 1080p stays 1080p. */
function evenCeil(value) {
  const n = Math.ceil(Number(value) || 0);
  return n % 2 === 0 ? n : n + 1;
}

function audioTargetArgs(target, kbps) {
  // 约定与 Extract Audio 一致：state 里存的就是 "192k" 这种完整值，原样传给 -b:a。
  // 千万别再补一个 k —— 会拼成 "192kk"，libmp3lame 直接报
  // `Invalid chars 'k' at the end of expression '192kk'` 并让整条命令失败。
  const bitrate = kbps || "192k";
  switch (target) {
    case "m4a":
      return ["-c:a", "aac", "-b:a", bitrate];
    case "wav":
      return ["-c:a", "pcm_s16le"];
    case "flac":
      return ["-c:a", "flac"];
    case "opus":
      // 这里必须用 FFmpeg 原生 opus 编码器，不能用 libopus。
      // 实测：这份 ffmpeg-core.wasm 里的 libopus 在 ogg / opus / mka / webm 任一封装下
      // 都会直接崩（RuntimeError: memory access out of bounds），换码率、加 -ar/-ac 都救不回来；
      // 原生 opus 编码器正常出流。代价是同码率下音质不如参考实现 libopus —— 已如实写进 UI 说明。
      return ["-c:a", "opus", "-strict", "experimental", "-b:a", bitrate];
    case "vorbis":
      return ["-c:a", "libvorbis", "-q:a", "5"];
    case "aiff":
      return ["-c:a", "pcm_s16be"];
    case "mp3":
    default:
      return ["-c:a", "libmp3lame", "-b:a", bitrate];
  }
}

function compressionCrf(quality) {
  if (quality === "low") return "30";
  if (quality === "high") return "18";
  return "23";
}

function scaleFilter(scale) {
  if (scale === "720p") return "scale=1280:-2";
  if (scale === "480p") return "scale=854:-2";
  if (scale === "360p") return "scale=640:-2";
  return "";
}

function convertCodecPreview(options) {
  if (options.convertFormat === "mp3") return " -vn -c:a libmp3lame -q:a 2";
  if (options.convertFormat === "wav") return " -vn -c:a pcm_s16le";

  const vc =
    options.convertVideoCodec === "copy"
      ? "copy"
      : options.convertFormat === "webm"
        ? "libvpx -deadline realtime -cpu-used 8 -row-mt 1 -crf 32 -b:v 1M"
        : "libx264 -preset veryfast -crf 23";
  const ac =
    options.convertAudioCodec === "copy"
      ? "copy"
      : options.convertFormat === "webm"
        ? "libvorbis"
        : "aac";
  return ` -c:v ${vc} -c:a ${ac}`;
}

function videoCodecArgs(options) {
  if (options.convertVideoCodec === "copy") return ["-c:v", "copy"];
  if (options.convertFormat === "webm") {
    return ["-c:v", "libvpx", "-deadline", "realtime", "-cpu-used", "8", "-row-mt", "1", "-crf", "32", "-b:v", "1M"];
  }
  return ["-c:v", "libx264", "-preset", "veryfast", "-crf", "23"];
}

function audioCodecArgs(options) {
  if (options.convertAudioCodec === "copy") return ["-c:a", "copy"];
  if (options.convertFormat === "webm") return ["-c:a", "libvorbis"];
  return ["-c:a", "aac"];
}

function roundedCrop(options) {
  return {
    w: Math.round(options.cropW),
    h: Math.round(options.cropH),
    x: Math.round(options.cropX),
    y: Math.round(options.cropY)
  };
}
