import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_PAGES } from "../src/config/blogPages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const bannedClaims = [
  /unlimited/i,
  /instant(?:ly)?/i,
  /perfect/i,
  /lossless compression/i,
  /zero quality loss/i,
  /best ever/i,
  /in today's digital world/i,
  /在当今数字/i,
  /无限制/g,
  /永久免费/g,
  /完美无损/g,
  /秒级/g
];

const textFromLocalized = (value) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return Object.values(value).join(" ");
};

const articleText = (article) => {
  const parts = [
    textFromLocalized(article.title),
    textFromLocalized(article.description),
    textFromLocalized(article.category),
    textFromLocalized(article.toolName)
  ];

  for (const section of article.content || []) {
    parts.push(textFromLocalized(section.h2));
    parts.push(textFromLocalized(section.callout));
    for (const paragraph of section.p || []) parts.push(textFromLocalized(paragraph));
    for (const item of section.list || []) parts.push(textFromLocalized(item));
    for (const faq of section.faqs || []) {
      parts.push(textFromLocalized(faq.q));
      parts.push(textFromLocalized(faq.a));
    }
  }

  for (const faq of article.faqs || []) {
    parts.push(textFromLocalized(faq.q));
    parts.push(textFromLocalized(faq.a));
  }

  return parts.join("\n");
};

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

const failures = [];

const auditedArticles = BLOG_PAGES.filter((page) => page.isArticle && [1, 2].includes(page.contentStandardVersion));

for (const article of auditedArticles) {
  const label = article.path;
  const text = articleText(article);

  if (!article.toolLink) failures.push(`${label}: missing toolLink`);
  if (article.contentStandardVersion === 1 && !hasScreenshot(article)) {
    failures.push(`${label}: missing valid screenshot image with alt and caption`);
  }
  if (article.contentStandardVersion === 2 && !hasPracticalSection(article)) {
    failures.push(`${label}: standard-v2 needs a practical list or callout section`);
  }
  if (!hasFaq(article)) failures.push(`${label}: missing FAQ section`);
  if (!/browser|WebAssembly|WASM|memory|device|local|CPU|codec|FFmpeg|浏览器|本地|内存|编码|设备/.test(text)) {
    failures.push(`${label}: missing product-specific local/browser limitation context`);
  }

  for (const pattern of bannedClaims) {
    if (pattern.test(text)) failures.push(`${label}: banned or risky claim matched ${pattern}`);
  }
}

if (failures.length) {
  console.error("Blog content audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Blog content audit passed for ${auditedArticles.length} standard-v1/v2 articles.`);
