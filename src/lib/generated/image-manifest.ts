export type ImageVariant = {
    src: string;
    width: number;
    size: number;
    type: "image/webp";
};

export type ImageManifestEntry = {
    src: string;
    width: number;
    height: number;
    aspectRatio: number;
    originalSize: number;
    variants: ImageVariant[];
};

export const imageManifest = {
    "/favico.jpg": {
        "src": "/favico.jpg",
        "width": 1109,
        "height": 1146,
        "aspectRatio": 0.96771,
        "originalSize": 138954,
        "variants": [
            {
                "src": "/optimized/favico-480.webp",
                "width": 480,
                "size": 12312,
                "type": "image/webp"
            },
            {
                "src": "/optimized/favico-800.webp",
                "width": 800,
                "size": 18874,
                "type": "image/webp"
            }
        ]
    },
    "/header.jpg": {
        "src": "/header.jpg",
        "width": 6048,
        "height": 4032,
        "aspectRatio": 1.5,
        "originalSize": 1014758,
        "variants": [
            {
                "src": "/optimized/header-480.webp",
                "width": 480,
                "size": 25466,
                "type": "image/webp"
            },
            {
                "src": "/optimized/header-800.webp",
                "width": 800,
                "size": 48424,
                "type": "image/webp"
            },
            {
                "src": "/optimized/header-1200.webp",
                "width": 1200,
                "size": 80550,
                "type": "image/webp"
            },
            {
                "src": "/optimized/header-1600.webp",
                "width": 1600,
                "size": 119312,
                "type": "image/webp"
            }
        ]
    },
    "/melogo.png": {
        "src": "/melogo.png",
        "width": 258,
        "height": 256,
        "aspectRatio": 1.00781,
        "originalSize": 44560,
        "variants": [
            {
                "src": "/optimized/melogo-258.webp",
                "width": 258,
                "size": 17960,
                "type": "image/webp"
            }
        ]
    },
    "/og-image.png": {
        "src": "/og-image.png",
        "width": 1280,
        "height": 720,
        "aspectRatio": 1.77778,
        "originalSize": 1602936,
        "variants": [
            {
                "src": "/optimized/og-image-480.webp",
                "width": 480,
                "size": 9024,
                "type": "image/webp"
            },
            {
                "src": "/optimized/og-image-800.webp",
                "width": 800,
                "size": 24526,
                "type": "image/webp"
            },
            {
                "src": "/optimized/og-image-1200.webp",
                "width": 1200,
                "size": 75626,
                "type": "image/webp"
            }
        ]
    },
    "/work/ai-resource-hub/hub-01.png": {
        "src": "/work/ai-resource-hub/hub-01.png",
        "width": 1919,
        "height": 1028,
        "aspectRatio": 1.86673,
        "originalSize": 363314,
        "variants": [
            {
                "src": "/optimized/hub-01-480.webp",
                "width": 480,
                "size": 8906,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-01-800.webp",
                "width": 800,
                "size": 22162,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-01-1200.webp",
                "width": 1200,
                "size": 45780,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-01-1600.webp",
                "width": 1600,
                "size": 78294,
                "type": "image/webp"
            }
        ]
    },
    "/work/ai-resource-hub/hub-03.png": {
        "src": "/work/ai-resource-hub/hub-03.png",
        "width": 1750,
        "height": 910,
        "aspectRatio": 1.92308,
        "originalSize": 126276,
        "variants": [
            {
                "src": "/optimized/hub-03-480.webp",
                "width": 480,
                "size": 4900,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-03-800.webp",
                "width": 800,
                "size": 10694,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-03-1200.webp",
                "width": 1200,
                "size": 21420,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-03-1600.webp",
                "width": 1600,
                "size": 34200,
                "type": "image/webp"
            }
        ]
    },
    "/work/ai-resource-hub/hub-05.png": {
        "src": "/work/ai-resource-hub/hub-05.png",
        "width": 1752,
        "height": 914,
        "aspectRatio": 1.91685,
        "originalSize": 301284,
        "variants": [
            {
                "src": "/optimized/hub-05-480.webp",
                "width": 480,
                "size": 8266,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-05-800.webp",
                "width": 800,
                "size": 18198,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-05-1200.webp",
                "width": 1200,
                "size": 37120,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-05-1600.webp",
                "width": 1600,
                "size": 60262,
                "type": "image/webp"
            }
        ]
    },
    "/work/ai-resource-hub/hub-06.png": {
        "src": "/work/ai-resource-hub/hub-06.png",
        "width": 1754,
        "height": 915,
        "aspectRatio": 1.91694,
        "originalSize": 225584,
        "variants": [
            {
                "src": "/optimized/hub-06-480.webp",
                "width": 480,
                "size": 5908,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-06-800.webp",
                "width": 800,
                "size": 15226,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-06-1200.webp",
                "width": 1200,
                "size": 33804,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-06-1600.webp",
                "width": 1600,
                "size": 56020,
                "type": "image/webp"
            }
        ]
    },
    "/work/ai-resource-hub/hub-07.png": {
        "src": "/work/ai-resource-hub/hub-07.png",
        "width": 1745,
        "height": 902,
        "aspectRatio": 1.93459,
        "originalSize": 168300,
        "variants": [
            {
                "src": "/optimized/hub-07-480.webp",
                "width": 480,
                "size": 3618,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-07-800.webp",
                "width": 800,
                "size": 10596,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-07-1200.webp",
                "width": 1200,
                "size": 20112,
                "type": "image/webp"
            },
            {
                "src": "/optimized/hub-07-1600.webp",
                "width": 1600,
                "size": 35674,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-01.png": {
        "src": "/work/bid-automation/bid-01.png",
        "width": 2176,
        "height": 1470,
        "aspectRatio": 1.48027,
        "originalSize": 275129,
        "variants": [
            {
                "src": "/optimized/bid-01-480.webp",
                "width": 480,
                "size": 11784,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-01-800.webp",
                "width": 800,
                "size": 29962,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-01-1200.webp",
                "width": 1200,
                "size": 59160,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-01-1600.webp",
                "width": 1600,
                "size": 89576,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-05.png": {
        "src": "/work/bid-automation/bid-05.png",
        "width": 2057,
        "height": 1463,
        "aspectRatio": 1.40602,
        "originalSize": 327659,
        "variants": [
            {
                "src": "/optimized/bid-05-480.webp",
                "width": 480,
                "size": 9402,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-05-800.webp",
                "width": 800,
                "size": 23622,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-05-1200.webp",
                "width": 1200,
                "size": 49214,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-05-1600.webp",
                "width": 1600,
                "size": 78116,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-10.png": {
        "src": "/work/bid-automation/bid-10.png",
        "width": 657,
        "height": 846,
        "aspectRatio": 0.7766,
        "originalSize": 113560,
        "variants": [
            {
                "src": "/optimized/bid-10-480.webp",
                "width": 480,
                "size": 33036,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-12.png": {
        "src": "/work/bid-automation/bid-12.png",
        "width": 654,
        "height": 711,
        "aspectRatio": 0.91983,
        "originalSize": 116418,
        "variants": [
            {
                "src": "/optimized/bid-12-480.webp",
                "width": 480,
                "size": 42402,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-15.png": {
        "src": "/work/bid-automation/bid-15.png",
        "width": 1914,
        "height": 1029,
        "aspectRatio": 1.86006,
        "originalSize": 145026,
        "variants": [
            {
                "src": "/optimized/bid-15-480.webp",
                "width": 480,
                "size": 6508,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-15-800.webp",
                "width": 800,
                "size": 15726,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-15-1200.webp",
                "width": 1200,
                "size": 35016,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-15-1600.webp",
                "width": 1600,
                "size": 57530,
                "type": "image/webp"
            }
        ]
    },
    "/work/bid-automation/bid-18.png": {
        "src": "/work/bid-automation/bid-18.png",
        "width": 1069,
        "height": 669,
        "aspectRatio": 1.59791,
        "originalSize": 183943,
        "variants": [
            {
                "src": "/optimized/bid-18-480.webp",
                "width": 480,
                "size": 9198,
                "type": "image/webp"
            },
            {
                "src": "/optimized/bid-18-800.webp",
                "width": 800,
                "size": 24940,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an2.png": {
        "src": "/work/circle-test/an2.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 111656,
        "variants": [
            {
                "src": "/optimized/an2-480.webp",
                "width": 480,
                "size": 608,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an2-800.webp",
                "width": 800,
                "size": 1250,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an2-1200.webp",
                "width": 1200,
                "size": 2448,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an2-1600.webp",
                "width": 1600,
                "size": 3718,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an3.png": {
        "src": "/work/circle-test/an3.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 248121,
        "variants": [
            {
                "src": "/optimized/an3-480.webp",
                "width": 480,
                "size": 1406,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an3-800.webp",
                "width": 800,
                "size": 2482,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an3-1200.webp",
                "width": 1200,
                "size": 4290,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an3-1600.webp",
                "width": 1600,
                "size": 6278,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an4.png": {
        "src": "/work/circle-test/an4.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 390227,
        "variants": [
            {
                "src": "/optimized/an4-480.webp",
                "width": 480,
                "size": 2212,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an4-800.webp",
                "width": 800,
                "size": 4236,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an4-1200.webp",
                "width": 1200,
                "size": 6762,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an4-1600.webp",
                "width": 1600,
                "size": 9582,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an5.png": {
        "src": "/work/circle-test/an5.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 375896,
        "variants": [
            {
                "src": "/optimized/an5-480.webp",
                "width": 480,
                "size": 2368,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an5-800.webp",
                "width": 800,
                "size": 4508,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an5-1200.webp",
                "width": 1200,
                "size": 7142,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an5-1600.webp",
                "width": 1600,
                "size": 10064,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an6.png": {
        "src": "/work/circle-test/an6.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 511759,
        "variants": [
            {
                "src": "/optimized/an6-480.webp",
                "width": 480,
                "size": 3492,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an6-800.webp",
                "width": 800,
                "size": 6248,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an6-1200.webp",
                "width": 1200,
                "size": 9614,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an6-1600.webp",
                "width": 1600,
                "size": 13394,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an7.png": {
        "src": "/work/circle-test/an7.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 455342,
        "variants": [
            {
                "src": "/optimized/an7-480.webp",
                "width": 480,
                "size": 3756,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an7-800.webp",
                "width": 800,
                "size": 6764,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an7-1200.webp",
                "width": 1200,
                "size": 10110,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an7-1600.webp",
                "width": 1600,
                "size": 13688,
                "type": "image/webp"
            }
        ]
    },
    "/work/circle-test/an8.png": {
        "src": "/work/circle-test/an8.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 423276,
        "variants": [
            {
                "src": "/optimized/an8-480.webp",
                "width": 480,
                "size": 3550,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an8-800.webp",
                "width": 800,
                "size": 6604,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an8-1200.webp",
                "width": 1200,
                "size": 10158,
                "type": "image/webp"
            },
            {
                "src": "/optimized/an8-1600.webp",
                "width": 1600,
                "size": 14256,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/iPhone17.png": {
        "src": "/work/cryptography-game/iPhone17.png",
        "width": 6000,
        "height": 4500,
        "aspectRatio": 1.33333,
        "originalSize": 7451527,
        "variants": [
            {
                "src": "/optimized/iphone17-480.webp",
                "width": 480,
                "size": 12248,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone17-800.webp",
                "width": 800,
                "size": 25860,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone17-1200.webp",
                "width": 1200,
                "size": 45464,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone17-1600.webp",
                "width": 1600,
                "size": 67938,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/iPhoneXs.png": {
        "src": "/work/cryptography-game/iPhoneXs.png",
        "width": 6000,
        "height": 4500,
        "aspectRatio": 1.33333,
        "originalSize": 16251506,
        "variants": [
            {
                "src": "/optimized/iphonexs-480.webp",
                "width": 480,
                "size": 16488,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphonexs-800.webp",
                "width": 800,
                "size": 38316,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphonexs-1200.webp",
                "width": 1200,
                "size": 77052,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphonexs-1600.webp",
                "width": 1600,
                "size": 127662,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/iPhone_LOCK.png": {
        "src": "/work/cryptography-game/iPhone_LOCK.png",
        "width": 5444,
        "height": 4200,
        "aspectRatio": 1.29619,
        "originalSize": 15364575,
        "variants": [
            {
                "src": "/optimized/iphone_lock-480.webp",
                "width": 480,
                "size": 36686,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone_lock-800.webp",
                "width": 800,
                "size": 78862,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone_lock-1200.webp",
                "width": 1200,
                "size": 158818,
                "type": "image/webp"
            },
            {
                "src": "/optimized/iphone_lock-1600.webp",
                "width": 1600,
                "size": 253714,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n10.png": {
        "src": "/work/cryptography-game/n10.png",
        "width": 581,
        "height": 1079,
        "aspectRatio": 0.53846,
        "originalSize": 206041,
        "variants": [
            {
                "src": "/optimized/n10-480.webp",
                "width": 480,
                "size": 12548,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n11.png": {
        "src": "/work/cryptography-game/n11.png",
        "width": 571,
        "height": 1079,
        "aspectRatio": 0.52919,
        "originalSize": 137047,
        "variants": [
            {
                "src": "/optimized/n11-480.webp",
                "width": 480,
                "size": 17176,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n12.png": {
        "src": "/work/cryptography-game/n12.png",
        "width": 583,
        "height": 1079,
        "aspectRatio": 0.54032,
        "originalSize": 202793,
        "variants": [
            {
                "src": "/optimized/n12-480.webp",
                "width": 480,
                "size": 15690,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n15.png": {
        "src": "/work/cryptography-game/n15.png",
        "width": 583,
        "height": 1075,
        "aspectRatio": 0.54233,
        "originalSize": 292476,
        "variants": [
            {
                "src": "/optimized/n15-480.webp",
                "width": 480,
                "size": 11992,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n18.png": {
        "src": "/work/cryptography-game/n18.png",
        "width": 583,
        "height": 1074,
        "aspectRatio": 0.54283,
        "originalSize": 247284,
        "variants": [
            {
                "src": "/optimized/n18-480.webp",
                "width": 480,
                "size": 17740,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n2.png": {
        "src": "/work/cryptography-game/n2.png",
        "width": 581,
        "height": 1079,
        "aspectRatio": 0.53846,
        "originalSize": 220303,
        "variants": [
            {
                "src": "/optimized/n2-480.webp",
                "width": 480,
                "size": 16424,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n21.png": {
        "src": "/work/cryptography-game/n21.png",
        "width": 684,
        "height": 1269,
        "aspectRatio": 0.53901,
        "originalSize": 202468,
        "variants": [
            {
                "src": "/optimized/n21-480.webp",
                "width": 480,
                "size": 9660,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n23.png": {
        "src": "/work/cryptography-game/n23.png",
        "width": 580,
        "height": 1079,
        "aspectRatio": 0.53753,
        "originalSize": 343002,
        "variants": [
            {
                "src": "/optimized/n23-480.webp",
                "width": 480,
                "size": 23568,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n25.png": {
        "src": "/work/cryptography-game/n25.png",
        "width": 774,
        "height": 1439,
        "aspectRatio": 0.53787,
        "originalSize": 121717,
        "variants": [
            {
                "src": "/optimized/n25-480.webp",
                "width": 480,
                "size": 8748,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n26.png": {
        "src": "/work/cryptography-game/n26.png",
        "width": 585,
        "height": 1079,
        "aspectRatio": 0.54217,
        "originalSize": 122720,
        "variants": [
            {
                "src": "/optimized/n26-480.webp",
                "width": 480,
                "size": 20246,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n27.png": {
        "src": "/work/cryptography-game/n27.png",
        "width": 581,
        "height": 1079,
        "aspectRatio": 0.53846,
        "originalSize": 293245,
        "variants": [
            {
                "src": "/optimized/n27-480.webp",
                "width": 480,
                "size": 11566,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n3.png": {
        "src": "/work/cryptography-game/n3.png",
        "width": 581,
        "height": 1079,
        "aspectRatio": 0.53846,
        "originalSize": 394053,
        "variants": [
            {
                "src": "/optimized/n3-480.webp",
                "width": 480,
                "size": 26076,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n4.png": {
        "src": "/work/cryptography-game/n4.png",
        "width": 577,
        "height": 1079,
        "aspectRatio": 0.53475,
        "originalSize": 292203,
        "variants": [
            {
                "src": "/optimized/n4-480.webp",
                "width": 480,
                "size": 31160,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n5.png": {
        "src": "/work/cryptography-game/n5.png",
        "width": 575,
        "height": 1078,
        "aspectRatio": 0.5334,
        "originalSize": 148362,
        "variants": [
            {
                "src": "/optimized/n5-480.webp",
                "width": 480,
                "size": 21658,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n6.png": {
        "src": "/work/cryptography-game/n6.png",
        "width": 580,
        "height": 1079,
        "aspectRatio": 0.53753,
        "originalSize": 47775,
        "variants": [
            {
                "src": "/optimized/n6-480.webp",
                "width": 480,
                "size": 4002,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n7.png": {
        "src": "/work/cryptography-game/n7.png",
        "width": 582,
        "height": 1079,
        "aspectRatio": 0.53939,
        "originalSize": 389960,
        "variants": [
            {
                "src": "/optimized/n7-480.webp",
                "width": 480,
                "size": 12074,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n8.png": {
        "src": "/work/cryptography-game/n8.png",
        "width": 582,
        "height": 1079,
        "aspectRatio": 0.53939,
        "originalSize": 112734,
        "variants": [
            {
                "src": "/optimized/n8-480.webp",
                "width": 480,
                "size": 6560,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/n9.png": {
        "src": "/work/cryptography-game/n9.png",
        "width": 576,
        "height": 1076,
        "aspectRatio": 0.53532,
        "originalSize": 255943,
        "variants": [
            {
                "src": "/optimized/n9-480.webp",
                "width": 480,
                "size": 17126,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/p22.png": {
        "src": "/work/cryptography-game/p22.png",
        "width": 1163,
        "height": 2159,
        "aspectRatio": 0.53868,
        "originalSize": 858147,
        "variants": [
            {
                "src": "/optimized/p22-480.webp",
                "width": 480,
                "size": 21422,
                "type": "image/webp"
            },
            {
                "src": "/optimized/p22-800.webp",
                "width": 800,
                "size": 35566,
                "type": "image/webp"
            }
        ]
    },
    "/work/cryptography-game/p24.png": {
        "src": "/work/cryptography-game/p24.png",
        "width": 1166,
        "height": 2159,
        "aspectRatio": 0.54006,
        "originalSize": 348162,
        "variants": [
            {
                "src": "/optimized/p24-480.webp",
                "width": 480,
                "size": 14254,
                "type": "image/webp"
            },
            {
                "src": "/optimized/p24-800.webp",
                "width": 800,
                "size": 24754,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/card-face.png": {
        "src": "/work/listen-and-speak/card-face.png",
        "width": 1063,
        "height": 638,
        "aspectRatio": 1.66614,
        "originalSize": 1419967,
        "variants": [
            {
                "src": "/optimized/card-face-480.webp",
                "width": 480,
                "size": 21968,
                "type": "image/webp"
            },
            {
                "src": "/optimized/card-face-800.webp",
                "width": 800,
                "size": 74064,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/distortion-field.png": {
        "src": "/work/listen-and-speak/distortion-field.png",
        "width": 2559,
        "height": 1439,
        "aspectRatio": 1.77832,
        "originalSize": 7962226,
        "variants": [
            {
                "src": "/optimized/distortion-field-480.webp",
                "width": 480,
                "size": 67214,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-field-800.webp",
                "width": 800,
                "size": 189820,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-field-1200.webp",
                "width": 1200,
                "size": 404098,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-field-1600.webp",
                "width": 1600,
                "size": 634910,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/distortion-pavilion.png": {
        "src": "/work/listen-and-speak/distortion-pavilion.png",
        "width": 1919,
        "height": 865,
        "aspectRatio": 2.2185,
        "originalSize": 3936358,
        "variants": [
            {
                "src": "/optimized/distortion-pavilion-480.webp",
                "width": 480,
                "size": 25998,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-pavilion-800.webp",
                "width": 800,
                "size": 81020,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-pavilion-1200.webp",
                "width": 1200,
                "size": 178688,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-pavilion-1600.webp",
                "width": 1600,
                "size": 300016,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/distortion-text.png": {
        "src": "/work/listen-and-speak/distortion-text.png",
        "width": 2559,
        "height": 1438,
        "aspectRatio": 1.77955,
        "originalSize": 7349658,
        "variants": [
            {
                "src": "/optimized/distortion-text-480.webp",
                "width": 480,
                "size": 64474,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-text-800.webp",
                "width": 800,
                "size": 174578,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-text-1200.webp",
                "width": 1200,
                "size": 354262,
                "type": "image/webp"
            },
            {
                "src": "/optimized/distortion-text-1600.webp",
                "width": 1600,
                "size": 547340,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/flow-topic.png": {
        "src": "/work/listen-and-speak/flow-topic.png",
        "width": 2559,
        "height": 1436,
        "aspectRatio": 1.78203,
        "originalSize": 1752707,
        "variants": [
            {
                "src": "/optimized/flow-topic-480.webp",
                "width": 480,
                "size": 3538,
                "type": "image/webp"
            },
            {
                "src": "/optimized/flow-topic-800.webp",
                "width": 800,
                "size": 8068,
                "type": "image/webp"
            },
            {
                "src": "/optimized/flow-topic-1200.webp",
                "width": 1200,
                "size": 18850,
                "type": "image/webp"
            },
            {
                "src": "/optimized/flow-topic-1600.webp",
                "width": 1600,
                "size": 32592,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/install-01.jpg": {
        "src": "/work/listen-and-speak/install-01.jpg",
        "width": 4032,
        "height": 6048,
        "aspectRatio": 0.66667,
        "originalSize": 1381230,
        "variants": [
            {
                "src": "/optimized/install-01-480.webp",
                "width": 480,
                "size": 25100,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-01-800.webp",
                "width": 800,
                "size": 52164,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-01-1200.webp",
                "width": 1200,
                "size": 95126,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-01-1600.webp",
                "width": 1600,
                "size": 139590,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/install-02.jpg": {
        "src": "/work/listen-and-speak/install-02.jpg",
        "width": 4032,
        "height": 6048,
        "aspectRatio": 0.66667,
        "originalSize": 1363199,
        "variants": [
            {
                "src": "/optimized/install-02-480.webp",
                "width": 480,
                "size": 27068,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-02-800.webp",
                "width": 800,
                "size": 55798,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-02-1200.webp",
                "width": 1200,
                "size": 99550,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-02-1600.webp",
                "width": 1600,
                "size": 145600,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/install-03.jpg": {
        "src": "/work/listen-and-speak/install-03.jpg",
        "width": 6048,
        "height": 4032,
        "aspectRatio": 1.5,
        "originalSize": 1205377,
        "variants": [
            {
                "src": "/optimized/install-03-480.webp",
                "width": 480,
                "size": 12742,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-03-800.webp",
                "width": 800,
                "size": 25318,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-03-1200.webp",
                "width": 1200,
                "size": 41380,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-03-1600.webp",
                "width": 1600,
                "size": 59168,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/install-04.jpg": {
        "src": "/work/listen-and-speak/install-04.jpg",
        "width": 4032,
        "height": 6048,
        "aspectRatio": 0.66667,
        "originalSize": 1309398,
        "variants": [
            {
                "src": "/optimized/install-04-480.webp",
                "width": 480,
                "size": 26664,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-04-800.webp",
                "width": 800,
                "size": 52474,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-04-1200.webp",
                "width": 1200,
                "size": 89806,
                "type": "image/webp"
            },
            {
                "src": "/optimized/install-04-1600.webp",
                "width": 1600,
                "size": 128552,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/listen-speak-showcase-en.png": {
        "src": "/work/listen-and-speak/listen-speak-showcase-en.png",
        "width": 3507,
        "height": 4966,
        "aspectRatio": 0.7062,
        "originalSize": 5954663,
        "variants": [
            {
                "src": "/optimized/listen-speak-showcase-en-480.webp",
                "width": 480,
                "size": 44244,
                "type": "image/webp"
            },
            {
                "src": "/optimized/listen-speak-showcase-en-800.webp",
                "width": 800,
                "size": 110600,
                "type": "image/webp"
            },
            {
                "src": "/optimized/listen-speak-showcase-en-1200.webp",
                "width": 1200,
                "size": 214602,
                "type": "image/webp"
            },
            {
                "src": "/optimized/listen-speak-showcase-en-1600.webp",
                "width": 1600,
                "size": 327742,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/logo-en.png": {
        "src": "/work/listen-and-speak/logo-en.png",
        "width": 1254,
        "height": 1254,
        "aspectRatio": 1,
        "originalSize": 544605,
        "variants": [
            {
                "src": "/optimized/logo-en-480.webp",
                "width": 480,
                "size": 35120,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logo-en-800.webp",
                "width": 800,
                "size": 72210,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logo-en-1200.webp",
                "width": 1200,
                "size": 121318,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/logo-mark.png": {
        "src": "/work/listen-and-speak/logo-mark.png",
        "width": 3508,
        "height": 4961,
        "aspectRatio": 0.70712,
        "originalSize": 413319,
        "variants": [
            {
                "src": "/optimized/logo-mark-480.webp",
                "width": 480,
                "size": 15280,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logo-mark-800.webp",
                "width": 800,
                "size": 27368,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logo-mark-1200.webp",
                "width": 1200,
                "size": 42266,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logo-mark-1600.webp",
                "width": 1600,
                "size": 59538,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/poster.jpg": {
        "src": "/work/listen-and-speak/poster.jpg",
        "width": 7016,
        "height": 9933,
        "aspectRatio": 0.70633,
        "originalSize": 6347850,
        "variants": [
            {
                "src": "/optimized/poster-480.webp",
                "width": 480,
                "size": 44490,
                "type": "image/webp"
            },
            {
                "src": "/optimized/poster-800.webp",
                "width": 800,
                "size": 105546,
                "type": "image/webp"
            },
            {
                "src": "/optimized/poster-1200.webp",
                "width": 1200,
                "size": 196904,
                "type": "image/webp"
            },
            {
                "src": "/optimized/poster-1600.webp",
                "width": 1600,
                "size": 316744,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/result-fail.png": {
        "src": "/work/listen-and-speak/result-fail.png",
        "width": 2556,
        "height": 1438,
        "aspectRatio": 1.77747,
        "originalSize": 2094062,
        "variants": [
            {
                "src": "/optimized/result-fail-480.webp",
                "width": 480,
                "size": 12526,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-fail-800.webp",
                "width": 800,
                "size": 27452,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-fail-1200.webp",
                "width": 1200,
                "size": 49864,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-fail-1600.webp",
                "width": 1600,
                "size": 74794,
                "type": "image/webp"
            }
        ]
    },
    "/work/listen-and-speak/result-success.png": {
        "src": "/work/listen-and-speak/result-success.png",
        "width": 2559,
        "height": 1438,
        "aspectRatio": 1.77955,
        "originalSize": 775598,
        "variants": [
            {
                "src": "/optimized/result-success-480.webp",
                "width": 480,
                "size": 2998,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-success-800.webp",
                "width": 800,
                "size": 6204,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-success-1200.webp",
                "width": 1200,
                "size": 11362,
                "type": "image/webp"
            },
            {
                "src": "/optimized/result-success-1600.webp",
                "width": 1600,
                "size": 17390,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/VD1.png": {
        "src": "/work/longgang-film/VD1.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3466430,
        "variants": [
            {
                "src": "/optimized/vd1-480.webp",
                "width": 480,
                "size": 8650,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1-800.webp",
                "width": 800,
                "size": 15670,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1-1200.webp",
                "width": 1200,
                "size": 24738,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1-1600.webp",
                "width": 1600,
                "size": 34536,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd.png": {
        "src": "/work/longgang-film/vd.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 8429169,
        "variants": [
            {
                "src": "/optimized/vd-480.webp",
                "width": 480,
                "size": 10382,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd-800.webp",
                "width": 800,
                "size": 19164,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd-1200.webp",
                "width": 1200,
                "size": 30674,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd-1600.webp",
                "width": 1600,
                "size": 42858,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd0.5.png": {
        "src": "/work/longgang-film/vd0.5.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 2081544,
        "variants": [
            {
                "src": "/optimized/vd0.5-480.webp",
                "width": 480,
                "size": 5076,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd0.5-800.webp",
                "width": 800,
                "size": 8648,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd0.5-1200.webp",
                "width": 1200,
                "size": 13114,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd0.5-1600.webp",
                "width": 1600,
                "size": 18330,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd1.1.png": {
        "src": "/work/longgang-film/vd1.1.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 4856416,
        "variants": [
            {
                "src": "/optimized/vd1.1-480.webp",
                "width": 480,
                "size": 2914,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.1-800.webp",
                "width": 800,
                "size": 5464,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.1-1200.webp",
                "width": 1200,
                "size": 9300,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.1-1600.webp",
                "width": 1600,
                "size": 13754,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd1.2.png": {
        "src": "/work/longgang-film/vd1.2.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3182061,
        "variants": [
            {
                "src": "/optimized/vd1.2-480.webp",
                "width": 480,
                "size": 2356,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.2-800.webp",
                "width": 800,
                "size": 4480,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.2-1200.webp",
                "width": 1200,
                "size": 7332,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.2-1600.webp",
                "width": 1600,
                "size": 10718,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd1.3.png": {
        "src": "/work/longgang-film/vd1.3.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 6666004,
        "variants": [
            {
                "src": "/optimized/vd1.3-480.webp",
                "width": 480,
                "size": 9276,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.3-800.webp",
                "width": 800,
                "size": 17450,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.3-1200.webp",
                "width": 1200,
                "size": 28122,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.3-1600.webp",
                "width": 1600,
                "size": 39718,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd1.4.png": {
        "src": "/work/longgang-film/vd1.4.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 4265357,
        "variants": [
            {
                "src": "/optimized/vd1.4-480.webp",
                "width": 480,
                "size": 3926,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.4-800.webp",
                "width": 800,
                "size": 7164,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.4-1200.webp",
                "width": 1200,
                "size": 11790,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd1.4-1600.webp",
                "width": 1600,
                "size": 17222,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd10.png": {
        "src": "/work/longgang-film/vd10.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 4243894,
        "variants": [
            {
                "src": "/optimized/vd10-480.webp",
                "width": 480,
                "size": 3476,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd10-800.webp",
                "width": 800,
                "size": 7382,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd10-1200.webp",
                "width": 1200,
                "size": 12174,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd10-1600.webp",
                "width": 1600,
                "size": 17766,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd11.png": {
        "src": "/work/longgang-film/vd11.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 4051618,
        "variants": [
            {
                "src": "/optimized/vd11-480.webp",
                "width": 480,
                "size": 4642,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd11-800.webp",
                "width": 800,
                "size": 9296,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd11-1200.webp",
                "width": 1200,
                "size": 15890,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd11-1600.webp",
                "width": 1600,
                "size": 23776,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd12.png": {
        "src": "/work/longgang-film/vd12.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 7334865,
        "variants": [
            {
                "src": "/optimized/vd12-480.webp",
                "width": 480,
                "size": 6146,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd12-800.webp",
                "width": 800,
                "size": 11502,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd12-1200.webp",
                "width": 1200,
                "size": 18996,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd12-1600.webp",
                "width": 1600,
                "size": 27486,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd13.png": {
        "src": "/work/longgang-film/vd13.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 8486847,
        "variants": [
            {
                "src": "/optimized/vd13-480.webp",
                "width": 480,
                "size": 11324,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd13-800.webp",
                "width": 800,
                "size": 20768,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd13-1200.webp",
                "width": 1200,
                "size": 32344,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd13-1600.webp",
                "width": 1600,
                "size": 45622,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd2.5.png": {
        "src": "/work/longgang-film/vd2.5.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3108297,
        "variants": [
            {
                "src": "/optimized/vd2.5-480.webp",
                "width": 480,
                "size": 4654,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2.5-800.webp",
                "width": 800,
                "size": 8966,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2.5-1200.webp",
                "width": 1200,
                "size": 15270,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2.5-1600.webp",
                "width": 1600,
                "size": 22226,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd2.png": {
        "src": "/work/longgang-film/vd2.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 7486228,
        "variants": [
            {
                "src": "/optimized/vd2-480.webp",
                "width": 480,
                "size": 11930,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2-800.webp",
                "width": 800,
                "size": 22914,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2-1200.webp",
                "width": 1200,
                "size": 37760,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd2-1600.webp",
                "width": 1600,
                "size": 52804,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd3.png": {
        "src": "/work/longgang-film/vd3.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3947262,
        "variants": [
            {
                "src": "/optimized/vd3-480.webp",
                "width": 480,
                "size": 4532,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd3-800.webp",
                "width": 800,
                "size": 9118,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd3-1200.webp",
                "width": 1200,
                "size": 15492,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd3-1600.webp",
                "width": 1600,
                "size": 22718,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd4.png": {
        "src": "/work/longgang-film/vd4.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 4001935,
        "variants": [
            {
                "src": "/optimized/vd4-480.webp",
                "width": 480,
                "size": 5586,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd4-800.webp",
                "width": 800,
                "size": 10112,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd4-1200.webp",
                "width": 1200,
                "size": 15732,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd4-1600.webp",
                "width": 1600,
                "size": 22056,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd5.png": {
        "src": "/work/longgang-film/vd5.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3701095,
        "variants": [
            {
                "src": "/optimized/vd5-480.webp",
                "width": 480,
                "size": 5522,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd5-800.webp",
                "width": 800,
                "size": 10152,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd5-1200.webp",
                "width": 1200,
                "size": 16220,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd5-1600.webp",
                "width": 1600,
                "size": 22776,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd6.png": {
        "src": "/work/longgang-film/vd6.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3264698,
        "variants": [
            {
                "src": "/optimized/vd6-480.webp",
                "width": 480,
                "size": 5596,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd6-800.webp",
                "width": 800,
                "size": 10432,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd6-1200.webp",
                "width": 1200,
                "size": 16614,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd6-1600.webp",
                "width": 1600,
                "size": 23148,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd7.png": {
        "src": "/work/longgang-film/vd7.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 5966612,
        "variants": [
            {
                "src": "/optimized/vd7-480.webp",
                "width": 480,
                "size": 9754,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd7-800.webp",
                "width": 800,
                "size": 17888,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd7-1200.webp",
                "width": 1200,
                "size": 31344,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd7-1600.webp",
                "width": 1600,
                "size": 47210,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd8.png": {
        "src": "/work/longgang-film/vd8.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3902192,
        "variants": [
            {
                "src": "/optimized/vd8-480.webp",
                "width": 480,
                "size": 4516,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd8-800.webp",
                "width": 800,
                "size": 9068,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd8-1200.webp",
                "width": 1200,
                "size": 15406,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd8-1600.webp",
                "width": 1600,
                "size": 22228,
                "type": "image/webp"
            }
        ]
    },
    "/work/longgang-film/vd9.png": {
        "src": "/work/longgang-film/vd9.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 5388007,
        "variants": [
            {
                "src": "/optimized/vd9-480.webp",
                "width": 480,
                "size": 4634,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd9-800.webp",
                "width": 800,
                "size": 9002,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd9-1200.webp",
                "width": 1200,
                "size": 14842,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vd9-1600.webp",
                "width": 1600,
                "size": 22328,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vp.png": {
        "src": "/work/projection-mapping/vp.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 2659749,
        "variants": [
            {
                "src": "/optimized/vp-480.webp",
                "width": 480,
                "size": 6276,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp-800.webp",
                "width": 800,
                "size": 10912,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp-1200.webp",
                "width": 1200,
                "size": 16662,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp-1600.webp",
                "width": 1600,
                "size": 22612,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vp2.png": {
        "src": "/work/projection-mapping/vp2.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 2714119,
        "variants": [
            {
                "src": "/optimized/vp2-480.webp",
                "width": 480,
                "size": 5138,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp2-800.webp",
                "width": 800,
                "size": 9316,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp2-1200.webp",
                "width": 1200,
                "size": 14568,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp2-1600.webp",
                "width": 1600,
                "size": 20102,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vp3.png": {
        "src": "/work/projection-mapping/vp3.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 1995877,
        "variants": [
            {
                "src": "/optimized/vp3-480.webp",
                "width": 480,
                "size": 2372,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp3-800.webp",
                "width": 800,
                "size": 4468,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp3-1200.webp",
                "width": 1200,
                "size": 7534,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp3-1600.webp",
                "width": 1600,
                "size": 11010,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vp4.png": {
        "src": "/work/projection-mapping/vp4.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3044578,
        "variants": [
            {
                "src": "/optimized/vp4-480.webp",
                "width": 480,
                "size": 5704,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp4-800.webp",
                "width": 800,
                "size": 10990,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp4-1200.webp",
                "width": 1200,
                "size": 16808,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp4-1600.webp",
                "width": 1600,
                "size": 23458,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vp5.png": {
        "src": "/work/projection-mapping/vp5.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 714167,
        "variants": [
            {
                "src": "/optimized/vp5-480.webp",
                "width": 480,
                "size": 1812,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp5-800.webp",
                "width": 800,
                "size": 3284,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp5-1200.webp",
                "width": 1200,
                "size": 5210,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vp5-1600.webp",
                "width": 1600,
                "size": 7612,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vpp.png": {
        "src": "/work/projection-mapping/vpp.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3107547,
        "variants": [
            {
                "src": "/optimized/vpp-480.webp",
                "width": 480,
                "size": 15360,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp-800.webp",
                "width": 800,
                "size": 29366,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp-1200.webp",
                "width": 1200,
                "size": 47336,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp-1600.webp",
                "width": 1600,
                "size": 66220,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vpp1.png": {
        "src": "/work/projection-mapping/vpp1.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3061838,
        "variants": [
            {
                "src": "/optimized/vpp1-480.webp",
                "width": 480,
                "size": 11954,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp1-800.webp",
                "width": 800,
                "size": 27088,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp1-1200.webp",
                "width": 1200,
                "size": 48716,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp1-1600.webp",
                "width": 1600,
                "size": 73168,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vpp2.png": {
        "src": "/work/projection-mapping/vpp2.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 3988599,
        "variants": [
            {
                "src": "/optimized/vpp2-480.webp",
                "width": 480,
                "size": 13312,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp2-800.webp",
                "width": 800,
                "size": 31448,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp2-1200.webp",
                "width": 1200,
                "size": 59152,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp2-1600.webp",
                "width": 1600,
                "size": 91924,
                "type": "image/webp"
            }
        ]
    },
    "/work/projection-mapping/vpp3.png": {
        "src": "/work/projection-mapping/vpp3.png",
        "width": 2560,
        "height": 1440,
        "aspectRatio": 1.77778,
        "originalSize": 2277948,
        "variants": [
            {
                "src": "/optimized/vpp3-480.webp",
                "width": 480,
                "size": 12986,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp3-800.webp",
                "width": 800,
                "size": 26308,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp3-1200.webp",
                "width": 1200,
                "size": 43862,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vpp3-1600.webp",
                "width": 1600,
                "size": 62464,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/1.png": {
        "src": "/work/sanctum-luminis/1.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1807022,
        "variants": [
            {
                "src": "/optimized/1-480.webp",
                "width": 480,
                "size": 5502,
                "type": "image/webp"
            },
            {
                "src": "/optimized/1-800.webp",
                "width": 800,
                "size": 9704,
                "type": "image/webp"
            },
            {
                "src": "/optimized/1-1200.webp",
                "width": 1200,
                "size": 15260,
                "type": "image/webp"
            },
            {
                "src": "/optimized/1-1600.webp",
                "width": 1600,
                "size": 21360,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/10.png": {
        "src": "/work/sanctum-luminis/10.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1897630,
        "variants": [
            {
                "src": "/optimized/10-480.webp",
                "width": 480,
                "size": 4400,
                "type": "image/webp"
            },
            {
                "src": "/optimized/10-800.webp",
                "width": 800,
                "size": 8706,
                "type": "image/webp"
            },
            {
                "src": "/optimized/10-1200.webp",
                "width": 1200,
                "size": 14450,
                "type": "image/webp"
            },
            {
                "src": "/optimized/10-1600.webp",
                "width": 1600,
                "size": 20746,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/11.png": {
        "src": "/work/sanctum-luminis/11.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2605031,
        "variants": [
            {
                "src": "/optimized/11-480.webp",
                "width": 480,
                "size": 16052,
                "type": "image/webp"
            },
            {
                "src": "/optimized/11-800.webp",
                "width": 800,
                "size": 36022,
                "type": "image/webp"
            },
            {
                "src": "/optimized/11-1200.webp",
                "width": 1200,
                "size": 60542,
                "type": "image/webp"
            },
            {
                "src": "/optimized/11-1600.webp",
                "width": 1600,
                "size": 79536,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/12.png": {
        "src": "/work/sanctum-luminis/12.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2213555,
        "variants": [
            {
                "src": "/optimized/12-480.webp",
                "width": 480,
                "size": 10472,
                "type": "image/webp"
            },
            {
                "src": "/optimized/12-800.webp",
                "width": 800,
                "size": 20830,
                "type": "image/webp"
            },
            {
                "src": "/optimized/12-1200.webp",
                "width": 1200,
                "size": 32790,
                "type": "image/webp"
            },
            {
                "src": "/optimized/12-1600.webp",
                "width": 1600,
                "size": 43974,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/13.png": {
        "src": "/work/sanctum-luminis/13.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1442719,
        "variants": [
            {
                "src": "/optimized/13-480.webp",
                "width": 480,
                "size": 10920,
                "type": "image/webp"
            },
            {
                "src": "/optimized/13-800.webp",
                "width": 800,
                "size": 24660,
                "type": "image/webp"
            },
            {
                "src": "/optimized/13-1200.webp",
                "width": 1200,
                "size": 42952,
                "type": "image/webp"
            },
            {
                "src": "/optimized/13-1600.webp",
                "width": 1600,
                "size": 59356,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/2.png": {
        "src": "/work/sanctum-luminis/2.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2109441,
        "variants": [
            {
                "src": "/optimized/2-480.webp",
                "width": 480,
                "size": 11334,
                "type": "image/webp"
            },
            {
                "src": "/optimized/2-800.webp",
                "width": 800,
                "size": 20188,
                "type": "image/webp"
            },
            {
                "src": "/optimized/2-1200.webp",
                "width": 1200,
                "size": 30502,
                "type": "image/webp"
            },
            {
                "src": "/optimized/2-1600.webp",
                "width": 1600,
                "size": 42300,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/3.png": {
        "src": "/work/sanctum-luminis/3.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2408099,
        "variants": [
            {
                "src": "/optimized/3-480.webp",
                "width": 480,
                "size": 15258,
                "type": "image/webp"
            },
            {
                "src": "/optimized/3-800.webp",
                "width": 800,
                "size": 28204,
                "type": "image/webp"
            },
            {
                "src": "/optimized/3-1200.webp",
                "width": 1200,
                "size": 43214,
                "type": "image/webp"
            },
            {
                "src": "/optimized/3-1600.webp",
                "width": 1600,
                "size": 59692,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/4.png": {
        "src": "/work/sanctum-luminis/4.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1768524,
        "variants": [
            {
                "src": "/optimized/4-480.webp",
                "width": 480,
                "size": 4052,
                "type": "image/webp"
            },
            {
                "src": "/optimized/4-800.webp",
                "width": 800,
                "size": 7300,
                "type": "image/webp"
            },
            {
                "src": "/optimized/4-1200.webp",
                "width": 1200,
                "size": 11802,
                "type": "image/webp"
            },
            {
                "src": "/optimized/4-1600.webp",
                "width": 1600,
                "size": 16982,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/5.png": {
        "src": "/work/sanctum-luminis/5.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1872179,
        "variants": [
            {
                "src": "/optimized/5-480.webp",
                "width": 480,
                "size": 10938,
                "type": "image/webp"
            },
            {
                "src": "/optimized/5-800.webp",
                "width": 800,
                "size": 19042,
                "type": "image/webp"
            },
            {
                "src": "/optimized/5-1200.webp",
                "width": 1200,
                "size": 29206,
                "type": "image/webp"
            },
            {
                "src": "/optimized/5-1600.webp",
                "width": 1600,
                "size": 39236,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/6.png": {
        "src": "/work/sanctum-luminis/6.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1900169,
        "variants": [
            {
                "src": "/optimized/6-480.webp",
                "width": 480,
                "size": 6410,
                "type": "image/webp"
            },
            {
                "src": "/optimized/6-800.webp",
                "width": 800,
                "size": 11470,
                "type": "image/webp"
            },
            {
                "src": "/optimized/6-1200.webp",
                "width": 1200,
                "size": 18698,
                "type": "image/webp"
            },
            {
                "src": "/optimized/6-1600.webp",
                "width": 1600,
                "size": 26172,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/7.png": {
        "src": "/work/sanctum-luminis/7.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2185016,
        "variants": [
            {
                "src": "/optimized/7-480.webp",
                "width": 480,
                "size": 11010,
                "type": "image/webp"
            },
            {
                "src": "/optimized/7-800.webp",
                "width": 800,
                "size": 21702,
                "type": "image/webp"
            },
            {
                "src": "/optimized/7-1200.webp",
                "width": 1200,
                "size": 34412,
                "type": "image/webp"
            },
            {
                "src": "/optimized/7-1600.webp",
                "width": 1600,
                "size": 48266,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/8.png": {
        "src": "/work/sanctum-luminis/8.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 2171224,
        "variants": [
            {
                "src": "/optimized/8-480.webp",
                "width": 480,
                "size": 10546,
                "type": "image/webp"
            },
            {
                "src": "/optimized/8-800.webp",
                "width": 800,
                "size": 20260,
                "type": "image/webp"
            },
            {
                "src": "/optimized/8-1200.webp",
                "width": 1200,
                "size": 33216,
                "type": "image/webp"
            },
            {
                "src": "/optimized/8-1600.webp",
                "width": 1600,
                "size": 46734,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/9.png": {
        "src": "/work/sanctum-luminis/9.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1933309,
        "variants": [
            {
                "src": "/optimized/9-480.webp",
                "width": 480,
                "size": 3806,
                "type": "image/webp"
            },
            {
                "src": "/optimized/9-800.webp",
                "width": 800,
                "size": 7476,
                "type": "image/webp"
            },
            {
                "src": "/optimized/9-1200.webp",
                "width": 1200,
                "size": 12894,
                "type": "image/webp"
            },
            {
                "src": "/optimized/9-1600.webp",
                "width": 1600,
                "size": 18544,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/Anime1.png": {
        "src": "/work/sanctum-luminis/Anime1.png",
        "width": 2470,
        "height": 1116,
        "aspectRatio": 2.21326,
        "originalSize": 3253022,
        "variants": [
            {
                "src": "/optimized/anime1-480.webp",
                "width": 480,
                "size": 6722,
                "type": "image/webp"
            },
            {
                "src": "/optimized/anime1-800.webp",
                "width": 800,
                "size": 12178,
                "type": "image/webp"
            },
            {
                "src": "/optimized/anime1-1200.webp",
                "width": 1200,
                "size": 20036,
                "type": "image/webp"
            },
            {
                "src": "/optimized/anime1-1600.webp",
                "width": 1600,
                "size": 31596,
                "type": "image/webp"
            }
        ]
    },
    "/work/sanctum-luminis/Untitled.png": {
        "src": "/work/sanctum-luminis/Untitled.png",
        "width": 1920,
        "height": 1080,
        "aspectRatio": 1.77778,
        "originalSize": 1837153,
        "variants": [
            {
                "src": "/optimized/untitled-480.webp",
                "width": 480,
                "size": 5416,
                "type": "image/webp"
            },
            {
                "src": "/optimized/untitled-800.webp",
                "width": 800,
                "size": 9992,
                "type": "image/webp"
            },
            {
                "src": "/optimized/untitled-1200.webp",
                "width": 1200,
                "size": 16082,
                "type": "image/webp"
            },
            {
                "src": "/optimized/untitled-1600.webp",
                "width": 1600,
                "size": 22522,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/SAND.jpg": {
        "src": "/work/touchdesigner-canvas/SAND.jpg",
        "width": 4000,
        "height": 3000,
        "aspectRatio": 1.33333,
        "originalSize": 5825013,
        "variants": [
            {
                "src": "/optimized/sand-480.webp",
                "width": 480,
                "size": 13348,
                "type": "image/webp"
            },
            {
                "src": "/optimized/sand-800.webp",
                "width": 800,
                "size": 33018,
                "type": "image/webp"
            },
            {
                "src": "/optimized/sand-1200.webp",
                "width": 1200,
                "size": 70178,
                "type": "image/webp"
            },
            {
                "src": "/optimized/sand-1600.webp",
                "width": 1600,
                "size": 116412,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/SMOKE.jpg": {
        "src": "/work/touchdesigner-canvas/SMOKE.jpg",
        "width": 4000,
        "height": 3000,
        "aspectRatio": 1.33333,
        "originalSize": 4062406,
        "variants": [
            {
                "src": "/optimized/smoke-480.webp",
                "width": 480,
                "size": 5368,
                "type": "image/webp"
            },
            {
                "src": "/optimized/smoke-800.webp",
                "width": 800,
                "size": 12818,
                "type": "image/webp"
            },
            {
                "src": "/optimized/smoke-1200.webp",
                "width": 1200,
                "size": 28362,
                "type": "image/webp"
            },
            {
                "src": "/optimized/smoke-1600.webp",
                "width": 1600,
                "size": 50850,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/a1.png": {
        "src": "/work/touchdesigner-canvas/a1.png",
        "width": 2552,
        "height": 1439,
        "aspectRatio": 1.77345,
        "originalSize": 3940726,
        "variants": [
            {
                "src": "/optimized/a1-480.webp",
                "width": 480,
                "size": 22894,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a1-800.webp",
                "width": 800,
                "size": 52578,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a1-1200.webp",
                "width": 1200,
                "size": 95438,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a1-1600.webp",
                "width": 1600,
                "size": 137716,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/a2.png": {
        "src": "/work/touchdesigner-canvas/a2.png",
        "width": 2559,
        "height": 1439,
        "aspectRatio": 1.77832,
        "originalSize": 1029023,
        "variants": [
            {
                "src": "/optimized/a2-480.webp",
                "width": 480,
                "size": 2992,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a2-800.webp",
                "width": 800,
                "size": 5384,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a2-1200.webp",
                "width": 1200,
                "size": 8656,
                "type": "image/webp"
            },
            {
                "src": "/optimized/a2-1600.webp",
                "width": 1600,
                "size": 12556,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/asdasd.png": {
        "src": "/work/touchdesigner-canvas/asdasd.png",
        "width": 4000,
        "height": 3000,
        "aspectRatio": 1.33333,
        "originalSize": 14915314,
        "variants": [
            {
                "src": "/optimized/asdasd-480.webp",
                "width": 480,
                "size": 12814,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asdasd-800.webp",
                "width": 800,
                "size": 29984,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asdasd-1200.webp",
                "width": 1200,
                "size": 60752,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asdasd-1600.webp",
                "width": 1600,
                "size": 104042,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/asds.png": {
        "src": "/work/touchdesigner-canvas/asds.png",
        "width": 5000,
        "height": 3000,
        "aspectRatio": 1.66667,
        "originalSize": 22763447,
        "variants": [
            {
                "src": "/optimized/asds-480.webp",
                "width": 480,
                "size": 14650,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asds-800.webp",
                "width": 800,
                "size": 34276,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asds-1200.webp",
                "width": 1200,
                "size": 66376,
                "type": "image/webp"
            },
            {
                "src": "/optimized/asds-1600.webp",
                "width": 1600,
                "size": 107728,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/i2.png": {
        "src": "/work/touchdesigner-canvas/i2.png",
        "width": 2559,
        "height": 1439,
        "aspectRatio": 1.77832,
        "originalSize": 4261762,
        "variants": [
            {
                "src": "/optimized/i2-480.webp",
                "width": 480,
                "size": 16498,
                "type": "image/webp"
            },
            {
                "src": "/optimized/i2-800.webp",
                "width": 800,
                "size": 36250,
                "type": "image/webp"
            },
            {
                "src": "/optimized/i2-1200.webp",
                "width": 1200,
                "size": 80936,
                "type": "image/webp"
            },
            {
                "src": "/optimized/i2-1600.webp",
                "width": 1600,
                "size": 141112,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/logo1.png": {
        "src": "/work/touchdesigner-canvas/logo1.png",
        "width": 750,
        "height": 333,
        "aspectRatio": 2.25225,
        "originalSize": 229101,
        "variants": [
            {
                "src": "/optimized/logo1-480.webp",
                "width": 480,
                "size": 42042,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/person1.png": {
        "src": "/work/touchdesigner-canvas/person1.png",
        "width": 1919,
        "height": 795,
        "aspectRatio": 2.41384,
        "originalSize": 977238,
        "variants": [
            {
                "src": "/optimized/person1-480.webp",
                "width": 480,
                "size": 4390,
                "type": "image/webp"
            },
            {
                "src": "/optimized/person1-800.webp",
                "width": 800,
                "size": 8158,
                "type": "image/webp"
            },
            {
                "src": "/optimized/person1-1200.webp",
                "width": 1200,
                "size": 13658,
                "type": "image/webp"
            },
            {
                "src": "/optimized/person1-1600.webp",
                "width": 1600,
                "size": 19740,
                "type": "image/webp"
            }
        ]
    },
    "/work/touchdesigner-canvas/tes1.png": {
        "src": "/work/touchdesigner-canvas/tes1.png",
        "width": 2559,
        "height": 1390,
        "aspectRatio": 1.84101,
        "originalSize": 3511096,
        "variants": [
            {
                "src": "/optimized/tes1-480.webp",
                "width": 480,
                "size": 23442,
                "type": "image/webp"
            },
            {
                "src": "/optimized/tes1-800.webp",
                "width": 800,
                "size": 52766,
                "type": "image/webp"
            },
            {
                "src": "/optimized/tes1-1200.webp",
                "width": 1200,
                "size": 99996,
                "type": "image/webp"
            },
            {
                "src": "/optimized/tes1-1600.webp",
                "width": 1600,
                "size": 157398,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/LOGO@.png": {
        "src": "/work/typhoon-web/LOGO@.png",
        "width": 512,
        "height": 512,
        "aspectRatio": 1,
        "originalSize": 167378,
        "variants": [
            {
                "src": "/optimized/logo-480.webp",
                "width": 480,
                "size": 35310,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/LOGOALL.png": {
        "src": "/work/typhoon-web/LOGOALL.png",
        "width": 1024,
        "height": 1024,
        "aspectRatio": 1,
        "originalSize": 340543,
        "variants": [
            {
                "src": "/optimized/logoall-480.webp",
                "width": 480,
                "size": 27872,
                "type": "image/webp"
            },
            {
                "src": "/optimized/logoall-800.webp",
                "width": 800,
                "size": 48916,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/SIGN.png": {
        "src": "/work/typhoon-web/SIGN.png",
        "width": 1002,
        "height": 886,
        "aspectRatio": 1.13093,
        "originalSize": 214599,
        "variants": [
            {
                "src": "/optimized/sign-480.webp",
                "width": 480,
                "size": 12976,
                "type": "image/webp"
            },
            {
                "src": "/optimized/sign-800.webp",
                "width": 800,
                "size": 25454,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/Scene8.png": {
        "src": "/work/typhoon-web/Scene8.png",
        "width": 4500,
        "height": 3000,
        "aspectRatio": 1.5,
        "originalSize": 4957795,
        "variants": [
            {
                "src": "/optimized/scene8-480.webp",
                "width": 480,
                "size": 20202,
                "type": "image/webp"
            },
            {
                "src": "/optimized/scene8-800.webp",
                "width": 800,
                "size": 41976,
                "type": "image/webp"
            },
            {
                "src": "/optimized/scene8-1200.webp",
                "width": 1200,
                "size": 77418,
                "type": "image/webp"
            },
            {
                "src": "/optimized/scene8-1600.webp",
                "width": 1600,
                "size": 125686,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED1.png": {
        "src": "/work/typhoon-web/WED1.png",
        "width": 1967,
        "height": 814,
        "aspectRatio": 2.41646,
        "originalSize": 1109426,
        "variants": [
            {
                "src": "/optimized/wed1-480.webp",
                "width": 480,
                "size": 16818,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed1-800.webp",
                "width": 800,
                "size": 33728,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed1-1200.webp",
                "width": 1200,
                "size": 53742,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed1-1600.webp",
                "width": 1600,
                "size": 74978,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED2.png": {
        "src": "/work/typhoon-web/WED2.png",
        "width": 1893,
        "height": 883,
        "aspectRatio": 2.14383,
        "originalSize": 532370,
        "variants": [
            {
                "src": "/optimized/wed2-480.webp",
                "width": 480,
                "size": 7654,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed2-800.webp",
                "width": 800,
                "size": 15830,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed2-1200.webp",
                "width": 1200,
                "size": 28004,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed2-1600.webp",
                "width": 1600,
                "size": 40974,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED3.png": {
        "src": "/work/typhoon-web/WED3.png",
        "width": 1896,
        "height": 866,
        "aspectRatio": 2.18938,
        "originalSize": 978412,
        "variants": [
            {
                "src": "/optimized/wed3-480.webp",
                "width": 480,
                "size": 10324,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed3-800.webp",
                "width": 800,
                "size": 22532,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed3-1200.webp",
                "width": 1200,
                "size": 41852,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed3-1600.webp",
                "width": 1600,
                "size": 63338,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED4.png": {
        "src": "/work/typhoon-web/WED4.png",
        "width": 1898,
        "height": 1079,
        "aspectRatio": 1.75904,
        "originalSize": 1415816,
        "variants": [
            {
                "src": "/optimized/wed4-480.webp",
                "width": 480,
                "size": 14046,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed4-800.webp",
                "width": 800,
                "size": 33440,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed4-1200.webp",
                "width": 1200,
                "size": 65132,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed4-1600.webp",
                "width": 1600,
                "size": 102182,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED5.png": {
        "src": "/work/typhoon-web/WED5.png",
        "width": 1900,
        "height": 432,
        "aspectRatio": 4.39815,
        "originalSize": 56040,
        "variants": [
            {
                "src": "/optimized/wed5-480.webp",
                "width": 480,
                "size": 2172,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed5-800.webp",
                "width": 800,
                "size": 5508,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed5-1200.webp",
                "width": 1200,
                "size": 10288,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed5-1600.webp",
                "width": 1600,
                "size": 16614,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED6.png": {
        "src": "/work/typhoon-web/WED6.png",
        "width": 1899,
        "height": 1079,
        "aspectRatio": 1.75996,
        "originalSize": 1530168,
        "variants": [
            {
                "src": "/optimized/wed6-480.webp",
                "width": 480,
                "size": 13538,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed6-800.webp",
                "width": 800,
                "size": 32852,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed6-1200.webp",
                "width": 1200,
                "size": 60524,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed6-1600.webp",
                "width": 1600,
                "size": 87148,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED7.png": {
        "src": "/work/typhoon-web/WED7.png",
        "width": 1900,
        "height": 1078,
        "aspectRatio": 1.76252,
        "originalSize": 1578718,
        "variants": [
            {
                "src": "/optimized/wed7-480.webp",
                "width": 480,
                "size": 19534,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed7-800.webp",
                "width": 800,
                "size": 47012,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed7-1200.webp",
                "width": 1200,
                "size": 92954,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed7-1600.webp",
                "width": 1600,
                "size": 148858,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/WED8.png": {
        "src": "/work/typhoon-web/WED8.png",
        "width": 2559,
        "height": 1390,
        "aspectRatio": 1.84101,
        "originalSize": 139102,
        "variants": [
            {
                "src": "/optimized/wed8-480.webp",
                "width": 480,
                "size": 5508,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed8-800.webp",
                "width": 800,
                "size": 11666,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed8-1200.webp",
                "width": 1200,
                "size": 20164,
                "type": "image/webp"
            },
            {
                "src": "/optimized/wed8-1600.webp",
                "width": 1600,
                "size": 29212,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/aaa.png": {
        "src": "/work/typhoon-web/aaa.png",
        "width": 4000,
        "height": 3000,
        "aspectRatio": 1.33333,
        "originalSize": 5784534,
        "variants": [
            {
                "src": "/optimized/aaa-480.webp",
                "width": 480,
                "size": 8760,
                "type": "image/webp"
            },
            {
                "src": "/optimized/aaa-800.webp",
                "width": 800,
                "size": 18860,
                "type": "image/webp"
            },
            {
                "src": "/optimized/aaa-1200.webp",
                "width": 1200,
                "size": 33810,
                "type": "image/webp"
            },
            {
                "src": "/optimized/aaa-1600.webp",
                "width": 1600,
                "size": 49774,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/title.png": {
        "src": "/work/typhoon-web/title.png",
        "width": 1024,
        "height": 256,
        "aspectRatio": 4,
        "originalSize": 58294,
        "variants": [
            {
                "src": "/optimized/title-480.webp",
                "width": 480,
                "size": 14924,
                "type": "image/webp"
            },
            {
                "src": "/optimized/title-800.webp",
                "width": 800,
                "size": 26188,
                "type": "image/webp"
            }
        ]
    },
    "/work/typhoon-web/typhoon_baby.png": {
        "src": "/work/typhoon-web/typhoon_baby.png",
        "width": 2000,
        "height": 2000,
        "aspectRatio": 1,
        "originalSize": 5449220,
        "variants": [
            {
                "src": "/optimized/typhoon_baby-480.webp",
                "width": 480,
                "size": 47558,
                "type": "image/webp"
            },
            {
                "src": "/optimized/typhoon_baby-800.webp",
                "width": 800,
                "size": 125104,
                "type": "image/webp"
            },
            {
                "src": "/optimized/typhoon_baby-1200.webp",
                "width": 1200,
                "size": 306796,
                "type": "image/webp"
            },
            {
                "src": "/optimized/typhoon_baby-1600.webp",
                "width": 1600,
                "size": 548988,
                "type": "image/webp"
            }
        ]
    },
    "/work/vr-learning-telemetry/vr-01.png": {
        "src": "/work/vr-learning-telemetry/vr-01.png",
        "width": 1919,
        "height": 859,
        "aspectRatio": 2.23399,
        "originalSize": 169724,
        "variants": [
            {
                "src": "/optimized/vr-01-480.webp",
                "width": 480,
                "size": 5766,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-01-800.webp",
                "width": 800,
                "size": 11938,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-01-1200.webp",
                "width": 1200,
                "size": 23986,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-01-1600.webp",
                "width": 1600,
                "size": 37630,
                "type": "image/webp"
            }
        ]
    },
    "/work/vr-learning-telemetry/vr-02.png": {
        "src": "/work/vr-learning-telemetry/vr-02.png",
        "width": 1902,
        "height": 854,
        "aspectRatio": 2.22717,
        "originalSize": 160091,
        "variants": [
            {
                "src": "/optimized/vr-02-480.webp",
                "width": 480,
                "size": 4610,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-02-800.webp",
                "width": 800,
                "size": 11184,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-02-1200.webp",
                "width": 1200,
                "size": 21748,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-02-1600.webp",
                "width": 1600,
                "size": 35494,
                "type": "image/webp"
            }
        ]
    },
    "/work/vr-learning-telemetry/vr-03.png": {
        "src": "/work/vr-learning-telemetry/vr-03.png",
        "width": 965,
        "height": 814,
        "aspectRatio": 1.1855,
        "originalSize": 97990,
        "variants": [
            {
                "src": "/optimized/vr-03-480.webp",
                "width": 480,
                "size": 7276,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-03-800.webp",
                "width": 800,
                "size": 16664,
                "type": "image/webp"
            }
        ]
    },
    "/work/vr-learning-telemetry/vr-06.png": {
        "src": "/work/vr-learning-telemetry/vr-06.png",
        "width": 1040,
        "height": 750,
        "aspectRatio": 1.38667,
        "originalSize": 96755,
        "variants": [
            {
                "src": "/optimized/vr-06-480.webp",
                "width": 480,
                "size": 6842,
                "type": "image/webp"
            },
            {
                "src": "/optimized/vr-06-800.webp",
                "width": 800,
                "size": 15532,
                "type": "image/webp"
            }
        ]
    }
} as const satisfies Record<string, ImageManifestEntry>;

export function getImageEntry(src?: string) {
    if (!src) return undefined;
    return imageManifest[src as keyof typeof imageManifest];
}

export function getLargestVariant(src?: string) {
    const entry = getImageEntry(src);
    return entry?.variants.at(-1)?.src || src || "";
}
