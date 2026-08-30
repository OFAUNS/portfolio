export type ProjectPresentation = {
    layout:
        | "cinema"
        | "projection"
        | "motion"
        | "film"
        | "product"
        | "installation"
        | "system"
        | "workflow"
        | "hub"
        | "telemetry"
        | "dialogue";
    accent: string;
    accent2: string;
    kicker: string;
    modeLabel: string;
    mediaTreatment: "wide" | "projection" | "loop" | "film" | "phone" | "installation" | "browser";
    imageFit: "cover" | "contain";
    summary: string;
    narrative: string;
    galleryTitle: string;
    contentLabel: string;
    homeIntro: string;
    focus: Array<{
        title: string;
        text: string;
    }>;
    external?: {
        label: string;
        url: string;
    };
};

type WorkLike = {
    slug?: string;
    data: {
        title: string;
        genre?: string;
        description?: string;
    };
};

const presentations: Record<string, ProjectPresentation> = {
    cinema: {
        layout: "cinema",
        accent: "#f6d365",
        accent2: "#78d6ff",
        kicker: "Blender · 3D Animation",
        modeLabel: "Lumen",
        mediaTreatment: "wide",
        imageFit: "cover",
        summary: "鳥、教堂與彩色玻璃三個神話元素。鳥是探索者，教堂是生命旅程，不同顏色的光是旅程裡的各種際遇。",
        narrative:
            "全站唯一的亮色作品頁——其他每一件都是深色底，只有這件反過來，因為它談的就是光。斜射的光柱貫穿整頁當結構，鳥的航線橫過版面越飛越大越亮當閱讀動線，教堂只留細線輪廓點綴。",
        galleryTitle: "五種顏色的光 · 五段際遇",
        contentLabel: "Lumen",
        homeIntro: "全站唯一的亮色頁：光是結構，鳥是動線，教堂只留輪廓。",
        focus: [
            {
                title: "光是版面結構",
                text: "不同顏色的光代表生命裡不同的際遇，所以每一段的環境色就是那段際遇的顏色，格寬也跟著份量走。",
            },
            {
                title: "鳥是閱讀動線",
                text: "牠橫過整頁，越往後越大、越亮——讀者往下讀的方向就是這隻探索者的航線。",
            },
            {
                title: "教堂只留輪廓",
                text: "拱窗用細線畫，不搶光的位置。它是旅程的容器，不是主角。",
            },
        ],
    },
    projection: {
        layout: "projection",
        accent: "#a78bfa",
        accent2: "#27f5d2",
        kicker: "Projection Mapping",
        modeLabel: "Five Planes",
        mediaTreatment: "projection",
        imageFit: "cover",
        summary: "投影打在一個五面的立體物上：上面兩個往內收的斜面、前上方一片菱形、下面兩個外緣外斜再收攏的面。",
        narrative:
            "光雕的問題永遠是接縫——同一個畫面被拆到不同角度的面上，正對的方形圖列會把那個空間資訊整個抹掉。所以版面直接照實體物的造型切：五個面各自傾斜、互相交疊，標題也被中央的稜線切成兩半。",
        galleryTitle: "五個面 · 誰做的、用什麼做",
        contentLabel: "Five Planes",
        homeIntro: "照實體投影物的五面造型切版，標題也被中央稜線切開。",
        focus: [
            {
                title: "上面兩面 · p5.js",
                text: "往內收得很陡，在中央稜線交會。random 的圖形構成——規則產生不規則，這是整件作品的來源。",
            },
            {
                title: "前上方菱形 · AE",
                text: "壓在上段底部之前，不是夾在中間的分隔帶。它負責把上段的生成結果接到下段。",
            },
            {
                title: "下面兩面 · AE",
                text: "外緣先往外斜出去、再收攏到底座，是五邊形不是梯形。填充與動態變化收在這裡。",
            },
        ],
    },
    motion: {
        layout: "motion",
        accent: "#ff8fb3",
        accent2: "#ffe66d",
        kicker: "Motion Study",
        modeLabel: "Loop Study",
        mediaTreatment: "loop",
        imageFit: "cover",
        summary: "AE 圓形動畫試作，重點在圖形節奏、形狀變化與短循環的視覺手感。",
        narrative:
            "小型動態測試不需要厚重敘事，頁面改用節拍、序列與快速瀏覽，讓每張試作圖像像時間軸上的關鍵格。",
        galleryTitle: "圖形節拍與關鍵格序列",
        contentLabel: "Motion Frames",
        homeIntro: "用緊湊序列與高對比色，展示 AE 圖形動畫的節拍和手感。",
        focus: [
            {
                title: "幾何節奏",
                text: "圓形元素被視為主角，頁面以更緊湊的圖像序列呈現形狀變化。",
            },
            {
                title: "循環觀看",
                text: "本機影片會直接用播放器呈現，讓試作可以被當作 loop 反覆檢視。",
            },
            {
                title: "快速辨識",
                text: "資訊區縮短文字重量，讓作品重點回到畫面與動態。",
            },
        ],
    },
    film: {
        layout: "film",
        accent: "#ff9f45",
        accent2: "#ffd166",
        kicker: "Commercial Film",
        modeLabel: "Film Strip",
        mediaTreatment: "film",
        imageFit: "cover",
        summary: "腳本走三段：特寫食物體現質感、黑底字卡增添詩意、食神橋段拉出張力。燈光與腳本由我負責。",
        narrative:
            "整頁就是一條底片。齒孔貫穿左右兩側、鏡頭號碼壓在每一格底下當結構，三幕依腳本順序往下走——質感、詩意、張力各換一種視覺語氣，中間那一幕是全片唯一的休止符。",
        galleryTitle: "三幕 · 十九顆鏡頭",
        contentLabel: "Shot Board",
        homeIntro: "整頁排成一條底片，照腳本的三段跳：質感、詩意、張力。",
        focus: [
            {
                title: "腳本的三段跳",
                text: "特寫食物 → 五言絕句字卡 → 食神橋段。一支米干廣告裡同時放絕句和周星馳，這是它最特別的地方。",
            },
            {
                title: "燈光是決策",
                text: "前段白棚亮調做食物質感，中段黑底只留白字，末段換成飽和藍色光柱把對比開到最大。",
            },
            {
                title: "虛實接縫",
                text: "LED 牆的虛擬背景與實體拍攝融合得好不好，只有把棚拍現場跟成片並排才看得出來。",
            },
        ],
    },
    product: {
        layout: "product",
        accent: "#5ddcff",
        accent2: "#b8ff70",
        kicker: "AI Learning Game",
        modeLabel: "Playable System",
        mediaTreatment: "phone",
        imageFit: "contain",
        summary: "四關密室逃脫，把古典密碼做成真的打不開就過不去的鎖；AI 分飾同儕、導師與評分者陪玩。",
        narrative:
            "這件作品的結構是一條線：四個場景逐漸揭露主角的處境，密碼技術同步加難，而第一關那個可以略過的謎題，決定了第四關的結局。所以頁面沿著這條關卡流線往下走，把分歧點畫出來，而不是把畫面平鋪成截圖牆。",
        galleryTitle: "三重角色、四關流線與研究結果",
        contentLabel: "Level Track",
        homeIntro: "沿關卡流線往下走：四關逐漸加難的古典密碼，加上一個回指第一關的結局分歧。",
        external: {
            label: "Open Game",
            url: "https://game.ntustmeg.tw/cryptography/index.html",
        },
        focus: [
            {
                title: "密碼是鎖不是課文",
                text: "凱薩加密、替換式密碼、密碼盤、明文與金鑰依序變成四道過不去的關，玩家為了離開房間才去理解它們。",
            },
            {
                title: "三個立場不同的 AI",
                text: "同儕降低求助成本、導師給方向不給答案、評分者擋下錯誤推論——同一句求助問過去，拿回來的東西不一樣。",
            },
            {
                title: "限制本身就是發現",
                text: "受試者說 AI 不能直接講答案，回饋因此迂迴難懂。刻意的設計限制與使用者的抱怨是同一件事，這個問題沒有被藏起來。",
            },
        ],
    },
    installation: {
        layout: "installation",
        accent: "#d9f99d",
        accent2: "#8b5cf6",
        kicker: "Interactive Installation",
        modeLabel: "Experience Design",
        mediaTreatment: "installation",
        imageFit: "cover",
        summary: "TouchDesigner 互動投影讓觀者以身體動作在虛擬畫布上留下時間痕跡。",
        narrative:
            "互動設計作品的重點是人、空間與時間的關係，因此頁面以展場紀錄、大面積影像與概念段落呈現體驗感。",
        galleryTitle: "身體、投影與痕跡的留存",
        contentLabel: "Experience Map",
        homeIntro: "用展場紀錄式版面，把身體互動、投影畫布與時間殘影串起來。",
        focus: [
            {
                title: "存在與時間",
                text: "概念文字保留詩性，但版面用清楚段落讓主題更容易被閱讀。",
            },
            {
                title: "身體互動",
                text: "人物、粒子與材質圖像被安排成體驗流程，呈現觀者如何參與作品。",
            },
            {
                title: "殘影美學",
                text: "深色場域搭配亮色線條，呼應作品中痕跡留存與消散的感受。",
            },
        ],
    },
    system: {
        layout: "system",
        accent: "#34d399",
        accent2: "#60a5fa",
        kicker: "Disaster Information System",
        modeLabel: "Data Path",
        mediaTreatment: "browser",
        imageFit: "contain",
        summary: "颱風災害資訊網站。民眾回報的災情經 PHP 寫入 MySQL，審核後回到公開的索引與地圖上。",
        narrative:
            "這個網站同時處理三種來源完全不同的資料——外部即時氣象、預先寫好的災害知識、以及民眾自己上傳的災情。它們在畫面上看起來一樣，在系統裡卻走三條路徑，所以頁面依照資料的路徑排，而不是依照選單順序排。",
        galleryTitle: "三種資料來源與一條閉合的回路",
        contentLabel: "Data Path",
        homeIntro: "依資料路徑排版：外部氣象、編輯內容與民眾回報三條線，最後閉合成一個回路。",
        focus: [
            {
                title: "三條資料路徑",
                text: "氣象資料直接嵌入不進資料庫、災害知識走靜態頁、民眾回報才是 PHP 與 MySQL 實際承擔的部分。",
            },
            {
                title: "先畫架構再做欄位",
                text: "資訊架構圖是先畫的：索引頁要顯示什麼，回報表單就收什麼，兩端的欄位照著同一張圖對應。",
            },
            {
                title: "審核是刻意留的一關",
                text: "災情資料不能收到就發。表單送出後停在待審狀態，通過才會出現在索引與地圖上。",
            },
        ],
    },
    workflow: {
        layout: "workflow",
        accent: "#22d3ee",
        accent2: "#a3e635",
        kicker: "Bid Automation Pipeline",
        modeLabel: "Workflow Case",
        mediaTreatment: "browser",
        imageFit: "contain",
        summary: "把政府標案的獵尋、解析、評分與提案初稿串成一條 n8n 自動化流水線。",
        narrative:
            "流程型作品的重點是「哪一段交給機器、哪一段留給人」，因此頁面用流水線分段與決策閘門呈現，讓自動化的邊界比視覺效果更早被看見。",
        galleryTitle: "流水線分段與決策閘門",
        contentLabel: "Pipeline Notes",
        homeIntro: "用流水線圖解呈現標案獵尋、RFP 解析、三維評分到提案產出的自動化邊界。",
        focus: [
            {
                title: "自動化邊界",
                text: "機器負責篩掉不值得投的案子，投哪一案仍然是人的決定，這條線在頁面上被明確畫出來。",
            },
            {
                title: "三維評分",
                text: "契合度、效益與成本風險被拆成可檢驗的分數，而不是一句「這案子看起來不錯」。",
            },
            {
                title: "組織記憶",
                text: "得標與落標結果都回寫記憶庫，讓評分基準隨實際結果收斂，而非停在初版規則。",
            },
        ],
    },
    hub: {
        layout: "hub",
        accent: "#818cf8",
        accent2: "#f0abfc",
        kicker: "AI Resource Hub",
        modeLabel: "Application Case",
        mediaTreatment: "browser",
        imageFit: "contain",
        summary: "把分散的模型、提示詞、工具與知識來源收斂成單一入口與統一調度層。",
        narrative:
            "整合型應用要先講清楚「整合前有多亂」，頁面因此以中心調度層搭配輻射資源節點呈現，再帶出介面上實際怎麼被使用。",
        galleryTitle: "調度架構與介面配置",
        contentLabel: "System Map",
        homeIntro: "用中心調度層與資源節點圖，說明多來源 AI 資源如何收斂成一個入口。",
        focus: [
            {
                title: "統一調度層",
                text: "路由、憑證與用量集中在同一層，換供應商不必改動上層的任何流程。",
            },
            {
                title: "資源可版本化",
                text: "提示詞與工作流被當成可回溯的資產管理，而不是散在各處的一次性文字。",
            },
            {
                title: "成本可見",
                text: "用量與支出在入口就被看見，超過門檻直接提示，不必等月底對帳才發現。",
            },
        ],
    },
    dialogue: {
        layout: "dialogue",
        accent: "#ff2fd0",
        accent2: "#22e3ff",
        kicker: "Interactive Installation",
        modeLabel: "Dialogue Field",
        mediaTreatment: "wide",
        imageFit: "cover",
        summary: "兩人被一道布幕隔開，只能靠聲音溝通；語意越接近，畫面越清晰、雜訊越低。",
        narrative:
            "這件作品談的是理解與誤解之間的落差，所以頁面本身也被一道垂直的布幕切成兩側——內容沿著中線左右交錯，標題帶著尚未對齊的殘影，直到讀者往下讀才收攏。",
        galleryTitle: "資訊失真與重組",
        contentLabel: "Dialogue Field",
        homeIntro: "用一道貫穿版面的布幕與未對齊的殘影，把「以為聽懂了」變成看得見的東西。",
        external: {
            label: "Watch Film",
            url: "https://youtu.be/qFBwV248EZ4",
        },
        focus: [
            {
                title: "失真是機制",
                text: "接收端一旦產生偏誤，文字就被部分遮蔽、聲音同步模糊化——干擾不是效果，是把誤解顯影出來的手段。",
            },
            {
                title: "理解是過程",
                text: "語意逐漸趨近時畫面才慢慢變清晰、雜訊才減少。清晰度是溝通累積出來的結果，不是一開始就給的。",
            },
            {
                title: "結果不給結論",
                text: "溝通失敗時系統把兩人的內容分開總結並列，用對比把落差攤開，讓體驗者自己看見斷點在哪裡。",
            },
        ],
    },
    telemetry: {
        layout: "telemetry",
        accent: "#fbbf24",
        accent2: "#22d3ee",
        kicker: "VR Learning Telemetry",
        modeLabel: "Monitoring Case",
        mediaTreatment: "browser",
        imageFit: "contain",
        summary: "收集 VR 教育遊戲中的學習行為事件，整合成教師端可即時判讀的監控指標。",
        narrative:
            "監控型作品的價值在於「補上原本看不到的東西」，所以頁面先建立觀察盲區的問題感，再用資料流與監控台畫面說明它如何被填補。",
        galleryTitle: "資料流與教師監控台",
        contentLabel: "Telemetry Map",
        homeIntro: "用資料流與監控台配置，說明頭戴裝置內的學習行為如何變成教師端指標。",
        focus: [
            {
                title: "觀察盲區",
                text: "學生戴上頭盔後教師就失去觀察權，這件作品處理的是這個具體缺口。",
            },
            {
                title: "事件整合",
                text: "跨場次、跨班級的事件被統一格式與合併計算，斷線資料也會補傳後歸位。",
            },
            {
                title: "可調門檻",
                text: "警示門檻依關卡難度個別設定，避免把本來就難的關誤報成學習障礙。",
            },
        ],
    },
};

export function getProjectPresentation(project: WorkLike): ProjectPresentation {
    const key = project.slug?.toLowerCase() || "";
    const title = project.data.title.toLowerCase();
    const genre = project.data.genre?.toLowerCase() || "";

    if (key.includes("bid") || title.includes("標案")) {
        return presentations.workflow;
    }

    if (key.includes("hub") || title.includes("資源整合")) {
        return presentations.hub;
    }

    if (key.includes("telemetry") || title.includes("監控")) {
        return presentations.telemetry;
    }

    if (key.includes("game-design") || genre.includes("game")) {
        return presentations.product;
    }

    if (key.includes("listen-and-speak")) {
        return presentations.dialogue;
    }

    if (key.includes("interaction") || genre.includes("interaction")) {
        return presentations.installation;
    }

    if (key.includes("web_design") || genre.includes("web")) {
        return presentations.system;
    }

    if (key.includes("film") || genre === "film" || title.includes("米干")) {
        return presentations.film;
    }

    if (key.includes("animation1") || title.includes("光雕")) {
        return presentations.projection;
    }

    if (key.includes("animation2") || title.includes("circle")) {
        return presentations.motion;
    }

    return presentations.cinema;
}
