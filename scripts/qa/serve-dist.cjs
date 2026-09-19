#!/usr/bin/env node
/**
 * HappyConvert — 本地静态托管（镜像 vercel.json 的生产行为）
 *
 * 为什么不用 `vite dev`：vite 8 的 transform 中间件会拦截对 /public 下
 * `/ffmpeg/ffmpeg-core.js` 的动态 import（@ffmpeg/ffmpeg 的 worker 在 module
 * worker 下 importScripts 失败后会回退到 import()），导致引擎永远加载不出来。
 * 所以功能实测一律打在生产构建产物上 —— 那本来也是真实部署形态。
 *
 * 用法：node scripts/qa/serve-dist.cjs [port]
 *       DIST_DIR=/tmp/hc-dist-check PORT=4180 node scripts/qa/serve-dist.cjs
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(process.env.DIST_DIR || path.join(__dirname, "../../dist"));
const PORT = Number(process.argv[2] || process.env.PORT || 4180);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".wasm": "application/wasm",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

/** cleanUrls + 尾斜杠：/merge-video/ -> <root>/merge-video/index.html，其次 <root>/merge-video.html */
function resolveFile(pathname) {
  const clean = decodeURIComponent(pathname.split("?")[0]);
  const candidates = [];
  if (clean.endsWith("/")) {
    candidates.push(path.join(ROOT, clean, "index.html"));
  } else {
    candidates.push(path.join(ROOT, clean + ".html"));
    candidates.push(path.join(ROOT, clean + "/index.html"));
    candidates.push(path.join(ROOT, clean));
  }
  for (const c of candidates) {
    const abs = path.resolve(c);
    if (!abs.startsWith(ROOT)) continue; // 目录穿越防护
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) return abs;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url);
  if (!file) {
    const notFound = path.join(ROOT, "404.html");
    const body = fs.existsSync(notFound) ? fs.readFileSync(notFound) : "404";
    return send(res, 404, body, {
      "Content-Type": "text/html; charset=utf-8",
      ...isolationHeaders(),
    });
  }
  const ext = path.extname(file).toLowerCase();
  const body = fs.readFileSync(file);
  send(res, 200, body, {
    "Content-Type": TYPES[ext] || "application/octet-stream",
    "Cache-Control": "no-cache",
    ...isolationHeaders(),
  });
});

function isolationHeaders() {
  return {
    // 与 vercel.json 保持一致，WASM 多线程需要
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Embedder-Policy": "credentialless",
    "Cross-Origin-Resource-Policy": "cross-origin",
  };
}

server.listen(PORT, "127.0.0.1", () => {
  console.log(`serving ${ROOT} on http://127.0.0.1:${PORT}`);
});
