export const BLOG_PAGES = [
  {
    path: "/blog/",
    isBlogIndex: true,
    title: {
      en: "Blog & Guides - HappyConvert",
      zh: "实战教程与博客 - HappyConvert 快乐转码"
    },
    description: {
      en: "Explore tutorials, video compression guides, and technical insights on browser-based WebAssembly media processing.",
      zh: "探索音视频处理实战教程、微信/Discord 压缩指南以及基于 WebAssembly 浏览器媒体计算的技术深析。"
    }
  },
  {
    path: "/blog/compress-video-for-discord/",
    isArticle: true,
    title: {
      en: "How to Compress Video for Discord Under 25MB (Free & No Watermark)",
      zh: "如何把视频高质量压缩到 25MB 以内？完美适配 Discord / 钉钉 / 微信发帖教程"
    },
    description: {
      en: "Learn how to easily compress large videos under Discord's 25MB limit without losing quality or getting watermarks using online smart CRF bitrate encoding.",
      zh: "手把手教您如何通过智能 CRF 码率调控与分辨率优化，轻松把大视频压缩至 25MB 以内，畅快发送 Discord、钉钉、微信与邮件附件，全程无水印且免费使用。"
    },
    category: { en: "Tutorials", zh: "实战教程" },
    readTime: { en: "5 min read", zh: "5 分钟阅读" },
    date: { en: "July 8, 2026", zh: "2026年7月8日" },
    toolLink: "/compress-video/",
    toolName: { en: "Free Video Compressor", zh: "免费在线视频压缩工具" },
    content: [
      {
        h2: {
          en: "Why Discord and Email Have 25MB File Size Limits",
          zh: "为什么 Discord、微信和邮件有 25MB/50MB 的附件大小限制？"
        },
        p: [
          {
            en: "Whether you are sharing gaming highlights on Discord, sending product demos via email, or posting video clips on WeChat and Slack, you have likely encountered the frustrating 'File too large' error. Most communications platforms cap free file attachments at 25MB or 50MB to conserve cloud server storage and bandwidth.",
            zh: "无论您是在 Discord 分享游戏精彩高光，通过邮件发送产品演示，还是在微信、钉钉或企业微信中传输录屏，几乎都遇到过令人烦躁的“文件过大，无法发送”提示。出于服务器存储成本与传输带宽的限制，绝大多数社交和通信软件都将免费附件体积限制在 25MB 或 50MB 以内。"
          },
          {
            en: "Traditional ZIP archives don't work on video files because modern MP4 and MOV containers are already densely compressed. Trying to zip an MP4 will rarely reduce its size by more than 1%. To shrink a video file dramatically, you need smart video bitrate and resolution scaling.",
            zh: "传统的 ZIP 或 RAR 压缩包对视频文件完全无能为力，因为现代 MP4 和 MOV 封装本身就已经高度压缩过。试图打包一个 MP4 视频，体积往往连 1% 都缩小不了。想要将视频体积减少 50% ~ 80%，必须依赖专业的视频编码调控（CRF 智能码率）与分辨率优化。"
          }
        ]
      },
      {
        h2: {
          en: "The Secret to Lossless Size Reduction: Smart CRF Encoding",
          zh: "肉眼高质量压缩的秘密武器：智能 CRF 码率调控"
        },
        p: [
          {
            en: "Old-school video compressors force a fixed bitrate (CBR) across your entire video. This causes two massive problems: still scenes waste disk space, while fast-moving action scenes become blurry and pixelated. The solution is Constant Rate Factor (CRF).",
            zh: "传统的视频压缩软件采用固定码率（CBR）进行压制，这带来了严重矛盾：画面静止的高端浪费了大量多余码率，而游戏激烈战斗或快速运动的画面却因码率不足出现严重马赛克。现代视频处理的真正解决方案是 CRF（Constant Rate Factor，固定画面质量因子）。"
          },
          {
            en: "Our online compressor uses advanced FFmpeg CRF algorithms that dynamically analyze spatial and temporal motion frame-by-frame. It allocates high bitrate only where your eyes notice details, and aggressively strips redundant data in static backgrounds. Setting CRF to 28 (our 'Balanced' mode) typically shrinks 1080p video files by 60% to 80% with zero visible quality loss!",
            zh: "无云剪内置的 CRF 智能算法会对每一帧画面的动态复杂度进行局部实时演算。它只在眼睛重点关注的细节丰富区域投入足量码率，而在平缓静止的背景中大幅剔除冗余数据。在实测中，选择 CRF 28「平衡模式」不仅能在肉眼无法分辨差异的清晰度下将 1080p 视频体积缩减 60% ~ 80%，更保证了文字与细节边缘的高锐利度！"
          }
        ],
        callout: {
          en: "💡 Pro Tip: For 4K or 2K videos recorded on iPhones or screen recorders, downscaling the resolution to 1080p or 720p while applying CRF 28 will instantly reduce a 300MB file to under 20MB!",
          zh: "💡 专家提示：对于苹果 iPhone 或高帧率录屏软件拍摄的 4K/2K 巨型文件，在右侧选择 CRF 28 的同时将分辨率缩放到 1080p 或 720p，能瞬间把 300MB 的大文件压缩到 20MB 以内！"
        }
      },
      {
        h2: {
          en: "Step-by-Step Guide: Compressing Video Under 25MB Online",
          zh: "手把手实战图文：3 步在线压缩视频到 25MB 内"
        },
        list: [
          {
            en: "Step 1: Open HappyConvert and drag your MP4, MOV, or WebM file directly into the local browser upload box. No registration or login is required.",
            zh: "第一步：打开无云剪工作室，将您的 MP4、MOV 或 WebM 视频直接拖入左侧上传框。无需注册账号，打开网页即可立刻使用。"
          },
          {
            en: "Step 2: In the right-hand control deck, click the '⚖️ Balanced (CRF 28)' compression preset. This is optimized specifically for Discord, WeChat, and email attachments.",
            zh: "第二步：在右侧控制台中，直接选择「⚖️ 平衡模式 (CRF 28)」智能压缩卡片。这是专为社媒分享和邮件附件定制的黄金比例。"
          },
          {
            en: "Step 3: Click the glowing '🚀 Run Editing Task' button. Your video processes locally at native CPU speed and downloads automatically without watermarks!",
            zh: "第三步：点击首屏醒目的「🚀 开始处理」按钮。系统将在您电脑内存中以极速闭环处理，几秒内自动弹出保存干净无水印的高清压缩成片！"
          }
        ]
      },
      {
        h2: {
          en: "Why Local Browser Processing Beats Cloud Converters",
          zh: "为什么选择浏览器本地沙盒处理，而不是传统云端压缩网站？"
        },
        p: [
          {
            en: "When you use traditional online tools like Clideo, Kapwing, or 123apps, you must upload your heavy video file to remote cloud servers. A 500MB upload can take over 10 minutes on slow Wi-Fi, creates privacy risks for confidential videos, and often hits strict free-tier paywalls or watermarks.",
            zh: "当您使用市面上传统的在线压缩工具时，您必须被迫将几百兆的视频缓慢上传到远程云端服务器。上传 500MB 文件不仅需要漫长的等待，还将您的商业机密或家庭隐私录像暴露在网络泄露风险之下，且往往导出时才发现有免费大小限制或烦人的品牌水印。"
          },
          {
            en: "HappyConvert is powered by WebAssembly. Your videos are processed 100% inside your browser's sandboxed RAM. There are zero uploads, zero waiting queues, and practical limits based on your browser memory, and 100% data privacy. Try our compressor below right now!",
            zh: "无云剪工作室采用独家 WebAssembly 引擎技术，视频数据 100% 在您本机的内存沙盒中流转运算。零文件上传、零网络延迟、受本机内存限制、绝对不加水印。立刻点击下方按键体验极速高质量压缩！"
          }
        ]
      }
    ]
  },
  {
    path: "/blog/ffmpeg-wasm-vs-cloud-converters/",
    isArticle: true,
    title: {
      en: "Why Local Browser Video Editing (FFmpeg WASM) is Safer & Faster Than Cloud Converters",
      zh: "为什么浏览器本地剪辑（FFmpeg WASM）比传统云端转换器更安全、更极速？"
    },
    description: {
      en: "Discover the technology behind WebAssembly media processing. See why local browser editing eliminates upload wait times and protects your private videos from cloud leaks.",
      zh: "深度解析 WebAssembly 浏览器多媒体计算引擎技术。看本地沙盒运算如何彻底消除上传排队等待，并从根本上防止机密视频被云端服务器泄露。"
    },
    category: { en: "Tech & Privacy", zh: "技术与安全" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 5, 2026", zh: "2026年7月5日" },
    toolLink: "/convert-video/",
    toolName: { en: "Free Video Converter", zh: "免费视频格式转换器" },
    content: [
      {
        h2: {
          en: "The Hidden Bottlenecks and Privacy Risks of Cloud Video Converters",
          zh: "传统云端视频转码站的隐形痛点与隐私危机"
        },
        p: [
          {
            en: "For over a decade, online video converters have relied on a simple cloud-based architecture: users upload their files to a remote server, a cloud backend runs FFmpeg to process the video, and the user downloads the finished file. While convenient, this model suffers from three fundamental flaws.",
            zh: "十多年来，网络上的视频转换网站一直沿用着陈旧的云端处理架构：用户把视频上传到远程服务器，服务器在后台调用转码脚本，用户再漫长排队等待下载。尽管表面方便，这种架构却有着三个无法克服的致命伤："
          },
          {
            en: "First is the bandwidth bottleneck. Uploading a 1GB 60fps screen recording over standard home broadband can take 15 to 30 minutes before editing even begins. Second is privacy exposure: your confidential internal team meetings, unreleased product demos, and personal family videos are stored on remote third-party hard drives. Third is aggressive monetization: cloud computing is expensive, forcing competitors to enforce 500MB limits, daily caps, or mandatory watermark overlays unless you pay monthly subscription fees.",
            zh: "第一是上传传输瓶颈。在家庭宽带下上传一个 1GB 的 60fps 高清视频，往往要等待 15 到 30 分钟，转码还没开始耐心就已耗尽。第二是数据隐私危机：您的企业内部会议录像、未发表的产品商业机密或家庭生活短片，都必须存放在不受控的第三方云端硬盘中。第三是高昂的收费陷阱：云端服务器昂贵，导致同类竞品不得不限制 500MB 大小，或强制在视频上打上水印，逼迫用户购买高昂的月度会员。"
          }
        ]
      },
      {
        h2: {
          en: "What is WebAssembly (WASM) and How Does It Revolutionize Video Editing?",
          zh: "什么是 WebAssembly (WASM)？它如何颠覆在线音视频处理？"
        },
        p: [
          {
            en: "WebAssembly (WASM) is a modern web standard developed by W3C, Google, Apple, Microsoft, and Mozilla that allows high-performance code written in C, C++, and Rust to execute directly inside web browsers at near-native CPU speeds.",
            zh: "WebAssembly (WASM) 是由 W3C、Google、Apple、Microsoft 和 Mozilla 联合制定的下一代 Web 引擎标准。它允许将用 C、C++ 和 Rust 编写的底层高性能多媒体库，直接在网页浏览器中以接近裸机物理 CPU 的极限速度运行。"
          },
          {
            en: "At HappyConvert, we compiled the industry-standard FFmpeg multimedia framework into sandboxed WebAssembly instructions. When you visit our site, your browser loads this lightweight engine into local memory. Your web browser effectively transforms into a full-powered, offline-capable desktop video studio!",
            zh: "在无云剪工作室，我们将全球工业标准的 FFmpeg 多媒体框架深度编译为严格沙盒化的 WebAssembly 指令集。当您打开本网页时，浏览器将这套轻量级引擎直接载入本机内存。您的网页浏览器瞬间升级为一个功能媲美桌面专业软件、且支持纯离线运行的多媒体工作室！"
          }
        ],
        callout: {
          en: "🔒 Complete Data Isolation: Because WebAssembly executes entirely inside your browser's memory sandbox, your raw video streams never leave your device. Once you close the tab, all memory blobs are destroyed instantly by your operating system.",
          zh: "🔒 极强的隐私隔离：因为 WebAssembly 全程只在您本机的内存沙盒闭环执行，您的原始视频数据连一比特都不会向网络发送。关闭网页标签后，所有临时内存块都会被系统即时物理回收，绝对私密无痕。"
        }
      },
      {
        h2: {
          en: "Why Client-Side Compute Enables Our '100% Free Forever' Promise",
          zh: "为什么客户端本地运算能支撑我们“免费使用、无水印”的承诺？"
        },
        p: [
          {
            en: "Because our users' devices perform the heavy lifting of video encoding in their own browser RAM, we don't have to pay millions of dollars in AWS or Google Cloud server computing bills. This structural advantage is our biggest moat.",
            zh: "正因为每一次视频转码、裁剪和压缩重渲染，都是由用户本机的电脑硬件在本地浏览器 RAM 中高效承担，我们完全不需要承担动辄每年数百万美元的云端 GPU/CPU 服务器计算与带宽账单。这种底层架构的降维打击，是我们最为坚固的技术护城河。"
          },
          {
            en: "We pass those infrastructure savings directly to users. HappyConvert stays free to use, without registration barriers, watermark overlays, or cloud queue times. Practical file size depends on your browser and device memory.",
            zh: "我们将节约下来的全部服务器运维成本，100% 回馈给全球创作者。无云剪工作室承诺免费使用开放，不需要注册登录，不设文件大小上限，绝对不添加任何商业水印。立刻点击下方体验 WebAssembly 带来的极速转码革命！"
          }
        ]
      }
    ]
  },
  {
    path: "/blog/convert-mov-to-mp4-windows-mac/",
    isArticle: true,
    title: {
      en: "How to Convert iPhone MOV Videos to MP4 for Windows & Premiere Pro (Zero Loss)",
      zh: "苹果 iPhone 拍摄的 MOV 视频在 Windows / PR 里打不开？一键无损转 MP4 教程"
    },
    description: {
      en: "Fix Apple QuickTime MOV video codec compatibility issues on Windows PC. Convert MOV to MP4 instantly in your browser with zero quality loss or file size caps.",
      zh: "解决苹果 iPhone 4K HDR 拍摄的 MOV 视频在 Windows 电脑、微信或剪辑软件中无法解码播放的问题。在浏览器本地免费一键无损转换 MP4。"
    },
    category: { en: "Troubleshooting", zh: "问题解答" },
    readTime: { en: "4 min read", zh: "4 分钟阅读" },
    date: { en: "July 2, 2026", zh: "2026年7月2日" },
    toolLink: "/convert-video/",
    toolName: { en: "MOV to MP4 Converter", zh: "MOV 转 MP4 转换器" },
    content: [
      {
        h2: {
          en: "Why iPhone MOV Videos Won't Play or Edit on Windows PC",
          zh: "为什么苹果 iPhone 录制的 MOV 视频在 Windows PC 上黑屏或报错？"
        },
        p: [
          {
            en: "If you have ever transferred video clips from an Apple iPhone or iPad to a Windows PC, you have likely encountered the dreading 'Can't play file' error in Windows Media Player, or seen green flickering screens when importing footage into Adobe Premiere Pro or DaVinci Resolve.",
            zh: "如果您经常把苹果 iPhone 或 iPad 拍摄的短视频传到 Windows 电脑上处理，您肯定遇到过 Windows Media Player 弹出“无法播放该文件”的报错，或者在导入 Adobe Premiere Pro及剪映时出现画面黑屏、绿屏闪烁等棘手问题。"
          },
          {
            en: "This happens because Apple devices default to recording in MOV container format using High Efficiency Video Coding (HEVC / H.265) or Apple ProRes codecs. Many Windows operating systems and older desktop media editors lack native HEVC licenses, making MP4 (H.264 / AAC) the universal industry standard for seamless cross-platform editing.",
            zh: "这是因为苹果设备默认使用 MOV 封装格式，并采用 HEVC (H.265) 或 Apple ProRes 高效编码。许多 Windows 系统或非最新版的专业剪辑软件默认缺少这些高级解码器授权。为了确保在所有电脑、手机网页和软件中完美通用，将 MOV 转换为标准 MP4 (H.264/AAC) 是行业绝对通行的解决之道。"
          }
        ]
      },
      {
        h2: {
          en: "How to Convert MOV to MP4 Online Without Losing Quality",
          zh: "如何不损失画质地在线将 MOV 无损转为 MP4？"
        },
        list: [
          {
            en: "Step 1: Open HappyConvert Video Converter in any modern web browser. No registration or software installation required.",
            zh: "第一步：在电脑或手机上打开无云剪在线视频转换器。无需下载安装任何庞大的第三方软件，免注册登录。"
          },
          {
            en: "Step 2: Upload your Apple MOV video file into the local workspace. Because processing is local, multi-gigabyte 4K ProRes files load instantly without waiting for network uploads.",
            zh: "第二步：将您的 iPhone MOV 视频导入左侧工作区。由于是浏览器内存闭环读取，即使是几个吉字节（GB）的 4K 巨型文件也能瞬间导入，无需等待上传。"
          },
          {
            en: "Step 3: Select 'MP4 (H.264)' as your target container format in the right-hand control panel.",
            zh: "第三步：在右侧目标格式中，直接勾选通用兼容性最强的「MP4 (H.264 / AAC)」封装。"
          },
          {
            en: "Step 4: Click '🚀 Run Editing Task'. Our local engine converts the container structure cleanly and downloads your universal MP4 file automatically!",
            zh: "第四步：点击首屏「🚀 开始处理」。本地引擎会在几秒内为您高效转码并自动保存 100% 原生高清画质的通用 MP4 成片！"
          }
        ]
      }
    ]
  },
  {
    path: "/blog/extract-mp3-audio-from-video/",
    isArticle: true,
    title: {
      en: "How to Extract 320kbps MP3 Audio from Any Video Online (Free & No Signup)",
      zh: "如何免费从视频中提取 320kbps 高音质 MP3 与无损 WAV 音轨？（免注册无水印）"
    },
    description: {
      en: "The ultimate guide to ripping background music, voice notes, and podcast audio from MP4, MOV, and WebM videos using browser WebAssembly without watermarks.",
      zh: "一键从 MP4、MOV、WebM 视频中分离并提取背景音乐 BGM、外语听力与播客台词，导出高保真 320kbps MP3 或母带级 WAV 音轨完整指南。"
    },
    category: { en: "Audio Guides", zh: "音频技巧" },
    readTime: { en: "4 min read", zh: "4 分钟阅读" },
    date: { en: "June 28, 2026", zh: "2026年6月28日" },
    toolLink: "/video-to-audio/",
    toolName: { en: "Free Video to Audio Converter", zh: "免费视频转音频工具" },
    content: [
      {
        h2: {
          en: "Why Extracting Audio Track Locally is Essential for Creators",
          zh: "为什么自媒体创作者与播客主亟需干净利落的音频提取？"
        },
        p: [
          {
            en: "Whether you are a podcaster saving audio tracks from a recorded Zoom video interview, a language learner ripping voice dialogues from foreign films, or a TikTok creator saving a catchy background song (BGM), audio extraction is an everyday necessity.",
            zh: "无论您是想从 Zoom 视频会议录像中分离出纯语音播客的自媒体人，还是希望从美剧与外语短片中提取对白背单词的学生，亦或是渴望将抖音短视频里动听的背景音乐（BGM）保存为 MP3 的音乐爱好者，高品质音频提取都是高频必备需求。"
          },
          {
            en: "Many online audio extractors bombards users with pop-up ads, insert artificial audio watermarks into the downloaded track, or limit MP3 exports to low-quality 128kbps bitrates. HappyConvert lets you extract pristine audio up to 320kbps studio quality completely free without registration.",
            zh: "然而市面上许多音频提取网站不仅充斥着弹窗广告，有的还会在导出的声音里插入令人反感的广告提示音，或强制把 MP3 压缩成低劣的 128kbps 渣音质。无云剪工作室让您免费分离高达 320kbps 发烧级音质或母带级无损 WAV，全程纯净无广告提示音！"
          }
        ]
      },
      {
        h2: {
          en: "MP3 320kbps vs Lossless WAV: Which Audio Format Should You Choose?",
          zh: "MP3 (320kbps) 与无损 WAV 到底该怎么选？"
        },
        p: [
          {
            en: "When exporting your audio track, choosing the right format depends on your downstream workflow:",
            zh: "在导出纯音轨时，选择正确的音频格式决定了您的收听与剪辑效率："
          },
          {
            en: "1) MP3 (320kbps): MP3 is a universally compressed format that keeps file sizes extremely lightweight (roughly 2MB to 5MB per song). Our 320kbps setting represents the maximum quality ceiling for MP3 protocol, offering CD-quality listening that is perfect for car audio, WeChat sharing, and phone storage.",
            zh: "1）MP3 (320kbps 发烧级)：MP3 是一种高精度的有损压缩封装，文件体积极为小巧（一首歌仅约 3MB~5MB）。我们提供的 320kbps 是 MP3 协议所支持的最高音质上限，日常听感媲美 CD 唱片，完美适合发微信、车机播放以及手机随身听。"
          },
          {
            en: "2) Lossless WAV (PCM): WAV is an uncompressed studio master format that retains 100% of the original audio spectrum without any data loss. While files are much larger (roughly 40MB to 60MB per track), WAV is mandatory for music producers, podcast editors, and video editors importing tracks into Audacity, Logic Pro, Adobe Audition, or Premiere Pro.",
            zh: "2）无损 WAV (PCM 原始声波)：WAV 是未经任何压缩剥离的母带级音频格式，保留了 100% 原声声场细节与超宽动态范围。虽然文件较大（一首歌约 40MB~60MB），但如果您需要把声音导入剪映、Audition、Logic Pro 或 PR 进行后期降噪与多轨调音，请务必选择 WAV 无损格式。"
          }
        ],
        callout: {
          en: "🔒 100% Private & Secure: Your confidential voice notes, lectures, and corporate meeting videos are processed entirely inside your local browser memory. Zero bytes are uploaded to remote servers!",
          zh: "🔒 100% 本地保密：您提取的内部会议纪要、商务讲座和个人隐私视频，仅在您电脑内存沙盒中进行声画分离。绝不上传网络服务器，绝无商业机密外泄可能！"
        }
      }
    ]
  },
  {
    path: "/blog/convert-mp4-to-webm-online/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Convert MP4 to WebM Online Without Watermark",
      zh: "如何在线将 MP4 转 WebM：免费、无水印、浏览器本地处理"
    },
    description: {
      en: "Convert MP4 to WebM online when you need a browser-friendly web video. See the settings we use in HappyConvert, why WebM takes longer, and when MP4 is still better.",
      zh: "当你需要网页友好的 WebM 视频时，可以用 HappyConvert 在浏览器里处理 MP4。本文说明推荐设置、为什么 WebM 会更慢，以及什么时候继续用 MP4 更合适。"
    },
    category: { en: "Format Guides", zh: "格式转换" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 29, 2026", zh: "2026年7月29日" },
    toolLink: "/convert-video/",
    toolName: { en: "MP4 to WebM Converter", zh: "MP4 转 WebM 工具" },
    faqs: [
      {
        q: {
          en: "Is WebM smaller than MP4?",
          zh: "WebM 一定比 MP4 小吗？"
        },
        a: {
          en: "Not always. WebM can be smaller for web playback, but the result depends on duration, resolution, motion, and codec settings. For quick sharing, MP4 is often faster to export.",
          zh: "不一定。WebM 在网页播放场景里经常有优势，但体积取决于时长、分辨率、运动复杂度和编码设置。只为快速发送时，MP4 通常更快。"
        }
      },
      {
        q: {
          en: "Why does MP4 to WebM take longer in the browser?",
          zh: "为什么 MP4 转 WebM 在浏览器里更慢？"
        },
        a: {
          en: "The browser has to re-encode video frames with your local CPU and memory. That is heavier than copying an MP4 stream or extracting audio.",
          zh: "浏览器需要用本机 CPU 和内存重新编码视频帧，这比复制 MP4 流或提取音频更重。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: use WebM for web embeds, not every video",
          zh: "先说结论：WebM 适合网页嵌入，不适合所有视频"
        },
        p: [
          {
            en: "If you need an MP4 video to load inside a website, landing page, or lightweight browser demo, WebM is worth testing. In HappyConvert, choose the Convert tool, select WebM Video as the target container, and use VP8 with Vorbis for broad browser support.",
            zh: "如果你要把 MP4 放进网站、落地页或浏览器演示里播放，WebM 值得测试。在 HappyConvert 里，打开 Convert 工具，把目标容器选成 WebM Video，并使用 VP8 + Vorbis 这组兼容设置。"
          },
          {
            en: "I would not recommend WebM as the default for every clip. In our own testing, MP4 exports and audio extraction feel much lighter. Full MP4 to WebM conversion is a re-encode job, so it can take several minutes even for a small file on some laptops.",
            zh: "我不建议把 WebM 当作所有视频的默认格式。我们自己的测试里，MP4 导出和音频提取明显更轻。完整 MP4 转 WebM 属于重新编码任务，在部分笔记本上，一个小文件也可能跑几分钟。"
          }
        ]
      },
      {
        h2: {
          en: "HappyConvert settings for MP4 to WebM",
          zh: "HappyConvert 里的 MP4 转 WebM 设置"
        },
        image: {
          src: "/blog/mp4-to-webm-convert-settings.png",
          alt: {
            en: "HappyConvert convert video page showing WebM target settings",
            zh: "HappyConvert 视频转换页面，展示 WebM 目标格式设置"
          },
          caption: {
            en: "The Convert page keeps WebM as a deliberate choice, with MP4 still recommended when you only need the fastest local export.",
            zh: "Convert 页面把 WebM 做成明确选项；如果只是想尽快导出，本页仍提醒优先选择 MP4。"
          }
        },
        list: [
          {
            en: "Open the MP4 to WebM converter and load your MP4 file into the Media Input area.",
            zh: "打开 MP4 转 WebM 工具，把 MP4 文件导入 Media Input 区域。"
          },
          {
            en: "Choose WebM Video as the target container.",
            zh: "目标容器选择 WebM Video。"
          },
          {
            en: "Keep VP8 for video and Vorbis for audio unless you have a specific playback requirement.",
            zh: "除非有明确播放要求，否则视频编码保持 VP8，音频编码保持 Vorbis。"
          },
          {
            en: "Start with a short clip first. If the result looks good, repeat the same setting on the full video.",
            zh: "先用短片测试参数。效果没问题后，再把同样设置用于完整视频。"
          }
        ]
      },
      {
        h2: {
          en: "When WebM is the wrong choice",
          zh: "什么时候不该选 WebM"
        },
        p: [
          {
            en: "For email attachments, client previews, and chat apps, MP4 is still the safer format. WebM is useful on the web, but some desktop apps and mobile workflows still handle MP4 more predictably.",
            zh: "如果是发邮件、给客户预览、发聊天软件，MP4 仍然更稳。WebM 在网页里有价值，但不少桌面软件和移动端流程对 MP4 的支持更可预期。"
          },
          {
            en: "For large videos, the practical limit is your browser memory. A few hundred MB can be uncomfortable for WebM conversion because the browser has to hold the file, FFmpeg core, and output data in local memory.",
            zh: "大视频的实际限制是浏览器内存。几百 MB 的视频转 WebM 可能会很吃力，因为浏览器需要同时处理原文件、FFmpeg 核心和输出文件。"
          }
        ],
        callout: {
          en: "Our rule of thumb: use WebM when the video is meant for a website. Use MP4 when you just need a file that opens everywhere.",
          zh: "我们的经验规则：视频要放网页里，才优先考虑 WebM；只是想让文件到处能打开，优先 MP4。"
        }
      },
      {
        h2: {
          en: "MP4 to WebM FAQ",
          zh: "MP4 转 WebM 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Will HappyConvert upload my MP4 file?",
              zh: "HappyConvert 会上传我的 MP4 吗？"
            },
            a: {
              en: "The conversion is designed to run locally in your browser with WebAssembly. Your file is not sent to a cloud conversion queue.",
              zh: "转换流程设计为通过 WebAssembly 在浏览器本地运行，文件不会进入云端转换队列。"
            }
          },
          {
            q: {
              en: "Should I use WebM or MP4 for a portfolio site?",
              zh: "作品集网站应该用 WebM 还是 MP4？"
            },
            a: {
              en: "Test WebM for the embedded background or demo video, but keep an MP4 fallback if the page needs broad device support.",
              zh: "可以为嵌入式背景或演示视频测试 WebM，但如果页面要覆盖更多设备，建议保留 MP4 备用版本。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/compress-video-for-email-under-25mb/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Compress a Video for Email Under 25MB",
      zh: "如何把视频压缩到 25MB 以内用于邮件发送"
    },
    description: {
      en: "Need to send a video by email? Learn how to reduce file size with browser-side compression, what settings to try first, and when a link is better than an attachment.",
      zh: "需要通过邮件发送视频？本文说明如何用浏览器本地压缩减小体积、先试哪些参数，以及什么时候链接比附件更合适。"
    },
    category: { en: "Compression Guides", zh: "压缩教程" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 29, 2026", zh: "2026年7月29日" },
    toolLink: "/compress-video/",
    toolName: { en: "Video Compressor", zh: "视频压缩工具" },
    faqs: [
      {
        q: {
          en: "Can every video be compressed under 25MB?",
          zh: "所有视频都能压到 25MB 以内吗？"
        },
        a: {
          en: "No. Duration, resolution, frame rate, and motion all matter. A 20-second phone clip is realistic; a 20-minute 4K recording is not a good email attachment target.",
          zh: "不能。时长、分辨率、帧率和画面运动都会影响结果。20 秒手机短片比较现实；20 分钟 4K 录屏不适合作为邮件附件目标。"
        }
      },
      {
        q: {
          en: "What is the first setting to try?",
          zh: "第一个应该尝试什么设置？"
        },
        a: {
          en: "Start with 720p and a medium CRF-style quality setting. If the file is still too large, reduce resolution before making the video look much worse.",
          zh: "先尝试 720p 和中等 CRF 质量设置。如果仍然太大，优先降低分辨率，而不是直接把画质压得很糟。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: target the right attachment size first",
          zh: "先说结论：先明确附件大小目标"
        },
        p: [
          {
            en: "If your email provider rejects a video, do not zip the file and hope for the best. MP4 and MOV videos are already compressed, so a ZIP file usually changes very little. You need to reduce video bitrate, resolution, or duration.",
            zh: "如果邮箱提示视频太大，不要指望 ZIP 压缩包解决问题。MP4 和 MOV 本身已经是压缩格式，打包后通常变化很小。真正有效的是降低视频码率、分辨率或时长。"
          },
          {
            en: "For email, I usually treat 25MB as a practical target, not a promise. A short product demo or phone clip can often get close. A long screen recording should usually be shared by link instead.",
            zh: "针对邮件，我会把 25MB 当成一个实际目标，而不是保证。短产品演示或手机短片通常有机会接近；长录屏更适合用链接分享。"
          }
        ]
      },
      {
        h2: {
          en: "Use the compressor page and start with 720p",
          zh: "使用压缩页面，并从 720p 开始"
        },
        image: {
          src: "/blog/compress-video-email-settings.png",
          alt: {
            en: "HappyConvert compressor page for reducing video size before email",
            zh: "HappyConvert 视频压缩页面，用于邮件发送前减小视频体积"
          },
          caption: {
            en: "For email attachments, the biggest wins usually come from resolution and bitrate decisions, not from wrapping the video in a ZIP file.",
            zh: "邮件附件压缩的主要收益通常来自分辨率和码率调整，而不是把视频放进 ZIP。"
          }
        },
        list: [
          {
            en: "Open the video compressor and load the video.",
            zh: "打开视频压缩工具并导入视频。"
          },
          {
            en: "Choose a smaller output resolution first: 720p is a reasonable starting point for email previews.",
            zh: "先选择较小输出分辨率：邮件预览场景可以从 720p 开始。"
          },
          {
            en: "Use a balanced quality setting before trying aggressive compression.",
            zh: "先使用平衡质量设置，再考虑更激进的压缩。"
          },
          {
            en: "If the output is still above 25MB, trim the clip or reduce resolution again.",
            zh: "如果输出仍超过 25MB，优先剪短视频或继续降低分辨率。"
          }
        ]
      },
      {
        h2: {
          en: "What I check before sending a compressed video",
          zh: "发送压缩视频前，我会检查什么"
        },
        p: [
          {
            en: "After compression, play the output once before attaching it. Look at text, faces, and fast motion. If small text becomes unreadable, undo one step and reduce duration instead of quality.",
            zh: "压缩完成后，发送前一定先播放一遍。重点看文字、人脸和快速运动画面。如果小字已经看不清，不要继续压画质，应该回退一步并缩短时长。"
          },
          {
            en: "Because HappyConvert processes in your browser, large files are limited by local memory. If the tab becomes slow, close other heavy tabs and try a shorter test export first.",
            zh: "因为 HappyConvert 在浏览器本地处理，大文件会受到本机内存限制。如果页面变慢，先关闭其他重页面，再用短片导出测试参数。"
          }
        ],
        callout: {
          en: "A compressed attachment is useful for quick review. If the recipient needs the original quality, send a cloud storage link instead of forcing a 25MB target.",
          zh: "压缩附件适合快速预览。如果对方需要原始画质，请发网盘或云存储链接，而不是强行压到 25MB。"
        }
      },
      {
        h2: {
          en: "Video for email FAQ",
          zh: "邮件视频压缩 FAQ"
        },
        faqs: [
          {
            q: {
              en: "Should I use MP4 or WebM for email?",
              zh: "邮件附件用 MP4 还是 WebM？"
            },
            a: {
              en: "Use MP4 for email. It is more likely to open smoothly on the recipient's device.",
              zh: "邮件附件建议用 MP4，对方设备直接打开的概率更高。"
            }
          },
          {
            q: {
              en: "Why is my compressed video still too large?",
              zh: "为什么压缩后还是太大？"
            },
            a: {
              en: "The video may be too long, high resolution, or full of motion. Reduce duration first, then resolution, then quality.",
              zh: "可能是视频太长、分辨率太高或运动画面太多。优先缩短时长，其次降低分辨率，最后再压低质量。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/trim-mp4-without-re-encoding/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Trim MP4 Without Re-encoding",
      zh: "如何不重新编码剪切 MP4：更快保留原始画质"
    },
    description: {
      en: "Need to cut an MP4 quickly? Learn when lossless stream copy works, why cuts may land on keyframes, and how to use HappyConvert's video trimmer.",
      zh: "需要快速剪切 MP4？本文说明无损流拷贝什么时候有效、为什么剪切点可能受关键帧影响，以及如何使用 HappyConvert 视频剪切工具。"
    },
    category: { en: "Editing Guides", zh: "剪切教程" },
    readTime: { en: "5 min read", zh: "5 分钟阅读" },
    date: { en: "July 29, 2026", zh: "2026年7月29日" },
    toolLink: "/cut-video/",
    toolName: { en: "MP4 Video Trimmer", zh: "MP4 视频剪切工具" },
    faqs: [
      {
        q: {
          en: "Is trimming without re-encoding always frame-level accurate?",
          zh: "不重新编码剪切一定能精确到每一帧吗？"
        },
        a: {
          en: "No. Stream copy is fast because it avoids re-encoding, but exact cut points can depend on keyframes. Re-encoding gives finer control but takes longer.",
          zh: "不一定。流拷贝快，是因为避免重新编码，但精确剪切点可能受关键帧影响。重新编码控制更细，但耗时更长。"
        }
      },
      {
        q: {
          en: "When should I re-encode instead?",
          zh: "什么时候应该重新编码？"
        },
        a: {
          en: "Re-encode when you need exact frame-level timing, format changes, filters, cropping, or compression in the same export.",
          zh: "当你需要帧级精确、改格式、加滤镜、裁切画面或同时压缩时，应该重新编码。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: use stream copy for simple cuts",
          zh: "先说结论：简单剪切优先用流拷贝"
        },
        p: [
          {
            en: "If all you need is to remove the beginning or end of an MP4, trimming without re-encoding is usually the fastest route. In HappyConvert, the trim runs locally in the browser, so it copies the existing video and audio streams into a shorter file instead of rebuilding every frame.",
            zh: "如果你只是想剪掉 MP4 的片头或片尾，不重新编码通常是最快的方法。在 HappyConvert 里，剪切流程在浏览器本地运行，会把原有视频流和音频流复制到较短文件里，而不是重建每一帧。"
          },
          {
            en: "This is the workflow I would use for screen recordings, quick client previews, and removing dead air before sharing. It is not the workflow I would use for resizing, cropping, or changing codec.",
            zh: "这个流程适合录屏、客户快速预览、删除开头空白等任务；但如果要改分辨率、裁切画面或改编码，就不适合只做流拷贝。"
          }
        ]
      },
      {
        h2: {
          en: "Set the start and end time in HappyConvert",
          zh: "在 HappyConvert 设置起止时间"
        },
        image: {
          src: "/blog/trim-mp4-lossless-settings.png",
          alt: {
            en: "HappyConvert video trimmer page for cutting MP4 clips",
            zh: "HappyConvert 视频剪切页面，用于裁剪 MP4 片段"
          },
          caption: {
            en: "The trimmer page is best for removing unwanted sections before sharing, especially when you do not need filters or format changes.",
            zh: "剪切页面适合在分享前删除多余片段，尤其是不需要滤镜或格式转换的时候。"
          }
        },
        list: [
          {
            en: "Open the video trimmer and load your MP4 file.",
            zh: "打开视频剪切工具并导入 MP4 文件。"
          },
          {
            en: "Move the start and end controls to the section you want to keep.",
            zh: "移动起止时间控件，保留你需要的片段。"
          },
          {
            en: "Use lossless stream copy when the goal is speed and original visual quality.",
            zh: "如果目标是速度和保留原始视觉质量，使用无损流拷贝。"
          },
          {
            en: "Preview the exported clip. If the cut point feels slightly off, move the start time a little and export again.",
            zh: "导出后预览片段。如果剪切点略有偏差，微调开始时间再导出一次。"
          }
        ]
      },
      {
        h2: {
          en: "Why the cut point can move slightly",
          zh: "为什么剪切点可能会略有偏差"
        },
        p: [
          {
            en: "MP4 files are built around keyframes. A stream-copy trim can only cut cleanly around places where the existing encoded stream allows it. That is the tradeoff for speed.",
            zh: "MP4 文件是围绕关键帧组织的。流拷贝剪切只能在现有编码流允许的位置附近干净切开，这是速度换来的代价。"
          },
          {
            en: "If you need an exact frame for a tutorial or an ad clip, choose a re-encode workflow. It will be slower, but it gives the encoder permission to rebuild frames around your exact time range.",
            zh: "如果教程或广告片段必须精确到某一帧，就应选择重新编码流程。它会更慢，但编码器可以围绕你的精确时间段重建画面。"
          }
        ],
        callout: {
          en: "Use stream copy when speed matters. Use re-encoding when exact timing or visual changes matter.",
          zh: "重视速度时用流拷贝；重视精确时间点或画面变化时用重新编码。"
        }
      },
      {
        h2: {
          en: "Trim MP4 FAQ",
          zh: "MP4 剪切 FAQ"
        },
        faqs: [
          {
            q: {
              en: "Will trimming reduce file size?",
              zh: "剪切会减小文件体积吗？"
            },
            a: {
              en: "Yes, if you remove duration. Stream copy does not heavily compress the remaining section; it mainly saves space by keeping less video.",
              zh: "会，只要你删掉了时长。流拷贝不会大幅压缩保留片段，主要是通过保留更少的视频来节省体积。"
            }
          },
          {
            q: {
              en: "Can I trim MOV or WebM the same way?",
              zh: "MOV 或 WebM 也能这样剪吗？"
            },
            a: {
              en: "Often yes, but compatibility depends on the container and codec. MP4 is usually the most predictable for quick sharing.",
              zh: "很多情况下可以，但兼容性取决于封装和编码。用于快速分享时，MP4 通常更可预期。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/crop-video-to-9-16-online/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Crop a Video to 9:16 for TikTok, Reels, and Shorts",
      zh: "如何把视频裁成 9:16：适配 TikTok、Reels 和 Shorts"
    },
    description: {
      en: "Crop horizontal or square videos to 9:16 online. Learn what to keep in the safe area, how to avoid cutting faces or text, and when cropping is not enough.",
      zh: "在线把横屏或方形视频裁成 9:16。本文说明安全区域、如何避免裁掉人脸和文字，以及什么时候仅裁切还不够。"
    },
    category: { en: "Social Video", zh: "短视频适配" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 29, 2026", zh: "2026年7月29日" },
    toolLink: "/crop-video/",
    toolName: { en: "9:16 Video Cropper", zh: "9:16 视频裁切工具" },
    faqs: [
      {
        q: {
          en: "Is 9:16 the same as vertical video?",
          zh: "9:16 就是竖屏视频吗？"
        },
        a: {
          en: "Yes. 9:16 is the common vertical format used by TikTok, Instagram Reels, YouTube Shorts, and many mobile-first feeds.",
          zh: "是的。9:16 是 TikTok、Instagram Reels、YouTube Shorts 和很多移动端信息流常用的竖屏比例。"
        }
      },
      {
        q: {
          en: "Can cropping fix every horizontal video?",
          zh: "所有横屏视频都能靠裁切变好看吗？"
        },
        a: {
          en: "No. If important action happens across the full width, cropping may remove context. In that case, use captions, a blurred background, or re-edit the source.",
          zh: "不能。如果重要动作横跨整个画面，裁切会丢失上下文。这时可以考虑字幕、模糊背景或重新剪辑源视频。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: crop around the subject, not just the center",
          zh: "先说结论：围绕主体裁切，而不是机械居中"
        },
        p: [
          {
            en: "To make a video work in TikTok, Reels, or Shorts, the output needs to feel intentional on a phone screen. A 9:16 crop is the starting point, but the important part is keeping faces, hands, product details, and captions inside the safe area.",
            zh: "要让视频适配 TikTok、Reels 或 Shorts，成片需要在手机屏幕上看起来是专门设计过的。9:16 只是起点，更重要的是把人脸、手部、产品细节和字幕保留在安全区域内。"
          },
          {
            en: "In HappyConvert, I use the crop tool when the source video already has one clear subject. The crop is processed locally in the browser, so short clips are a better first test than dropping in a long 4K file immediately.",
            zh: "在 HappyConvert 里，当源视频已经有一个明确主体时，我会使用裁切工具。裁切是在浏览器本地处理的，所以建议先用短片测试，不要一开始就丢很长的 4K 文件。"
          },
          {
            en: "If the scene has two people far apart, or a wide desktop recording, a simple crop may not be enough.",
            zh: "如果画面里两个人离得很远，或是宽屏桌面录屏，单纯裁切可能不够。"
          }
        ]
      },
      {
        h2: {
          en: "Use the 9:16 crop preset first",
          zh: "先使用 9:16 裁切预设"
        },
        image: {
          src: "/blog/crop-video-9-16-settings.png",
          alt: {
            en: "HappyConvert crop video page for 9:16 vertical video",
            zh: "HappyConvert 视频裁切页面，用于生成 9:16 竖屏视频"
          },
          caption: {
            en: "The crop page is useful when the source video has a clear subject and you need a vertical output for social platforms.",
            zh: "当源视频有明确主体、目标是短视频平台竖屏输出时，裁切页面最有用。"
          }
        },
        list: [
          {
            en: "Open the crop video tool and load the source video.",
            zh: "打开视频裁切工具并导入源视频。"
          },
          {
            en: "Choose the 9:16 preset as a starting point.",
            zh: "先选择 9:16 预设作为起点。"
          },
          {
            en: "Move the crop area so the subject stays in frame. Do not assume center crop is always right.",
            zh: "移动裁切区域，让主体留在画面中。不要默认居中裁切一定正确。"
          },
          {
            en: "Export a short test clip before processing the full video.",
            zh: "先导出一小段测试，再处理完整视频。"
          }
        ]
      },
      {
        h2: {
          en: "What to watch before exporting",
          zh: "导出前要检查什么"
        },
        p: [
          {
            en: "Check the top and bottom areas first. Social apps often add profile names, captions, buttons, and progress bars over the video. If your original subtitles are too close to the edge, they may be covered after upload.",
            zh: "先检查顶部和底部区域。短视频 App 经常会在视频上叠加昵称、字幕、按钮和进度条。如果原字幕太靠边，上传后可能被遮挡。"
          },
          {
            en: "Also check movement. A person walking from left to right may leave the crop area halfway through the clip. When that happens, crop a shorter segment or use a wider layout with background padding.",
            zh: "还要检查运动轨迹。人物从左走到右时，可能中途离开裁切区域。遇到这种情况，应裁更短片段，或使用带背景填充的更宽布局。"
          }
        ],
        callout: {
          en: "A good 9:16 crop is a framing decision, not just a format conversion.",
          zh: "好的 9:16 裁切是构图决策，不只是格式转换。"
        }
      },
      {
        h2: {
          en: "9:16 crop FAQ",
          zh: "9:16 裁切 FAQ"
        },
        faqs: [
          {
            q: {
              en: "Should I crop or resize?",
              zh: "应该裁切还是缩放？"
            },
            a: {
              en: "Crop when you can remove side areas safely. Resize with padding when the full width matters.",
              zh: "当两侧内容可以安全删掉时用裁切；如果完整宽度很重要，就用带填充的缩放布局。"
            }
          },
          {
            q: {
              en: "Will cropping make the file smaller?",
              zh: "裁切会让文件变小吗？"
            },
            a: {
              en: "Usually it can reduce pixel area, but final size still depends on duration, codec, quality, and motion.",
              zh: "通常会减少像素面积，但最终体积仍取决于时长、编码、质量和画面运动。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/convert-video-to-gif-online/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Convert Video to GIF Online Without Watermark",
      zh: "如何在线把视频转 GIF：免费、无水印、适合聊天分享"
    },
    description: {
      en: "Turn a short video into a GIF online with practical FPS, width, and duration settings. Learn why short clips work better and how to avoid oversized GIF files.",
      zh: "把短视频在线转成 GIF，并合理设置帧率、宽度和时长。本文说明为什么短片更适合，以及如何避免 GIF 文件过大。"
    },
    category: { en: "GIF Guides", zh: "GIF 教程" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 30, 2026", zh: "2026年7月30日" },
    toolLink: "/video-to-gif/",
    toolName: { en: "Video to GIF Converter", zh: "视频转 GIF 工具" },
    faqs: [
      {
        q: {
          en: "What video length works best for GIF conversion?",
          zh: "多长的视频最适合转 GIF？"
        },
        a: {
          en: "Short clips work best. I usually start with 2 to 6 seconds for chat reactions or product micro-demos, then reduce width or FPS if the GIF is still too large.",
          zh: "短片最合适。我通常从 2 到 6 秒开始做聊天动图或产品小演示；如果文件仍然太大，再降低宽度或帧率。"
        }
      },
      {
        q: {
          en: "Why is my GIF larger than the original video?",
          zh: "为什么 GIF 可能比原视频还大？"
        },
        a: {
          en: "GIF is an old animation format and does not compress motion as efficiently as MP4 or WebM. A high-FPS, wide GIF can grow quickly even when the source video is small.",
          zh: "GIF 是较老的动图格式，对运动画面的压缩效率不如 MP4 或 WebM。高帧率、宽尺寸 GIF 很容易变大，即使原视频并不大。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: make the clip shorter before raising quality",
          zh: "先说结论：先缩短片段，再提高质量"
        },
        p: [
          {
            en: "The easiest way to convert video to GIF online is not to push every quality slider upward. Start by choosing a short section of the video. A 3-second reaction clip is much easier to share than a 20-second GIF, even if both use the same width and FPS.",
            zh: "在线视频转 GIF 最有效的方法，不是把所有质量参数都拉高，而是先选择一小段视频。3 秒反应动图比 20 秒 GIF 更容易分享，即使它们使用相同宽度和帧率。"
          },
          {
            en: "In HappyConvert, the GIF job runs locally in the browser with WebAssembly. That keeps the workflow private, but it also means your browser memory and CPU matter. I would test a short slice first before converting a longer clip.",
            zh: "在 HappyConvert 里，GIF 任务通过 WebAssembly 在浏览器本地运行。这让流程更私密，但也意味着浏览器内存和 CPU 会影响体验。我建议先用短片段测试，再处理更长内容。"
          }
        ]
      },
      {
        h2: {
          en: "HappyConvert settings for video to GIF",
          zh: "HappyConvert 里的视频转 GIF 设置"
        },
        image: {
          src: "/blog/video-to-gif-settings.png",
          alt: {
            en: "HappyConvert video to GIF page showing selection range and GIF settings",
            zh: "HappyConvert 视频转 GIF 页面，展示片段范围和 GIF 设置"
          },
          caption: {
            en: "The GIF page starts with a selection range because duration is usually the biggest file-size lever.",
            zh: "GIF 页面优先展示片段范围，因为时长通常是影响体积最大的参数。"
          }
        },
        list: [
          {
            en: "Open the video to GIF converter and load your MP4, MOV, or WebM file.",
            zh: "打开视频转 GIF 工具，导入 MP4、MOV 或 WebM 文件。"
          },
          {
            en: "Set the selection range to the moment you actually need.",
            zh: "把选择范围设到真正需要的片段。"
          },
          {
            en: "Use 10-12 FPS for chat stickers and 15 FPS when the motion needs to feel smoother.",
            zh: "聊天动图可以先试 10-12 FPS；如果动作需要更流畅，再试 15 FPS。"
          },
          {
            en: "Keep width around 320px to 480px for lightweight sharing.",
            zh: "轻量分享时，宽度建议从 320px 到 480px 之间开始。"
          }
        ]
      },
      {
        h2: {
          en: "What I check before downloading a GIF",
          zh: "下载 GIF 前我会检查什么"
        },
        p: [
          {
            en: "First, I check whether the GIF still communicates the point with fewer seconds. Most GIFs are used as reactions, previews, or tiny demos; they rarely need the full context of the original video.",
            zh: "第一步，我会看能不能用更短时长表达同一个意思。大多数 GIF 是反应图、预览图或小演示，很少需要保留原视频的完整上下文。"
          },
          {
            en: "Second, I check text readability. If captions or UI text are important, reducing width too far will make the GIF useless. In that case, shorten duration before lowering width again.",
            zh: "第二步，我会看文字是否还能读。如果字幕或界面文字重要，宽度降太低会让 GIF 没法用。这时应优先缩短时长，而不是继续降低宽度。"
          }
        ],
        callout: {
          en: "For GIFs, duration usually matters more than small quality tweaks. Cut the clip first, then adjust FPS and width.",
          zh: "做 GIF 时，时长通常比细微画质参数更重要。先剪短，再调帧率和宽度。"
        }
      },
      {
        h2: {
          en: "Video to GIF FAQ",
          zh: "视频转 GIF FAQ"
        },
        faqs: [
          {
            q: {
              en: "Should I use GIF or WebM for a website animation?",
              zh: "网站动效应该用 GIF 还是 WebM？"
            },
            a: {
              en: "Use GIF when you need simple compatibility in chats or docs. Use WebM or MP4 for website animations when file size and playback quality matter more.",
              zh: "聊天或文档里需要简单兼容时用 GIF。网站动效如果更在意体积和播放质量，通常应考虑 WebM 或 MP4。"
            }
          },
          {
            q: {
              en: "Will HappyConvert upload my video while making a GIF?",
              zh: "HappyConvert 做 GIF 时会上传视频吗？"
            },
            a: {
              en: "The GIF conversion is designed to run in your browser. The practical tradeoff is that long or high-resolution clips can stress local memory.",
              zh: "GIF 转换设计为在浏览器里运行。实际取舍是，长视频或高分辨率片段会更占本机内存。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/extract-audio-from-mp4-mp3-wav/",
    isArticle: true,
    contentStandardVersion: 1,
    title: {
      en: "How to Extract Audio from MP4 as MP3 or WAV",
      zh: "如何从 MP4 提取音频：导出 MP3 或 WAV"
    },
    description: {
      en: "Extract audio from an MP4 video as MP3 or WAV in your browser. Learn which format to choose, when WAV is worth it, and why audio extraction is lighter than video conversion.",
      zh: "在浏览器里从 MP4 提取音频，并导出为 MP3 或 WAV。本文说明格式选择、什么时候值得用 WAV，以及为什么提取音频通常比视频转码更轻。"
    },
    category: { en: "Audio Guides", zh: "音频教程" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "July 30, 2026", zh: "2026年7月30日" },
    toolLink: "/video-to-audio/",
    toolName: { en: "Video to Audio Converter", zh: "视频转音频工具" },
    faqs: [
      {
        q: {
          en: "Should I export MP3 or WAV from an MP4?",
          zh: "从 MP4 提取音频应该选 MP3 还是 WAV？"
        },
        a: {
          en: "Use MP3 for sharing, listening, and small files. Use WAV when you plan to edit the audio again in a podcast, music, or video editing workflow.",
          zh: "分享、收听、控制体积时选 MP3。后续还要做播客、音乐或视频剪辑处理时，选 WAV 更合适。"
        }
      },
      {
        q: {
          en: "Is extracting audio faster than converting video?",
          zh: "提取音频会比视频转码更快吗？"
        },
        a: {
          en: "Usually yes. Audio extraction avoids rebuilding video frames, so it is much lighter than a full MP4 to WebM style re-encode.",
          zh: "通常是的。音频提取不需要重建视频帧，所以比完整 MP4 转 WebM 这类重编码任务轻很多。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: choose MP3 for sharing, WAV for editing",
          zh: "先说结论：分享用 MP3，后期编辑用 WAV"
        },
        p: [
          {
            en: "If you just need the sound from an MP4 video, export MP3. It is small, easy to send, and works in almost every player. If you are pulling audio for a podcast edit, voice cleanup, or timeline editing, choose WAV so the next editing step has more room.",
            zh: "如果你只是需要 MP4 里的声音，导出 MP3 就够了。它体积小、容易发送、几乎所有播放器都能打开。如果你要做播客剪辑、语音降噪或时间线后期，选 WAV 会给下一步编辑留出更多空间。"
          },
          {
            en: "In HappyConvert, video-to-audio processing runs locally in the browser. Compared with full video conversion, it is usually lighter because the tool can ignore the video frames and focus on the audio stream.",
            zh: "在 HappyConvert 里，视频转音频同样在浏览器本地处理。相比完整视频转换，它通常更轻，因为工具可以忽略视频画面，专注处理音频流。"
          }
        ]
      },
      {
        h2: {
          en: "HappyConvert settings for MP4 to MP3 or WAV",
          zh: "HappyConvert 里的 MP4 转 MP3/WAV 设置"
        },
        image: {
          src: "/blog/extract-audio-mp3-wav-settings.png",
          alt: {
            en: "HappyConvert video to audio page for exporting MP3 or WAV from MP4",
            zh: "HappyConvert 视频转音频页面，用于从 MP4 导出 MP3 或 WAV"
          },
          caption: {
            en: "The audio page is built for one job: load a video, choose MP3 or WAV, and export the audio track locally.",
            zh: "音频页面只解决一个任务：导入视频，选择 MP3 或 WAV，在本地导出音轨。"
          }
        },
        list: [
          {
            en: "Open the video to audio converter and load your MP4 file.",
            zh: "打开视频转音频工具，导入 MP4 文件。"
          },
          {
            en: "Choose MP3 when you need a smaller file for sharing or listening.",
            zh: "如果需要更小体积用于分享或收听，选择 MP3。"
          },
          {
            en: "Choose WAV when you plan to edit, clean up, or mix the audio later.",
            zh: "如果后续要编辑、降噪或混音，选择 WAV。"
          },
          {
            en: "Export a short sample if the source is a long meeting or lecture.",
            zh: "如果源文件是长会议或长课程，先导出一小段样本确认设置。"
          }
        ]
      },
      {
        h2: {
          en: "When audio extraction can still take time",
          zh: "什么时候音频提取仍然会花时间"
        },
        p: [
          {
            en: "Audio extraction is lighter than video conversion, but long files still need browser memory. A 90-minute meeting recording has to be read into the browser sandbox, processed, and written back as an output file.",
            zh: "音频提取比视频转码轻，但长文件仍然需要浏览器内存。一个 90 分钟会议录屏仍要被读入浏览器沙盒、处理，再写成输出文件。"
          },
          {
            en: "If the browser tab feels slow, the first thing I do is close other heavy tabs and test a shorter selection. That usually tells you whether the issue is the file itself or the chosen output format.",
            zh: "如果浏览器标签页变慢，我会先关闭其他重页面，并测试较短片段。这样通常能判断问题来自文件本身，还是来自输出格式选择。"
          }
        ],
        callout: {
          en: "MP3 is the practical default. WAV is the editing format. Pick based on what happens after the export.",
          zh: "MP3 是实用默认选择，WAV 是后期编辑格式。根据导出之后要做什么来选。"
        }
      },
      {
        h2: {
          en: "Extract audio from MP4 FAQ",
          zh: "从 MP4 提取音频 FAQ"
        },
        faqs: [
          {
            q: {
              en: "Will MP3 sound worse than WAV?",
              zh: "MP3 听起来会比 WAV 差吗？"
            },
            a: {
              en: "MP3 is compressed, while WAV keeps uncompressed audio data. For casual listening the difference may be small; for editing, WAV gives you more flexibility.",
              zh: "MP3 是压缩格式，WAV 保留未压缩音频数据。日常收听差异可能不明显；用于后期编辑时，WAV 更灵活。"
            }
          },
          {
            q: {
              en: "Can I extract audio from MOV or WebM too?",
              zh: "MOV 或 WebM 也能提取音频吗？"
            },
            a: {
              en: "Yes for common files supported by the browser-side FFmpeg engine. If a rare codec fails, try converting the source to MP4 first.",
              zh: "常见文件通常可以，前提是浏览器端 FFmpeg 引擎能识别该编码。如果遇到少见编码失败，可以先把源文件转为 MP4。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/mov-vs-mp4-which-format/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "MOV vs MP4: Which Format Should You Use?",
      zh: "MOV 和 MP4 怎么选：什么时候需要转换格式"
    },
    description: {
      en: "MOV vs MP4 explained for iPhone videos, Windows sharing, editing, and web upload. Learn when to keep MOV and when to convert MOV to MP4 in the browser.",
      zh: "面向 iPhone 视频、Windows 分享、剪辑和网页上传，说明 MOV 和 MP4 的区别：什么时候保留 MOV，什么时候在浏览器里转成 MP4。"
    },
    category: { en: "Format Guides", zh: "格式指南" },
    readTime: { en: "7 min read", zh: "7 分钟阅读" },
    date: { en: "July 30, 2026", zh: "2026年7月30日" },
    toolLink: "/convert-video/",
    toolName: { en: "Video Converter", zh: "视频转换工具" },
    faqs: [
      {
        q: {
          en: "Should I convert iPhone MOV to MP4?",
          zh: "iPhone 拍的 MOV 需要转成 MP4 吗？"
        },
        a: {
          en: "Convert iPhone MOV to MP4 when the receiver uses Windows, an older editor, or a website that rejects MOV. Keep MOV if your editing app accepts it and you want to avoid another encode.",
          zh: "如果接收方用 Windows、旧版剪辑软件，或上传平台不接受 MOV，就转 MP4。如果你的剪辑软件能直接读取 MOV，并且不想多做一次编码，就保留 MOV。"
        }
      },
      {
        q: {
          en: "Is MP4 always smaller than MOV?",
          zh: "MP4 一定比 MOV 小吗？"
        },
        a: {
          en: "No. File size depends more on codec, resolution, bitrate, frame rate, and duration than the container name. MP4 can be smaller, larger, or nearly the same size as MOV.",
          zh: "不一定。文件大小更多取决于编码、分辨率、码率、帧率和时长，而不是容器名字。MP4 可能更小，也可能更大，甚至和 MOV 差不多。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: use MP4 for sharing, keep MOV for editing when it works",
          zh: "先说结论：分享优先 MP4，能剪就保留 MOV"
        },
        p: [
          {
            en: "The MOV vs MP4 decision is mostly about compatibility, not quality. MP4 is usually the safer format for sending files, uploading to websites, and playing on Windows. MOV is common from iPhone and QuickTime workflows, and it can be fine when your editor already supports it.",
            zh: "MOV 和 MP4 怎么选，核心不是画质，而是兼容性。MP4 通常更适合发送文件、上传网站、在 Windows 上播放。MOV 常见于 iPhone 和 QuickTime 流程；如果你的剪辑软件能正常读取，它也完全可以继续用。"
          },
          {
            en: "In HappyConvert, the practical path is simple: only convert MOV to MP4 when you have a compatibility problem. The conversion runs in the browser through a local FFmpeg/WebAssembly engine, so a large 4K iPhone video will be limited by your device memory and CPU.",
            zh: "在 HappyConvert 里，实用做法很简单：只有遇到兼容问题时，才把 MOV 转成 MP4。转换通过本地 FFmpeg/WebAssembly 引擎在浏览器里运行，所以较大的 4K iPhone 视频会受到设备内存和 CPU 的影响。"
          }
        ]
      },
      {
        h2: {
          en: "When MP4 is the better choice",
          zh: "什么时候 MP4 更合适"
        },
        list: [
          {
            en: "You need to send the video to someone on Windows and do not know which player they use.",
            zh: "你要把视频发给 Windows 用户，而且不确定对方用什么播放器。"
          },
          {
            en: "A website, LMS, CMS, marketplace, or support form rejects MOV uploads.",
            zh: "网站、课程系统、内容后台、平台或客服表单不接受 MOV 上传。"
          },
          {
            en: "You want a safer playback format for documentation, product demos, or customer handoff.",
            zh: "你需要一个更稳妥的播放格式，用于文档、产品演示或交付给客户。"
          },
          {
            en: "Your source is an iPhone MOV file and the receiver does not need the original editing workflow.",
            zh: "源文件是 iPhone MOV，而接收方不需要继续沿用原始剪辑流程。"
          }
        ],
        callout: {
          en: "For broad sharing, MP4 with H.264 video and AAC audio is the default I would try first.",
          zh: "面向广泛分享时，我会优先尝试 H.264 视频加 AAC 音频的 MP4。"
        }
      },
      {
        h2: {
          en: "When you should keep MOV",
          zh: "什么时候应该保留 MOV"
        },
        p: [
          {
            en: "Do not convert just because the file says .mov. If Final Cut Pro, DaVinci Resolve, Premiere Pro, or your phone backup workflow already handles the file, another encode can add time and may change the file size without solving a real problem.",
            zh: "不要因为扩展名是 .mov 就一定转换。如果 Final Cut Pro、DaVinci Resolve、Premiere Pro 或你的手机备份流程已经能处理这个文件，多做一次编码只会增加时间，也可能改变文件体积，却没有解决真实问题。"
          },
          {
            en: "This is especially true for long 4K or HDR clips. Browser-side conversion is convenient for quick jobs, but very large source files can make the tab slow or fail if the device runs out of memory.",
            zh: "长时间 4K 或 HDR 片段尤其如此。浏览器端转换适合快速处理任务，但特别大的源文件会让标签页变慢；如果设备内存不够，也可能失败。"
          }
        ]
      },
      {
        h2: {
          en: "How I would convert MOV to MP4 in HappyConvert",
          zh: "我会怎样在 HappyConvert 里把 MOV 转 MP4"
        },
        list: [
          {
            en: "Open the video converter and load the MOV file directly in the browser.",
            zh: "打开视频转换工具，在浏览器里直接导入 MOV 文件。"
          },
          {
            en: "Choose MP4 as the target container.",
            zh: "目标容器选择 MP4。"
          },
          {
            en: "Use H.264 for the video codec when compatibility matters more than aggressive compression.",
            zh: "如果兼容性比极限压缩更重要，视频编码选择 H.264。"
          },
          {
            en: "Test a short clip first when the source is a long 4K recording.",
            zh: "如果源文件是较长的 4K 录制，先用短片段测试。"
          }
        ]
      },
      {
        h2: {
          en: "MOV vs MP4 FAQ",
          zh: "MOV 和 MP4 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Does converting MOV to MP4 improve quality?",
              zh: "MOV 转 MP4 会提升画质吗？"
            },
            a: {
              en: "Usually no. Changing the container does not create new detail. Convert MOV to MP4 for compatibility, smaller delivery settings, or easier upload, not because it will make the source sharper.",
              zh: "通常不会。改变容器不会凭空增加细节。MOV 转 MP4 主要是为了解决兼容、交付体积或上传问题，不是为了让原素材变清晰。"
            }
          },
          {
            q: {
              en: "Why does my iPhone record MOV instead of MP4?",
              zh: "为什么 iPhone 会录成 MOV 而不是 MP4？"
            },
            a: {
              en: "Apple workflows often use MOV because it fits QuickTime and editing pipelines well. The file can still contain modern codecs, so the extension alone does not tell you the full story.",
              zh: "Apple 流程常使用 MOV，因为它和 QuickTime 及剪辑管线配合较好。MOV 里面也可能包含现代编码，所以不能只看扩展名判断全部情况。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/make-video-smaller-without-losing-quality/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Make a Video Smaller Without Losing Too Much Quality",
      zh: "如何压小视频，同时尽量保留清晰度"
    },
    description: {
      en: "Make a video smaller without wrecking the image. Learn what to trim first, when to lower resolution, and which HappyConvert settings to test before exporting.",
      zh: "把视频压小，但尽量不破坏画面。本文说明先剪哪里、什么时候降低分辨率，以及在 HappyConvert 里应该先测试哪些设置。"
    },
    category: { en: "Compression Guides", zh: "压缩教程" },
    readTime: { en: "8 min read", zh: "8 分钟阅读" },
    date: { en: "July 30, 2026", zh: "2026年7月30日" },
    toolLink: "/compress-video/",
    toolName: { en: "Video Compressor", zh: "视频压缩工具" },
    faqs: [
      {
        q: {
          en: "What is the safest way to reduce video file size?",
          zh: "压小视频最稳妥的方法是什么？"
        },
        a: {
          en: "Trim unused seconds first, then reduce resolution only if the file is still too large. Codec and bitrate changes help, but cutting duration usually gives the cleanest reduction.",
          zh: "先剪掉不需要的时长；如果仍然太大，再降低分辨率。编码和码率调整也有帮助，但减少时长通常是最干净的体积下降方式。"
        }
      },
      {
        q: {
          en: "Why did my compressed video still look blurry?",
          zh: "为什么压缩后视频还是糊了？"
        },
        a: {
          en: "Blur usually comes from pushing bitrate or resolution too low for the scene. Fast motion, screen recordings with text, and dark footage need more data than simple talking-head clips.",
          zh: "变糊通常是因为码率或分辨率降得太低。快速运动、有文字的录屏、暗光画面，比普通口播视频需要更多数据。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: remove time before removing pixels",
          zh: "先说结论：先减少时长，再减少像素"
        },
        p: [
          {
            en: "If you want to make a video smaller without losing too much quality, start by trimming the parts nobody needs. Removing 20 seconds from a 60-second clip is cleaner than forcing the full minute through harsh compression.",
            zh: "如果你想把视频压小，同时尽量保留清晰度，先剪掉没人需要看的部分。把 60 秒视频删掉 20 秒，通常比对完整 60 秒做很重的压缩更干净。"
          },
          {
            en: "HappyConvert handles compression locally in the browser. That is useful when you do not want to upload private footage, but it also means large files depend on your device memory, CPU, and browser stability.",
            zh: "HappyConvert 的压缩在浏览器本地完成。这适合不想上传私密素材的场景，但大文件会受到设备内存、CPU 和浏览器稳定性的影响。"
          }
        ]
      },
      {
        h2: {
          en: "The compression order I would use",
          zh: "我建议的压缩顺序"
        },
        list: [
          {
            en: "Trim the beginning and ending first. Intros, dead air, and repeated takes are pure file size.",
            zh: "先剪开头和结尾。片头、空白等待、重复拍摄都会直接增加体积。"
          },
          {
            en: "Keep the original resolution if text readability matters, especially for screen recordings.",
            zh: "如果画面里有文字，尤其是录屏，尽量先保留原分辨率。"
          },
          {
            en: "Drop from 1080p to 720p when the video is mostly people, scenery, or social sharing footage.",
            zh: "如果内容主要是人物、风景或社交平台分享素材，可以考虑从 1080p 降到 720p。"
          },
          {
            en: "Use a short sample export before processing a long file.",
            zh: "处理长视频前，先导出一个短样本。"
          }
        ],
        callout: {
          en: "For a screen recording with small UI text, I would lower bitrate carefully before reducing resolution.",
          zh: "如果是带小号界面文字的录屏，我会先谨慎降低码率，而不是先降分辨率。"
        }
      },
      {
        h2: {
          en: "What settings matter most in a browser compressor",
          zh: "浏览器压缩工具里最重要的参数"
        },
        p: [
          {
            en: "Duration, resolution, codec, bitrate, and frame rate decide most of the final size. Duration is the easiest win. Resolution is the next big lever. Codec choice matters too, but it can increase processing time because the browser has to encode the video locally.",
            zh: "最终体积主要由时长、分辨率、编码、码率和帧率决定。时长是最容易优化的部分；分辨率是第二个大杠杆。编码选择也重要，但可能增加处理时间，因为浏览器需要在本地重新编码视频。"
          },
          {
            en: "For normal sharing, MP4 is the safer output. WebM can create smaller web-friendly files in some cases, but MP4 is easier when you are sending the result to clients, classmates, or coworkers who may use different devices.",
            zh: "普通分享时，MP4 通常是更稳妥的输出。WebM 在某些场景下能做出更适合网页的较小文件，但如果要发给客户、同学或同事，MP4 更容易被不同设备打开。"
          }
        ]
      },
      {
        h2: {
          en: "When a few hundred megabytes is the wrong job for the browser",
          zh: "什么时候几百 MB 视频不适合浏览器处理"
        },
        p: [
          {
            en: "Browser-side compression is good for quick clips and privacy-sensitive files. It is not the most comfortable path for a few hundred megabytes of 4K footage, long meetings, or high-frame-rate recordings.",
            zh: "浏览器端压缩适合快速片段和隐私敏感文件。几百 MB 的 4K 素材、长会议录制或高帧率录屏，并不是最舒服的浏览器任务。"
          },
          {
            en: "If a job takes several minutes for a 13 MB video, a few hundred megabytes can take much longer on the same machine. In that case, I would either trim first, use a shorter export range, or move the heavy batch job to a desktop FFmpeg workflow.",
            zh: "如果同一台机器处理 13 MB 视频已经需要几分钟，那么几百 MB 视频可能会花更久。这种情况下，我会先裁剪时长、只导出必要片段，或者把重批量任务交给桌面 FFmpeg 流程。"
          }
        ]
      },
      {
        h2: {
          en: "Make video smaller FAQ",
          zh: "视频压缩常见问题"
        },
        faqs: [
          {
            q: {
              en: "Should I use MP4 or WebM to make a smaller video?",
              zh: "压小视频应该选 MP4 还是 WebM？"
            },
            a: {
              en: "Use MP4 when broad compatibility matters. Try WebM when the video is mainly for a website or browser-based use, and you can spend more time testing playback and encode speed.",
              zh: "需要广泛兼容时选 MP4。视频主要用于网页或浏览器场景，并且愿意测试播放兼容和编码速度时，可以尝试 WebM。"
            }
          },
          {
            q: {
              en: "Can I compress video without changing resolution?",
              zh: "可以不改分辨率只压缩视频吗？"
            },
            a: {
              en: "Yes. You can keep resolution and reduce bitrate or change codec. This is often better for screen recordings where small text must stay readable.",
              zh: "可以。你可以保留分辨率，只降低码率或调整编码。对于需要保留小字清晰度的录屏，这通常更合适。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/convert-webm-to-mp4-for-iphone/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Convert WebM to MP4 for iPhone and QuickTime",
      zh: "如何把 WebM 转成 iPhone 和 QuickTime 能播放的 MP4"
    },
    description: {
      en: "Convert WebM to MP4 for iPhone and QuickTime with H.264 and AAC. Learn the right HappyConvert settings and fix common Apple playback failures.",
      zh: "把 WebM 转成 iPhone、iPad、QuickTime 和 Apple 应用更容易播放的 MP4。本文说明 HappyConvert 中的 H.264 与 AAC 设置、为什么需要重新编码，以及常见播放失败的处理方法。"
    },
    category: { en: "Format Guides", zh: "格式指南" },
    readTime: { en: "7 min read", zh: "7 分钟阅读" },
    date: { en: "July 31, 2026", zh: "2026年7月31日" },
    toolLink: "/convert-video/",
    toolName: { en: "Video Converter", zh: "视频转换工具" },
    faqs: [
      {
        q: {
          en: "Why will my WebM video not play on iPhone?",
          zh: "为什么 WebM 视频在 iPhone 上不能播放？"
        },
        a: {
          en: "The app opening the file may not support the WebM container, VP8 video, or Vorbis audio used by that file. Converting it to MP4 with H.264 video and AAC audio usually provides broader Apple app compatibility.",
          zh: "打开文件的应用可能不支持 WebM 容器，或不支持文件里的 VP8 视频和 Vorbis 音频。转成使用 H.264 视频和 AAC 音频的 MP4，通常更容易兼容 Apple 设备上的常见应用。"
        }
      },
      {
        q: {
          en: "Can I rename .webm to .mp4 instead of converting it?",
          zh: "可以直接把 .webm 后缀改成 .mp4 吗？"
        },
        a: {
          en: "No. Renaming only changes the filename. It does not replace the WebM container or convert VP8 and Vorbis streams into codecs expected inside an MP4 file.",
          zh: "不可以。改后缀只改变文件名，不会替换 WebM 容器，也不会把 VP8 和 Vorbis 数据转换成 MP4 常用的编码。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: export MP4 with H.264 video and AAC audio",
          zh: "先说结论：导出 H.264 视频加 AAC 音频的 MP4"
        },
        p: [
          {
            en: "To convert WebM to MP4 for iPhone or QuickTime, choose MP4 as the target container, H.264 as the video codec, and AAC as the audio codec. This combination is a safer handoff format for Photos, Messages, presentation apps, and older Apple workflows than a WebM file containing VP8 and Vorbis.",
            zh: "要把 WebM 转成 iPhone 或 QuickTime 更容易播放的格式，目标容器选择 MP4，视频编码选择 H.264，音频编码选择 AAC。与包含 VP8 和 Vorbis 的 WebM 相比，这个组合更适合交给照片、信息、演示软件和较旧的 Apple 工作流。"
          },
          {
            en: "HappyConvert runs that conversion locally through FFmpeg WebAssembly. The file is not sent to a conversion queue, but the tab must hold the input and output in memory. A long 1080p or 4K WebM can therefore take several minutes and may fail on a device with limited RAM.",
            zh: "HappyConvert 通过 FFmpeg WebAssembly 在浏览器本地完成转换。文件不会进入云端转换队列，但浏览器标签页需要在内存里保存输入和输出。较长的 1080p 或 4K WebM 因此可能需要数分钟，在内存较小的设备上也可能失败。"
          }
        ]
      },
      {
        h2: {
          en: "Why changing the file extension does not fix WebM playback",
          zh: "为什么修改文件后缀不能解决 WebM 播放问题"
        },
        p: [
          {
            en: "WebM and MP4 are containers. A container describes how video, audio, timing, and metadata are packaged, while the codecs describe how the picture and sound are compressed. A typical WebM may contain VP8 video and Vorbis audio; the MP4 output used here contains H.264 video and AAC audio.",
            zh: "WebM 和 MP4 都是容器。容器规定视频、音频、时间信息和元数据怎样封装，编码则决定画面和声音怎样压缩。常见 WebM 可能包含 VP8 视频和 Vorbis 音频；本文建议的 MP4 输出则包含 H.264 视频和 AAC 音频。"
          },
          {
            en: "Changing `clip.webm` to `clip.mp4` leaves every byte of the original media unchanged. Some apps inspect those bytes instead of trusting the extension, so the renamed file still fails. A real conversion decodes the WebM streams and encodes compatible streams into a new MP4 container.",
            zh: "把 `clip.webm` 改名为 `clip.mp4`，不会改变媒体数据里的任何字节。有些应用会检查文件内容，而不是只相信后缀，所以改名后的文件仍然打不开。真正的转换会解码 WebM 数据，再把兼容的数据编码进新的 MP4 容器。"
          }
        ]
      },
      {
        h2: {
          en: "WebM to MP4 settings I use in HappyConvert",
          zh: "我在 HappyConvert 中使用的 WebM 转 MP4 设置"
        },
        list: [
          {
            en: "Load the WebM file in the Video Converter and wait for its duration and preview to appear.",
            zh: "在视频转换工具中载入 WebM，等待时长和预览正常显示。"
          },
          {
            en: "Choose MP4 as the Target Container.",
            zh: "目标容器选择 MP4。"
          },
          {
            en: "Choose H.264 for Video Codec instead of Copy when the source uses VP8 or VP9.",
            zh: "源文件使用 VP8 或 VP9 时，视频编码选择 H.264，不要选择 Copy。"
          },
          {
            en: "Choose AAC for Audio Codec instead of copying Vorbis audio into MP4.",
            zh: "音频编码选择 AAC，不要把 Vorbis 音频直接复制进 MP4。"
          },
          {
            en: "Process a short test file first if the source is long, high-resolution, or important.",
            zh: "源文件较长、分辨率较高或内容重要时，先处理一个短测试文件。"
          }
        ],
        callout: {
          en: "Do not use codec Copy as the default fix for Apple playback. Copy is fast, but incompatible VP8 or Vorbis streams remain incompatible after remuxing.",
          zh: "不要把编码 Copy 当作解决 Apple 播放问题的默认选项。Copy 虽然快，但不兼容的 VP8 或 Vorbis 数据在重新封装后依旧可能不兼容。"
        }
      },
      {
        h2: {
          en: "What changes after converting WebM to MP4",
          zh: "WebM 转 MP4 后会发生哪些变化"
        },
        p: [
          {
            en: "The pixel dimensions and duration can stay the same, but the video is encoded again. That means the output is not a byte-for-byte copy. Its file size may be smaller or larger depending on source bitrate, scene motion, resolution, and the H.264 settings used by the converter.",
            zh: "画面尺寸和时长可以保持不变，但视频会重新编码。因此，输出文件不是原文件的逐字节复制。最终体积可能变小，也可能变大，取决于源文件码率、画面运动、分辨率和转换器使用的 H.264 参数。"
          },
          {
            en: "For a compatibility job, I check playback before comparing file size. Open the exported MP4 on the actual iPhone, iPad, Mac, or target app. Check the first frame, seek near the middle, confirm that sound is present, and play the final five seconds.",
            zh: "兼容性转换完成后，我会先检查播放，再比较文件大小。用实际的 iPhone、iPad、Mac 或目标应用打开导出的 MP4，检查第一帧、跳转到中间位置、确认声音存在，并播放最后 5 秒。"
          }
        ]
      },
      {
        h2: {
          en: "When codec copy works and why it is risky here",
          zh: "编码复制什么时候可用，为什么这里有风险"
        },
        p: [
          {
            en: "Codec copy avoids decoding and re-encoding. FFmpeg takes the existing compressed streams and places them in another compatible container, so the job is much faster and does not introduce another generation of video compression. It is useful when the source streams are already legal and well supported in the target container.",
            zh: "编码复制会跳过解码和重新编码。FFmpeg 直接把现有压缩数据放进另一个兼容容器，因此速度快得多，也不会增加一代视频压缩。只有源数据本身符合目标容器要求，并且目标设备支持这些编码时，这种方式才适合。"
          },
          {
            en: "That condition usually does not hold for a typical WebM-to-iPhone job. VP8 and Vorbis were chosen for the WebM ecosystem, not as the broadest combination for MP4 playback in Apple apps. A copied stream may make FFmpeg reject the output, produce an unusual MP4, or leave the original playback problem unsolved.",
            zh: "典型的 WebM 转 iPhone 任务通常不满足这个条件。VP8 和 Vorbis 面向 WebM 生态，并不是 Apple 应用中最通用的 MP4 组合。直接复制可能导致 FFmpeg 拒绝输出、生成不常见的 MP4，或者让原来的播放问题继续存在。"
          },
          {
            en: "For this specific goal, I accept the extra processing time and use H.264 plus AAC. If speed is more important than Apple compatibility, keeping the original WebM is more honest than creating an MP4 whose internal codecs still behave like the source.",
            zh: "针对这个具体目标，我会接受额外处理时间，使用 H.264 加 AAC。如果速度比 Apple 兼容性更重要，保留原 WebM 反而更合理，而不是生成一个内部编码仍和源文件相同的 MP4。"
          }
        ]
      },
      {
        h2: {
          en: "A five-point playback check before deleting the WebM",
          zh: "删除 WebM 源文件前的五项播放检查"
        },
        list: [
          {
            en: "Compare the duration of the exported MP4 with the WebM source.",
            zh: "比较导出 MP4 与 WebM 源文件的时长。"
          },
          {
            en: "Play the first and final five seconds to catch truncated output.",
            zh: "播放开头和结尾各 5 秒，检查输出是否被截断。"
          },
          {
            en: "Seek to two points in the middle and confirm that playback resumes.",
            zh: "跳转到中间两个位置，确认视频能继续播放。"
          },
          {
            en: "Listen with headphones if missing or distorted audio would matter.",
            zh: "如果音频很重要，用耳机检查是否缺失或失真。"
          },
          {
            en: "Transfer the MP4 to the actual Apple device or app instead of testing only in the same desktop browser.",
            zh: "把 MP4 传到实际 Apple 设备或目标应用，不要只在同一个桌面浏览器里测试。"
          }
        ],
        callout: {
          en: "Keep the original WebM until the MP4 passes the real destination test. A successful browser preview proves that a file was created; it does not prove every receiving app will accept it.",
          zh: "在 MP4 通过真实目标环境测试前保留 WebM 源文件。浏览器预览成功只能证明文件已经生成，不能证明每个接收应用都会接受它。"
        }
      },
      {
        h2: {
          en: "If the browser conversion is slow or stops",
          zh: "浏览器转换很慢或停止时怎么办"
        },
        list: [
          {
            en: "Close memory-heavy tabs before loading a large WebM.",
            zh: "载入大 WebM 前，关闭占用内存较多的其他标签页。"
          },
          {
            en: "Keep the browser tab active while FFmpeg WebAssembly is encoding.",
            zh: "FFmpeg WebAssembly 编码期间，尽量保持当前标签页处于活动状态。"
          },
          {
            en: "Try a shorter source clip to confirm the codec settings before processing the full video.",
            zh: "先用更短的源片段确认编码设置，再处理完整视频。"
          },
          {
            en: "For several hundred megabytes of high-resolution footage, use desktop FFmpeg if browser memory or processing time becomes impractical.",
            zh: "如果是几百 MB 的高分辨率素材，浏览器内存或处理时间不再合适时，改用桌面 FFmpeg。"
          }
        ]
      },
      {
        h2: {
          en: "WebM to MP4 for iPhone FAQ",
          zh: "WebM 转 iPhone MP4 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Will converting WebM to MP4 reduce quality?",
              zh: "WebM 转 MP4 会降低画质吗？"
            },
            a: {
              en: "Re-encoding can change image quality because the frames are compressed again. H.264 with a reasonable quality setting usually preserves a useful result, but conversion cannot add detail that is missing from the WebM source.",
              zh: "重新编码会再次压缩画面，因此可能改变画质。合理质量设置下的 H.264 通常能保留可用效果，但转换不能补回 WebM 源文件里已经不存在的细节。"
            }
          },
          {
            q: {
              en: "Why is the MP4 larger than the WebM?",
              zh: "为什么转出的 MP4 比 WebM 更大？"
            },
            a: {
              en: "The two files may use different codecs and bitrates. File size is not determined by the extension alone. A compatibility-focused H.264 encode can be larger than a tightly compressed WebM source.",
              zh: "两个文件可能使用不同的编码和码率。文件大小不是由后缀单独决定的。以兼容性为优先的 H.264 输出，可能比高度压缩的 WebM 源文件更大。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/crop-black-bars-from-video-online/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Crop Black Bars from a Video Online",
      zh: "如何在线裁掉视频上下或左右黑边"
    },
    description: {
      en: "Crop black bars from MP4, MOV, or WebM online. Identify letterboxing, calculate crop dimensions, avoid stretching, and export with HappyConvert.",
      zh: "在浏览器里裁掉 MP4、MOV 或 WebM 视频的上下、左右黑边。本文说明如何识别黑边、设置裁切尺寸、避免画面拉伸，并用 HappyConvert 导出。"
    },
    category: { en: "Cropping Guides", zh: "画面裁切" },
    readTime: { en: "8 min read", zh: "8 分钟阅读" },
    date: { en: "July 31, 2026", zh: "2026年7月31日" },
    toolLink: "/crop-video/",
    toolName: { en: "Video Cropper", zh: "视频画面裁切工具" },
    faqs: [
      {
        q: {
          en: "Can I remove black bars without stretching the video?",
          zh: "裁掉黑边时可以不拉伸画面吗？"
        },
        a: {
          en: "Yes. Crop only the rows or columns occupied by the bars and keep the remaining picture at its natural proportions. Cropping removes pixels; stretching changes their shape.",
          zh: "可以。只裁掉黑边占用的行或列，保留中间画面的自然比例。裁切是删除像素，拉伸则会改变像素呈现的形状，两者不是一回事。"
        }
      },
      {
        q: {
          en: "Why did black bars appear after I uploaded the video elsewhere?",
          zh: "为什么视频上传到其他平台后又出现黑边？"
        },
        a: {
          en: "The platform or player may be fitting your video into a different aspect-ratio frame. Bars generated by the player are not part of the source pixels and cannot be removed by cropping the original file.",
          zh: "平台或播放器可能把视频放进了不同宽高比的播放框。播放器临时生成的黑边不属于源视频像素，因此裁切原文件也无法控制这种黑边。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: crop the bars, do not stretch the picture",
          zh: "先说结论：裁掉黑边，不要拉伸画面"
        },
        p: [
          {
            en: "To crop black bars from a video online, first confirm that the bars are baked into the video itself. Then reduce the crop height for bars at the top and bottom, or reduce the crop width for bars on the left and right. Center the crop so the actual picture remains balanced.",
            zh: "要在线裁掉视频黑边，先确认黑边已经写进视频画面本身。上下有黑边时减少裁切高度，左右有黑边时减少裁切宽度，再把裁切区域居中，让实际画面保持平衡。"
          },
          {
            en: "HappyConvert performs this crop locally in the browser and exports a new MP4. Because cropping changes the frame dimensions, FFmpeg WebAssembly must re-encode the video. Processing time depends on duration, resolution, CPU speed, and available browser memory.",
            zh: "HappyConvert 在浏览器本地完成裁切，并导出新的 MP4。因为裁切改变了画面尺寸，FFmpeg WebAssembly 必须重新编码视频。处理时间取决于时长、分辨率、CPU 速度和浏览器可用内存。"
          }
        ]
      },
      {
        h2: {
          en: "Are the black bars inside the file or added by the player?",
          zh: "黑边在文件里面，还是播放器临时加的"
        },
        p: [
          {
            en: "Pause the video and capture a frame or inspect it in more than one player. If the same black pixels appear in the exported frame and every player, they are probably part of the file. This is common when a widescreen film is exported inside a 16:9 frame or a vertical phone clip is saved inside a horizontal canvas.",
            zh: "暂停视频并截取一帧，或者用多个播放器检查。如果导出的画面和每个播放器里都出现相同的黑色像素，黑边大概率属于文件本身。宽银幕内容被导出进 16:9 画布，或竖屏手机视频被保存进横屏画布时，经常出现这种情况。"
          },
          {
            en: "If the bars change when you resize the player window, they may be player padding. Cropping the file cannot force every website to use the same player shape. In that case, match the destination platform's aspect ratio instead of cutting pixels blindly.",
            zh: "如果调整播放器窗口后黑边随之变化，它们可能只是播放器留白。裁切文件无法强制所有网站使用相同形状的播放器。这种情况下，应匹配目标平台的宽高比，而不是盲目删除像素。"
          }
        ]
      },
      {
        h2: {
          en: "How to calculate a centered crop for black bars",
          zh: "怎样计算居中的黑边裁切区域"
        },
        p: [
          {
            en: "Start with the source width and height shown after loading the file. For a 1920 × 1080 video with 140-pixel bars at both the top and bottom, the visible height is 1080 - 140 - 140 = 800 pixels. Use a crop of 1920 × 800 with X at 0 and Y at 140.",
            zh: "先查看文件载入后显示的源宽度和高度。例如一个 1920 × 1080 视频，上下各有 140 像素黑边，可见高度就是 1080 - 140 - 140 = 800 像素。此时裁切尺寸设为 1920 × 800，X 设为 0，Y 设为 140。"
          },
          {
            en: "For a 1920 × 1080 video with 240-pixel bars on both sides, the visible width is 1920 - 240 - 240 = 1440 pixels. Use 1440 × 1080 with X at 240 and Y at 0. Use even-numbered dimensions where possible because common H.264 pixel formats behave more reliably with even width and height.",
            zh: "如果一个 1920 × 1080 视频左右各有 240 像素黑边，可见宽度就是 1920 - 240 - 240 = 1440 像素。裁切尺寸设为 1440 × 1080，X 设为 240，Y 设为 0。宽高尽量使用偶数，因为常见 H.264 像素格式处理偶数尺寸时更稳定。"
          }
        ],
        callout: {
          en: "Formula for equal bars: new size = source size - first bar - second bar; the crop offset equals the top or left bar thickness.",
          zh: "等宽黑边公式：新尺寸 = 源尺寸 - 第一条黑边 - 第二条黑边；裁切偏移量就是顶部或左侧黑边的厚度。"
        }
      },
      {
        h2: {
          en: "Cropping, resizing, and changing aspect ratio are different jobs",
          zh: "裁切、缩放和改变宽高比是三种不同操作"
        },
        p: [
          {
            en: "Cropping removes rows or columns from the frame. If you crop 140 pixels from the top and 140 from the bottom of a 1920 × 1080 source, the result is 1920 × 800. The people and objects in the remaining area keep their original shape because the pixel geometry has not been stretched.",
            zh: "裁切会从画面中删除像素行或像素列。如果从 1920 × 1080 源视频的顶部和底部各裁掉 140 像素，结果就是 1920 × 800。保留区域里的人物和物体不会变形，因为像素几何关系没有被拉伸。"
          },
          {
            en: "Resizing changes the number of pixels in the remaining frame. It can be useful after cropping when a website requires a maximum width, but it is a separate decision. Stretching a 1920 × 800 crop back to 1920 × 1080 changes the proportions and makes the picture look too tall.",
            zh: "缩放会改变保留画面的像素数量。裁切后，如果网站限制最大宽度，缩放可能有用，但这是另一个决定。把 1920 × 800 强行拉回 1920 × 1080 会改变比例，让画面显得过高。"
          },
          {
            en: "Changing aspect ratio may involve cropping, padding, or both. A 2.40:1 movie frame does not become a natural 16:9 image just because the output box says 16:9. To fill that frame without bars, you must accept losing some picture at the left and right edges.",
            zh: "改变宽高比可能涉及裁切、补边，或者两者同时发生。2.40:1 的电影画面不会因为输出框写着 16:9 就自然变成 16:9。如果要在没有黑边的情况下填满画框，就必须接受左右画面被裁掉一部分。"
          }
        ]
      },
      {
        h2: {
          en: "Steps to crop black bars in HappyConvert",
          zh: "在 HappyConvert 中裁掉黑边的步骤"
        },
        list: [
          {
            en: "Open the Video Cropper and load the MP4, MOV, or WebM file.",
            zh: "打开视频画面裁切工具，载入 MP4、MOV 或 WebM 文件。"
          },
          {
            en: "Choose Custom crop instead of forcing 16:9, 9:16, or 1:1.",
            zh: "选择自定义裁切，不要强制套用 16:9、9:16 或 1:1。"
          },
          {
            en: "Enter the new width and height, then set X and Y offsets to place the crop over the real picture.",
            zh: "输入新的宽度和高度，再设置 X、Y 偏移，让裁切区域覆盖真实画面。"
          },
          {
            en: "Preview the frame and check faces, subtitles, logos, and edge details before processing.",
            zh: "处理前预览画面，检查人物、字幕、标志和边缘细节是否被误裁。"
          },
          {
            en: "Export the MP4 and inspect the beginning, middle, and end because bar thickness can change in edited footage.",
            zh: "导出 MP4 后检查开头、中间和结尾，因为经过剪辑的素材可能在不同片段出现不同厚度的黑边。"
          }
        ]
      },
      {
        h2: {
          en: "How I test a crop across the whole timeline",
          zh: "我怎样检查整条时间线上的裁切结果"
        },
        p: [
          {
            en: "A crop that looks correct on the opening frame can still fail later. Edited videos may combine screen recordings, camera footage, title cards, and end screens with different layouts. I check at roughly 0%, 25%, 50%, 75%, and the final five seconds before committing to one fixed crop.",
            zh: "开头画面看起来正确的裁切，后面仍然可能出错。经过剪辑的视频可能混合录屏、相机素材、标题卡和片尾，它们的布局并不相同。我会检查大约 0%、25%、50%、75% 位置和最后 5 秒，再决定是否使用一个固定裁切。"
          },
          {
            en: "Subtitles need special attention because they often sit close to the lower bar. A subtitle may be absent from the preview frame but appear later. Logos, speaker labels, game HUD elements, and timestamps can also occupy the edges that look empty at first.",
            zh: "字幕需要特别注意，因为它们经常贴近下方黑边。预览帧里可能没有字幕，但后面会出现。标志、人物标签、游戏界面元素和时间戳，也可能占用开头看似空白的边缘。"
          },
          {
            en: "If bar thickness changes between scenes, one browser crop cannot adapt automatically. Split the source into sections with consistent framing, crop those sections separately, or use a desktop editor with keyframed crop controls. This takes longer, but it prevents one scene's fix from damaging another.",
            zh: "如果不同场景的黑边厚度会变化，一个浏览器裁切参数无法自动适应。可以先按画面一致的区段拆分素材，再分别裁切；也可以使用支持裁切关键帧的桌面剪辑软件。虽然步骤更多，但能避免修好一个场景却破坏另一个场景。"
          }
        ],
        callout: {
          en: "The safest fixed crop is the one that works at the most crowded edge frame, not the cleanest frame you happen to see first.",
          zh: "最稳妥的固定裁切，应以边缘内容最拥挤的画面为准，而不是以最先看到的干净画面为准。"
        }
      },
      {
        h2: {
          en: "Common mistakes after removing black bars",
          zh: "裁掉黑边后常见的错误"
        },
        list: [
          {
            en: "Cropping too tightly and cutting subtitles that only appear later in the video.",
            zh: "裁得太紧，误删了只在视频后半段出现的字幕。"
          },
          {
            en: "Stretching the cropped frame back to the old dimensions and making people look wider or taller.",
            zh: "把裁完的画面强行拉回原尺寸，导致人物变宽或变高。"
          },
          {
            en: "Assuming every black edge is removable when some padding is created by the destination player.",
            zh: "认为所有黑边都能裁掉，但其中一部分其实由目标播放器产生。"
          },
          {
            en: "Processing a large 4K file before testing the crop on a short sample.",
            zh: "没有先用短样本测试，就直接处理大型 4K 文件。"
          }
        ]
      },
      {
        h2: {
          en: "Crop black bars FAQ",
          zh: "视频黑边裁切常见问题"
        },
        faqs: [
          {
            q: {
              en: "Does cropping black bars reduce video quality?",
              zh: "裁掉黑边会降低视频画质吗？"
            },
            a: {
              en: "Cropping removes the bar pixels, but exporting requires a new H.264 encode in HappyConvert. The visible composition can remain sharp, although any re-encode may change fine detail slightly.",
              zh: "裁切会删除黑边像素，但在 HappyConvert 中导出需要重新进行 H.264 编码。可见画面可以保持清晰，但任何重新编码都可能轻微改变细节。"
            }
          },
          {
            q: {
              en: "Can one crop setting remove bars from the whole video?",
              zh: "一个裁切参数能去掉整段视频的黑边吗？"
            },
            a: {
              en: "Only when the bar position and thickness stay constant. If the video combines clips with different aspect ratios, one fixed crop may cut real content or leave bars in some scenes.",
              zh: "只有黑边位置和厚度始终不变时才可以。如果视频混合了不同宽高比的片段，一个固定裁切可能误删真实内容，也可能在部分场景残留黑边。"
            }
          }
        ]
      }
    ]
  }
];
