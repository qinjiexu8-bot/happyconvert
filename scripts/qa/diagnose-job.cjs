#!/usr/bin/env node
/**
 * HappyConvert — 「点了没反应」诊断器
 *
 * 为什么需要它：App.jsx 的 `showLogs` 默认 false 且没有 setShowLogs 调用点，
 * 整个 console-card 打不开 —— 失败时用户（和测试）都看不到任何 log/错误。
 * 这个脚本在测试期包装 Worker，把引擎侧的真实消息（LOAD / EXEC 返回码 / ERROR 正文）
 * 打到终端，用于定位「点运行后什么都没发生」这类问题。
 *
 * 用法：
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/diagnose-job.cjs <route> <sample> [targetFormat]
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/diagnose-job.cjs /convert-audio/ /tmp/hc-samples/tone.m4a mp3
 *   QA_BASE=http://127.0.0.1:4180 node scripts/qa/diagnose-job.cjs /merge-video/ clipA.mp4,clipB.mp4
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.QA_BASE || "http://127.0.0.1:4180";
const route = process.argv[2] || "/convert-audio/";
const samplesArg = process.argv[3] || "/tmp/hc-samples/tone.m4a";
const target = process.argv[4] || "";
const POLLS = Number(process.env.QA_POLLS || 12);
const STEP_MS = Number(process.env.QA_STEP_MS || 5000);

const samples = samplesArg.split(",").map((s) => (s.startsWith("/") || s.includes("/") ? s : "/tmp/hc-samples/" + s));
for (const s of samples) {
  if (!fs.existsSync(s)) {
    console.error(`样例不存在: ${s}`);
    process.exit(2);
  }
}

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

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
  } catch {
    browser = await chromium.launch({ executablePath: resolveLocalChromium() });
  }
  const ctx = await browser.newContext();
  await ctx.addInitScript(() => {
    window.__hcReady = false;
    window.__hcMsgs = [];
    const OW = window.Worker;
    window.Worker = class extends OW {
      constructor(u, o) {
        super(u, o);
        window.__hcMsgs.push("SPAWN " + String(u).split("/").pop() + " type=" + (o && o.type));
        this.addEventListener("message", (e) => {
          const d = e.data || {};
          if (d.type === "LOAD") { window.__hcReady = true; window.__hcMsgs.push("LOAD-OK"); }
          else if (d.type === "ERROR") window.__hcMsgs.push("ERROR:: " + String(d.data).slice(0, 400));
          else if (d.type === "EXEC") window.__hcMsgs.push("EXEC-RET:: " + d.data);
          else if (d.type === "LOG") {
            const m = String((d.data && d.data.message) || "");
            if (/error|invalid|failed|aborted|not found|no such|does not|unsupported/i.test(m)) {
              window.__hcMsgs.push("LOG:: " + m.slice(0, 240));
            }
          }
        });
      }
      terminate() { window.__hcReady = false; window.__hcMsgs.push("TERMINATE"); return super.terminate(); }
    };
  });

  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.log("[pageerror]", e.message.slice(0, 160)));
  page.on("requestfailed", (r) => console.log("[reqfail]", r.url().slice(-70), r.failure()?.errorText));

  await page.goto(BASE + route, { waitUntil: "domcontentloaded" });

  const inputSel = await page.evaluate(() =>
    document.querySelector("#mergeUploader") ? "#mergeUploader" : "#fileUploader");
  await page.locator(inputSel).setInputFiles(samples);
  console.log(`route=${route} input=${inputSel} files=${samples.length}`);

  try {
    await page.waitForFunction(() => window.__hcReady === true, null, { timeout: 120000 });
    console.log("引擎就绪 ✓");
  } catch {
    console.log("引擎就绪超时 ✗");
  }

  if (target) {
    const sel = page.locator(".tool-settings-panel select").first();
    await sel.selectOption(target);
    console.log(`目标格式 → ${await sel.inputValue()}`);
  }
  console.log("selects:", JSON.stringify(await page.evaluate(() =>
    [...document.querySelectorAll(".tool-settings-panel select")].map((s) => s.value))));
  console.log("button:", JSON.stringify(await page.evaluate(() => {
    const b = document.querySelector(".action-main-row .studio-btn-primary");
    return { disabled: b && b.disabled, text: b && b.textContent };
  })));

  await page.locator(".action-main-row .studio-btn-primary").click();

  for (let i = 1; i <= POLLS; i += 1) {
    await page.waitForTimeout(STEP_MS);
    const st = await page.evaluate(() => ({
      msgs: window.__hcMsgs.slice(),
      out: document.querySelectorAll(".latest-output-preview-container").length,
      gal: document.querySelectorAll(".gallery-item").length,
      prog: document.querySelector(".progress-label-row strong")?.textContent,
      btn: document.querySelector(".action-main-row .studio-btn-primary")?.textContent,
    }));
    console.log(`--- t=${((i * STEP_MS) / 1000).toFixed(0)}s out=${st.out} gal=${st.gal} progress=${st.prog} btn=${st.btn}`);
    st.msgs.forEach((m) => console.log("      " + m));
    if (st.out > 0 || st.gal > 0) { console.log("→ 有产物"); break; }
  }

  await browser.close();
})();
