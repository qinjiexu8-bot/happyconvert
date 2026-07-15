/* Bilingual translations dictionary */
export const TRANSLATIONS = {
  en: {
    // topbar & brand
    logoSub: "Sandboxed browser media utility",
    brandTitle: "HappyConvert",
    privateBadge: "Private Browser Compute",
    engineReady: "✓ Core Engine Ready",
    engineLoading: "Loading WASM...",
    engineInit: "⚡ Initialise Engine",
    engineRetry: "Retry Engine",
    
    // nav
    navWorkspace: "Workspace",
    navFeatures: "Features",
    navFAQ: "FAQ",
    navConsole: "Console",
    showLogsLabel: "Show Processing Logs",
    heroBadgeText: "100% Local Compute • No Signup • Completely Free",
    heroTitle: "Offline-First, <span class=\"highlight\">Private Browser</span> Media Studio",
    heroSub: "Edit, compress, crop, and convert your media files locally inside your browser sandbox. 100% secure with zero server uploads—your files never leave your computer.",
    latestOutputTitle: "Latest Processed Output",
    latestOutputWarning: "Note: WebM, MKV, and MOV playback depends on your local app/browser support. For widest local playback compatibility, export MP4.",
    latestOutputClose: "Close Preview",
    loadAsInputBtn: "Load as Input",

    // tool tabs
    tool_Trim: "✂️ Trim / Cut",
    tool_Compress: "📉 Compress",
    tool_Convert: "🔄 Convert",
    tool_GIF: "🖼️ Export GIF",
    tool_ExtractAudio: "🎵 Audio Extract",
    tool_Crop: "📐 Crop Frame",

    // cards & titles
    inputCardTitle: "Media Input",
    localOnly: "100% Secure",
    dragText: "Drag media or click to load",
    formatsText: "Supports MP4, WebM, MOV, MKV, MP3, WAV",
removeFile: "Unload file",
    audioFile: "Audio file",

    toolsCardTitle: "Studio Tools",
    configLabel: "Config",
    
    // settings: trim
    trimCutMode: "Cut Mode",
    trimLossless: "Stream Copy (Lossless & Instant)",
    trimReencode: "Re-encode Video (Highly Compatible)",
    trimHelp: "* Direct Copy copies the raw stream encoding data without decoding, preserving original quality instantly.",
    trimStart: "Start Position",
    trimEnd: "End Position",
    
    // settings: compress
    compQuality: "Quality Level",
    compHigh: "High Quality (Low compression, CRF 18)",
    compMedium: "Balanced (Medium compression, CRF 23)",
    compLow: "Small File (High compression, CRF 30)",
    compHelp: "* CRF (Constant Rate Factor) determines standard visual loss. Higher numbers represent more aggressive sizing compression.",
    compScale: "Resolution Scale",
    compScaleOrig: "Original Resolution (100%)",
    compPreset: "Encoding Preset",
    compUltrafast: "Ultrafast (Extremely fast, larger size)",
    compVeryfast: "Veryfast (Fast balanced)",
    compSlow: "Medium (Slow, optimized size/quality)",
    
    // settings: convert
    convTarget: "Target Container",
    convVideoCodec: "Video Codec",
    convAudioCodec: "Audio Codec",
    convVideoH264: "H.264 AVC (Highly compatible)",
    convVideoVP9: "VP8 (WebM compatible)",
    convVideoCopy: "Direct Copy (Stream copy without re-encoding)",
    convAudioAAC: "AAC (Standard)",
    convAudioOpus: "Vorbis (WebM compatible)",
    convAudioCopy: "Direct Copy (Stream copy audio stream)",

    // settings: gif
    gifFps: "Frame Rate",
    gifFps5: "5 FPS (Super small size)",
    gifFps10: "10 FPS (Standard web animated GIF)",
    gifFps15: "15 FPS (Smooth playback)",
    gifFps20: "20 FPS (Fluid animation, large file)",
    gifWidth: "Scale Width",
    gifWidth320: "320px (Mobile thumbnail)",
    gifWidth480: "480px (Standard size)",
    gifWidth640: "640px (High resolution)",
    gifWidth800: "800px (Extra large size)",
    gifHelp: "* Generates a high-quality palette-mapped color grid. Keeps colors vibrant while minimizing file sizes.",

    // settings: extract audio
    audioFormat: "Audio Format",
    audioKbps: "Audio Bitrate",
    audioKbps128: "128 kbps (Standard quality)",
    audioKbps192: "192 kbps (High quality)",
    audioKbps256: "256 kbps (Premium music quality)",
    audioKbps320: "320 kbps (Maximum MP3 standard)",

    // settings: crop
    cropRatio: "Aspect Ratio Presets",
    cropW: "Width (px)",
    cropH: "Height (px)",
    cropX: "Offset X (px)",
    cropY: "Offset Y (px)",
    cropHelp: "* Look at the player preview screen. The dashed bounding mesh overlay shows your selected crop boundaries.",

    // player screen
    playerPlaceholderTitle: "Media Studio Preview",
    playerPlaceholderSub: "Load a video or audio file to activate live editing timeline",

    // timeline
    selectionRange: "Selection Range",
    durationLabel: "Duration",
    playPause: "Play/Pause",
    playSelection: "Play Selection Slice",
    setCurrentStart: "[ Set Current Start",
    setCurrentEnd: "Set Current End ]",

    // console & export
    terminalOutput: "Terminal Output",
    toolHelp: "Tool Help",
    clearLogs: "Clear Logs",
    cliPrompt: "NCC-WASM:$",
    progressLabel: "Progress Indicator",
    runTool: "⚡ Start Processing",
    runToolWorking: "⏳ Processing locally...",
    
    // gallery
    galleryTitle: "Exported Outputs Gallery",
    galleryFiles: "Files",
    galleryEmpty: "No generated exports in this session yet. Choose options and click the processing button above.",
    previewBtn: "Preview Output",
    downloadBtn: "Download File",

    // drag overlay
    dragOverlayTitle: "Drop your media file here",
    dragOverlaySub: "Instantly load video or audio into local sandbox timeline",

    // logs messages
    logInit: "System initialised. Drag & Drop a file or Load a Sample to auto-start local WASM engine.",
    logNoCloud: "No Cloud Server upload: Your files stay 100% inside your local browser container.",
    logLoadedFile: "Loaded local file",
    logUnloaded: "File unloaded.",
logWasmSuccess: "FFmpeg WASM environment initialized successfully. Local compute activated.",
    logWasmError: "Failed to initialize FFmpeg WASM",
    logWasmTimeout: "Loading timed out. Please check your connection and try again.",
    logTriggerWasm: "Loading & compiling FFmpeg core (WASM)...",
    logRunTool: "Initiating operation",
    logWritingSandbox: "Writing file to browser sandbox memory...",
    logSuccessFile: "Finished successfully! Created export",
    logRemoveExport: "Export removed from list.",
    logPlayExport: "Playing generated output preview",
    logCropPreset: "Crop preset applied",

    // Marketing Feature cards
    mCardTitle1: "100% Privacy Protected",
    mCardDesc1: "Unlike traditional online video converters, your files never leave your device. All rendering, slicing, cropping, and transcoding happens directly in your browser's sandboxed Memory via WebAssembly (WASM).",
    mCardTitle2: "No Cloud Queue Limits",
    mCardDesc2: "No premium subscriptions or server queue limits. Since computations are executed on your local CPU, you can transcode large files offline without uploading a single byte to external servers (recommended under 1GB for browser stability).",
    mCardTitle3: "Developer Grade Controls",
    mCardDesc3: "Powered by standard FFmpeg. You get granular control over container types, bitrates, quality scores (CRF), audio extractions, and a raw console command input box to type custom terminal scripts.",

    // FAQ Section
    faqTitle: "Frequently Asked Questions",
    faqQ1: "Is HappyConvert completely free to use? Do I need to register an account or pay?",
    faqA1_1: "Yes, 100% completely free forever! There is no registration required, no login needed, and no credit card or subscription fees. You can use all professional video and audio tools immediately right in your browser.",
    faqA1_2: "All exported files are watermark-free, with no cloud queue times. Practical file size depends on your browser and device memory. We monetize solely through non-intrusive advertising.",
    
    faqQ2: "Is HappyConvert really safe and private to use?",
    faqA2_1: "Yes, absolutely. Your security is our highest priority. Traditional sites require you to upload private video recordings to their clouds, creating massive security and privacy risks.",
    faqA2_2: "HappyConvert utilizes modern WebAssembly to run the FFmpeg engine directly inside your browser. All processing is executed locally by your CPU inside your browser sandbox — your files never touch any server.",
    
    faqQ3: "What audio and video container formats are supported?",
    faqA3_1: "HappyConvert supports loading almost any standard media format recognized by FFmpeg, including MP4, WebM, MOV, MKV, AVI, FLV, MP3, WAV, M4A, and OGG.",
    faqA3_2: "You can export your results to Web-compatible containers like MP4 (H.264 / AAC), WebM (VP8 / Vorbis), MOV, animated GIF images, standard MP3, or lossless raw WAV audio.",

    faqQ4: "Why does the engine take a moment to load initially?",
    faqA4_1: "On your first visit, your browser downloads the WebAssembly core engine (~30MB). Depending on your internet speed, this initial setup takes just a few seconds.",
    faqA4_2: "Once loaded, your browser automatically caches the engine locally. Subsequent visits will load instantaneously, even in complete offline mode!",

    faqQ5: "Does this tool work on mobile devices and tablets?",
    faqA5_1: "Yes! HappyConvert is built with modern responsive design and runs smoothly on Chrome, Safari, and Edge across iOS, iPadOS, and Android devices.",

    // Help Text Tab
    helpTitle: "Core Studio Functions:",
    helpTrim: "Trim / Cut: Set bounds on timeline. 'Stream Copy' avoids re-encoding and finishes instantly.",
    helpCompress: "Compress: Lower video resolution and adjust target visual CRF to minimize local file footprints.",
    helpConvert: "Convert: Transcode files to standard web formats like MP4, WebM, MOV, or audio formats like MP3/WAV.",
    helpGif: "Export GIF: Encodes frames to a high-quality palette-mapped GIF file. Range limits apply.",
    helpAudio: "Extract Audio: Strip video structures and write audio tracks directly into MP3/WAV stream formats.",
    helpCrop: "Crop Frame: Restructure visual bounds. Set custom parameters or apply grid-centered aspect ratios.",
    helpCropGuide: "Look at the player preview screen. The dashed bounding mesh overlay shows your selected crop boundaries.",


    // Footer
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    modalAboutTitle: "About HappyConvert",
    modalPrivacyTitle: "Privacy Policy",
    modalTermsTitle: "Terms of Service",
    copyright: "All rights reserved. 100% Client-side."
  },
  zh: {
    // topbar & brand
    logoSub: "沙盒化浏览器本地媒体处理工具",
    brandTitle: "HappyConvert",
    privateBadge: "浏览器本地计算 (安全)",
    engineReady: "✓ 核心引擎就绪",
    engineLoading: "正在加载 WASM...",
    engineInit: "⚡ 初始化引擎",
    engineRetry: "重试引擎",
    
    // nav
    navWorkspace: "工作区",
    navFeatures: "特性说明",
    navFAQ: "常见问答",
    navConsole: "控制台",
    showLogsLabel: "显示运行日志",
    heroBadgeText: "100% 本地计算 • 不用注册 • 完全免费",
    heroTitle: "离线安全、<span class=\"highlight\">绝对私密</span>的本地浏览器媒体工作室",
    heroSub: "在您的浏览器本地沙盒内直接进行视频裁剪、压缩、裁切与格式转换。100% 本地运算，无需上传任何服务器，保护您的隐私安全。",
    latestOutputTitle: "最新生成预览",
    latestOutputWarning: "提示: WebM、MKV、MOV 的本地播放取决于系统或播放器支持。若要下载后在电脑/手机上通用播放，建议导出 MP4。",
    latestOutputClose: "关闭预览",
    loadAsInputBtn: "设为当前输入",

    // tool tabs
    tool_Trim: "✂️ 视频剪切",
    tool_Compress: "📉 视频压缩",
    tool_Convert: "🔄 视频转码",
    tool_GIF: "🖼️ 导出 GIF",
    tool_ExtractAudio: "🎵 提取音频",
    tool_Crop: "📐 画面裁切",

    // cards & titles
    inputCardTitle: "媒体输入",
    localOnly: "100% 本地运行",
    dragText: "拖拽媒体文件或点击此处加载",
    formatsText: "支持 MP4, WebM, MOV, MKV, MP3, WAV 等格式",
removeFile: "卸载文件",
    audioFile: "音频文件",

    toolsCardTitle: "编辑工具",
    configLabel: "配置参数",
    
    // settings: trim
    trimCutMode: "裁剪模式",
    trimLossless: "流拷贝 (无损秒切)",
    trimReencode: "重新编码 (高兼容性)",
    trimHelp: "* 直接拷贝 (Stream Copy) 会直接复制原始视音频流编码而不进行重新解码，实现无损瞬时裁剪。",
    trimStart: "剪切起点",
    trimEnd: "剪切终点",
    
    // settings: compress
    compQuality: "压缩质量级别",
    compHigh: "高质量 (压缩率低, CRF 18)",
    compMedium: "平衡 (中度压缩, CRF 23)",
    compLow: "极小文件 (高压缩率, CRF 30)",
    compHelp: "* CRF (无损因子) 决定了画面视觉损失，数值越大压缩率越高，文件体积越小。",
    compScale: "分辨率缩放",
    compScaleOrig: "原始分辨率 (100%)",
    compPreset: "编码速度预设",
    compUltrafast: "极速 Ultrafast (速度最快, 文件偏大)",
    compVeryfast: "快速 Veryfast (推荐, 速度与大小平衡)",
    compSlow: "标准 Medium (编码较慢, 文件体积优化)",
    
    // settings: convert
    convTarget: "目标封装格式",
    convVideoCodec: "视频编码器",
    convAudioCodec: "音频编码器",
    convVideoH264: "H.264 AVC (高兼容性)",
    convVideoVP9: "VP8 (WebM 兼容编码)",
    convVideoCopy: "直接拷贝 (不重新编码视频流)",
    convAudioAAC: "AAC (标准音频)",
    convAudioOpus: "Vorbis (WebM 兼容音频)",
    convAudioCopy: "直接拷贝 (不重新编码音频流)",

    // settings: gif
    gifFps: "动态图帧率",
    gifFps5: "5 帧/秒 (极小文件)",
    gifFps10: "10 帧/秒 (网页 GIF 标准帧率)",
    gifFps15: "15 帧/秒 (平滑播放)",
    gifFps20: "20 帧/秒 (丝滑动画, 文件较大)",
    gifWidth: "画面缩放宽度",
    gifWidth320: "320px (手机缩略图)",
    gifWidth480: "480px (推荐标准大小)",
    gifWidth640: "640px (高清晰度)",
    gifWidth800: "800px (超大画面)",
    gifHelp: "* 系统会生成专用的高质量调色板色网 (palettegen)。在确保色彩饱满的同时极力缩小 GIF 体积。",

    // settings: extract audio
    audioFormat: "音频导出格式",
    audioKbps: "音频比特率 (Bitrate)",
    audioKbps128: "128 kbps (标准音质)",
    audioKbps192: "192 kbps (高品质音质)",
    audioKbps256: "256 kbps (高保真音乐级别)",
    audioKbps320: "320 kbps (最高 MP3 规格)",

    // settings: crop
    cropRatio: "画面比例预设",
    cropW: "裁切宽度 (像素)",
    cropH: "裁切高度 (像素)",
    cropX: "X 轴偏移量 (像素)",
    cropY: "Y 轴偏移量 (像素)",
    cropHelp: "* 请看右侧播放器画面。紫色虚线网格即为最终裁剪导出的画面范围。",

    // player screen
    playerPlaceholderTitle: "媒体工作区预览",
    playerPlaceholderSub: "导入视频或音频文件后即可激活时间轴手柄进行剪辑",

    // timeline
    selectionRange: "所选裁剪区间",
    durationLabel: "总时长",
    playPause: "播放 / 暂停",
    playSelection: "预览裁剪片段",
    setCurrentStart: "[ 捕获当前播放时间为起点",
    setCurrentEnd: "捕获当前播放时间为终点 ]",

    // console & export
    terminalOutput: "终端日志输出",
    toolHelp: "工具指南",
    clearLogs: "清除日志",
    cliPrompt: "NCC-WASM:$",
    progressLabel: "任务处理进度",
    runTool: "⚡ 立即开始处理",
    runToolWorking: "⏳ 正在本地极速处理中...",
    
    // gallery
    galleryTitle: "已生成的文件画廊",
    galleryFiles: "个文件",
    galleryEmpty: "当前会话暂未生成导出文件。设定参数后点击上方“一键处理”按钮即可在此处查看成果物。",
    previewBtn: "载入预览",
    downloadBtn: "下载到本地",

    // drag overlay
    dragOverlayTitle: "释放以导入媒体文件",
    dragOverlaySub: "自动将音视频载入本地沙盒进行实时处理",

    // logs messages
    logInit: "系统初始化完毕。拖拽文件或加载测试视频，将自动启动本地 WebAssembly (WASM) 媒体引擎。",
    logNoCloud: "云端零上传保护：所有处理均在您的浏览器本地执行，您的文件绝不会离开您的电脑。",
    logLoadedFile: "成功加载本地文件",
    logUnloaded: "文件已卸载。",
logWasmSuccess: "FFmpeg WASM 环境初始化成功！本地硬件加速计算已启用。",
    logWasmError: "初始化 FFmpeg WASM 引擎失败",
    logWasmTimeout: "加载超时，请检查网络后重试。",
    logTriggerWasm: "正在加载并编译 FFmpeg 核心 WASM 模块...",
    logRunTool: "正在初始化编辑任务",
    logWritingSandbox: "正在将文件写入浏览器沙盒虚拟文件系统...",
    logSuccessFile: "执行成功！已保存输出文件",
    logRemoveExport: "文件已从列表中移除。",
    logPlayExport: "正在播放生成的导出文件预览",
    logCropPreset: "已应用画面比例预设",

    // Marketing Feature cards
    mCardTitle1: "100% 隐私安全保障",
    mCardDesc1: "区别于传统在线音视频转换网站，您的文件永远不需要上传到任何云端服务器。所有剪辑、画面裁剪、压缩和转码渲染全在浏览器沙盒内存中通过 WebAssembly (WASM) 本地运算完成。",
    mCardTitle2: "免云端排队与体积限制",
    mCardDesc2: "无需付费订阅，没有上传限制。因为所有处理都运行在您本机的 CPU 上，即使导入大体积视频也可以直接在本地极速转换，不消耗任何上传流量（为保证浏览器稳定性，推荐 1GB 以内视频）。",
    mCardTitle3: "专业级极客参数控制",
    mCardDesc3: "基于标准 FFmpeg 封装。支持控制封装容器、视频分辨率缩放、视觉损失 CRF、音频剥离以及原始 FFmpeg 命令行参数自定义输入，让资深级极客用户也能游刃有余。",

    // FAQ Section
    faqTitle: "常见问题解答",
    faqQ1: "使用 HappyConvert 是完全免费的吗？需要注册账号或付费订阅吗？",
    faqA1_1: "100% 永久免费！不仅没有任何收费门槛，更郑重承诺：无需注册账号、无需登录、无需绑定信用卡！您只要打开网页即可立刻使用全部专业音频与视频处理功能。",
    faqA1_2: "所有导出的视频或音频纯净无水印、不限转换次数与文件体积、无排队等待时间（实际文件限制取决于浏览器内存）。我们仅通过页面底部的非侵入式广告维持服务器运行，让您真正实现随开随用！",
    
    faqQ2: "HappyConvert 真的安全保密吗？视频会上传到云服务器吗？",
    faqA2_1: "绝对安全保密！传统转换网站需要把您的私人视频上传到云端服务器，存在严重的数据泄露隐患和隐私风险。",
    faqA2_2: "HappyConvert 利用前沿的 WebAssembly 技术将 FFmpeg 媒体引擎直接装载在您的浏览器本地。所有的读取、转码与保存操作全程只在您本机的 CPU 与内存中闭环运行 — 视频绝不会离开您的电脑！",
    
    faqQ3: "系统支持哪些音频和视频格式的导入与导出？",
    faqA3_1: "得益于 FFmpeg 强大的封装支持，HappyConvert 几乎可以读取市面上所有的主流媒体格式，包括 MP4、WebM、MOV、MKV、AVI、FLV、MP3、WAV、M4A 与 OGG 等。",
    faqA3_2: "在导出时，您可以将其转为网页兼容性极佳的 MP4 (H.264)、WebM (VP8)、MOV、高清流畅的 GIF 动画、通用 MP3 音频或无损母带级 WAV 音频。",

    faqQ4: "为什么首次加载处理引擎需要一点时间？",
    faqA4_1: "在您第一次打开网页时，浏览器会自动下载 WebAssembly 本地处理引擎（约 30MB）。根据您的网络带宽，初次加载可能需要几秒钟的时间。",
    faqA4_2: "但请放心，一旦加载成功，浏览器会自动将其放入本地缓存。以后再访问时均是瞬时秒开，即使断开网络在离线状态下也依旧可以正常转码！",

    faqQ5: "可以在手机、平板或 iPad 上流畅使用吗？",
    faqA5_1: "可以！HappyConvert 采用了现代响应式自适应布局。只要您在 iPhone、iPad 或 Android 设备上的 Chrome、Safari、Edge 等主流浏览器中打开，即可获得同样流畅便捷的触屏修图与转码体验！",

    // Help Text Tab
    helpTitle: "核心工作室功能指南：",
    helpTrim: "剪切 (Trim / Cut)：拖动时间轴选择剪切区间。“流拷贝”免去重新编码，瞬间完成裁剪。",
    helpCompress: "压缩画面 (Compress)：降低视频分辨率或调高 CRF 牺牲极少细节，实现体积大幅缩减。",
    helpConvert: "格式转码 (Convert)：转换为适合各大平台的 MP4, WebM (VP8) 视频或 MP3, WAV 音频。",
    helpGif: "导出 GIF (Export GIF)：将选中的视频片段导出为经过色彩空间优化的动态 GIF 图像。",
    helpAudio: "剥离音频 (Extract Audio)：自动剔除画面轨，将音频流单独提取输出为 MP3 / WAV 文件。",
    helpCrop: "裁切画面 (Crop)：设定局部像素矩形或直接调用 16:9 / 9:16 等自适应比例，裁剪画面死角。",
    helpCropGuide: "请看上方播放器画面。紫色虚线网格即为最终裁剪导出的画面范围。",


    // Footer
    aboutUs: "关于我们",
    privacyPolicy: "隐私政策",
    termsOfService: "使用条款",
    modalAboutTitle: "关于 HappyConvert",
    modalPrivacyTitle: "隐私政策",
    modalTermsTitle: "使用条款",
    copyright: "保留所有权利。100% 本地运行。"
  }
};

export const TOOLS = [
  { id: "Trim" },
  { id: "Compress" },
  { id: "Convert" },
  { id: "GIF" },
  { id: "Extract Audio" },
  { id: "Crop" }
];
