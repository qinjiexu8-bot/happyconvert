import { formatTime } from "./mediaUtils.js";

export function buildCommandPreview(options) {
  const inputName = `input.${options.inputExt || "mp4"}`;

  if (options.selectedTool === "Trim") {
    const codec = options.trimMode === "copy" ? "-c copy" : "-c:v libx264 -crf 23 -c:a aac";
    return `ffmpeg -ss ${formatTime(options.startTimeSec, true)} -to ${formatTime(options.endTimeSec, true)} -i ${inputName} ${codec} output.${options.inputExt}`;
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

  return ["-i", inputName, outputName];
}

export function getOutputFormatForTool(options) {
  if (options.selectedTool === "Trim") return options.inputExt;
  if (options.selectedTool === "Convert") return options.convertFormat;
  if (options.selectedTool === "GIF") return "gif";
  if (options.selectedTool === "Extract Audio") return options.audioExtractFormat;
  return "mp4";
}

export function getBlobTypeForFormat(format) {
  if (format === "gif") return "image/gif";
  if (format === "mp3") return "audio/mpeg";
  if (format === "wav") return "audio/wav";
  return `video/${format}`;
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
        ? "libvpx -crf 10 -b:v 1M"
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
    return ["-c:v", "libvpx", "-crf", "10", "-b:v", "1M"];
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
