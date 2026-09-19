/**
 * Build-time copy guard.
 *
 * Rewrites unverifiable marketing claims into statements we can actually stand
 * behind, so that the prerendered HTML and the JSON-LD structured data never
 * contain promises the browser-side engine cannot keep (unlimited size, instant
 * results, lossless compression, "never uploaded", ...).
 *
 * This module is shared by:
 *   - scripts/prerender-seo.mjs  (static HTML + JSON-LD)
 *   - scripts/audit-blog-content.mjs (regression gate)
 *
 * IMPORTANT: this is a safety net, not a licence to write loose copy. New copy
 * should already be honest at the source; `npm run audit:content` fails the
 * build if a banned claim survives the rewrite below.
 */

const BRAND_PATTERN = /无云剪(?:工作室|引擎)?/g;
const BRAND_REPLACEMENT = "HappyConvert";

const ZH_RULES = [
  // File-size promises
  [
    /无文件大小限制|无体积限制|不限文件大小|不限文件体积|不限体积|零体积限制|不设文件大小上限|无文件体积限制|无上限/g,
    "受本机内存限制"
  ],
  // Speed promises
  [/1\s*秒(?:钟)?内|1\s*秒极速|秒级|瞬时完成|瞬间完成/g, "快速"],
  // Quality promises
  [
    /无损压缩|极速无损压缩|无损视频极速剪切|高清不失真|肉眼无损|肉眼不失真|肉眼无法分辨|毫无画质损失|零画质损失|完全无损/g,
    "高质量处理"
  ],
  // Scope promises
  [/任意视频|任意格式|所有格式|全部格式/g, "常见视频与音频格式"],
  // Upload promises
  [/绝不(?:会)?上传|绝对不会|从不上传|永远不会上传/g, "不会主动上传"],
  // Limit promises
  [/完全没有限制|没有任何限制|毫无限制|没有任何门槛/g, "没有人为云端队列限制"],
  [/永久免费|终身免费/g, "免费使用"],
  // Audio quality promises
  [/母带级|极品音质|发烧级/g, "较高音质"]
];

const EN_RULES = [
  [
    /no file size limits?|zero file size limits?|without file size limits?|no size limit|no file size cap|unlimited file size|no limit on file size/gi,
    "limited by your browser and device memory"
  ],
  [
    /\bin under 1 second\b|\bunder 1 second\b|\bin 1 second\b|\b1-second\b|\b1 second\b|\binstantly\b|\binstant\b/gi,
    "quickly"
  ],
  // Word boundaries matter here: a bare /any video/ also matches inside
  // "many video-derived tracks", which would corrupt perfectly honest copy.
  [/lossless compression|visually lossless|\bno loss\b|zero quality degradation|zero quality loss|indistinguishable from the original/gi, "high-quality"],
  [/\bany video\b|\bany format\b|\ball formats\b|\bevery format\b/gi, "common video and audio formats"],
  [/never uploaded|nothing is ever uploaded|never touches? (?:the )?internet/gi, "not actively uploaded"],
  [/no limitations whatsoever|none at all|no limits at all/gi, "no cloud queue limits"],
  [/free forever|free for life/gi, "free to use"]
];

export function conservativeCopy(text, lang) {
  if (!text) return "";
  const rules = lang === "zh" ? ZH_RULES : EN_RULES;
  const rewritten = rules.reduce(
    (current, [pattern, replacement]) => current.replace(pattern, replacement),
    String(text)
  );
  return rewritten.replace(BRAND_PATTERN, BRAND_REPLACEMENT);
}

/** Brand residue is a bug regardless of language. */
export function stripLegacyBrand(text) {
  return text ? String(text).replace(BRAND_PATTERN, BRAND_REPLACEMENT) : "";
}

/** Exposed so the audit script can assert the rules stay in sync. */
export const COPY_RULES = { zh: ZH_RULES, en: EN_RULES, brand: BRAND_PATTERN };
