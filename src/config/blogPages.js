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
    contentStandardVersion: 2,
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
            en: "Our online compressor uses FFmpeg CRF algorithms that analyze spatial and temporal motion frame by frame. It allocates a higher bitrate where detail is visible and strips redundant data in static backgrounds. Setting CRF to 28 (our 'Balanced' mode) commonly shrinks 1080p video files by roughly 60% to 80%; how visible the difference is depends on the source footage, so check the result before you delete the original.",
            zh: "HappyConvert 内置的 CRF 算法会对每一帧画面的动态复杂度进行分析。它只在细节丰富的区域投入更高码率，而在平缓静止的背景中剔除冗余数据。实测中，选择 CRF 28「平衡模式」通常能把 1080p 视频体积缩减约 60% ~ 80%；差异是否明显取决于原始素材，建议对比确认后再删除原文件。"
          }
        ],
        callout: {
          en: "💡 Pro Tip: For 4K or 2K videos recorded on iPhones or screen recorders, downscaling the resolution to 1080p or 720p while applying CRF 28 usually cuts a 300MB file down to around 20MB.",
          zh: "💡 专家提示：对于苹果 iPhone 或高帧率录屏软件拍摄的 4K/2K 大文件，在右侧选择 CRF 28 的同时把分辨率缩放到 1080p 或 720p，通常能把 300MB 的文件压缩到 20MB 左右。"
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
            zh: "第一步：打开HappyConvert，将您的 MP4、MOV 或 WebM 视频直接拖入左侧上传框。无需注册账号，打开网页即可立刻使用。"
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
            en: "HappyConvert is powered by WebAssembly. Your videos are processed inside your browser's sandboxed memory, so there is no upload step and no queue. The real constraint is your device memory, and the files stay on your machine. Try our compressor below right now!",
            zh: "HappyConvert 采用 WebAssembly 引擎技术，视频数据在您本机的浏览器内存沙盒中完成运算。不需要上传、不需要排队，实际可处理体积取决于设备内存，文件始终留在您的电脑上。立刻点击下方按键试用压缩工具！"
          }
        ]
      },
      {
        h2: {
          en: "Discord 25MB compression FAQ",
          zh: "Discord 25MB 压缩常见问题"
        },
        faqs: [
          {
            q: {
              en: "Can I be sure the exported file will be under Discord's upload limit?",
              zh: "导出后一定能低于 Discord 的上传限制吗？"
            },
            a: {
              en: "No single setting guarantees a byte target. Discord's limit depends on your account tier, and the same quality level produces different sizes for different footage. Check the exported file size before uploading, and lower the resolution or trim duration if you still need to go smaller.",
              zh: "没有任何一个参数可以保证固定的字节数。Discord 的限制取决于账号等级，而同样的质量档位对不同素材会产出不同体积。上传前请先确认导出体积；如果还需要更小，再降低分辨率或剪掉无用时长。"
            }
          },
          {
            q: {
              en: "Why do two videos get different sizes at the same compression setting?",
              zh: "为什么同样设置下两段视频的压缩结果体积不同？"
            },
            a: {
              en: "CRF targets perceived quality rather than a fixed size. Motion, texture and film grain all consume bitrate, so a 60-second game recording and a 60-second talking-head clip can differ a lot. If you need a hard cap, resolution scaling and trimming are more predictable than pushing CRF higher.",
              zh: "CRF 追求的是观感质量，而不是固定体积。运动、纹理和噪点都会消耗码率，因此 60 秒游戏录屏和 60 秒口播的产出可能相差很多。如果需要硬性上限，缩放分辨率与裁剪时长比一味提高 CRF 更可控。"
            }
          },
          {
            q: {
              en: "Is the compression done on Discord's servers?",
              zh: "压缩是在 Discord 的服务器上完成的吗？"
            },
            a: {
              en: "No. The encode runs in your own browser through the WebAssembly engine, using your CPU and memory. That means a long 1080p clip can take minutes, and a source that is too large for browser memory will fail rather than queue.",
              zh: "不是。编码在您自己的浏览器中通过 WebAssembly 引擎完成，占用本机 CPU 与内存。因此较长的 1080p 视频可能需要几分钟，而超出浏览器内存的源文件会直接失败，而不是排队等待。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/ffmpeg-wasm-vs-cloud-converters/",
    isArticle: true,
    contentStandardVersion: 2,
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
            zh: "在HappyConvert，我们将全球工业标准的 FFmpeg 多媒体框架深度编译为严格沙盒化的 WebAssembly 指令集。当您打开本网页时，浏览器将这套轻量级引擎直接载入本机内存。您的网页浏览器瞬间升级为一个功能媲美桌面专业软件、且支持纯离线运行的多媒体工作室！"
          }
        ],
        callout: {
          en: "🔒 Data Isolation: because WebAssembly executes entirely inside your browser's memory sandbox, your video streams stay on your device. Closing the tab releases the memory the browser was holding for them.",
          zh: "🔒 隐私隔离：WebAssembly 全程只在您本机的内存沙盒中执行，视频数据留在您的设备上。关闭网页标签后，浏览器为它占用的内存会被释放。"
        }
      },
      {
        h2: {
          en: "Why Client-Side Compute Keeps HappyConvert Free to Use",
          zh: "为什么客户端本地运算能支撑我们“免费使用、无水印”的承诺？"
        },
        p: [
          {
            en: "Because our users' devices perform the heavy lifting of video encoding in their own browser RAM, we don't have to pay millions of dollars in AWS or Google Cloud server computing bills. This structural advantage is our biggest moat.",
            zh: "正因为每一次视频转码、裁剪和压缩重渲染，都是由用户本机的电脑硬件在本地浏览器 RAM 中高效承担，我们完全不需要承担动辄每年数百万美元的云端 GPU/CPU 服务器计算与带宽账单。这种底层架构的降维打击，是我们最为坚固的技术护城河。"
          },
          {
            en: "We pass those infrastructure savings directly to users. HappyConvert stays free to use, without registration barriers, watermark overlays, or cloud queue times. Practical file size depends on your browser and device memory.",
            zh: "我们把省下来的服务器运维成本直接还给使用者：HappyConvert 免费开放使用，不需要注册登录，不加水印，也没有云端排队。实际可处理的文件大小取决于浏览器与设备内存。"
          }
        ]
      },
      {
        h2: {
          en: "WASM vs cloud converters FAQ",
          zh: "本地 WASM 与云端转换常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is a browser WASM conversion always faster than a cloud converter?",
              zh: "浏览器 WASM 转换一定比云端转换更快吗？"
            },
            a: {
              en: "Not always. You skip the upload and download wait, but your own CPU still has to do the encoding. On a fast connection and a small file a cloud service can finish sooner; on a long queue or slow uplink the local run often wins. What never varies locally is that nobody else is ahead of you in a queue.",
              zh: "不一定。您省掉了上传和下载的等待，但编码仍然要由本机 CPU 完成。网络很快、文件很小时，云端可能更快；而遇到长队列或上行带宽不足时，本地处理通常占优。本地唯一恒定的是：队列里没有别人排在您前面。"
            }
          },
          {
            q: {
              en: "What actually limits a local conversion?",
              zh: "本地转换的真正瓶颈是什么？"
            },
            a: {
              en: "Browser memory and single-thread throughput. The engine is roughly a 30MB download the first time, and the input plus the decoded output have to fit in memory at the same time, so the practical ceiling sits far below what a server with many cores can handle.",
              zh: "浏览器内存与单线程吞吐。首次使用需要下载约 30MB 的引擎，而输入文件和解码后的输出需要同时放进内存，因此实际上限远低于多核服务器能承担的水平。"
            }
          },
          {
            q: {
              en: "Do I need a network connection after the first load?",
              zh: "首次加载之后还需要联网吗？"
            },
            a: {
              en: "No. The engine is cached by your browser, so later sessions start from local cache and processing continues to work without a connection. Very large or 4K sources can still exceed memory, which is a hardware limit rather than a network one.",
              zh: "不需要。浏览器会缓存引擎文件，之后从本地缓存启动，断网状态下依然可以继续处理。但超大或 4K 素材仍可能超出内存，这属于硬件限制而非网络限制。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/convert-mov-to-mp4-windows-mac/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Convert iPhone MOV Videos to MP4 for Windows & Premiere Pro",
      zh: "苹果 iPhone 拍摄的 MOV 视频在 Windows / PR 里打不开？一键无损转 MP4 教程"
    },
    description: {
      en: "Fix Apple QuickTime MOV video codec compatibility issues on Windows PC. Convert MOV to MP4 in your browser with no watermark, no upload step, and no cloud queue.",
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
            zh: "第一步：在电脑或手机上打开 HappyConvert 在线视频转换器。无需下载安装任何第三方软件，免注册登录。"
          },
          {
            en: "Step 2: Upload your Apple MOV video file into the local workspace. Because processing is local, large 4K ProRes files start without waiting for a network upload to finish.",
            zh: "第二步：将您的 iPhone MOV 视频导入左侧工作区。由于是浏览器内存闭环读取，即使是几个吉字节（GB）的 4K 巨型文件也能瞬间导入，无需等待上传。"
          },
          {
            en: "Step 3: Select 'MP4 (H.264)' as your target container format in the right-hand control panel.",
            zh: "第三步：在右侧目标格式中，直接勾选通用兼容性最强的「MP4 (H.264 / AAC)」封装。"
          },
          {
            en: "Step 4: Click '🚀 Run Editing Task'. The local engine rewrites the container and saves your MP4 file; a pure container rewrite is quick, while choosing H.264 re-encode takes longer as the clip gets longer.",
            zh: "第四步：点击首屏「🚀 开始处理」。本地引擎会重建封装并保存 MP4 文件；只改封装通常很快，若选择重新编码 H.264，耗时会随视频长度增加。"
          }
        ]
      },
      {
        h2: {
          en: "MOV to MP4 conversion FAQ",
          zh: "MOV 转 MP4 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Does converting MOV to MP4 reduce the video quality?",
              zh: "MOV 转 MP4 会降低画质吗？"
            },
            a: {
              en: "It depends on the codec option you pick. Choosing 'Direct Copy' only rewraps the existing video stream into an MP4 container, so nothing is re-compressed. Choosing H.264 re-encodes every frame, which is a lossy step — convenient, but not identical to the original.",
              zh: "取决于您选择的编码选项。选择「直接拷贝」只是把原有的视频流重新封装进 MP4 容器，不会重新压缩；选择 H.264 则会对每一帧重新编码，这一步是有损的 — 兼容性更好，但与原文件不完全一致。"
            }
          },
          {
            q: {
              en: "Why is the converted MP4 a different size from the original MOV?",
              zh: "转换后的 MP4 体积为什么和原 MOV 不一样？"
            },
            a: {
              en: "Container overhead differs between MOV and MP4, and if you re-encode with H.264 the bitrate changes with the CRF setting. With Direct Copy the video bitrate stays the same, so most of the size difference comes from the audio track and the container itself.",
              zh: "MOV 与 MP4 的封装开销不同，而且如果使用 H.264 重新编码，码率会随 CRF 设置变化。使用直接拷贝时视频码率保持不变，因此体积差异主要来自音轨与封装本身。"
            }
          },
          {
            q: {
              en: "Can I convert a long iPhone recording on my phone?",
              zh: "可以在手机上转换较长的 iPhone 录像吗？"
            },
            a: {
              en: "Short clips are fine, but mobile browsers have tighter memory limits than a desktop. A multi-minute 4K recording can exceed what the phone's browser can hold, so longer files are safer on a desktop browser with free RAM.",
              zh: "短视频没有问题，但移动浏览器的内存上限通常比桌面更紧。几分钟的 4K 录像可能超出手机浏览器能承载的范围，因此较长的文件建议在内存充足的桌面浏览器上处理。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/extract-mp3-audio-from-video/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Extract 320kbps MP3 Audio from a Video Online (Free & No Signup)",
      zh: "如何免费从视频中提取 320kbps 高音质 MP3 与无损 WAV 音轨？（免注册无水印）"
    },
    description: {
      en: "The ultimate guide to ripping background music, voice notes, and podcast audio from MP4, MOV, and WebM videos using browser WebAssembly without watermarks.",
      zh: "一键从 MP4、MOV、WebM 视频中分离并提取背景音乐 BGM、外语听力与播客台词，也可以导出 320kbps MP3 或未压缩 WAV 音轨的完整指南。"
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
            en: "Many online audio extractors bombard users with pop-up ads, insert audio tags into the downloaded track, or cap MP3 exports at a low 128kbps bitrate. HappyConvert lets you export MP3 at up to 320kbps, or WAV when you want to keep the samples that are present in the source file, without an advertising tag.",
            zh: "然而市面上许多音频提取网站不仅充斥着弹窗广告，有的还会在导出的声音里插入提示音，或把 MP3 导出限制在 128kbps 这种较低码率。HappyConvert 让您可以导出最高 320kbps 的 MP3，或者在需要保留源文件采样数据时导出 WAV，并且不会加上广告提示音。"
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
            en: "1) MP3 (320kbps): MP3 is a compressed format that keeps files small (roughly 2MB to 5MB per song). Our 320kbps setting is the highest bitrate the MP3 format supports, which is convenient for car stereos, chat apps and phone storage — but MP3 is still a lossy format, so some detail is discarded during encoding.",
            zh: "1）MP3 (320kbps)：MP3 是一种有损压缩格式，文件体积较小（一首歌约 2MB~5MB）。我们提供的 320kbps 是 MP3 格式支持的最高码率，适合车机播放、聊天软件分享和手机存储；但 MP3 仍然是有损格式，编码过程中会舍弃一部分细节。"
          },
          {
            en: "2) WAV (PCM): WAV stores uncompressed PCM audio, keeping every sample that is present in the file. Files are much larger (roughly 40MB to 60MB per track), which is why editors importing tracks into Audacity, Logic Pro, Adobe Audition or Premiere Pro prefer it: there is no additional generation loss while you work on it.",
            zh: "2）WAV (PCM 原始波形)：WAV 存储的是未压缩的 PCM 音频，保留文件中现有的全部采样数据。文件明显更大（一首歌约 40MB~60MB），这也是剪辑师把它导入 Audition、Logic Pro 或 PR 做后期降噪与多轨调音时更愿意选择它的原因：在编辑过程中不会产生新的世代损失。"
          }
        ],
        callout: {
          en: "🔒 Local by default: your confidential voice notes, lectures and corporate meeting videos are decoded inside your own browser memory. There is no upload step, so the file never has to be handed to a remote server.",
          zh: "🔒 默认本地处理：您提取的内部会议纪要、商务讲座和个人隐私视频，只在您电脑的内存中完成声画分离。这里没有上传环节，文件不需要交给远端服务器。"
        }
      },
      {
        h2: {
          en: "MP3 audio extraction FAQ",
          zh: "提取 MP3 音频常见问题"
        },
        faqs: [
          {
            q: {
              en: "Does exporting at 320kbps improve audio that was already low quality?",
              zh: "把已经低音质的音频导出成 320kbps，会变好吗？"
            },
            a: {
              en: "No. If the source track was encoded at 128kbps, the detail discarded back then is already gone. Exporting at 320kbps only avoids adding further loss during this step, and the file will be larger.",
              zh: "不会。如果源音轨当初是按 128kbps 编码的，那时被舍弃的细节已经不可恢复。以 320kbps 导出只能避免在这一步再增加损失，代价是文件更大。"
            }
          },
          {
            q: {
              en: "Should I pick MP3 or WAV for a track I plan to edit?",
              zh: "如果之后还要剪辑，应该选 MP3 还是 WAV？"
            },
            a: {
              en: "WAV for editing. It keeps every sample present in the file and avoids a second lossy encode when you export from your editor. MP3 is the better choice when the goal is a small file to send or listen to.",
              zh: "剪辑用途请选 WAV。它保留文件中现有的全部采样数据，并且能避免您在剪辑软件里再次导出时又经历一次有损编码。如果目标只是发出去听或用小体积文件，MP3 更合适。"
            }
          },
          {
            q: {
              en: "How long a video can I extract audio from?",
              zh: "多长时间的视频可以提取音频？"
            },
            a: {
              en: "There is no fixed limit. The real constraint is browser memory, because the source file and the decoded audio are held in RAM at the same time, so very long recordings are better handled on a desktop browser.",
              zh: "工具没有写死时长上限。真正的约束是浏览器内存 — 源文件和解码后的音频需要同时放进内存，因此超长录音建议在桌面浏览器上处理。"
            }
          }
        ]
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
  },
  {
    path: "/blog/convert-mkv-to-mp4-for-tv-mobile/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Convert MKV to MP4 for TV and Mobile Playback",
      zh: "如何把 MKV 转成电视和手机更容易播放的 MP4"
    },
    description: {
      en: "Convert MKV to MP4 for TV, phone, tablet, or browser playback. Choose H.264 and AAC in HappyConvert and avoid subtitle, audio, and codec surprises in practice.",
      zh: "把 MKV 转成电视、手机、平板和浏览器更容易播放的 MP4。本文说明 HappyConvert 的 H.264 与 AAC 设置，以及字幕、音轨和编码兼容问题。"
    },
    category: { en: "Format Guides", zh: "格式指南" },
    readTime: { en: "8 min read", zh: "8 分钟阅读" },
    date: { en: "August 1, 2026", zh: "2026年8月1日" },
    toolLink: "/convert-video/",
    toolName: { en: "Video Converter", zh: "视频转换工具" },
    faqs: [
      {
        q: {
          en: "Why does an MKV file play on my computer but not my TV?",
          zh: "为什么 MKV 在电脑上能播放，在电视上却打不开？"
        },
        a: {
          en: "Your computer player may support more containers and codecs than the TV. The TV can reject the MKV container, its video codec, its audio codec, or a particular profile even when the file itself is valid.",
          zh: "电脑播放器支持的容器和编码通常比电视更多。即使文件本身没有损坏，电视也可能不支持 MKV 容器、其中的视频编码、音频编码或某个具体编码规格。"
        }
      },
      {
        q: {
          en: "Can I convert MKV to MP4 without changing video quality?",
          zh: "MKV 转 MP4 可以完全不改变画质吗？"
        },
        a: {
          en: "Only when the existing streams can be copied into MP4 and the destination device supports them. For broad TV and mobile compatibility, re-encoding to H.264 and AAC is safer but compresses the media again.",
          zh: "只有现有音视频流可以直接放进 MP4，并且目标设备支持这些编码时才有可能。为了获得更广泛的电视和手机兼容性，重新编码为 H.264 与 AAC 更稳妥，但会再次压缩媒体。"
        }
      },
      {
        q: {
          en: "Will MKV subtitles remain in the MP4?",
          zh: "MKV 里的字幕会保留到 MP4 中吗？"
        },
        a: {
          en: "Do not assume they will. MKV can contain subtitle formats, chapters, fonts, attachments, and several audio tracks that a simple browser conversion may not map into the new MP4.",
          zh: "不要默认会保留。MKV 可以包含字幕、章节、字体、附件和多条音轨，简单的浏览器转换不一定会把这些内容映射到新的 MP4 中。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: use MP4 with H.264 video and AAC audio",
          zh: "先说结论：使用 H.264 视频加 AAC 音频的 MP4"
        },
        p: [
          {
            en: "To convert MKV to MP4 for TV and mobile playback, select MP4 as the target container, H.264 as the video codec, and AAC as the audio codec. This combination is more predictable across smart TVs, phones, tablets, browsers, messaging apps, and presentation software than an MKV with an unknown mix of streams.",
            zh: "要把 MKV 转成电视和手机更容易播放的格式，目标容器选择 MP4，视频编码选择 H.264，音频编码选择 AAC。与内部音视频组合不明的 MKV 相比，这个组合在智能电视、手机、平板、浏览器、聊天软件和演示软件中更容易兼容。"
          },
          {
            en: "HappyConvert performs the conversion in the browser with FFmpeg WebAssembly. That avoids a cloud upload, but the work uses your device CPU and browser memory. Long 4K files and multi-gigabyte movies are poor browser jobs; test a short clip before committing to a large conversion.",
            zh: "HappyConvert 使用 FFmpeg WebAssembly 在浏览器中完成转换，不需要先上传到云端，但计算会使用设备 CPU 和浏览器内存。较长的 4K 文件和数 GB 电影不适合浏览器处理；转换大文件前应先测试短片段。"
          }
        ]
      },
      {
        h2: {
          en: "MKV is a container, not one video codec",
          zh: "MKV 是容器，不是某一种视频编码"
        },
        p: [
          {
            en: "Two files ending in `.mkv` can behave completely differently. One may contain H.264 video and AAC audio, while another contains HEVC video, DTS audio, two commentary tracks, subtitles, chapters, and font attachments. The filename extension tells you the container but not whether a destination device supports everything inside it.",
            zh: "两个同样以 `.mkv` 结尾的文件，实际表现可能完全不同。一个可能包含 H.264 视频和 AAC 音频，另一个则包含 HEVC 视频、DTS 音频、两条评论音轨、字幕、章节和字体附件。扩展名只说明容器，不能说明目标设备是否支持里面的全部内容。"
          },
          {
            en: "This explains the common situation where VLC plays the file but a television reports an unsupported format. VLC includes broad software decoders. A TV often relies on a smaller set of hardware-supported combinations, USB playback rules, and firmware-specific limits.",
            zh: "这就解释了为什么 VLC 可以播放文件，而电视却提示格式不支持。VLC 内置了范围很广的软件解码器；电视通常依赖更有限的硬件编码组合、USB 播放规则和特定固件限制。"
          }
        ],
        callout: {
          en: "Changing `.mkv` to `.mp4` in the filename does not change the container or codecs. A receiving device that inspects the file will still see the original MKV data.",
          zh: "直接把文件名中的 `.mkv` 改成 `.mp4`，不会改变容器和编码。会检查文件内容的设备仍然能看到原始 MKV 数据。"
        }
      },
      {
        h2: {
          en: "How to convert MKV to MP4 with HappyConvert settings",
          zh: "我会在 HappyConvert 中选择的 MKV 转 MP4 参数"
        },
        list: [
          {
            en: "Load the MKV in the Video Converter and confirm that the preview, duration, and audio are detected.",
            zh: "在视频转换工具中载入 MKV，确认预览、时长和声音都能被识别。"
          },
          {
            en: "Choose MP4 as the Target Container.",
            zh: "目标容器选择 MP4。"
          },
          {
            en: "Choose H.264 for Video Codec when compatibility is the reason for converting.",
            zh: "如果转换目的是解决兼容问题，视频编码选择 H.264。"
          },
          {
            en: "Choose AAC for Audio Codec instead of copying an unknown MKV audio stream.",
            zh: "音频编码选择 AAC，不要直接复制未知的 MKV 音轨。"
          },
          {
            en: "Export a one- or two-minute sample and test it on the actual TV or phone before processing the full file.",
            zh: "先导出 1 到 2 分钟样本，在实际电视或手机上测试后再处理完整文件。"
          }
        ]
      },
      {
        h2: {
          en: "When codec copy is useful and when it defeats the goal",
          zh: "什么时候适合编码复制，什么时候反而失去转换意义"
        },
        p: [
          {
            en: "Codec copy is a remux: FFmpeg moves compressed streams into a new container without decoding every frame. It can finish much faster and avoids another video encode. It works when the MKV already contains streams that MP4 accepts and the destination device supports those exact streams.",
            zh: "编码复制属于重新封装：FFmpeg 不逐帧解码，而是把现有压缩数据放入新容器。它通常快得多，也避免再次编码视频。前提是 MKV 中的音视频流可以被 MP4 接受，并且目标设备支持这些具体编码。"
          },
          {
            en: "That is not a safe default when the TV already rejected the source. Copying H.265, an unusual audio codec, or an unsupported profile into another container may preserve the same playback failure. For a compatibility repair, H.264 and AAC trade extra processing time for a more conventional output.",
            zh: "如果电视已经拒绝源文件，编码复制就不是稳妥的默认方案。把 H.265、少见音频编码或不支持的规格复制进另一个容器，可能保留同样的播放问题。为了修复兼容性，H.264 与 AAC 用更多处理时间换取更常见的输出组合。"
          },
          {
            en: "I use copy only after checking the source codecs and knowing the target accepts them. If those facts are unknown, I would rather make a short H.264/AAC test than wait for a full-length remux that still fails on the television.",
            zh: "只有确认源编码，并知道目标设备支持时，我才会使用复制。如果这些信息未知，我宁愿先做一个短 H.264/AAC 测试，也不愿等待完整重新封装后才发现电视依旧无法播放。"
          }
        ]
      },
      {
        h2: {
          en: "Check subtitles, extra audio tracks, chapters, and attachments",
          zh: "检查字幕、额外音轨、章节和附件"
        },
        p: [
          {
            en: "MKV is popular partly because it can package complex media. A single file may carry several languages, forced subtitles, commentary, chapter markers, cover art, and fonts used by styled subtitles. A simple MP4 conversion aimed at one playable video and one audio track is not an archive migration.",
            zh: "MKV 受欢迎的原因之一，是它能封装复杂媒体。一个文件可能携带多种语言、强制字幕、评论音轨、章节标记、封面和字幕使用的字体。以一条可播放视频和一条音轨为目标的简单 MP4 转换，并不等于完整迁移存档。"
          },
          {
            en: "Before converting, note which language track is playing and whether subtitles are essential. After export, verify the audio language and subtitle behavior. If preserving every stream matters, use desktop FFmpeg or a media tool that exposes stream mapping instead of treating the browser output as a complete replacement.",
            zh: "转换前要记下正在播放的语言音轨，并确认字幕是否不可缺少。导出后检查音频语言和字幕表现。如果必须保留所有流，应使用桌面 FFmpeg 或能显示流映射的媒体工具，不要把浏览器输出当成完整替代品。"
          }
        ]
      },
      {
        h2: {
          en: "What to expect from file size and image quality",
          zh: "文件体积和画质会怎样变化"
        },
        p: [
          {
            en: "MP4 is not automatically smaller than MKV. Container overhead is usually not the main factor; duration, resolution, frame rate, source codec, bitrate, and the new H.264 settings matter more. A heavily compressed HEVC source can produce a larger H.264 MP4 even though the new file is easier to play.",
            zh: "MP4 不会自动比 MKV 小。容器开销通常不是主要因素；时长、分辨率、帧率、源编码、码率和新的 H.264 参数影响更大。一个高度压缩的 HEVC 源文件转成 H.264 后，MP4 可能更大，但更容易播放。"
          },
          {
            en: "Re-encoding also cannot restore detail missing from the source. Judge the result on moving faces, dark gradients, subtitles, and fast camera motion rather than only comparing the first paused frame. Keep the MKV until the MP4 passes playback and content checks.",
            zh: "重新编码也无法恢复源文件中已经丢失的细节。检查结果时，应观察运动中的人脸、暗部渐变、字幕和快速镜头，而不是只比较暂停的第一帧。在 MP4 通过播放和内容检查前，应保留 MKV 源文件。"
          }
        ]
      },
      {
        h2: {
          en: "If MKV conversion is slow, silent, or fails",
          zh: "MKV 转换很慢、没有声音或失败时怎么办"
        },
        list: [
          {
            en: "Close memory-heavy tabs and keep the HappyConvert tab active during processing.",
            zh: "关闭占用内存较多的标签页，并在处理期间保持 HappyConvert 标签页活动。"
          },
          {
            en: "Try a short segment to separate codec compatibility problems from file-size problems.",
            zh: "先尝试短片段，区分编码兼容问题和文件体积问题。"
          },
          {
            en: "Use H.264 plus AAC when the preview works but the copied MP4 does not play on the target.",
            zh: "预览正常但复制得到的 MP4 无法在目标设备播放时，改用 H.264 加 AAC。"
          },
          {
            en: "Use desktop FFmpeg for very large files, batch conversions, subtitle preservation, or several audio tracks.",
            zh: "对于超大文件、批量转换、字幕保留或多条音轨，使用桌面 FFmpeg。"
          }
        ],
        callout: {
          en: "A successful download is not the final test. Play the beginning, seek to the middle, play the final ten seconds, and listen for the expected language track on the real destination device.",
          zh: "成功下载不代表检查完成。请在真实目标设备上播放开头、跳转到中间、播放最后 10 秒，并确认音轨语言正确。"
        }
      },
      {
        h2: {
          en: "MKV to MP4 playback FAQ",
          zh: "MKV 转 MP4 播放常见问题"
        },
        faqs: [
          {
            q: {
              en: "What is the safest MP4 combination for an older TV?",
              zh: "老电视更稳妥的 MP4 组合是什么？"
            },
            a: {
              en: "H.264 video and AAC audio are a practical first test, but television limits vary by model, resolution, frame rate, profile, and USB file system. Test a short sample on the exact television.",
              zh: "H.264 视频加 AAC 音频是实用的第一选择，但电视限制会因型号、分辨率、帧率、编码规格和 USB 文件系统而变化。应在具体电视上测试短样本。"
            }
          },
          {
            q: {
              en: "Why is the converted MP4 larger?",
              zh: "为什么转换后的 MP4 更大？"
            },
            a: {
              en: "The new H.264 encode may use more data than the source codec. The extension does not determine size, and broader compatibility can require a less storage-efficient encoding choice.",
              zh: "新的 H.264 编码可能比源编码使用更多数据。扩展名不决定文件大小，更广泛的兼容性有时需要牺牲一部分存储效率。"
            }
          },
          {
            q: {
              en: "Should I delete the original MKV after conversion?",
              zh: "转换后应该删除原 MKV 吗？"
            },
            a: {
              en: "Not until you verify duration, audio language, subtitles, seeking, and the final seconds on the destination device. The MKV may also contain tracks or metadata that the MP4 output does not preserve.",
              zh: "先不要。应先在目标设备上确认时长、音频语言、字幕、跳转和结尾播放。MKV 还可能包含 MP4 输出没有保留的音轨或元数据。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/reduce-video-resolution-to-720p-online/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Reduce Video Resolution to 720p Online",
      zh: "如何在线把视频分辨率降低到 720p"
    },
    description: {
      en: "Reduce video resolution to 720p online with HappyConvert. Learn what 1280px width means, which quality preset to use, and how browser limits affect 4K files.",
      zh: "使用 HappyConvert 在线把视频分辨率降低到 720p。了解 1280 像素宽的含义、质量档位选择，以及浏览器限制对 4K 文件的影响。"
    },
    category: { en: "Compression Guides", zh: "压缩教程" },
    readTime: { en: "8 min read", zh: "8 分钟阅读" },
    date: { en: "August 1, 2026", zh: "2026年8月1日" },
    toolLink: "/compress-video/",
    toolName: { en: "Video Compressor", zh: "视频压缩工具" },
    faqs: [
      {
        q: {
          en: "What resolution is 720p for a 16:9 video?",
          zh: "16:9 视频的 720p 分辨率是多少？"
        },
        a: {
          en: "For standard 16:9 landscape video, 720p is 1280 × 720 pixels. HappyConvert's 720p option sets width to 1280 pixels and calculates an even-numbered height that preserves the source aspect ratio.",
          zh: "标准 16:9 横屏视频的 720p 是 1280 × 720 像素。HappyConvert 的 720p 选项把宽度设为 1280 像素，再计算保持源宽高比的偶数高度。"
        }
      },
      {
        q: {
          en: "Will lowering 4K video to 720p make the file smaller?",
          zh: "把 4K 视频降低到 720p 会让文件变小吗？"
        },
        a: {
          en: "Usually, because each frame contains far fewer pixels and HappyConvert re-encodes it. Final size still depends on duration, frame rate, scene complexity, audio, and the selected compression quality.",
          zh: "通常会，因为每帧像素数量大幅减少，而且 HappyConvert 会重新编码。最终体积仍取决于时长、帧率、画面复杂度、音频和所选压缩质量。"
        }
      },
      {
        q: {
          en: "Does 720p mean 720 pixels high for vertical video?",
          zh: "竖屏视频选择 720p 后也是 720 像素高吗？"
        },
        a: {
          en: "Not in HappyConvert's current scaler. The option means 1280 pixels wide with proportional height. A portrait source therefore remains portrait and can be taller than 720 pixels.",
          zh: "当前 HappyConvert 缩放器不是这样。这个选项表示宽度为 1280 像素、高度按比例计算。竖屏源视频仍会保持竖屏，高度可能超过 720 像素。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: choose 720p HD (1280w) and test Balanced quality",
          zh: "先说结论：选择 720p HD（1280 宽），先测试平衡质量"
        },
        p: [
          {
            en: "To reduce video resolution to 720p online in HappyConvert, load the file in the Video Compressor, choose `720p HD (1280w)` under resolution, and start with Balanced quality. A standard 16:9 landscape source becomes 1280 × 720 while other aspect ratios keep their shape and receive a proportional even-numbered height.",
            zh: "要在 HappyConvert 中在线把视频分辨率降到 720p，先在视频压缩工具中载入文件，在分辨率中选择 `720p HD（1280 宽）`，质量先从平衡档开始。标准 16:9 横屏源文件会变成 1280 × 720，其他宽高比则保持形状，并得到按比例计算的偶数高度。"
          },
          {
            en: "The conversion runs locally through FFmpeg WebAssembly and outputs H.264 video with AAC audio in an MP4 container. Large 4K inputs use substantial browser memory and CPU time, so process a short sample before committing to a long recording.",
            zh: "转换通过 FFmpeg WebAssembly 在浏览器本地运行，输出 MP4 容器中的 H.264 视频和 AAC 音频。大型 4K 输入会消耗较多浏览器内存和 CPU 时间，因此处理长录制前应先测试短样本。"
          }
        ]
      },
      {
        h2: {
          en: "What HappyConvert's 720p option actually does",
          zh: "HappyConvert 的 720p 选项实际做了什么"
        },
        p: [
          {
            en: "The current scale filter sets output width to 1280 pixels and lets FFmpeg calculate the height while preserving aspect ratio. It also asks for an even height because common H.264 pixel formats work more reliably with even dimensions. This is why a 1920 × 1080 source becomes 1280 × 720.",
            zh: "当前缩放滤镜把输出宽度设为 1280 像素，让 FFmpeg 在保持宽高比的前提下计算高度。同时它会要求高度为偶数，因为常见 H.264 像素格式处理偶数尺寸更稳定。因此，1920 × 1080 源文件会变成 1280 × 720。"
          },
          {
            en: "A 2560 × 1440 landscape source also becomes 1280 × 720 because both are 16:9. A 1920 × 1200 source is 16:10, so its proportional output is 1280 × 800. The preset does not crop the frame or force every video into 16:9.",
            zh: "2560 × 1440 横屏源文件同样会变成 1280 × 720，因为两者都是 16:9。1920 × 1200 是 16:10，所以按比例输出为 1280 × 800。这个预设不会裁切画面，也不会强制所有视频变成 16:9。"
          },
          {
            en: "This distinction matters for vertical phone recordings. A 1080 × 1920 portrait file is already narrower than 1280 pixels, so selecting a fixed 1280 width can upscale it rather than reduce it. For that source, keep original resolution or use a smaller width only when the preview and output meet your goal.",
            zh: "这个区别对竖屏手机录制很重要。1080 × 1920 的竖屏文件宽度本来就小于 1280 像素，选择固定 1280 宽可能放大而不是缩小。对于这种源文件，可以保留原分辨率，或者只有在预览和输出符合目标时才使用更小宽度。"
          }
        ],
        callout: {
          en: "The label says 720p for familiar landscape use, but the implementation is more accurately described as 1280 pixels wide with aspect ratio preserved.",
          zh: "界面用 720p 表达常见横屏用途，但更准确的实现描述是：宽度 1280 像素，并保持源宽高比。"
        }
      },
      {
        h2: {
          en: "When reducing resolution is the right choice",
          zh: "什么时候应该降低分辨率"
        },
        list: [
          {
            en: "A 4K or 1440p clip is mainly being shared in chat, email, a support ticket, or a small web player.",
            zh: "4K 或 1440p 片段主要用于聊天、邮件、客服工单或较小的网页播放器。"
          },
          {
            en: "The destination screen or embed never displays the source at full resolution.",
            zh: "目标屏幕或嵌入区域从来不会以源文件完整分辨率显示。"
          },
          {
            en: "Upload time and storage matter more than preserving pixels that viewers cannot see.",
            zh: "上传时间和存储空间，比保留观众看不到的像素更重要。"
          },
          {
            en: "The source contains normal camera footage rather than tiny text, code, spreadsheets, or detailed interface recordings.",
            zh: "源内容是普通相机画面，而不是小字、代码、表格或细节密集的界面录屏。"
          }
        ]
      },
      {
        h2: {
          en: "When I would keep the original resolution",
          zh: "什么时候我会保留原分辨率"
        },
        p: [
          {
            en: "Screen recordings are the first exception. Small UI labels that are readable at 1920 pixels wide may soften after scaling to 1280. If the viewer must inspect code, menus, chart labels, or spreadsheet cells, test a representative section before reducing the full recording.",
            zh: "录屏是第一个例外。宽度 1920 像素时清晰可读的小号界面文字，缩到 1280 后可能变软。如果观众需要查看代码、菜单、图表标签或表格单元格，应先测试具有代表性的片段。"
          },
          {
            en: "Cropping later is another reason to retain pixels. If an editor will zoom into one quarter of the frame, a 720p delivery copy leaves less detail for that crop. Keep the high-resolution original as the master and create a separate 720p sharing copy.",
            zh: "后续还要裁切，也是保留像素的理由。如果剪辑师会放大画面的四分之一区域，720p 交付副本留给裁切的细节更少。应保留高分辨率原片作为母版，再创建单独的 720p 分享副本。"
          },
          {
            en: "Do not overwrite the source while testing. A smaller delivery file and an original master solve different problems, and browser compression cannot recreate detail removed during scaling.",
            zh: "测试时不要覆盖源文件。较小的交付文件和原始母版解决的是不同问题，浏览器压缩无法恢复缩放时删除的细节。"
          }
        ]
      },
      {
        h2: {
          en: "720p compression settings I would test first",
          zh: "我会优先测试的 720p 压缩设置"
        },
        list: [
          {
            en: "Resolution: 720p HD (1280w) for a 16:9 landscape source.",
            zh: "分辨率：对于 16:9 横屏源文件，选择 720p HD（1280 宽）。"
          },
          {
            en: "Quality: Balanced for the first sample; use High Quality when text or fine texture looks too soft.",
            zh: "质量：第一个样本选择平衡档；如果文字或细密纹理过软，改用高画质。"
          },
          {
            en: "Preset: Very Fast for a practical first run; Medium can spend more CPU time looking for compression efficiency.",
            zh: "速度预设：第一次使用 Very Fast；Medium 会投入更多 CPU 时间寻找压缩效率。"
          },
          {
            en: "Sample: choose 30 to 60 seconds containing motion, faces, text, and dark areas rather than an easy static intro.",
            zh: "样本：选择包含运动、人脸、文字和暗部的 30 到 60 秒，不要只测试简单的静态片头。"
          },
          {
            en: "Output check: compare dimensions, duration, audio, seeking, and the final file size before processing the full source.",
            zh: "输出检查：处理完整源文件前，比较尺寸、时长、声音、跳转和最终体积。"
          }
        ]
      },
      {
        h2: {
          en: "Resolution, quality, and encoding speed are separate controls",
          zh: "分辨率、质量和编码速度是三个不同控制项"
        },
        p: [
          {
            en: "Resolution controls how many pixels each frame contains. Quality controls how aggressively H.264 compresses those pixels. The encoding preset controls how much computation FFmpeg spends during the search for an efficient representation; it is not a playback-speed setting.",
            zh: "分辨率控制每帧包含多少像素，质量控制 H.264 对这些像素压缩得多激进，编码速度预设控制 FFmpeg 为寻找高效表达投入多少计算量；它不是视频播放速度设置。"
          },
          {
            en: "Lowering resolution can produce a large size reduction, but it does not guarantee a particular megabyte target. A 60-second talking-head clip, a 60-second game recording, and a 60-second waterfall can produce different sizes at the same controls because their motion and texture differ.",
            zh: "降低分辨率可以明显减少体积，但不能保证固定的 MB 目标。60 秒口播、60 秒游戏录屏和 60 秒瀑布画面，即使使用同样设置，输出体积也可能不同，因为运动和纹理复杂度不同。"
          },
          {
            en: "This is why I compare a representative sample instead of trusting a percentage badge. If the sample is too soft, raise quality. If it is still too large, trim unused duration before dropping from 720p to 480p.",
            zh: "因此，我会比较具有代表性的样本，而不是只相信百分比标签。如果样本过软，就提高质量；如果仍然太大，先剪掉无用时长，再考虑从 720p 降到 480p。"
          }
        ]
      },
      {
        h2: {
          en: "Browser limits for 4K and long recordings",
          zh: "4K 和长录制的浏览器限制"
        },
        p: [
          {
            en: "Downscaling 4K is computational work, not merely changing metadata. FFmpeg decodes large source frames, resizes them, encodes new H.264 frames, and writes a second file while the browser still holds working data. CPU speed, RAM, thermal throttling, source duration, and frame rate all affect completion time.",
            zh: "把 4K 降采样不是简单修改元数据。FFmpeg 要解码大型源帧、缩放、编码新的 H.264 帧，并在浏览器仍保存工作数据时写入第二个文件。CPU 速度、内存、温度降频、源时长和帧率都会影响完成时间。"
          },
          {
            en: "Close other heavy tabs and keep the page active. If a short sample succeeds but the full file stops, browser memory pressure is a likely cause. Several hundred megabytes of long 4K footage may be better handled by desktop FFmpeg, especially when the machine has limited memory.",
            zh: "关闭其他重型标签页，并保持页面活动。如果短样本成功但完整文件停止，浏览器内存压力很可能是原因。数百 MB 的长 4K 素材更适合桌面 FFmpeg，尤其是在机器内存有限时。"
          }
        ],
        callout: {
          en: "Start with the hardest 30 to 60 seconds, not the first minute by habit. Fast motion, leaves, water, confetti, smoke, and small text reveal compression problems sooner.",
          zh: "应优先测试最难处理的 30 到 60 秒，而不是习惯性选择第一分钟。快速运动、树叶、水面、彩纸、烟雾和小字更容易提前暴露压缩问题。"
        }
      },
      {
        h2: {
          en: "Reduce video resolution to 720p FAQ",
          zh: "视频降低到 720p 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is 720p good enough for email and messaging?",
              zh: "720p 适合邮件和聊天发送吗？"
            },
            a: {
              en: "It is often a reasonable delivery resolution for ordinary camera footage viewed in a small player. File-size limits still depend on duration and compression, so test the exported megabytes rather than assuming resolution alone will meet the limit.",
              zh: "对于在小播放器中观看的普通相机画面，720p 通常是合理的交付分辨率。文件限制仍取决于时长和压缩，因此要检查导出的实际 MB，而不是认为分辨率一定能满足限制。"
            }
          },
          {
            q: {
              en: "Should I choose 720p or 480p?",
              zh: "应该选择 720p 还是 480p？"
            },
            a: {
              en: "Start with 720p when faces, subtitles, or moderate detail matter. Use 480p only when the 720p file remains too large and the smaller result is still readable on the destination screen.",
              zh: "人物、字幕或中等细节重要时先用 720p。只有当 720p 文件仍然太大，并且更小结果在目标屏幕上仍然可读时，再使用 480p。"
            }
          },
          {
            q: {
              en: "Can lowering resolution improve a blurry source?",
              zh: "降低分辨率能让模糊的源视频变清晰吗？"
            },
            a: {
              en: "No. Downscaling can make compression artifacts less noticeable at a smaller display size, but it cannot create missing focus or detail. Keep expectations tied to what exists in the source.",
              zh: "不能。降采样可能让压缩瑕疵在较小显示尺寸下不那么明显，但无法创造原本缺失的对焦和细节。应根据源文件已有内容判断效果。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/compress-screen-recording-without-blurry-text/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Compress Screen Recordings Without Blurry Text",
      zh: "如何压缩屏幕录制，同时避免文字变模糊"
    },
    description: {
      en: "Compress screen recordings without blurry text. Learn which HappyConvert resolution, quality, and speed settings protect code, menus, slides, and UI labels.",
      zh: "压缩屏幕录制，同时尽量避免文字变模糊。了解 HappyConvert 中哪些分辨率、质量和速度设置更适合代码、菜单、幻灯片和小号界面文字。"
    },
    category: { en: "Compression Guides", zh: "压缩教程" },
    readTime: { en: "12 min read", zh: "12 分钟阅读" },
    date: { en: "August 1, 2026", zh: "2026年8月1日" },
    toolLink: "/compress-video/",
    toolName: { en: "Video Compressor", zh: "视频压缩工具" },
    faqs: [
      {
        q: {
          en: "Why does text look blurry after compressing a screen recording?",
          zh: "为什么屏幕录制压缩后文字会变模糊？"
        },
        a: {
          en: "Text becomes blurry when resolution or bitrate is too low for sharp high-contrast edges. Scaling, repeated encoding, browser zoom during recording, and fine colored text can make the problem more visible.",
          zh: "当分辨率或码率不足以保留锐利的高对比边缘时，文字会变模糊。缩放、重复编码、录制时的浏览器缩放，以及细小的彩色文字都会让问题更明显。"
        }
      },
      {
        q: {
          en: "Should I keep the original resolution for a screen recording?",
          zh: "压缩录屏时应该保留原分辨率吗？"
        },
        a: {
          en: "Start with the original resolution when viewers must read code, spreadsheets, or small interface labels. Test 1280-pixel width only after checking that the smallest important text remains readable.",
          zh: "如果观众需要阅读代码、表格或小号界面标签，应先保留原分辨率。只有确认最小的重要文字仍然可读后，再测试 1280 像素宽输出。"
        }
      },
      {
        q: {
          en: "Which HappyConvert quality setting is best for screen recordings?",
          zh: "HappyConvert 哪个质量档更适合屏幕录制？"
        },
        a: {
          en: "High Quality is the safer first test for dense text and detailed interfaces. Balanced can work for larger UI elements and presentation slides, but compare a difficult sample before processing the full recording.",
          zh: "对于密集文字和细节丰富的界面，高画质是更稳妥的首次测试。较大的界面元素和演示幻灯片可以尝试平衡档，但处理完整录制前要比较困难片段。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: preserve pixels before chasing a smaller file",
          zh: "先说结论：先保住像素，再追求更小体积"
        },
        p: [
          {
            en: "To compress screen recordings without blurry text, begin with the original resolution and High Quality in HappyConvert. Export a 30- to 60-second sample that contains the smallest code, menu labels, spreadsheet cells, or slide notes viewers must read. If that sample is clear, try Balanced quality; reduce resolution only after quality alone is not enough.",
            zh: "要压缩屏幕录制并避免文字变模糊，先在 HappyConvert 中保留原分辨率并选择高画质。导出一个 30 到 60 秒样本，里面要包含观众必须阅读的最小代码、菜单标签、表格单元格或幻灯片备注。如果样本清晰，再尝试平衡质量；只有单纯调整质量仍不足以减小体积时，才降低分辨率。"
          },
          {
            en: "This order differs from ordinary camera footage. A face or landscape can remain understandable after substantial scaling, while a 12-pixel UI label can cross from readable to useless after one resize. HappyConvert encodes locally with FFmpeg WebAssembly, so your CPU and browser memory determine how comfortable a long high-resolution job will be.",
            zh: "这个顺序和普通相机素材不同。人物或风景经过明显缩放后仍能被理解，而一个 12 像素高的界面标签只缩放一次，就可能从可读变成无法使用。HappyConvert 使用 FFmpeg WebAssembly 在本地编码，因此 CPU 和浏览器内存决定长时间高分辨率任务是否顺利。"
          }
        ],
        callout: {
          en: "For screen recordings, judge the smallest important text at normal playback size. A file is not successful merely because it is much smaller.",
          zh: "对于屏幕录制，应在正常播放尺寸下判断最小的重要文字。文件变小很多，并不代表压缩成功。"
        }
      },
      {
        h2: {
          en: "Why screen-recording text breaks before the rest of the picture",
          zh: "为什么录屏文字比其他画面更早劣化"
        },
        p: [
          {
            en: "Video codecs are designed to spend fewer bits on details that are hard to notice in motion. Screen recordings contain the opposite kind of image: large flat backgrounds interrupted by thin, stationary, high-contrast edges. Letters, cursor outlines, grid lines, and icons may be only one or two source pixels thick, so a small change can alter their shape.",
            zh: "视频编码器会减少人眼在运动中不容易察觉的细节。屏幕录制恰好相反：大面积平坦背景上分布着细而静止的高对比边缘。字母、光标轮廓、表格线和图标可能只有一到两个源像素宽，因此很小的变化也会改变它们的形状。"
          },
          {
            en: "Chroma subsampling also matters. Common H.264 delivery video stores color detail at a lower resolution than brightness detail. Black text on white usually survives better than small red or blue text on a dark background. Syntax highlighting, warning badges, colored spreadsheet cells, and thin chart lines can therefore look softer than plain monochrome text.",
            zh: "色度抽样也会产生影响。常见 H.264 交付视频保存颜色细节的分辨率低于亮度细节。白底黑字通常比暗色背景上的小红字或小蓝字更容易保留。语法高亮、警告徽章、彩色表格单元格和细图表线条，因此可能比单色文字更早变软。"
          },
          {
            en: "A paused frame can hide the practical problem. Viewers scroll, windows animate, and the cursor moves across text. Compression artifacts may flicker around those edges during motion even when one screenshot appears acceptable. That is why a real playback sample is more useful than comparing isolated still images.",
            zh: "暂停帧可能掩盖实际问题。观众会看到滚动、窗口动画和光标穿过文字。即使某张截图看起来可以接受，压缩瑕疵也可能在运动时围绕这些边缘闪烁。因此，真实播放样本比只比较静态图片更有价值。"
          }
        ]
      },
      {
        h2: {
          en: "Record with compression in mind before you export",
          zh: "录制阶段就为后续压缩做好准备"
        },
        p: [
          {
            en: "The cleanest compression starts before HappyConvert. Increase the application font size enough that the smallest important label is comfortably readable in the raw recording. For a coding tutorial, hide sidebars that are not discussed and enlarge the editor. For a spreadsheet demo, zoom the sheet instead of expecting viewers to inspect dozens of tiny columns.",
            zh: "最容易压缩的录屏，从进入 HappyConvert 之前就开始准备。把应用字体调大，让最小的重要标签在原始录制中也能轻松阅读。录制代码教程时，隐藏不会讲解的侧栏并放大编辑器；录制表格演示时，放大工作表，而不是让观众查看几十列小字。"
          },
          {
            en: "Capture only the display area you need. Recording a 3840 × 2160 desktop to show one 900-pixel-wide browser panel wastes pixels on empty wallpaper, docks, and unrelated windows. A tighter capture region gives the useful interface more of the available frame and can reduce the need for aggressive post-recording scaling.",
            zh: "只录制真正需要的显示区域。为了展示一个 900 像素宽的浏览器面板，却录下整个 3840 × 2160 桌面，会把像素浪费在空白壁纸、程序坞和无关窗口上。更紧凑的捕获区域能让有用界面占据更多画面，也能减少后期激进缩放的需求。"
          },
          {
            en: "Avoid unnecessary digital zoom during editing. Every resize asks a resampling filter to invent a new pixel grid. If the recording is scaled down, enlarged, and scaled down again, letter edges are filtered repeatedly before the final video encode. Keep one high-quality master and derive delivery copies from that master.",
            zh: "剪辑时避免不必要的数字缩放。每次缩放都要求重采样滤镜生成新的像素网格。如果录屏先缩小、再放大、然后再次缩小，文字边缘会在最终编码前被反复过滤。应保留一个高质量母版，并从母版生成不同交付副本。"
          }
        ]
      },
      {
        h2: {
          en: "HappyConvert settings for a text-heavy screen recording",
          zh: "文字密集型录屏的 HappyConvert 设置"
        },
        list: [
          {
            en: "Resolution: choose Original first when code, formulas, terminal output, or small menu text must remain readable.",
            zh: "分辨率：代码、公式、终端输出或小号菜单文字必须可读时，先选择原分辨率。"
          },
          {
            en: "Quality: start with High Quality, then compare Balanced on the same difficult 30- to 60-second segment.",
            zh: "质量：先使用高画质，再用同一个困难的 30 到 60 秒片段比较平衡档。"
          },
          {
            en: "Encoding preset: use Very Fast for the first practical test; try Medium only when extra CPU time is acceptable.",
            zh: "编码速度：第一次实际测试使用 Very Fast；只有可以接受更多 CPU 时间时再尝试 Medium。"
          },
          {
            en: "Resolution fallback: test 720p HD (1280w) after the original-resolution output is still too large.",
            zh: "分辨率备选：原分辨率输出仍然太大时，再测试 720p HD（1280 宽）。"
          },
          {
            en: "Output: inspect the MP4 at 100% player zoom and at the size viewers will actually use.",
            zh: "输出检查：在播放器 100% 缩放和观众实际使用的尺寸下查看 MP4。"
          }
        ],
        callout: {
          en: "Do not change quality, resolution, and preset at the same time during testing. Change one control, compare the same segment, and keep the cause of each difference visible.",
          zh: "测试时不要同时改变质量、分辨率和速度预设。每次只改变一个控制项，比较同一个片段，才能知道差异来自哪里。"
        }
      },
      {
        h2: {
          en: "Original resolution versus 1280-pixel width",
          zh: "原分辨率与 1280 像素宽应该怎样选择"
        },
        p: [
          {
            en: "Keeping original resolution preserves the source pixel grid, but it does not mean the output is uncompressed. HappyConvert still re-encodes the video with H.264. The advantage is that a 1920-pixel-wide interface remains 1920 pixels wide instead of asking the scaler to map every letter onto a smaller grid.",
            zh: "保留原分辨率只是保留源像素网格，并不意味着输出没有压缩。HappyConvert 仍会使用 H.264 重新编码。它的优势在于，一个 1920 像素宽的界面仍保持 1920 像素宽，不需要缩放器把每个字母重新映射到更小网格。"
          },
          {
            en: "The 720p option sets width to 1280 pixels and preserves aspect ratio. A 1920 × 1080 source becomes 1280 × 720, reducing the number of pixels per frame by about 56%. That can substantially reduce the work and output size, but a 10-pixel-high source label becomes roughly 7 pixels high before compression artifacts are considered.",
            zh: "720p 选项把宽度设为 1280 像素并保持宽高比。1920 × 1080 源文件会变成 1280 × 720，每帧像素数量减少约 56%。这能明显减少计算和输出体积，但一个在源文件中高 10 像素的标签，在考虑压缩瑕疵前就只剩大约 7 像素高。"
          },
          {
            en: "For presentation slides with 28-point headings, that tradeoff may be acceptable. For a terminal at 12-point type or a spreadsheet at 80% zoom, it may not be. Use the smallest important text as the decision point, not the nominal resolution or the overall file-size reduction.",
            zh: "对于使用 28 磅标题的演示幻灯片，这种取舍可能可以接受。对于 12 磅终端字体或 80% 缩放的表格，它可能就不合适。应以最小的重要文字作为决策点，而不是只看标称分辨率或总体体积下降。"
          }
        ]
      },
      {
        h2: {
          en: "Quality level and encoding preset solve different problems",
          zh: "质量档位和编码速度解决不同问题"
        },
        p: [
          {
            en: "The quality level controls how much visual information H.264 is allowed to discard. Higher quality generally keeps cleaner edges and subtle gradients but produces a larger file. Balanced spends fewer bits and can work well when interface elements are large, motion is limited, and the destination player is small.",
            zh: "质量档位控制 H.264 可以丢弃多少视觉信息。更高质量通常能保留更干净的边缘和细微渐变，但文件更大。当界面元素较大、运动较少且目标播放器较小时，平衡档可能已经足够。"
          },
          {
            en: "The encoding preset controls how much CPU effort the encoder spends looking for efficient ways to represent the picture. Medium can improve compression efficiency compared with faster presets, but it does not turn a low-quality setting into a high-quality one. It also increases browser processing time, which matters on laptops that become hot or throttle their CPU.",
            zh: "编码速度预设控制编码器投入多少 CPU 计算来寻找更高效的画面表达。与更快预设相比，Medium 可能提高压缩效率，但不会把低质量设置变成高质量。它还会增加浏览器处理时间，这对容易发热或 CPU 降频的笔记本很重要。"
          },
          {
            en: "For a first pass, I prefer High Quality plus Very Fast because it isolates the risk I care about: text clarity. After the output is readable, I test Balanced or Medium separately. This sequence gives useful evidence instead of guessing which combination caused a blurry result.",
            zh: "第一次测试时，我更倾向于高画质加 Very Fast，因为它优先控制我真正关心的风险：文字清晰度。确认输出可读后，再分别测试平衡质量或 Medium。这个顺序能提供有用证据，而不是猜测哪个组合导致文字模糊。"
          }
        ]
      },
      {
        h2: {
          en: "Choose a difficult sample, not a convenient sample",
          zh: "选择困难样本，而不是方便的样本"
        },
        p: [
          {
            en: "A static title card is a poor compression test for a 45-minute software tutorial. Find the section with the smallest text, fastest scrolling, several overlapping windows, syntax highlighting, or a moving chart. Include a mouse movement and a window transition because motion changes how bits are allocated between frames.",
            zh: "静态标题卡不适合用来测试 45 分钟的软件教程。应找到文字最小、滚动最快、窗口重叠最多、带语法高亮或动态图表的片段。样本中还应包含鼠标移动和窗口切换，因为运动会改变帧之间的码率分配。"
          },
          {
            en: "Thirty to sixty seconds is usually enough to compare settings without waiting for the full recording. Keep the source range identical for every export. Name results by the control you changed, such as `original-high-veryfast.mp4` and `1280-balanced-veryfast.mp4`, so comparisons do not depend on memory.",
            zh: "30 到 60 秒通常足以比较设置，不需要等待完整录制。每次导出都使用相同源范围。按改变的控制项命名结果，例如 `original-high-veryfast.mp4` 和 `1280-balanced-veryfast.mp4`，避免依靠记忆比较。"
          },
          {
            en: "View each sample in motion, pause on dense text, and seek back and forth. Check whether the cursor remains defined, one-pixel grid lines disappear, colored characters bleed into the background, or scrolling produces a temporary smear. These failures are more informative than a single percentage reduction.",
            zh: "播放每个样本，暂停在密集文字处，并来回跳转。检查光标是否清楚、单像素表格线是否消失、彩色字符是否渗入背景，以及滚动时是否出现短暂拖影。这些失败现象比单个压缩百分比更有信息价值。"
          }
        ]
      },
      {
        h2: {
          en: "Different screen recordings need different compromises",
          zh: "不同类型的屏幕录制需要不同取舍"
        },
        p: [
          {
            en: "Code and terminal recordings are the least forgiving. Preserve original resolution unless the editor font was deliberately enlarged before recording. Dark themes with colored syntax deserve attention because small blue, red, and purple characters can soften differently from white text.",
            zh: "代码和终端录制最不宽容。除非录制前已经主动放大编辑器字体，否则应保留原分辨率。深色主题中的彩色语法需要特别注意，因为小号蓝色、红色和紫色字符可能比白字更容易变软。"
          },
          {
            en: "Spreadsheet and dashboard recordings depend on whether viewers need exact values or only the overall trend. If cell contents must be read, crop unused toolbars and enlarge the sheet before recording. If the video only explains a chart shape, 1280-pixel width and Balanced quality may be sufficient after testing.",
            zh: "表格和仪表盘录制取决于观众是否需要读取精确数值，还是只需要理解总体趋势。如果必须阅读单元格内容，应在录制前裁掉无用工具栏并放大表格；如果只讲解图表形状，测试后可能可以使用 1280 宽和平衡质量。"
          },
          {
            en: "Presentation slides are often easier because fonts are larger and layouts are simpler. However, thin diagrams, footnotes, and embedded screenshots can still fail. Video calls are different again: faces and camera noise may dominate file size, while small shared-screen text remains the acceptance test.",
            zh: "演示幻灯片通常更容易压缩，因为字体更大、布局更简单。不过，细线图、脚注和嵌入截图仍可能出问题。视频会议又不同：人脸和相机噪点可能主导文件体积，但共享屏幕中的小字仍然是验收标准。"
          }
        ]
      },
      {
        h2: {
          en: "Trim before making text harder to read",
          zh: "先剪掉无用时长，不要先牺牲文字"
        },
        p: [
          {
            en: "Duration is the cleanest source of file-size reduction because removing unused seconds does not blur the frames you keep. Cut waiting for applications to open, repeated attempts, long pauses, setup mistakes, and the silent minute before a meeting begins. A 20% shorter recording removes roughly 20% of the timeline that would otherwise need encoding.",
            zh: "缩短时长是最干净的体积优化，因为删除无用秒数不会模糊保留的画面。可以剪掉等待应用打开、重复操作、长时间停顿、设置错误，以及会议开始前的静默一分钟。录制时长减少 20%，就意味着大约 20% 的时间线不再需要编码。"
          },
          {
            en: "This is usually preferable to dropping from 1920 to 1280 pixels solely to meet an attachment target. Remove dead time first, compress at a readable quality second, and only then reduce resolution. The sequence protects information instead of spending quality on content nobody needs.",
            zh: "与仅为了满足附件限制而把宽度从 1920 降到 1280 相比，先剪无用时长通常更合理。第一步删除空白，第二步以可读质量压缩，最后才降低分辨率。这个顺序保护真正的信息，而不是把画质浪费在没人需要的内容上。"
          },
          {
            en: "HappyConvert separates cutting and compression into different tools, so use a two-step workflow when needed. Export the useful time range, load that result into the compressor, and keep the original recording until the final delivery file has been checked.",
            zh: "HappyConvert 把剪切和压缩分成不同工具，因此需要时可以使用两步流程。先导出有用时间范围，再把结果载入压缩工具；在最终交付文件通过检查前，保留原始录制。"
          }
        ]
      },
      {
        h2: {
          en: "Browser limits for long, high-resolution screen recordings",
          zh: "长时间高分辨率录屏的浏览器限制"
        },
        p: [
          {
            en: "Local browser processing removes upload time but does not remove encoding work. FFmpeg WebAssembly must decode the source, hold working data in memory, encode H.264 frames, encode AAC audio, and write a new MP4. A 60-minute 4K screen recording can be uncomfortable even when its compressed source file is not unusually large.",
            zh: "浏览器本地处理省去了上传时间，但不会消除编码计算。FFmpeg WebAssembly 必须解码源文件、在内存中保存工作数据、编码 H.264 帧、编码 AAC 音频并写入新 MP4。即使源文件压缩体积不算特别大，60 分钟 4K 录屏也可能让浏览器处理得很吃力。"
          },
          {
            en: "Close other memory-heavy tabs, connect a laptop to power, and keep the HappyConvert page active. If a 60-second sample works but the complete job stops, browser memory pressure, thermal throttling, or the much longer encode time may be responsible rather than the chosen text-quality setting.",
            zh: "关闭其他占用内存较多的标签页，为笔记本连接电源，并保持 HappyConvert 页面活动。如果 60 秒样本成功但完整任务停止，原因可能是浏览器内存压力、温度降频或更长编码时间，而不一定是文字质量设置。"
          },
          {
            en: "For several hundred megabytes, long 4K captures, or a batch of lessons, desktop FFmpeg is the more dependable workflow. Browser compression is most comfortable for short to moderate files where privacy and avoiding an upload are valuable.",
            zh: "对于数百 MB、长时间 4K 捕获或一批课程，桌面 FFmpeg 是更可靠的工作流。浏览器压缩更适合较短到中等大小的文件，尤其是重视隐私并希望避免上传时。"
          }
        ]
      },
      {
        h2: {
          en: "A practical text-clarity review before delivery",
          zh: "交付前的文字清晰度检查"
        },
        list: [
          {
            en: "Confirm the output dimensions and make sure an accidental upscale or excessive downscale did not occur.",
            zh: "确认输出尺寸，确保没有意外放大或过度缩小。"
          },
          {
            en: "Play the densest text section at normal player size, not only full screen.",
            zh: "在正常播放器尺寸下播放文字最密集片段，不要只看全屏。"
          },
          {
            en: "Pause on code, formulas, table values, footnotes, and colored warning text.",
            zh: "暂停检查代码、公式、表格数值、脚注和彩色警告文字。"
          },
          {
            en: "Watch scrolling and cursor movement for edge shimmer, smearing, or disappearing grid lines.",
            zh: "观察滚动和光标移动时是否出现边缘闪烁、拖影或表格线消失。"
          },
          {
            en: "Check the beginning, middle, and final ten seconds for duration, audio, and playback errors.",
            zh: "检查开头、中间和最后 10 秒的时长、声音和播放错误。"
          },
          {
            en: "Keep the high-quality source until the delivery copy passes review on the destination device.",
            zh: "在交付副本通过目标设备检查前，保留高质量源文件。"
          }
        ]
      },
      {
        h2: {
          en: "Compress screen recordings without blurry text FAQ",
          zh: "录屏压缩不糊字常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is 720p enough for a software tutorial?",
              zh: "720p 足够用于软件教程吗？"
            },
            a: {
              en: "It can be enough when the interface was recorded with large fonts and a focused capture area. It may be inadequate for full-desktop recordings with small code, spreadsheets, or several panels. Test the smallest required text.",
              zh: "如果录制时使用大字体和紧凑捕获区域，720p 可能足够。对于包含小号代码、表格或多个面板的全桌面录制，它可能不够。应测试最小的必要文字。"
            }
          },
          {
            q: {
              en: "Why is my compressed recording still large at original resolution?",
              zh: "为什么保留原分辨率后文件仍然很大？"
            },
            a: {
              en: "Resolution is only one factor. Duration, frame rate, motion, camera overlays, animated backgrounds, and the selected quality also affect size. Trim unused time before reducing text resolution.",
              zh: "分辨率只是一个因素。时长、帧率、运动、摄像头叠加、动态背景和所选质量也影响体积。降低文字分辨率前，应先剪掉无用时长。"
            }
          },
          {
            q: {
              en: "Can compression make already blurry text sharp?",
              zh: "压缩能让原本模糊的文字变清晰吗？"
            },
            a: {
              en: "No. Compression can preserve or discard information but cannot recreate letter edges missing from the source. Re-record with larger fonts or a tighter capture area when the original is unreadable.",
              zh: "不能。压缩可以保留或丢弃信息，但无法重建源文件中缺失的文字边缘。如果原录制不可读，应使用更大字体或更紧凑的捕获区域重新录制。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/extract-wav-audio-from-video-for-editing/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Extract WAV Audio from Video for Editing",
      zh: "如何从视频中提取 WAV 音频用于剪辑"
    },
    description: {
      en: "Extract WAV audio from video for editing with HappyConvert. Learn when PCM WAV helps, how large files become, which time range to export, and what to verify.",
      zh: "使用 HappyConvert 从视频中提取 WAV 音频用于剪辑。了解 PCM WAV 的适用场景、文件体积、时间范围设置，以及导出后的检查方法。"
    },
    category: { en: "Audio Guides", zh: "音频教程" },
    readTime: { en: "12 min read", zh: "12 分钟阅读" },
    date: { en: "August 1, 2026", zh: "2026年8月1日" },
    toolLink: "/video-to-audio/",
    toolName: { en: "Video to Audio Converter", zh: "视频转音频工具" },
    faqs: [
      {
        q: {
          en: "Should I extract WAV or MP3 from a video for editing?",
          zh: "从视频提取音频用于剪辑，应该选 WAV 还是 MP3？"
        },
        a: {
          en: "Choose WAV when the audio will be edited, cleaned, mixed, transcribed, or encoded again. Choose MP3 when compact size and casual listening matter more than preserving a straightforward editing source.",
          zh: "音频还要剪辑、降噪、混音、转写或再次编码时选择 WAV。更重视体积和普通收听，而不是保留直接编辑的源文件时选择 MP3。"
        }
      },
      {
        q: {
          en: "Does extracting WAV improve the sound quality?",
          zh: "提取成 WAV 会提升音质吗？"
        },
        a: {
          en: "No. WAV prevents another lossy audio encode in HappyConvert, but it cannot restore detail already removed from AAC, MP3, or another compressed track inside the video.",
          zh: "不会。WAV 可以避免 HappyConvert 再进行一次有损音频编码，但无法恢复视频内部 AAC、MP3 或其他压缩音轨已经删除的细节。"
        }
      },
      {
        q: {
          en: "Why is the extracted WAV much larger than the video's audio track?",
          zh: "为什么提取出的 WAV 比视频中的音轨大很多？"
        },
        a: {
          en: "HappyConvert writes uncompressed 16-bit PCM audio. Its size depends mainly on sample rate, bit depth, channel count, and duration, while AAC or MP3 audio stores a compressed representation.",
          zh: "HappyConvert 写入未压缩的 16 位 PCM 音频。它的体积主要由采样率、位深、声道数和时长决定，而 AAC 或 MP3 音轨保存的是压缩后的表示。"
        }
      }
    ],
    content: [
      {
        h2: {
          en: "The short answer: choose WAV when the next step is editing",
          zh: "先说结论：下一步要编辑，就选择 WAV"
        },
        p: [
          {
            en: "To extract WAV audio from video for editing, load the video in HappyConvert's Video to Audio tool, choose WAV, set the start and end times you actually need, and process the file. HappyConvert writes PCM audio locally in the browser, giving an editor a simple uncompressed track without creating another MP3 generation.",
            zh: "要从视频中提取 WAV 音频用于剪辑，在 HappyConvert 的视频转音频工具中载入视频，选择 WAV，设置真正需要的开始和结束时间，然后处理文件。HappyConvert 在浏览器本地写入 PCM 音频，为剪辑软件提供简单的未压缩音轨，不会再生成一代 MP3。"
          },
          {
            en: "WAV is useful for dialogue cleanup, podcast editing, transcription, sound design, archival handoff, and importing audio into a timeline that will later be exported again. It is not a way to make compressed source audio sound better. Its advantage is a predictable editing format and the absence of another lossy encode during extraction.",
            zh: "WAV 适合对白清理、播客剪辑、转写、声音设计、存档交接，以及导入之后还会再次导出的时间线。它不能让已经压缩的源音频变得更好。它的优势是编辑格式明确，并且在提取阶段避免再次有损编码。"
          }
        ],
        callout: {
          en: "Use WAV as a working file, not proof of higher source quality. The video track determines what sound information exists before extraction.",
          zh: "把 WAV 当作工作文件，不要把它当作源音质更高的证明。提取前实际存在多少声音信息，由视频内部的音轨决定。"
        }
      },
      {
        h2: {
          en: "What HappyConvert puts inside the WAV file",
          zh: "HappyConvert 在 WAV 文件中写入了什么"
        },
        p: [
          {
            en: "WAV is a container that can hold several kinds of audio, but HappyConvert's current extraction command writes signed 16-bit little-endian PCM. PCM represents each audio sample directly rather than using perceptual compression. This makes the output straightforward for editors, audio workstations, transcription tools, and waveform analysis.",
            zh: "WAV 是可以容纳多种音频的容器，但 HappyConvert 当前的提取命令写入有符号 16 位小端 PCM。PCM 直接表示每个音频采样，而不是使用感知压缩。这让输出更容易被剪辑软件、数字音频工作站、转写工具和波形分析程序处理。"
          },
          {
            en: "The extractor does not advertise a new sample rate in the interface. FFmpeg generally follows the decoded input stream unless conversion requirements dictate otherwise. After export, inspect the WAV in the destination editor rather than assuming every source becomes 48 kHz stereo.",
            zh: "提取界面没有提供新的采样率选项。除非转换要求另有规定，FFmpeg 通常会遵循解码后的输入音轨。导出后应在目标剪辑软件中检查 WAV，不要假设每个源文件都会变成 48 kHz 立体声。"
          },
          {
            en: "This matters because phone video, screen capture, camera footage, and downloaded media can carry different sample rates and channel layouts. A mono voice note and a stereo camera track do not become equivalent simply because both are saved with a `.wav` extension.",
            zh: "这一点很重要，因为手机视频、屏幕捕获、相机素材和下载媒体可能使用不同采样率和声道布局。单声道语音和立体声相机音轨，不会因为都保存为 `.wav` 就变成相同内容。"
          }
        ]
      },
      {
        h2: {
          en: "WAV versus MP3 for an editing workflow",
          zh: "剪辑工作流中 WAV 与 MP3 的区别"
        },
        p: [
          {
            en: "MP3 is designed for compact delivery. It removes audio information according to a perceptual model and stores the result at a much lower bitrate than PCM. That is useful for sending a review file, listening on a phone, or publishing a lightweight download.",
            zh: "MP3 面向紧凑交付。它按照感知模型删除部分音频信息，并以远低于 PCM 的码率保存结果。这适合发送审听文件、手机收听或发布轻量下载。"
          },
          {
            en: "WAV is easier to edit repeatedly because the extraction itself does not add another lossy compression stage. Cutting, fading, equalizing, denoising, normalizing, and mixing do not require an MP3 decoder to reconstruct an approximation before every render. The final project can still be exported to AAC, MP3, or another delivery format later.",
            zh: "WAV 更适合反复编辑，因为提取本身不会增加另一层有损压缩。剪切、淡入淡出、均衡、降噪、响度调整和混音时，不需要先由 MP3 解码器重建近似信号。最终项目之后仍然可以导出为 AAC、MP3 或其他交付格式。"
          },
          {
            en: "The tradeoff is storage. A one-hour WAV can be hundreds of megabytes, while a compressed audio file may be a small fraction of that. Choose WAV because the production workflow benefits from it, not because larger files are automatically better.",
            zh: "代价是存储空间。一小时 WAV 可能达到数百 MB，而压缩音频可能只有它的一小部分。选择 WAV 应该是因为制作流程需要，而不是因为文件越大就自动越好。"
          }
        ],
        callout: {
          en: "Working format and delivery format do not need to match. Edit WAV, then export the finished program in the format required by the audience or platform.",
          zh: "工作格式和交付格式不需要相同。可以用 WAV 编辑，再把成品导出为观众或平台要求的格式。"
        }
      },
      {
        h2: {
          en: "How to extract WAV audio from video in HappyConvert",
          zh: "如何在 HappyConvert 中从视频提取 WAV"
        },
        list: [
          {
            en: "Open the Video to Audio tool and load the MP4, MOV, WebM, or other supported video file.",
            zh: "打开视频转音频工具，载入 MP4、MOV、WebM 或其他支持的视频文件。"
          },
          {
            en: "Play the preview and confirm that the expected dialogue, music, or microphone track is audible.",
            zh: "播放预览，确认能够听到预期的对白、音乐或麦克风音轨。"
          },
          {
            en: "Set the start and end times to the section needed for editing instead of exporting unused silence or footage.",
            zh: "把开始和结束时间设置为剪辑真正需要的区段，不要导出无用静音或画面对应的音频。"
          },
          {
            en: "Choose WAV as the audio format. The MP3 bitrate control does not apply to PCM WAV.",
            zh: "音频格式选择 WAV。MP3 码率控制不适用于 PCM WAV。"
          },
          {
            en: "Start processing and keep the browser tab active while FFmpeg WebAssembly reads the source and writes the WAV.",
            zh: "开始处理，并在 FFmpeg WebAssembly 读取源文件、写入 WAV 时保持浏览器标签页活动。"
          },
          {
            en: "Download the result and verify duration, channels, synchronization reference, and the beginning and end before importing it into a project.",
            zh: "下载结果，在导入项目之前确认时长、声道、同步参考以及开头和结尾。"
          }
        ]
      },
      {
        h2: {
          en: "Use the time range to avoid creating unnecessary WAV data",
          zh: "利用时间范围避免生成无用 WAV 数据"
        },
        p: [
          {
            en: "PCM size grows almost linearly with duration, so trimming before extraction has a direct storage benefit. If a two-hour recording contains a 12-minute interview segment, exporting only those 12 minutes can save roughly 90% of the WAV duration compared with extracting the entire source.",
            zh: "PCM 体积几乎随时长线性增长，因此提取前裁定时间范围可以直接节省存储。如果两小时录制中只有 12 分钟访谈需要使用，只导出这 12 分钟，与提取完整源文件相比，可以减少大约 90% 的 WAV 时长。"
          },
          {
            en: "Leave a small amount of handle before and after the intended edit when another editor will refine the cut. Five to ten seconds of extra room can preserve breaths, room tone, transitions, and words that begin just before a visual cut. Do not trim so tightly that the next person cannot make a clean audio edit.",
            zh: "如果之后还要由其他剪辑师精修，可以在目标区段前后各保留少量余量。额外 5 到 10 秒能保留呼吸声、环境底噪、转场，以及在画面切点前已经开始的词语。不要裁得太紧，以免后续无法做干净的音频编辑。"
          },
          {
            en: "Write down the extraction start time if the WAV must be synchronized with the original video later. A WAV beginning at 00:23:15 is not automatically aware of that timeline position. The filename or project notes should carry the offset unless your downstream workflow embeds and reads timecode metadata.",
            zh: "如果 WAV 之后需要与原视频重新同步，要记下提取开始时间。从 00:23:15 开始的 WAV 不会自动知道自己在原时间线中的位置。除非下游流程会嵌入并读取时间码元数据，否则应在文件名或项目备注中记录偏移。"
          }
        ]
      },
      {
        h2: {
          en: "Estimate WAV file size before exporting",
          zh: "导出前怎样估算 WAV 文件体积"
        },
        p: [
          {
            en: "Uncompressed PCM size can be estimated from sample rate × bit depth × channel count × duration. For 48,000 samples per second, 16 bits per sample, and two channels, the raw rate is 1,536,000 bits per second. Dividing by eight gives 192,000 bytes per second before small container overhead.",
            zh: "未压缩 PCM 体积可以用采样率 × 位深 × 声道数 × 时长估算。以每秒 48,000 个采样、每采样 16 位、两个声道为例，原始速率是每秒 1,536,000 位。除以 8 后约为每秒 192,000 字节，尚未计入少量容器开销。"
          },
          {
            en: "At that rate, one minute is about 11.5 MB in decimal units, ten minutes about 115 MB, and one hour about 691 MB. A mono track is approximately half the stereo size. A 44.1 kHz source is somewhat smaller than the same channel layout at 48 kHz.",
            zh: "按这个速率计算，十进制单位下一分钟约 11.5 MB，十分钟约 115 MB，一小时约 691 MB。单声道体积大约是立体声的一半。相同声道布局下，44.1 kHz 源文件会比 48 kHz 略小。"
          },
          {
            en: "These are planning estimates, not a promise about every HappyConvert output. The actual sample rate and channel count depend on the decoded input and FFmpeg's output behavior. Check the exported file in your editor or media inspector before reserving storage for a large batch.",
            zh: "这些数字用于规划，不代表每个 HappyConvert 输出都完全相同。实际采样率和声道数取决于解码后的输入和 FFmpeg 输出行为。为大型批次预留存储前，应在剪辑软件或媒体信息工具中检查导出文件。"
          }
        ],
        callout: {
          en: "If the calculated WAV is unnecessarily large, shorten the time range first. Switching to MP3 is a delivery decision, not the only way to control working storage.",
          zh: "如果估算出的 WAV 大得没有必要，应先缩短时间范围。切换到 MP3 属于交付格式决定，并不是控制工作存储的唯一方法。"
        }
      },
      {
        h2: {
          en: "WAV does not restore quality removed by the source codec",
          zh: "WAV 无法恢复源编码已经删除的音质"
        },
        p: [
          {
            en: "Many videos contain AAC audio recorded by a phone, camera, meeting platform, or screen recorder. When HappyConvert extracts that track to PCM WAV, FFmpeg decodes the AAC samples and writes their decoded values without another perceptual encode. The WAV is larger, but it still represents what survived the original AAC recording.",
            zh: "许多视频包含手机、相机、会议平台或录屏软件录制的 AAC 音频。HappyConvert 把它提取为 PCM WAV 时，FFmpeg 会解码 AAC 采样并写入解码后的数值，不再进行感知编码。WAV 变得更大，但它仍然只代表原始 AAC 录制中保留下来的内容。"
          },
          {
            en: "If the source has clipping, room echo, keyboard noise, low microphone level, or aggressive noise suppression, changing containers cannot remove those problems. WAV gives audio software a stable working file for repair, but equalization, denoising, de-reverberation, and manual editing are separate steps.",
            zh: "如果源文件存在爆音、房间混响、键盘噪声、麦克风电平过低或激进降噪，改变容器无法消除这些问题。WAV 为音频软件提供稳定的修复工作文件，但均衡、降噪、去混响和手工编辑属于后续步骤。"
          },
          {
            en: "Repeatedly converting a poor source to larger formats does not create detail. Keep the original video because future tools may decode or process it differently, and because it remains the reference for synchronization and content verification.",
            zh: "把较差的源文件反复转换为更大格式不会创造细节。应保留原视频，因为未来工具可能采用不同方式解码或处理它，而且原视频仍然是同步和内容核对的参考。"
          }
        ]
      },
      {
        h2: {
          en: "Prepare the WAV for a video editor or audio workstation",
          zh: "为视频剪辑软件或音频工作站准备 WAV"
        },
        p: [
          {
            en: "Use a filename that identifies the source and time range, such as `interview-cam-a-00h23m15s-00h35m40s.wav`. This prevents a detached audio file from losing its context. Keep a note of the source filename, extraction date, start offset, and whether the track is mono or stereo.",
            zh: "使用能识别源文件和时间范围的文件名，例如 `interview-cam-a-00h23m15s-00h35m40s.wav`，避免独立音频失去上下文。记录源文件名、提取日期、开始偏移，以及音轨是单声道还是立体声。"
          },
          {
            en: "After import, compare the waveform start with a visible clap, cursor click, spoken word, or another synchronization marker in the video. Long recordings can expose clock drift between separately recorded devices, but extracting audio from the same video should preserve the video's own timing over the selected range.",
            zh: "导入后，把波形开头与视频中可见的拍手、鼠标点击、说话词语或其他同步标记进行比较。长录制可能暴露不同设备之间的时钟漂移，但从同一个视频提取音频，应保留所选范围内视频自身的时间关系。"
          },
          {
            en: "Do not normalize, denoise, or convert channels merely because a WAV was created. First inspect peaks, noise floor, dialogue level, and channel content in the destination application. A stereo file may contain the same microphone in both channels, different microphones, or one empty channel; those cases require different decisions.",
            zh: "不要因为生成了 WAV 就立刻做响度归一、降噪或声道转换。先在目标应用中检查峰值、底噪、对白电平和声道内容。立体声文件可能在两个声道中包含同一麦克风、不同麦克风，或一个空声道，这些情况需要不同处理。"
          }
        ]
      },
      {
        h2: {
          en: "Multiple audio tracks and subtitles need separate attention",
          zh: "多音轨和字幕需要单独处理"
        },
        p: [
          {
            en: "Some MP4 and MKV files contain several audio streams: camera sound, a clean recorder feed, commentary, another language, or accessibility audio. A simple browser preview may play one default stream, and the extraction command may select a default audio stream rather than offering a full stream-mapping panel.",
            zh: "一些 MP4 和 MKV 文件包含多条音频流：相机声音、独立录音机干净音轨、评论音轨、另一种语言或无障碍描述。简单的浏览器预览可能只播放默认流，提取命令也可能选择默认音轨，而不是提供完整流映射面板。"
          },
          {
            en: "Listen before processing and listen again after export. If the WAV contains the wrong language or microphone, HappyConvert's current simple workflow may not expose the selection you need. Use desktop FFmpeg or an editor that lists every stream and lets you map the required track explicitly.",
            zh: "处理前先听，导出后再听。如果 WAV 包含错误的语言或麦克风，HappyConvert 当前的简单流程可能没有提供所需选择。此时应使用桌面 FFmpeg，或使用能够列出所有流并明确映射目标音轨的剪辑软件。"
          },
          {
            en: "Subtitles are not audio and will not appear in the WAV. If a transcript depends on burned-in captions rather than spoken sound, audio extraction alone cannot recover that text. Preserve the video or export subtitle data through a separate workflow.",
            zh: "字幕不是音频，不会出现在 WAV 中。如果转写内容依赖画面中烧录字幕，而不是实际语音，仅提取音频无法恢复这些文字。应保留视频，或通过单独流程导出字幕数据。"
          }
        ],
        callout: {
          en: "The correct format does not compensate for the wrong stream. Verify the speaker, language, and channel content before committing to a long export.",
          zh: "格式正确不能弥补音轨选择错误。开始长时间导出前，要确认说话者、语言和声道内容。"
        }
      },
      {
        h2: {
          en: "Browser performance and memory limits for WAV extraction",
          zh: "WAV 提取的浏览器性能与内存限制"
        },
        p: [
          {
            en: "Audio extraction is usually lighter than video re-encoding because HappyConvert does not need to create new video frames. It still must read the source container, decode the chosen audio, hold working data, and write an uncompressed output. A long source plus a large WAV can create significant browser memory pressure.",
            zh: "音频提取通常比视频重新编码轻，因为 HappyConvert 不需要生成新视频帧。但它仍然要读取源容器、解码所选音频、保存工作数据并写入未压缩输出。长源文件加上大型 WAV，仍可能产生明显的浏览器内存压力。"
          },
          {
            en: "The source file size is not the only concern. A highly compressed two-hour video may be modest on disk while its extracted stereo PCM WAV approaches or exceeds a gigabyte depending on sample rate. Estimate the output and shorten the range before loading several similar jobs.",
            zh: "源文件体积不是唯一问题。一个高度压缩的两小时视频在磁盘上可能不大，但提取出的立体声 PCM WAV 根据采样率可能接近或超过 1 GB。载入多个类似任务前，应估算输出并缩短范围。"
          },
          {
            en: "Close heavy tabs, keep the page active, and avoid starting with the longest file. Test one or two minutes to confirm the selected audio and output behavior. For batch extraction, multi-gigabyte sources, or many hours of recordings, desktop FFmpeg is more dependable.",
            zh: "关闭重型标签页，保持页面活动，不要一开始就处理最长文件。先测试一到两分钟，确认所选音频和输出行为。对于批量提取、数 GB 源文件或数小时录制，桌面 FFmpeg 更可靠。"
          }
        ]
      },
      {
        h2: {
          en: "A WAV handoff checklist before editing",
          zh: "进入剪辑前的 WAV 交接检查"
        },
        list: [
          {
            en: "Confirm that the exported duration matches the selected start and end range.",
            zh: "确认导出时长与所选开始和结束范围一致。"
          },
          {
            en: "Listen to the first and final ten seconds for clipped words or missing handles.",
            zh: "听开头和结尾各 10 秒，检查是否截断词语或缺少余量。"
          },
          {
            en: "Verify the expected speaker, language, microphone, and left/right channel content.",
            zh: "确认说话者、语言、麦克风和左右声道内容符合预期。"
          },
          {
            en: "Inspect sample rate, bit depth, and channel count in the destination editor.",
            zh: "在目标剪辑软件中检查采样率、位深和声道数。"
          },
          {
            en: "Record the source filename and timeline offset when synchronization will be required later.",
            zh: "之后需要同步时，记录源文件名和时间线偏移。"
          },
          {
            en: "Keep the source video until the WAV has been imported, synchronized, and backed up.",
            zh: "在 WAV 完成导入、同步和备份前，保留源视频。"
          }
        ]
      },
      {
        h2: {
          en: "Extract WAV audio from video for editing FAQ",
          zh: "视频提取 WAV 用于剪辑常见问题"
        },
        faqs: [
          {
            q: {
              en: "Can I extract only part of a video's audio as WAV?",
              zh: "可以只把视频的一部分提取为 WAV 吗？"
            },
            a: {
              en: "Yes. Set the start and end times before processing. Include a few seconds of extra audio on both sides when another editor may need room for fades, breaths, or a more precise cut.",
              zh: "可以。处理前设置开始和结束时间。如果其他剪辑师还需要制作淡入淡出、保留呼吸或精确切点，应在两侧各留几秒额外音频。"
            }
          },
          {
            q: {
              en: "Is 16-bit WAV sufficient for dialogue editing?",
              zh: "16 位 WAV 足够用于对白剪辑吗？"
            },
            a: {
              en: "It is a practical delivery and editing format for many video-derived dialogue tracks. It does not increase the precision of a compressed source, and specialized recording or mastering workflows may require different specifications.",
              zh: "对于许多从视频获得的对白音轨，16 位 WAV 是实用的交付和编辑格式。它不会增加压缩源的精度，专业录音或母带流程也可能要求其他规格。"
            }
          },
          {
            q: {
              en: "Why is there no sound in the exported WAV?",
              zh: "为什么导出的 WAV 没有声音？"
            },
            a: {
              en: "Check that the source preview contains audio in the selected range and that the expected track is the default stream. Also test the WAV in another player. Multi-track files may require explicit stream selection in desktop software.",
              zh: "检查源文件在所选范围内是否能预览声音，以及预期音轨是否为默认流；还可以用另一个播放器测试 WAV。多音轨文件可能需要桌面软件明确选择流。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/merge-mp4-without-re-encoding/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Merge MP4 Files Without Re-encoding",
      zh: "如何在不重新编码的情况下合并 MP4 文件"
    },
    description: {
      en: "Joining MP4 clips does not have to re-encode them. Here is when a stream-copy join works, which parameters have to match, and what to do when the clips differ.",
      zh: "合并 MP4 片段并不一定要重新编码。本文说明流拷贝合并的适用条件、需要对齐哪些参数，以及片段参数不一致时该怎么处理。"
    },
    category: { en: "Tutorials", zh: "实战教程" },
    readTime: { en: "7 min read", zh: "7 分钟阅读" },
    date: { en: "September 18, 2026", zh: "2026年9月18日" },
    toolLink: "/merge-video/",
    toolName: { en: "Free Video Merger", zh: "免费在线视频合并工具" },
    content: [
      {
        h2: {
          en: "What 'merge without re-encoding' actually means",
          zh: "「不重新编码的合并」到底指什么"
        },
        p: [
          {
            en: "An MP4 file is a container wrapping two compressed streams: one video, one audio. 'Merging without re-encoding' means the join copies the already-compressed packets from the end of clip A to the start of clip B and writes new container metadata around them. No frame is decoded, so no frame is re-compressed.",
            zh: "MP4 文件是一个封装容器，里面装着两条已经压缩好的流：一条视频、一条音频。「不重新编码的合并」指的是把片段 A 的压缩数据包按顺序接到片段 B 前面，再为它们重写一份容器索引。整个过程不解码任何一帧，因此也不会对任何一帧重新压缩。"
          },
          {
            en: "This is what FFmpeg calls stream copy, and it is the difference between a join that mostly moves bytes around and a join that has to decode and encode every frame again. The second one always costs more CPU time and always costs some quality, because H.264 and H.265 encoding are lossy processes.",
            zh: "FFmpeg 把这个操作称为流拷贝。它和「逐帧解码后再编码」的合并有本质区别：后者必然消耗更多 CPU 时间，也必然带来画质损失，因为 H.264 和 H.265 编码本身都是有损过程。"
          }
        ]
      },
      {
        h2: {
          en: "The five parameters that have to match",
          zh: "必须对齐的五个参数"
        },
        list: [
          {
            en: "Video codec and profile: H.264 High profile at 1080p behaves differently from H.265 Main at 4K, and the packets cannot simply be placed next to each other.",
            zh: "视频编码器与 Profile：1080p 的 H.264 High Profile 和 4K 的 H.265 Main 不能把数据包直接摆在一起。"
          },
          {
            en: "Resolution: a mix of 1920x1080 and 1280x720 clips breaks the assumption that every frame has the same geometry.",
            zh: "分辨率：混入 1920×1080 和 1280×720 两种片段，会打破「所有帧尺寸一致」这个前提。"
          },
          {
            en: "Frame rate: 30fps and 60fps footage produce different timestamp intervals, which is where stuttering and duration drift come from.",
            zh: "帧率：30fps 与 60fps 素材的时间戳间隔不同，这正是卡顿和时长漂移的来源。"
          },
          {
            en: "Audio codec, sample rate and channel count: AAC at 44.1kHz stereo and AAC at 48kHz mono are not interchangeable in a raw packet join.",
            zh: "音频编码、采样率与声道数：44.1kHz 立体声 AAC 和 48kHz 单声道 AAC 不能直接做数据包拼接。"
          },
          {
            en: "Sample aspect ratio: phone footage is often stored with non-square pixels, so the same pixel count can display at a different aspect ratio.",
            zh: "像素宽高比：手机素材常带非方形像素，因此相同的像素数可能显示成不同的画幅比例。"
          }
        ]
      },
      {
        h2: {
          en: "A sensible order of operations",
          zh: "一套稳妥的操作顺序"
        },
        list: [
          {
            en: "1. Queue the clips in the order you want them and check that order, because the join follows the list exactly.",
            zh: "1. 按想要的顺序把片段加入队列，并确认这个顺序 —— 合并严格按列表执行。"
          },
          {
            en: "2. Start with fast join. If every clip came from the same phone, the same camera or the same export preset, this path usually succeeds and barely touches your CPU.",
            zh: "2. 先用快速合并。如果所有片段来自同一台手机、同一台相机或同一套导出预设，这条路通常能成功，而且几乎不占用 CPU。"
          },
          {
            en: "3. Do not treat a finished job as proof that stream copy was valid. When the clips differ, ffmpeg sometimes exits with a success code and still writes a broken file: the muxer refuses to accept timestamps that go backwards, so the later clips' frames get dropped even though the container keeps reporting the first clip's resolution. If in doubt, switch to unified re-encode — it scales, pads and re-times every clip to the first one, which is the expensive part but also the reason it succeeds where stream copy cannot.",
            zh: "3. 别把「跑完了」当作流拷贝成功的证据。片段规格不一致时，ffmpeg 有时会返回成功码却写出一个坏文件：muxer 不接受倒退的时间戳，于是后面片段的帧被丢弃，而容器仍然声明着第一个片段的分辨率。拿不准就改用统一重编码 —— 它会以第一个片段为基准对其余片段做缩放、补边和帧率对齐，这一步代价更高，也正是它能在流拷贝做不到的地方成功的原因。"
          },
          {
            en: "4. Check the exported file on the device you actually care about, and check the join points rather than only the opening seconds.",
            zh: "4. 在您真正要用的设备上检查导出文件，重点看衔接处，而不是只看开头几秒。"
          }
        ]
      },
      {
        h2: {
          en: "What this costs you locally",
          zh: "本地处理的实际代价"
        },
        callout: {
          en: "Stream copy is cheap on CPU but not free on memory: the clips and the joined output all sit in your browser's RAM while the engine works. A handful of short clips merges comfortably; a stack of long 4K clips is better split into smaller batches on a desktop browser with free RAM.",
          zh: "流拷贝对 CPU 很友好，但对内存并不免费：处理期间所有片段与合并结果都需要同时停留在浏览器内存里。几段短视频合并很轻松；如果是一堆很长的 4K 片段，建议在内存充足的桌面浏览器上分批处理。"
        }
      },
      {
        h2: {
          en: "Merging without re-encoding FAQ",
          zh: "不重新编码合并常见问题"
        },
        faqs: [
          {
            q: {
              en: "Will the joined file be exactly the same quality as the originals?",
              zh: "合并后的文件画质和原片段完全一样吗？"
            },
            a: {
              en: "For the video and audio streams, yes: stream copy moves the existing compressed data without re-compressing it. What does change is the container, which gets rebuilt with new index and timing tables, plus one thumbnail frame the player may show.",
              zh: "对视频流和音频流来说是一样的：流拷贝只搬运已有的压缩数据，不重新压缩。真正变化的是封装本身 —— 索引与时间戳表会被重建，另外播放器可能会显示一个缩略图帧。"
            }
          },
          {
            q: {
              en: "Will the join tell me when the clips do not match?",
              zh: "片段规格不一致时，合并会告诉我吗？"
            },
            a: {
              en: "Not always, and that is the trap. One of the five matching parameters being different does not guarantee an error message. Sometimes ffmpeg exits non-zero and the mismatch is obvious. Other times it reports success and the damage is subtler: the muxer drops the frames it cannot place on a monotonic timeline, so the joined file is shorter than the sum of its parts and the second half is missing or out of sync. A stream-copy join cannot resize, resample or re-time anything, so a mismatched clip has to go through the unified re-encode path to be correct — and checking the join point yourself is still the honest way to be sure.",
              zh: "不一定，而这正是陷阱所在。五个对齐参数里有某一项不一致，并不保证会看到报错。有时 ffmpeg 返回非零退出码，问题一目了然；另一些时候它报告成功，而损坏更隐蔽：muxer 会丢弃无法放进单调时间线的帧，于是合并结果比各段之和更短，后半段要么缺失要么对不上。流拷贝无法缩放、重采样或调整时间基准，所以规格不同的片段必须走统一重编码才是正确的 —— 而自己检查一下衔接处，仍然是唯一诚实的确认方式。"
            }
          },
          {
            q: {
              en: "Can I join clips that have different durations?",
              zh: "时长不同的片段可以合并吗？"
            },
            a: {
              en: "Yes. Duration does not have to match; the result is simply the sum of the segments. Only codec, resolution, frame rate, audio layout and aspect ratio have to agree for stream copy to work.",
              zh: "可以。时长不需要一致，结果就是各段时长相加。流拷贝只要求编码、分辨率、帧率、音频布局和宽高比一致。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/merge-clips-from-different-devices/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "Joining Clips From Different Devices: Why the Merge Fails and How to Fix It",
      zh: "把不同设备拍的片段合并：为什么会失败，以及怎么解决"
    },
    description: {
      en: "A stream-copy join breaks when clips come from different phones, cameras or screen recorders. Here is how to spot the mismatch before you merge and which fix to apply.",
      zh: "当片段来自不同手机、相机或录屏软件时，流拷贝合并会失败。本文说明如何提前发现参数不一致，以及该采用哪种修复方式。"
    },
    category: { en: "Troubleshooting", zh: "问题解答" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "September 18, 2026", zh: "2026年9月18日" },
    toolLink: "/merge-video/",
    toolName: { en: "Free Video Merger", zh: "免费在线视频合并工具" },
    content: [
      {
        h2: {
          en: "Why the problem only appears when the sources differ",
          zh: "为什么只有混用素材时才会出问题"
        },
        p: [
          {
            en: "Merging files from one single source is the easy case, because a phone or camera keeps the same encoder settings every time you press record. Android phone, iPhone, DSLR and OBS screen recorder each make their own choices about resolution, frame rate, audio sample rate and pixel aspect ratio, and those choices are baked into the file.",
            zh: "同一台设备拍的短片是最简单的情况：手机或相机每次按下录制时都使用同一套编码设置。但安卓手机、iPhone、单反和 OBS 录屏各自对分辨率、帧率、音频采样率和像素宽高比有自己的默认选择，而这些选择已经被写入文件本身。"
          },
          {
            en: "That is why a merge that worked yesterday can fail today: the files look identical in a file browser, but the streams inside them were encoded by different settings. The file name extension tells you nothing about this.",
            zh: "正因如此，昨天能顺利合并的流程今天可能失败：在文件管理器里两个文件看起来一样，但内部的流是用不同设置编出来的。扩展名完全说明不了这件事。"
          }
        ]
      },
      {
        h2: {
          en: "How to spot the mismatch before you merge",
          zh: "合并前怎么发现参数不一致"
        },
        list: [
          {
            en: "Check resolution first. Open each clip in a player and note the reported width and height. 1920x1080 plus 3840x2160 is an obvious mismatch.",
            zh: "先看分辨率。用播放器打开每个片段，记下显示的宽高。1920×1080 和 3840×2160 混在一起是明显的不一致。"
          },
          {
            en: "Watch for frame rate differences. 30fps and 60fps clips concatenated without normalisation produce visible stutter at the join point and a drifting total duration.",
            zh: "注意帧率差异。30fps 与 60fps 片段在不做归一的情况下拼接，衔接处会看到卡顿，总时长也会漂移。"
          },
          {
            en: "Listen for the audio. Clips with no audio track at all are a common cause, and so are clips recorded with different sample rates such as 44.1kHz versus 48kHz.",
            zh: "注意声音。某个片段完全没有音轨是很常见的原因，采样率不同（例如 44.1kHz 与 48kHz）也会造成问题。"
          },
          {
            en: "Check orientation. A clip recorded in portrait mode is a rotated landscape stream with a rotation flag, which stream copy carries over unchanged.",
            zh: "注意方向。竖屏录制的片段本质上是一段横向流加上旋转标记，流拷贝会原样保留这个标记。"
          }
        ]
      },
      {
        h2: {
          en: "Three fixes, in order of preference",
          zh: "三种解决方式，按推荐顺序排列"
        },
        list: [
          {
            en: "1. Merge the matching clips together first, then handle the odd one separately. If three of four clips came from one phone, joining those three is the cheapest operation you can do.",
            zh: "1. 先把参数一致的片段合并，再单独处理那个例外。如果四段里有三段来自同一台手机，先合并这三段是成本最低的做法。"
          },
          {
            en: "2. Re-export the odd clip with the same settings as the rest, then merge everything with stream copy. This costs one re-encode instead of re-encoding the whole join at the end.",
            zh: "2. 把那个例外片段按其他片段的设置重新导出一次，然后再整体走流拷贝合并。这样只付出一次重编码的代价，而不是到最后把整个合并流程全部重编码一遍。"
          },
          {
            en: "3. Use unified re-encode for the whole job. The first clip defines the target resolution and frame rate, and every other clip is scaled, padded and re-timed to match it. It always works, and it is the slowest option.",
            zh: "3. 整个合并统一走重编码。以第一个片段的分辨率和帧率为目标，其余片段全部做缩放、补边和帧率对齐。这条路一定能成功，也是最慢的一条。"
          }
        ]
      },
      {
        h2: {
          en: "Why the browser makes this trade-off visible",
          zh: "为什么在浏览器里这个取舍格外明显"
        },
        callout: {
          en: "Unified re-encode runs on your own CPU inside the browser, so its duration scales with total footage length rather than with how fast your connection is. A ten-minute 1080p join is usually fine; a pile of 4K clips needs a desktop browser with free RAM and is best done in smaller batches.",
          zh: "统一重编码由您本机的 CPU 在浏览器内完成，因此耗时随素材总长度增长，而和网络速度无关。十分钟的 1080p 合并通常没问题；一堆 4K 片段则需要内存充足的桌面浏览器，并且建议分批处理。"
        }
      },
      {
        h2: {
          en: "Different-device merge FAQ",
          zh: "跨设备合并常见问题"
        },
        faqs: [
          {
            q: {
              en: "Why does the merged video show black bars or a distorted frame in places?",
              zh: "为什么合并后的视频有的地方出现黑边或画面变形？"
            },
            a: {
              en: "That is what happens when clips of different aspect ratios are stacked without normalisation. Unified re-encode adds padding so the frame keeps its proportions, which is why black bars appear around the narrower clip instead of stretching it.",
              zh: "当宽高比不同的片段在未归一的情况下拼接时就会出现这种情况。统一重编码会补边以保持画幅比例，因此较窄的片段四周出现黑边，而不是被拉伸变形。"
            }
          },
          {
            q: {
              en: "Can a clip with no audio track sit in the middle of a merged file?",
              zh: "没有音轨的片段能放在合并文件的中间吗？"
            },
            a: {
              en: "With unified re-encode it is handled by re-encoding the audio together, and the silent section stays silent. With a raw stream-copy join the missing track is one of the reasons the join can fail, so check the audio layout first.",
              zh: "走统一重编码时，音频会被一起重新编码，无声段落就保持无声。走纯流拷贝拼接时，缺失的音轨正是可能失败的原因之一，因此请先检查音轨布局。"
            }
          },
          {
            q: {
              en: "Is it better to fix the clips or to let the tool re-encode everything?",
              zh: "应该先修素材，还是直接让工具全部重编码？"
            },
            a: {
              en: "Fixing the odd clip costs one re-encode of that clip and keeps the rest untouched. Re-encoding the whole join costs quality and CPU time on every segment, so fix first when you can and fall back to re-encode when you cannot.",
              zh: "先修那个例外片段只需对它做一次重编码，其余片段保持原样。整体重编码会让每一段都付出画质和 CPU 时间的代价，因此能修就先修，修不了再回退到整体重编码。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/convert-m4a-to-mp3-online/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How to Convert M4A to MP3 Without Uploading Your Recording",
      zh: "如何把 M4A 转成 MP3，而不用上传你的录音"
    },
    description: {
      en: "M4A voice memos and downloads are not always accepted everywhere. Here is how to convert them to MP3 in the browser, what quality to expect, and what the conversion costs.",
      zh: "M4A 录音和下载文件并不总是到处都能用。本文说明如何在浏览器里把它转成 MP3、音质会发生什么变化，以及这一步的实际代价。"
    },
    category: { en: "Tutorials", zh: "实战教程" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "September 18, 2026", zh: "2026年9月18日" },
    toolLink: "/convert-audio/",
    toolName: { en: "Free Audio Converter", zh: "免费在线音频格式转换器" },
    content: [
      {
        h2: {
          en: "Why M4A and MP3 are not interchangeable labels",
          zh: "为什么 M4A 和 MP3 不是两个可以互换的名字"
        },
        p: [
          {
            en: "M4A is an audio-only MP4 container, and the audio inside it is almost always AAC. MP3 is a different container with a different codec inside. Converting from one to the other means decoding the AAC samples and encoding them again as MP3, because the two formats store audio in different ways.",
            zh: "M4A 是一个只装音频的 MP4 容器，里面的音频几乎总是 AAC。MP3 则是另一种容器，里面对应的是另一套编码格式。两者存储音频的方式不同，因此从一种转成另一种，本质上是先把 AAC 采样解码出来，再重新编码成 MP3。"
          },
          {
            en: "This matters because it explains the two things people usually ask about: why the file size changes, and why the conversion is not 'free' in quality terms even though it costs nothing in money terms.",
            zh: "这一点解释了大家最常问的两个问题：为什么文件体积会变，以及为什么这次转换在金钱上免费、在音质上却并非「零代价」。"
          }
        ]
      },
      {
        h2: {
          en: "What quality to actually expect",
          zh: "实际上应该期待什么样的音质"
        },
        p: [
          {
            en: "AAC to MP3 is a lossy-to-lossy conversion, which is the least favourable case. The first encode already discarded detail, and the second encode discards a little more. In practice a 192kbps or 256kbps MP3 export of a voice memo or a lecture recording is indistinguishable for listening purposes, while music with wide dynamics is where the loss becomes easier to hear.",
            zh: "AAC 转 MP3 属于「有损转有损」，是最不理想的一种情况：第一次编码已经舍弃了细节，第二次编码又会再丢一点。实际使用中，把语音备忘或课程录音导出成 192kbps 或 256kbps 的 MP3，用于收听基本听不出差别；而动态范围大的音乐，才是损失比较容易听出来的场景。"
          },
          {
            en: "The important consequence: choosing a higher bitrate than the source does not repair anything. If the recording arrived at 128kbps, exporting at 320kbps only avoids adding a little more damage and makes the file bigger.",
            zh: "由此得出一个重要结论：把码率设置得比源文件更高，并不会修复任何东西。如果录音原本就是 128kbps，以 320kbps 导出只能避免再增加一点损伤，同时让文件变大。"
          }
        ]
      },
      {
        h2: {
          en: "Doing it in the browser",
          zh: "在浏览器里完成转换"
        },
        list: [
          {
            en: "1. Add the M4A file to the audio converter. It also accepts MP3, WAV, FLAC, OGG, AIFF, and the audio track inside MP4, MOV, MKV or WebM files.",
            zh: "1. 把 M4A 文件加入音频转换工具。它也接受 MP3、WAV、FLAC、OGG、AIFF，以及 MP4、MOV、MKV、WebM 文件里的音轨。"
          },
          {
            en: "2. Choose MP3 as the output format. For recordings, 192kbps is a reasonable default; use 256kbps or 320kbps when the material is music.",
            zh: "2. 输出格式选择 MP3。如果是语音录音，192kbps 是合理的默认值；素材是音乐时可以用 256kbps 或 320kbps。"
          },
          {
            en: "3. Run the task. Decoding and encoding both happen on your own machine, so the duration scales with recording length and your CPU rather than with your internet speed.",
            zh: "3. 开始处理。解码和编码都在您本机完成，因此耗时随录音长度和 CPU 性能变化，而与网络速度无关。"
          },
          {
            en: "4. Compare a short segment before converting the whole archive. If the source is already lossy, that test tells you whether the extra step is worth doing at all.",
            zh: "4. 批量转换整个归档前，先对比一小段。如果源文件本身已经有损，这个小测试能告诉您这一步是否值得做。"
          }
        ]
      },
      {
        h2: {
          en: "What the local route costs",
          zh: "本地路线的实际代价"
        },
        callout: {
          en: "Nothing is uploaded, so a private interview recording never leaves your machine. The trade-off is that the file has to fit in your browser's memory, and that a long recording keeps your CPU busy for a while — a one-hour lecture is a realistic job, a 4K video you only need the audio from is better handled on a desktop.",
          zh: "文件不需要上传，因此私密访谈录音不会离开您的电脑。代价是它必须能放进浏览器内存，而且较长的录音会让 CPU 忙上一段时间 —— 一小时课程录音属于合理范围；如果您只是要从一个 4K 视频里取音频，建议在桌面浏览器上处理。"
        }
      },
      {
        h2: {
          en: "M4A to MP3 FAQ",
          zh: "M4A 转 MP3 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is the MP3 conversion lossless?",
              zh: "转成 MP3 是无损的吗？"
            },
            a: {
              en: "No. MP3 is a lossy format, and going from AAC to MP3 means encoding the audio a second time, so a small amount of additional detail is discarded. If you need the audio as it currently exists, export WAV or FLAC instead of MP3.",
              zh: "不是。MP3 是有损格式，而从 AAC 转成 MP3 意味着音频被编码了第二次，因此会再舍弃少量细节。如果需要原样保留音频现有内容，请导出 WAV 或 FLAC，而不是 MP3。"
            }
          },
          {
            q: {
              en: "Does 32-bit float WAV or a very high bitrate make the recording better?",
              zh: "用更高位深的 WAV 或极高码率能让录音变好吗？"
            },
            a: {
              en: "No. Bit depth and bitrate describe how precisely a file stores what it holds; they cannot recreate information that an earlier encode removed. Converting a 128kbps source to a very high bitrate produces a bigger file with the same content.",
              zh: "不能。位深和码率描述的是「文件保存现有内容有多精确」，无法凭空还原之前编码已经移除的信息。把 128kbps 的源文件转成极高码率，只会得到一个内容相同而体积更大的文件。"
            }
          },
          {
            q: {
              en: "Can I convert a batch of recordings at once?",
              zh: "可以一次批量转换多个录音吗？"
            },
            a: {
              en: "Process them one at a time. Each job holds the source file and the decoded audio in browser memory, so running several large recordings together is the fastest way to hit the memory ceiling rather than the fastest way to finish.",
              zh: "建议逐个处理。每个任务都需要把源文件和解码后的音频放进浏览器内存，因此同时跑多个大录音，只会更快撞上内存上限，而不是更快完成。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/wav-vs-flac-vs-mp3/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "WAV vs FLAC vs MP3: Which One Should You Export?",
      zh: "WAV、FLAC、MP3 到底该导出哪一个？"
    },
    description: {
      en: "A practical comparison of WAV, FLAC and MP3 for editing, archiving and sharing, including where the quality is actually lost and when a conversion cannot help.",
      zh: "从剪辑、归档和分享三个用途出发对比 WAV、FLAC 与 MP3，说明音质到底在哪一步损失，以及什么情况下转换根本帮不上忙。"
    },
    category: { en: "Guide", zh: "选购指南" },
    readTime: { en: "7 min read", zh: "7 分钟阅读" },
    date: { en: "September 18, 2026", zh: "2026年9月18日" },
    toolLink: "/convert-audio/",
    toolName: { en: "Free Audio Converter", zh: "免费在线音频格式转换器" },
    content: [
      {
        h2: {
          en: "Three formats, three different jobs",
          zh: "三种格式，对应三种用途"
        },
        p: [
          {
            en: "WAV, FLAC and MP3 are often listed as if they were ranked by quality, but the more useful framing is that they solve different problems. One stores raw samples, one stores them compactly without discarding any, and one deliberately discards some to make files small.",
            zh: "WAV、FLAC、MP3 常被当作一个「音质排行榜」来排，但更有用的视角是：它们解决的是不同问题。一个存原始采样，一个在不丢弃数据的前提下把体积压小，另一个则主动舍弃一部分数据来换取小体积。"
          }
        ]
      },
      {
        h2: {
          en: "The decision list I work from",
          zh: "我实际使用的决策清单"
        },
        list: [
          {
            en: "Editing or mixing in a DAW → WAV. It stores uncompressed PCM, so every edit and export avoids an extra round of lossy encoding. The cost is size: roughly ten times an MP3 of the same duration.",
            zh: "要在剪辑或混音软件里继续处理 → WAV。它存储未压缩的 PCM，每次编辑和导出都不会再叠加一次有损编码。代价是体积：约为同时长 MP3 的十倍左右。"
          },
          {
            en: "Archiving a recording you may edit later → FLAC. It keeps the samples that are present in the file while taking noticeably less space than WAV, so it is the better shelf format of the two.",
            zh: "要归档一段以后可能还要剪的录音 → FLAC。它完整保留文件中现有的采样数据，同时比 WAV 明显更省空间，因此在两者之间更适合长期存放。"
          },
          {
            en: "Sending to another person or playing in a car → MP3 at 192kbps or above. Compatibility is the whole point here, and 192kbps to 256kbps is transparent enough for speech and most casual listening.",
            zh: "要发给别人或在车载播放器里听 → 192kbps 以上的 MP3。这个场景的核心是兼容性，而 192kbps 到 256kbps 对语音和大多数日常收听已经足够。"
          },
          {
            en: "Uploading to a web player or a small download page → OGG/Opus at a lower bitrate, because it holds up better than MP3 when the bitrate is reduced.",
            zh: "要放到网页播放器或提供小体积下载 → 用更低码率的 OGG/Opus，因为在低码率下它比 MP3 表现更好。"
          },
          {
            en: "Feeding a video editor → WAV or AIFF, whichever the editor prefers. Both are uncompressed PCM and behave the same in a timeline.",
            zh: "要喂给视频剪辑软件 → 按软件偏好选择 WAV 或 AIFF。两者都是未压缩 PCM，在时间轴上的表现一致。"
          }
        ]
      },
      {
        h2: {
          en: "Where quality is actually lost",
          zh: "音质究竟在哪一步损失"
        },
        p: [
          {
            en: "Loss happens at encode time, not at export time. A phone voice memo recorded to AAC already lost detail the moment it was saved. Turning that file into WAV afterwards does not restore anything: WAV is simply a container that can hold the decoded result exactly, including the damage.",
            zh: "损失发生在「编码的那一刻」，而不是「导出的那一刻」。手机录音保存成 AAC 时就已经丢过一次细节。事后再把它转成 WAV，并不能还原任何东西：WAV 只是一个能精确保存解码结果的容器，包括那部分损伤。"
          },
          {
            en: "That is also why the same recording can sound identical in WAV and in a well-made 256kbps MP3. If the source was already lossy, both files are carrying the same information, and only one of them is large.",
            zh: "这也解释了为什么同一段录音在 WAV 和制作良好的 256kbps MP3 里听起来可能一模一样：如果源文件本身已经有损，两者承载的信息相同，区别只在于其中一个体积大得多。"
          }
        ]
      },
      {
        h2: {
          en: "What happens in the browser",
          zh: "在浏览器里会发生什么"
        },
        callout: {
          en: "The conversion runs on your own CPU, so a long file takes real time and both the source and the decoded audio occupy browser memory while it works. That is the honest ceiling: a long lecture is comfortable, an hour of 96kHz multitrack audio is not a browser job.",
          zh: "转换由您本机的 CPU 完成，因此长文件确实需要时间，而且处理期间源文件和解码后的音频都会占用浏览器内存。这就是诚实的上限：一段较长的课程录音没问题，一小时的 96kHz 多轨音频不适合放在浏览器里处理。"
        }
      },
      {
        h2: {
          en: "WAV, FLAC and MP3 FAQ",
          zh: "WAV、FLAC、MP3 常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is FLAC really the same quality as WAV?",
              zh: "FLAC 的音质真的和 WAV 一样吗？"
            },
            a: {
              en: "For the audio content, yes. FLAC stores the same sample values in a more compact form and decodes back to the identical PCM stream. The difference between them is file size and how quickly an editor can read them, not fidelity.",
              zh: "就音频内容而言是一样的。FLAC 用更紧凑的方式存储相同的采样值，解码后能得到完全一致的 PCM 数据流。两者的差别在文件体积和剪辑软件读取速度，而不在保真度。"
            }
          },
          {
            q: {
              en: "Why did my WAV file become smaller after converting to MP3 but sound the same?",
              zh: "为什么转成 MP3 后文件小了很多，听起来却没区别？"
            },
            a: {
              en: "Because perceptual encoders remove information the ear is unlikely to miss, especially in quiet or masked frequency ranges. On speech and most music this is hard to notice at 192kbps and above, which is exactly the trade the format was designed around.",
              zh: "因为有损编码器会移除人耳大概率注意不到的信息，尤其是在安静或被人声掩蔽的频段。对语音和大多数音乐来说，192kbps 以上很难听出区别 —— 这正是这类格式设计时所做的取舍。"
            }
          },
          {
            q: {
              en: "Can converting an MP3 to WAV make it sound better?",
              zh: "把 MP3 转成 WAV 会让它更好听吗？"
            },
            a: {
              en: "No. It changes the container, not the information. The only practical reason to do it is compatibility: some editors and playback chains handle WAV more predictably. If you want better audio, the fix has to happen at recording and encoding time.",
              zh: "不会。它改变的只是容器，不是信息本身。这样做唯一实际的理由是兼容性：某些剪辑软件和处理链路对 WAV 的支持更可预期。想要更好的音质，只能在录制和编码环节解决。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/trim-video-accuracy/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "Why a Trimmed Video Comes Out Slightly Longer Than You Set",
      zh: "剪出来的视频为什么比设定值长一点？"
    },
    description: {
      en: "Fast trimming skips re-encoding, so it finishes almost instantly and leaves the picture untouched. It also runs a few frames past the mark you chose. We measured where those extra milliseconds come from and when they actually matter.",
      zh: "快速剪切不重新编码，几乎瞬间完成，画面原封不动；它同时也会比你设定的位置多跑出几帧。我们实测了这几分之一秒来自哪里，以及什么时候真的需要在意。"
    },
    category: { en: "Guide", zh: "原理指南" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "September 19, 2026", zh: "2026年9月19日" },
    toolLink: "/cut-video/",
    toolName: { en: "Cut Video Online", zh: "在线剪切视频" },
    content: [
      {
        h2: {
          en: "The short answer",
          zh: "先说结论"
        },
        p: [
          {
            en: "The trimmer has two paths. Fast trim copies the original video and audio streams without re-encoding, which is why it finishes in a fraction of a second and leaves every pixel as it was — but the file it hands back runs a couple of frames past the point you picked. Select a 2.000 second range and you get 2.133 seconds. Re-encode the same range and you get 2.000000 seconds, to the frame.",
            zh: "剪切工具有两条路径。快速剪切直接复制原始的视频流与音频流、不做重新编码，因此瞬间完成、画面一个像素都没动 —— 但它交回来的文件会比你选定的位置多跑出几帧：选 2.000 秒的区间，拿回来的是 2.133 秒。同一区间改用重编码，得到 2.000000 秒，一帧不差。"
          },
          {
            en: "The overshoot is two to four frames — 0.07 to 0.13 seconds on a 30fps clip. It is not caused by keyframe spacing, and it does not get worse as the video gets longer. Cutting a talking-head clip for a social post, you will never notice it. Cutting to a music beat or lining up subtitle cues, you will.",
            zh: "多出来的长度在 2 到 4 帧之间，30fps 素材上就是 0.07 到 0.13 秒。它和关键帧间隔无关，也不会因为视频变长而变严重。剪一段口播发社交媒体，你基本察觉不到；要卡音乐节拍或对齐字幕，就会碰到它。"
          }
        ]
      },
      {
        h2: {
          en: "What we measured",
          zh: "实测数据"
        },
        p: [
          {
            en: "We pushed the same range through both paths on identical 640x360 30fps source clips, then read the results back with ffprobe.",
            zh: "我们让同一条区间在两套路径上各跑一遍，素材为完全相同的 640x360、30fps 片段，再用 ffprobe 读回结果。"
          }
        ],
        list: [
          {
            en: "2.000 s range (1.5 s to 3.5 s): fast trim returned 2.133 s over 62 frames. Re-encode returned 2.000000 s over 60 frames.",
            zh: "目标 2.000 秒（1.5s 到 3.5s）：快速剪切输出 2.133 秒 / 62 帧；重编码输出 2.000000 秒 / 60 帧。"
          },
          {
            en: "10.000 s range (5.0 s to 15.0 s): fast trim returned 10.133 s over 302 frames. Re-encode returned exactly 10.000000 s over 300 frames.",
            zh: "目标 10.000 秒（5.0s 到 15.0s）：快速剪切输出 10.133 秒 / 302 帧；重编码精确输出 10.000000 秒 / 300 帧。"
          },
          {
            en: "A range starting exactly on a keyframe (2.0 s to 4.0 s): fast trim still returned 2.067 s. Lining the cut up with a keyframe does not remove the drift.",
            zh: "起点正好落在关键帧上的区间（2.0s 到 4.0s）：快速剪切依然输出 2.067 秒。把剪切点对准关键帧并不能消除这个偏差。"
          },
          {
            en: "Four source clips with keyframes every 1, 2, 5 and 10 seconds: fast trim returned 2.133 s on all four. Keyframe spacing changed nothing.",
            zh: "四段素材，关键帧间隔分别为 1、2、5、10 秒：快速剪切在四段上都输出 2.133 秒。关键帧间隔完全没有影响。"
          }
        ]
      },
      {
        h2: {
          en: "It is the start that stays exact, not the end",
          zh: "准确的是起点，不是结尾"
        },
        p: [
          {
            en: "The usual explanation for trimming inaccuracy is keyframe alignment — the claim that a copy-mode cut snaps back to the nearest keyframe. Our own test says otherwise. We compared the decoded pixels of the output's first frame against every frame of the source: the first frame of a 1.5 s to 3.5 s fast trim is pixel-identical to the source frame sitting at exactly 1.500 s.",
            zh: "关于剪切不精确，最常见的解释是「关键帧对齐」—— 说复制模式的剪切点会吸附到最近的关键帧上。我们自己的实测不支持这个说法。把输出首帧的解码像素与源文件的每一帧逐一比对后，1.5s 到 3.5s 快速剪切的第 0 帧与源文件 1.500 秒那一帧像素完全一致。"
          },
          {
            en: "The drift is at the tail. Dump the output's frame timestamps and the last two frames stop being evenly spaced: they land around 2.033 s and 2.100 s, where a steady 30fps cadence would put them at 2.000 s and 2.033 s. Nothing is duplicated or dropped from the picture itself; the packets at the end of your range simply do not fall on clean frame boundaries, and a stream copy is not allowed to rewrite them.",
            zh: "偏差出在结尾。把输出的帧时间戳列出来，最后两帧就不再有均匀间隔：它们落在 2.033 秒和 2.100 秒附近，而标准的 30fps 节奏应该把这两帧放在 2.000 秒和 2.033 秒。画面本身没有被复制或丢帧，只是你选定区间的末尾那几个数据包本来就不落在整齐的帧边界上，而流拷贝不被允许改写它们。"
          }
        ]
      },
      {
        h2: {
          en: "Which path to pick",
          zh: "该选哪条路"
        },
        list: [
          {
            en: "Speed, or the exact length does not matter: fast trim. On a 30-second test clip, cutting a 10-second range took 0.03 s against 0.26 s for re-encoding, and the encoded picture was never touched.",
            zh: "只要快、长度差一点无所谓：用快速剪切。在一段 30 秒测试素材上剪 10 秒区间，快速剪切耗时 0.03 秒，重编码耗时 0.26 秒，而且原始编码画面一个比特都没动。"
          },
          {
            en: "Cutting to a beat, a subtitle cue or a fixed time slot: re-encode. It costs a little time and one generation of quality, and it lands on the frame you asked for.",
            zh: "要卡节拍、对齐字幕、或必须凑够固定时长：用重编码。代价是一点时间和一代画质，换来的是精确落在你指定的那一帧上。"
          },
          {
            en: "Trimming clips that will then be merged: re-encode. Each clip carries its own tail drift, and joining several fast-trimmed segments adds them up.",
            zh: "剪完还要把多段拼起来：建议重编码。每一段都带着自己的尾部偏差，把若干快速剪切的片段接起来会把这些偏差叠加在一起。"
          },
          {
            en: "Output size is not a reliable reason to pick either one. In our test the 10-second fast trim came out at 1.34 MB and the re-encode at 0.83 MB, because CRF 23 re-compresses from scratch. Smaller is not the same as better here.",
            zh: "文件大小不适合作为选择依据。实测同一条 10 秒区间，快速剪切输出 1.34 MB，重编码输出 0.83 MB —— 后者小是因为它用 CRF 23 从头重新压缩了一遍。更小并不等于更好。"
          }
        ]
      },
      {
        h2: {
          en: "What this costs in the browser",
          zh: "在浏览器里的实际代价"
        },
        callout: {
          en: "Two things differ from a desktop command line. Both paths run on your own machine inside WebAssembly, so the 0.03 s against 0.26 s gap above becomes a much longer wait in absolute terms — the ratio is what carries over, not the numbers. And fast trim is genuinely cheap here: it never starts an encoder, so a long clip barely touches the CPU even though the file still has to be read into the browser first.",
          zh: "与桌面命令行有两点不同。两条路径都在您本机的 WebAssembly 里跑，所以上面 0.03 秒对 0.26 秒的差距在绝对值上会变成更长的等待 —— 能沿用下来的是这个比例，而不是具体数字。另外快速剪切在浏览器里确实很轻：它根本不启动编码器，因此即使源文件需要先读进浏览器，长片段的 CPU 占用也几乎可以忽略。"
        }
      },
      {
        h2: {
          en: "Trimming accuracy FAQ",
          zh: "剪切精度常见问题"
        },
        faqs: [
          {
            q: {
              en: "Does fast trim reduce quality?",
              zh: "快速剪切会降低画质吗？"
            },
            a: {
              en: "No. It copies the existing encoded streams instead of decoding and re-encoding them, so the picture and sound are the ones already in your file. The only thing it cannot guarantee is that the first and last frames land exactly where you asked.",
              zh: "不会。它复制的是文件里已有的编码流，而不是解码后重新编码，因此画面和声音就是你原文件里的那一份。它唯一无法保证的，是首尾两帧正好落在你指定的位置上。"
            }
          },
          {
            q: {
              en: "Why did the re-encoded file come out smaller?",
              zh: "为什么重编码后的文件反而更小？"
            },
            a: {
              en: "Because it is a fresh encode at CRF 23, which discards detail the encoder considers expendable. On easy material that saves a lot of space; on detailed footage it can just as easily come out larger. Size is a side effect of the CRF you pick, not a signal of quality.",
              zh: "因为它是用 CRF 23 重新编码了一遍，会舍弃编码器认为可以舍弃的细节。素材简单时能省下不少空间，细节丰富时也可能反而更大。文件大小是所选 CRF 的副产品，不是画质的信号。"
            }
          },
          {
            q: {
              en: "Can I delete a section from the middle of a video here?",
              zh: "可以用这个工具删掉视频中间的一段吗？"
            },
            a: {
              en: "No — the trimmer outputs one continuous range, from a start point to an end point. To cut something out of the middle, trim the part before it and the part after it, then join those two files with the merge tool.",
              zh: "不能 —— 剪切工具输出的是从起点到终点的一段连续区间。要去掉中间一段，就把它前面和后面的部分各剪出来，再用合并工具把这两个文件接起来。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/gif-washed-out-colors/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "Why Your GIF Looks Washed Out (And Why the File Is So Big)",
      zh: "GIF 为什么发灰、为什么这么大？"
    },
    description: {
      en: "GIF caps every frame at 256 colours, so gradients and dark scenes turn into bands — and the file still lands 20 to 30 times larger than an MP4 of the same clip. Here is what each setting actually costs, measured.",
      zh: "GIF 每一帧最多只能有 256 种颜色，于是渐变和暗部变成一层层色带；即便如此，文件仍然比同一段 MP4 大 20 到 30 倍。下面是用实测数字标出的每一项设置到底在花什么。"
    },
    category: { en: "Guide", zh: "原理指南" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "September 19, 2026", zh: "2026年9月19日" },
    toolLink: "/video-to-gif/",
    toolName: { en: "Video to GIF Converter", zh: "视频转 GIF 动图工具" },
    content: [
      {
        h2: {
          en: "The short answer",
          zh: "先说结论"
        },
        p: [
          {
            en: "Both complaints come from the same place: GIF is a format from 1987. It stores at most 256 colours per frame and has no real inter-frame compression, only simple reuse of unchanged regions. A gradient therefore collapses into visible bands, while the file still ends up several times larger than a video of the same clip. In our test footage a single source frame held 5,751 distinct colours; the exported GIF frame held 246.",
            zh: "两个抱怨来自同一个地方：GIF 是 1987 年的格式。它每帧最多保存 256 种颜色，也没有真正的帧间压缩，只是简单复用没变化的区域。于是渐变塌成一层层色带，而文件依然比同一段视频大出好几倍。实测中，源文件一帧有 5,751 种颜色，导出的 GIF 一帧只有 246 种。"
          }
        ]
      },
      {
        h2: {
          en: "Where the colours are lost",
          zh: "颜色是在哪一步丢掉的"
        },
        p: [
          {
            en: "Before writing any frame, the encoder has to decide which 256 colours it is allowed to use. Ours does it in two passes: first it scans the whole clip and builds one palette, then it maps every frame onto that palette. Doing it in two passes is why flat areas stay clean instead of shimmering — a single-pass encoder picks colours frame by frame and the palette can shift underneath you.",
            zh: "在写出任何一帧之前，编码器必须先决定它只能用哪 256 种颜色。我们的做法是两遍：先扫描整段素材生成一张调色板，再把每一帧映射到这张调色板上。两遍法的好处是平坦区域保持干净、不会闪烁 —— 单遍编码器逐帧挑色，调色板会在你脚下不断变化。"
          },
          {
            en: "The catch is that the palette is global. A clip containing both a sunset and a dark blue night sky has to split its 256 slots between two very different colour ranges, and that is when the bands get obvious. This is also why GIF handles flat UI screens and simple illustrations far better than photography and film.",
            zh: "代价是这张调色板是全局的。一段同时包含日落和深蓝夜空的素材，必须把 256 个槽位分给两个差别很大的色域，色带就是在这些素材上变得明显。这也解释了为什么 GIF 处理纯色界面和简单插画的效果，远好于照片和影片。"
          }
        ]
      },
      {
        h2: {
          en: "What each setting costs",
          zh: "每一项设置花掉多少体积"
        },
        p: [
          {
            en: "All of the numbers below come from the same filter chain the tool runs, on a colour-heavy 640x360 source clip.",
            zh: "下面所有数字都来自与工具完全相同的滤镜链，素材是一段色彩丰富的 640x360 片段。"
          }
        ],
        list: [
          {
            en: "Width, at 4 seconds and 10fps: 320px gives 892 KB, 480px gives 1.86 MB, 640px gives 3.10 MB.",
            zh: "宽度（4 秒、10fps）：320px 得到 892 KB，480px 得到 1.86 MB，640px 得到 3.10 MB。"
          },
          {
            en: "Frame rate, at 480px and 4 seconds: 8fps gives 1.48 MB, 10fps gives 1.86 MB, 15fps gives 2.83 MB, 20fps gives 3.77 MB.",
            zh: "帧率（480px、4 秒）：8fps 得到 1.48 MB，10fps 得到 1.86 MB，15fps 得到 2.83 MB，20fps 得到 3.77 MB。"
          },
          {
            en: "Length, at 480px and 10fps: 2 seconds gives 897 KB, 4 seconds gives 1.86 MB, 6 seconds gives 2.71 MB.",
            zh: "时长（480px、10fps）：2 秒得到 897 KB，4 秒得到 1.86 MB，6 秒得到 2.71 MB。"
          },
          {
            en: "For comparison, 4 seconds at 480px and 10fps as H.264 MP4 comes to 70.7 KB. The GIF of the same clip is 26 times larger.",
            zh: "作为对照，同样 4 秒、480px、10fps 的 H.264 MP4 只有 70.7 KB —— 同一段内容的 GIF 是它的 26 倍。"
          }
        ]
      },
      {
        h2: {
          en: "Getting under a specific size",
          zh: "要压到指定体积以内"
        },
        p: [
          {
            en: "Width and frame rate both scale close to linearly in this range: dropping 480px to 320px cuts the pixel count to 44% and the file to 48%; dropping 10fps to 8fps cuts the frame count by 20% and the file to 80%. Length is the one lever that changes what the GIF actually contains.",
            zh: "在这个区间里，宽度和帧率都近似线性：宽度从 480px 降到 320px，像素数变成 44%、文件降到 48%；帧率从 10 降到 8，帧数少 20%、文件降到 80%。而时长是唯一会改变 GIF 实际内容的那个杠杆。"
          }
        ],
        list: [
          {
            en: "200px / 8fps / 4s: 308 KB — the smallest setting that still reads on a phone screen.",
            zh: "200px / 8fps / 4 秒：308 KB —— 在手机屏上仍然看得清的最小档位。"
          },
          {
            en: "240px / 10fps / 4s: 540 KB.",
            zh: "240px / 10fps / 4 秒：540 KB。"
          },
          {
            en: "320px / 8fps / 4s: 708 KB.",
            zh: "320px / 8fps / 4 秒：708 KB。"
          },
          {
            en: "320px / 10fps / 4s: 892 KB.",
            zh: "320px / 10fps / 4 秒：892 KB。"
          }
        ]
      },
      {
        h2: {
          en: "What this costs in the browser",
          zh: "在浏览器里的实际代价"
        },
        callout: {
          en: "GIF encoding is heavier work than MP4 here. Every frame goes through a palette mapping step and then LZW compression, and the finished GIF has to be held in memory before it can be handed to you. So on a long clip the thing that slows you down is decoding and encoding time, not your connection — nothing is being uploaded at any point.",
          zh: "在浏览器里，GIF 编码比 MP4 更吃力：每一帧都要经过调色板映射再走一遍 LZW 压缩，而且成品要完整留在内存里才能交给您保存。因此长片段转 GIF 真正拖慢您的是解码和编码时间，而不是网络 —— 全程没有任何东西被上传。"
        }
      },
      {
        h2: {
          en: "GIF quality and size FAQ",
          zh: "GIF 画质与体积常见问题"
        },
        faqs: [
          {
            q: {
              en: "Is there a lossless GIF option?",
              zh: "有没有「无损 GIF」这个选项？"
            },
            a: {
              en: "No, and not because of a missing setting — the format itself stores at most 256 colours per frame, so a lossless GIF cannot exist. If you need every colour preserved, the honest answer is that the GIF format is the wrong container and a video file is the right one.",
              zh: "没有，而且原因不是缺一个开关 —— GIF 格式本身每帧最多存 256 色，所以「无损 GIF」不可能存在。如果必须完整保留所有颜色，诚实的答案是：GIF 这个容器本身就选错了，应该改用视频文件。"
            }
          },
          {
            q: {
              en: "Why did my 4-second GIF turn out bigger than the full video?",
              zh: "为什么 4 秒的 GIF 比整段视频还大？"
            },
            a: {
              en: "Because the two formats are not doing the same job. A video codec only stores what changed between frames and can spend bits where the eye looks; GIF stores every frame as a mostly independent 256-colour image. In our measurement that gap was 26 times, and it widens as the clip gets more detailed.",
              zh: "因为两者做的事不一样。视频编码只保存帧与帧之间变化的部分，还能把码率花在人眼关注的地方；GIF 把每一帧都当作一张基本独立的 256 色图片来存。实测这个差距是 26 倍，而且素材越复杂差距越大。"
            }
          },
          {
            q: {
              en: "Does making the GIF smaller also make it look better?",
              zh: "把 GIF 做小一点，画质也会变好吗？"
            },
            a: {
              en: "Reducing the width does help the bands, because the same 256 colours are then spread over fewer pixels. Reducing the frame rate only saves space and leaves the colour banding exactly as it was. That is why width is the first lever to try when a GIF looks both blocky and huge.",
              zh: "缩宽度确实能缓解色带，因为同样是 256 种颜色摊在更少的像素上。降帧率只省体积，色带一点都不会改善。所以当一个 GIF 又大又有色带时，第一个该动的参数是宽度。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/merge-video-memory-cost/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "Merging Video in a Browser: What It Costs in Memory and Time",
      zh: "在浏览器里合并视频：内存与时间的真实成本"
    },
    description: {
      en: "The two merge paths differ by two orders of magnitude. Copy-merge moves existing packets, re-encode decodes everything at once. We measured both across 20, 40 and 80 seconds of footage, plus the case that makes a merge fail outright.",
      zh: "两条合并路径的成本差两个数量级：流拷贝只搬运已有数据包，统一重编码要同时解码所有片段。我们在 20、40、80 秒三档时长上分别实测了两者的内存与耗时，也测了会让合并直接失败的那种情况。"
    },
    category: { en: "Guide", zh: "原理指南" },
    readTime: { en: "7 min read", zh: "7 分钟阅读" },
    date: { en: "September 19, 2026", zh: "2026年9月19日" },
    toolLink: "/merge-video/",
    toolName: { en: "Merge Video Online", zh: "在线合并视频" },
    content: [
      {
        h2: {
          en: "The short answer",
          zh: "先说结论"
        },
        p: [
          {
            en: "Merging cost depends entirely on which path runs, and the two paths are not close. Copy-merge only moves the packets that already exist: 8 clips totalling 80 seconds finished in 0.07 seconds with a peak memory of 18 MB. Normalised re-encode has to decode every clip, unify its geometry, and encode the result again: the same 80 seconds took 7.31 seconds and peaked at 301 MB.",
            zh: "合并的成本完全取决于走哪条路径，而两条路径不在一个量级上。流拷贝只搬运已经存在的数据包：8 段合计 80 秒的素材，0.07 秒完成、峰值内存 18 MB。统一重编码要把每段都解码、统一画幅、再重新编码：同样的 80 秒耗时 7.31 秒、峰值内存 301 MB。"
          },
          {
            en: "So the question 'how long a video can I merge in a browser' does not have one answer. On the copy path, length is almost free and the limit is how long you are willing to wait for the file to be read. On the re-encode path, memory grows with total duration and that is the number to watch.",
            zh: "所以「在浏览器里能合并多长的视频」没有单一答案。走流拷贝时，时长几乎不花成本，限制只在于您愿意等文件读取多久；走重编码时，内存随总时长增长，那才是需要盯住的数字。"
          }
        ]
      },
      {
        h2: {
          en: "What we measured",
          zh: "实测数据"
        },
        p: [
          {
            en: "Eight clips of identical 640x360 30fps footage with audio, each 10 seconds, merged into a 1280x720 output.",
            zh: "八段规格完全一致的 640x360、30fps 带音轨片段，每段 10 秒，合并输出为 1280x720。"
          }
        ],
        list: [
          {
            en: "Copy-merge, 20 s total: 0.04 s, 17 MB peak, output 20.021 s.",
            zh: "流拷贝，合计 20 秒：0.04 秒、峰值 17 MB、输出 20.021 秒。"
          },
          {
            en: "Copy-merge, 40 s total: 0.05 s, 17 MB peak, output 40.021 s.",
            zh: "流拷贝，合计 40 秒：0.05 秒、峰值 17 MB、输出 40.021 秒。"
          },
          {
            en: "Copy-merge, 80 s total: 0.07 s, 18 MB peak, output 80.021 s.",
            zh: "流拷贝，合计 80 秒：0.07 秒、峰值 18 MB、输出 80.021 秒。"
          },
          {
            en: "Re-encode, 20 s total: 1.72 s, 226 MB peak, output 20.010 s.",
            zh: "重编码，合计 20 秒：1.72 秒、峰值 226 MB、输出 20.010 秒。"
          },
          {
            en: "Re-encode, 40 s total: 5.07 s, 249 MB peak, output 40.021 s.",
            zh: "重编码，合计 40 秒：5.07 秒、峰值 249 MB、输出 40.021 秒。"
          },
          {
            en: "Re-encode, 80 s total: 7.31 s, 301 MB peak, output 80.042 s.",
            zh: "重编码，合计 80 秒：7.31 秒、峰值 301 MB、输出 80.042 秒。"
          }
        ]
      },
      {
        h2: {
          en: "Why the copy path is nearly free",
          zh: "为什么流拷贝几乎不花成本"
        },
        p: [
          {
            en: "Look at the 80-second row: 0.07 seconds, and the peak memory barely moved from the 20-second case. That is because no frame is ever decoded. The tool writes a short playlist listing your clips and asks the engine to concatenate the existing streams, so the work is proportional to the file size, not to the duration.",
            zh: "看 80 秒那一行：0.07 秒，峰值内存和 20 秒那档几乎没区别。原因是一帧都没有被解码。工具只写一份列出片段的播放清单，然后让引擎把已有的流拼接起来，因此工作量与文件体积相关，而与时长无关。"
          }
        ]
      },
      {
        h2: {
          en: "The failure mode that made pre-flight necessary",
          zh: "那个让「预检」变得必要的情况"
        },
        p: [
          {
            en: "Copy-merge is only safe when every clip shares the same codec, resolution, pixel format, frame rate and audio parameters. When they do not, the merge does not politely stop. We merged a 640x360 30fps clip with a 1280x720 25fps clip, both exactly 2 seconds. The output came back as 3.696 seconds and 110 frames — 10 frames short of the 120 it should have contained — and the command exited with success and no warning at all.",
            zh: "只有当所有片段的编码、分辨率、像素格式、帧率和音频参数完全一致时，流拷贝才是安全的。不一致时，它不会礼貌地停下。我们把一段 640x360、30fps 和一段 1280x720、25fps 合在一起，两段各自正好 2 秒；输出却是 3.696 秒、110 帧 —— 比应有的 120 帧少了 10 帧，而命令以「成功」退出，没有给出任何警告。"
          },
          {
            en: "That is why the merge tool probes every clip before it starts instead of waiting for an error. If the signatures do not match, it does not try the copy path and then fall back — it switches to the re-encode path up front and tells you which parameter differed.",
            zh: "这就是合并工具为什么在开始前先逐段探测，而不是等它报错。一旦发现各段参数不一致，它不会先试流拷贝再回退，而是直接改用重编码路径，并告诉你是哪个参数不一样。"
          },
          {
            en: "Re-encode has to use the concat filter rather than the concat demuxer, and the difference is measurable. Re-encoding the mismatched pair through the demuxer produced 3.715 seconds; the filter produced 4.025 seconds, within a frame of the real 4.000.",
            zh: "重编码必须用 concat 滤镜，而不是 concat 解复用器，这个差别是可测量的。同样那对异规格片段，走解复用器重编码得到 3.715 秒；走滤镜得到 4.025 秒，与真实的 4.000 秒只差一帧以内。"
          }
        ]
      },
      {
        h2: {
          en: "A silent clip can stop a merge dead",
          zh: "一段没有声音的片段会让合并直接失败"
        },
        p: [
          {
            en: "The concat filter needs every input to contribute the same number of streams, so a clip with no audio track breaks the graph outright — the engine reports that the audio stream specifier matches no streams and refuses to run. This is not a rare case: phone screen recordings, muted exports and clips taken from an animated GIF are all video-only.",
            zh: "concat 滤镜要求每个输入贡献相同数量的流，因此一段没有音轨的片段会直接把整张滤镜图弄坏 —— 引擎会报告音频流匹配不到任何输入流，拒绝执行。这并不罕见：手机录屏、静音导出的剪辑、从动图转出来的片段，全都只有画面。"
          },
          {
            en: "The merge tool handles this by generating a matching stretch of silence for any clip that has no audio, so a silent segment joins normally and plays as silence instead of aborting the job.",
            zh: "合并工具的处理方式是：给任何没有音轨的片段生成一段等长的静音补上。这样无声片段能正常参与合并，播放时表现为静音，而不是让整个任务中断。"
          }
        ]
      },
      {
        h2: {
          en: "Where the browser adds its own cost",
          zh: "浏览器额外增加的那一层成本"
        },
        callout: {
          en: "The browser build carries one cost the command line does not: files are read into a virtual file system that lives in memory. So on top of the filter and encoder working set, every input clip occupies memory for the whole job, and the finished file has to fit there too. That is the real ceiling on the re-encode path — and the reason a long merge is worth splitting into two rounds rather than attempting in one go.",
          zh: "浏览器版本多了一层命令行没有的成本：文件要先读进一个位于内存中的虚拟文件系统。也就是说，除了滤镜与编码器的工作内存，每一个输入片段都会在整个任务期间占着内存，成品也必须装得下。这才是重编码路径真正的上限所在 —— 也是长合并值得拆成两轮、而不是一次硬扛的原因。"
        }
      },
      {
        h2: {
          en: "Merging FAQ",
          zh: "合并常见问题"
        },
        faqs: [
          {
            q: {
              en: "Should I force re-encode just to be safe?",
              zh: "为了保险起见，是不是干脆一律用重编码？"
            },
            a: {
              en: "You do not have to choose blind. Leave the mode on copy: the tool probes each clip first and moves the job to re-encode by itself when the parameters differ. Forcing re-encode on matching clips only costs you time and one generation of quality for nothing.",
              zh: "不必盲选。保持默认的快速合并即可：工具会先逐段探测，参数不一致时自己转到重编码。对本来规格一致的片段强行重编码，只是白白付出时间和一代画质。"
            }
          },
          {
            q: {
              en: "Why is the merged file longer than the sum of my clips?",
              zh: "为什么合并后的文件比各段时长相加略长？"
            },
            a: {
              en: "Because each clip carries a small boundary offset of a couple of frames, and they accumulate. In our 80-second test the output was 80.042 seconds. It is not duplicated content — it is the same frame-boundary effect you see when trimming, multiplied by the number of joins.",
              zh: "因为每段片段本身都带着几帧的边界偏移，拼起来就会累加。实测 80 秒那一档输出是 80.042 秒。这多出来的不是重复内容，而是和剪切时同一个帧边界效应，按拼接次数叠加而已。"
            }
          },
          {
            q: {
              en: "How many clips can I merge at once?",
              zh: "一次最多能合并几段？"
            },
            a: {
              en: "There is no fixed clip limit — the constraint is total duration and total file size on the re-encode path, where memory scales with how much footage is being decoded at once. If a large merge is struggling, merge the first half, then the second half, then merge those two results: that keeps any single job small.",
              zh: "没有固定的片段数上限 —— 真正的约束是重编码路径上的总时长与总体积，因为内存会随着「同时解码多少素材」增长。如果一次大合并很吃力，就把前一半、后一半各合一次，再合并这两个结果：这样任何单次任务都不会太大。"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/blog/converted-audio-file-size/",
    isArticle: true,
    contentStandardVersion: 2,
    title: {
      en: "How Big Will the Converted Audio File Be?",
      zh: "转换后的音频文件会有多大？"
    },
    description: {
      en: "Lossy audio size is arithmetic: bitrate times duration. Lossless size depends on how compressible your recording is. Here are measured sizes for MP3, M4A, FLAC, Opus, WAV and AIFF from the same three-second source.",
      zh: "有损音频的体积是可以算出来的：码率乘时长。无损音频的体积则取决于你的录音有多好压缩。下面是同一段 3 秒素材转成 MP3、M4A、FLAC、Opus、WAV、AIFF 的实测体积。"
    },
    category: { en: "Guide", zh: "原理指南" },
    readTime: { en: "6 min read", zh: "6 分钟阅读" },
    date: { en: "September 19, 2026", zh: "2026年9月19日" },
    toolLink: "/convert-audio/",
    toolName: { en: "Convert Audio Online", zh: "在线音频格式转换" },
    content: [
      {
        h2: {
          en: "The short answer",
          zh: "先说结论"
        },
        p: [
          {
            en: "For lossy formats the size is pure arithmetic: bitrate x duration / 8. A 192 kbps MP3 is about 1.4 MB per minute; 320 kbps is about 2.4 MB per minute; 128 kbps is about 0.9 MB per minute. That is why people who need a small file reach for a lower bitrate rather than a different codec.",
            zh: "有损格式的体积是纯粹的算术：码率 × 时长 ÷ 8。192 kbps 的 MP3 每分钟约 1.4 MB，320 kbps 每分钟约 2.4 MB，128 kbps 每分钟约 0.9 MB。这也是为什么需要小文件时会去降码率，而不是换编码器。"
          },
          {
            en: "Lossless formats work differently. WAV and AIFF are fixed by sample rate and bit depth, not by content: 44.1 kHz, 16-bit, stereo is about 10.6 MB per minute no matter what you recorded. FLAC sits in between — it is lossless too, but how much it saves depends entirely on how compressible the recording is.",
            zh: "无损格式的规律不同。WAV 和 AIFF 由采样率和位深决定，与内容无关：44.1kHz、16 位、立体声固定每分钟约 10.6 MB，无论你录的是什么。FLAC 处在中间 —— 它同样无损，但能省下多少完全取决于这段录音有多好压缩。"
          }
        ]
      },
      {
        h2: {
          en: "Measured sizes from one source",
          zh: "同一段素材的实测体积"
        },
        p: [
          {
            en: "Source: three seconds of 44.1 kHz stereo audio, 529,278 bytes as 16-bit PCM WAV.",
            zh: "源文件：3 秒 44.1kHz 立体声音频，以 16 位 PCM WAV 保存时是 529,278 字节。"
          }
        ],
        list: [
          {
            en: "MP3 320 kbps: 122,297 bytes, measuring about 326 kbps. MP3 192 kbps: 73,395 bytes, about 195 kbps. MP3 128 kbps: 48,945 bytes, about 130 kbps.",
            zh: "MP3 320 kbps：122,297 字节，实测约 326 kbps。MP3 192 kbps：73,395 字节，约 195 kbps。MP3 128 kbps：48,945 字节，约 130 kbps。"
          },
          {
            en: "M4A (AAC) 192 kbps: 73,757 bytes. M4A (AAC) 128 kbps: 49,716 bytes.",
            zh: "M4A（AAC）192 kbps：73,757 字节。M4A（AAC）128 kbps：49,716 字节。"
          },
          {
            en: "Opus 128 kbps: 49,015 bytes. FLAC: 45,245 bytes on this particular source, which is misleading — see below.",
            zh: "Opus 128 kbps：49,015 字节。FLAC：在这段特定素材上是 45,245 字节，但这个数字有误导性 —— 见下文。"
          },
          {
            en: "WAV: 529,278 bytes. AIFF: 529,254 bytes. The two uncompressed formats differ by 24 bytes.",
            zh: "WAV：529,278 字节。AIFF：529,254 字节。两种未压缩格式相差 24 字节。"
          },
          {
            en: "Note that the measured bitrates run slightly above the label: 192 kbps MP3 reads as 195, and 128 kbps AAC reads as 132. The difference is container and per-frame overhead, and it is always there.",
            zh: "注意实测码率会略高于标称值：标称 192 kbps 的 MP3 实测 195，标称 128 kbps 的 AAC 实测 132。多出来的是容器与逐帧头部开销，它一直存在。"
          }
        ]
      },
      {
        h2: {
          en: "How much FLAC saves depends on the recording",
          zh: "FLAC 能省多少，取决于你录的是什么"
        },
        p: [
          {
            en: "We converted the same WAV to FLAC three times from three different sources. A pure sine wave compressed to 8.5% of the original — a waveform that barely changes can be described extremely compactly. A three-note chord came out at 37.9%. Pink noise, which is close to the hardest case for a lossless compressor, came out at 40.9%.",
            zh: "我们把同样的 WAV 用三段不同素材各转了一次 FLAC：纯正弦波压到原来的 8.5%（几乎不变化的波形可以被极其紧凑地描述），三个正弦音的和弦是 37.9%，粉噪声 —— 接近无损压缩的最难情况 —— 是 40.9%。"
          },
          {
            en: "The 8.5% figure is an outlier, not a promise. Real music and speech recordings typically land between 50% and 70%, because they contain a lot of detail that cannot be predicted away. If you are choosing FLAC to save space, the honest expectation is roughly half the size of WAV, not a tenth.",
            zh: "8.5% 是极端特例，不是可以期待的常态。真实的音乐和语音录音通常落在 50% 到 70% 之间，因为它们包含了大量无法被预测掉的细节。如果你选 FLAC 是为了省空间，诚实的预期大约是 WAV 的一半，而不是十分之一。"
          }
        ]
      },
      {
        h2: {
          en: "Choosing a target format",
          zh: "该选哪个目标格式"
        },
        list: [
          {
            en: "Sending to another person, or playing in a car: MP3 at 192 to 256 kbps. Compatibility is the entire point of this choice.",
            zh: "发给别人、或在车载播放器里播放：MP3，192 到 256 kbps。这个选择的全部理由就是兼容性。"
          },
          {
            en: "Voice recordings and podcasts: M4A or Opus at the same bitrate rather than MP3, because both handle speech better at a given size.",
            zh: "语音录音和播客：同码率下选 M4A 或 Opus，而不是 MP3，因为在相同体积下两者对语音的处理更好。"
          },
          {
            en: "Feeding an editor: WAV or AIFF, whichever your software prefers. They behave identically on a timeline.",
            zh: "要喂给剪辑软件：WAV 或 AIFF，看软件偏好。两者在时间轴上的表现一致。"
          },
          {
            en: "Archiving something you may edit later: FLAC. It keeps the samples exactly while costing noticeably less than WAV.",
            zh: "归档一段以后可能还要剪的录音：FLAC。它完整保留采样数据，同时比 WAV 明显省空间。"
          },
          {
            en: "Embedding in a web player: Opus or OGG, which hold up better than MP3 when the bitrate is pushed down.",
            zh: "内嵌到网页播放器：Opus 或 OGG，在码率被压低时比 MP3 撑得住。"
          }
        ]
      },
      {
        h2: {
          en: "A raised bitrate cannot repair a lossy source",
          zh: "调高码率救不回有损源文件"
        },
        p: [
          {
            en: "If your source is a 196 kbps AAC recording, exporting it as a 320 kbps MP3 produces a bigger file carrying the same information — the second encode cannot recreate detail the first one discarded. Bitrate and bit depth describe how precisely a file stores what it holds, not how good that content is.",
            zh: "如果你的源文件是一段 196 kbps 的 AAC 录音，把它导出成 320 kbps 的 MP3 只会得到一个更大的、携带相同信息的文件 —— 第二次编码无法还原第一次已经丢弃的细节。码率和位深描述的是「文件保存现有内容有多精确」，而不是「内容本身有多好」。"
          },
          {
            en: "One product-specific caveat worth stating plainly: the converter uses FFmpeg's native Opus encoder, because the libopus implementation in this WebAssembly build is not usable. At the same bitrate it does not reach libopus quality, and the tool labels this in the interface rather than quietly shipping it.",
            zh: "有一点产品层面的说明值得直接讲清楚：本转换器使用的是 FFmpeg 的原生 Opus 编码器，因为这份 WebAssembly 构建里的 libopus 实现无法正常运行。在相同码率下它达不到 libopus 的音质，这一点我们在工具界面上直接标注，而不是悄悄带过。"
          }
        ]
      },
      {
        h2: {
          en: "What this costs in the browser",
          zh: "在浏览器里的实际代价"
        },
        callout: {
          en: "Audio work is far lighter than video, so a minute-long recording usually converts in about a second. The real boundaries are memory and length: the file is read into a virtual file system that lives in memory, and the decoded samples occupy memory while the encoder runs. An hour-long lecture is a reasonable job; converting the audio out of a long 4K video is slower because decoding 4K frames becomes the bottleneck long before the audio encoder does.",
          zh: "音频处理比视频轻得多，因此一分钟的录音通常在一秒左右完成。真正的边界是内存与时长：文件要先读进位于内存中的虚拟文件系统，解码后的采样也会在编码期间占用内存。一小时的课程录音属于合理范围；而从一段很长的 4K 视频里转出音频会慢得多，因为瓶颈早在音频编码器之前就已经是 4K 画面的解码了。"
        }
      },
      {
        h2: {
          en: "Audio size FAQ",
          zh: "音频体积常见问题"
        },
        faqs: [
          {
            q: {
              en: "Why did my converted file come out larger than the original?",
              zh: "为什么转换后的文件比原文件还大？"
            },
            a: {
              en: "Almost always because the target bitrate is higher than the source's. A 128 kbps source exported at 320 kbps grows by roughly two and a half times and sounds the same. Check the source bitrate before picking a target: matching it is usually the right call.",
              zh: "几乎总是因为目标码率比源文件更高。128 kbps 的源以 320 kbps 导出，体积大约涨到 2.5 倍，听感没有变化。选目标码率前先看一眼源文件的码率：对齐它通常就是对的做法。"
            }
          },
          {
            q: {
              en: "Does converting reduce quality even at the same bitrate?",
              zh: "即使码率相同，转换也会降低音质吗？"
            },
            a: {
              en: "Yes, if the target is lossy and the source is already lossy, because the audio is encoded a second time. Whether you can hear it depends on the material: speech at 192 kbps and above is usually transparent, while dense music is where a second generation becomes noticeable. Converting to WAV or FLAC instead avoids adding any loss.",
              zh: "会 —— 只要目标是有限格式而源文件本身已经有损，音频就被编码了第二次。能不能听出来取决于素材：192 kbps 以上的语音通常听不出，而层次密集的音乐才是第二代损伤比较明显的地方。改转 WAV 或 FLAC 则不会叠加任何损失。"
            }
          },
          {
            q: {
              en: "Can I convert several recordings at once?",
              zh: "可以一次转换多个录音吗？"
            },
            a: {
              en: "Process them one at a time. Each job holds the source file and the decoded audio in browser memory, so running several long recordings together reaches the memory ceiling faster than it finishes the work.",
              zh: "建议逐个处理。每个任务都要把源文件和解码后的音频放进浏览器内存，同时跑多个长录音，只会更快撞上内存上限，而不是更快做完。"
            }
          }
        ]
      }
    ]
  }
];

/**
 * 文章之间的互链选择。
 *
 * 为什么需要它：在此之前每篇文章只有一条指向工具页的链接，文章与文章之间零互链 ——
 * 对爬虫来说 26 篇文章彼此孤立，抓取路径和页面权重都传不出去。
 *
 * 选择顺序：显式 `relatedSlugs` → 同一个工具页下的其它文章 → 沿时间轴向两侧扩散的邻居。
 *
 * 第三步一开始写的是「其余按日期倒序补齐」，实测退化了：每篇都指向最新的那几篇，
 * 整张图变成以最新文章为中心的星形，从任一篇文章出发只能到达 5/26 篇，而且发布时间
 * 最早的文章一条入链都拿不到。改成取时间轴上的前后邻居（±1、±2 ……）之后，链接会
 * 沿时间铺成链条，老文章同样有入链。
 *
 * ⚠️ 这个函数是 React 端与 prerender-seo.mjs 共用的唯一漏斗。静态版和 JS 版必须拿到
 * 同一份结果，否则爬虫看到的互链图和真实用户看到的不是同一张。
 */
export function relatedArticles(page, limit = 4) {
  const articles = BLOG_PAGES.filter((item) => item.isArticle && item.path !== page.path);
  if (!articles.length || limit <= 0) return [];

  const indexOf = new Map(BLOG_PAGES.map((item, index) => [item.path, index]));
  const byRecency = (a, b) =>
    Date.parse(b.date?.en || 0) - Date.parse(a.date?.en || 0) ||
    indexOf.get(b.path) - indexOf.get(a.path);

  const byPath = new Map(articles.map((item) => [item.path, item]));
  const picked = [];
  const seen = new Set([page.path]);
  const push = (candidate) => {
    if (!candidate || seen.has(candidate.path) || picked.length >= limit) return;
    seen.add(candidate.path);
    picked.push(candidate);
  };

  (page.relatedSlugs || []).forEach((slug) => push(byPath.get(slug)));
  articles.filter((item) => item.toolLink === page.toolLink).sort(byRecency).forEach(push);

  const timeline = [page, ...articles].sort(byRecency);
  const position = timeline.findIndex((item) => item.path === page.path);
  for (let step = 1; step < timeline.length && picked.length < limit; step += 1) {
    push(timeline[position - step]);
    push(timeline[position + step]);
  }

  return picked;
}
