import React, { useMemo, useRef, useState, useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { formatBytes, formatTime, parseTime, extensionFor, isExpectedOutputFormat, detectBinaryFormat } from "./lib/mediaUtils.js";
import { buildCommandPreview, buildFfmpegArgs, getBlobTypeForFormat, getOutputFormatForTool } from "./lib/ffmpegCommands.js";
import { TOOLS, TRANSLATIONS } from "./i18n/translations.js";
import { DEFAULT_PAGE, TOOL_PAGES, getToolPageByPath, getToolPageByTool, localizedPage, normalizePath } from "./config/toolPages.js";
import { BLOG_PAGES } from "./config/blogPages.js";

// Helper to extract clean tool/page path from URL (stripping /zh or /en prefix)
const getCleanPathFromUrl = (pathname) => {
  if (pathname === "/zh" || pathname === "/zh/") return "/";
  if (pathname.startsWith("/zh/")) {
    const sub = pathname.slice(3);
    return sub.startsWith("/") ? sub : `/${sub}`;
  }
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) {
    const sub = pathname.slice(3);
    return sub.startsWith("/") ? sub : `/${sub}`;
  }
  return pathname;
};

// Helper to build localized URL path for browser history navigation
const buildLocalizedPath = (path, targetLang) => {
  const clean = normalizePath(path);
  if (targetLang === "zh") {
    return clean === "/" ? "/zh/" : `/zh${clean}`;
  }
  return clean;
};

// Helper to build absolute URL for SEO tags (canonical, hreflang, JSON-LD)
const getLocalizedUrl = (path, targetLang) => {
  const clean = normalizePath(path);
  const origin = window.location.origin;
  if (targetLang === "zh") {
    return clean === "/" ? `${origin}/zh/` : `${origin}/zh${clean}`;
  }
  return `${origin}${clean}`;
};

// Helper to get tailored showcase card data and image per tool page/tab
const getToolShowcaseData = (tool, lang) => {
  switch(tool) {
    case "Compress":
      return {
        title: lang === "zh" ? "🗜️ 智能压缩引擎" : "🗜️ Smart Compression Engine",
        badgeRight: lang === "zh" ? "极限压制" : "High Quality Ratio",
        privacyTag: lang === "zh" ? "⚡ 100% 本地运算" : "⚡ 100% LOCAL PROCESS",
        heading: lang === "zh" ? "画质高质量 · 体积骤缩 80%" : "high-quality · Up to 80% Smaller",
        desc: lang === "zh"
          ? "采用 H.264 与 VP8 智能码率分配算法，在浏览器本地极速压缩大体积视频，完美适配微信、钉钉及邮件发送要求！"
          : "Advanced bitrate allocation algorithm compresses heavy videos locally in your browser without sacrificing visual clarity!",
        img: "/banner-compress.jpg"
      };
    case "Convert":
      return {
        title: lang === "zh" ? "🔄 全能格式转换" : "🔄 Universal Converter",
        badgeRight: lang === "zh" ? "全格式兼容" : "All Formats",
        privacyTag: lang === "zh" ? "⚡ 零上传零等待" : "⚡ ZERO CLOUD UPLOAD",
        heading: lang === "zh" ? "跨格式秒转 · 兼容一切设备" : "Instant Conversion · Universal Compat",
        desc: lang === "zh"
          ? "在 MP4, MOV, MKV, WebM, MP3, WAV 等绝大多数音视频格式之间自由转换，彻底摆脱系统播放器不支持的烦恼！"
          : "Seamlessly convert between MP4, MOV, MKV, WebM, MP3, WAV and more directly on your device with instant speed!",
        img: "/banner-convert.jpg"
      };
    case "GIF":
      return {
        title: lang === "zh" ? "🎞️ 动图调色引擎" : "🎞️ GIF Palette Engine",
        badgeRight: lang === "zh" ? "顺滑高帧率" : "Smooth 60FPS",
        privacyTag: lang === "zh" ? "⚡ 智能调色板" : "⚡ SMART PALETTE",
        heading: lang === "zh" ? "帧帧出彩 · 打造爆款表情包" : "Frame by Frame · Viral Meme Maker",
        desc: lang === "zh"
          ? "自动生成 256 色全局调色板（PaletteGen），告别传统动图满屏噪点与色块，让每一次循环都丝滑细腻！"
          : "Generates custom 256-color global palettes automatically for crisp, vibrant, and ultra-smooth looping animations!",
        img: "/banner-gif.jpg",
        bgSize: "76% auto",
        bgPosition: "center 15%"
      };
    case "Extract Audio":
      return {
        title: lang === "zh" ? "🎵 音频无损提取" : "🎵 Pure Audio Extractor",
        badgeRight: lang === "zh" ? "母带级音质" : "Studio Quality",
        privacyTag: lang === "zh" ? "⚡ 音轨分离" : "⚡ AUDIO ISOLATION",
        heading: lang === "zh" ? "原音重现 · 提取视频背景乐" : "Pure Fidelity · Extract Background Audio",
        desc: lang === "zh"
          ? "秒级剥离视频文件中的原生音轨，支持导出为 MP3、WAV、FLAC 等母带级高保真音频格式，绝不损耗音质！"
          : "Instantly strip and isolate original audio tracks from any video file into studio-quality MP3, WAV, or FLAC formats!",
        img: "/banner-audio.jpg",
        bgSize: "76% auto",
        bgPosition: "center 15%"
      };
    case "Crop":
      return {
        title: lang === "zh" ? "📐 画面智能裁切" : "📐 Smart Framing & Crop",
        badgeRight: lang === "zh" ? "全平台适配" : "Social Media Ready",
        privacyTag: lang === "zh" ? "⚡ 比例重构" : "⚡ RATIO REFRAME",
        heading: lang === "zh" ? "指尖构图 · 完美适配各大社交圈" : "Perfect Framing · Ready for Shorts",
        desc: lang === "zh"
          ? "内置抖音/TikTok (9:16)、YouTube (16:9)、Instagram (1:1) 等主流平台黄金比例，拖拽框选一键裁切视频画面！"
          : "Preset aspect ratios for TikTok (9:16), YouTube (16:9), and Instagram (1:1). Easily crop and reframe your video visually!",
        img: "/banner-crop.jpg"
      };
    case "Trim":
    default:
      return {
        title: lang === "zh" ? "✂️ 极速剪切引擎" : "✂️ Lossless Trimming Engine",
        badgeRight: lang === "zh" ? "毫秒级精准" : "Millisecond Precision",
        privacyTag: lang === "zh" ? "⚡ 100% 隐私安全" : "⚡ 100% PRIVACY FIRST",
        heading: lang === "zh" ? "云端零上传 · 本地极速处理" : "Zero Cloud Upload · Fast Local Speed",
        desc: lang === "zh"
          ? "基于 WebAssembly 与 FFmpeg 核心技术，支持 Stream Copy 无损极速剪切，您的视频绝不会上传到任何云端服务器！"
          : "Powered by WebAssembly & FFmpeg. Supports lossless Stream Copy trimming. Nothing is ever uploaded to cloud servers!",
        img: "/banner-trim.jpg"
      };
  }
};

export default function App() {
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);
  const terminalRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(() => getCleanPathFromUrl(window.location.pathname));
  
  // Multi-Language State (Prioritize URL subdirectory for Google SEO indexing)
  const [lang, setLang] = useState(() => {
    const pathname = window.location.pathname;
    if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
    return "en";
  });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Theme Switching State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("happyconvert_theme") || "light";
  });

  // Sync theme selection to document body
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("happyconvert_theme", theme);
  }, [theme]);

  // Translation helper function t(key)
  const t = (key) => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS["en"]?.[key] || key;
  };
  
  // Workspace files & preview urls
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  
  // Engine and status loading
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  
  // Setup initial logs based on language selection
  useEffect(() => {
    setLogs([
      { text: t("logInit"), type: "info" },
      { text: t("logNoCloud"), type: "success" }
    ]);
  }, [lang]);
  
  const activePageConfig = getToolPageByPath(currentPath);
  const activePage = localizedPage(activePageConfig, lang);
  const isDocPage = ["/how-to-use/", "/about/", "/privacy/", "/terms/"].includes(activePageConfig.path);
  const isBlogPage = activePageConfig.path.startsWith("/blog");
  const isDedicatedToolPage = activePageConfig.path !== "/" && !isDocPage && !isBlogPage;

  // Navigation
  const [selectedTool, setSelectedTool] = useState(() => activePageConfig.toolId || DEFAULT_PAGE.toolId || "Convert");
  const effectiveSelectedTool = selectedTool || activePageConfig.toolId || DEFAULT_PAGE.toolId || "Convert";
  const [activeTabConsole, setActiveTabConsole] = useState("logs"); // "logs" | "help"
  
  // Export gallery list
  const [exportGallery, setExportGallery] = useState([]);

  // Console Visibility State
  const [showLogs, setShowLogs] = useState(false);

  // Latest Generated Output State
  const [latestOutput, setLatestOutput] = useState(null);
  
  // 1. Tool Options: Trim
  const [startTimeSec, setStartTimeSec] = useState(0);
  const [endTimeSec, setEndTimeSec] = useState(10);
  const [trimMode, setTrimMode] = useState("copy"); // "copy" | "reencode"
  
  // 2. Tool Options: Compress
  const [compressionQuality, setCompressionQuality] = useState("medium"); // "low" | "medium" | "high"
  const [compressionPreset, setCompressionPreset] = useState("veryfast");
  const [compressionScale, setCompressionScale] = useState("100%"); // "100%" | "720p" | "480p" | "360p"
  
  // 3. Tool Options: Convert
  const [convertFormat, setConvertFormat] = useState("mp4");
  const [convertVideoCodec, setConvertVideoCodec] = useState("libx264"); // "libx264" | "libvpx" | "copy"
  const [convertAudioCodec, setConvertAudioCodec] = useState("aac"); // "aac" | "vorbis" | "copy"
  
  // 4. Tool Options: GIF
  const [gifFps, setGifFps] = useState(10);
  const [gifWidth, setGifWidth] = useState(480);
  
  // 5. Tool Options: Extract Audio
  const [audioExtractFormat, setAudioExtractFormat] = useState("mp3");
  const [audioKbps, setAudioKbps] = useState("192k");
  
  // 6. Tool Options: Crop
  const [cropRatio, setCropRatio] = useState("16:9"); // "16:9" | "9:16" | "1:1" | "custom"
  const [cropW, setCropW] = useState(640);
  const [cropH, setCropH] = useState(360);
  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  
  // Interactive Crop Box Dragging/Resizing States
  const [isDraggingCrop, setIsDraggingCrop] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [dragStartCrop, setDragStartCrop] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [resizeMode, setResizeMode] = useState(null); // null | 'move' | 'tl' | 'tr' | 'bl' | 'br'
  const videoWrapperRef = useRef(null);
  
  // Selection playing helper states
  const [isPlayingSelection, setIsPlayingSelection] = useState(false);
  
  // UX Standalone Additions: Global drag and drop overlays
  const [globalDragging, setGlobalDragging] = useState(false);
  const dragCounter = useRef(0);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      const pathname = window.location.pathname;
      setCurrentPath(getCleanPathFromUrl(pathname));
      if (pathname === "/zh" || pathname.startsWith("/zh/")) {
        setLang("zh");
      } else if (pathname === "/en" || pathname.startsWith("/en/")) {
        setLang("en");
      } else {
        setLang("en");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (activePageConfig.toolId) {
      setSelectedTool(activePageConfig.toolId);
    }
  }, [activePageConfig.toolId]);

  useEffect(() => {
    document.title = activePage.title;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", activePage.description);

    const enUrl = getLocalizedUrl(activePageConfig.path, "en");
    const zhUrl = getLocalizedUrl(activePageConfig.path, "zh");
    const canonicalUrl = lang === "zh" ? zhUrl : enUrl;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Inject/update hreflang links for multilingual indexing
    const updateHreflang = (langCode, url) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${langCode}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "alternate");
        el.setAttribute("hreflang", langCode);
        document.head.appendChild(el);
      }
      el.setAttribute("href", url);
    };

    updateHreflang("en", enUrl);
    updateHreflang("zh-Hans", zhUrl);
    updateHreflang("x-default", enUrl);

    const updateMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    updateMeta('meta[property="og:title"]', activePage.title);
    updateMeta('meta[property="og:description"]', activePage.description);
    updateMeta('meta[property="og:url"]', canonicalUrl);
    updateMeta('meta[property="twitter:title"]', activePage.title);
    updateMeta('meta[property="twitter:description"]', activePage.description);
    updateMeta('meta[property="twitter:url"]', canonicalUrl);

    let schema = document.querySelector("#tool-page-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.setAttribute("id", "tool-page-schema");
      schema.setAttribute("type", "application/ld+json");
      document.head.appendChild(schema);
    }

    const schemaPayload = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["WebApplication", "SoftwareApplication"],
          name: activePage.title,
          description: activePage.description,
          url: canonicalUrl,
          inLanguage: lang === "zh" ? "zh-CN" : "en-US",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web browser",
          browserRequirements: "Requires HTML5 and WebAssembly support",
          featureList: activePage.badge || "Local WebAssembly media processing",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          }
        }
      ]
    };

    if (activePage.faqs && activePage.faqs.length > 0) {
      schemaPayload["@graph"].push({
        "@type": "FAQPage",
        mainEntity: activePage.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
          }
        }))
      });
    }

    if (activePageConfig.isArticle) {
      schemaPayload["@graph"].push({
        "@type": "TechArticle",
        headline: activePage.title,
        description: activePage.description,
        url: canonicalUrl,
        inLanguage: lang === "zh" ? "zh-CN" : "en-US",
        datePublished: "2026-07-08",
        dateModified: "2026-07-08",
        author: {
          "@type": "Organization",
          name: "HappyConvert",
          url: "https://happyconvert.app/"
        },
        publisher: {
          "@type": "Organization",
          name: "HappyConvert",
          logo: {
            "@type": "ImageObject",
            url: "https://happyconvert.app/og-banner.png"
          }
        }
      });
    }

    const homeUrl = lang === "zh" ? "https://happyconvert.app/zh/" : "https://happyconvert.app/";
    const breadcrumbElements = [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: homeUrl
      }
    ];

    if (activePageConfig.path !== "/" && activePageConfig.path !== "/zh/") {
      if (activePageConfig.isArticle) {
        breadcrumbElements.push({
          "@type": "ListItem",
          position: 2,
          name: lang === "zh" ? "博客与教程" : "Blog & Guides",
          item: `${homeUrl}blog/`
        });
        breadcrumbElements.push({
          "@type": "ListItem",
          position: 3,
          name: activePage.title || "Article",
          item: canonicalUrl
        });
      } else {
        breadcrumbElements.push({
          "@type": "ListItem",
          position: 2,
          name: activePage.toolName || activePage.title || "Tool",
          item: canonicalUrl
        });
      }
    }

    schemaPayload["@graph"].push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbElements
    });

    schema.textContent = JSON.stringify(schemaPayload);
  }, [activePage, activePageConfig.path, activePageConfig.isArticle, lang]);

  // Auto-scroll logs terminal (only scroll the container to avoid page jumpiness)
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Global window listeners for drag & drop hover
  useEffect(() => {
    const handleDragEnter = (e) => {
      e.preventDefault();
      dragCounter.current++;
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setGlobalDragging(true);
      }
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setGlobalDragging(false);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setGlobalDragging(false);
      dragCounter.current = 0;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        selectFile(e.dataTransfer.files[0]);
      }
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, [isLoaded, isWorking]);

  // Close dropdowns on click outside (robust mobile & desktop support)
  useEffect(() => {
    const clickOutside = (e) => {
      if (isLangDropdownOpen && !e.target.closest(".lang-selector-container")) {
        setIsLangDropdownOpen(false);
      }
      if (isNavDropdownOpen && !e.target.closest(".nav-dropdown-wrapper")) {
        setIsNavDropdownOpen(false);
      }
    };
    window.addEventListener("click", clickOutside);
    return () => window.removeEventListener("click", clickOutside);
  }, [isLangDropdownOpen, isNavDropdownOpen]);

  // Log helper
  function addLog(text, type = "info") {
    setLogs((current) => [...current, { text, type }]);
  }

  const ffmpegOptions = {
    selectedTool: effectiveSelectedTool,
    inputExt: file ? extensionFor(file) : "mp4",
    startTimeSec,
    endTimeSec,
    trimMode,
    compressionQuality,
    compressionPreset,
    compressionScale,
    convertFormat,
    convertVideoCodec,
    convertAudioCodec,
    gifFps,
    gifWidth,
    audioExtractFormat,
    audioKbps,
    cropW,
    cropH,
    cropX,
    cropY
  };

  // Live CLI Command formulation based on options states
  const commandPreview = useMemo(() => buildCommandPreview(ffmpegOptions), [ffmpegOptions]);

  // Loading File Callback (Auto-triggers WASM Core Engine load for UX efficiency)
  function selectFile(nextFile) {
    if (!nextFile) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    
    const url = URL.createObjectURL(nextFile);
    setFile(nextFile);
    setPreviewUrl(url);
    setProgress(0);
    
    addLog(`${t("logLoadedFile")}: ${nextFile.name} (${formatBytes(nextFile.size)})`, "success");
    
    // Auto load WASM core engine if not already initialized
    if (!isLoaded && !isWorking) {
      setTimeout(() => {
        loadFFmpeg();
      }, 200);
    }
  }

  // Metadata callback for duration and width/height configuration
  function onMetadataLoaded(event) {
    const nextDuration = event.currentTarget.duration || 0;
    setDuration(nextDuration);
    setStartTimeSec(0);
    setEndTimeSec(Math.min(nextDuration, Math.max(10, nextDuration * 0.5)));
    
    if (event.currentTarget.videoWidth) {
      const w = event.currentTarget.videoWidth;
      const h = event.currentTarget.videoHeight;
      setVideoWidth(w);
      setVideoHeight(h);
      
      // Setup crop default dimensions based on selected ratio or default to 16:9
      let cw = Math.round(w * 0.8);
      let ch = Math.round(h * 0.8);
      if (cropRatio === "1:1") {
        cw = Math.min(w, h);
        ch = cw;
      } else if (cropRatio === "16:9") {
        if (w / h > 16 / 9) { cw = Math.round(h * (16 / 9)); ch = h; }
        else { cw = w; ch = Math.round(w * (9 / 16)); }
      } else if (cropRatio === "9:16") {
        if (w / h > 9 / 16) { cw = Math.round(h * (9 / 16)); ch = h; }
        else { cw = w; ch = Math.round(w * (16 / 9)); }
      }
      const cx = Math.max(0, Math.round((w - cw) / 2));
      const cy = Math.max(0, Math.round((h - ch) / 2));
      setCropW(cw);
      setCropH(ch);
      setCropX(cx);
      setCropY(cy);
    }
  }

  // Load engine async
  async function loadFFmpeg() {
    if (isLoaded) return;
    setIsWorking(true);
    setProgress(0);
    addLog(t("logTriggerWasm"), "info");

    // Re-create the ffmpeg instance to guarantee fresh startup state
    try {
      if (ffmpegRef.current) {
        await ffmpegRef.current.terminate().catch(() => {});
      }
    } catch (e) {}

    const ffmpeg = new FFmpeg();
    ffmpegRef.current = ffmpeg;

    ffmpeg.on("log", ({ message }) => {
      if (message) {
        let type = "info";
        const msgClean = message.toLowerCase();
        if (msgClean.includes("error") || msgClean.includes("failed") || msgClean.includes("invalid")) {
          type = "error";
        } else if (msgClean.includes("warning") || msgClean.includes("deprecated")) {
          type = "warn";
        } else if (msgClean.includes("ffmpeg version") || msgClean.includes("configuration:")) {
          type = "success";
        }
        addLog(message, type);
      }
    });

    ffmpeg.on("progress", ({ progress: nextProgress }) => {
      setProgress(Math.max(0, Math.min(100, Math.round(nextProgress * 100))));
    });

    try {
      const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.10/dist/esm";
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm")
      });
      setIsLoaded(true);
      addLog(t("logWasmSuccess"), "success");
    } catch (error) {
      addLog(`${t("logWasmError")}: ${error.message || String(error)}`, "error");
    } finally {
      setIsWorking(false);
    }
  }


  // Dual handle range changes
  const handleStartPercentChange = (pct) => {
    const targetSec = (pct / 100) * duration;
    if (targetSec < endTimeSec - 0.05) {
      setStartTimeSec(targetSec);
      if (videoRef.current) videoRef.current.currentTime = targetSec;
    }
  };

  const handleEndPercentChange = (pct) => {
    const targetSec = (pct / 100) * duration;
    if (targetSec > startTimeSec + 0.05) {
      setEndTimeSec(targetSec);
      if (videoRef.current) videoRef.current.currentTime = targetSec;
    }
  };

  // Sync video time updates to playhead ticker state
  const handleTimeUpdate = (e) => {
    const time = e.currentTarget.currentTime;
    setCurrentTime(time);
    
    // Selection range looping boundary check
    if (isPlayingSelection && time >= endTimeSec) {
      videoRef.current.pause();
      setIsPlayingSelection(false);
    }
  };

  // Player controls
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const captureStart = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      if (current < endTimeSec) {
        setStartTimeSec(current);
        addLog(`${t("trimStart")}: ${formatTime(current, true)}`, "info");
      }
    }
  };

  const captureEnd = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      if (current > startTimeSec) {
        setEndTimeSec(current);
        addLog(`${t("trimEnd")}: ${formatTime(current, true)}`, "info");
      }
    }
  };

  const playSelection = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTimeSec;
      videoRef.current.play();
      setIsPlayingSelection(true);
      addLog(`${t("playSelection")}: [${formatTime(startTimeSec)} - ${formatTime(endTimeSec)}]`, "info");
    }
  };

  // Crop preset configurations
  const applyCropPreset = (ratio) => {
    setCropRatio(ratio);
    if (!videoWidth || !videoHeight) {
      let w = 640;
      let h = 360;
      if (ratio === "9:16") { w = 360; h = 640; }
      else if (ratio === "1:1") { w = 480; h = 480; }
      else if (ratio === "custom") { w = 640; h = 480; }
      setCropW(w);
      setCropH(h);
      setCropX(0);
      setCropY(0);
      addLog(`${t("logCropPreset")} ${ratio} (${w}x${h})`, "info");
      return;
    }
    let w = videoWidth;
    let h = videoHeight;
    
    if (ratio === "1:1") {
      w = Math.min(videoWidth, videoHeight);
      h = w;
    } else if (ratio === "16:9") {
      if (videoWidth / videoHeight > 16 / 9) {
        w = videoHeight * (16 / 9);
        h = videoHeight;
      } else {
        w = videoWidth;
        h = videoWidth * (9 / 16);
      }
    } else if (ratio === "9:16") {
      if (videoWidth / videoHeight > 9 / 16) {
        w = videoHeight * (9 / 16);
        h = videoHeight;
      } else {
        w = videoWidth;
        h = videoWidth * (16 / 9);
      }
    } else if (ratio === "custom") {
      w = Math.round(videoWidth * 0.8);
      h = Math.round(videoHeight * 0.8);
    }
    
    const x = Math.max(0, Math.round((videoWidth - w) / 2));
    const y = Math.max(0, Math.round((videoHeight - h) / 2));
    
    setCropW(Math.round(w));
    setCropH(Math.round(h));
    setCropX(Math.round(x));
    setCropY(Math.round(y));
    addLog(`${t("logCropPreset")} ${ratio} (${Math.round(w)}x${Math.round(h)} @ ${x},${y})`, "info");
  };

  // Interactive crop dragging event handlers
  const handleCropMouseDown = (e, mode = "move") => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingCrop(true);
    setResizeMode(mode);
    setDragStartPos({ x: e.clientX, y: e.clientY });
    setDragStartCrop({ x: cropX, y: cropY, w: cropW, h: cropH });
  };

  const handleCropTouchStart = (e, mode = "move") => {
    e.stopPropagation();
    setIsDraggingCrop(true);
    setResizeMode(mode);
    setDragStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setDragStartCrop({ x: cropX, y: cropY, w: cropW, h: cropH });
  };

  useEffect(() => {
    if (!isDraggingCrop) return;

    const handleMove = (clientX, clientY) => {
      if (!videoWrapperRef.current) return;
      const rect = videoWrapperRef.current.getBoundingClientRect();
      const scaleX = videoWidth / rect.width;
      const scaleY = videoHeight / rect.height;

      const dx = (clientX - dragStartPos.x) * scaleX;
      const dy = (clientY - dragStartPos.y) * scaleY;

      if (resizeMode === "move") {
        const newX = Math.max(0, Math.min(videoWidth - dragStartCrop.w, Math.round(dragStartCrop.x + dx)));
        const newY = Math.max(0, Math.min(videoHeight - dragStartCrop.h, Math.round(dragStartCrop.y + dy)));
        setCropX(newX);
        setCropY(newY);
      } else {
        let newX = dragStartCrop.x;
        let newY = dragStartCrop.y;
        let newW = dragStartCrop.w;
        let newH = dragStartCrop.h;

        const preserveRatio = cropRatio !== "custom";
        const ratioVal = cropRatio === "16:9" ? 16/9 : cropRatio === "9:16" ? 9/16 : cropRatio === "1:1" ? 1/1 : null;

        if (resizeMode === "br") {
          newW = Math.max(20, Math.min(videoWidth - dragStartCrop.x, Math.round(dragStartCrop.w + dx)));
          if (preserveRatio && ratioVal) {
            newH = newW / ratioVal;
            if (newY + newH > videoHeight) {
              newH = videoHeight - newY;
              newW = newH * ratioVal;
            }
          } else {
            newH = Math.max(20, Math.min(videoHeight - dragStartCrop.y, Math.round(dragStartCrop.h + dy)));
          }
        } else if (resizeMode === "tl") {
          const possibleW = dragStartCrop.w - dx;
          const possibleX = dragStartCrop.x + dx;
          if (possibleX >= 0 && possibleW >= 20) {
            newW = possibleW;
            newX = possibleX;
          }
          if (preserveRatio && ratioVal) {
            newH = newW / ratioVal;
            newY = dragStartCrop.y + (dragStartCrop.h - newH);
            if (newY < 0) {
              newY = 0;
              newH = dragStartCrop.y + dragStartCrop.h;
              newW = newH * ratioVal;
              newX = dragStartCrop.x + (dragStartCrop.w - newW);
            }
          } else {
            const possibleH = dragStartCrop.h - dy;
            const possibleY = dragStartCrop.y + dy;
            if (possibleY >= 0 && possibleH >= 20) {
              newH = possibleH;
              newY = possibleY;
            }
          }
        } else if (resizeMode === "tr") {
          newW = Math.max(20, Math.min(videoWidth - dragStartCrop.x, Math.round(dragStartCrop.w + dx)));
          if (preserveRatio && ratioVal) {
            newH = newW / ratioVal;
            newY = dragStartCrop.y + (dragStartCrop.h - newH);
            if (newY < 0) {
              newY = 0;
              newH = dragStartCrop.y + dragStartCrop.h;
              newW = newH * ratioVal;
            }
          } else {
            const possibleH = dragStartCrop.h - dy;
            const possibleY = dragStartCrop.y + dy;
            if (possibleY >= 0 && possibleH >= 20) {
              newH = possibleH;
              newY = possibleY;
            }
          }
        } else if (resizeMode === "bl") {
          const possibleW = dragStartCrop.w - dx;
          const possibleX = dragStartCrop.x + dx;
          if (possibleX >= 0 && possibleW >= 20) {
            newW = possibleW;
            newX = possibleX;
          }
          if (preserveRatio && ratioVal) {
            newH = newW / ratioVal;
            if (newY + newH > videoHeight) {
              newH = videoHeight - newY;
              newW = newH * ratioVal;
              newX = dragStartCrop.x + (dragStartCrop.w - newW);
            }
          } else {
            newH = Math.max(20, Math.min(videoHeight - dragStartCrop.y, Math.round(dragStartCrop.h + dy)));
          }
        }

        setCropX(Math.round(newX));
        setCropY(Math.round(newY));
        setCropW(Math.round(newW));
        setCropH(Math.round(newH));
      }
    };

    const handleMouseMove = (e) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleEnd = () => {
      setIsDraggingCrop(false);
      setResizeMode(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDraggingCrop, dragStartPos, dragStartCrop, resizeMode, videoWidth, videoHeight, cropW, cropH, cropRatio]);

  // Run FFmpeg Process
  async function processMedia() {
    if (!file) {
      addLog("Please select a local media file to process first.", "warn");
      return;
    }
    
    if (!isLoaded) {
      await loadFFmpeg();
    }
    
    if (!ffmpegRef.current.loaded) {
      addLog("FFmpeg engine is not ready. Try loading again.", "error");
      return;
    }

    setIsWorking(true);
    setProgress(0);
    addLog(`${t("logRunTool")}: ${effectiveSelectedTool}`, "info");

    const ffmpeg = ffmpegRef.current;
    const inputExt = extensionFor(file);
    const inputName = `input.${inputExt}`;
    const outFormat = getOutputFormatForTool({ ...ffmpegOptions, inputExt });
    const outputName = `ncc-${Date.now()}.${outFormat}`;

    try {
      addLog(t("logWritingSandbox"), "info");
      await ffmpeg.writeFile(inputName, await fetchFile(file));
      
      const args = buildFfmpegArgs(inputName, outputName, { ...ffmpegOptions, inputExt });
      addLog(`Executing: ffmpeg ${args.join(" ")}`, "command");
      
      const exitCode = await ffmpeg.exec(args);
      if (exitCode !== 0) {
        throw new Error(`FFmpeg processing failed with exit code ${exitCode}`);
      }
      
      addLog("Reading processed output stream...", "info");
      const targetReadName = outputName;
      
      const data = await ffmpeg.readFile(targetReadName);
      const outputBytes = data instanceof Uint8Array ? data.slice() : new Uint8Array(data);
      const detectedFormat = detectBinaryFormat(outputBytes);
      if (!isExpectedOutputFormat(outputBytes, outFormat)) {
        throw new Error(`Output validation failed: expected ${outFormat.toUpperCase()}, got ${detectedFormat.toUpperCase()}.`);
      }

      const mimeType = getBlobTypeForFormat(outFormat);
      const outputFile = new File([outputBytes], targetReadName, { type: mimeType, lastModified: Date.now() });
      const url = URL.createObjectURL(outputFile);
      
      const exportItem = {
        id: `export-${Date.now()}`,
        name: targetReadName,
        url: url,
        size: formatBytes(outputBytes.length),
        format: outFormat,
        blob: outputFile,
        mimeType,
        origSize: file ? file.size : 0,
        origSizeStr: file ? formatBytes(file.size) : "0 B",
        percentSaved: file && file.size > 0 ? Math.round(Math.max(0, (file.size - outputBytes.length) / file.size * 100)) : 0
      };
      
      setExportGallery((current) => [exportItem, ...current]);
      setLatestOutput(exportItem);
      setProgress(100);
      addLog(`Verified output container: ${detectedFormat.toUpperCase()} (${mimeType})`, "success");
      addLog(`${t("logSuccessFile")}: ${targetReadName}`, "success");
      
      await ffmpeg.deleteFile(inputName).catch(() => {});
      await ffmpeg.deleteFile(targetReadName).catch(() => {});
    } catch (error) {
      addLog(`Operation failed: ${error.message || String(error)}`, "error");
    } finally {
      setIsWorking(false);
      setIsLoaded(false);
      if (ffmpegRef.current) {
        ffmpegRef.current.terminate().catch(() => {});
      }
    }
  }

  // Gallery Item Controls
  const deleteGalleryItem = (id, url) => {
    URL.revokeObjectURL(url);
    setExportGallery((current) => current.filter((item) => item.id !== id));
    addLog(t("logRemoveExport"), "info");
  };

  const loadGalleryPreview = (url, name) => {
    setPreviewUrl(url);
    addLog(`${t("logPlayExport")}: ${name}`, "info");
  };

  const downloadExport = (item) => {
    if (!item?.blob) return;
    const downloadUrl = URL.createObjectURL(item.blob);
    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = item.name;
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
  };

  const loadAsInput = (item) => {
    if (!item.blob) return;
    const newFile = new File([item.blob], item.name, { type: item.blob.type });
    selectFile(newFile);
    setLatestOutput(null);
  };

  // Switch language option
  const changeLanguage = (nextLang) => {
    if (nextLang === lang) return;
    setLang(nextLang);
    localStorage.setItem("happyconvert_lang", nextLang);
    setIsLangDropdownOpen(false);

    // Remove old ?lang= parameter if present
    const params = new URLSearchParams(window.location.search);
    params.delete("lang");
    const searchStr = params.toString();

    // Navigate to clean subdirectory URL
    const localizedPath = buildLocalizedPath(currentPath, nextLang);
    const nextUrl = `${localizedPath}${searchStr ? "?" + searchStr : ""}`;
    window.history.pushState({}, "", nextUrl);

    addLog(`Language switched to: ${nextLang === "zh" ? "简体中文" : "English"}`, "info");
  };

  const navigateToHome = () => {
    setSelectedTool("Convert");
    const params = new URLSearchParams(window.location.search);
    params.delete("lang");
    const searchStr = params.toString();
    const finalPath = `${buildLocalizedPath("/", lang)}${searchStr ? "?" + searchStr : ""}`;

    if (window.location.pathname !== finalPath) {
      window.history.pushState({}, "", finalPath);
    }
    setCurrentPath("/");
  };

  const navigateToTool = (toolId) => {
    const page = getToolPageByTool(toolId);
    const nextPath = page.path === "/" ? DEFAULT_PAGE.path : page.path;
    setSelectedTool(toolId);

    const params = new URLSearchParams(window.location.search);
    params.delete("lang");
    const searchStr = params.toString();
    const finalPath = `${buildLocalizedPath(nextPath, lang)}${searchStr ? "?" + searchStr : ""}`;

    if (window.location.pathname !== finalPath) {
      window.history.pushState({}, "", finalPath);
    }
    setCurrentPath(nextPath);
  };

  const navigateToPath = (path) => {
    const params = new URLSearchParams(window.location.search);
    params.delete("lang");
    const searchStr = params.toString();
    const finalPath = `${buildLocalizedPath(path, lang)}${searchStr ? "?" + searchStr : ""}`;
    if (window.location.pathname !== finalPath) {
      window.history.pushState({}, "", finalPath);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Nav link smooth scrolling trigger
  const scrollToSection = (id, e) => {
    if (e) e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Function to perform smooth scroll with sticky header offset
    const doScroll = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const yOffset = -90; // Account for sticky floating topbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        
        // Add brief visual feedback glow to confirm target arrival
        const originalShadow = element.style.boxShadow;
        const originalTransition = element.style.transition;
        element.style.transition = "box-shadow 0.4s ease";
        element.style.boxShadow = "0 0 35px var(--accent-cyan), 0 0 15px var(--accent-purple)";
        setTimeout(() => {
          element.style.boxShadow = originalShadow;
          setTimeout(() => {
            element.style.transition = originalTransition;
          }, 400);
        }, 1500);
      }
    };

    // If currently on a standalone doc/blog page, navigate home first
    if (isDocPage || isBlogPage) {
      const homeUrl = buildLocalizedPath("/", lang);
      window.history.pushState({}, "", homeUrl);
      setCurrentPath("/");
      setTimeout(() => doScroll(id), 150);
    } else {
      // Use short timeout so React has time to render conditional DOM elements (like console-card)
      setTimeout(() => doScroll(id), 50);
    }
  };

  const isConvertPresetActive = (preset) => {
    if (preset === "mp4") return convertFormat === "mp4" && convertVideoCodec === "libx264" && convertAudioCodec === "aac";
    if (preset === "webm") return convertFormat === "webm" && convertVideoCodec === "libvpx" && convertAudioCodec === "vorbis";
    if (preset === "mp3") return convertFormat === "mp3";
    return false;
  };

  const toolById = (toolId) => TOOL_PAGES.find((page) => page.toolId === toolId);
  const contextualToolLinks = (() => {
    const relatedIdsByTool = {
      Convert: ["Extract Audio", "Compress", "GIF"],
      Trim: ["Compress", "GIF", "Extract Audio"],
      Compress: ["Convert", "Trim", "GIF"],
      GIF: ["Trim", "Compress", "Convert"],
      "Extract Audio": ["Convert", "Trim", "Compress"],
      Crop: ["Compress", "Trim", "Convert"]
    };
    return (relatedIdsByTool[activePageConfig.toolId] || ["Convert", "Compress", "Trim"])
      .map(toolById)
      .filter(Boolean);
  })();

  const contextualLinkIntro = (() => {
    if (lang === "zh") {
      if (activePageConfig.toolId === "Convert") return "转换完成后，您还可以继续提取音频、压缩文件或生成 GIF。";
      if (activePageConfig.toolId === "Trim") return "剪切完成后，您可以继续压缩片段、制作 GIF 或提取音频。";
      if (activePageConfig.toolId === "Compress") return "压缩前后，您也可以转换格式、剪切片段或制作 GIF。";
      if (activePageConfig.toolId === "GIF") return "制作 GIF 前，建议先剪切片段；也可以压缩视频或转换格式。";
      if (activePageConfig.toolId === "Extract Audio") return "提取音频前后，您也可以转换视频格式、剪切片段或压缩源文件。";
      if (activePageConfig.toolId === "Crop") return "裁切完成后，您可以继续压缩、剪切或转换视频格式。";
      return "继续探索相关的免费浏览器媒体工具。";
    }
    if (activePageConfig.toolId === "Convert") return "After converting, you can also extract audio, compress the file, or make a GIF.";
    if (activePageConfig.toolId === "Trim") return "After cutting, you can compress the clip, create a GIF, or extract its audio.";
    if (activePageConfig.toolId === "Compress") return "Before or after compression, you can convert formats, cut a clip, or create a GIF.";
    if (activePageConfig.toolId === "GIF") return "Before making a GIF, trim the clip first; you can also compress or convert the source video.";
    if (activePageConfig.toolId === "Extract Audio") return "Before or after extracting audio, you can convert video, cut a clip, or compress the source file.";
    if (activePageConfig.toolId === "Crop") return "After cropping, continue with compression, trimming, or video format conversion.";
    return "Explore related free browser media tools.";
  })();

  return (
    <div className="app-shell">
      {/* Ambient Studio Background Glowing Mesh Spheres */}
      <div className="ambient-background-glow">
        <div className="glow-sphere glow-sphere-primary"></div>
        <div className="glow-sphere glow-sphere-secondary"></div>
      </div>

      {/* Global dragging hover screen overlay */}
      <div className={`global-drag-overlay ${globalDragging ? "active" : ""}`}>
        <div className="global-drag-overlay-card">
          <div className="global-drag-overlay-icon">📥</div>
          <h3>{t("dragOverlayTitle")}</h3>
          <p>{t("dragOverlaySub")}</p>
        </div>
      </div>

      {/* Top Header with Navigation Links & Language Switcher */}
      <header className="topbar" role="banner">
        <a className="brand" href="/" onClick={(e) => {
          e.preventDefault();
          navigateToHome();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <div className="brand-mark">
            <img src="/logo.svg" alt="HappyConvert Logo" className="brand-icon-img" />
          </div>
          <div className="brand-text">
            <strong>{t("brandTitle")}</strong>
            <small>{t("logoSub")}</small>
          </div>
        </a>

        {/* Anchored Nav Links & Dynamic Dropdown */}
        <nav className="header-nav">
          <div className={`nav-dropdown-wrapper ${isNavDropdownOpen ? "active" : ""}`}>
            <button 
              type="button" 
              className="nav-dropdown-trigger"
              onClick={(e) => {
                e.stopPropagation();
                setIsNavDropdownOpen(!isNavDropdownOpen);
              }}
            >
              🧰 {lang === "zh" ? "媒体工具" : "Tools"} <span className="arrow">▾</span>
            </button>
            <div className={`nav-dropdown-menu ${isNavDropdownOpen ? "active" : ""}`}>
              {TOOL_PAGES.map((page) => {
                const item = localizedPage(page, lang);
                const isActive = normalizePath(currentPath) === page.path || (page.toolId === "Convert" && normalizePath(currentPath) === "/");
                return (
                  <a
                    key={page.path}
                    href={page.path}
                    className={`nav-dropdown-item ${isActive ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToTool(page.toolId);
                      setIsNavDropdownOpen(false); // Close dropdown immediately
                    }}
                  >
                    <span className="item-icon">
                      {page.toolId === "Trim" && "✂️"}
                      {page.toolId === "Compress" && "📉"}
                      {page.toolId === "Convert" && "🔄"}
                      {page.toolId === "GIF" && "🖼️"}
                      {page.toolId === "Extract Audio" && "🎵"}
                      {page.toolId === "Crop" && "📐"}
                    </span>
                    <div className="item-details">
                      <strong>{item.title.split(" - ")[0]}</strong>
                      <small>{item.intent}</small>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <a className="header-nav-link" href="#" onClick={(e) => scrollToSection(".marketing-features-grid", e)}>
            {t("navFeatures")}
          </a>
          <a className="header-nav-link" href="#" onClick={(e) => scrollToSection(".faq-accordion-section", e)}>
            {t("navFAQ")}
          </a>
          <a className="header-nav-link" href="/how-to-use/" onClick={(e) => { e.preventDefault(); navigateToPath("/how-to-use/"); }}>
            {lang === "zh" ? "使用教程" : "How to Use"}
          </a>
          <a className="header-nav-link" href="/blog/" onClick={(e) => { e.preventDefault(); navigateToPath("/blog/"); }}>
            {lang === "zh" ? "博客教程" : "Blog"}
          </a>
          <a className="header-nav-link" href="#" onClick={(e) => scrollToSection(".control-deck", e)}>
            {t("navConsole")}
          </a>
        </nav>

        <div className="topbar-settings">
          {/* Theme Toggle Button */}
            <button 
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={lang === "zh" ? "打开导航菜单" : "Open navigation menu"}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          {/* Theme Toggle Button */}
          <button 
            type="button"
            className="theme-toggle-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Language Switcher Dropdown */}
          <div className="lang-selector-container">
            <button 
              type="button"
              className="lang-select-btn" 
              onClick={(e) => {
                e.stopPropagation();
                setIsLangDropdownOpen(!isLangDropdownOpen);
              }}
            >
              🌐 {lang === "zh" ? "简体中文" : "English"} ▾
            </button>
            {isLangDropdownOpen && (
              <div className="lang-dropdown">
                <button 
                  type="button" 
                  className={`lang-option ${lang === "en" ? "active" : ""}`}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>
                <button 
                  type="button" 
                  className={`lang-option ${lang === "zh" ? "active" : ""}`}
                  onClick={() => changeLanguage("zh")}
                >
                  简体中文
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="topbar-status">
          <div className="local-badge" title={t("privateBadge")}>
            <span className="local-badge-dot"></span>
            {t("privateBadge")}
          </div>
          <button 
            className={`wasm-badge ${isLoaded ? "loaded" : isWorking ? "loading" : ""}`}
            onClick={loadFFmpeg}
            disabled={isLoaded || isWorking}
          >
            {isLoaded ? t("engineReady") : isWorking ? t("engineLoading") : t("engineInit")}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label={lang === "zh" ? "移动端导航" : "Mobile navigation"}>
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label={lang === "zh" ? "关闭导航菜单" : "Close navigation menu"}
            onClick={() => setIsMobileMenuOpen(false)}
          ></button>
          <div className="mobile-nav-sheet">
            <div className="mobile-nav-handle"></div>
            <div className="mobile-nav-header">
              <div>
                <strong>{lang === "zh" ? "导航" : "Navigate"}</strong>
                <span>{lang === "zh" ? "选择工具或帮助内容" : "Choose a tool or guide"}</span>
              </div>
              <button type="button" className="mobile-nav-close" onClick={() => setIsMobileMenuOpen(false)} aria-label={lang === "zh" ? "关闭" : "Close"}>
                ×
              </button>
            </div>

            <div className="mobile-nav-section">
              <p>{lang === "zh" ? "媒体工具" : "Media tools"}</p>
              <div className="mobile-tool-grid">
                {TOOL_PAGES.map((page) => {
                  const item = localizedPage(page, lang);
                  return (
                    <a
                      key={page.path}
                      href={buildLocalizedPath(page.path, lang)}
                      className={`mobile-tool-link ${normalizePath(currentPath) === page.path ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToTool(page.toolId);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span>
                        {page.toolId === "Trim" && "✂️"}
                        {page.toolId === "Compress" && "📉"}
                        {page.toolId === "Convert" && "🔄"}
                        {page.toolId === "GIF" && "🖼️"}
                        {page.toolId === "Extract Audio" && "🎵"}
                        {page.toolId === "Crop" && "📐"}
                      </span>
                      <strong>{item.title.split(" - ")[0]}</strong>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mobile-nav-section">
              <p>{lang === "zh" ? "内容" : "Content"}</p>
              <div className="mobile-nav-links">
                <a href={buildLocalizedPath("/how-to-use/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/how-to-use/"); setIsMobileMenuOpen(false); }}>
                  {lang === "zh" ? "使用教程" : "How to Use"}
                </a>
                <a href={buildLocalizedPath("/blog/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/blog/"); setIsMobileMenuOpen(false); }}>
                  {lang === "zh" ? "博客教程" : "Blog & Guides"}
                </a>
                <a href="#" onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection(".faq-accordion-section", e); }}>
                  {lang === "zh" ? "常见问题" : "FAQ"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDocPage ? (
        <main className="document-layout-container" role="main" style={{ maxWidth: "880px", margin: "40px auto", padding: "0 20px", width: "100%" }}>
          <div className="document-card" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "40px", boxShadow: "var(--shadow-md)" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "24px", borderBottom: "1.5px solid var(--border-color)", paddingBottom: "12px", fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
              {activePageConfig.path === "/how-to-use/" && (lang === "zh" ? "HappyConvert 使用教程" : "How to Use HappyConvert")}
              {activePageConfig.path === "/about/" && (lang === "zh" ? "关于我们" : "About Us")}
              {activePageConfig.path === "/privacy/" && (lang === "zh" ? "隐私政策 (Privacy Policy)" : "Privacy Policy")}
              {activePageConfig.path === "/terms/" && (lang === "zh" ? "服务条款" : "Terms of Service")}
            </h1>
            <div className="document-body" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--text-secondary)" }}>
              {activePageConfig.path === "/how-to-use/" && (
                lang === "zh" ? (
                  <>
                    <p style={{ marginBottom: "16px" }}>
                      HappyConvert 是一个浏览器端音视频工具箱。您不需要注册账号，也不需要先上传到云端服务器；选择一个工具、导入本地文件、调整参数并点击开始处理即可。
                    </p>
                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. 选择正确的工具</h2>
                    <p style={{ marginBottom: "12px" }}>如果您只是想改变格式，请打开视频转换；如果要截掉片头片尾，请打开视频剪切；如果文件太大无法发送，请打开视频压缩。</p>
                    <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                      <li style={{ marginBottom: "8px" }}><strong>视频转换：</strong>MP4、WebM、MOV、MKV 等常见格式互转。</li>
                      <li style={{ marginBottom: "8px" }}><strong>视频剪切：</strong>设置开始与结束时间，导出需要的片段。</li>
                      <li style={{ marginBottom: "8px" }}><strong>视频压缩：</strong>通过 CRF 与分辨率缩放减小文件体积。</li>
                      <li style={{ marginBottom: "8px" }}><strong>导出 GIF：</strong>把短视频片段转成适合聊天和文档演示的动图。</li>
                      <li style={{ marginBottom: "8px" }}><strong>提取音频：</strong>从视频中导出 MP3 或 WAV 音轨。</li>
                      <li style={{ marginBottom: "8px" }}><strong>画面裁切：</strong>调整为 9:16、16:9、1:1 或自定义比例。</li>
                    </ul>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. 导入文件并等待引擎准备</h2>
                    <p style={{ marginBottom: "16px" }}>
                      点击上传区域选择本地文件，也可以把文件拖入页面。第一次处理时，浏览器需要加载 FFmpeg WebAssembly 引擎；看到引擎准备完成后，再开始运行任务。较大的 4K 或长视频会占用更多内存，建议先用短片测试参数。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. 设置参数并下载结果</h2>
                    <p style={{ marginBottom: "16px" }}>
                      在右侧参数面板选择格式、时间范围、压缩等级、GIF 帧率或裁切比例。点击开始处理后，进度会显示在终端区域。处理完成后，页面会提供下载按钮，您也可以把导出的结果重新载入工作区继续处理。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>隐私与性能注意事项</h2>
                    <p style={{ marginBottom: "16px" }}>
                      HappyConvert 的媒体处理在浏览器本地执行，文件不会被主动上传到服务器。实际可处理的文件大小取决于您的设备内存、浏览器 WebAssembly 限制和视频编码复杂度。处理重要素材前，请保留原始文件备份。
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "24px" }}>
                      <button className="studio-btn studio-btn-primary" onClick={() => navigateToPath("/cut-video/")}>打开视频剪切</button>
                      <button className="studio-btn" onClick={() => navigateToPath("/convert-video/")}>打开视频转换</button>
                      <button className="studio-btn" onClick={() => navigateToPath("/compress-video/")}>打开视频压缩</button>
                    </div>
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: "16px" }}>
                      HappyConvert is a browser-based media toolkit. You do not need an account, and your media does not need to be uploaded to a cloud processor. Pick a tool, load a local file, adjust the settings, and run the task.
                    </p>
                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. Choose the right tool</h2>
                    <p style={{ marginBottom: "12px" }}>Use Video Converter when you need a different format, Video Cutter when you want to remove the beginning or ending, and Video Compressor when the file is too large to share.</p>
                    <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                      <li style={{ marginBottom: "8px" }}><strong>Video Converter:</strong> Convert common formats such as MP4, WebM, MOV, and MKV.</li>
                      <li style={{ marginBottom: "8px" }}><strong>Video Cutter:</strong> Set start and end timestamps, then export the selected clip.</li>
                      <li style={{ marginBottom: "8px" }}><strong>Video Compressor:</strong> Reduce file size with CRF and optional resolution scaling.</li>
                      <li style={{ marginBottom: "8px" }}><strong>Video to GIF:</strong> Turn a short video clip into a GIF for chat, docs, or social posts.</li>
                      <li style={{ marginBottom: "8px" }}><strong>Extract Audio:</strong> Export MP3 or WAV audio from a video file.</li>
                      <li style={{ marginBottom: "8px" }}><strong>Crop Video:</strong> Reframe video as 9:16, 16:9, 1:1, or a custom size.</li>
                    </ul>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. Load a file and wait for the engine</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Click the upload area to choose a local file, or drag a file into the page. The first task needs to load the FFmpeg WebAssembly engine. Once the engine is ready, start the task. Large 4K or long videos need more memory, so test settings with a short clip first when possible.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. Set options and download the result</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Use the right-side settings panel to choose format, time range, compression level, GIF frame rate, or crop ratio. After you run the task, progress appears in the terminal area. When processing finishes, download the result or load it back into the workspace for another edit.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>Privacy and performance notes</h2>
                    <p style={{ marginBottom: "16px" }}>
                      HappyConvert processes media locally in your browser. Files are not actively uploaded to a server for processing. The practical file size depends on your device memory, browser WebAssembly limits, and video codec complexity. Keep a backup of important source files before heavy edits.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "24px" }}>
                      <button className="studio-btn studio-btn-primary" onClick={() => navigateToPath("/cut-video/")}>Open Video Cutter</button>
                      <button className="studio-btn" onClick={() => navigateToPath("/convert-video/")}>Open Video Converter</button>
                      <button className="studio-btn" onClick={() => navigateToPath("/compress-video/")}>Open Video Compressor</button>
                    </div>
                  </>
                )
              )}

              {activePageConfig.path === "/about/" && (
                lang === "zh" ? (
                  <div className="about-page">
                    <section className="about-hero">
                      <span>Privacy-first media tools</span>
                      <h2>把常用音视频处理，留在您的浏览器本地完成。</h2>
                      <p>
                        HappyConvert 是一套面向创作者、运营、学生和普通用户的浏览器端媒体工具。我们专注于那些“打开就用、用完就走”的高频任务：转码、剪切、压缩、裁切、导出 GIF 和提取音频。
                      </p>
                    </section>

                    <div className="about-principles-grid">
                      <article>
                        <strong>本地处理</strong>
                        <p>通过 WebAssembly 在浏览器沙盒内运行媒体处理逻辑，文件不会被主动上传到云端处理队列。</p>
                      </article>
                      <article>
                        <strong>无需账号</strong>
                        <p>不要求注册、登录或绑定邮箱。适合一次性处理临时素材，也适合不想留下账号痕迹的工作流。</p>
                      </article>
                      <article>
                        <strong>透明限制</strong>
                        <p>浏览器本地处理会受到设备内存、CPU 和浏览器 WebAssembly 限制影响。我们会尽量把限制讲清楚。</p>
                      </article>
                    </div>

                    <section className="about-section">
                      <h2>为什么做 HappyConvert？</h2>
                      <p>
                        许多传统在线剪辑或转码网站需要先上传文件，再由云端服务器处理。这个模式适合团队协作和云端项目管理，但对临时文件、会议录屏、家庭视频、产品演示稿等敏感素材来说，上传本身就是额外风险。
                      </p>
                      <p>
                        HappyConvert 的定位不是替代专业云端剪辑平台，而是补足一个更轻的场景：当您只需要快速剪掉片头、把 MOV 转成 MP4、压缩一段视频或提取音频时，应该可以在本机浏览器里直接完成。
                      </p>
                    </section>

                    <section className="about-compare">
                      <div>
                        <span>Cloud-first tools</span>
                        <p>通常强调账号、云端项目、团队协作和素材管理，适合长期创作工作流。</p>
                      </div>
                      <div>
                        <span>HappyConvert</span>
                        <p>强调无账号、无主动上传、本地处理和快速完成，适合轻量、私密、一次性任务。</p>
                      </div>
                    </section>

                    <section className="about-section">
                      <h2>联系我们</h2>
                      <p>
                        如果您遇到格式兼容、浏览器性能、隐私说明或商业合作问题，可以通过邮箱联系我们：
                        <a href="mailto:support@happyconvert.app">support@happyconvert.app</a>
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="about-page">
                    <section className="about-hero">
                      <span>Privacy-first media tools</span>
                      <h2>Common video tasks, processed locally in your browser.</h2>
                      <p>
                        HappyConvert is a browser-based media toolkit for creators, operators, students, and everyday users. We focus on quick-use jobs: converting, cutting, compressing, cropping, making GIFs, and extracting audio.
                      </p>
                    </section>

                    <div className="about-principles-grid">
                      <article>
                        <strong>Local processing</strong>
                        <p>Media tasks run inside your browser sandbox with WebAssembly. Files are not actively uploaded to a cloud processing queue.</p>
                      </article>
                      <article>
                        <strong>No account required</strong>
                        <p>No signup, login, or email wall. It is built for quick one-off jobs and workflows where you do not want another account.</p>
                      </article>
                      <article>
                        <strong>Honest limits</strong>
                        <p>Browser processing depends on device memory, CPU, and WebAssembly limits. We aim to explain those limits clearly.</p>
                      </article>
                    </div>

                    <section className="about-section">
                      <h2>Why we built HappyConvert</h2>
                      <p>
                        Many traditional online editors and converters upload files first, then process them on cloud servers. That model is useful for collaboration, account-based project storage, and team workflows. But for meeting recordings, family clips, product demos, or sensitive work files, upload-first processing can be unnecessary friction.
                      </p>
                      <p>
                        HappyConvert is not trying to replace professional cloud editing suites. It is designed for a lighter moment: when you just need to trim an intro, convert MOV to MP4, compress a clip, or extract audio directly on your own device.
                      </p>
                    </section>

                    <section className="about-compare">
                      <div>
                        <span>Cloud-first tools</span>
                        <p>Usually emphasize accounts, cloud projects, collaboration, and asset management for long-term creative workflows.</p>
                      </div>
                      <div>
                        <span>HappyConvert</span>
                        <p>Emphasizes no signup, no active uploads, local processing, and fast completion for lightweight private tasks.</p>
                      </div>
                    </section>

                    <section className="about-section">
                      <h2>Contact us</h2>
                      <p>
                        For format compatibility, browser performance, privacy questions, or partnership inquiries, contact us at
                        <a href="mailto:support@happyconvert.app">support@happyconvert.app</a>.
                      </p>
                    </section>
                  </div>
                )
              )}

              {activePageConfig.path === "/privacy/" && (
                lang === "zh" ? (
                  <>
                    <p style={{ marginBottom: "16px", fontSize: "14px", fontWeight: "600", color: "var(--text-tertiary)" }}>
                      最后更新与生效日期：2026年7月8日
                    </p>
                    <p style={{ marginBottom: "24px" }}>
                      HappyConvert 快乐转码（以下简称“我们”或“本工具”）深知个人隐私及商业机密对创作者与团队的至关重要性。与市面上依赖云端服务器进行转码与剪切的传统在线工具（如 Clideo、Kapwing、123apps、Canva 等）有着本质区别，我们利用下一代 <strong>WebAssembly 离线沙盒架构</strong>，在您的浏览器本地闭环运行。本政策旨在向您详实透明地阐述我们的数据零上传机制与隐私保护标准。
                    </p>
                    
                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. 核心媒体文件处理 —— 100% 浏览器本地运算，零云端上传</h2>
                    <p style={{ marginBottom: "16px" }}>
                      这是我们最引以为傲的核心安全护城河：当您在本站工作区中导入 MP4、WebM、MOV、MKV、AVI、MP3、WAV 或 GIF 等任何文件进行转码、压缩、剪切或调色操作时，<strong>没有任何音频或视频数据流会被传往、上传、复制或存储至我们的云端服务器或任何第三方存储设备中</strong>。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      所有的文件读取、帧解码、滤镜渲染与封装编码，均由您电脑或手机设备的本地硬件（CPU/GPU），在现代浏览器为您严格隔离的临时内存沙盒（RAM）中完全离线执行。当您关闭网页标签或退出浏览器后，您的操作系统会自动物理回收并彻底销毁全部临时内存流。我们既无法访问、无法监控，更无从保留您的任何创作素材。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. 个人身份信息与免注册匿名使用</h2>
                    <p style={{ marginBottom: "16px" }}>
                      为了最大限度捍卫创作者的网络匿名权，本工具承诺<strong>免费使用且无设任何注册门槛</strong>。您在使用本站功能时全程匿名：无需注册账号、无需登录、无需提供电子邮件地址，更无需绑定任何支付信息或电话号码。我们从不收集任何个人身份识别数据（PII，如姓名、住址、财务信息等）。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. 浏览器本地存储 (Local Storage) 与 Cookie 规范</h2>
                    <p style={{ marginBottom: "16px" }}>
                      为提供连贯顺畅的操作体验，本站仅会在您的浏览器本地存储（如 localStorage）中保存极其轻量的非敏感 UI 状态，例如：深色/浅色主题颜色偏好、语言选择（中/英）以及您在控制台中最近一次设置的参数记录。这些微量状态仅存放于您的设备本地，绝不会用于跨站追踪或个人画像。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>4. 第三方广告服务与 Google AdSense 合规声明</h2>
                    <p style={{ marginBottom: "16px" }}>
                      为了支撑基础的域名托管与全球基础 CDN 流量运维支出，并确保所有高规格转码与剪切工具能够对全球创作者免费使用开放且绝不添加商业水印，我们在页面底部等非侵入式区域接入了 Google AdSense 广告服务。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      根据 Google 广告网络合规规范，特此声明：Google 及其第三方合作广告网络会使用 Cookie（包括 DoubleClick DART Cookie），依据用户针对本网站或互联网上其他网站的过往访问记录来展示非敏感的展示型型广告。用户随时可以通过访问 Google 广告设置页面 (<a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{ color: "var(--accent-purple)", textDecoration: "underline" }}>https://www.google.com/settings/ads</a>) 停用个性化广告推送。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>5. 网站基础日志与 DDoS 安全防护</h2>
                    <p style={{ marginBottom: "16px" }}>
                      如同全世界所有的互联网基础服务一样，我们的云端静态托管服务提供商（如 Vercel、Cloudflare、GitHub Pages 等）在处理 HTTP 请求时，会自动生成标准化的匿名服务器访问日志。此类日志仅记录脱敏后的 IP 地址掩码、浏览器 User-Agent 字符串、访问时间戳及请求路径。这些记录仅局限于运维故障排查、防范恶意攻击及基础流量宏观统计，绝不会与用户本地处理的媒体文件产生任何形式的关联。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>6. 纯离线使用能力与国际数据保护法规合规 (GDPR / CCPA / HIPAA)</h2>
                    <p style={{ marginBottom: "16px" }}>
                      得益于 WebAssembly 引擎的封闭性，一旦您打开本站并加载完成核心引擎包（约 30MB），您只需<strong>断开电脑网络或拔掉网线</strong>，即可在纯离线状态下毫无阻碍地执行全部音视频编辑与转码操作。这种物理级的断网数据闭环，使本工作室原生具备对欧盟《通用数据保护条例》(GDPR)、美国《加州消费者隐私法案》(CCPA) 及企业级 HIPAA 等国际隐私标准的最高合规性。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>7. 未成年人隐私保护 (COPPA)</h2>
                    <p style={{ marginBottom: "16px" }}>
                      本站工具完全面向公众与专业创作者开放，我们不会有意识地从 13 岁（或欧洲经济区 16 岁）以下儿童处收集任何个人身份信息。因为我们根本不需要用户提供任何个人信息即可直接使用。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>8. 政策修订与官方联系方式</h2>
                    <p style={{ marginBottom: "16px" }}>
                      随着 Web 多媒体技术的演进与本站工具箱的丰富，我们可能适时对本隐私政策进行微调。所有修订均将在本页面首部更新生效日期。如您对我们的本地沙盒隐私保护机制有任何意见或咨询，欢迎通过官方邮箱 support@happyconvert.app 与开发团队联系。
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: "16px", fontSize: "14px", fontWeight: "600", color: "var(--text-tertiary)" }}>
                      Last Updated and Effective Date: July 8, 2026
                    </p>
                    <p style={{ marginBottom: "24px" }}>
                      HappyConvert ("we," "our," or "the Studio") is dedicated to protecting the privacy and data security of creators, developers, and businesses worldwide. Unlike traditional online converters (such as Clideo, Kapwing, 123apps, or Canva) that require uploading media files to remote cloud servers, we utilize an offline-first WebAssembly architecture. This Privacy Policy transparently explains our zero-upload commitment and how we safeguard your anonymity through client-side computing.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. Media Processing & User Content — 100% Client-Side Compute, Zero Server Uploads</h2>
                    <p style={{ marginBottom: "16px" }}>
                      This is our core technological moat and primary security guarantee: when you import video, audio, or image files (such as MP4, MOV, WebM, WAV, or GIF) into our web workspace for transcoding, compressing, cutting, or cropping, <strong>no files, media chunks, or data streams are ever sent, uploaded, copied, or stored on our servers or any third-party cloud storage</strong>.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      All file reading, decoding, filter processing, and encoding occur strictly within your browser's sandboxed temporary memory (RAM) powered by your local CPU/GPU hardware. Once you close the browser tab or refresh the page, your operating system automatically releases and destroys all temporary memory blobs. We cannot access, inspect, or retain any of your creative works or confidential recordings.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. Personally Identifiable Information & No-Signup Anonymity</h2>
                    <p style={{ marginBottom: "16px" }}>
                      To champion user anonymity, HappyConvert is <strong>100% free with no registration barriers</strong>. You can use all features entirely anonymously: no account creation, no login credentials, no email address, and no credit card or phone number required. Consequently, we never collect, harvest, or process any Personally Identifiable Information (PII).
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. Local Storage & Cookie Guidelines</h2>
                    <p style={{ marginBottom: "16px" }}>
                      To provide a seamless user experience, we store minimal, non-sensitive UI preferences in your browser's local storage (such as localStorage). These include your color theme preference (Dark vs. Light mode), language choice (English vs. Chinese), and your last-used export parameters. These preference strings reside solely on your device and are never used for cross-site tracking or profiling.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>4. Third-Party Advertising & Google AdSense Compliance</h2>
                    <p style={{ marginBottom: "16px" }}>
                      To support our static web hosting and global CDN bandwidth costs—ensuring that our professional editing suite remains 100% free and watermark-free forever—we display non-intrusive advertisements via Google AdSense.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      In compliance with Google advertising policies, please be aware: Google and its third-party ad network partners use cookies (including the DoubleClick DART cookie) to serve relevant advertisements based on a user's prior visits to this website or other sites on the Internet. Users may opt out of personalized advertising at any time by visiting Google's Ad Settings (<a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" style={{ color: "var(--accent-purple)", textDecoration: "underline" }}>https://www.google.com/settings/ads</a>).
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>5. Server Access Logs & DDoS Protection</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Like all standard internet services, our cloud web hosting providers (such as Vercel, Cloudflare, or GitHub Pages) automatically generate anonymized server access logs when servicing HTTP requests. These logs contain basic technical data: masked IP addresses, browser User-Agent strings, timestamps, and routing paths. These logs are used strictly for network maintenance, DDoS prevention, and macro traffic analytics. They are never linked to any user files or personal identities.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>6. Offline Capability & International Data Compliance (GDPR / CCPA / HIPAA)</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Because our core media engine is compiled to WebAssembly, once you load the website and cache the WASM package (~30MB), you can <strong>disconnect your device from the internet entirely</strong> and continue editing videos offline. This physical data isolation inherently satisfies the strictest enterprise data residency and privacy frameworks, including the EU General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and healthcare HIPAA standards.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>7. Children's Privacy (COPPA)</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Our tools are designed for general audiences and professional creators. We do not knowingly collect personal information from children under the age of 13 (or 16 in the European Economic Area). Since we require no registration or data submission, no personal data of any kind is collected from any user.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>8. Policy Modifications & Contact Us</h2>
                    <p style={{ marginBottom: "16px" }}>
                      As WebAssembly standards and our studio features evolve, we may update this Privacy Policy periodically. All changes will be reflected with an updated effective date at the top of this document. If you have questions or inquiries regarding our client-side data isolation model, please contact us at support@happyconvert.app.
                    </p>
                  </>
                )
              )}

              {activePageConfig.path === "/terms/" && (
                lang === "zh" ? (
                  <>
                    <p style={{ marginBottom: "16px", fontSize: "14px", fontWeight: "600", color: "var(--text-tertiary)" }}>
                      最后更新与生效日期：2026年7月8日
                    </p>
                    <p style={{ marginBottom: "24px" }}>
                      欢迎使用 HappyConvert 快乐转码（以下简称“我们”、“本网站”或“本工作室”）。本《服务条款》（Terms of Service，以下简称“本条款”）是您（个人、企业或任何使用实体）与本工作室之间就使用我们提供的网页端音视频处理与文件转换工具所达成的法律协议。与市面上需上传云端、按文件体积收费或强制添加水印的传统竞品（如 Clideo、Kapwing、123apps 等）不同，我们构建于离线优先的 WebAssembly 架构。请您在开始使用前仔细阅读本协议。一经访问、浏览或使用本站任何功能，即表示您已充分理解并完全同意受本条款所有内容的约束。
                    </p>
                    
                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. 协议确认与条款变更</h2>
                    <p style={{ marginBottom: "16px" }}>
                      您访问或使用本站服务，即视为您具备完全的民事行为能力并接受本条款的约束。如果用户不同意本条款的任意部分，请立即终止使用并关闭网页标签。我们保留随着功能升级与法律演进，随时修改或补充本服务条款的权利。修订后的条款将在本页面顶部标注最新的生效日期。继续使用本站服务即视为您接受修改后的协议。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. 服务描述与“离线优先”客户端计算特性</h2>
                    <p style={{ marginBottom: "16px" }}>
                      本工作室提供基于 WebAssembly 引擎的网页端音视频剪辑、格式转换、压缩、裁剪及音频提取套件。与依赖远程云端服务器进行转码的传统平台不同，<strong>本站所有媒体计算均由您的计算机或手机硬件在浏览器本地临时内存沙盒（RAM）中 100% 闭环执行</strong>。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      由于计算在本地发生，服务不依赖任何云端媒体处理队列，因此我们不限制单次文件处理个数与理论体积上限（具体最大支持体积取决于您本机的可用内存与浏览器硬件配额）。一旦网站核心引擎库载入完成，您即可在断网离线状态下持续使用全部处理工具。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. 免费使用许可与商业用途授权</h2>
                    <p style={{ marginBottom: "16px" }}>
                      我们特此向全球创作者与团队授予一项非独占、全球性、免许可费（Royalty-Free）且可撤销的使用许可。您可以使用本站提供的全部工具处理您所持有的任何多媒体文件，用途涵盖<strong>个人娱乐、自媒体发布、学术研究以及任何形式的商业项目</strong>（包括商业广告、院线电影、企业内部培训及软件开发等），无须支付任何使用费或订阅费。我们承诺在导出的所有成品中<strong>绝对不添加任何商业水印或品牌强制标识</strong>。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>4. 用户行为规范与违禁内容严禁</h2>
                    <p style={{ marginBottom: "16px" }}>
                      您在利用本工具处理多媒体文件时，必须严格遵守您所在地及国际相关法律法规。您特此承诺并保证，<strong>严禁</strong>将本工具用于处理、宣传、制作或传播以下类别的违法或违规内容：
                    </p>
                    <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                      <li style={{ marginBottom: "8px" }}>任何涉及儿童色情、极端暴力、血腥恐怖、种族仇恨或煽动犯罪的媒体文件；</li>
                      <li style={{ marginBottom: "8px" }}>未经授权窃取、盗用第三方版权的影视作品、商业机密或侵犯他人知识产权与肖像权的素材；</li>
                      <li style={{ marginBottom: "8px" }}>任何意图利用浏览器脚本进行恶意挖矿、网络攻击或试图逆向破解本站 WebAssembly 核心封装的行为。</li>
                    </ul>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>5. 知识产权与用户内容所有权</h2>
                    <p style={{ marginBottom: "16px" }}>
                      <strong>您对处理前后的媒体内容享有 100% 的全部所有权与知识产权。</strong>部分传统在线剪辑网站在其用户协议中宣称对用户上传的素材享有二次展示或营销授权；而在 HappyConvert 无云剪，因我们采用“零上传”本地运算技术，我们既无法读取或复制您的文件，也绝对不对您的任何视频、音频或创意成果宣称任何形式的版权或许可。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      与此同时，本站的 UI 交互设计、底层代码实现、品牌标识（Logo）、域名及专有算法优化等全部知识产权，均归 HappyConvert 开发团队所有。未经官方书面许可，任何人不得抓取、克隆本站网页或将本站作为付费商业 SaaS 进行打包倒卖。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>6. 免责声明（"As-Is" 现状提供）</h2>
                    <p style={{ marginBottom: "16px" }}>
                      本站工具及技术代码是按<strong>“现状 (As-Is)”与“现有 (As-Available)”</strong>基础免费提供，本工作室不做出任何明示或暗示的担保，包括但不限于对适销性、特定用途适用性、系统兼容性及不侵权的担保。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      由于浏览器内存处理受制于各操作系统版本、底层硬件规格及各品牌浏览器（如 Chrome、Safari、Edge、Firefox）对 WebAssembly 内存配额的限制，本站无法保证服务在所有极端硬件环境下绝对不会出现内存溢出（Out-of-Memory）、卡顿或浏览器标签页崩溃的情况。<strong>建议您在进行任何长视频或多吉字节（GB）高规格视频处理前，做好原始素材的本地备份。</strong>
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>7. 责任限制与损失豁免</h2>
                    <p style={{ marginBottom: "16px" }}>
                      在法律允许的最大范围内，不论是否事先被告知可能性，HappyConvert、其开发者、开源贡献者及合作伙伴在任何情况下，均不对因使用、试图使用或无法使用本工具而引发的任何直接、间接、附带、特殊、惩罚性或后果性损害承担赔偿责任（这些损害包括但不限于：原始媒体文件数据损坏或丢失、商业利润损失、业务中断或由于电脑硬件发热导致的设备消耗）。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      由于我们在整个流程中不接触、不存储亦不传输用户的任何媒体流，因此本工作室不仅无需也无从承担任何因为用户自身处理违规或侵权多媒体内容所引发的第三方连带法律诉讼。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>8. 第三方广告展示与外部链接</h2>
                    <p style={{ marginBottom: "16px" }}>
                      为维持全球基础网页托管、CDN 加速及开放免费运营成本，本站在部分页面中嵌入了由 Google AdSense 等专业第三方合作网络提供的商业广告展示，或含有指向第三方开源工具及社区的外部链接。
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      本工作室对任何第三方广告赞助商所展示的商品、服务真实性或外部链接目标网站的安全性与隐私政策不承担背书或监管责任。用户在第三方网站上的任何交互与交易行为，均受该第三方服务条款约束，与本站无关。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>9. 适用法律与争议解决</h2>
                    <p style={{ marginBottom: "16px" }}>
                      本服务条款的解释、效力及纠纷解决均受通行的国际商务及互联网开源软件许可通则约束。如双方就本协议内容或使用本工具时发生任何争议，首先应当友好协商解决；协商不成的，任何一方均有权向具备管辖权的法院提起诉讼。
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>10. 协议终止与官方联系方式</h2>
                    <p style={{ marginBottom: "16px" }}>
                      您随时可以自行决定终止本条款，只需停止访问本网站、关闭浏览器标签并清理浏览器本地缓存即可。如您在使用过程中有任何关于法律合规、商业授权确认或服务反馈疑问，欢迎通过官方邮箱 support@happyconvert.app 向开发团队咨询。
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ marginBottom: "16px", fontSize: "14px", fontWeight: "600", color: "var(--text-tertiary)" }}>
                      Last Updated and Effective Date: July 8, 2026
                    </p>
                    <p style={{ marginBottom: "24px" }}>
                      Welcome to HappyConvert ("we," "our," or "the Studio"). These Terms of Service ("Terms") constitute a legally binding agreement between you (an individual, business, or entity) and our development team governing your access to and use of our browser-based video editing, format conversion, and media processing suite. Unlike traditional cloud-based competitors (such as Clideo, Kapwing, or 123apps) that charge for bandwidth or mandate watermark overlays, our tools are built on an offline-first WebAssembly architecture. By accessing, browsing, or utilizing any feature of this website, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>1. Acceptance of Terms & Modifications</h2>
                    <p style={{ marginBottom: "16px" }}>
                      By accessing or using our services, you represent that you have the legal capacity to enter into a binding contract. If you do not agree with any part of these Terms, you must immediately cease all use of the website and close your browser tab. We reserve the right to update, modify, or supplement these Terms at any time as our features evolve and laws change. The updated date at the top of this document will reflect the latest revision. Your continued use of the Studio after any changes indicates your full acceptance of the revised Terms.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>2. Service Description & Client-Side Architecture</h2>
                    <p style={{ marginBottom: "16px" }}>
                      HappyConvert provides a WebAssembly-powered browser suite for cutting, compressing, converting, cropping, and extracting audio from media files. Unlike traditional platforms that upload your files to remote servers for processing, <strong>all media computations on our platform are executed 100% locally within your device's browser temporary memory sandbox (RAM)</strong> using your own CPU/GPU hardware.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      Because processing occurs client-side, our service does not impose arbitrary cloud queue waiting times or theoretical file size limits (actual file size capacity depends entirely on your machine's available RAM and browser hardware quotas). Once the core WASM engine is cached, you can disconnect from the internet and use all editing tools offline.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>3. Royalty-Free License & Commercial Use</h2>
                    <p style={{ marginBottom: "16px" }}>
                      We hereby grant you a worldwide, non-exclusive, royalty-free, and revocable license to access and use our suite. You may use our tools to process any media files you own or have the right to edit for both <strong>personal projects and commercial purposes</strong> (including commercial advertising, feature films, YouTube monetization, corporate training, and software development) without paying any subscription fees or licensing royalties. We strictly promise <strong>zero watermark overlays and no artificial branding</strong> on your exported files.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>4. User Conduct & Prohibited Content</h2>
                    <p style={{ marginBottom: "16px" }}>
                      You agree to use our tools strictly in compliance with all local, national, and international laws. You explicitly represent and warrant that you will <strong>NOT</strong> use HappyConvert to process, generate, or distribute any of the following prohibited categories of content:
                    </p>
                    <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                      <li style={{ marginBottom: "8px" }}>Content involving child exploitation, extreme violence, gore, terrorism, racial hatred, or incitement to illegal acts;</li>
                      <li style={{ marginBottom: "8px" }}>Unauthorized copyrighted films, proprietary trade secrets, or material infringing upon third-party intellectual property or privacy rights;</li>
                      <li style={{ marginBottom: "8px" }}>Any activity aimed at reverse-engineering our WebAssembly wrappers, injecting malicious crypto-mining scripts, or launching network DDoS attacks against our hosting infrastructure.</li>
                    </ul>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>5. Intellectual Property & User Content Ownership</h2>
                    <p style={{ marginBottom: "16px" }}>
                      <strong>You retain 100% complete ownership and all intellectual property rights to your media files before, during, and after processing.</strong> While some online video editors claim promotional license rights over user-uploaded content in their terms, HappyConvert's zero-upload architecture means we never inspect, copy, or host your files, and we claim zero copyright or promotional license over your creative works.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      Conversely, the software code, UI design, brand logos, domain names, and proprietary WASM optimization techniques belonging to HappyConvert remain the exclusive intellectual property of our development team. Unauthorized cloning, scraping, or repackaging of this website as a commercial paid SaaS is strictly prohibited.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>6. Disclaimer of Warranties ("As-Is" Provision)</h2>
                    <p style={{ marginBottom: "16px" }}>
                      Our tools and software are provided on an <strong>"AS-IS" and "AS-AVAILABLE" basis</strong> without warranties or guarantees of any kind, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, system compatibility, and non-infringement.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      Because in-browser video processing relies heavily on local device RAM and browser-specific WebAssembly memory limits (e.g., across Chrome, Safari, Edge, and Firefox), we cannot guarantee that processing extremely large 4K/8K files or multi-gigabyte files will never trigger Out-of-Memory (OOM) errors, stuttering, or browser tab crashes. <strong>We strongly advise maintaining a local backup of your original raw video files before initiating heavy transcoding tasks.</strong>
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>7. Limitation of Liability</h2>
                    <p style={{ marginBottom: "16px" }}>
                      To the maximum extent permitted by applicable law, in no event shall HappyConvert, its developers, open-source contributors, or partners be liable for any direct, indirect, incidental, special, punitive, or consequential damages (including but not limited to: data corruption, file loss, lost profits, business interruption, or hardware degradation caused by intensive CPU/GPU rendering) arising out of the use or inability to use our tools.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      Because we never host, transmit, or monitor user media streams at any stage, we bear no legal responsibility or vicarious liability whatsoever for third-party copyright claims or legal disputes arising from content processed by users on their local machines.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>8. Third-Party Advertisements & External Links</h2>
                    <p style={{ marginBottom: "16px" }}>
                      To support our global CDN hosting expenses and maintain our commitment to offering a 100% free, watermark-free service, we display commercial advertisements provided by third-party ad networks (such as Google AdSense) and may include external links to community resources or open-source libraries.
                    </p>
                    <p style={{ marginBottom: "16px" }}>
                      We do not endorse, monitor, or assume responsibility for the accuracy, safety, or privacy practices of third-party advertisers or external websites. Any interactions, transactions, or agreements between you and third-party advertisers are strictly between you and the third party.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>9. Governing Law & Dispute Resolution</h2>
                    <p style={{ marginBottom: "16px" }}>
                      These Terms shall be governed by and construed in accordance with standard international commercial and open-source software licensing principles. Any dispute or claim arising out of or relating to these Terms or your use of the Studio shall first be addressed through friendly good-faith negotiation. If a resolution cannot be reached, either party may submit the dispute to a court of competent jurisdiction.
                    </p>

                    <h2 style={{ fontSize: "18px", fontWeight: "700", marginTop: "28px", marginBottom: "12px", color: "var(--text-primary)", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>10. Termination & Contact Information</h2>
                    <p style={{ marginBottom: "16px" }}>
                      You may terminate your agreement to these Terms at any time simply by ceasing all use of our website, closing your browser tabs, and clearing your local browser cache. If you have any legal questions, commercial licensing inquiries, or feedback regarding these Terms of Service, please contact our development team at support@happyconvert.app.
                    </p>
                  </>
                )
              )}
            </div>
            <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-end" }}>
              <button className="studio-btn studio-btn-primary" onClick={navigateToHome} style={{ padding: "8px 24px", minWidth: "120px" }}>
                {lang === "zh" ? "返回工具箱" : "Back to Studio"}
              </button>
            </div>
          </div>
        </main>
      ) : isBlogPage ? (
        <main className="blog-layout-container" role="main" style={{ maxWidth: "1050px", margin: "40px auto", padding: "0 20px", width: "100%" }}>
          {activePageConfig.isBlogIndex ? (
            <div className="blog-index-view">
              <div style={{ textAlign: "center", marginBottom: "48px", padding: "32px 0", borderBottom: "1px solid var(--border-color)" }}>
                <span style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", padding: "4px 14px", backgroundColor: "rgba(139, 92, 246, 0.12)", color: "var(--accent-purple)", borderRadius: "20px", marginBottom: "16px" }}>
                  {lang === "zh" ? "探索技术与实践" : "KNOWLEDGE HUB"}
                </span>
                <h1 style={{ fontSize: "38px", fontWeight: "800", marginBottom: "16px", fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  {lang === "zh" ? "音视频处理实战教程与技术博客" : "Video Studio Blog & Guides"}
                </h1>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" }}>
                  {lang === "zh" 
                    ? "深度解析基于 WebAssembly 的浏览器本地多媒体技术，为您提供极速高质量压缩、格式转码与视频调色的实战操作指南。"
                    : "Deep dives into WebAssembly media processing, practical video compression guides, and zero-loss format conversion tutorials."}
                </p>
              </div>

              <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px", marginBottom: "60px" }}>
                {BLOG_PAGES.filter(p => p.isArticle).map((art) => {
                  const locArt = localizedPage(art, lang);
                  return (
                    <div 
                      key={art.path}
                      className="blog-card"
                      onClick={() => navigateToPath(art.path)}
                      style={{
                        backgroundColor: "var(--bg-surface)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "var(--radius-lg)",
                        padding: "28px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        boxShadow: "var(--shadow-sm)"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-purple)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
                    >
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 12px", backgroundColor: "rgba(139, 92, 246, 0.12)", color: "var(--accent-purple)", borderRadius: "20px" }}>
                            {locArt.category || (lang === "zh" ? "教程" : "Guide")}
                          </span>
                          <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                            {locArt.readTime}
                          </span>
                        </div>
                        <h2 style={{ fontSize: "20px", fontWeight: "700", lineHeight: "1.4", marginBottom: "12px", color: "var(--text-primary)" }}>
                          {locArt.title}
                        </h2>
                        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "24px", display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {locArt.description}
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border-color)", paddingTop: "16px", marginTop: "auto" }}>
                        <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{locArt.date}</span>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--accent-purple)" }}>
                          {lang === "zh" ? "阅读教程 →" : "Read Article →"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="blog-article-view" style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "48px", boxShadow: "var(--shadow-md)", marginBottom: "60px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", padding: "4px 14px", backgroundColor: "rgba(139, 92, 246, 0.12)", color: "var(--accent-purple)", borderRadius: "20px" }}>
                  {activePage.category || (lang === "zh" ? "实战教程" : "Guide")}
                </span>
                <span style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>•</span>
                <span style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{activePage.date}</span>
                <span style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>•</span>
                <span style={{ fontSize: "13px", color: "var(--text-tertiary)" }}>{activePage.readTime}</span>
              </div>

              <h1 style={{ fontSize: "32px", fontWeight: "800", lineHeight: "1.35", marginBottom: "20px", fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                {activePage.title}
              </h1>

              <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "36px", paddingBottom: "24px", borderBottom: "1.5px solid var(--border-color)", fontWeight: "500" }}>
                {activePage.description}
              </p>

              <div className="article-body" style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)" }}>
                {activePage.content && activePage.content.map((sec, idx) => (
                  <div key={idx} style={{ marginBottom: "32px" }}>
                    {sec.h2 && (
                      <h2 style={{ fontSize: "22px", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--text-primary)" }}>
                        {sec.h2}
                      </h2>
                    )}
                    {sec.p && sec.p.map((para, pIdx) => (
                      <p key={pIdx} style={{ marginBottom: "16px" }}>{para}</p>
                    ))}
                    {sec.list && (
                      <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
                        {sec.list.map((item, lIdx) => (
                          <li key={lIdx} style={{ marginBottom: "10px" }}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {sec.callout && (
                      <div style={{ padding: "20px 24px", backgroundColor: "rgba(139, 92, 246, 0.08)", borderLeft: "4px solid var(--accent-purple)", borderRadius: "var(--radius-md)", margin: "28px 0", color: "var(--text-primary)", fontWeight: "500", fontSize: "15px", lineHeight: "1.6" }}>
                        {sec.callout}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <nav className="article-related-tools" aria-label={lang === "zh" ? "文章相关工具" : "Article related tools"}>
                <span>{lang === "zh" ? "相关工具：" : "Related tools:"}</span>
                {[
                  activePageConfig.toolLink && TOOL_PAGES.find((page) => page.path === activePageConfig.toolLink),
                  ...TOOL_PAGES.filter((page) => page.path !== activePageConfig.toolLink).slice(0, 3)
                ].filter(Boolean).map((page) => {
                  const item = localizedPage(page, lang);
                  return (
                    <a
                      key={page.path}
                      href={buildLocalizedPath(page.path, lang)}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToPath(page.path);
                      }}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </nav>

              <div className="article-cta-box" style={{ marginTop: "56px", padding: "40px", backgroundColor: "var(--bg-root)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", textAlign: "center", backgroundImage: "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)" }}>
                <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px", color: "var(--text-primary)" }}>
                  {lang === "zh" ? "🚀 想要亲自体验极速无损视频处理？" : "🚀 Ready to experience blazing-fast video processing?"}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "28px", maxWidth: "600px", margin: "0 auto 28px auto" }}>
                  {lang === "zh" 
                    ? `立即免费打开 ${activePage.toolName || "无云剪工作室"}！无需注册账号、无需上传文件、纯净无水印，依靠 WebAssembly 引擎在您的浏览器本地极速完成。`
                    : `Try our ${activePage.toolName || "HappyConvert"} online now! 100% Free, no sign-up required, no file uploads, and zero watermarks.`}
                </p>
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button 
                    className="studio-btn studio-btn-primary"
                    onClick={() => navigateToPath(activePageConfig.toolLink || "/")}
                    style={{ padding: "12px 32px", fontSize: "16px", fontWeight: "700" }}
                  >
                    {lang === "zh" ? `👉 免费打开${activePage.toolName || "工作室"}` : `👉 Open ${activePage.toolName || "Studio"} Free`}
                  </button>
                  <button 
                    className="studio-btn studio-btn-secondary"
                    onClick={() => navigateToPath("/blog/")}
                    style={{ padding: "12px 24px", fontSize: "15px" }}
                  >
                    {lang === "zh" ? "← 返回教程中心" : "← Back to All Guides"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      ) : (
        <>
          {/* Hero Intro Section for SEO and user orientation */}
          <section className="studio-hero">
        <div className="hero-glow-circle circle-1"></div>
        <div className="hero-glow-circle circle-2"></div>
        <div className="hero-badge">
          <span className="badge-pulse-dot"></span>
          <span>{activePage.badge || t("heroBadgeText")}</span>
        </div>
        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: activePage.h1 }}></h1>
        <p className="hero-subtitle">{activePage.subtitle}</p>
      </section>

      {/* Google AdSense: Horizontal Top Banner */}
      <div className="adsense-slot ads-horizontal">
        <div className="adsense-placeholder">
          <span className="adsense-tag">{lang === "zh" ? "广告" : "SPONSOR"}</span>
          <span className="adsense-title">{lang === "zh" ? "Google AdSense 广告预留位" : "Google AdSense Reserved Slot"}</span>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <main className="studio-workspace vertical-stack" role="main">
        {/* Tool-Specific Pro-Tip Banner Card for SEO Differentiation & User Guidance */}
        {activePage.proTip && (
          <div className="tool-pro-tip-card">
            <div className="pro-tip-icon">✨</div>
            <div className="pro-tip-content">{activePage.proTip}</div>
          </div>
        )}

        {/* Upper row: Stage Deck (Player Preview & Timeline - Section 2 Moved above Section 1) */}
        <div className="stage-deck">
          {/* Merged Media Stage / Workspace (Upload Zone when empty, Player Preview when loaded) */}
          <div className="studio-card preview-card merged-media-stage" id="workspace-stage" style={{ minHeight: !file ? "380px" : "auto", display: "flex", flexDirection: "column" }}>
            {!file ? (
              <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "8px" }}>
                <div className="card-title" style={{ marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px dashed var(--border-color)" }}>
                  {t("inputCardTitle")}
                  <span>{t("localOnly")}</span>
                </div>
                <div 
                  className="upload-zone"
                  style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "280px" }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    selectFile(e.dataTransfer.files[0]);
                  }}
                  onClick={() => document.getElementById("fileUploader").click()}
                >
                  <input 
                    id="fileUploader" 
                    type="file" 
                    accept="video/*,audio/*" 
                    hidden 
                    onChange={(e) => selectFile(e.target.files[0])} 
                  />
                  <div className="upload-icon-container" style={{ transform: "scale(1.1)", marginBottom: "16px" }}>+</div>
                  <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{t("dragText")}</h3>
                  <p style={{ fontSize: "14px", marginBottom: "20px" }}>{t("formatsText")}</p>
                  <div className="upload-format-pills">
                    <span className="upload-format-pill">MP4</span>
                    <span className="upload-format-pill">MOV</span>
                    <span className="upload-format-pill">MKV</span>
                    <span className="upload-format-pill">MP3</span>
                    <span className="upload-format-pill">WAV</span>
                    <span className="upload-format-pill">FLAC</span>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Top Header with File Metadata and Cross Button (✕) to Re-upload */}
                <div className="merged-stage-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid var(--border-color)", backgroundColor: "var(--bg-surface-elevated)", borderTopLeftRadius: "var(--radius-lg)", borderTopRightRadius: "var(--radius-lg)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
                    <span style={{ fontSize: "22px" }}>{file.type.startsWith("audio/") ? "🎵" : "🎥"}</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap", minWidth: 0 }}>
                      <span className="file-name" title={file.name} style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "16px", maxWidth: "400px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{file.name}</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "13px", fontWeight: "500" }}>
                        ({formatBytes(file.size)} • {videoWidth ? `${videoWidth}x${videoHeight}` : t("audioFile")})
                      </span>
                    </div>
                  </div>
                  <button 
                    className="stage-reupload-btn" 
                    title={lang === "zh" ? "重新上传 / 更换文件" : "Re-upload / Change File"}
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "var(--radius-full)", background: "rgba(239, 68, 68, 0.1)", color: "var(--accent-red)", border: "1px solid rgba(239, 68, 68, 0.25)", cursor: "pointer", fontSize: "14px", fontWeight: "700", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(239, 68, 68, 0.1)" }}
                    onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent-red)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)"; e.currentTarget.style.color = "var(--accent-red)"; }}
                    onClick={() => {
                      setFile(null);
                      setPreviewUrl("");
                      setDuration(0);
                      setVideoWidth(0);
                      setVideoHeight(0);
                      setLatestOutput(null);
                      addLog(t("logUnloaded"), "info");
                    }}
                  >
                    <span style={{ fontSize: "16px", lineHeight: 1 }}>✕</span>
                    <span>{lang === "zh" ? "重新上传" : "Re-upload"}</span>
                  </button>
                </div>

                {/* Player Preview Container */}
                <div className="preview-container" style={{ padding: "16px", background: "#000", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "360px", borderBottomLeftRadius: "var(--radius-lg)", borderBottomRightRadius: "var(--radius-lg)" }}>
                  {file.type.startsWith("audio/") ? (
                    <div className="audio-preview-screen">
                      <div className={`audio-disc-icon ${videoRef.current?.paused ? "paused" : ""}`}>💿</div>
                      <audio 
                        key={previewUrl}
                        ref={videoRef}
                        src={previewUrl}
                        controls
                        onLoadedMetadata={onMetadataLoaded}
                        onTimeUpdate={handleTimeUpdate}
                      />
                    </div>
                  ) : (
                    <div 
                      ref={videoWrapperRef}
                      className="video-wrapper"
                      style={{ 
                        position: "relative", 
                        maxWidth: "100%", 
                        maxHeight: "100%", 
                        aspectRatio: videoWidth && videoHeight ? `${videoWidth} / ${videoHeight}` : "auto" 
                      }}
                    >
                      <video 
                        key={previewUrl}
                        ref={videoRef} 
                        src={previewUrl} 
                        controls 
                        onLoadedMetadata={onMetadataLoaded}
                        onTimeUpdate={handleTimeUpdate}
                      />
                      {/* Visual Crop Guide Box overlay when Crop tool is selected */}
                      {effectiveSelectedTool === "Crop" && videoWidth > 0 && (
                        <div 
                          className="crop-overlay-mesh"
                          style={{
                            left: `${(cropX / videoWidth) * 100}%`,
                            top: `${(cropY / videoHeight) * 100}%`,
                            width: `${(cropW / videoWidth) * 100}%`,
                            height: `${(cropH / videoHeight) * 100}%`
                          }}
                          onMouseDown={(e) => handleCropMouseDown(e, "move")}
                          onTouchStart={(e) => handleCropTouchStart(e, "move")}
                        >
                          <div className="crop-handle handle-tl" onMouseDown={(e) => handleCropMouseDown(e, "tl")} onTouchStart={(e) => handleCropTouchStart(e, "tl")} />
                          <div className="crop-handle handle-tr" onMouseDown={(e) => handleCropMouseDown(e, "tr")} onTouchStart={(e) => handleCropTouchStart(e, "tr")} />
                          <div className="crop-handle handle-bl" onMouseDown={(e) => handleCropMouseDown(e, "bl")} onTouchStart={(e) => handleCropTouchStart(e, "bl")} />
                          <div className="crop-handle handle-br" onMouseDown={(e) => handleCropMouseDown(e, "br")} onTouchStart={(e) => handleCropTouchStart(e, "br")} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Dual Slider Timeline Slider */}
          {["Trim", "GIF", "Extract Audio"].includes(effectiveSelectedTool) && (
            <div className="studio-card timeline-card">
              <div className="timeline-header">
                <span className="label">⏱ {t("selectionRange")}</span>
                <span className="time">
                  {formatTime(startTimeSec, true)} - {formatTime(endTimeSec, true)}
                  <span style={{ color: "var(--text-muted)", fontWeight: "500", marginLeft: "8px" }}>
                    ({t("durationLabel")}: {formatTime(endTimeSec - startTimeSec, true)})
                  </span>
                </span>
              </div>

              {/* Custom Dual Handles Slider Container */}
              <div className="timeline-slider-container">
                {/* Tick Marks background */}
                <div className="timeline-ticks">
                  {Array.from({ length: 30 }).map((_, i) => <span key={i}></span>)}
                </div>

                {/* Active Selection range highlighting */}
                <div 
                  className="timeline-range-bar"
                  style={{
                    left: `${(startTimeSec / (duration || 1)) * 100}%`,
                    width: `${((endTimeSec - startTimeSec) / (duration || 1)) * 100}%`
                  }}
                ></div>

                {/* Playhead ticker indicator */}
                <div 
                  className="timeline-playhead-indicator"
                  style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
                ></div>

                {/* Underlying dual ranges inputs */}
                <div className="dual-range-inputs">
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    step="0.05"
                    value={(startTimeSec / (duration || 1)) * 100}
                    onChange={(e) => handleStartPercentChange(parseFloat(e.target.value))}
                    disabled={!file}
                  />
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    step="0.05"
                    value={(endTimeSec / (duration || 1)) * 100}
                    onChange={(e) => handleEndPercentChange(parseFloat(e.target.value))}
                    disabled={!file}
                  />
                </div>
              </div>

              {/* Timeline Playback and capture helper controls */}
              <div className="timeline-controls">
                <div style={{ display: "flex", gap: "8px" }}>
                  <button 
                    className="timeline-cap-btn" 
                    onClick={togglePlay} 
                    disabled={!file}
                  >
                    {t("playPause")}
                  </button>
                  <button 
                    className="timeline-cap-btn" 
                    onClick={playSelection} 
                    disabled={!file}
                    style={{ borderColor: "var(--accent-indigo)" }}
                  >
                    {t("playSelection")}
                  </button>
                </div>
                
                <div className="timeline-inputs">
                  <button 
                    className="timeline-cap-btn" 
                    onClick={captureStart} 
                    disabled={!file}
                  >
                    {t("setCurrentStart")}
                  </button>
                  <button 
                    className="timeline-cap-btn" 
                    onClick={captureEnd} 
                    disabled={!file}
                  >
                    {t("setCurrentEnd")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Middle row: Control Deck (Inputs & Configs side-by-side - Section 1) */}
        <div className="control-deck">
          <div className="control-left-col" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Tools tab selection and Options workspace */}
            <div className="studio-card" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div className="card-title">
              {t(`tool_${effectiveSelectedTool.replace(" ", "")}`)}
              <span>{t("configLabel")}</span>
            </div>

            {/* Dynamic settings context based on selected tool */}
            <div className="tool-settings-wrapper">
              {/* 1. TRIM SETTINGS */}
              {effectiveSelectedTool === "Trim" && (
                <div className="tool-settings-panel">
                  <div className="setting-group">
                    <label>
                      {t("trimCutMode")}
                      <span>{trimMode === "copy" ? "Lossless" : "Re-encode"}</span>
                    </label>
                    <select 
                      className="studio-select" 
                      value={trimMode}
                      onChange={(e) => setTrimMode(e.target.value)}
                    >
                      <option value="copy">{t("trimLossless")}</option>
                      <option value="reencode">{t("trimReencode")}</option>
                    </select>
                    <div className="setting-help-note">
                      {t("trimHelp")}
                    </div>
                  </div>
                  <div className="setting-group" style={{ marginTop: "12px" }}>
                    <div className="input-row">
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("trimStart")}</label>
                        <input 
                          type="text" 
                          className="studio-input"
                          value={formatTime(startTimeSec, true)}
                          onChange={(e) => {
                            const secs = parseTime(e.target.value);
                            if (Number.isFinite(secs) && secs >= 0 && secs < endTimeSec) {
                              setStartTimeSec(secs);
                            }
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("trimEnd")}</label>
                        <input 
                          type="text" 
                          className="studio-input"
                          value={formatTime(endTimeSec, true)}
                          onChange={(e) => {
                            const secs = parseTime(e.target.value);
                            if (Number.isFinite(secs) && secs > startTimeSec && secs <= duration) {
                              setEndTimeSec(secs);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. COMPRESS SETTINGS */}
              {effectiveSelectedTool === "Compress" && (
                <div className="tool-settings-panel">
                  <div className="setting-group" style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px dashed var(--border-color)" }}>
                    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--accent-purple)", fontWeight: "700" }}>
                      <span>⚡ {lang === "zh" ? "小白一键推荐场景 (点击即填参数)" : "1-Click Recommended Presets"}</span>
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px", marginTop: "8px" }}>
                      <button 
                        type="button"
                        onClick={() => { setCompressionQuality("medium"); setCompressionScale("720p"); setCompressionPreset("veryfast"); }}
                        style={{ padding: "10px 12px", borderRadius: "var(--radius-md)", border: "1px solid rgba(139, 92, 246, 0.3)", background: "rgba(139, 92, 246, 0.08)", color: "var(--text-primary)", fontSize: "12px", fontWeight: "600", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = "var(--accent-purple)"}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)"}
                      >
                        🚀 {lang === "zh" ? "微信/钉钉/Discord" : "Discord / WeChat"}
                        <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px", fontWeight: "400" }}>{lang === "zh" ? "限制 25MB 内 (720p/平衡)" : "Under 25MB limit"}</div>
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setCompressionQuality("low"); setCompressionScale("480p"); setCompressionPreset("ultrafast"); }}
                        style={{ padding: "10px 12px", borderRadius: "var(--radius-md)", border: "1px solid rgba(6, 182, 212, 0.3)", background: "rgba(6, 182, 212, 0.08)", color: "var(--text-primary)", fontSize: "12px", fontWeight: "600", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = "var(--accent-cyan)"}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)"}
                      >
                        📧 {lang === "zh" ? "邮件附件专用" : "Email Attachment"}
                        <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px", fontWeight: "400" }}>{lang === "zh" ? "极致压缩 10MB 内 (480p)" : "Max shrink under 10MB"}</div>
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setCompressionQuality("high"); setCompressionScale("100%"); setCompressionPreset("medium"); }}
                        style={{ padding: "10px 12px", borderRadius: "var(--radius-md)", border: "1px solid rgba(16, 185, 129, 0.3)", background: "rgba(16, 185, 129, 0.08)", color: "var(--text-primary)", fontSize: "12px", fontWeight: "600", cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = "#10b981"}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)"}
                      >
                        🎬 {lang === "zh" ? "4K 高保真存档" : "Lossless Archive"}
                        <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px", fontWeight: "400" }}>{lang === "zh" ? "高质量画质 (原分辨率)" : "Original resolution HQ"}</div>
                      </button>
                    </div>
                  </div>
                  <div className="conversion-estimate-note">
                    <div className="conversion-estimate-note-title">
                      {lang === "zh" ? "⏱️ 浏览器本地转码耗时参考" : "⏱️ Browser conversion time estimate"}
                    </div>
                    <div className="conversion-estimate-grid">
                      <span>{lang === "zh" ? "13MB WebM" : "13MB WebM"}</span>
                      <strong>{lang === "zh" ? "约 5 分钟" : "~5 min"}</strong>
                      <span>{lang === "zh" ? "100MB WebM" : "100MB WebM"}</span>
                      <strong>{lang === "zh" ? "30 分钟以上" : "30+ min"}</strong>
                      <span>{lang === "zh" ? "300MB WebM" : "300MB WebM"}</span>
                      <strong>{lang === "zh" ? "1-2 小时或失败" : "1-2h or may fail"}</strong>
                    </div>
                    <p>
                      {lang === "zh"
                        ? "几百 MB 视频不建议在浏览器里转 WebM；如需通用下载播放，请优先导出 MP4。"
                        : "For hundreds of MBs, browser WebM conversion is not recommended. Export MP4 for faster, universal local playback."}
                    </p>
                  </div>
                  <div className="setting-group">
                    <label>
                      {t("compQuality")}
                      <span className="val">{compressionQuality.toUpperCase()}</span>
                    </label>
                    <div className="comp-tier-grid">
                      <div className={`comp-tier-card ${compressionQuality === "high" ? "active" : ""}`} onClick={() => setCompressionQuality("high")}>
                        <strong>💎 {lang === "zh" ? "高画质" : "High Quality"}</strong>
                        <small>CRF 23 • ~30% smaller</small>
                      </div>
                      <div className={`comp-tier-card ${compressionQuality === "medium" ? "active" : ""}`} onClick={() => setCompressionQuality("medium")}>
                        <strong>⚖️ {lang === "zh" ? "平衡模式" : "Balanced"}</strong>
                        <small>CRF 28 • ~60% smaller</small>
                      </div>
                      <div className={`comp-tier-card ${compressionQuality === "low" ? "active" : ""}`} onClick={() => setCompressionQuality("low")}>
                        <strong>⚡ {lang === "zh" ? "极小文件" : "Max Compression"}</strong>
                        <small>CRF 33 • ~80% smaller</small>
                      </div>
                    </div>
                    <select 
                      className="studio-select" 
                      style={{ marginTop: "8px" }}
                      value={compressionQuality}
                      onChange={(e) => setCompressionQuality(e.target.value)}
                    >
                      <option value="high">{t("compHigh")}</option>
                      <option value="medium">{t("compMedium")}</option>
                      <option value="low">{t("compLow")}</option>
                    </select>
                    <div className="setting-help-note">
                      {t("compHelp")}
                    </div>
                  </div>

                  <div className="setting-group">
                    <label>{t("compScale")}</label>
                    <select 
                      className="studio-select" 
                      value={compressionScale}
                      onChange={(e) => setCompressionScale(e.target.value)}
                    >
                      <option value="100%">{t("compScaleOrig")}</option>
                      <option value="720p">720p HD (1280w)</option>
                      <option value="480p">480p SD (854w)</option>
                      <option value="360p">360p Mobile (640w)</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label>{t("compPreset")}</label>
                    <select 
                      className="studio-select" 
                      value={compressionPreset}
                      onChange={(e) => setCompressionPreset(e.target.value)}
                    >
                      <option value="ultrafast">{t("compUltrafast")}</option>
                      <option value="veryfast">{t("compVeryfast")}</option>
                      <option value="medium">{t("compSlow")}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* 3. CONVERT SETTINGS */}
              {effectiveSelectedTool === "Convert" && (
                <div className="tool-settings-panel">
                  <div className="setting-group" style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px dashed var(--border-color)" }}>
                    <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--accent-purple)", fontWeight: "700" }}>
                      <span>⚡ {lang === "zh" ? "常见格式一键转换推荐" : "1-Click Format Recommendations"}</span>
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px", marginTop: "8px" }}>
                      <button 
                        type="button"
                        onClick={() => { setConvertFormat("mp4"); setConvertVideoCodec("libx264"); setConvertAudioCodec("aac"); }}
                        className={`convert-preset-card convert-preset-card-purple ${isConvertPresetActive("mp4") ? "active" : ""}`}
                        aria-pressed={isConvertPresetActive("mp4")}
                      >
                        📱 {lang === "zh" ? "iPhone MOV 转 MP4" : "Apple MOV to MP4"}
                        <div>{lang === "zh" ? "完美适配 Windows/剪映" : "Best for Win & Premiere"}</div>
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setConvertFormat("webm"); setConvertVideoCodec("libvpx"); setConvertAudioCodec("vorbis"); }}
                        className={`convert-preset-card convert-preset-card-cyan ${isConvertPresetActive("webm") ? "active" : ""}`}
                        aria-pressed={isConvertPresetActive("webm")}
                      >
                        🌐 {lang === "zh" ? "WebM 网页视频" : "WebM for Web Embed"}
                        <div>{lang === "zh" ? "网页播放友好，但转码会比 MP4 慢" : "Web-friendly, slower than MP4 to encode"}</div>
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setConvertFormat("mp3"); setConvertVideoCodec("copy"); setConvertAudioCodec("copy"); }}
                        className={`convert-preset-card convert-preset-card-green ${isConvertPresetActive("mp3") ? "active" : ""}`}
                        aria-pressed={isConvertPresetActive("mp3")}
                      >
                        🎵 {lang === "zh" ? "分离纯音频 MP3" : "Extract Audio MP3"}
                        <div>{lang === "zh" ? "提取视频背景音乐 BGM" : "Save BGM track"}</div>
                      </button>
                    </div>
                  </div>
                  <div className="setting-group">
                    <label>{t("convTarget")}</label>
                    <select 
                      className="studio-select" 
                      value={convertFormat}
                      onChange={(e) => {
                        const fmt = e.target.value;
                        setConvertFormat(fmt);
                        if (fmt === "webm") {
                          setConvertVideoCodec("libvpx");
                          setConvertAudioCodec("vorbis");
                        } else if (fmt === "mp3" || fmt === "wav") {
                          setConvertVideoCodec("copy");
                          setConvertAudioCodec("copy");
                        } else {
                          setConvertVideoCodec("libx264");
                          setConvertAudioCodec("aac");
                        }
                      }}
                    >
                      <option value="mp4">MP4 Video (H.264 + AAC)</option>
                      <option value="webm">WebM Video (VP8 + Vorbis)</option>
                      <option value="mov">MOV QuickTime (H.264 + AAC)</option>
                      <option value="mkv">MKV Matroska (Generic)</option>
                      <option value="mp3">MP3 Audio stream (Only)</option>
                      <option value="wav">WAV Raw PCM Audio (Only)</option>
                    </select>
                  </div>

                  {convertFormat !== "mp3" && convertFormat !== "wav" && (
                    <>
                      <div className="setting-group">
                        <label>{t("convVideoCodec")}</label>
                        <select 
                          className="studio-select" 
                          value={convertVideoCodec}
                          onChange={(e) => setConvertVideoCodec(e.target.value)}
                        >
                          <option value="libx264">{t("convVideoH264")}</option>
                          <option value="libvpx">{lang === "zh" ? "VP8 (WebM 兼容编码)" : "VP8 (WebM compatible)"}</option>
                          <option value="copy">{t("convVideoCopy")}</option>
                        </select>
                      </div>

                      <div className="setting-group">
                        <label>{t("convAudioCodec")}</label>
                        <select 
                          className="studio-select" 
                          value={convertAudioCodec}
                          onChange={(e) => setConvertAudioCodec(e.target.value)}
                        >
                          <option value="aac">{t("convAudioAAC")}</option>
                          <option value="vorbis">{lang === "zh" ? "Vorbis (WebM 兼容音频)" : "Vorbis (WebM compatible)"}</option>
                          <option value="copy">{t("convAudioCopy")}</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* 4. GIF EXPORT SETTINGS */}
              {effectiveSelectedTool === "GIF" && (
                <div className="tool-settings-panel">
                  <div className="setting-group">
                    <label>
                      {t("gifFps")}
                      <span className="val">{gifFps} FPS</span>
                    </label>
                    <select 
                      className="studio-select" 
                      value={gifFps}
                      onChange={(e) => setGifFps(Number(e.target.value))}
                    >
                      <option value="5">{t("gifFps5")}</option>
                      <option value="10">{t("gifFps10")}</option>
                      <option value="15">{t("gifFps15")}</option>
                      <option value="20">{t("gifFps20")}</option>
                    </select>
                  </div>

                  <div className="setting-group">
                    <label>
                      {t("gifWidth")}
                      <span className="val">{gifWidth}px</span>
                    </label>
                    <select 
                      className="studio-select" 
                      value={gifWidth}
                      onChange={(e) => setGifWidth(Number(e.target.value))}
                    >
                      <option value="320">{t("gifWidth320")}</option>
                      <option value="480">{t("gifWidth480")}</option>
                      <option value="640">{t("gifWidth640")}</option>
                      <option value="800">{t("gifWidth800")}</option>
                    </select>
                    <div className="setting-help-note">
                      {t("gifHelp")}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. AUDIO EXTRACT SETTINGS */}
              {effectiveSelectedTool === "Extract Audio" && (
                <div className="tool-settings-panel">
                  <div className="setting-group">
                    <label>{t("audioFormat")}</label>
                    <select 
                      className="studio-select" 
                      value={audioExtractFormat}
                      onChange={(e) => setAudioExtractFormat(e.target.value)}
                    >
                      <option value="mp3">MP3 Lossy format</option>
                      <option value="wav">WAV Lossless PCM format</option>
                    </select>
                  </div>

                  {audioExtractFormat === "mp3" && (
                    <div className="setting-group">
                      <label>{t("audioKbps")}</label>
                      <select 
                        className="studio-select" 
                        value={audioKbps}
                        onChange={(e) => setAudioKbps(e.target.value)}
                      >
                        <option value="128k">{t("audioKbps128")}</option>
                        <option value="192k">{t("audioKbps192")}</option>
                        <option value="256k">{t("audioKbps256")}</option>
                        <option value="320k">{t("audioKbps320")}</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              {/* 6. CROP SETTINGS */}
              {effectiveSelectedTool === "Crop" && (
                <div className="tool-settings-panel">
                  <div className="setting-group">
                    <label>{t("cropRatio")}</label>
                    <div className="social-ratio-tags">
                      <span className={`social-tag ${cropRatio === "9:16" ? "active" : ""}`} onClick={() => applyCropPreset("9:16")}>📱 TikTok / Shorts 9:16</span>
                      <span className={`social-tag ${cropRatio === "16:9" ? "active" : ""}`} onClick={() => applyCropPreset("16:9")}>▶️ YouTube 16:9</span>
                      <span className={`social-tag ${cropRatio === "1:1" ? "active" : ""}`} onClick={() => applyCropPreset("1:1")}>📸 Instagram 1:1</span>
                    </div>
                    <div className="ratio-grid">
                      <button 
                        className={`ratio-btn ${cropRatio === "16:9" ? "active" : ""}`}
                        onClick={() => applyCropPreset("16:9")}
                      >
                        <div className="ratio-icon r-16-9"></div>
                        <span className="ratio-label">16:9</span>
                      </button>
                      <button 
                        className={`ratio-btn ${cropRatio === "9:16" ? "active" : ""}`}
                        onClick={() => applyCropPreset("9:16")}
                      >
                        <div className="ratio-icon r-9-16"></div>
                        <span className="ratio-label">9:16</span>
                      </button>
                      <button 
                        className={`ratio-btn ${cropRatio === "1:1" ? "active" : ""}`}
                        onClick={() => applyCropPreset("1:1")}
                      >
                        <div className="ratio-icon r-1-1"></div>
                        <span className="ratio-label">1:1</span>
                      </button>
                      <button 
                        className={`ratio-btn ${cropRatio === "custom" ? "active" : ""}`}
                        onClick={() => applyCropPreset("custom")}
                      >
                        <div className="ratio-icon r-custom"></div>
                        <span className="ratio-label">{lang === "zh" ? "自定义" : "Custom"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="setting-group" style={{ marginTop: "12px" }}>
                    <div className="input-row" style={{ marginBottom: "8px" }}>
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("cropW")}</label>
                        <input 
                          type="number" 
                          className="studio-input"
                          value={cropW}
                          onChange={(e) => setCropW(Math.max(10, Math.min(videoWidth, Number(e.target.value))))}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("cropH")}</label>
                        <input 
                          type="number" 
                          className="studio-input"
                          value={cropH}
                          onChange={(e) => setCropH(Math.max(10, Math.min(videoHeight, Number(e.target.value))))}
                        />
                      </div>
                    </div>
                    <div className="input-row">
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("cropX")}</label>
                        <input 
                          type="number" 
                          className="studio-input"
                          value={cropX}
                          onChange={(e) => setCropX(Math.max(0, Math.min(videoWidth - cropW, Number(e.target.value))))}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", marginBottom: "4px" }}>{t("cropY")}</label>
                        <input 
                          type="number" 
                          className="studio-input"
                          value={cropY}
                          onChange={(e) => setCropY(Math.max(0, Math.min(videoHeight - cropH, Number(e.target.value))))}
                        />
                      </div>
                    </div>
                    <div className="setting-help-note">
                      {t("cropHelp")}
                    </div>
                  </div>
                </div>
              )}

            </div>



          </div>
        </div>
        <div className="control-right-col" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Tailored Showcase Banner with Dynamic Image per Tool Page/Tab */}
          {(() => {
            const showcase = getToolShowcaseData(effectiveSelectedTool, lang);
            return (
              <div className="studio-card" style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1, height: "100%", overflow: "hidden" }}>
                <div className="card-title" style={{ marginBottom: "14px" }}>
                  {showcase.title}
                  <span>{showcase.badgeRight}</span>
                </div>
                
                <div 
                  className="sponsor-showcase-box" 
                  style={{ 
                    flex: 1, 
                    minHeight: "340px", 
                    borderRadius: "var(--radius-lg)", 
                    position: "relative", 
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    border: "1px solid var(--border-color)",
                    backgroundColor: "#070c16",
                    backgroundImage: `url('${showcase.img}')`,
                    backgroundPosition: showcase.bgPosition || "center",
                    backgroundSize: showcase.bgSize || "cover",
                    backgroundRepeat: "no-repeat",
                    transition: "background-image 0.4s ease-in-out, background-size 0.4s ease-in-out"
                  }}
                >
                  {/* Dark gradient overlay at bottom for readable text */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.6) 55%, transparent 100%)", zIndex: 1 }} />
                  
                  {/* Content over the image */}
                  <div style={{ position: "relative", zIndex: 2, padding: "20px" }}>
                    <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "var(--radius-full)", background: "rgba(139, 92, 246, 0.3)", color: "#c4b5fd", border: "1px solid rgba(139, 92, 246, 0.5)", fontSize: "11px", fontWeight: "700", marginBottom: "10px", letterSpacing: "0.5px", backdropFilter: "blur(8px)" }}>
                      {showcase.privacyTag}
                    </span>
                    <h4 style={{ color: "#fff", fontSize: "17px", fontWeight: "800", marginBottom: "8px", lineHeight: "1.4", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                      {showcase.heading}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", lineHeight: "1.5", marginBottom: "16px" }}>
                      {showcase.desc}
                    </p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div style={{ flex: 1, padding: "10px", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center", color: "#fff", fontSize: "12px", fontWeight: "700" }}>
                        {lang === "zh" ? "💖 免费使用" : "💖 Free Forever"}
                      </div>
                      <div style={{ flex: 1, padding: "10px", borderRadius: "var(--radius-md)", background: "rgba(0, 242, 254, 0.18)", backdropFilter: "blur(10px)", border: "1px solid rgba(0, 242, 254, 0.35)", textAlign: "center", color: "#00f2fe", fontSize: "12px", fontWeight: "700" }}>
                        {lang === "zh" ? "🛡️ 零商业水印" : "🛡️ No Watermarks"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
        </div>

      {/* Lower row: Stage Deck (Console & Gallery full-width - Section 3) */}
      <div className="stage-deck action-stage-deck">
          {/* Action Center - CLI prompt and Terminal screen logs */}
          {showLogs && (
            <div className="studio-card console-card">
              <div className="console-header">
                <div className="terminal-window-dots">
                  <span className="dot dot-close"></span>
                  <span className="dot dot-minimize"></span>
                  <span className="dot dot-maximize"></span>
                </div>
                <div className="console-tab-container">
                  <div 
                    className={`console-tab ${activeTabConsole === "logs" ? "active" : ""}`}
                    onClick={() => setActiveTabConsole("logs")}
                  >
                    {t("terminalOutput")}
                  </div>
                  <div 
                    className={`console-tab ${activeTabConsole === "help" ? "active" : ""}`}
                    onClick={() => setActiveTabConsole("help")}
                  >
                    {t("toolHelp")}
                  </div>
                </div>
                <div className="console-actions-right">
                  <button 
                    className="console-clear-btn"
                    onClick={() => setLogs([])}
                  >
                    {t("clearLogs")}
                  </button>
                </div>
              </div>

              {/* CLI Command Preview Strip */}
              <div className="cli-preview">
                <span className="cli-prompt">{t("cliPrompt")}</span>
                <span className="cli-code" title={commandPreview}>{commandPreview}</span>
              </div>

              {/* Terminal Screen details */}
              <div className="terminal-screen" ref={terminalRef}>
                {activeTabConsole === "logs" ? (
                  logs.map((log, index) => (
                    <div key={index} className={`log-line log-${log.type}`}>
                      {log.text}
                    </div>
                  ))
                ) : (
                  <div style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    <h4 style={{ color: "var(--accent-purple)", marginBottom: "6px" }}>{t("helpTitle")}</h4>
                    <ul style={{ paddingLeft: "16px", fontSize: "11px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <li><strong>{lang === "zh" ? "剪切" : "Trim / Cut"}:</strong> {t("helpTrim")}</li>
                      <li><strong>{lang === "zh" ? "压缩" : "Compress"}:</strong> {t("helpCompress")}</li>
                      <li><strong>{lang === "zh" ? "转码" : "Convert"}:</strong> {t("helpConvert")}</li>
                      <li><strong>{lang === "zh" ? "生成 GIF" : "Export GIF"}:</strong> {t("helpGif")}</li>
                      <li><strong>{lang === "zh" ? "提取音频" : "Extract Audio"}:</strong> {t("helpAudio")}</li>
                      <li><strong>{lang === "zh" ? "画面裁切" : "Crop Frame"}:</strong> {t("helpCrop")}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Export Action Trigger & Downloads Gallery */}
          <div className="studio-card">
            <div className="action-export-bar">
              {/* Progress Slider & Action Button in One Row */}
              <div className="action-main-row">
                <div className="action-progress-container">
                  <div className="progress-label-row">
                    <span>{t("progressLabel")}</span>
                    <strong>{progress}%</strong>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Execution trigger */}
                <button 
                  className="studio-btn studio-btn-primary"
                  onClick={processMedia}
                  disabled={isWorking || !file}
                  style={{ minWidth: "180px", flexShrink: 0 }}
                >
                  {isWorking ? t("runToolWorking") : t("runTool")}
                </button>
              </div>

              {/* Fun Facts / Green Computing Tips during processing */}
              {isWorking && (
                <div style={{ padding: "10px 14px", backgroundColor: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(139, 92, 246, 0.25)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-secondary)", animation: "fadeIn 0.3s ease" }}>
                  <span style={{ fontSize: "18px" }}>💡</span>
                  <div>
                    <strong style={{ color: "var(--accent-purple)", marginRight: "6px" }}>{lang === "zh" ? "离线绿色运算中：" : "Client-Side Processing:"}</strong>
                    {lang === "zh" 
                      ? "正在调用本机 CPU/GPU 内存沙盒高速渲染。0 字节数据上传至云端，不仅杜绝了机密外泄，还节约了大约 3.2g 的云端传输碳排放！"
                      : "Rendering 100% locally in RAM sandbox. Zero uploads protect your privacy and reduce cloud server CO2 footprint!"}
                  </div>
                </div>
              )}
            </div>

            {/* Latest Generated Output Inline Preview */}
            {latestOutput && (
              <div className="latest-output-preview-container">
                <div className="latest-output-header">
                  <div className="latest-output-title">
                    ✨ {t("latestOutputTitle")}
                  </div>
                  <div className="latest-output-meta">
                    {latestOutput.size} • {latestOutput.format.toUpperCase()}
                  </div>
                </div>

                {/* Before vs. After Stats Banner */}
                {latestOutput.percentSaved > 0 && (
                  <div style={{ margin: "0 20px 16px 20px", padding: "12px 16px", backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", color: "var(--text-primary)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600" }}>
                      <span style={{ fontSize: "18px" }}>🎉</span>
                      <span>{lang === "zh" ? `极速处理成功！为您减少了 ${latestOutput.percentSaved}% 的文件体积` : `Success! Reduced file size by ${latestOutput.percentSaved}%`}</span>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-secondary)", backgroundColor: "var(--bg-card)", padding: "4px 10px", borderRadius: "14px", border: "1px solid var(--border-color)" }}>
                      <span style={{ textDecoration: "line-through", color: "var(--text-tertiary)", marginRight: "6px" }}>{latestOutput.origSizeStr}</span>
                      <strong style={{ color: "#10b981" }}>➔ {latestOutput.size}</strong>
                    </div>
                  </div>
                )}

                <div className="latest-output-media-wrapper">
                  {latestOutput.format === "gif" && (
                    <img key={latestOutput.id} src={latestOutput.url} alt={lang === "zh" ? `已处理的 ${latestOutput.format.toUpperCase()} 输出预览` : `Processed ${latestOutput.format.toUpperCase()} output preview`} />
                  )}
                  {(latestOutput.format === "mp3" || latestOutput.format === "wav") && (
                    <audio key={latestOutput.id} src={latestOutput.url} controls />
                  )}
                  {["mp4", "webm", "mov", "mkv"].includes(latestOutput.format) && (
                    <video key={latestOutput.id} src={latestOutput.url} controls />
                  )}
                </div>

                {["webm", "mov", "mkv"].includes(latestOutput.format) && (
                  <div className="latest-output-warning">
                    ⚠️ {t("latestOutputWarning")}
                  </div>
                )}

                <div className="latest-output-actions">
                  <button 
                    className="latest-output-close-btn"
                    onClick={() => setLatestOutput(null)}
                  >
                    {t("latestOutputClose")}
                  </button>
                  <button 
                    className="latest-output-close-btn"
                    onClick={() => loadAsInput(latestOutput)}
                    style={{ borderColor: "var(--accent-purple)", color: "var(--accent-purple)" }}
                  >
                    🔄 {t("loadAsInputBtn")}
                  </button>
                  <button
                    type="button"
                    className="studio-btn studio-btn-primary" 
                    onClick={() => downloadExport(latestOutput)}
                    style={{ fontSize: "11px", padding: "6px 14px", minHeight: "auto", height: "auto" }}
                  >
                    📥 {t("downloadBtn")}
                  </button>
                </div>
              </div>
            )}

            {/* Output Gallery list */}
            <div style={{ marginTop: "24px" }}>
              <div className="card-title" style={{ fontSize: "14px", marginBottom: "12px" }}>
                {t("galleryTitle")}
                <span>({exportGallery.length} {t("galleryFiles")})</span>
              </div>
              
              {exportGallery.length === 0 ? (
                <div className="gallery-empty">
                  {t("galleryEmpty")}
                </div>
              ) : (
                <div className="gallery-list">
                  {exportGallery.map((item) => (
                    <div className="gallery-item" key={item.id}>
                      <div className="gallery-item-info">
                        <div className="gallery-item-name" title={item.name}>{item.name}</div>
                        <div className="gallery-item-meta">{item.size} • {item.format.toUpperCase()} format</div>
                      </div>
                      <div className="gallery-actions">
                        <button 
                          className="gallery-btn play-btn" 
                          onClick={() => loadGalleryPreview(item.url, item.name)}
                        >
                          {t("previewBtn")}
                        </button>
                        <button 
                          className="gallery-btn" 
                          onClick={() => loadAsInput(item)}
                          style={{ borderColor: "var(--accent-purple)", color: "var(--accent-purple)", fontSize: "11px" }}
                        >
                          🔄 {t("loadAsInputBtn")}
                        </button>
                        <button
                          type="button"
                          className="gallery-btn" 
                          onClick={() => downloadExport(item)}
                          style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                        >
                          {t("downloadBtn")}
                        </button>
                        <button 
                          className="gallery-btn delete-btn"
                          onClick={() => deleteGalleryItem(item.id, item.url)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      {isDedicatedToolPage && (
        <section className="tool-page-seo-panel">
          <div className="tool-page-seo-copy">
            <p className="tool-page-kicker">{lang === "zh" ? "✨ 免费在线音视频工作室" : "✨ Free Online Media Studio"}</p>
            <h2>{activePage.seoH2 || activePage.title}</h2>
            <p>{activePage.description}</p>
            <p className="tool-page-context-link-copy">
              {contextualLinkIntro}
              {" "}
              {contextualToolLinks.map((page, index) => {
                const item = localizedPage(page, lang);
                return (
                  <React.Fragment key={page.path}>
                    <a
                      href={buildLocalizedPath(page.path, lang)}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToTool(page.toolId);
                      }}
                    >
                      {item.title}
                    </a>
                    {index < contextualToolLinks.length - 1 ? " · " : ""}
                  </React.Fragment>
                );
              })}
            </p>
          </div>

          <nav className="tool-page-internal-links" aria-label={lang === "zh" ? "相关工具" : "Related tools"}>
            <span>{lang === "zh" ? "🧰 探索更多免费工具：" : "🧰 Explore More Free Tools:"}</span>
            {TOOL_PAGES.filter((page) => page.path !== activePageConfig.path).map((page) => {
              const item = localizedPage(page, lang);
              return (
                <a
                  key={page.path}
                  href={buildLocalizedPath(page.path, lang)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToTool(page.toolId);
                  }}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </section>
      )}

      {/* Standalone Marketing Features Section (SEO Optimization) */}
      <section className="marketing-features-grid">
        <div className="marketing-feature-card">
          <span className="marketing-feature-icon">🔒</span>
          <h3>{t("mCardTitle1")}</h3>
          <p>{t("mCardDesc1")}</p>
        </div>
        <div className="marketing-feature-card">
          <span className="marketing-feature-icon">🚀</span>
          <h3>{t("mCardTitle2")}</h3>
          <p>{t("mCardDesc2")}</p>
        </div>
        <div className="marketing-feature-card">
          <span className="marketing-feature-icon">⚙️</span>
          <h3>{t("mCardTitle3")}</h3>
          <p>{t("mCardDesc3")}</p>
        </div>
      </section>

      {/* Standalone FAQ Accordions Section (SEO Optimization) */}
      <section className="faq-accordion-section">
        <h2 className="faq-title">{t("faqTitle")}</h2>
        <div className="faq-list">
          {activePage.faqs && activePage.faqs.length > 0 ? (
            activePage.faqs.map((faq, index) => (
              <details className="faq-item" key={index}>
                <summary>{faq.q}</summary>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))
          ) : (
            // Generic Fallback FAQs
            <>
              <details className="faq-item">
                <summary>{t("faqQ1")}</summary>
                <div className="faq-content">
                  <p>{t("faqA1_1")}</p>
                  <p>{t("faqA1_2")}</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>{t("faqQ2")}</summary>
                <div className="faq-content">
                  <p>{t("faqA2_1")}</p>
                  <p>{t("faqA2_2")}</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>{t("faqQ3")}</summary>
                <div className="faq-content">
                  <p>{t("faqA3_1")}</p>
                  <p>{t("faqA3_2")}</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>{t("faqQ4")}</summary>
                <div className="faq-content">
                  <p>{t("faqA4_1")}</p>
                  <p>{t("faqA4_2")}</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>{t("faqQ5")}</summary>
                <div className="faq-content">
                  <p>{t("faqA5_1")}</p>
                </div>
              </details>
            </>
          )}
        </div>
      </section>

      {/* Google AdSense: Horizontal Bottom Banner */}
      <div className="adsense-slot ads-horizontal ads-bottom">
        <div className="adsense-placeholder">
          <span className="adsense-tag">{lang === "zh" ? "广告" : "SPONSOR"}</span>
          <span className="adsense-title">{lang === "zh" ? "Google AdSense 广告预留位" : "Google AdSense Reserved Slot"}</span>
        </div>
      </div>
        </>
      )}

      {/* Standalone Footer */}
      <footer className="studio-footer" role="contentinfo">
        <div className="footer-link-groups">
          <nav className="footer-link-group" aria-label={lang === "zh" ? "工具链接" : "Tool links"}>
            <span>{lang === "zh" ? "工具" : "Tools"}</span>
            <div className="footer-links">
              {TOOL_PAGES.map((page) => {
                const item = localizedPage(page, lang);
                return (
                  <a
                    key={page.path}
                    href={buildLocalizedPath(page.path, lang)}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToTool(page.toolId);
                    }}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </nav>

          <nav className="footer-link-group" aria-label={lang === "zh" ? "网站链接" : "Site links"}>
            <span>{lang === "zh" ? "网站" : "Site"}</span>
            <div className="footer-links">
              <a href={buildLocalizedPath("/how-to-use/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/how-to-use/"); }}>{lang === "zh" ? "使用教程" : "How to Use"}</a>
              <a href={buildLocalizedPath("/blog/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/blog/"); }}>{lang === "zh" ? "博客教程" : "Blog"}</a>
              <a href={buildLocalizedPath("/about/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/about/"); }}>{t("aboutUs")}</a>
              <a href={buildLocalizedPath("/privacy/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/privacy/"); }}>{t("privacyPolicy")}</a>
              <a href={buildLocalizedPath("/terms/", lang)} onClick={(e) => { e.preventDefault(); navigateToPath("/terms/"); }}>{t("termsOfService")}</a>
            </div>
          </nav>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} HappyConvert. {t("copyright")}
        </div>
        <div className="footer-badges">
          <span className="footer-badge">WebAssembly WASM</span>
          <span className="footer-badge">FFmpeg Core v0.12</span>
          <span className="footer-badge">React & Vite</span>
        </div>
      </footer>
    </div>
  );
}
