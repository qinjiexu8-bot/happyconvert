import { BLOG_PAGES } from "./blogPages.js";

export const DEFAULT_PAGE = {
  path: "/",
  toolId: "Convert",
  title: {
    en: "HappyConvert - Free Online Video Editor, Converter & Compressor",
    zh: "HappyConvert 快乐转码 - 免费在线视频剪辑、转码与压缩工作室"
  },
  description: {
    en: "Free browser-based video editing suite. Cut, compress, convert, crop videos and extract audio locally with WebAssembly. No uploads, no watermarks, and no cloud queues; practical limits depend on your browser memory.",
    zh: "免费浏览器端视频编辑套件。在本地使用 WebAssembly 剪切、压缩、转码、裁切视频并提取音频。无需上传、无水印、受本机内存限制。"
  },
  h1: {
    en: "Free Online <span class=\"highlight\">Video Editing Studio</span>",
    zh: "免费在线<span class=\"highlight\">音视频编辑工作室</span>"
  },
  seoH2: {
    en: "All-in-One Browser Video Toolkit — Cut, Convert, Compress & More",
    zh: "浏览器端一站式视频工具箱 — 剪切、转码、压缩、裁切、提取音频"
  },
  subtitle: {
    en: "Your complete browser-based video toolkit. Cut, convert, compress, crop, and extract audio — all processed locally on your device with zero uploads and zero watermarks.",
    zh: "您的一站式浏览器视频工具箱。剪切、转码、压缩、裁切、提取音频 — 全部在您的设备上本地处理，无需上传，无水印。"
  },
  intent: {
    en: "Choose a tool above to get started, or explore our dedicated tool pages for specialized features.",
    zh: "在上方选择一个工具开始使用，或浏览下方各专属工具页面了解更多功能。"
  },
  badge: {
    en: "🚀 100% Free • No Watermark • 6 Tools in One",
    zh: "🚀 免费使用 • 无水印 • 六大工具合一"
  },
  proTip: {
    en: "💡 Pro-Tip: All processing happens locally in your browser via WebAssembly. Your files never leave your device — perfect for confidential or sensitive media.",
    zh: "💡 专家建议：所有处理均通过 WebAssembly 在浏览器本地完成。您的文件绝不会离开设备 — 非常适合处理机密或敏感媒体文件。"
  },
  faqs: [
    {
      q: {
        en: "Is HappyConvert completely free to use? Do I need to register or pay?",
        zh: "无云剪工作室是完全免费的吗？需要注册账号或付费订阅吗？"
      },
      a: {
        en: "Yes, HappyConvert is free to use. There is no registration required, no login needed, and no credit card or subscription fees. You can use the video and audio tools directly in your browser. Exports are watermark-free, with no cloud queue times; practical file size depends on your browser memory.",
        zh: "100% 免费使用！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需绑定信用卡！您只要打开网页即可立刻使用全部专业音频与视频处理工具。导出的所有媒体文件纯净无水印、无文件大小限制、无排队等待，依靠浏览器本地引擎极速完成，随开随用！"
      }
    },
    {
      q: {
        en: "What tools are included in HappyConvert?",
        zh: "HappyConvert 快乐转码工作室包含哪些工具？"
      },
      a: {
        en: "HappyConvert includes 6 free tools: Video Converter (MP4/WebM/MOV/MKV), Video Cutter (lossless trim), Video Compressor (smart CRF), Video to GIF (custom FPS), Audio Extractor (MP3/WAV), and Video Cropper (9:16/16:9/1:1 ratios). All tools are 100% free with no watermarks.",
        zh: "无云剪工作室包含 6 大免费工具：视频格式转换（MP4/WebM/MOV/MKV）、视频剪切（无损流拷贝）、视频压缩（智能 CRF）、视频转 GIF（自定义帧率）、音频提取（MP3/WAV）、画面裁切（9:16/16:9/1:1 比例）。所有工具免费使用，无水印。"
      }
    },
    {
      q: {
        en: "How does local browser processing work? Is it safe?",
        zh: "浏览器本地处理是如何工作的？安全吗？"
      },
      a: {
        en: "We use WebAssembly (WASM) technology to run the FFmpeg engine directly inside your browser's sandboxed memory. Your video and audio files are never uploaded to any server — all processing happens on your device's CPU and RAM. This means zero data leaks, instant processing speed, and complete privacy.",
        zh: "我们使用 WebAssembly (WASM) 技术在浏览器沙盒内存中直接运行 FFmpeg 引擎。您的视频和音频文件永远不会上传到任何服务器 — 所有处理都在您设备的 CPU 和内存中完成。这意味着零数据泄露、即时处理速度和完全的隐私保护。"
      }
    },
    {
      q: {
        en: "What browsers and devices are supported?",
        zh: "支持哪些浏览器和设备？"
      },
      a: {
        en: "HappyConvert works on any modern browser that supports WebAssembly, including Chrome, Firefox, Edge, and Safari on Windows, macOS, Linux, and Android. For best performance, we recommend Chrome or Edge on a desktop computer.",
        zh: "HappyConvert 支持所有支持 WebAssembly 的现代浏览器，包括 Windows、macOS、Linux 和 Android 上的 Chrome、Firefox、Edge 和 Safari。为获得最佳性能，建议使用桌面电脑上的 Chrome 或 Edge。"
      }
    }
  ]
};

export const TOOL_PAGES = [
  {
    path: "/convert-video/",
    toolId: "Convert",
    title: {
      en: "Convert Video Online - Free MP4 Converter Online (No Watermark)",
      zh: "在线视频格式转换 - 免费 MP4/MOV/MKV 视频转换器（推荐1GB以内）"
    },
    description: {
      en: "Convert video online for free with zero watermarks and no cloud queue times. Fast MP4 converter online for MOV, WebM, MKV, and audio using browser WebAssembly.",
      zh: "免费在线进行视频格式转换，无水印且受本机内存限制。极速互转 MP4、WebM、MOV、MKV 和音频格式。在浏览器本地直接处理，无需下载安装软件。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Video Converter</span>",
      zh: "免费在线<span class=\"highlight\">视频格式转换</span>"
    },
    seoH2: {
      en: "Convert Video Online - MP4 Converter Online in Browser",
      zh: "在浏览器中即时进行在线视频转换 — 零上传高画质"
    },
    subtitle: {
      en: "Convert your video and audio files quickly with zero watermarks. Processing is subject to browser memory limits (recommended for videos under 1GB).",
      zh: "免费使用、受本机内存限制（推荐1GB以内视频）、导出的视频纯净无水印！基于最先进的 WebAssembly 本地计算引擎，免去漫长的服务器上传与排队等待，即开即转，极速省心。"
    },
    intent: {
      en: "Best for universal format conversion, web video optimization (WebM), and fast audio extraction without installing desktop software.",
      zh: "最适合跨平台视频格式互转、网页格式优化（如 MP4 转 WebM）以及免安装软件快速搞定音视频转换。"
    },
    badge: {
      en: "🚀 100% Free • No Watermark • Fast Convert",
      zh: "🚀 免费使用 • 高清无水印 • 快速互转"
    },
    proTip: {
      en: "💡 Pro-Tip: Select MP4 for the fastest local export. Use WebM when you specifically need browser-friendly web embeds.",
      zh: "💡 专家建议：想要最快导出请选择 MP4；只有在网页嵌入播放场景下，再选择 WebM。"
    },
    faqs: [
      {
        q: {
          en: "Is this video converter completely free? Do I need to register an account or pay?",
          zh: "这款在线视频转换工具是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the video converter is free to use. There is no registration required, no login needed, and no credit card or subscription fees. You can convert videos directly in your browser, with no watermark overlays or cloud queue times. Practical file size depends on your browser memory.",
          zh: "100% 免费使用！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需绑定信用卡！您只要打开网页即可立刻使用视频与音频转码功能。导出的所有视频和音频均保持原生纯净，绝对无水印、无体积限制、无排队等待，随开随用！"
        }
      },
      {
        q: {
          en: "How do I convert a video format step-by-step?",
          zh: "如何使用这款工具一步步转换视频格式？"
        },
        a: {
          en: "Step 1: Click 'Select File' or drag and drop your video into the upload box. Step 2: Choose your desired target format (e.g., MP4, WebM, MOV, or MP3) from the options panel. Step 3: Click the glowing '🚀 Run Editing Task' button. MP4 and audio exports are usually fastest; WebM takes longer because it must be re-encoded in your browser.",
          zh: "第一步：点击「选择文件」或直接将视频拖入左侧上传框。第二步：在右侧控制台中选择您需要的目标格式（如 MP4、WebM、MOV 或 MP3）。第三步：点击首屏醒目的「🚀 开始处理」按钮。MP4 与音频导出通常最快；WebM 需要在浏览器内重新编码，耗时会更长。"
        }
      },
      {
        q: {
          en: "Why is this converter much faster than traditional online tools like Clideo or Online-Convert?",
          zh: "为什么这款转换器比传统在线工具（如 123apps、Clideo）速度快这么多？"
        },
        a: {
          en: "Traditional online tools force you to upload massive video files (often hundreds of MBs) to remote cloud servers, causing long waiting times and potential privacy leaks. Our tool utilizes cutting-edge FFmpeg WebAssembly to process videos directly inside your computer's RAM. There is zero network upload latency—processing starts instantaneously at native CPU speed!",
          zh: "传统的在线转换器需要您把几百兆甚至上千兆的视频缓慢上传到远程云端服务器，排队处理完后再下载，不仅极度耗时，还容易泄露隐私。我们的工具采用了前沿的 FFmpeg WebAssembly 技术，直接在您本地浏览器的内存中高速运算。无需上传任何数据，零网络延迟，起步就达到您电脑 CPU 的最快物理极速！"
        }
      },
      {
        q: {
          en: "What video and audio formats are supported?",
          zh: "支持哪些主流的视频与音频封装格式？"
        },
        a: {
          en: "We support bidirectional conversion between all industry-standard containers including MP4 (H.264/H.265), WebM (VP8), MOV (Apple QuickTime), MKV, and audio formats like MP3, WAV, AAC, and Vorbis.",
          zh: "全面支持行业主流格式的互转，包括 MP4 (H.264/H.265)、WebM (VP8)、MOV (苹果 QuickTime)、MKV，以及高音质音频编码如 MP3、WAV、AAC 与 Vorbis。"
        }
      },
      {
        q: {
          en: "How long does browser video conversion take for large files?",
          zh: "大文件在浏览器里转换大概要多久？"
        },
        a: {
          en: "Processing time depends on video duration, resolution, frame rate, codec, and your CPU. As a rough browser-based estimate: a 13MB MP4 to WebM job can take around 5 minutes on some devices; 100MB WebM conversion can take 30+ minutes; 300MB may take 1-2 hours or fail because of browser memory; 500MB+ is not recommended for WebM conversion. MP4 exports and audio extraction are usually much faster.",
          zh: "处理时间取决于视频时长、分辨率、帧率、编码复杂度和电脑 CPU。以浏览器本地处理粗略估算：13MB 的 MP4 转 WebM 在部分设备上可能约 5 分钟；100MB 转 WebM 可能 30 分钟以上；300MB 可能 1-2 小时甚至因浏览器内存失败；500MB 以上不建议做 WebM 转换。MP4 导出和音频提取通常快很多。"
        }
      }
    ]
  },
  {
    path: "/cut-video/",
    toolId: "Trim",
    title: {
      en: "Cut Video Online - Free MP4 Cutter Online & Video Trimmer",
      zh: "在线剪切视频 - 免费 MP4 视频裁剪与剪辑器"
    },
    description: {
      en: "Cut video online for free with zero watermarks. Fast trim video online tool for MP4, MOV, WebM, and MKV files locally in your browser with millisecond precision.",
      zh: "免费在线进行视频剪切，纯净无水印！支持毫秒级精准定轨裁剪 MP4、MOV、WebM、MKV 文件。提供无损流拷贝模式，快速导出原始画质片段。"
    },
    h1: {
      en: "Cut Video Online - <span class=\"highlight\">Video Trimmer</span>",
      zh: "在线剪切视频 - <span class=\"highlight\">免费视频裁剪器</span>"
    },
    seoH2: {
      en: "Trim Video Online - Cut MP4 Online with Millisecond Precision",
      zh: "在线剪切视频 - 快速裁剪 MP4 视频片段"
    },
    subtitle: {
      en: "Slice out unwanted sections with millisecond precision. Enable Lossless Stream Copy mode to export trimmed clips quickly without re-encoding quality loss.",
      zh: "免费使用、无水印。精准设定起止时间戳，剪掉多余片头片尾。开启无损流拷贝模式后，无需重新编码，导出速度通常最快。"
    },
    intent: {
      en: "Best for removing intro/outro segments, extracting highlights, or trimming screen recordings before sharing.",
      zh: "适合快速剔除视频片头片尾、截取精彩高光片段，或在发送微信与邮件前裁剪私密录屏。"
    },
    badge: {
      en: "✂️ Fast Trim • 100% Free • No Watermark",
      zh: "✂️ 快速剪切 • 免费使用 • 无水印"
    },
    proTip: {
      en: "💡 Pro-Tip: Select Lossless Stream Copy mode for the fastest trim exports without re-encoding quality degradation.",
      zh: "💡 专家建议：开启无损流拷贝模式，无需重新编码，通常可以最快导出原始画质剪切片段。"
    },
    faqs: [
      {
        q: {
          en: "Is this video cutter completely free? Do I need to register an account or pay?",
          zh: "这款在线视频剪切软件是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the video cutter is free to use. There is no registration required, no login needed, and no credit card or subscription fees. You can cut and trim videos directly in your browser with no watermark overlays or cloud queue times. Practical file size depends on browser memory.",
          zh: "100% 免费使用！无需注册账号、无需登录、无需付费订阅。您可以直接在浏览器中剪切视频，导出无水印、无云端排队。实际可处理体积取决于浏览器内存。"
        }
      },
      {
        q: {
          en: "How do I cut or trim a video without losing quality?",
          zh: "如何不损失清晰度地剪切和裁剪视频片段？"
        },
        a: {
          en: "Step 1: Upload your video file. Step 2: Use the start and end time inputs or drag the time slider to select your clip range. Step 3: Keep Cutting Mode set to Lossless Stream Copy when possible. Step 4: Click Run Editing Task to export the selected segment.",
          zh: "第一步：上传待剪切的视频。第二步：在右侧输入起点和终点秒数，或拖动时间轴确认范围。第三步：能用时优先选择无损流拷贝。第四步：点击开始处理导出片段。"
        }
      },
      {
        q: {
          en: "What is the difference between Lossless Stream Copy and Re-encode mode?",
          zh: "无损流拷贝和重新编码模式的区别是什么？"
        },
        a: {
          en: "Lossless Stream Copy slices video data from the existing container without recompressing frames, so it is usually much faster and preserves original quality. Re-encode mode recalculates frames, which is slower but can improve compatibility.",
          zh: "无损流拷贝会直接从原视频封装中切出数据段，不重新压缩画面，因此通常更快并尽量保留原始画质。重新编码会重新计算帧画面，速度更慢，但兼容性更稳定。"
        }
      },
      {
        q: {
          en: "Can I trim large 1GB or 2GB video files online?",
          zh: "可以剪切 1GB 甚至 2GB 以上的超大视频文件吗？"
        },
        a: {
          en: "Large trims can work when your device has enough memory, especially in Lossless Stream Copy mode. Browser memory still matters, so for stability we recommend keeping files under 1GB and using a desktop browser for large clips.",
          zh: "如果设备内存充足，尤其是使用无损流拷贝模式时，大文件剪切也可以完成。但浏览器内存仍是硬限制；为保证稳定，建议 1GB 以内文件优先使用桌面浏览器处理。"
        }
      }
    ]
  },
  {
    path: "/compress-video/",
    toolId: "Compress",
    title: {
      en: "Compress Video Online - Free Video Size Reducer (No Watermark)",
      zh: "在线压缩视频 - 免费减小视频文件体积"
    },
    description: {
      en: "Compress video online for free without watermarks. Reduce MP4 and MOV file sizes using smart CRF bitrate control and resolution scaling locally in your browser.",
      zh: "在线免费压缩视频文件，画质清晰且无水印！通过智能 CRF 码率调控与分辨率缩放，把 MP4/MOV 体积大幅缩减，适合微信、钉钉、Discord 和邮件发送。"
    },
    h1: {
      en: "Compress Video Online - <span class=\"highlight\">Video Size Reducer</span>",
      zh: "在线压缩视频 - <span class=\"highlight\">减小视频体积</span>"
    },
    seoH2: {
      en: "Compress Video Online - Reduce Video File Size up to 80%",
      zh: "在线压缩视频 - 快速减小视频文件体积"
    },
    subtitle: {
      en: "Shrink large video files with crisp visual clarity. Zero watermarks, no cloud queue times, and local browser processing. For stability, we recommend files under 1GB.",
      zh: "免费使用、受本机内存限制（推荐1GB以内）、高清无水印！采用智能 CRF 编码调控，在清晰画质下缩小视频体积，让邮件附件与微信发帖更顺畅。"
    },
    intent: {
      en: "Essential for bypassing email attachment size limits, Discord/WhatsApp upload restrictions, and saving web hosting bandwidth.",
      zh: "适合解决邮件附件大小限制、微信/钉钉/Discord 视频发送超限，以及节省硬盘与网盘存储空间。"
    },
    badge: {
      en: "📉 High Fidelity • Device Limits Apply • Fast Compress",
      zh: "📉 高清压缩 • 受本机限制 • 快速压缩"
    },
    proTip: {
      en: "💡 Pro-Tip: CRF 28 Balanced mode usually gives strong size reduction while preserving crisp 1080p visual clarity.",
      zh: "💡 专家建议：选择 CRF 28 平衡模式，通常可以在保持 1080p 清晰度的同时明显减小体积。"
    },
    faqs: [
      {
        q: {
          en: "Is this video compressor completely free? Do I need to register an account or pay?",
          zh: "这款在线视频压缩工具是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the video compressor is free to use. There is no registration required, no login needed, and no credit card or subscription fees. You can compress videos directly in your browser, with no watermark overlays or cloud queue times. Practical file size depends on your browser memory.",
          zh: "100% 免费使用！无需注册账号、无需登录、无需绑定信用卡。您可以直接在浏览器中压缩视频，导出的 MP4/MOV 视频纯净无水印、无云端排队；实际可处理体积取决于浏览器内存。"
        }
      },
      {
        q: {
          en: "How do I compress a video file without getting a blurry result?",
          zh: "如何把视频文件压缩得更小，同时又保证画面不模糊？"
        },
        a: {
          en: "Step 1: Upload your video file. Step 2: Choose a balanced compression tier. Step 3: If your video is 4K, scale it down to 1080p or 720p. Step 4: Click Run Editing Task to export the compressed MP4.",
          zh: "第一步：上传原视频。第二步：选择平衡压缩档位。第三步：如果原片是 4K，可缩放到 1080p 或 720p。第四步：点击开始处理导出压缩后的 MP4。"
        }
      },
      {
        q: {
          en: "Why is CRF better than fixed bitrate compression?",
          zh: "为什么 CRF 智能压缩比传统固定码率压缩更好？"
        },
        a: {
          en: "Fixed bitrate compression spends the same bitrate across easy and complex scenes. CRF adjusts quality based on frame complexity, saving space on simple shots and preserving more detail in motion-heavy scenes.",
          zh: "固定码率会给简单画面和复杂画面分配同样码率，容易浪费空间或损失细节。CRF 会根据画面复杂度动态控制质量，在简单场景节省体积，在运动场景保留更多细节。"
        }
      },
      {
        q: {
          en: "Is there any watermark or file size limit when compressing large videos?",
          zh: "压缩大容量视频时，会有文件限制或者加水印吗？"
        },
        a: {
          en: "HappyConvert never inserts watermarks, logos, or artificial time limits. Actual capacity is limited by browser memory, so large files are best handled on a desktop browser and we recommend files under 1GB for stability.",
          zh: "HappyConvert 不会添加任何水印、Logo 或人为时长限制。实际能力受浏览器内存限制；大文件建议使用桌面浏览器，为保证稳定推荐 1GB 以内。"
        }
      },
      {
        q: {
          en: "Is my video file private? Will it be stored on your servers?",
          zh: "压缩我的私密录像或商业宣讲视频安全吗？"
        },
        a: {
          en: "Your videos are private. The compression runs locally in your web browser using WebAssembly, so your videos never leave your machine for processing.",
          zh: "您的视频是私密的。压缩过程通过 WebAssembly 在浏览器本地运行，视频不会为了处理而离开您的电脑。"
        }
      }
    ]
  },
  {
    path: "/video-to-gif/",
    toolId: "GIF",
    title: {
      en: "Free Online Video to GIF Converter - Make High FPS Animated GIFs",
      zh: "视频转 GIF 动图工具 - 在线高清动图制作免费无水印流畅不卡顿"
    },
    description: {
      en: "Convert video to animated GIF online for free with zero watermarks. Turn MP4, MOV clips into smooth, high-quality GIFs locally with custom frame rate (FPS) and width scaling.",
      zh: "免费在线将视频转换为高清 GIF 动图，纯净无水印！在浏览器本地把 MP4、MOV 片段做成丝滑流畅的动图。支持自定义帧率（FPS）与分辨率宽度缩放。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Video to GIF Converter</span>",
      zh: "免费在线<span class=\"highlight\">高清视频转 GIF 动图</span>"
    },
    seoH2: {
      en: "Create Smooth, Flicker-Free Animated GIFs with Custom FPS & Size",
      zh: "自定义帧率与尺寸，生成丝滑无闪烁的高清动图"
    },
    subtitle: {
      en: "Turn your favorite video highlights into sharable animated GIFs instantly. Adjust custom FPS framerates and pixel widths to balance animation smoothness against lightweight file size.",
      zh: "免费使用、无水印、秒级生成！一键将视频高光转化成适合微信群聊和社媒分享的高清 GIF 动图。自由调控 FPS 帧率与像素宽度，告别模糊卡顿与马赛克！"
    },
    intent: {
      en: "Best for creating chat memes, social media reaction gifs, software tutorial demonstrations, and GitHub documentation previews.",
      zh: "最适合制作微信/Discord 表情包、社媒搞笑反应动图、软件实操演示教程以及 GitHub 开源项目帮助文档演示图。"
    },
    badge: {
      en: "🎞️ High FPS • 100% Free • No Watermark",
      zh: "🎞️ 丝滑不卡顿 • 免费使用 • 无水印"
    },
    proTip: {
      en: "💡 Pro-Tip: For Discord or chat stickers, set FPS to 10 and Width to 320px to keep the GIF file lightweight (under 2MB).",
      zh: "💡 专家建议：制作微信表情包或社媒动图时，建议选择 10 FPS 与 320px 宽度，可轻松将体积控制在 2MB 以内。"
    },
    faqs: [
      {
        q: {
          en: "Is this video to GIF converter completely free? Do I need to register an account or pay?",
          zh: "在线视频转 GIF 动图是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the GIF converter is free to use. There is no registration required, no login needed, and no subscription fees. You can make reaction GIFs, tutorial previews, and memes directly in your browser without dealing with watermark overlays!",
          zh: "100% 免费使用！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需付费订阅！您可以尽情制作各类微信搞笑表情包、社媒动图和软件演示，绝不添加任何形式的水印或品牌 Logo，不限次数与体积，随开随用！"
        }
      },
      {
        q: {
          en: "How do I convert an MP4 or MOV video into an animated GIF?",
          zh: "如何把 MP4 或 MOV 视频转换成高清流动的 GIF 动图？"
        },
        a: {
          en: "Step 1: Upload your video file. Step 2: (Optional) If you only want a specific segment, switch to the Video Cutter tool to trim the timestamps first. Step 3: In the GIF settings, choose your desired Framerate (e.g., 15 FPS for smooth animation, 10 FPS for smaller size) and Width (e.g., 480px or 320px). Step 4: Click '🚀 Run Editing Task' and download your GIF instantly!",
          zh: "第一步：上传待转的视频文件。第二步：（可选）如果只想截取其中几秒，可先在上方切换到「视频剪切」选定时间区间。第三步：在右侧 GIF 设置面板中，选择合适的帧率（建议 15 FPS 保证丝滑，10 FPS 缩小体积）与画面宽度（如 480px 或 320px）。第四步：点击首屏「🚀 开始处理」，自动生成并导出动图！"
        }
      },
      {
        q: {
          en: "Why do some online converters produce GIF animations with color banding and flickering?",
          zh: "为什么很多转换网站做出来的 GIF 动图颜色严重失真，有明显色块和闪烁？"
        },
        a: {
          en: "Standard GIF converters force your video colors into a generic 256-color palette, causing terrible dithering and color banding. Our engine utilizes FFmpeg's two-pass custom palette generation algorithm, which scans your video's unique color spectrum first to create a dedicated color palette, resulting in crystal-clear, flicker-free GIFs!",
          zh: "普通的 GIF 转换工具只会生硬地将视频颜色套用系统默认的 256 色色盘，导致色彩断层、严重颗粒感和绿色噪点。无云剪引擎内置了 FFmpeg 顶级的双向调色板（Two-pass Palette）算法，在生成动图前会自动全局扫描您视频的独特色彩空间并生成专属调色盘，确保生成的 GIF 画面平滑、色泽饱和无闪烁！"
        }
      },
      {
        q: {
          en: "How can I reduce the file size of my animated GIF to share on Discord or WeChat?",
          zh: "如何把生成后的 GIF 动图体积控制得尽量小，方便微信发送或上传表情包？"
        },
        a: {
          en: "GIF is an uncompressed frame sequence format, so file sizes can grow rapidly. To keep your GIF under 2MB or 5MB: 1) Keep the duration under 5 seconds, 2) Lower the Width to 320px or 480px, and 3) Set the framerate to 10 FPS.",
          zh: "因为 GIF 是一种缺乏帧间压缩的古老序列图格式，如果分辨率太高或时间太长，体积容易暴增。要让动图轻松通过微信或表情包平台体积检查（通常要求 2MB 或 5MB 内），最有效的秘诀是：1）控制片段时长在 5 秒以内；2）把像素宽度降至 320px 或 480px；3）将帧率设为 10 FPS。"
        }
      }
    ]
  },
  {
    path: "/video-to-audio/",
    toolId: "Extract Audio",
    title: {
      en: "Video to Audio Converter Online - Extract MP3/WAV Free",
      zh: "视频转音频工具 - 免费导出高音质 MP3/WAV"
    },
    description: {
      en: "Convert video to audio online for free. Extract MP3 or lossless WAV from MP4, MOV, and WebM videos locally in your browser with zero watermarks.",
      zh: "免费在线视频转音频，从 MP4、MOV、WebM 视频中提取 MP3 或无损 WAV。浏览器本地处理，无水印，无需上传服务器。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Video to Audio Converter</span>",
      zh: "免费在线<span class=\"highlight\">视频转音频工具</span>"
    },
    seoH2: {
      en: "Convert Video to MP3 or WAV in Your Browser",
      zh: "在浏览器中将视频转换为 MP3 或 WAV"
    },
    subtitle: {
      en: "Turn videos into clean audio files. Extract background music, voice notes, lectures, and podcast audio as 320kbps MP3 or uncompressed WAV.",
      zh: "将视频转换为干净的音频文件。一键提取背景音乐、人声、课程录音和播客音轨，支持 320kbps MP3 或未压缩 WAV。"
    },
    intent: {
      en: "Essential for podcasters, video editors, language learners, and musicians looking to save background tracks from videos.",
      zh: "对于播客创作者、自媒体剪辑师、外语学习者以及想要从短视频中提取经典 BGM 与台词的音乐人而言，是必不可少的音频提取利器。"
    },
    badge: {
      en: "🎵 320kbps Quality • 100% Free • Fast Export",
      zh: "🎵 极品音质 • 免费使用 • 秒级导出"
    },
    proTip: {
      en: "💡 Pro-Tip: Choose WAV for lossless podcast and video editing, or MP3 320kbps for universal music sharing across all devices.",
      zh: "💡 专家建议：后续编辑剪辑请选择 WAV 无损格式；日常发微信、发邮件听歌分享请选 MP3 320kbps 高音质。"
    },
    faqs: [
      {
        q: {
          en: "Is audio extraction completely free? Do I need to register an account or pay?",
          zh: "在线视频提取音频是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the audio extractor is free to use. There is no registration required, no login needed, and no subscription fees. You can strip audio tracks from videos directly in your browser. Exported MP3 and WAV files are watermark-free; practical file size depends on your browser memory.",
          zh: "100% 免费使用！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需付费订阅！您打开网页即可立刻将视频声音分离为高音质 MP3 或无损 WAV 纯音轨。导出的音频绝对纯净无水印提示音、受本机内存限制与时长，随开随用！"
        }
      },
      {
        q: {
          en: "How do I extract MP3 or WAV audio from a video file?",
          zh: "怎样把视频中的背景音乐或人声对话提取出来做成 MP3 或 WAV？"
        },
        a: {
          en: "Step 1: Upload your video (MP4, MOV, WebM, MKV, etc.). Step 2: In the right-hand options panel, select your target audio format: choose MP3 (with bitrate up to 320kbps) for sharing, or WAV for lossless DAW editing. Step 3: Click '🚀 Run Editing Task'. Your clean audio track will extract in seconds!",
          zh: "第一步：上传含有目标音轨的视频文件（支持 MP4、MOV、WebM、MKV 等）。第二步：在右侧面板中选择所需的音频格式：日常分享发歌请选 MP3（最高支持 320kbps 发烧级码率），如需放入剪映、PR 或 Logic Pro 调音请选 WAV 无损格式。第三步：点击首屏「🚀 开始处理」，系统自动将纯净音轨提取并下载到本地！"
        }
      },
      {
        q: {
          en: "What is the difference between MP3 320kbps and Lossless WAV?",
          zh: "导出的 MP3 (320kbps) 和无损 WAV 格式到底有什么区别？怎么选？"
        },
        a: {
          en: "MP3 is a compressed audio format that shrinks file sizes dramatically, making it ideal for mobile listening, WhatsApp sharing, and email attachments. Our 320kbps MP3 setting provides the highest possible bitrate for MP3, indistinguishable from CD quality for everyday listening. WAV is an uncompressed PCM studio format that retains 100% of the original audio spectrum without any compression, making it mandatory for professional audio engineers and podcast producers.",
          zh: "MP3 是一种高效率的音频压缩格式，文件体积非常轻量，完美适合在手机、微信、车载 MP3 和邮件中畅快播放；我们提供的 320kbps 是 MP3 协议支持的最高极品码率，日常听感媲美 CD。而 WAV 则是未经任何数据压缩的母带级 PCM 原始音频格式，保留了 100% 的声场动态细节，适合专业剪辑师和音乐制作人在后期编辑中进行调音与多轨混音。"
        }
      },
      {
        q: {
          en: "Will my private meeting recordings or voice notes be uploaded to a cloud server?",
          zh: "分离公司内部会议录像或私密录音视频时，文件会泄露或上传到服务器吗？"
        },
        a: {
          en: "Never! This is our biggest competitive advantage over standard online tools. Your audio extraction happens strictly inside your web browser using local WebAssembly RAM. Your private meeting recordings and voice notes never touch the internet.",
          zh: "绝对不会！这是无云剪对比其他在线提取网站最大的技术护城河。所有的音频分离运算均在您电脑本地浏览器的 WebAssembly 内存中闭环执行，您的会议纪要、讲座录播和个人视频只在电脑本地处理，连一比特的数据都不会向网络发送！"
        }
      },
      {
        q: {
          en: "Is there a file size limit or watermark on extracted audio tracks?",
          zh: "导出的音频文件有大小限制、时长限制或者水印提示音吗？"
        },
        a: {
          en: "No limitations whatsoever! Extract audio from multi-hour lectures or 2GB videos completely free without watermarks, audio watermarks, or paywalls.",
          zh: "没有任何限制！您可以免费从几个小时的公开课视频或大几百兆的影片中任意提取音频，导出的声音干净纯淬，没有任何插播广告音、水印提示音或付费门槛！"
        }
      }
    ]
  },
  {
    path: "/crop-video/",
    toolId: "Crop",
    title: {
      en: "Free Online Crop Video - Resize 16:9, 9:16 for TikTok/Reels No Watermark",
      zh: "在线视频画面裁切 - 免费裁剪 16:9/9:16 适用抖音小红书无水印"
    },
    description: {
      en: "Crop video dimensions online for free with zero watermarks. Resize video frame aspect ratio to 9:16 (TikTok/Shorts), 16:9 (YouTube), or 1:1 (Instagram) locally in your browser.",
      zh: "在线免费裁切视频画面尺寸比例，高清无水印！把横屏或竖屏视频画幅一键裁剪为 9:16（抖音/小红书/Shorts）、16:9（B站/YouTube）或 1:1 方形。浏览器本地运算极速导出。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Crop Video Frame Ratio</span>",
      zh: "免费在线<span class=\"highlight\">裁剪视频画面尺寸比例</span>"
    },
    seoH2: {
      en: "Reframe Landscape Videos into Vertical 9:16 for TikTok, Shorts & Reels",
      zh: "将横屏视频一键裁切为 9:16 竖屏，适配抖音、Shorts 和 Reels"
    },
    subtitle: {
      en: "Reframe your visual canvas instantly with zero watermarks. Convert horizontal landscape videos into viral vertical 9:16 Shorts, Reels, and TikToks, or square 1:1 Instagram posts.",
      zh: "免费使用、高清无水印！立刻重塑您的视频视觉构图。把横屏长视频完美裁剪为适合抖音、小红书、TikTok 与 Shorts 的 9:16 爆款竖屏，或适合 Instagram 和朋友圈的 1:1 方形短片。"
    },
    intent: {
      en: "Must-have tool for social media managers, content creators, and influencers repurposing landscape videos for vertical video feeds.",
      zh: "新媒体运营者、短视频创作者及博主将横屏视频“一鱼多吃”转为竖屏爆款内容的核心生产力利器。"
    },
    badge: {
      en: "📐 TikTok/Reels Ratio • 100% Free • No Watermark",
      zh: "📐 抖音/Ins画幅 • 免费使用 • 无水印"
    },
    proTip: {
      en: "💡 Pro-Tip: Use 9:16 for TikTok, YouTube Shorts & Reels. Use 1:1 for Instagram Posts & Facebook Video feeds.",
      zh: "💡 专家建议：9:16 完美适配抖音、快手、TikTok 与 Shorts；1:1 方形完美适配 Instagram 与朋友圈视频。"
    },
    faqs: [
      {
        q: {
          en: "Is this video cropping tool completely free? Do I need to register an account or pay?",
          zh: "在线视频画面裁切是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the video cropper is free to use. There is no registration required, no login needed, and no subscription fees. You can resize video aspect ratios directly in your browser. Exports are watermark-free, with no cloud queue times; practical file size depends on your browser memory.",
          zh: "100% 免费使用！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需付费订阅！您打开网页即可立刻重塑横屏或竖屏视频画幅（9:16 / 16:9 / 1:1）。导出的所有视频保持原生纯净无水印、受本机内存限制与时长，随开随用！"
        }
      },
      {
        q: {
          en: "How do I crop a landscape video into vertical 9:16 for TikTok and YouTube Shorts?",
          zh: "怎样把一段横屏拍摄的长视频裁剪成适合抖音、小红书和 Shorts 的 9:16 竖屏短视频？"
        },
        a: {
          en: "Step 1: Upload your landscape video. Step 2: In the Crop settings panel, click the '📱 TikTok / Shorts 9:16' tag pill or the 9:16 ratio button. Step 3: A visual guide box will appear over your video—adjust the custom dimensions if needed. Step 4: Click '🚀 Run Editing Task' to export your viral vertical clip instantly!",
          zh: "第一步：上传您的横屏原视频。第二步：在右侧裁切面板中，直接点击「📱 TikTok / Shorts 9:16」平台快速选择标签，或下方的 9:16 比例按键。第三步：下方预览框中会出现裁剪对齐引导指示；如果需要精确宽高，还可点击「自定义」输入精确像素值。第四步：点击首屏「🚀 开始处理」，一键生成高清构图的竖屏短片！"
        }
      },
      {
        q: {
          en: "What aspect ratio should I choose for different social media platforms?",
          zh: "发布到抖音、小红书、B站、朋友圈和 Instagram 各自适合哪种画面比例？"
        },
        a: {
          en: "Here is the industry standard breakdown: Select 9:16 (Vertical) for TikTok, YouTube Shorts, Instagram Reels, Snapchat, and Douyin. Select 16:9 (Landscape) for YouTube long-form videos, Bilibili, and website embeds. Select 1:1 (Square) for Instagram feed posts, Facebook video ads, and WeChat Moments.",
          zh: "行业主流平台的画幅标准规范如下：发布到抖音、快手、小红书、微信视频号、TikTok 和 YouTube Shorts，请必选「9:16 竖屏」；发布到 B站、YouTube 长视频、西瓜视频，请选择「16:9 横屏」；发布到 Instagram 动态贴文、Facebook 视频广告以及朋友圈短视频，请选择「1:1 方形」。"
        }
      },
      {
        q: {
          en: "Can I enter custom exact pixel dimensions for my crop?",
          zh: "我可以用精确定制的像素宽高数值（如 1080×1080）来裁切自定义尺寸吗？"
        },
        a: {
          en: "Yes! Simply click the 'Custom' preset button in the tool deck and type your exact desired Width and Height in pixels (e.g., 1080 width by 1080 height). Our FFmpeg engine will crop precisely to your specifications.",
          zh: "完全可以！点击面板上的「自定义」预设按键后，下方会展开精确像素输入框，您可在其中任意指定所需的精确宽度和高度（例如输入 1080 宽 × 1080 高）。我们的底层引擎会以像素级精度为您生成完全对应尺寸的视频。"
        }
      },
      {
        q: {
          en: "Is this video cropper free? Does it add a watermark or blur the edges?",
          zh: "这款画面裁切软件免费吗？裁切后会出现清晰度下降或者强制加上水印吗？"
        },
        a: {
          en: "100% free with no watermarks! When you crop your video, we re-encode the frame using professional-grade H.264 high-profile encoding, ensuring your cropped video remains sharp and vibrant without any branding overlays.",
          zh: "100% 免费使用，导出视频绝无水印！在对画面进行物理边缘裁切时，无云剪采用高规格的 H.264 High-Profile 编码引擎进行重新渲染，确保构图裁切后的视频画面干净通透、色彩饱满，绝不仅有任何商业水印污染您的创作！"
        }
      }
    ]
  }
];

export const DOC_PAGES = [
  {
    path: "/how-to-use/",
    title: {
      en: "How to Use HappyConvert - Online Video Tools Tutorial",
      zh: "HappyConvert 使用教程 - 在线视频工具入门指南"
    },
    description: {
      en: "Learn how to use HappyConvert to cut, convert, compress, crop videos, make GIFs, and extract audio directly in your browser without uploading files.",
      zh: "学习如何使用 HappyConvert 在浏览器中剪切、转码、压缩、裁切视频，制作 GIF，并从视频中提取音频，无需上传文件。"
    },
    h1: {
      en: "How to Use HappyConvert",
      zh: "HappyConvert 使用教程"
    },
    seoH2: {
      en: "A simple browser video editing tutorial for first-time users",
      zh: "面向新用户的浏览器视频处理教程"
    },
    subtitle: {
      en: "Follow this short guide to choose the right tool, load a local media file, adjust export settings, and download the finished result.",
      zh: "按照这份简短指南，选择合适工具、导入本地媒体文件、调整导出参数，并下载处理完成的结果。"
    },
    faqs: [
      {
        q: {
          en: "Do I need to create an account before using HappyConvert?",
          zh: "使用 HappyConvert 前需要注册账号吗？"
        },
        a: {
          en: "No. HappyConvert is designed for no-signup, quick-use workflows. Open a tool page, select a local file, choose your settings, and run the task.",
          zh: "不需要。HappyConvert 适合随开随用的轻量流程。打开工具页，选择本地文件，设置参数，然后开始处理即可。"
        }
      },
      {
        q: {
          en: "Why does the first export take longer?",
          zh: "为什么第一次导出会慢一点？"
        },
        a: {
          en: "The browser needs to load and initialize the FFmpeg WebAssembly engine the first time you process a file. Later tasks are usually faster once the engine is ready.",
          zh: "第一次处理文件时，浏览器需要加载并初始化 FFmpeg WebAssembly 引擎。引擎准备好后，后续任务通常会更快。"
        }
      },
      {
        q: {
          en: "Are my files uploaded during the tutorial workflow?",
          zh: "按照教程操作时，文件会被上传吗？"
        },
        a: {
          en: "No media files are actively uploaded for processing. The work happens locally inside your browser, limited by your device memory and browser WebAssembly support.",
          zh: "媒体文件不会被主动上传用于处理。所有工作都在您的浏览器本地完成，实际能力取决于设备内存与浏览器 WebAssembly 支持。"
        }
      }
    ]
  },
  {
    path: "/about/",
    title: {
      en: "About Us - HappyConvert",
      zh: "关于我们 - HappyConvert 快乐转码"
    },
    description: {
      en: "Learn about HappyConvert, a privacy-first browser media toolkit that processes videos locally with WebAssembly and does not require uploads or accounts.",
      zh: "了解 HappyConvert 快乐转码，这是一款隐私优先的浏览器音视频工具，基于 WebAssembly 本地处理文件，无需上传或注册账号。"
    },
    faqs: []
  },
  {
    path: "/privacy/",
    title: {
      en: "Privacy Policy - HappyConvert",
      zh: "隐私政策 - HappyConvert 快乐转码"
    },
    description: {
      en: "Privacy policy for HappyConvert. We guarantee 100% local processing with zero file uploads and zero tracking.",
      zh: "HappyConvert 快乐转码工作室的隐私政策。我们承诺 100% 本地处理，零文件上传，零数据追踪。"
    },
    faqs: []
  },
  {
    path: "/terms/",
    title: {
      en: "Terms of Service - HappyConvert",
      zh: "服务条款 - HappyConvert 快乐转码"
    },
    description: {
      en: "Simple, transparent Terms of Service for using HappyConvert's local browser media editor.",
      zh: "使用 HappyConvert 快乐转码工作室本地浏览器媒体编辑器的简易透明服务条款。"
    },
    faqs: []
  }
];

export function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getToolPageByPath(pathname) {
  const normalized = normalizePath(pathname);
  return TOOL_PAGES.find((page) => page.path === normalized) || 
         DOC_PAGES.find((page) => page.path === normalized) || 
         BLOG_PAGES.find((page) => page.path === normalized) || 
         DEFAULT_PAGE;
}

export function getToolPageByTool(toolId) {
  return TOOL_PAGES.find((page) => page.toolId === toolId) || DEFAULT_PAGE;
}

export function localizedPage(page, lang) {
  const language = lang === "zh" ? "zh" : "en";
  return {
    ...page,
    title: page.title ? page.title[language] : "",
    description: page.description ? page.description[language] : "",
    h1: page.h1 ? page.h1[language] : "",
    seoH2: page.seoH2 ? page.seoH2[language] : "",
    subtitle: page.subtitle ? page.subtitle[language] : "",
    intent: page.intent ? page.intent[language] : "",
    badge: page.badge ? page.badge[language] : "",
    proTip: page.proTip ? page.proTip[language] : "",
    category: page.category ? page.category[language] : "",
    readTime: page.readTime ? page.readTime[language] : "",
    date: page.date ? page.date[language] : "",
    toolName: page.toolName ? page.toolName[language] : "",
    content: page.content ? page.content.map((sec) => ({
      h2: sec.h2 ? sec.h2[language] : null,
      p: sec.p ? sec.p.map((pText) => pText[language]) : null,
      list: sec.list ? sec.list.map((lText) => lText[language]) : null,
      callout: sec.callout ? sec.callout[language] : null
    })) : null,
    faqs: page.faqs ? page.faqs.map((faq) => ({
      q: faq.q[language],
      a: faq.a[language]
    })) : []
  };
}
