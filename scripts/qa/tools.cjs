#!/usr/bin/env node
/**
 * HappyConvert — 浏览器端工具功能实测（Playwright）
 *
 * 结构/样式/SEO 全绿 ≠ 工具能用。本脚本驱动真实浏览器，把样例媒体喂进上传口，
 * 点真实按钮，把下载产物落地磁盘，再用 ffprobe 解码测量——只信产出物。
 *
 * 为什么不依赖 DOM 日志做业务断言：2026-09-19 之前 console-card 是打不开的死 UI
 * （showLogs 默认 false 且无 setter），现在开关已补回，但日志内容是 ffmpeg 原文，
 * 不适合当断言依据。业务断言一律基于下载产物本身 + 设置面板里可见的受控值；
 * 控制台另做一组独立的可达性断言（开关能展开、能收起、展开后终端有内容）。
 *
 * 为什么打生产构建而不是 vite dev：vite 8 的 transform 中间件会拦截对 /public 下
 * `/ffmpeg/ffmpeg-core.js` 的动态 import，引擎起不来。用 scripts/qa/serve-dist.cjs
 * 托管生产产物（并镜像 vercel.json 的 COOP/COEP）才是真实部署形态。
 *
 * 用法：
 *   DIST_DIR=/tmp/hc-dist-check node scripts/qa/serve-dist.cjs 4180 &
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/tools.cjs            # 全部
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/tools.cjs merge      # 只跑合并
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/tools.cjs audio      # 只跑音频
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const BASE = process.env.QA_BASE || "http://127.0.0.1:4180";
const SAMPLES = process.env.QA_SAMPLES || "/tmp/hc-samples";

const FFMPEG = process.env.FFMPEG_BIN || "/opt/homebrew/bin/ffmpeg";
const FFPROBE = process.env.FFPROBE_BIN || "/opt/homebrew/bin/ffprobe";

// 首个用例要吃掉 32MB WASM 的加载与编译，之后明显快很多
const T_FIRST = Number(process.env.QA_T_FIRST || 300000);
const T_NEXT = Number(process.env.QA_T_NEXT || 120000);

const filter = process.argv[2] || "";
const wantMerge = !filter || filter.includes("merge");
const wantAudio = !filter || filter.includes("audio");

// 每次运行写独立子目录，绝不批量删除已有产物：
// 沙箱的 safe-delete 守卫会在一次操作删除 ≥50 项时直接抛错（上一轮的 out/ 就踩过）。
const runStamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const OUT = path.join(__dirname, "out", runStamp);
fs.mkdirSync(OUT, { recursive: true });

const results = [];
const pageErrors = [];
const ok = (name, detail) => { results.push({ s: "PASS", name }); console.log(`[PASS] ${name} — ${detail}`); };
const bad = (name, detail) => { results.push({ s: "FAIL", name, detail }); console.log(`[FAIL] ${name} — ${detail}`); };

/* ---------------- 样例媒体 ---------------- */

function ensureSamples() {
  fs.mkdirSync(SAMPLES, { recursive: true });
  const ff = (args) => execFileSync(FFMPEG, ["-y", "-v", "error", ...args], { stdio: "pipe" });
  const spec = [
    // 同规格对：流拷贝路径应成立
    ["clipA.mp4", ["-f", "lavfi", "-i", "testsrc=size=640x360:rate=30:duration=2", "-f", "lavfi", "-i", "sine=frequency=440:duration=2", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "ultrafast", "-c:a", "aac", "-ar", "48000", "-ac", "2"]],
    ["clipB.mp4", ["-f", "lavfi", "-i", "testsrc2=size=640x360:rate=30:duration=2", "-f", "lavfi", "-i", "sine=frequency=660:duration=2", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "ultrafast", "-c:a", "aac", "-ar", "48000", "-ac", "2"]],
    // 异规格：分辨率/帧率/采样率全不同 —— 流拷贝应失败，触发自动回退
    ["clipWide.mp4", ["-f", "lavfi", "-i", "testsrc=size=1280x720:rate=25:duration=2", "-f", "lavfi", "-i", "sine=frequency=330:duration=2", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "ultrafast", "-c:a", "aac", "-ar", "44100", "-ac", "2"]],
    ["tone.m4a", ["-f", "lavfi", "-i", "sine=frequency=523:duration=3", "-c:a", "aac", "-b:a", "192k", "-ar", "44100", "-ac", "2"]],
    ["tone.wav", ["-f", "lavfi", "-i", "sine=frequency=784:duration=3", "-c:a", "pcm_s16le", "-ar", "44100", "-ac", "2"]],
  ];
  for (const [name, args] of spec) {
    const p = path.join(SAMPLES, name);
    if (!fs.existsSync(p)) ff([...args, p]);
  }
  // 垃圾文件：把文本塞进 .mp4，用于验证不会产出伪成功产物
  const junk = path.join(SAMPLES, "junk.mp4");
  if (!fs.existsSync(junk)) fs.writeFileSync(junk, "this is definitely not a video file\n".repeat(40));
}

function probe(file) {
  const out = execFileSync(FFPROBE, [
    "-v", "error",
    "-show_entries", "format=duration,format_name",
    "-show_entries", "stream=codec_name,codec_type,width,height,sample_rate,channels",
    "-of", "json", file,
  ], { stdio: "pipe" }).toString();
  const j = JSON.parse(out);
  const v = (j.streams || []).find((s) => s.codec_type === "video");
  const a = (j.streams || []).find((s) => s.codec_type === "audio");
  return {
    duration: parseFloat(j.format?.duration || "0"),
    formatName: j.format?.format_name || "",
    video: v ? { codec: v.codec_name, w: v.width, h: v.height } : null,
    audio: a ? { codec: a.codec_name, rate: a.sample_rate, ch: a.channels } : null,
  };
}

const size = (f) => fs.statSync(f).size;
const magic = (f, n = 12) => fs.readFileSync(f).subarray(0, n).toString("hex");
const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

/* ---------------- 浏览器可执行文件解析 ----------------
 * playwright 包版本与本地已缓存 chromium 构建号常常对不上（1.62.1 要 1234，
 * 缓存里只有 1200/1217/1223/1243）。默认先按 playwright 自己解析，
 * 解析不到就退而扫描 ms-playwright 缓存，挑最新的一版 headless shell。
 */
function resolveLocalChromium() {
  if (process.env.QA_CHROMIUM) return process.env.QA_CHROMIUM;
  const root = path.join(process.env.HOME || "", "Library/Caches/ms-playwright");
  if (!fs.existsSync(root)) return undefined;
  const builds = fs.readdirSync(root)
    .map((d) => /^chromium_headless_shell-(\d+)$/.exec(d))
    .filter(Boolean)
    .map((m) => ({ dir: m[0], n: Number(m[1]) }))
    .sort((a, b) => b.n - a.n);
  for (const b of builds) {
    const exe = path.join(root, b.dir, "chrome-headless-shell-mac-arm64/chrome-headless-shell");
    if (fs.existsSync(exe)) return exe;
  }
  return undefined;
}

/* ---------------- 页面动作 ---------------- */

/**
 * 装一个引擎就绪探针（不改应用代码，只在测试期包装 Worker）。
 *
 * 为什么需要：selectFile/addMergeFiles 会在 +200ms 自动触发一次 loadFFmpeg()，
 * 而 processMedia 在 !isLoaded 时又会显式 await loadFFmpeg()。loadFFmpeg 只按
 * isLoaded 守卫、没有「加载中」守卫，且会先 terminate 掉 ffmpegRef.current ——
 * 所以在这 200ms 窗口内点运行，会把正在加载的实例掐掉，任务静默什么都不做。
 * 人类用户被按钮的 disabled（loadFFmpeg 开头就 setIsWorking(true)）挡住，
 * 但自动化点得太快。这里等 load 完成再点，才是人类的真实时序。
 */
async function installEngineProbe(context) {
  await context.addInitScript(() => {
    window.__hcEngineReady = false;
    const OW = window.Worker;
    window.Worker = class extends OW {
      constructor(url, opts) {
        super(url, opts);
        this.addEventListener("message", (e) => {
          if (e.data && e.data.type === "LOAD") window.__hcEngineReady = true;
        });
      }
      terminate() {
        window.__hcEngineReady = false;
        return super.terminate();
      }
    };
  });
}

async function waitEngineReady(page, timeoutMs) {
  await page.waitForFunction(() => window.__hcEngineReady === true, null, { timeout: timeoutMs });
}

/** 打开某个工具页并喂入文件，返回页面 */
async function openTool(page, { route, files, inputSelector, expectClips }) {
  await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
  await page.locator(inputSelector).waitFor({ state: "attached", timeout: 30000 });
  await page.locator(inputSelector).setInputFiles(files);
  // 等 React 状态落地：合并看队列条目数，其它看上传态是否消失
  await page.waitForFunction(
    ([sel, n]) => {
      if (sel === "#mergeUploader") return document.querySelectorAll("#workspace-stage ol li").length === n;
      const zone = document.querySelector("#workspace-stage");
      return !!zone && !zone.querySelector(".upload-zone");
    },
    [inputSelector, expectClips ?? files.length],
    { timeout: 30000 }
  );
}

const runBtn = (page) => page.locator(".action-main-row .studio-btn-primary");
const modeSelect = (page) => page.locator(".tool-settings-panel select").first();
const panelSelects = (page) => page.locator(".tool-settings-panel select");

async function clickRunAndWait(page, timeoutMs) {
  // 先等引擎就绪（真实用户此时点不动按钮），避免踩到 loadFFmpeg 的并发竞态
  await waitEngineReady(page, timeoutMs);
  const t0 = Date.now();
  await runBtn(page).click();
  await page.waitForSelector(".latest-output-preview-container", { timeout: timeoutMs });
  return Date.now() - t0;
}

/** 点下载按钮，把产物落到磁盘 */
async function grabDownload(page) {
  const [dl] = await Promise.all([
    page.waitForEvent("download", { timeout: 60000 }),
    page.locator(".latest-output-actions .studio-btn-primary").click(),
  ]);
  const suggested = dl.suggestedFilename();
  const dest = path.join(OUT, `${Date.now()}-${suggested}`);
  await dl.saveAs(dest);
  return { dest, suggested };
}

/** 跑一个完整作业：喂文件 → 可选的设置调整 → 运行 → 下载 */
async function driveJob(page, { route, files, inputSelector, configure, expectClips, timeoutMs }) {
  await openTool(page, { route, files, inputSelector, expectClips });
  if (configure) await configure(page);
  const ms = await clickRunAndWait(page, timeoutMs);
  const out = await grabDownload(page);
  return { ...out, ms };
}

/* ---------------- 用例 ---------------- */

async function main() {
  ensureSamples();
  console.log(`base:    ${BASE}`);
  console.log(`samples: ${SAMPLES}\n`);

  let browser;
  const exe = resolveLocalChromium();
  const launchArgs = { args: ["--autoplay-policy=no-user-gesture-required"] };
  try {
    browser = await chromium.launch(launchArgs);
  } catch (e) {
    if (!exe) throw e;
    console.log(`  [note] playwright 自带解析失败，改用本地缓存构建《${path.basename(path.dirname(path.dirname(exe)))}》`);
    browser = await chromium.launch({ ...launchArgs, executablePath: exe });
  }
  const context = await browser.newContext({ acceptDownloads: true, viewport: { width: 1440, height: 1000 } });
  await installEngineProbe(context);
  const page = await context.newPage();
  // 未捕获异常从「只打印」升级为硬断言：修复 terminate().catch() 之后，每个作业
  // 都不该再以一次 TypeError 收尾，页面里出现任何 pageerror 都是真回归。
  page.on("pageerror", (e) => pageErrors.push(e.message));

  // 首个用例吃 WASM 加载成本
  let firstJobDone = false;
  const tFor = () => (firstJobDone ? T_NEXT : T_FIRST);
  const markDone = () => { firstJobDone = true; };

  /* ---- 控制台面板可达性 ---- */
  // styles.css 里 .show-logs-toggle 的完整样式（含 margin-right:16px，标明它本该在
  // 进度条与运行按钮之间）一直都在，但 markup 从未引用过它，showLogs 也没有 setter，
  // 导致终端 / CLI 预览条 / 错误详情全是打不开的死 UI。2026-09-19 补回开关与自动展开。
  await page.goto(BASE + "/convert-audio/", { waitUntil: "domcontentloaded" });
  try {
    const collapsed = await page.evaluate(() => ({
      toggle: document.querySelectorAll(".show-logs-toggle").length,
      cards: document.querySelectorAll(".console-card").length,
    }));
    if (collapsed.toggle === 0) {
      bad("控制台开关可达", "页面上找不到 .show-logs-toggle 开关");
    } else if (collapsed.cards !== 0) {
      bad("控制台开关可达", `默认应处于收起状态，却已渲染 ${collapsed.cards} 个 console-card`);
    } else {
      await page.locator(".show-logs-toggle input[type=checkbox]").check();
      await page.waitForTimeout(800);
      const expanded = await page.evaluate(() => ({
        cards: document.querySelectorAll(".console-card").length,
        tabs: document.querySelectorAll(".console-tab").length,
        lines: document.querySelectorAll(".log-line").length,
        cli: (document.querySelector(".cli-code") || {}).textContent || "",
      }));
      if (expanded.cards === 1 && expanded.tabs >= 2 && expanded.lines > 0 && expanded.cli.trim()) {
        ok("控制台开关可达", `勾选后 console-card=1 tab=${expanded.tabs} 日志行=${expanded.lines} CLI 预览长度=${expanded.cli.length}`);
      } else {
        bad("控制台开关可达", `勾选后仍不完整 ${JSON.stringify({ ...expanded, cli: expanded.cli.slice(0, 40) })}`);
      }
      await page.locator(".show-logs-toggle input[type=checkbox]").uncheck();
      await page.waitForTimeout(400);
      const recollapsed = await page.locator(".console-card").count();
      if (recollapsed !== 0) bad("控制台开关可收起", `取消勾选后仍渲染 ${recollapsed} 个 console-card`);
      else ok("控制台开关可收起", "取消勾选后 console-card 隐藏");
    }
  } catch (e) {
    bad("控制台开关可达", `异常: ${e.message.split("\n")[0]}`);
  }

  /* ---- T1: 同规格片段 → 流拷贝合并 ---- */
  if (wantMerge) {
    try {
      const a = path.join(SAMPLES, "clipA.mp4"), b = path.join(SAMPLES, "clipB.mp4");
      const sum = size(a) + size(b);
      const r = await driveJob(page, {
        route: "/merge-video/",
        files: [a, b],
        inputSelector: "#mergeUploader",
        timeoutMs: tFor(),
      });
      markDone();
      const p = probe(r.dest);
      const mode = await modeSelect(page).inputValue();
      const sz = size(r.dest);
      const durOk = Math.abs(p.duration - 4) < 0.3;
      const resOk = p.video?.w === 640 && p.video?.h === 360;
      const codecOk = p.video?.codec === "h264";
      const audioOk = !!p.audio;
      // 流拷贝保真：产物体积应接近两段之和（-c copy 不重新编码）
      const sizeRatio = sz / sum;
      const sizeOk = sizeRatio > 0.9 && sizeRatio < 1.15;
      if (durOk && resOk && codecOk && audioOk && mode === "copy" && sizeOk) {
        ok("merge 流拷贝合并", `640x360 h264+aac dur=${p.duration.toFixed(2)}s(期望4) 体积 ${kb(sz)} vs 输入和 ${kb(sum)} (比值 ${sizeRatio.toFixed(2)}) mode=${mode}`);
      } else {
        bad("merge 流拷贝合并", `dur=${p.duration.toFixed(2)} res=${p.video?.w}x${p.video?.h} codec=${p.video?.codec} audio=${!!p.audio} mode=${mode} 体积比=${sizeRatio.toFixed(2)}`);
      }
    } catch (e) {
      markDone();
      bad("merge 流拷贝合并", `异常: ${e.message.split("\n")[0]}`);
    }

    /* ---- T2: 异规格片段 → 自动回退统一重编码 ---- */
    try {
      const a = path.join(SAMPLES, "clipA.mp4"), wide = path.join(SAMPLES, "clipWide.mp4");
      const r = await driveJob(page, {
        route: "/merge-video/",
        files: [a, wide],
        inputSelector: "#mergeUploader",
        timeoutMs: tFor(),
      });
      markDone();
      const p = probe(r.dest);
      const mode = await modeSelect(page).inputValue();
      const durOk = Math.abs(p.duration - 4) < 0.3;
      const resOk = p.video?.w === 640 && p.video?.h === 360; // 首片定义目标规格
      const audioOk = !!p.audio;
      if (durOk && resOk && audioOk && mode === "reencode") {
        ok("merge 自动回退重编码", `${p.video.w}x${p.video.h} dur=${p.duration.toFixed(2)}s(期望4) mode→${mode} 产物 ${kb(size(r.dest))}`);
      } else {
        bad("merge 自动回退重编码", `dur=${p.duration.toFixed(2)} res=${p.video?.w}x${p.video?.h} audio=${audioOk} mode=${mode}（期望 reencode）`);
      }
    } catch (e) {
      markDone();
      bad("merge 自动回退重编码", `异常: ${e.message.split("\n")[0]}`);
    }

    /* ---- T3: 队列增删改序（"添加类按钮必须验数量递增"） ---- */
    try {
      await page.goto(BASE + "/merge-video/", { waitUntil: "domcontentloaded" });
      const uploader = page.locator("#mergeUploader");
      await uploader.waitFor({ state: "attached" });
      const clipCount = () => page.locator("#workspace-stage ol li").count();
      const readOrder = () => page.locator("#workspace-stage ol li span[title]").evaluateAll((els) => els.map((e) => e.getAttribute("title")));

      await uploader.setInputFiles(path.join(SAMPLES, "clipA.mp4"));
      await page.waitForFunction(() => document.querySelectorAll("#workspace-stage ol li").length === 1);
      await uploader.setInputFiles(path.join(SAMPLES, "clipB.mp4"));
      await page.waitForFunction(() => document.querySelectorAll("#workspace-stage ol li").length === 2);
      await uploader.setInputFiles(path.join(SAMPLES, "clipWide.mp4"));
      await page.waitForFunction(() => document.querySelectorAll("#workspace-stage ol li").length === 3);
      const afterAdd = await clipCount();

      const before = await readOrder();
      await page.locator('#workspace-stage ol li button[title="Move down"]').first().click();
      const afterDown = await readOrder();
      const swaps = afterDown[0] === before[1] && afterDown[1] === before[0];

      await page.locator('#workspace-stage ol li button[title="Remove"]').nth(1).click();
      await page.waitForFunction(() => document.querySelectorAll("#workspace-stage ol li").length === 2);
      const afterRemove = await readOrder();

      await page.locator('#workspace-stage ol li button[title="Remove"]').first().click();
      await page.locator('#workspace-stage ol li button[title="Remove"]').first().click();
      await page.waitForFunction(() => !!document.querySelector("#workspace-stage .upload-zone"));

      if (afterAdd === 3 && swaps && afterRemove.length === 2) {
        ok("merge 队列增删改序", `累加 1→2→3；下移 [${before.slice(0, 2).join(",")}]→[${afterDown.slice(0, 2).join(",")}]；移除后剩 ${afterRemove.length}；清空回到上传态`);
      } else {
        bad("merge 队列增删改序", `累加后=${afterAdd}(期望3) 下移生效=${swaps} 移除后=${afterRemove.length}(期望2)`);
      }
    } catch (e) {
      bad("merge 队列增删改序", `异常: ${e.message.split("\n")[0]}`);
    }
  }

  /* ---- T4-T7: 音频格式转换目标格式矩阵 ---- */
  if (wantAudio) {
    const targets = [
      { value: "mp3", from: "tone.m4a", label: "M4A→MP3", ext: "mp3", codec: "mp3", magic: ["494433", "fffb", "fffa"] },
      { value: "m4a", from: "tone.wav", label: "WAV→M4A", ext: "m4a", codec: "aac", magicIncludes: "66747970" },
      { value: "wav", from: "tone.m4a", label: "M4A→WAV", ext: "wav", codec: "pcm_s16le", magic: ["52494646"] },
      { value: "flac", from: "tone.wav", label: "WAV→FLAC", ext: "flac", codec: "flac", magic: ["664c6143"] },
      { value: "opus", from: "tone.wav", label: "WAV→OGG/Opus", ext: "ogg", codec: "opus", magic: ["4f676753"] },
      { value: "vorbis", from: "tone.wav", label: "WAV→OGG/Vorbis", ext: "ogg", codec: "vorbis", magic: ["4f676753"] },
      { value: "aiff", from: "tone.m4a", label: "M4A→AIFF", ext: "aiff", codec: "pcm_s16be", magic: ["464f524d"] }
    ];
    for (const t of targets) {
      try {
        const r = await driveJob(page, {
          route: "/convert-audio/",
          files: [path.join(SAMPLES, t.from)],
          inputSelector: "#fileUploader",
          configure: async (pg) => { await panelSelects(pg).first().selectOption(t.value); },
          timeoutMs: tFor(),
        });
        markDone();
        const p = probe(r.dest);
        const m = magic(r.dest);
        const extOk = r.suggested.toLowerCase().endsWith("." + t.ext);
        const codecOk = p.audio?.codec === t.codec;
        const magicOk = t.magicIncludes ? m.includes(t.magicIncludes) : t.magic.some((pre) => m.startsWith(pre));
        const durOk = Math.abs(p.duration - 3) < 0.3;
        const noVideo = !p.video;
        if (extOk && codecOk && magicOk && durOk && noVideo) {
          ok(`audio ${t.label}`, `${r.suggested} codec=${p.audio.codec} ${p.audio.rate}Hz dur=${p.duration.toFixed(2)}s(期望3) magic=${m.slice(0, 8)} 耗时 ${(r.ms / 1000).toFixed(1)}s`);
        } else {
          bad(`audio ${t.label}`, `file=${r.suggested} codec=${p.audio?.codec}(期望${t.codec}) 扩展名=${extOk} magic=${m.slice(0, 8)}(${magicOk}) dur=${p.duration.toFixed(2)} 含视频轨=${!noVideo}`);
        }
      } catch (e) {
        markDone();
        bad(`audio ${t.label}`, `异常: ${e.message.split("\n")[0]}`);
      }
    }

    /* ---- T8: 垃圾文件不得产出伪成功产物 ---- */
    try {
      await page.goto(BASE + "/convert-audio/", { waitUntil: "domcontentloaded" });
      await page.locator("#fileUploader").waitFor({ state: "attached" });
      await page.locator("#fileUploader").setInputFiles(path.join(SAMPLES, "junk.mp4"));
      await waitEngineReady(page, tFor());
      await runBtn(page).click();
      await page.waitForTimeout(20000);
      const hasOutput = await page.locator(".latest-output-preview-container").count();
      const galleryCount = await page.locator(".gallery-item").count();
      if (hasOutput === 0 && galleryCount === 0) {
        ok("垃圾文件不产出伪成功", `20s 内无产物卡片、画廊为空（控制台会自动展开失败原因，见「控制台开关可达」用例）`);
      } else {
        bad("垃圾文件不产出伪成功", `竟然产出了产物 卡片=${hasOutput} 画廊=${galleryCount}`);
      }
    } catch (e) {
      bad("垃圾文件不产出伪成功", `异常: ${e.message.split("\n")[0]}`);
    }
  }

  /* ---- T9: 合并单片段必须被拦截 ---- */
  if (wantMerge) {
    try {
      await openTool(page, {
        route: "/merge-video/",
        files: [path.join(SAMPLES, "clipA.mp4")],
        inputSelector: "#mergeUploader",
        expectClips: 1,
      });
      await runBtn(page).click();
      await page.waitForTimeout(6000);
      const hasOutput = await page.locator(".latest-output-preview-container").count();
      const galleryCount = await page.locator(".gallery-item").count();
      if (hasOutput === 0 && galleryCount === 0) {
        ok("合并单片段被拦截", "只放 1 段时不启动任务、不产生产物");
      } else {
        bad("合并单片段被拦截", `卡片=${hasOutput} 画廊=${galleryCount}`);
      }
    } catch (e) {
      bad("合并单片段被拦截", `异常: ${e.message.split("\n")[0]}`);
    }
  }

  /* ---- 引擎单次加载 + 无运行期噪音 ---- */
  // 控制台可达之后，两条以前看不见的噪音变成用户可见，因此固化成回归线：
  //  1) addMergeFiles 会触发两次 loadFFmpeg（selectFile 一次、自己 setTimeout 一次），
  //     后者 terminate 掉前者正在加载的实例 → 红色 "Failed to initialize FFmpeg WASM"。
  //  2) emscripten 在每次作业收尾打印裸的 "Aborted()"，在成功路径上制造崩溃错觉。
  if (wantAudio) {
    try {
      await openTool(page, {
        route: "/convert-audio/",
        files: [path.join(SAMPLES, "tone.m4a")],
        inputSelector: "#fileUploader",
      });
      await page.locator(".show-logs-toggle input[type=checkbox]").check();
      await clickRunAndWait(page, tFor());
      const lines = await page.evaluate(() =>
        [...document.querySelectorAll(".log-line")].map((e) => e.textContent)
      );
      const loads = lines.filter((l) => l.includes("Loading & compiling FFmpeg core")).length;
      const terminateNoise = lines.filter((l) => /Failed to initialize FFmpeg WASM/.test(l));
      const abortedNoise = lines.filter((l) => /^Aborted\(\)$/.test(l.trim()));
      const problems = [];
      if (loads !== 1) problems.push(`引擎加载 ${loads} 次（应为 1）`);
      if (terminateNoise.length) problems.push(`terminate 噪音 ${terminateNoise.length} 条`);
      if (abortedNoise.length) problems.push(`Aborted() 噪音 ${abortedNoise.length} 条`);
      if (problems.length) bad("引擎单次加载且无运行期噪音", problems.join("；"));
      else ok("引擎单次加载且无运行期噪音", `加载 1 次，无 terminate/Aborted 噪音（终端共 ${lines.length} 行）`);
    } catch (e) {
      bad("引擎单次加载且无运行期噪音", `异常: ${e.message.split("\n")[0]}`);
    }
  }

  /* ---- 全流程零未捕获异常 ---- */
  // 修复前 App.jsx 有三处 terminate().catch()：@ffmpeg/ffmpeg 0.12.15 的 terminate 是
  // 箭头函数、隐式返回 undefined，链式 .catch 必然抛 TypeError。其中 processMedia 的
  // finally 那处让每个成功作业都以一次未捕获异常收尾。这里把它固化成回归线。
  if (pageErrors.length === 0) {
    ok("全流程零未捕获异常", "整轮跑完没有任何 pageerror");
  } else {
    bad("全流程零未捕获异常", `${pageErrors.length} 处：${pageErrors.slice(0, 3).map((m) => m.slice(0, 90)).join(" | ")}`);
  }

  await browser.close();

  const fails = results.filter((r) => r.s === "FAIL");
  console.log("\n================ 汇总 ================");
  console.log(`通过 ${results.length - fails.length}/${results.length}`);
  if (fails.length) {
    console.log("失败项：");
    fails.forEach((f) => console.log(`  - ${f.name}: ${f.detail}`));
  }
  console.log(`产物目录: ${OUT}`);
  process.exit(fails.length ? 1 : 0);
}

main().catch((e) => {
  console.error("runner crashed:", e);
  process.exit(2);
});
