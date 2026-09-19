import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_PAGES } from "../src/config/blogPages.js";
import { DEFAULT_PAGE, DOC_PAGES, TOOL_PAGES } from "../src/config/toolPages.js";
import { COPY_RULES, conservativeCopy } from "../src/lib/conservativeCopy.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

/**
 * Anything the conservative-copy rules rewrite is, by definition, a claim we
 * are not willing to stand behind. The rules live in src/lib/conservativeCopy.js
 * and are applied in `localizedPage()`, which is the single funnel that both
 * the React app and the prerenderer read from — so asserting against the
 * rewritten output proves the claim is gone for crawlers *and* for users.
 */
const rewritePatterns = [...COPY_RULES.zh, ...COPY_RULES.en].map(([pattern]) => pattern);

/** Straight-out prohibited in published copy, regardless of the rewrite. */
const bannedClaims = [
  /perfect/i,
  /best ever/i,
  /in today's digital world/i,
  /在当今数字/i,
  /无限制/g,
  /永久免费/g,
  /完美无损/g,
  /秒级/g,
  /无云剪/g,
  /\bncc-/gi
];

const matchesAny = (text, patterns) =>
  patterns.some((pattern) => {
    pattern.lastIndex = 0;
    return pattern.test(text);
  });

const textFromLocalized = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return Object.values(value).join(" ");
};

/** Every user-visible string of a page, per language. */
const localizedStrings = (page) => {
  const out = [];
  const pushBoth = (field, value) => {
    if (!value) return;
    if (typeof value === "string") out.push({ field, lang: "both", text: value });
    else for (const [lang, text] of Object.entries(value)) if (text) out.push({ field, lang, text });
  };

  pushBoth("title", page.title);
  pushBoth("description", page.description);
  pushBoth("h1", page.h1);
  pushBoth("seoH2", page.seoH2);
  pushBoth("subtitle", page.subtitle);
  pushBoth("intent", page.intent);
  pushBoth("badge", page.badge);
  pushBoth("proTip", page.proTip);
  pushBoth("category", page.category);
  pushBoth("toolName", page.toolName);

  (page.faqs || []).forEach((faq, index) => {
    pushBoth(`faqs[${index}].q`, faq.q);
    pushBoth(`faqs[${index}].a`, faq.a);
  });

  (page.content || []).forEach((section, index) => {
    pushBoth(`content[${index}].h2`, section.h2);
    pushBoth(`content[${index}].callout`, section.callout);
    (section.p || []).forEach((p, i) => pushBoth(`content[${index}].p[${i}]`, p));
    (section.list || []).forEach((item, i) => pushBoth(`content[${index}].list[${i}]`, item));
    (section.faqs || []).forEach((faq, i) => {
      pushBoth(`content[${index}].faqs[${i}].q`, faq.q);
      pushBoth(`content[${index}].faqs[${i}].a`, faq.a);
    });
  });

  return out;
};

const articleText = (article) => localizedStrings(article).map((item) => item.text).join("\n");

const hasScreenshot = (article) =>
  (article.content || []).some((section) => {
    if (!section.image?.src || !section.image?.alt || !section.image?.caption) return false;
    const imagePath = path.join(rootDir, "public", section.image.src.replace(/^\//, ""));
    return fs.existsSync(imagePath);
  });

const hasFaq = (article) =>
  (article.faqs && article.faqs.length >= 2) ||
  (article.content || []).some((section) => section.faqs && section.faqs.length >= 2);

const hasPracticalSection = (article) =>
  (article.content || []).some((section) => section.list?.length >= 3 || section.callout);

const LOCAL_CONTEXT = /browser|WebAssembly|WASM|memory|device|local|CPU|codec|FFmpeg|浏览器|本地|内存|编码|设备/;

const failures = [];
const note = (message) => failures.push(message);

/* ---------------------------------------------------------------- claims ---
 * Applies to every page type and both languages: nothing that the rewrite
 * rules would change may survive, and nothing on the banned list may appear.
 */
const allPages = [DEFAULT_PAGE, ...TOOL_PAGES, ...DOC_PAGES, ...BLOG_PAGES];

for (const page of allPages) {
  const label = page.path || "(no path)";
  for (const { field, lang, text } of localizedStrings(page)) {
    const rewritten = conservativeCopy(text, lang === "both" ? "en" : lang);
    if (matchesAny(rewritten, rewritePatterns)) {
      const hit = rewritePatterns.find((pattern) => {
        pattern.lastIndex = 0;
        return pattern.test(rewritten);
      });
      note(`${label} :: ${field} [${lang}]: unverifiable claim survives the rewrite (${hit})`);
    }
    for (const pattern of bannedClaims) {
      pattern.lastIndex = 0;
      if (pattern.test(text)) note(`${label} :: ${field} [${lang}]: banned term ${pattern}`);
    }
  }
}

/* -------------------------------------------------------------- articles --- */
const auditedArticles = BLOG_PAGES.filter((page) => page.isArticle);

for (const article of auditedArticles) {
  const label = article.path;
  const text = articleText(article);

  if (!article.toolLink) note(`${label}: missing toolLink`);
  if (article.contentStandardVersion === 1 && !hasScreenshot(article)) {
    note(`${label}: missing valid screenshot image with alt and caption`);
  }
  if (article.contentStandardVersion === 2 && !hasPracticalSection(article)) {
    note(`${label}: standard-v2 needs a practical list or callout section`);
  }
  if (!article.contentStandardVersion) {
    note(`${label}: missing contentStandardVersion (declare v1 or v2)`);
  }
  if (!hasFaq(article)) note(`${label}: missing FAQ section`);
  if (!LOCAL_CONTEXT.test(text)) {
    note(`${label}: missing product-specific local/browser limitation context`);
  }
}

/* ----------------------------------------------------------- tool pages --- */
for (const page of TOOL_PAGES) {
  const label = page.path;
  const problems = [];
  if (!page.toolId) problems.push("missing toolId");
  if (!page.title?.en || !page.title?.zh) problems.push("missing bilingual title");
  if (!page.description?.en || !page.description?.zh) problems.push("missing bilingual description");
  if (!page.subtitle?.en || !page.subtitle?.zh) problems.push("missing bilingual subtitle");
  if (!page.seoH2?.en || !page.seoH2?.zh) problems.push("missing bilingual seoH2");
  if (!page.proTip?.en || !page.proTip?.zh) problems.push("missing bilingual proTip");
  if (!page.badge?.en || !page.badge?.zh) problems.push("missing bilingual badge");
  if ((page.faqs || []).length < 4) problems.push("needs at least 4 FAQ entries");
  for (const problem of problems) note(`${label}: ${problem}`);

  // A tool page that never names its own limits is the exact failure mode this
  // gate exists to catch.
  const zhText = localizedStrings(page).filter((item) => item.lang !== "en").map((item) => item.text).join("\n");
  if (!LOCAL_CONTEXT.test(zhText)) {
    note(`${label}: Chinese copy never mentions the local/browser limitation context`);
  }
}

/* ------------------------------------------------- tool-count consistency --- */
const CN_NUMERAL = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const toolCount = TOOL_PAGES.length;
const expectZhBadge = `${CN_NUMERAL[toolCount]}大工具合一`;
const expectEnBadge = `${toolCount} Tools in One`;

if (!DEFAULT_PAGE.badge.en.includes(expectEnBadge)) {
  note(`/ : homepage badge must state "${expectEnBadge}" (found: ${DEFAULT_PAGE.badge.en})`);
}
if (!DEFAULT_PAGE.badge.zh.includes(expectZhBadge)) {
  note(`/ : homepage badge must state "${expectZhBadge}" (found: ${DEFAULT_PAGE.badge.zh})`);
}

const toolListFaq = (DEFAULT_PAGE.faqs || []).find((faq) => /tools are included|包含哪些工具/.test(faq.q?.en || ""));
if (!toolListFaq) {
  note("/ : homepage is missing the 'what tools are included' FAQ entry");
} else {
  if (!toolListFaq.a.en.includes(`${toolCount} free tools`)) {
    note(`/ : tools FAQ (en) must list ${toolCount} tools`);
  }
  if (!toolListFaq.a.zh.includes(`包含 ${toolCount} 大免费工具`)) {
    note(`/ : tools FAQ (zh) must list ${toolCount} tools`);
  }
}

/* ----------------------------------------------------------------- output --- */
if (failures.length) {
  console.error(`Content audit failed with ${failures.length} problem(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  [
    "Content audit passed.",
    `  pages checked:    ${allPages.length} (homepage + ${TOOL_PAGES.length} tool pages + ${DOC_PAGES.length} doc pages + ${BLOG_PAGES.length} blog pages)`,
    `  articles checked: ${auditedArticles.length}`,
    `  tool count gate:  ${toolCount} (badge + FAQ agree)`
  ].join("\n")
);
