import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_PAGE, DOC_PAGES, TOOL_PAGES, localizedPage } from "../src/config/toolPages.js";
import { BLOG_PAGES } from "../src/config/blogPages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const templatePath = path.join(distDir, "index.html");
const siteUrl = "https://happyconvert.app";
const ogImage = `${siteUrl}/og-banner.png`;
const buildDate = new Date().toISOString().slice(0, 10);

if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html not found. Run vite build before prerendering SEO pages.");
}

const template = fs.readFileSync(templatePath, "utf8");
const pageConfigs = [DEFAULT_PAGE, ...TOOL_PAGES, ...DOC_PAGES, ...BLOG_PAGES];

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const stripTags = (value = "") => String(value).replace(/<[^>]*>/g, "");

const escapeJsonForHtml = (value) =>
  JSON.stringify(value).replaceAll("</", "<\\/");

const normalizePath = (routePath) => {
  if (!routePath || routePath === "/") return "/";
  return routePath.endsWith("/") ? routePath : `${routePath}/`;
};

const localizedPath = (routePath, lang) => {
  const cleanPath = normalizePath(routePath);
  if (lang === "zh") {
    return cleanPath === "/" ? "/zh/" : `/zh${cleanPath}`;
  }
  return cleanPath;
};

const absoluteUrl = (routePath, lang) => `${siteUrl}${localizedPath(routePath, lang)}`;

const conservativeCopy = (text, lang) => {
  if (!text) return "";
  const replacements = lang === "zh"
    ? [
        [/不限文件大小|不限文件体积|不限体积|零体积限制|无上限/g, "受本机内存限制"],
        [/1秒(?:钟)?内|1 秒(?:钟)?内|1秒极速|1 秒极速|秒级/g, "快速"],
        [/无损压缩|极速无损压缩|无损视频极速剪切|高清不失真|肉眼无损|肉眼不失真/g, "高质量处理"],
        [/任意视频|任意格式/g, "常见视频"],
        [/绝不(?:会)?上传|绝对不会/g, "不会主动上传"],
        [/完全没有|没有任何限制/g, "没有人为云端队列限制"],
        [/永久免费/g, "免费使用"]
      ]
    : [
        [/no file size limits?|zero file size limits?|without file size limits?|no size limit|unlimited/gi, "limited by your browser and device memory"],
        [/\bin under 1 second\b|\bunder 1 second\b|\bin 1 second\b|\b1-second\b|\b1 second\b|\binstantly\b/gi, "quickly"],
        [/lossless compression|visually lossless|video compressor no loss|no loss|zero quality degradation/gi, "high-quality"],
        [/any video|any format|all formats/gi, "common video formats"],
        [/never uploaded|nothing is ever uploaded/gi, "not actively uploaded"],
        [/no limitations whatsoever|none at all/gi, "no cloud queue limits"],
        [/free forever/gi, "free to use"]
      ];

  return replacements.reduce((current, [pattern, replacement]) => current.replace(pattern, replacement), text);
};

const pageType = (config) => {
  if (config.isArticle) return "article";
  if (config.isBlogIndex) return "blog";
  if (DOC_PAGES.some((page) => page.path === config.path)) return "doc";
  if (TOOL_PAGES.some((page) => page.path === config.path)) return "tool";
  return "home";
};

const priorityFor = (config) => {
  const type = pageType(config);
  if (type === "home") return "1.0";
  if (type === "tool") return "0.9";
  if (type === "blog" || type === "article") return "0.8";
  return "0.3";
};

const changefreqFor = (config) => {
  const type = pageType(config);
  if (type === "home" || type === "blog") return "weekly";
  if (type === "tool" || type === "article") return "monthly";
  return "yearly";
};

const createSchema = (config, page, lang, canonicalUrl, enUrl, zhUrl) => {
  const graph = [
    {
      "@type": ["WebApplication", "SoftwareApplication"],
      name: page.title,
      description: page.description,
      url: canonicalUrl,
      inLanguage: lang === "zh" ? "zh-CN" : "en-US",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web browser",
      browserRequirements: "Requires HTML5 and WebAssembly support",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }
  ];

  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.slice(0, 6).map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: conservativeCopy(faq.a, lang)
        }
      }))
    });
  }

  if (config.isArticle) {
    graph.push({
      "@type": "TechArticle",
      headline: page.title,
      description: page.description,
      url: canonicalUrl,
      inLanguage: lang === "zh" ? "zh-CN" : "en-US",
      datePublished: "2026-07-08",
      dateModified: buildDate,
      author: {
        "@type": "Organization",
        name: "HappyConvert",
        url: siteUrl
      },
      publisher: {
        "@type": "Organization",
        name: "HappyConvert",
        logo: {
          "@type": "ImageObject",
          url: ogImage
        }
      }
    });
  }

  const homeUrl = lang === "zh" ? `${siteUrl}/zh/` : `${siteUrl}/`;
  const breadcrumbs = [
    {
      "@type": "ListItem",
      position: 1,
      name: lang === "zh" ? "首页" : "Home",
      item: homeUrl
    }
  ];

  if (config.path !== "/") {
    if (config.isArticle) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "博客与教程" : "Blog & Guides",
        item: `${homeUrl}blog/`
      });
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: canonicalUrl
      });
    } else {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: stripTags(page.h1 || page.title),
        item: canonicalUrl
      });
    }
  }

  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph,
    alternateName: {
      en: enUrl,
      "zh-Hans": zhUrl
    }
  };
};

const renderStaticContent = (config, page, lang) => {
  const title = conservativeCopy(stripTags(page.h1 || page.title), lang);
  const intro = conservativeCopy(page.subtitle || page.description, lang);
  const intent = conservativeCopy(page.intent || "", lang);
  const heading = conservativeCopy(page.seoH2 || page.title, lang);
  const faqs = page.faqs?.slice(0, 4) || [];

  const articleSections = page.content?.slice(0, 4).map((section) => {
    const paragraphs = section.p?.map((text) => `<p>${escapeHtml(conservativeCopy(text, lang))}</p>`).join("") || "";
    const list = section.list?.length
      ? `<ul>${section.list.map((item) => `<li>${escapeHtml(conservativeCopy(item, lang))}</li>`).join("")}</ul>`
      : "";
    return `<section><h2>${escapeHtml(section.h2 || "")}</h2>${paragraphs}${list}</section>`;
  }).join("") || "";

  return `
    <main class="seo-static" aria-label="${escapeHtml(page.title)}">
      <section>
        <p>${escapeHtml(lang === "zh" ? "免费浏览器端媒体工具" : "Free browser-based media tool")}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(intro)}</p>
        ${intent ? `<p>${escapeHtml(intent)}</p>` : ""}
      </section>
      ${heading ? `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(conservativeCopy(page.description, lang))}</p></section>` : ""}
      ${articleSections}
      ${faqs.length ? `
        <section>
          <h2>${escapeHtml(lang === "zh" ? "常见问题" : "Frequently Asked Questions")}</h2>
          ${faqs.map((faq) => `
            <article>
              <h3>${escapeHtml(faq.q)}</h3>
              <p>${escapeHtml(conservativeCopy(faq.a, lang))}</p>
            </article>
          `).join("")}
        </section>
      ` : ""}
      <nav aria-label="${escapeHtml(lang === "zh" ? "相关工具" : "Related tools")}">
        ${TOOL_PAGES.map((toolPage) => {
          const localizedTool = localizedPage(toolPage, lang);
          return `<a href="${localizedPath(toolPage.path, lang)}">${escapeHtml(stripTags(localizedTool.h1 || localizedTool.title))}</a>`;
        }).join(" ")}
      </nav>
    </main>
  `;
};

const upsertHead = (html, tagHtml) => html.replace("</head>", `${tagHtml}\n  </head>`);

const removeExistingSeo = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta name="description"[\s\S]*?>/gi, "")
    .replace(/\s*<meta name="keywords"[\s\S]*?>/gi, "")
    .replace(/\s*<link rel="canonical"[\s\S]*?>/gi, "")
    .replace(/\s*<link rel="alternate"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="og:url"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="og:title"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="og:description"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="og:image"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="twitter:url"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="twitter:title"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="twitter:description"[\s\S]*?>/gi, "")
    .replace(/\s*<meta property="twitter:image"[\s\S]*?>/gi, "")
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");

const renderPageHtml = (config, lang) => {
  const localized = localizedPage(config, lang);
  const page = {
    ...localized,
    title: conservativeCopy(localized.title, lang),
    description: conservativeCopy(localized.description, lang),
    subtitle: conservativeCopy(localized.subtitle, lang)
  };
  const enUrl = absoluteUrl(config.path, "en");
  const zhUrl = absoluteUrl(config.path, "zh");
  const canonicalUrl = lang === "zh" ? zhUrl : enUrl;
  const htmlLang = lang === "zh" ? "zh-CN" : "en";
  const schema = createSchema(config, page, lang, canonicalUrl, enUrl, zhUrl);
  const staticContent = renderStaticContent(config, page, lang);

  const head = `
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="alternate" hreflang="en" href="${enUrl}">
    <link rel="alternate" hreflang="zh-Hans" href="${zhUrl}">
    <link rel="alternate" hreflang="x-default" href="${enUrl}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:image" content="${ogImage}">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${escapeHtml(page.title)}">
    <meta property="twitter:description" content="${escapeHtml(page.description)}">
    <meta property="twitter:image" content="${ogImage}">
    <script id="tool-page-schema" type="application/ld+json">${escapeJsonForHtml(schema)}</script>`;

  return upsertHead(removeExistingSeo(template), head)
    .replace(/<html lang="[^"]*">/i, `<html lang="${htmlLang}">`)
    .replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/, `<div id="root">${staticContent}</div>\n  </body>`);
};

const writeRouteHtml = (routePath, html) => {
  const normalized = normalizePath(routePath);
  const outputDir = normalized === "/" ? distDir : path.join(distDir, normalized);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html);
};

for (const config of pageConfigs) {
  writeRouteHtml(localizedPath(config.path, "en"), renderPageHtml(config, "en"));
  writeRouteHtml(localizedPath(config.path, "zh"), renderPageHtml(config, "zh"));
}

const sitemapUrls = pageConfigs.flatMap((config) => [
  { config, lang: "en" },
  { config, lang: "zh" }
]);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.map(({ config, lang }) => {
  const enUrl = absoluteUrl(config.path, "en");
  const zhUrl = absoluteUrl(config.path, "zh");
  const loc = lang === "zh" ? zhUrl : enUrl;
  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${changefreqFor(config)}</changefreq>
    <priority>${priorityFor(config)}</priority>
  </url>`;
}).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);

const notFoundHtml = renderPageHtml(
  {
    path: "/404/",
    title: {
      en: "Page Not Found - HappyConvert",
      zh: "页面未找到 - HappyConvert 快乐转码"
    },
    description: {
      en: "The page you requested does not exist. Return to HappyConvert to use free browser-based media tools.",
      zh: "您访问的页面不存在。返回 HappyConvert 快乐转码使用免费的浏览器端媒体工具。"
    },
    h1: {
      en: "Page Not Found",
      zh: "页面未找到"
    },
    subtitle: {
      en: "This URL is not a published HappyConvert page.",
      zh: "这个 URL 不是 HappyConvert 已发布页面。"
    },
    faqs: []
  },
  "en"
).replace('<meta name="robots" content="index, follow">', '<meta name="robots" content="noindex, follow">');

fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml);

console.log(`Prerendered ${sitemapUrls.length} localized SEO pages and sitemap.xml`);
