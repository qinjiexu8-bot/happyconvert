#!/usr/bin/env node
/**
 * HappyConvert — 引擎预热冒烟检查（10 秒级）
 *
 * 只回答一个问题：这份构建产物里 ffmpeg WASM 引擎能不能起来？
 * 在跑完整的 tools.cjs（几个 5 分钟级超时用例）之前先用它排掉环境问题，
 * 否则挂在哪一步很难定位。
 *
 * 用法：QA_BASE=http://127.0.0.1:4180 node scripts/qa/smoke.cjs
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.env.QA_BASE || "http://127.0.0.1:4180";
const SAMPLES = process.env.QA_SAMPLES || "/tmp/hc-samples";
const WAIT_MS = Number(process.env.QA_SMOKE_WAIT || 45000);

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
  const sample = path.join(SAMPLES, "tone.m4a");
  if (!fs.existsSync(sample)) {
    console.error(`样例缺失: ${sample}（先跑一次 tools.cjs 或手动生成）`);
    process.exit(2);
  }

  let browser;
  try {
    browser = await chromium.launch();
  } catch {
    browser = await chromium.launch({ executablePath: resolveLocalChromium() });
  }
  const page = await browser.newPage();
  const failed = [];
  page.on("requestfailed", (r) => failed.push(`${r.url()} — ${r.failure()?.errorText}`));
  page.on("pageerror", (e) => console.log(`[pageerror] ${e.message}`));

  await page.goto(BASE + "/convert-audio/", { waitUntil: "domcontentloaded" });
  await page.locator("#fileUploader").setInputFiles(sample);

  // 控制台默认是收起的：`{showLogs && (...)}` 不成立时 .log-line 根本不在 DOM 里，
  // 于是本脚本会一路等到超时、报「引擎未启动」——而引擎其实早就起来了。
  // 必须先把开关打开，再开始读日志。
  await page.locator(".show-logs-toggle input").check();

  const t0 = Date.now();
  let ready = false;
  while (Date.now() - t0 < WAIT_MS) {
    const texts = await page.locator(".log-line").allInnerTexts();
    if (texts.some((t) => /engine ready|引擎|ready|success/i.test(t)) && texts.some((t) => /ffmpeg/i.test(t))) {
      ready = true;
      break;
    }
    await page.waitForTimeout(1000);
  }

  const logs = await page.locator(".log-line").allInnerTexts();
  console.log(`--- 日志 (${((Date.now() - t0) / 1000).toFixed(1)}s) ---`);
  logs.forEach((l) => console.log("  " + l.replace(/\s+/g, " ").slice(0, 130)));
  console.log(`--- 请求失败 (${failed.length}) ---`);
  failed.slice(0, 10).forEach((f) => console.log("  " + f.slice(0, 160)));

  const engineLog = logs.find((l) => /ffmpeg/i.test(l)) || "";

  await browser.close();

  if (engineLog || logs.length > 0) {
    console.log(`\n[SMOKE] 引擎有日志输出 → ${engineLog ? "已启动" : "仅有非引擎日志"}`);
    process.exit(engineLog ? 0 : 1);
  }
  console.log("\n[SMOKE] 无任何日志输出 → 引擎未启动");
  process.exit(1);
})();
