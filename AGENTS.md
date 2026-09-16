# AGENTS.md（portfolio 專案）

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

把作品集從「共用版面 + 動畫堆疊」重做成「每件作品有自己的版面」。
**八套專屬版面已全部實作上線**，`feat/golden-ratio-transition` 已由作者合併
（PR #2，merge commit `1a60566`），**現在直接在 `main` 上工作**。

當前未完成的唯一一件事：**換頁轉場的節奏要跟作者逐拍談定**（見下方第 1 項）。

### ⏳ 2. 最新開發進度

**11 件作品，八套專屬版面全部上線。** 版面提案畫布（歷次提案留存）：
<https://Codex.ai/code/artifact/1cc22447-5de1-4f3c-994f-d9bd017911c6>

| layout | 作品 | 骨架 |
|---|---|---|
| `dialogue` | 聽說 Listen & Speak | 布幕中線＋粒子光束、電視雜訊、媒材清楚展示 |
| `system` | 風視颱情 | 三種資料來源剖面＋回報→PHP→MySQL→審核的閉合回路 |
| `product` | 密碼學遊戲 | 四關垂直流線＋回指第一關的結局分歧 |
| `film` | 龍岡米干 | 整頁一條底片，三幕（質感／詩意／張力）依腳本順序 |
| `cinema` | 光的記憶 | **全站唯一亮色頁**，光柱當結構、鳥的航線當動線 |
| `projection` | 立體光雕 | clip-path 照 VP1.png 的五面實體造型切版 |
| `motion` | circle test1 | 七張定格沿圓周等分排開，走完一圈＝一個 loop |
| `installation` | TouchDesigner | 方框圖＋沙/煙/水各自的真實物理動畫 |

**作者反覆糾正出來的三條設計原則（後續做任何版面都照這個）**

1. **版面本身要是作品的隱喻**——不是「標了註解的資訊圖」。第二輪五個方向被退回
   四個，就是因為每件都做成規矩的資訊圖，彼此可以互換＝等於沒有方向。
2. **隱喻要用「怎麼動」去做，不是「切成什麼形狀」**。把版塊 clip-path 成沙柱／
   煙霧橢圓被打回票（「形狀太怪」），改成方框圖＋真實物理動畫才過。
3. **客製內容要第一眼看到**。`.case-shell` 原本是普通 block，設計過的內文被排在
   「概覽＋focus 卡」之後，所以看起來「跟原本沒差太多」。八套版面的 `.case-shell`
   改 flex 直欄用 `order` 排成 **hero → 設計內文 → 概覽 → credits**。

**素材面**：三個元素各兩版（`SAND.jpg`/`sand1.png`、`SMOKE.jpg`/`Smoke1.png`、
`water.png`/`water1.png`）；後台節點畫面 `i1.png`（sand man V2.2.toe）、
`tes1.png`（water V2.3.toe）、`asds.png`。`LIGHT.jpg` 已由作者移到 sanctum-luminis。
**作者刪改檔名後 `interaction.mdx` 曾指向四個不存在的檔（頁面是壞的），已修。**

**水改墨水**：淺色面板的水看不見，根因不是透明度——`mix-blend-mode: screen` 與
canvas 的 `globalCompositeOperation = "lighter"` **兩者都只會加亮**，亮底加亮＝沒變化。
淺色改走墨：合成 `source-over` + CSS `multiply`，色固定為偏冷深藍黑（純黑在紙上會死），
波峰不加亮而是加濃。深色維持原本的發光水。

**轉場做了又退回**：曾把轉場改成「色板擴散 + 黃金格當遮罩翻轉變透明」，
作者看過後決定**還原成原本的圓形擴散 + 方格翻面**（`8f98e82`）。墨水保留。

### 🚀 3. 下一步行動 (New Session 起跑點)

1. **【進行中】轉場腳本逐拍討論。** 已把現行轉場拆成四拍給作者，等他挑要動哪幾拍。
   現行參數（直接從程式碼讀出，不是估的）：
   - 第 0 拍　點擊記下 `clientX/Y` 當圓心；無座標退回畫面中心
   - 第 1 拍　`0→700ms` 新頁以點擊處為圓心 clip-path 圓形擴開，
     `cubic-bezier(0.22,0.61,0.36,1)`；root 預設淡入淡出被中和（否則跟 clip-path 打架）
   - 第 2 拍　`0→約2055ms`（**與第 1 拍重疊**）七格黃金格翻面，
     **每格晚 230ms 接力、時長每格 ×0.9**（gg-0 1100ms → gg-6 585ms），
     新格比舊格晚 90ms 接上
   - 第 3 拍　`transition.finished` 清掉 `data-page-wipe`；內容 700ms 就可讀可點
   - **五個待決點**：整段 2 秒會不會太長／接力順序（現為大格→小格，可改成離點擊處近的先）／
     擴散與翻面現在重疊要不要拆成先後／新舊格只差 90ms 要不要拉開露出空格／
     無座標時要不要改從焦點元素擴散
2. **`8f98e82`（轉場還原）是直接 commit 在 `main` 上的**——作者已合併 PR #2，
   我沒注意到分支已切換。若要走分支＋PR 流程，需把它挪出去。
3. **待作者提供**：TouchDesigner 的展場渲染圖（畫面裡是 `water1.png`）不在 repo，
   只在聊天室。要用就存進 `public/work/touchdesigner-canvas/`。
4. **待作者校正**：聽說的 `client`（暫填 YZU）與 `date`（暫填 2026-06-30）是推測值。
5. `public/unsorted/` 剩 14 個看不出歸屬的檔案（`6112.mp4`、`A3.png`、`IMG_8696.MOV`、11 張截圖）。
6. 首頁 three.js 島（`PortfolioScene`）每次導覽重新水合，140~182ms long task，未解。
   難處：改 `client:idle` 會讓手機也下載 three.js（現在 `client:media` 完全不載）。

### ⚠️ 這個專案的地雷

1. **`!important` 覆寫**：`.dark .portfolio-home` 用三個 `!important` 強制 `#000`。
   加任何覆蓋層前先 `grep !important`，否則會像我一樣寫完才發現沒生效。
2. **`position: fixed` 在作品頁會失效**：`.work-case` 帶 tilt 用的 transform，
   **有 transform 的祖先會成為 fixed 的包含區塊**，fixed 因此等同 absolute、
   跟整頁一樣高並隨頁捲動（實測 `.ls-beam` 高 8168px 而非 viewport）。
   `.ls-sides` 也是同一個狀況。
   → 順帶更正舊版寫的「頁面容器不透明」：`#page-content` **只有 z-index: 2、沒有背景色**，
   所以 fixed 裝飾層只要把 `.case-shell`/`.case-nav`/`.case-footer` 設 `z-index: 1` 就能壓在其上。
3. **整頁高的元素不要用 `filter: blur()`**：會每幀重繪整條。用 linear-gradient 多段 stop 做柔邊。
4. **ClientRouter 會沖掉 `<html>` 的 dataset**：換頁時用新文件的屬性整組覆蓋。
   跨 swap 的狀態旗標要放 closure 變數，不要放 `documentElement.dataset`。
   另外 swap 很快（實測點擊後 157ms），換頁前的演出會被切斷，要延後就包
   `astro:before-preparation` 的 `event.loader`。
   停用 view-transition 動畫會讓 `transition.ready` 被 reject，記得 `.catch(() => {})`。
5. **MDX**：內文寫 `<50%` 會被當成 JSX 標籤而 build 失敗，要跳脫成 `&lt;`。
   **連續數行 `![](...)` 會被併成同一個 `<p>`**——要每張圖各自成格（才能用 CSS counter
   標號、各自當 grid item），每張之間必須空一行。
6. **新圖丟進 `public/` 不會自動最佳化**：不在 image manifest 裡就會直接載原檔
   （踩過一張 5.9MB 的 PNG）。加圖後一定要跑 `node scripts/generate-responsive-images.mjs`。
7. **這台環境驗不了「動作」**：Browser pane 收合時 `document.hidden` 為 true，
   `requestAnimationFrame` 不觸發、**CSS 動畫時間軸完全凍結**
   （`getAnimations()[0].currentTime` 永遠是 0 但 `playState` 是 running）。
   只能驗接線（class、animationName、delay、事件順序），不要把它誤判成程式壞掉。
8. **大段 CSS 不要用 bash heredoc**：約 500 行會讓 bash 回
   `unexpected EOF while looking for matching '` 且整段沒執行。
   改用 `Write` 寫到 scratchpad 的 `.css` 再 `cat` 併進去。
