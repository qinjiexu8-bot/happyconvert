/**
 * 文章互链（相关阅读）的端到端检查。
 *
 * 为什么需要它：静态 HTML 里已经有互链不代表真实用户看得到 —— 预渲染的 .seo-static 版本
 * 在 JS 就绪后会被隐藏、由 React 接管。所以必须打开生产构建产物、等 React 渲染完，
 * 再确认模块存在、链接可点、点击后 SPA 路由真的跳转。
 *
 * 用法：
 *   DIST_DIR=/tmp/hc-blog-check2 PORT=4184 node scripts/qa/serve-dist.cjs 4184 &
 *   DIST_DIR=/tmp/hc-blog-check2 PORT=4184 node scripts/qa/blog-check.cjs
 *   QA_BASE=https://happyconvert.app node scripts/qa/blog-check.cjs   # 直接验线上
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const PORT = process.env.PORT || 4184;
const BASE = process.env.QA_BASE || `http://127.0.0.1:${PORT}`;
const OUT = path.resolve(__dirname, "out/blog");
fs.mkdirSync(OUT, { recursive: true });

const results = [];
const check = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`${ok ? "  PASS" : "  FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
};

/** playwright 自带的 headless shell 版本常与 package 对不上，回退到缓存里已装好的那一份 */
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

async function launchBrowser() {
  const exe = resolveLocalChromium();
  try {
    return await chromium.launch();
  } catch (e) {
    if (!exe) throw e;
    return chromium.launch({ executablePath: exe });
  }
}

(async () => {
  const browser = await launchBrowser();
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 960 } });

  for (const [lang, article, shot] of [
    ["en", "/blog/trim-video-accuracy/", "related-en-light.png"],
    ["zh", "/zh/blog/merge-video-memory-cost/", "related-zh-dark.png"]
  ]) {
    console.log(`\n[${lang}] ${article}`);
    const page = await desktop.newPage();
    await page.goto(BASE + article, { waitUntil: "domcontentloaded" });
    // 等 React 接管并把互链模块画出来
    await page.waitForSelector("nav.article-related-reading", { timeout: 20000 });

    const links = await page.locator("nav.article-related-reading li a").allTextContents();
    check("相关阅读模块渲染出 4 条", links.length === 4, `实际 ${links.length} 条`);
    check("链接标题非空", links.every((t) => t.trim().length > 4));

    // 预渲染的静态版必须已经被隐藏，否则用户会看到两份内容
    const staticVisible = await page.locator(".seo-static").isVisible().catch(() => false);
    check("预渲染静态版已隐藏（用户只看 React 版）", staticVisible === false);

    await page.locator("nav.article-related-reading").scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(OUT, shot), fullPage: false });

    // 点击第一条，确认 SPA 路由真的换了页面
    const before = page.url();
    const target = await page.locator("nav.article-related-reading li a").first().getAttribute("href");
    await page.locator("nav.article-related-reading li a").first().click();
    await page.waitForFunction((u) => window.location.pathname !== u, new URL(before).pathname, { timeout: 10000 });
    await page.waitForTimeout(600);
    const after = new URL(page.url()).pathname;
    check("点击后 SPA 路由跳转", after !== new URL(before).pathname, `${new URL(before).pathname} → ${after}`);
    check("跳转目标与链接一致", after === target, `期望 ${target}`);
    const h1 = await page.locator("h1").first().textContent();
    check("新页面正文已渲染", !!(h1 && h1.trim().length > 3), (h1 || "").trim().slice(0, 40));

    await page.close();
  }

  // 移动端：确认互链在窄屏不横向溢出
  console.log("\n[mobile]");
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const mp = await mobile.newPage();
  await mp.goto(BASE + "/blog/gif-washed-out-colors/", { waitUntil: "domcontentloaded" });
  await mp.waitForSelector("nav.article-related-reading", { timeout: 20000 });
  const overflow = await mp.evaluate(() => {
    const el = document.querySelector("nav.article-related-reading");
    return { scrollWidth: el.scrollWidth, clientWidth: el.clientWidth };
  });
  check("移动端互链模块不横向溢出", overflow.scrollWidth <= overflow.clientWidth + 1,
    `${overflow.scrollWidth} vs ${overflow.clientWidth}`);
  await mp.locator("nav.article-related-reading").scrollIntoViewIfNeeded();
  await mp.screenshot({ path: path.join(OUT, "related-mobile.png") });
  await mobile.close();

  await desktop.close();
  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} 通过；截图 → ${OUT}`);
  process.exit(failed.length ? 1 : 0);
})().catch((err) => {
  console.error("检查脚本异常:", err.message);
  process.exit(1);
});
