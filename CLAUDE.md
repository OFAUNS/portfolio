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
（尚無進行中的打包對話）

### ⏳ 2. 最新開發進度
- 已建立 profile.md，彙整個人資料與 7 件作品集項目完整內容。
- 已建立「網站資料更新需同步 profile.md」的規則（本檔案 + 全域記憶皆已記錄）。

### 🚀 3. 下一步行動 (New Session 起跑點)
（無待辦，等待下次網站內容異動時觸發 profile.md 同步）
