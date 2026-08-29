# CLAUDE.md（portfolio 專案）

## 專案基本資訊
- Astro 個人作品集網站（OFAUNS / 陳昱洋）。
- 個人資料與經歷定義於 `src/pages/about.astro`、`src/pages/index.astro`（PROFILE / EDUCATION / SKILLS / EXPERIENCE 常數）。
- 作品集項目為 Astro content collection，內容在 `src/content/work/**/*.mdx`。

## 關鍵決定與限制
- 根目錄 [profile.md](profile.md) 是全站資料（個人資料 + 所有作品集項目）的彙整萃取檔，作為持久化備份文件。
- **規則：只要修改了以下任一項，就要同步更新 profile.md 對應段落，並在回覆中告知使用者已同步，不用等使用者重新要求萃取：**
  - `src/pages/about.astro` 或 `src/pages/index.astro` 內的 PROFILE / EDUCATION / SKILLS / EXPERIENCE 內容
  - `src/content/work/` 底下任何 `.mdx` 作品項目的新增、修改、刪除

<!-- ==================== 以下為動態狀態區（PreCompact 自動更新 / 手動打包時更新，標記以上內容不得修改） ==================== -->

### 🎯 1. 目前對話的最終目標

把作品集從「共用版面 + 動畫堆疊」重做成「每件作品有自己的版面」，並解決轉場卡頓。
分支 `feat/golden-ratio-transition`（**尚未合併回 main**）。

### ⏳ 2. 最新開發進度

**作品數 7 → 11 件**（新增 AI-System 分類三件 + 聽說 Listen & Speak）

- **新分類 AI-System**：標案自動化工作流、AIevent 活動情報整合 App、VR 教育課程教師監控儀表板。
  三件的內文**曾經是我依標題編造的**，作者補上實際截圖後全部重寫。
  → **教訓：只有標題就不要寫內文**，把 frontmatter 建好、內文標「待作者提供」。
- **聽說 Listen & Speak**（Interaction-Design）：內容用作者原文，入圍 ISARCH 兩個類別。
  做了專屬版面 `case-layout-dialogue`——布幕中線、標題雙重殘影收斂、
  `.ls-row` 左右分欄、固定的巨大「聽／說」浮水印、成功／失敗兩欄對照。

**轉場重做**：假轉場（攔截點擊 → 播 650ms → 整頁重載）改成 Astro `ClientRouter`。
click→DOM swap 從 1003ms 降到 36~56ms。加上方格翻面 + 從點擊處的圓形擴散。

**效能**：作品頁曾持續 24fps，元凶是 `case-energy-drift` 動 `background-position`
（無法交給合成器，每幀重繪全螢幕漸層）。連同整批裝飾動畫一起移除
（`[...slug].astro` −16.9KB、`portfolio-interactions.js` −6.5KB、`globals.css` −22.9KB／99 條）。

**照片重整**：`public/` 根目錄 135 個平放檔案 → `public/work/<作品>/` 各自資料夾。
修掉 `generate-responsive-images.mjs` 沒呼叫 sharp `.rotate()` 的 EXIF 方向 bug。

**版面提案**：七件尚未客製的作品各做了一個結構方向，存成設計畫布
<https://claude.ai/code/artifact/1cc22447-5de1-4f3c-994f-d9bd017911c6>

### 🚀 3. 下一步行動 (New Session 起跑點)

1. **等使用者從畫布挑方向**，挑中的實作成程式碼（作法照聽說那套：
   在 `projectPresentation.ts` 加 layout、比對規則要放在寬鬆比對之前、
   自訂結構寫在 mdx、CSS 掛在 `.case-layout-xxx` 底下）。
2. **分支未合併**：`feat/golden-ratio-transition` 有 10+ 個 commit，`main` 停在 `9d1597d`。
3. **待作者校正**：聽說的 `client`（暫填 YZU）與 `date`（暫填 2026-06-30）是推測值。
4. `public/unsorted/` 剩 14 個看不出歸屬的檔案（`6112.mp4`、`A3.png`、`IMG_8696.MOV`、11 張截圖）。
5. 首頁 three.js 島（`PortfolioScene`）每次導覽重新水合，140~182ms long task，未解。
   難處：改 `client:idle` 會讓手機也下載 three.js（現在 `client:media` 完全不載）。

### ⚠️ 這個專案的三個地雷

1. **`!important` 覆寫**：`.dark .portfolio-home` 用三個 `!important` 強制 `#000`。
   加任何覆蓋層前先 `grep !important`，否則會像我一樣寫完才發現沒生效。
2. **頁面容器不透明**：`#page-content` z-index 2 且容器有底色，
   背景層只有「在內容之上」或「完全看不見」兩種狀態，沒有中間值。
3. **MDX**：內文寫 `<50%` 會被當成 JSX 標籤而 build 失敗，要跳脫成 `&lt;`。
