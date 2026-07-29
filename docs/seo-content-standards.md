# HappyConvert SEO Content Standards

Last updated: 2026-07-29

This document is the publishing gate for HappyConvert blog content. A draft is not allowed into `src/config/blogPages.js` unless it passes the checklist below.

## Strategy

Use long-tail, problem-specific tutorials. Each article must solve one clear problem and send the reader to one matching tool page.

Good topics:

- `how to convert mp4 to webm online`
- `compress video for email under 25mb`
- `trim mp4 without re encoding`
- `crop video to 9:16 for tiktok`

Avoid broad topics:

- `best video converter`
- `complete guide to video editing`
- `everything about video formats`

## Article Requirements

- One primary problem per article.
- One primary keyword and 2-4 related long-tail variants.
- Direct answer in the first 100 words.
- At least one real HappyConvert screenshot.
- At least one first-hand note from our product behavior, such as browser memory limits, WebM encoding speed, or local WASM loading.
- One clear internal link target via `toolLink`.
- FAQ section with practical failure cases or decision questions.
- Honest limitations. Do not hide browser-side constraints.

## Anti-AI Style Rules

Do not publish generic AI-style prose. Rewrite or reject if the draft has:

- Overblown claims: "instant", "perfect", "unlimited", "lossless compression", "best ever".
- Generic filler: "in today's digital world", "whether you're a creator or business professional".
- Repeated structure across articles.
- Claims without a product-specific example.
- No screenshots or real UI references.
- Advice that could apply to any video converter.

Preferred style:

- Plain, specific, and practical.
- Explain what actually happens in HappyConvert.
- Mention tradeoffs: browser memory, codec support, WebM speed, large-file risk.
- Use small numbers and real observations when we have them.

## Screenshot Rules

- Use local or production screenshots from HappyConvert, not stock images.
- Store screenshots under `public/blog/`.
- Use descriptive filenames, for example `mp4-to-webm-convert-settings.png`.
- Every screenshot needs an `alt` and a short `caption`.
- Screenshot text should reinforce a step, setting, or limitation.

## Quality Gate

Before publishing, every article must pass:

- [ ] Primary keyword appears naturally in title, description, intro, and at least one H2.
- [ ] The article answers the query within the first 100 words.
- [ ] The article has exactly one primary tool CTA.
- [ ] At least one screenshot exists and has alt text.
- [ ] At least one section contains product-specific experience or limitation.
- [ ] FAQ exists and answers real objections or failure modes.
- [ ] No unsupported claims such as unlimited file size, always instant, or zero quality loss.
- [ ] Build succeeds with `npm run build`.

## First Batch Topics

1. `How to Convert MP4 to WebM Online Without Watermark` -> `/convert-video/`
2. `How to Compress a Video for Email Under 25MB` -> `/compress-video/`
3. `How to Trim MP4 Without Re-encoding` -> `/cut-video/`
4. `How to Crop a Video to 9:16 for TikTok, Reels, and Shorts` -> `/crop-video/`
