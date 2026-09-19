#!/usr/bin/env node
/**
 * HappyConvert — 顶部 Tools 下拉框外观/结构检查
 *
 * 为什么单独写一个：下拉框是纯视觉件，DOM 断言只能证明「渲染了」，
 * 证明不了「好看」。所以要同时量三件事：
 *   1. 结构 —— 分组数、组内条目数、中英标签；
 *   2. 顺序 —— 必须与 TOOL_CATEGORIES / TOOL_PAGES 一致；
 *   3. 几何 —— 菜单有没有超出视口、每行高度是否统一（行高参差正是这次要修的病）。
 * 再落 4 张截图（中英 × 深浅）供人眼复核。
 *
 * 用法：
 *   DIST_DIR=/tmp/hc-nav-check PORT=4180 node scripts/qa/serve-dist.cjs 4180 &
 *   DIST_DIR=/tmp/hc-nav-check node scripts/qa/nav-check.cjs
 */

const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE = process.env.QA_BASE || `http://127.0.0.1:${process.env.PORT || 4180}`;
// 放在 scripts/qa/out/ 下 —— 那条路径已在 .gitignore 里（截图属于可重建产物）
const OUT = path.resolve(__dirname, "out/nav");
fs.mkdirSync(OUT, { recursive: true });

const EXPECTED = [
  { zh: "剪辑与合成", en: "Edit & Combine", items: ["视频剪切", "画面裁切", "视频合并"] },
  { zh: "格式转换", en: "Format Conversion", items: ["视频格式转换", "视频转 GIF", "音频格式转换"] },
  { zh: "提取与压缩", en: "Extract & Compress", items: ["视频压缩", "视频提取音频"] },
];

const problems = [];
const note = (m) => problems.push(m);

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

/** 打开下拉框并读取结构 + 几何 */
async function inspect(page) {
  await page.locator(".nav-dropdown-trigger").click();
  await page.locator(".nav-dropdown-menu.active").waitFor({ state: "visible", timeout: 10000 });
  await page.waitForTimeout(250); // 等 200ms 的 translateY 过渡跑完再量

  return page.evaluate(() => {
    const menu = document.querySelector(".nav-dropdown-menu");
    const groups = [...menu.querySelectorAll(".nav-dropdown-group")].map((g) => ({
      label: g.querySelector(".nav-dropdown-group-label")?.textContent.trim() || "",
      items: [...g.querySelectorAll(".nav-dropdown-item")].map((a) => ({
        title: a.querySelector("strong")?.textContent.trim() || "",
        height: Math.round(a.getBoundingClientRect().height),
        descLines: a.querySelector("small")
          ? Math.round(a.querySelector("small").getBoundingClientRect().height / 13)
          : 0,
      })),
    }));
    const r = menu.getBoundingClientRect();
    return {
      groups,
      box: { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), width: Math.round(r.width) },
      viewport: { w: window.innerWidth, h: window.innerHeight },
      scrollable: menu.scrollHeight > menu.clientHeight + 1,
    };
  });
}

async function main() {
  let browser;
  const exe = resolveLocalChromium();
  try {
    browser = await chromium.launch();
  } catch (e) {
    if (!exe) throw e;
    browser = await chromium.launch({ executablePath: exe });
  }

  const shots = [];
  for (const theme of ["dark", "light"]) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();

    for (const lang of ["en", "zh"]) {
      const route = lang === "zh" ? "/zh/" : "/";
      await page.goto(BASE + route, { waitUntil: "domcontentloaded" });
      await page.locator(".nav-dropdown-trigger").first().waitFor({ state: "visible", timeout: 15000 });
      if (theme === "light" && !(await page.evaluate(() => document.body.classList.contains("light-theme")))) {
        await page.locator(".theme-toggle-btn").click();
        await page.waitForTimeout(150);
      }

      const found = await inspect(page);
      const labels = found.groups.map((g) => g.label);
      const counts = found.groups.map((g) => g.items.length);

      const expectedLabels = EXPECTED.map((g) => g[lang]);
      if (JSON.stringify(labels) !== JSON.stringify(expectedLabels)) {
        note(`${theme}/${lang}: 分组标签或顺序不符 —— 期望 ${expectedLabels.join(" | ")}，实际 ${labels.join(" | ")}`);
      }
      if (found.groups.length !== EXPECTED.length) {
        note(`${theme}/${lang}: 分组数 ${found.groups.length}，期望 ${EXPECTED.length}`);
      }
      const total = counts.reduce((a, b) => a + b, 0);
      if (total !== 8) note(`${theme}/${lang}: 菜单条目共 ${total} 条，期望 8 条`);

      found.groups.forEach((g, i) => {
        const expect = EXPECTED[i];
        if (!expect) return;
        if (g.items.length !== expect.items.length) {
          note(`${theme}/${lang}: 第 ${i + 1} 组「${g.label}」有 ${g.items.length} 条，期望 ${expect.items.length}`);
        }
      });

      // 行高统一：这一版把描述裁到 2 行就是为了压掉参差
      const heights = found.groups.flatMap((g) => g.items.map((it) => it.height));
      const spread = Math.max(...heights) - Math.min(...heights);
      if (spread > 8) note(`${theme}/${lang}: 菜单行高不齐，最高 ${Math.max(...heights)}px / 最低 ${Math.min(...heights)}px`);

      // 视口内：底部溢出会让人看不到最后一组
      if (found.box.bottom > found.viewport.h - 8) {
        note(`${theme}/${lang}: 菜单底部 ${found.box.bottom}px 超出视口 ${found.viewport.h}px`);
      }
      if (found.box.left < 0 || found.box.left + found.box.width > found.viewport.w) {
        note(`${theme}/${lang}: 菜单横向超出视口（left ${found.box.left}, width ${found.box.width}）`);
      }

      const shot = path.join(OUT, `dropdown-${lang}-${theme}.png`);
      await page.locator(".nav-dropdown-menu").screenshot({ path: shot });
      shots.push(shot);

      const head = found.groups
        .map((g) => `${g.label}(${g.items.length}) → ${g.items.map((it) => it.title).join(" / ")}`)
        .join("\n                ");
      console.log(`${theme}/${lang}  ${head}`);
      console.log(`   box ${found.box.width}×${found.box.bottom - found.box.top} @(${found.box.left},${found.box.top})  行高 ${Math.min(...heights)}–${Math.max(...heights)}px  scroll=${found.scrollable}`);
    }
    await context.close();
  }

  /* ------------------------------- 移动端抽屉：同一套分类 ------------------------------- */
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
    const page = await context.newPage();
    for (const lang of ["en", "zh"]) {
      await page.goto(BASE + (lang === "zh" ? "/zh/" : "/"), { waitUntil: "domcontentloaded" });
      await page.locator(".mobile-menu-toggle").click();
      await page.locator(".mobile-nav-sheet").waitFor({ state: "visible", timeout: 10000 });
      await page.waitForTimeout(200);
      const labels = await page.$$eval(".mobile-nav-section > p", (ps) => ps.map((p) => p.textContent.trim()));
      // 最后一段是「内容 / Content」，工具分组在前
      const toolLabels = labels.slice(0, EXPECTED.length);
      const expectedLabels = EXPECTED.map((g) => g[lang]);
      if (JSON.stringify(toolLabels) !== JSON.stringify(expectedLabels)) {
        note(`mobile/${lang}: 抽屉分组不符 —— 期望 ${expectedLabels.join(" | ")}，实际 ${toolLabels.join(" | ")}`);
      }
      const links = await page.$$eval(".mobile-tool-link", (as) => as.length);
      if (links !== 8) note(`mobile/${lang}: 抽屉工具条目 ${links} 条，期望 8 条`);
      const sheetOverflow = await page.evaluate(() => {
        const sheet = document.querySelector(".mobile-nav-sheet");
        return { w: sheet.scrollWidth, vw: window.innerWidth };
      });
      if (sheetOverflow.w > sheetOverflow.vw + 1) {
        note(`mobile/${lang}: 抽屉横向溢出 ${sheetOverflow.w}px > 视口 ${sheetOverflow.vw}px`);
      }
      const shot = path.join(OUT, `mobile-sheet-${lang}.png`);
      await page.locator(".mobile-nav-sheet").screenshot({ path: shot });
      shots.push(shot);
      console.log(`mobile/${lang}  ${labels.join(" | ")}  (工具 ${links} 条)`);
      await page.locator(".mobile-nav-close").click();
      await page.waitForTimeout(150);
    }
    await context.close();
  }

  await browser.close();

  if (problems.length) {
    console.error(`\n下拉框检查失败，${problems.length} 项：`);
    for (const p of problems) console.error(`- ${p}`);
    process.exit(1);
  }
  console.log(`\n下拉框检查通过。截图 ${shots.length} 张 → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
