export type ProjectPresentation = {
    layout:
        | "cinema"
        | "projection"
        | "motion"
        | "film"
        | "product"
        | "installation"
        | "system";
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
        kicker: "Mythic 3D Animation",
        modeLabel: "Cinema Case",
        mediaTreatment: "wide",
        imageFit: "cover",
        summary: "用光、教堂與鳥的旅程，建立一支偏敘事電影感的 3D 動畫作品。",
        narrative:
            "這件作品適合用沉浸式大畫面展開，先讓觀者進入光的氛圍，再用連續劇照補上角色、場景與色彩敘事。",
        galleryTitle: "光線、場景與敘事鏡頭",
        contentLabel: "Scene Atlas",
        homeIntro: "以長鏡頭、劇照與彩色玻璃光感建立神話動畫的觀看節奏。",
        focus: [
            {
                title: "神話符號",
                text: "鳥、教堂與彩色玻璃被整理成清楚的視覺母題，讓劇照本身也能說故事。",
            },
            {
                title: "光線敘事",
                text: "頁面以高反差與暖色重點光處理，突出作品裡的成長、穿越與記憶感。",
            },
            {
                title: "鏡頭節奏",
                text: "主要媒體區保留電影比例，後續圖像用連續分鏡方式呈現動畫推進。",
            },
        ],
    },
    projection: {
        layout: "projection",
        accent: "#a78bfa",
        accent2: "#27f5d2",
        kicker: "Projection Mapping",
        modeLabel: "Spatial Motion",
        mediaTreatment: "projection",
        imageFit: "cover",
        summary: "多平面立體光雕作品，重點在生成圖形、AE 特效延展與現場投影層次。",
        narrative:
            "這類作品需要被看成空間中的動態系統，所以頁面用舞台式框線、軸線與分層媒體，強調多面投影的深度。",
        galleryTitle: "多平面、生成圖形與現場光影",
        contentLabel: "Projection Notes",
        homeIntro: "用舞台式比例與分層圖像，把多平面光雕的空間感拉出來。",
        focus: [
            {
                title: "生成圖形",
                text: "p5.js 的 random 圖形邏輯被放在視覺入口，對應作品的規則與不規則。",
            },
            {
                title: "AE 延展",
                text: "中段與底部特效以連續圖像呈現，讓動態變化不只停在影片縮圖。",
            },
            {
                title: "展演尺度",
                text: "版面用框架、線條與大面積黑場保留投影現場的沉浸感。",
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
        modeLabel: "Film Direction",
        mediaTreatment: "film",
        imageFit: "cover",
        summary: "龍岡米干廣告以棚拍、LED 虛擬背景、燈光與調色建立食品廣告質感。",
        narrative:
            "影片作品需要突出鏡頭語言，所以頁面採用廣告分鏡與製作筆記的結構，讓燈光、食物特寫與後期質感都有位置。",
        galleryTitle: "棚拍、食物特寫與後期質感",
        contentLabel: "Shot Board",
        homeIntro: "用廣告分鏡式卡片呈現棚拍、LED 牆、燈光與調色完成度。",
        focus: [
            {
                title: "食品質感",
                text: "開頭特寫與材質畫面被放大處理，讓作品的商業視覺更快被看見。",
            },
            {
                title: "虛擬攝影棚",
                text: "LED 背景與實體拍攝的融合是核心亮點，因此版面保留製作層次。",
            },
            {
                title: "調色氛圍",
                text: "使用暖色重點色，呼應食物、燈光與 DaVinci Resolve 後期質感。",
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
        summary: "以生成式 AI 三重角色鷹架，輔助學生在密碼學劇情解謎遊戲中學習。",
        narrative:
            "遊戲與研究型作品需要清楚展示系統結構、關卡流程與學習目標，所以頁面改成產品案例風格，優先呈現手機畫面和關卡分段。",
        galleryTitle: "AI 角色、關卡流程與手機介面",
        contentLabel: "Game System",
        homeIntro: "用手機產品案例的方式，凸顯 AI 角色、關卡流程與密碼學學習。",
        external: {
            label: "Open Game",
            url: "https://game.ntustmeg.tw/cryptography/index.html",
        },
        focus: [
            {
                title: "三重角色 AI",
                text: "同儕、導師與評分者被整理成學習支援系統，而不是只作為功能描述。",
            },
            {
                title: "關卡式學習",
                text: "辦公室、教室、醫院與走廊的流程用圖像序列呈現，方便理解遊戲進展。",
            },
            {
                title: "研究發表",
                text: "TWELF 2026 的研究脈絡保留在頁面中，讓作品具備專案可信度。",
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
        kicker: "Web System Design",
        modeLabel: "Web Case",
        mediaTreatment: "browser",
        imageFit: "cover",
        summary: "颱風災害救援網站整合前端介面、PHP 後端與 MySQL 資料上傳流程。",
        narrative:
            "網站與後端作品需要把介面、流程和識別一次講清楚，因此頁面用瀏覽器框架、系統資訊與畫面序列展示完整性。",
        galleryTitle: "品牌識別、災害流程與網站畫面",
        contentLabel: "Web System",
        homeIntro: "用系統案例版面呈現網站識別、PHP/MySQL 流程與各頁介面。",
        focus: [
            {
                title: "災害救援流程",
                text: "作品不只展示畫面，也強調資料上傳、後端儲存與救援資訊整理。",
            },
            {
                title: "視覺識別",
                text: "Logo、角色與場景圖像被放在前段，讓網站主題更快建立。",
            },
            {
                title: "頁面完整度",
                text: "多張網站畫面以一致比例排列，讓功能範圍和設計一致性更明顯。",
            },
        ],
    },
};

export function getProjectPresentation(project: WorkLike): ProjectPresentation {
    const key = project.slug?.toLowerCase() || "";
    const title = project.data.title.toLowerCase();
    const genre = project.data.genre?.toLowerCase() || "";

    if (key.includes("game-design") || genre.includes("game")) {
        return presentations.product;
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
