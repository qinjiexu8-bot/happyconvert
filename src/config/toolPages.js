import { BLOG_PAGES } from "./blogPages.js";
import { conservativeCopy } from "../lib/conservativeCopy.js";

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
    en: "🚀 100% Free • No Watermark • 8 Tools in One",
    zh: "🚀 免费使用 • 无水印 • 八大工具合一"
  },
  proTip: {
    en: "💡 Pro-Tip: All processing happens locally in your browser via WebAssembly. Your files stay on your own device, which suits confidential or sensitive media.",
    zh: "💡 专家建议：所有处理均通过 WebAssembly 在浏览器本地完成。您的文件绝不会离开设备 — 非常适合处理机密或敏感媒体文件。"
  },
  faqs: [
    {
      q: {
        en: "Is HappyConvert completely free to use? Do I need to register or pay?",
        zh: "HappyConvert 是完全免费的吗？需要注册账号或付费订阅吗？"
      },
      a: {
        en: "Yes, HappyConvert is free to use. There is no registration required, no login needed, and no credit card or subscription fees. You can use the video and audio tools directly in your browser. Exports are watermark-free, with no cloud queue times; practical file size depends on your browser memory.",
        zh: "是的，HappyConvert 免费使用。无需注册账号、无需登录、无需绑定信用卡，打开网页即可直接使用全部音视频工具。导出的文件不带水印，也没有云端排队，不必等待别人的服务器；实际可处理的文件大小取决于浏览器与设备内存。"
      }
    },
    {
      q: {
        en: "What tools are included in HappyConvert?",
        zh: "HappyConvert 快乐转码工作室包含哪些工具？"
      },
      a: {
        en: "HappyConvert includes 8 free tools: Video Converter (MP4/WebM/MOV/MKV), Video Cutter (stream-copy trim), Video Compressor (smart CRF), Video to GIF (custom FPS), Audio Extractor (MP3/WAV), Video Cropper (9:16/16:9/1:1 ratios), Video Merger (join clips with stream copy), and Audio Converter (MP3/M4A/WAV/FLAC/OGG/AIFF). All tools are free to use with no watermarks.",
        zh: "HappyConvert 包含 8 大免费工具：视频格式转换（MP4/WebM/MOV/MKV）、视频剪切（无损流拷贝）、视频压缩（智能 CRF）、视频转 GIF（自定义帧率）、音频提取（MP3/WAV）、画面裁切（9:16/16:9/1:1）、视频合并（同源片段流拷贝拼接）、音频格式转换（MP3/M4A/WAV/FLAC/OGG/AIFF）。所有工具免费使用，无水印。"
      }
    },
    {
      q: {
        en: "How does local browser processing work? Is it safe?",
        zh: "浏览器本地处理是如何工作的？安全吗？"
      },
      a: {
        en: "We use WebAssembly (WASM) technology to run the FFmpeg engine directly inside your browser's sandboxed memory. Your video and audio files are not uploaded to any server for processing — the work happens on your device's own CPU and RAM, so the file never has to leave your computer. Nothing is queued on a remote machine, and there is nothing for us to store.",
        zh: "我们使用 WebAssembly (WASM) 技术在浏览器沙盒内存中直接运行 FFmpeg 引擎。您的视频和音频文件不会被上传到任何服务器进行处理 — 运算在您设备自己的 CPU 与内存中完成，文件不必离开您的电脑。没有远端排队，也没有需要我们保存的数据。"
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
          zh: "是的，这款视频转换工具免费使用。无需注册账号、无需登录、无需付费订阅，打开网页即可直接转换。导出的视频不带水印，也没有云端排队；实际可处理的文件大小取决于浏览器内存，超大文件建议在桌面浏览器上处理。"
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
      zh: "免费在线进行视频剪切，纯净无水印！支持按时间戳精确裁剪 MP4、MOV、WebM、MKV 文件。提供无损流拷贝模式，通常可以更快导出原始画质片段。"
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
      en: "Turn a video highlight into a shareable animated GIF without waiting on an upload. Adjust custom FPS framerates and pixel widths to balance animation smoothness against lightweight file size.",
      zh: "免费使用、无水印！把视频高光片段转成适合微信群聊和社媒分享的 GIF 动图。可自由调控 FPS 帧率与像素宽度，在流畅度与体积之间自己取舍。"
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
          en: "Step 1: Upload your video file. Step 2: (Optional) If you only want a specific segment, switch to the Video Cutter tool to trim the timestamps first. Step 3: In the GIF settings, choose your desired Framerate (e.g., 15 FPS for smoother animation, 10 FPS for a smaller file) and Width (e.g., 480px or 320px). Step 4: Click '🚀 Run Editing Task' and wait for the GIF to be generated — GIF encoding is frame-by-frame work, so longer or higher-FPS clips take noticeably more time.",
          zh: "第一步：上传待转的视频文件。第二步：（可选）如果只想截取其中几秒，可先在上方切换到「视频剪切」选定时间区间。第三步：在右侧 GIF 设置面板中，选择合适的帧率（建议 15 FPS 保证丝滑，10 FPS 缩小体积）与画面宽度（如 480px 或 320px）。第四步：点击首屏「🚀 开始处理」，自动生成并导出动图！"
        }
      },
      {
        q: {
          en: "Why do some online converters produce GIF animations with color banding and flickering?",
          zh: "为什么很多转换网站做出来的 GIF 动图颜色严重失真，有明显色块和闪烁？"
        },
        a: {
          en: "Standard GIF converters force your video colors into a generic 256-color palette, causing dithering and color banding. Our engine uses FFmpeg's two-pass custom palette generation, which scans your video's own color spectrum first to build a dedicated palette, so the result keeps steadier colors and less flicker.",
          zh: "普通的 GIF 转换工具只会生硬地将视频颜色套用系统默认的 256 色色盘，导致色彩断层、严重颗粒感和绿色噪点。HappyConvert 的引擎内置了 FFmpeg 的双向调色板（Two-pass Palette）算法，在生成动图前会自动全局扫描您视频的独特色彩空间并生成专属调色盘，让生成的 GIF 画面更平滑、色泽更稳定。"
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
      zh: "🎵 高音质导出 • 免费使用 • 快速导出"
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
          zh: "第一步：上传含有目标音轨的视频文件（支持 MP4、MOV、WebM、MKV 等）。第二步：在右侧面板中选择所需的音频格式：日常分享发歌请选 MP3（最高支持 320kbps 码率），如需放入剪映、PR 或 Logic Pro 调音请选 WAV 无损格式。第三步：点击首屏「🚀 开始处理」，系统会把音轨提取并下载到本地，耗时取决于视频时长与本机 CPU。"
        }
      },
      {
        q: {
          en: "What is the difference between MP3 320kbps and Lossless WAV?",
          zh: "导出的 MP3 (320kbps) 和无损 WAV 格式到底有什么区别？怎么选？"
        },
        a: {
          en: "MP3 is a compressed audio format that keeps file sizes small, which makes it convenient for phones, car stereos, messaging apps and email attachments. Our 320kbps setting is the highest bitrate MP3 supports, but MP3 is still a lossy format. WAV is uncompressed PCM audio and keeps every sample that is present in the current file, which is why editors and podcast producers prefer it for further processing. If the source is already lossy, converting it to WAV or to a higher bitrate does not recover detail that was discarded earlier.",
          zh: "MP3 是一种高效率的音频压缩格式，文件体积很轻，适合在手机、车载播放器和邮件中分享；我们提供的 320kbps 是 MP3 协议支持的最高码率之一，但请注意它仍然是有损格式。WAV 则是未压缩的 PCM 原始音频，保留了当前文件里的全部采样数据，适合在后期编辑中进行调音与多轨混音。如果源文件本身就是有损格式，转成 WAV 或更高码率并不会找回已经丢失的细节。"
        }
      },
      {
        q: {
          en: "Will my private meeting recordings or voice notes be uploaded to a cloud server?",
          zh: "分离公司内部会议录像或私密录音视频时，文件会泄露或上传到服务器吗？"
        },
        a: {
          en: "No. Your audio extraction runs inside your own browser using local WebAssembly memory. Your private meeting recordings, lecture captures and personal videos are processed on your device and are not uploaded to a server for processing.",
          zh: "不会。这正是 HappyConvert 与多数在线工具最大的区别：音频分离运算全部在您电脑本地浏览器的 WebAssembly 内存中完成，您的会议纪要、讲座录播和个人视频只在本地处理，不会被上传到服务器。"
        }
      },
      {
        q: {
          en: "Is there a file size limit or watermark on extracted audio tracks?",
          zh: "导出的音频文件有大小限制、时长限制或者水印提示音吗？"
        },
        a: {
          en: "The exported file carries no watermark, no audio tag and no paywall. The real limit is your device: both the source file and the decoded audio have to fit in your browser's memory at the same time, so multi-hour recordings are best handled on a desktop browser with plenty of free RAM.",
          zh: "导出的音频里不会有水印提示音、插播广告音，也没有付费门槛。真正的限制来自设备：源文件和解码后的音频需要同时放进浏览器内存，因此几个小时的超长录音建议在内存充足的桌面浏览器上处理。"
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
      en: "Reframe your visual canvas with zero watermarks. Convert horizontal landscape videos into vertical 9:16 Shorts, Reels and TikToks, or square 1:1 Instagram posts.",
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
          en: "Step 1: Upload your landscape video. Step 2: In the Crop settings panel, click the '📱 TikTok / Shorts 9:16' tag pill or the 9:16 ratio button. Step 3: A visual guide box will appear over your video—adjust the custom dimensions if needed. Step 4: Click '🚀 Run Editing Task' to export the reframed clip. Cropping re-encodes the frame, so export time scales with clip length and your CPU.",
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
          zh: "100% 免费使用，导出视频绝无水印！在对画面进行物理边缘裁切时，HappyConvert 会使用 H.264 High-Profile 编码重新渲染，让裁切后的视频画面保持清晰、色彩正常，不会添加任何商业水印。"
        }
      }
    ]
  },
  {
    path: "/merge-video/",
    toolId: "Merge",
    title: {
      en: "Merge Video Online - Free MP4 Joiner & Video Combiner",
      zh: "在线合并视频 - 免费 MP4 视频拼接与合并工具"
    },
    description: {
      en: "Merge video online for free with no watermarks. Join MP4, MOV, WebM and MKV clips in your browser: matching clips are joined with stream copy, mismatched ones are re-encoded to match the first clip.",
      zh: "免费在线合并视频，无水印。在浏览器本地把 MP4、MOV、WebM、MKV 片段按顺序拼接：编码一致的片段走流拷贝拼接，来源不同时以第一个片段为基准统一规格后重新编码。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Video Merger</span>",
      zh: "免费在线<span class=\"highlight\">视频合并拼接</span>"
    },
    seoH2: {
      en: "Join Multiple Video Clips into One File in Your Browser",
      zh: "在浏览器中把多段视频按顺序拼接成一个文件"
    },
    subtitle: {
      en: "Combine several clips into a single video. When every clip shares the same codec and resolution, the join uses stream copy and adds little extra load; mixed sources are re-encoded to match the first clip.",
      zh: "把多段视频拼接为一个文件。当所有片段的编码与分辨率一致时，合并采用流拷贝，额外开销很小；来源混合时会以第一个片段为基准重新编码对齐规格。"
    },
    intent: {
      en: "Best for joining phone clips into one video, stitching separately recorded segments, or recombining parts of a file that was split earlier.",
      zh: "适合把手机拍的多段素材拼成一条完整视频、把分段录制的课程或会议录像接起来，以及把之前被切开的视频重新合成完整文件。"
    },
    badge: {
      en: "🔗 Fast Join • 100% Free • No Watermark",
      zh: "🔗 快速拼接 • 免费使用 • 无水印"
    },
    proTip: {
      en: "💡 Pro-Tip: Merge clips that came from the same camera or the same export preset first. Identical codec, resolution and frame rate are what let the engine use stream copy — the fastest and lightest path.",
      zh: "💡 专家建议：优先合并同一台设备或同一导出预设产生的片段。编码、分辨率、帧率一致，引擎才能走流拷贝 — 这是最快、最省内存的路径。"
    },
    faqs: [
      {
        q: {
          en: "Is this video merger completely free? Do I need to register an account or pay?",
          zh: "这款在线视频合并工具是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the video merger is free to use. There is no registration required, no login needed, and no subscription fees, and the merged output carries no watermark. The practical limit is your browser memory, since the clips you join are held in your device's RAM while the engine works.",
          zh: "是的，这款视频合并工具免费使用。无需注册账号、无需登录、无需付费订阅，合并后的文件不带水印。实际限制来自浏览器内存：合并期间这些片段需要同时停留在您设备的内存中。"
        }
      },
      {
        q: {
          en: "How do I merge several videos into one file?",
          zh: "怎样把多段视频合并成一个文件？"
        },
        a: {
          en: "Step 1: Add two or more clips to the input area — you can select them in one go or add them one by one. Step 2: Check the order of the list; clips are joined in the order shown, so drag or move an entry if it is out of place. Step 3: Leave the mode on Fast Join (stream copy) if all clips come from the same source, or switch to Unified Re-encode if they do not. Step 4: Click '🚀 Start Processing' and wait for the single joined file to appear in the output gallery.",
          zh: "第一步：把两段或更多片段加入输入区 — 可以一次多选，也可以逐个添加。第二步：确认列表顺序，合并严格按列表顺序进行，顺序不对就先调整。第三步：如果所有片段来源一致，保持「快速合并（流拷贝）」；来源不一致则切换到「统一重编码」。第四步：点击首屏「🚀 开始处理」，等待输出区生成合并后的单个文件。"
        }
      },
      {
        q: {
          en: "Why is fast join sometimes much faster than re-encoding?",
          zh: "为什么快速合并有时候很快，有时候却很慢？"
        },
        a: {
          en: "Fast join copies the existing compressed stream instead of decoding frames, so when all clips share the same codec, resolution, frame rate and audio parameters, the work is mostly file copying. When the parameters differ, stream copy is no longer reliable — and it does not always announce that. ffmpeg can finish with a success code while the muxer drops the frames it cannot place on a monotonic timeline, leaving a file that opens fine but goes wrong partway through. This tool therefore probes every clip before a fast join and switches to Unified Re-encode as soon as the parameters disagree. That path decodes all clips together and costs more CPU and memory, but it is the one that stays correct.",
          zh: "快速合并直接复制已有的压缩流，不解码画面。因此当所有片段的编码、分辨率、帧率和音频参数都一致时，主要工作只是复制数据。参数不一致时，流拷贝就不再可靠 — 而且它不一定告诉你。ffmpeg 可能返回成功码，而 muxer 已经丢掉了放不进单调时间线的帧，留下一个能打开、但播到中途就不对劲的文件。所以本工具会在快速合并前逐段预检，一旦参数对不上就改用统一重编码。这条路会把所有片段一起解码，更吃 CPU 和内存，但它是正确的那条。"
        }
      },
      {
        q: {
          en: "Does merging videos reduce the quality?",
          zh: "合并视频会让画质下降吗？"
        },
        a: {
          en: "With stream copy the video data is moved without being re-compressed, so the joined result keeps the quality of the input clips. Unified Re-encode decodes and encodes again, which is a lossy step for H.264/H.265 output; how visible that is depends on the bitrate you choose and on the source footage.",
          zh: "走流拷贝时视频数据只是被搬运，没有重新压缩，合并结果保留输入片段的原有画质。走统一重编码时会重新解码再编码，对 H.264/H.265 来说这一步是有损的；损失是否明显取决于码率设置和原始素材。"
        }
      },
      {
        q: {
          en: "How many clips can I merge, and how large can they be?",
          zh: "最多能合并几段？总大小可以到多少？"
        },
        a: {
          en: "There is no fixed clip count imposed by the tool; what limits you is memory. Every added clip plus the joined output has to fit in your browser's memory at the same time, so a handful of short clips merges comfortably, while many long 4K clips are better handled on a desktop with plenty of free RAM and in smaller batches.",
          zh: "工具本身没有写死的片段数量上限，真正的约束是内存。所有加入的片段加上合并后的输出需要同时放进浏览器内存，因此几段短视频合并很轻松；如果是一堆很长的 4K 片段，建议在内存充足的桌面电脑上分批合并。"
        }
      }
    ]
  },
  {
    path: "/convert-audio/",
    toolId: "Audio",
    title: {
      en: "Convert Audio Online - Free MP3, M4A, WAV, FLAC & OGG Converter",
      zh: "在线音频格式转换 - 免费 MP3/M4A/WAV/FLAC/OGG 转换器"
    },
    description: {
      en: "Convert audio online for free with no watermarks. Turn MP3, M4A, WAV, FLAC, OGG and AIFF files into each other in your browser, and pull the audio track out of a video file in the same place.",
      zh: "免费在线转换音频格式，无水印。在浏览器本地把 MP3、M4A、WAV、FLAC、OGG、AIFF 互相转换，也可以直接从这里导出视频文件里的音轨。"
    },
    h1: {
      en: "Free Online <span class=\"highlight\">Audio Converter</span>",
      zh: "免费在线<span class=\"highlight\">音频格式转换</span>"
    },
    seoH2: {
      en: "Convert Between MP3, M4A, WAV, FLAC, OGG and AIFF in Your Browser",
      zh: "在浏览器中互转 MP3、M4A、WAV、FLAC、OGG 与 AIFF"
    },
    subtitle: {
      en: "Seven output formats from one tool. MP3 and M4A stay small for sharing, WAV and FLAC keep the samples that are present in the source, and OGG/Opus is efficient for web playback.",
      zh: "一个工具提供七种输出格式。MP3 与 M4A 体积小便于分享，WAV 与 FLAC 保留源文件现有的采样数据，OGG/Opus 则适合网页播放场景。"
    },
    intent: {
      en: "Best for turning M4A voice memos into MP3, converting a FLAC download into something you can send, or exporting a clean audio track from a video file.",
      zh: "适合把手机录音的 M4A 转成通用的 MP3、把下载来的 FLAC 转成方便发送的格式，或从视频文件中单独导出干净的音轨。"
    },
    badge: {
      en: "🎧 7 Output Formats • 100% Free • No Watermark",
      zh: "🎧 七种输出格式 • 免费使用 • 无水印"
    },
    proTip: {
      en: "💡 Pro-Tip: MP3, M4A and OGG/Opus are lossy formats. Re-encoding a 128kbps source at 320kbps does not bring back detail that was already discarded, so choose WAV or FLAC when you want to keep the current samples intact.",
      zh: "💡 专家建议：MP3、M4A、OGG/Opus 都是有损格式。把原本 128kbps 的音频重新编码成 320kbps，并不能找回已经丢失的细节；需要原样保留现有采样数据时，请选择 WAV 或 FLAC。"
    },
    faqs: [
      {
        q: {
          en: "Is this audio converter completely free? Do I need to register an account or pay?",
          zh: "这款在线音频格式转换工具是完全免费的吗？需要注册账号或付费订阅吗？"
        },
        a: {
          en: "Yes, the audio converter is free to use. There is no registration required, no login needed, and no subscription fees, and the exported audio carries no watermark or advertising tag. The practical limit is your browser memory.",
          zh: "是的，这款音频格式转换工具免费使用。无需注册账号、无需登录、无需付费订阅，导出的音频不带水印，也不会加插广告提示音。实际限制来自浏览器内存。"
        }
      },
      {
        q: {
          en: "Which audio formats can I convert between?",
          zh: "支持哪些音频格式之间的互转？"
        },
        a: {
          en: "You can export MP3, M4A (AAC), WAV, FLAC, OGG (Opus), OGG (Vorbis) and AIFF. On the input side the tool reads those formats plus the audio tracks inside common video containers such as MP4, MOV, MKV and WebM, so you can also use it to pull audio out of a video.",
          zh: "可以导出 MP3、M4A (AAC)、WAV、FLAC、OGG (Opus)、OGG (Vorbis) 和 AIFF。输入侧除了支持这些音频格式，还能读取 MP4、MOV、MKV、WebM 等常见视频封装里的音轨，所以也可以用它从视频中直接导出音频。"
        }
      },
      {
        q: {
          en: "What is the difference between MP3, M4A, WAV and FLAC?",
          zh: "MP3、M4A、WAV、FLAC 这几种格式到底有什么区别？"
        },
        a: {
          en: "MP3 and M4A are lossy: they discard audio detail to make files small, and MP3 is the most universally supported. FLAC is a lossless format — smaller than WAV, but able to reproduce the current samples exactly. WAV stores uncompressed PCM, so it is the largest but the simplest to edit. OGG/Opus is lossy and efficient at low bitrates, which suits web playback.",
          zh: "MP3 与 M4A 是有损格式：通过舍弃部分音频细节来缩小体积，其中 MP3 的通用性最好。FLAC 属于无损格式 — 文件比 WAV 小，但能精确还原当前文件的采样数据。WAV 存储未压缩的 PCM，体积最大，但最适合直接进入后期编辑。OGG/Opus 也是有损格式，在低码率下效率较高，适合网页播放。"
        }
      },
      {
        q: {
          en: "Will converting a 128kbps file to 320kbps improve the sound quality?",
          zh: "把 128kbps 的文件转成 320kbps，音质会变好吗？"
        },
        a: {
          en: "No. Once a lossy encoder has discarded detail, that detail is gone; a higher bitrate only avoids adding further damage, it cannot restore what was removed. If you must re-encode, going from a low bitrate to a higher one mostly increases file size. Keeping the source untouched is the only way to preserve its current quality.",
          zh: "不会。有损编码一旦舍弃了细节，那些细节就已经丢失；提高码率只能避免造成新的损伤，无法还原已经被移除的内容。如果必须重新编码，从低码率转成高码率主要只是把体积变大。想保住当前音质，唯一办法是让源文件本身不被重新编码。"
        }
      },
      {
        q: {
          en: "Can I extract the audio from a video file here, and is there a size limit?",
          zh: "可以在这里从视频中提取音频吗？有大小或时长限制吗？"
        },
        a: {
          en: "Yes — add an MP4, MOV, MKV or WebM file and choose any of the seven audio formats; the video stream is simply dropped. There is no fixed size limit, but the source file and the decoded audio must both fit in your browser's memory, so very long recordings are best done on a desktop browser.",
          zh: "可以 — 直接加入 MP4、MOV、MKV 或 WebM 文件，再选择七种音频格式中的任意一种，视频流会被直接丢弃。工具没有写死的大小限制，但源文件和解码后的音频需要同时放进浏览器内存，因此超长录音建议在桌面浏览器上处理。"
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

/**
 * Single funnel for page copy.
 *
 * Both consumers go through here — the React app at runtime and
 * scripts/prerender-seo.mjs at build time — which is exactly why the
 * conservative-copy rewrite belongs *here* rather than only in the build
 * script. When the rewrite lived only in the prerenderer, crawlers and
 * reviewers read the toned-down text while real users read the raw marketing
 * claims. Anchoring it in this funnel guarantees both audiences see the same
 * words, and the audit gate can assert on that single output.
 *
 * `conservativeCopy` is idempotent, so the prerenderer applying it again on
 * top of these fields is a harmless no-op.
 */
export function localizedPage(page, lang) {
  const language = lang === "zh" ? "zh" : "en";
  const localize = (value) => (value ? value[language] : "");
  const copy = (value) => conservativeCopy(localize(value), language);
  return {
    ...page,
    title: copy(page.title),
    description: copy(page.description),
    h1: copy(page.h1),
    seoH2: copy(page.seoH2),
    subtitle: copy(page.subtitle),
    intent: copy(page.intent),
    badge: copy(page.badge),
    proTip: copy(page.proTip),
    category: copy(page.category),
    readTime: copy(page.readTime),
    date: copy(page.date),
    toolName: copy(page.toolName),
    content: page.content ? page.content.map((sec) => ({
      h2: copy(sec.h2),
      p: sec.p ? sec.p.map((pText) => copy(pText)) : null,
      list: sec.list ? sec.list.map((lText) => copy(lText)) : null,
      callout: copy(sec.callout),
      image: sec.image ? {
        src: sec.image.src,
        alt: copy(sec.image.alt),
        caption: copy(sec.image.caption)
      } : null,
      faqs: sec.faqs ? sec.faqs.map((faq) => ({
        q: copy(faq.q),
        a: copy(faq.a)
      })) : null
    })) : null,
    faqs: page.faqs ? page.faqs.map((faq) => ({
      q: copy(faq.q),
      a: copy(faq.a)
    })) : []
  };
}
