# 新增工具落地方案：视频合并 + 音频格式转换

状态：**待评审**｜起草：2026-09-18｜范围：2 个新工具 + 4 篇配套文章

---

## 1. 目标与验收标准

上线 `/merge-video/` 与 `/convert-audio/` 两个工具页（中英双语），要求：

- [ ] 两个工具在浏览器里**真实跑通**：合并 2+ 个 MP4 成功、M4A→MP3 成功，导出文件可正常播放
- [ ] 中英双页预渲染成功，canonical / hreflang / JSON-LD / sitemap 自动产出
- [ ] 页面文案通过诚实口径审查：无 `unlimited / instant / lossless / 无限制 / 秒级` 类不可证伪宣传词，且写明浏览器内存、CPU、WASM 加载等真实限制
- [ ] 首页数量口径从 6 改为 8，且全站不再出现「无云剪」
- [ ] `npm run audit:content` 通过（含扩展后的工具页审查）

---

## 2. 引擎依据（已实测校验）

直接探测 `public/ffmpeg/ffmpeg-core.wasm` 的结论，全部为编译期已包含的能力：

| 需要的能力 | 实测 | 用途 |
| --- | --- | --- |
| `concat` 解复用器（含 `ffconcat`） | ✅ 21 处命中 | 合并的流拷贝路线 |
| `concat` 滤镜 | ✅ | 合并的重编码路线 |
| `libx264` / `aac`（native） | ✅ | 统一重编码输出 |
| `libmp3lame` | ✅ | MP3 输出 |
| `flac` 编码器 | ✅ | 无损 FLAC 输出 |
| `libopus` / `libvorbis` | ✅ | OGG 输出 |
| `pcm_s16le` / `pcm_s16be` | ✅ | WAV / AIFF 输出 |
| muxer：`ipod`(m4a) / `ogg` / `flac` / `aiff` / `ac3` | ✅ | 音频封装 |

**不需要改引擎，不需要重编 ffmpeg-core。** 两个工具都只走新增参数分支。

---

## 3. 工具的标识与关键词

| | 视频合并 | 音频格式转换 |
| --- | --- | --- |
| 路径 | `/merge-video/` | `/convert-audio/`（已定档，与 `/convert-video/` 命名一致） |
| toolId | `Merge` | `Audio` |
| i18n key | `tool_Merge` | `tool_Audio` |
| 图标 | 🔗 | 🎧 |
| 目标词簇 | `merge video online`、`join mp4 files`、`combine video clips`、`video merger`、视频合并、拼接视频 | `audio converter online`、`m4a to mp3`、`wav to mp3`、`flac to mp3`、`ogg to mp3`、音频格式转换、m4a转mp3 |

> toolId 一律用**单个英文单词**。原因：`App.jsx:2384` 用
> `t(\`tool_${effectiveSelectedTool.replace(" ", "")}\`)` 拼 i18n key，
> 而 `replace(" ")` 只替换**第一个**空格，双词以上会拼错 key。

---

## 4. FFmpeg 参数设计

### 4.1 视频合并

**模式 A —— 快速合并（默认，流拷贝）**

```
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```

- 需先写入虚拟 FS：`list.txt` 内容为 `file 'input-0.mp4'` 逐行拼接
- **不解码**，几乎不额外吃内存 —— 这点关键，因为浏览器内存是所有工具的共同天花板
- 前提：片段同编码 / 同分辨率 / 同音轨布局

**模式 B —— 统一重编码（回退）**

```
ffmpeg -i a.mp4 -i b.mp4 \
  -filter_complex "[0:v]scale=W:H:force_original_aspect_ratio=decrease,pad=W:H:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=F[v0];..." \
  -c:v libx264 -preset veryfast -crf 23 -c:a aac output.mp4
```

- `W:H` 取**第一个片段的实际分辨率**，`F` 取第一个片段的帧率
- 必须做 `scale + pad + setsar + fps` 归一，否则 concat 滤镜会直接报错
- 无音轨的片段也要补静音轨，否则 `concat=n=N:v=1:a=1` 会失败 → 需在 UI 里显式提示

### 4.2 音频格式转换

统一加 `-vn` 剥离视频轨：

| 目标 | 参数 | 容器 |
| --- | --- | --- |
| MP3 | `-c:a libmp3lame -b:a 192k` | `.mp3` |
| M4A (AAC) | `-c:a aac -b:a 192k` | `.m4a`（ipod muxer） |
| WAV | `-c:a pcm_s16le` | `.wav` |
| FLAC | `-c:a flac` | `.flac` |
| OGG (Opus) | `-c:a libopus -b:a 128k` | `.ogg` |
| OGG (Vorbis) | `-c:a libvorbis -q:a 5` | `.ogg` |
| AIFF | `-c:a pcm_s16be` | `.aiff` |

输入侧同样接受视频容器（MP4/MOV/MKV/WebM），等于顺带覆盖「从视频里单独导出音频并指定格式」的需求。

---

## 5. 代码改动清单

| # | 文件 | 位置 | 改什么 |
| --- | --- | --- | --- |
| 1 | `src/config/toolPages.js` | `DEFAULT_PAGE.badge` (L31-32) | `6 Tools in One` → `8 Tools in One`；`六大工具合一` → `八大工具合一` |
| 2 | 同上 | `DEFAULT_PAGE.faqs[1].a` (L55-56) | 工具清单 6 → 8，补两个新工具；同时清掉「无云剪工作室」 |
| 3 | 同上 | `TOOL_PAGES` 末尾 | 追加 2 条完整元数据（草稿见 §6） |
| 4 | 同上 | `TOOL_PAGES` 内 5 处 faq_a + 1 处 faq_q | 清「无云剪」→ HappyConvert（同批） |
| 5 | `src/i18n/translations.js` | en / zh 两个字典 | 加 `tool_Merge`、`tool_Audio`，以及合并模式、音频格式、位率等新标签 |
| 6 | 同上 | `TOOLS` 数组 (L407) | 追加 `{ id: "Merge" }`、`{ id: "Audio" }` |
| 7 | `src/lib/ffmpegCommands.js` | 4 个函数 | `buildCommandPreview` / `buildFfmpegArgs` / `getOutputFormatForTool` / `getBlobTypeForFormat` 各加 `Merge` 与 `Audio` 分支 |
| 8 | `src/App.jsx` | L170 附近状态区 | 新增 `mergeFiles`(数组) / `mergeMode` / `audioTargetFormat` / `audioBitrate` |
| 9 | 同上 | `ffmpegOptions` (L515-535) | 展开上述新字段 |
| 10 | 同上 | `processMedia()` (L933-1015) | Merge 走多文件写入 + 生成 `list.txt`；输出名前缀 `ncc-` → `happyconvert-` |
| 11 | 同上 | 图标映射 (L1255-1260、L1396-1401) | 补 `Merge` → 🔗、`Audio` → 🎧 |
| 12 | 同上 | `getToolShowcaseData()` (L59-133) | 加 `Merge` / `Audio` 两个 case（含 banner 图） |
| 13 | 同上 | 设置面板区 (L2384 起) | 新增两块面板：合并（多文件列表 + 拖拽排序 + 模式开关）、音频（格式 + 位率） |
| 14 | 同上 | 输入区 | 合并模式下改为**多文件**选择与列表展示（单文件模式保持原样） |
| 15 | `scripts/audit-blog-content.mjs` | L73 | 审查范围从 `BLOG_PAGES` 扩到 `TOOL_PAGES` + `DEFAULT_PAGE`（见 §9 决策 1） |
| 16 | `docs/seo-content-standards.md` | 第六批之后 | 追加第七、八批选题 |
| 17 | `public/banner-merge.jpg`、`public/banner-audio.jpg` | 新增 | 见 §9 决策 2 |

**无需改动**：`vercel.json`。`prerender-seo.mjs` 会自动为新条目产出中英双页 + canonical/hreflang/JSON-LD/sitemap/IndexNow key。

---

## 6. 元数据草稿（可直接入库）

### 6.1 `/merge-video/` — toolId `Merge`

```
title.en  Merge Video Online - Join MP4 Clips Free (No Watermark)
title.zh  在线合并视频 - 免费拼接 MP4/MOV 片段（推荐1GB以内）

desc.en   Merge video online by joining multiple MP4, MOV, or WebM clips into one file.
          Same-codec clips are combined with stream copy, so no re-encoding is needed.
          Runs locally in your browser; practical limits depend on device memory.
desc.zh   在线把多段 MP4、MOV、WebM 视频拼接为一个文件。同编码片段采用流拷贝合并，无需重新
          编码。全部在浏览器本地处理，实际可处理体积取决于设备内存。

h1.en     Free Online <span class="highlight">Video Merger</span>
h1.zh     免费在线<span class="highlight">视频合并拼接</span>

seoH2.en  Join Multiple Video Clips Into One File in Your Browser
seoH2.zh  在浏览器中把多段视频拼接为一个文件

sub.en    Combine two or more clips into a single video. When the clips share the same codec
          and resolution, merging uses stream copy and stays fast; mixed sources fall back to
          a unified re-encode, which depends on your CPU.
sub.zh    把两段或多段视频合成一个文件。当片段编码与分辨率一致时，合并走流拷贝，速度最快；
          来源混合时会回退到统一重编码，耗时取决于本机 CPU。

intent.en Best for joining phone clips, combining downloaded segments, and stitching screen
          recordings shot in several parts.
intent.zh 适合拼接手机分段拍摄的素材、合并分段下载的视频，以及把分几次录制的屏幕录像合成完整教程。

badge     🔗 Fast Join • 100% Free • No Watermark / 🔗 快速拼接 • 免费使用 • 无水印

proTip.en Clips from the same phone or camera usually share the same codec, so Stream Copy is
          enough. Only enable unified re-encode when the clips come from different devices.
proTip.zh 同一台手机或相机拍摄的片段编码通常一致，保持「流拷贝」即可最快合并；只有当片段来自
          不同设备、参数差异较大时，再开启「统一重编码」。
```

FAQ 问题（答案按诚实口径撰写，需含流拷贝/重编码取舍与内存限制）：

1. 合并视频是完全免费的吗？需要注册账号吗？
2. 如何把多段视频按顺序合并成一个文件？
3. 「流拷贝合并」和「统一重编码」有什么区别？我该选哪个？
4. 为什么合并后某些播放器里画面尺寸会跳变？
5. 可以合并 1GB 以上的片段吗？

### 6.2 `/convert-audio/` — toolId `Audio`

```
title.en  Audio Converter Online - Convert M4A, WAV, OGG, FLAC to MP3 Free
title.zh  在线音频格式转换 - 免费互转 MP3/FLAC/WAV/OGG（推荐1GB以内）

desc.en   Convert audio online between MP3, M4A, WAV, FLAC, OGG, and AIFF. Files are decoded
          and re-encoded locally in your browser, so nothing is uploaded. WAV and FLAC keep
          the original audio intact; MP3, AAC, and Opus are lossy formats.
desc.zh   在线转换 MP3、M4A、WAV、FLAC、OGG、AIFF 等音频格式。解码与编码都在浏览器本地完成，
          无需上传文件。WAV 与 FLAC 为无损输出；MP3、AAC、Opus 为有损格式。

h1.en     Free Online <span class="highlight">Audio Converter</span>
h1.zh     免费在线<span class="highlight">音频格式转换</span>

seoH2.en  Convert Audio Files Locally - MP3, M4A, FLAC, WAV, OGG
seoH2.zh  在本地转换音频文件 — MP3、M4A、FLAC、WAV、OGG

sub.en    Switch between the audio formats you actually need. Every conversion runs on your own
          CPU, and re-encoding a long recording in the browser takes noticeably longer than a
          short one.
sub.zh    按需在各种音频格式之间互转。所有转换都在您本机 CPU 上完成；在浏览器里重编码长音频，
          耗时通常会明显长于短音频。

intent.en Best for turning phone voice memos into MP3, shrinking oversized WAV recordings, and
          preparing lossless FLAC or WAV for editing.
intent.zh 适合把手机语音备忘录转成 MP3、压缩体积偏大的 WAV 录音，以及为后期剪辑准备无损 FLAC 或 WAV。

badge     🎧 Seven Formats • Lossless WAV/FLAC • No Watermark / 🎧 多格式互转 • 无损 WAV/FLAC • 无水印

proTip.en Only WAV and FLAC keep the original audio intact. Converting a 128 kbps MP3 to a
          320 kbps one will not bring back quality that was already lost.
proTip.zh 只有 WAV 和 FLAC 能完整保留原始音质。把 128kbps 的 MP3 转成 320kbps 并不会找回已经
          损失的信息。
```

FAQ 问题：

1. 音频格式转换免费吗？需要注册账号吗？
2. 怎么把 M4A 转成 MP3？
3. 转成什么格式才是真正的无损？
4. 为什么转换后的文件反而变大了？
5. 可以转换多长的音频？有什么限制？

---

## 7. 配套文章计划（4 篇，避免页面偏薄）

| # | 路径 | 标题 | 目标词 | 内链 |
| --- | --- | --- | --- | --- |
| 1 | `/blog/merge-mp4-without-re-encoding/` | How to Merge MP4 Files Without Re-encoding | `merge mp4 without re-encoding` | `/merge-video/` |
| 2 | `/blog/merge-clips-from-different-devices/` | Joining Clips From Different Devices: Why the Merge Fails and How to Fix It | `join video clips different resolution` | `/merge-video/` |
| 3 | `/blog/convert-m4a-to-mp3-online/` | How to Convert M4A to MP3 Without Uploading Your Recording | `m4a to mp3` | `/convert-audio/` |
| 4 | `/blog/wav-vs-flac-vs-mp3/` | WAV vs FLAC vs MP3: Which One Should You Export? | `wav vs flac`、`lossless audio format` | `/convert-audio/` |

按 `docs/seo-content-standards.md` 走 **v2 标准**（无需截图，但必须有决策对照表 + 本地处理限制 + ≥2 条真实 FAQ）。
后续如补上真实 UI 截图，可升级为 v1。

---

## 8. 验证方案

1. **静态审查**：脚本扫描 `TOOL_PAGES` + `BLOG_PAGES` 的中英文案，确认零违禁词、零「无云剪」
2. **门禁**：`npm run audit:content`（含扩展后的工具页审查）
3. **功能实测**：本地 dev server + 浏览器真实交互
   - 合并 2 个同编码 MP4 → 验证流拷贝路线（应接近瞬时）
   - 合并 2 个不同分辨率片段 → 验证回退重编码路线
   - M4A → MP3、WAV → FLAC → 下载后解码校验格式魔数
4. **产物核对**：`npm run build` 后检查新增 4 个静态页（中英各 2）与 sitemap 条数从 60 → 68
5. ⚠️ `npm run build` 结尾会真实 POST IndexNow 提交全部 URL，**执行前会再向你确认**

---

## 9. 需要你拍板的 4 点

1. **是否同批修口径漏洞 + 清品牌残留？**
   建议**同批**。理由：本轮必然要改 `DEFAULT_PAGE.badge` / FAQ 数量口径（正是「无云剪」所在的行），
   拆两批等于触发两次 IndexNow 全量提交。同批还能顺手把 `conservativeCopy` 的两处漏洞
   （zh 死规则、`faq.q` 不过滤）一起补掉，避免新写的 8 条 FAQ 又踩同一个坑。
2. **Banner 图怎么处理？**
   现有 `getToolShowcaseData()` 每个工具配一张 `public/banner-*.jpg`。缺图会静默回落到 default 分支
   拿走 trim 的素材。选项：① 新出两张图；② 临时复用现有图；③ 先走 CSS 卡片不出图。
3. **音频页 URL 定哪个？** ✅ 已定：`/convert-audio/`（与 `/convert-video/` 命名一致）
   （前者更贴 `audio converter` 这个主词；后者与 `/convert-video/` 命名更一致）
4. **4 篇文章是否同批写？** 建议同批，否则两个新工具页在 AdSense 视角下偏薄。
