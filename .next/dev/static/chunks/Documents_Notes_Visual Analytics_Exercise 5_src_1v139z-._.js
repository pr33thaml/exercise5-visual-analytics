(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/datasets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DATASETS",
    ()=>DATASETS,
    "getDataset",
    ()=>getDataset
]);
function fill(rows, cols, value = 0.06) {
    return Array.from({
        length: rows
    }, ()=>Array(cols).fill(value));
}
function setBlock(matrix, rowIdxs, colIdxs, value) {
    for (const r of rowIdxs){
        for (const c of colIdxs){
            matrix[r][c] = value;
        }
    }
}
// ── Movies × Users ───────────────────────────────────────────────────────────
const MOVIE_ROWS = [
    "U1",
    "U2",
    "U3",
    "U4",
    "U5",
    "U6",
    "U7",
    "U8",
    "U9",
    "U10",
    "U11",
    "U12"
];
const MOVIE_COLS = [
    "Scream",
    "Hereditary",
    "The Conjuring",
    "Mad Max",
    "John Wick",
    "Mission Imp.",
    "Superbad",
    "Bridesmaids",
    "The Hangover",
    "Moonlight",
    "The Lighthouse"
];
function buildMovieMatrix() {
    const m = fill(12, 11, 0.05);
    // Horror fans U1–U4
    setBlock(m, [
        0,
        1,
        2,
        3
    ], [
        0,
        1,
        2
    ], 0.92);
    // Action fans U5–U8
    setBlock(m, [
        4,
        5,
        6,
        7
    ], [
        3,
        4,
        5
    ], 0.9);
    // Comedy fans U9–U12
    setBlock(m, [
        8,
        9,
        10,
        11
    ], [
        6,
        7,
        8
    ], 0.88);
    // Niche bicluster: U2, U6, U10 × Moonlight, Lighthouse
    setBlock(m, [
        1,
        5,
        9
    ], [
        9,
        10
    ], 0.96);
    return m;
}
const movieRowClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
];
const movieColClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const movieRowScrambled = [
    7,
    2,
    10,
    0,
    5,
    11,
    3,
    8,
    1,
    6,
    9,
    4
];
const movieColScrambled = [
    4,
    9,
    1,
    6,
    0,
    3,
    8,
    2,
    7,
    5,
    10
];
// Bicluster: niche users together + niche movies together
const movieRowBicluster = [
    1,
    5,
    9,
    0,
    2,
    3,
    4,
    6,
    7,
    8,
    10,
    11
];
const movieColBicluster = [
    9,
    10,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];
// ── Articles × Keywords ──────────────────────────────────────────────────────
const ARTICLE_ROWS = [
    "Art-01",
    "Art-02",
    "Art-03",
    "Art-04",
    "Art-05",
    "Art-06",
    "Art-07",
    "Art-08",
    "Art-09",
    "Art-10",
    "Art-11",
    "Art-12"
];
const ARTICLE_COLS = [
    "goal",
    "penalty",
    "score",
    "vote",
    "senate",
    "policy",
    "chip",
    "neural",
    "cloud",
    "blockchain",
    "audit"
];
function buildArticleMatrix() {
    const m = fill(12, 11, 0.04);
    // Sports articles
    setBlock(m, [
        0,
        1,
        2,
        3
    ], [
        0,
        1,
        2
    ], 0.93);
    // Politics articles
    setBlock(m, [
        4,
        5,
        6,
        7
    ], [
        3,
        4,
        5
    ], 0.91);
    // Tech articles
    setBlock(m, [
        8,
        9,
        10,
        11
    ], [
        6,
        7,
        8
    ], 0.89);
    // Niche bicluster: Art-02, Art-06, Art-10 share rare keywords
    setBlock(m, [
        1,
        5,
        9
    ], [
        9,
        10
    ], 0.97);
    return m;
}
const articleRowClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
];
const articleColClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
const articleRowScrambled = [
    6,
    1,
    11,
    3,
    8,
    0,
    9,
    4,
    2,
    7,
    10,
    5
];
const articleColScrambled = [
    7,
    2,
    10,
    5,
    0,
    8,
    3,
    1,
    6,
    4,
    9
];
const articleRowBicluster = [
    1,
    5,
    9,
    0,
    2,
    3,
    4,
    6,
    7,
    8,
    10,
    11
];
const articleColBicluster = [
    9,
    10,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];
// ── Accounts × IP Addresses ──────────────────────────────────────────────────
const ACCOUNT_ROWS = [
    "acc_01",
    "acc_02",
    "acc_03",
    "acc_04",
    "acc_05",
    "acc_06",
    "acc_07",
    "acc_08",
    "acc_09",
    "acc_10",
    "acc_11",
    "acc_12"
];
const ACCOUNT_COLS = [
    "192.0.1",
    "192.0.2",
    "192.0.3",
    "10.0.1",
    "10.0.2",
    "10.0.3",
    "172.1.1",
    "172.1.2",
    "45.33.1",
    "45.33.2"
];
function buildAccountMatrix() {
    const m = fill(12, 10, 0.03);
    // Normal users — sparse home/office logins
    m[0][0] = 0.85;
    m[0][1] = 0.12;
    m[1][1] = 0.82;
    m[1][2] = 0.1;
    m[2][2] = 0.8;
    m[2][3] = 0.08;
    m[3][3] = 0.84;
    m[3][4] = 0.11;
    m[4][4] = 0.83;
    m[4][5] = 0.09;
    m[5][5] = 0.81;
    m[5][6] = 0.07;
    m[6][6] = 0.86;
    m[6][7] = 0.1;
    m[7][7] = 0.79;
    m[7][0] = 0.08;
    // Bot cluster — many accounts, same CDN IPs
    setBlock(m, [
        8,
        9,
        10,
        11
    ], [
        6,
        7
    ], 0.94);
    // Coordinated attack bicluster
    setBlock(m, [
        2,
        8,
        9,
        10
    ], [
        8,
        9
    ], 0.98);
    return m;
}
const accountRowClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
];
const accountColClustered = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
const accountRowScrambled = [
    9,
    3,
    11,
    1,
    7,
    0,
    10,
    4,
    2,
    8,
    6,
    5
];
const accountColScrambled = [
    8,
    2,
    6,
    0,
    9,
    4,
    1,
    7,
    3,
    5
];
const accountRowBicluster = [
    2,
    8,
    9,
    10,
    0,
    1,
    3,
    4,
    5,
    6,
    7,
    11
];
const accountColBicluster = [
    8,
    9,
    6,
    7,
    0,
    1,
    2,
    3,
    4,
    5
];
// ── Registry ─────────────────────────────────────────────────────────────────
function makeOrders(rowScrambled, colScrambled, rowClustered, colClustered, rowBicluster, colBicluster) {
    return {
        rowOrders: {
            original: rowScrambled,
            row: rowClustered,
            column: rowScrambled,
            bicluster: rowBicluster
        },
        colOrders: {
            original: colScrambled,
            row: colScrambled,
            column: colClustered,
            bicluster: colBicluster
        }
    };
}
const DATASETS = [
    {
        id: "movies",
        title: "Movies × Users",
        subtitle: "Rating matrix — who watched what, and how much they liked it",
        rowLabel: "Users",
        colLabel: "Movies",
        rows: MOVIE_ROWS,
        cols: MOVIE_COLS,
        stars: 5,
        tier: "core",
        theme: {
            accent: "#FF2D6B",
            accentLight: "#FFE0EA",
            secondary: "#FFE600",
            heatLow: "#FFFEF5",
            heatMid: "#FFD23F",
            heatHigh: "#FF2D6B"
        },
        clusteringInsight: "Horror fans, Action fans, and Comedy fans form clear row clusters when you group similar users.",
        biclusterInsight: "A small group (U2, U6, U10) all rated the same niche arthouse films — visible only with biclustering.",
        rowClusterLabel: "Horror · Action · Comedy fans",
        colClusterLabel: "Genre groupings",
        baseMatrix: buildMovieMatrix(),
        biclusterBlock: {
            rowStart: 0,
            rowEnd: 2,
            colStart: 0,
            colEnd: 1,
            label: "Niche film club"
        },
        ...makeOrders(movieRowScrambled, movieColScrambled, movieRowClustered, movieColClustered, movieRowBicluster, movieColBicluster)
    },
    {
        id: "articles",
        title: "Articles × Keywords",
        subtitle: "Term frequency matrix — which keywords appear in which articles",
        rowLabel: "Articles",
        colLabel: "Keywords",
        rows: ARTICLE_ROWS,
        cols: ARTICLE_COLS,
        stars: 5,
        tier: "core",
        theme: {
            accent: "#0066FF",
            accentLight: "#D6E8FF",
            secondary: "#00E5A0",
            heatLow: "#F8FBFF",
            heatMid: "#66B3FF",
            heatHigh: "#0066FF"
        },
        clusteringInsight: "Sports, Politics, and Tech articles cluster naturally by their dominant keyword groups.",
        biclusterInsight: "A few articles from different topics share rare keywords like blockchain & audit — a hidden sub-topic.",
        rowClusterLabel: "Sports · Politics · Tech",
        colClusterLabel: "Topic keyword groups",
        baseMatrix: buildArticleMatrix(),
        biclusterBlock: {
            rowStart: 0,
            rowEnd: 2,
            colStart: 0,
            colEnd: 1,
            label: "Rare keyword overlap"
        },
        ...makeOrders(articleRowScrambled, articleColScrambled, articleRowClustered, articleColClustered, articleRowBicluster, articleColBicluster)
    },
    {
        id: "accounts",
        title: "Accounts × IP Addresses",
        subtitle: "Login frequency matrix — which accounts connect from which IPs",
        rowLabel: "Accounts",
        colLabel: "IP Addresses",
        rows: ACCOUNT_ROWS,
        cols: ACCOUNT_COLS,
        stars: 3,
        tier: "advanced",
        theme: {
            accent: "#FF5500",
            accentLight: "#FFE4D0",
            secondary: "#FF0040",
            heatLow: "#FFFAF5",
            heatMid: "#FF9944",
            heatHigh: "#FF0040"
        },
        clusteringInsight: "Normal users vs bots separate cleanly — bots share the same CDN IP addresses.",
        biclusterInsight: "A coordinated attack group (acc_03 + bot accounts) all hammer the same suspicious IPs.",
        rowClusterLabel: "Normal users vs Bots",
        colClusterLabel: "Residential · Office · CDN · Suspicious",
        baseMatrix: buildAccountMatrix(),
        biclusterBlock: {
            rowStart: 0,
            rowEnd: 3,
            colStart: 0,
            colEnd: 1,
            label: "Attack coordination"
        },
        ...makeOrders(accountRowScrambled, accountColScrambled, accountRowClustered, accountColClustered, accountRowBicluster, accountColBicluster)
    }
];
function getDataset(id) {
    return DATASETS.find((d)=>d.id === id) ?? DATASETS[0];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MODE_INFO",
    ()=>MODE_INFO,
    "VIEW_MODES",
    ()=>VIEW_MODES,
    "buildHeatmapCells",
    ()=>buildHeatmapCells,
    "starsLabel",
    ()=>starsLabel,
    "valueToColor",
    ()=>valueToColor
]);
const MODE_INFO = {
    original: {
        title: "No clustering",
        subtitle: "Rows and columns in random order. Patterns are hidden.",
        tag: "Unsorted",
        activeAxis: "none"
    },
    row: {
        title: "Row clustering",
        subtitle: "Similar rows grouped together. Columns stay fixed.",
        tag: "Rows only",
        activeAxis: "rows"
    },
    column: {
        title: "Column clustering",
        subtitle: "Similar columns grouped together. Rows stay fixed.",
        tag: "Columns only",
        activeAxis: "cols"
    },
    bicluster: {
        title: "Biclustering",
        subtitle: "Both rows AND columns reordered. Hidden submatrices emerge.",
        tag: "Both axes",
        activeAxis: "both"
    }
};
const VIEW_MODES = [
    "original",
    "row",
    "column",
    "bicluster"
];
function getCellValue(dataset, rowIdx, colIdx, noise) {
    const base = dataset.baseMatrix[rowIdx][colIdx];
    const jitter = (Math.sin(rowIdx * 5.3 + colIdx * 11.7) * 0.5 + 0.5) * noise;
    return Math.min(1, Math.max(0, base + jitter - noise / 2));
}
function buildHeatmapCells(dataset, mode, noise) {
    const rowOrder = dataset.rowOrders[mode];
    const colOrder = dataset.colOrders[mode];
    const cells = [];
    rowOrder.forEach((sourceRow, row)=>{
        colOrder.forEach((sourceCol, col)=>{
            cells.push({
                id: `${dataset.id}-${dataset.rows[sourceRow]}-${dataset.cols[sourceCol]}`,
                rowId: dataset.rows[sourceRow],
                colId: dataset.cols[sourceCol],
                value: getCellValue(dataset, sourceRow, sourceCol, noise),
                row,
                col,
                sourceRow,
                sourceCol
            });
        });
    });
    return cells;
}
function lerp(a, b, t) {
    return Math.round(a + (b - a) * t);
}
function hexToRgb(hex) {
    const h = hex.replace("#", "");
    return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16)
    };
}
function rgbStr(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}
function valueToColor(value, contrast, heatLow, heatMid, heatHigh) {
    const t = Math.pow(Math.min(1, Math.max(0, value)), 1 / contrast);
    const low = hexToRgb(heatLow);
    const mid = hexToRgb(heatMid);
    const high = hexToRgb(heatHigh);
    if (t < 0.45) {
        const s = t / 0.45;
        return rgbStr(lerp(low.r, mid.r, s), lerp(low.g, mid.g, s), lerp(low.b, mid.b, s));
    }
    const s = (t - 0.45) / 0.55;
    return rgbStr(lerp(mid.r, high.r, s), lerp(mid.g, high.g, s), lerp(mid.b, high.b, s));
}
function starsLabel(n) {
    return "★".repeat(n) + "☆".repeat(5 - n);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heatmap",
    ()=>Heatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Heatmap({ dataset, cells, mode, contrast, cellSize = 30, showLabels = true, compact = false, highlightBlock = null }) {
    const gap = compact ? 2 : 3;
    const labelW = compact ? 36 : 52;
    const { theme } = dataset;
    const rowLabels = [
        ...new Set(cells.map((c)=>c.rowId))
    ];
    const colLabels = [
        ...new Set(cells.map((c)=>c.colId))
    ];
    const gridW = colLabels.length * (cellSize + gap) - gap;
    const gridH = rowLabels.length * (cellSize + gap) - gap;
    const rowActive = mode === "row" || mode === "bicluster";
    const colActive = mode === "column" || mode === "bicluster";
    const showHighlight = mode === "bicluster" && highlightBlock && !compact;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block",
        children: [
            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    marginLeft: labelW + 8,
                    marginBottom: 6
                },
                children: colLabels.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        layout: true,
                        className: "truncate text-center font-mono text-[9px] font-bold uppercase tracking-tight text-black",
                        style: {
                            width: cellSize + gap,
                            color: colActive ? theme.accent : "#888",
                            maxWidth: cellSize + gap
                        },
                        title: col,
                        children: compact ? col.slice(0, 3) : col.length > 8 ? col.slice(0, 7) + "…" : col
                    }, col, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            width: labelW,
                            gap
                        },
                        children: rowLabels.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                className: "flex items-center justify-end pr-1 font-mono text-[9px] font-bold uppercase text-black",
                                style: {
                                    height: cellSize,
                                    color: rowActive ? "#0A0A0A" : "#888"
                                },
                                children: row
                            }, row, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            width: gridW,
                            height: gridH
                        },
                        children: [
                            showHighlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                className: "pointer-events-none absolute z-20 border-[3px] border-black",
                                style: {
                                    left: highlightBlock.colStart * (cellSize + gap) - 2,
                                    top: highlightBlock.rowStart * (cellSize + gap) - 2,
                                    width: (highlightBlock.colEnd - highlightBlock.colStart + 1) * (cellSize + gap) + 1,
                                    height: (highlightBlock.rowEnd - highlightBlock.rowStart + 1) * (cellSize + gap) + 1,
                                    backgroundColor: `${theme.accent}18`,
                                    boxShadow: `4px 4px 0 ${theme.accent}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
                                    layoutId: compact ? undefined : cell.id,
                                    transition: {
                                        layout: {
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32
                                        },
                                        backgroundColor: {
                                            duration: 0.25
                                        }
                                    },
                                    className: "absolute border border-black/10",
                                    style: {
                                        width: cellSize,
                                        height: cellSize,
                                        left: cell.col * (cellSize + gap),
                                        top: cell.row * (cellSize + gap),
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["valueToColor"])(cell.value, contrast, theme.heatLow, theme.heatMid, theme.heatHigh)
                                    },
                                    title: `${cell.rowId} × ${cell.colId}: ${cell.value.toFixed(2)}`,
                                    whileHover: {
                                        scale: 1.2,
                                        zIndex: 30,
                                        borderColor: "#0A0A0A"
                                    }
                                }, cell.id, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            showLabels && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex justify-between font-mono text-[9px] font-bold uppercase tracking-widest text-black/40",
                style: {
                    width: labelW + 8 + gridW
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "→ ",
                            dataset.rowLabel
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "↑ ",
                            dataset.colLabel
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = Heatmap;
var _c;
__turbopack_context__.k.register(_c, "Heatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Slider({ label, value, min, max, step, accent, onChange, format }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "font-mono text-[10px] font-bold uppercase tracking-widest text-black/60",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "border-2 border-black px-2 py-0.5 font-mono text-[10px] font-bold",
                        style: {
                            backgroundColor: accent,
                            color: "#0A0A0A"
                        },
                        children: format ? format(value) : value.toFixed(2)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(parseFloat(e.target.value)),
                className: "sharp-slider h-2 w-full cursor-pointer appearance-none bg-black/10",
                style: {
                    accentColor: accent
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteringDashboard",
    ()=>ClusteringDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/datasets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ClusteringDashboard() {
    _s();
    const [datasetId, setDatasetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("movies");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("original");
    const [contrast, setContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.3);
    const [noise, setNoise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.03);
    const dataset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataset"])(datasetId);
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][mode];
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteringDashboard.useMemo[cells]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(dataset, mode, noise)
    }["ClusteringDashboard.useMemo[cells]"], [
        dataset,
        mode,
        noise
    ]);
    const miniViews = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEW_MODES"].map((m)=>({
            mode: m,
            cells: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(dataset, m, noise),
            info: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][m]
        }));
    const coreDatasets = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATASETS"].filter((d)=>d.tier === "core");
    const advancedDatasets = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATASETS"].filter((d)=>d.tier === "advanced");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FFFDF7] text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed right-0 top-0 h-full w-3",
                style: {
                    background: `repeating-linear-gradient(
            -45deg,
            ${dataset.theme.accent},
            ${dataset.theme.accent} 6px,
            transparent 6px,
            transparent 12px
          )`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-8 border-b-4 border-black pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-end justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/50",
                                            children: "Visual Analytics · Clustering Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            initial: {
                                                opacity: 0,
                                                x: -12
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            className: "mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl",
                                            style: {
                                                color: dataset.theme.accent
                                            },
                                            children: "Cluster"
                                        }, dataset.id, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 max-w-xl text-sm font-medium leading-relaxed text-black/70",
                                            children: "One dashboard. Three real-world matrices. Toggle clustering modes and watch patterns emerge — or stay hidden."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-3 border-black px-4 py-2 font-mono text-xs font-bold uppercase",
                                    style: {
                                        backgroundColor: dataset.theme.secondary,
                                        boxShadow: "4px 4px 0 #0A0A0A"
                                    },
                                    children: dataset.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 lg:grid-cols-[260px_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-3 border-black bg-white",
                                        style: {
                                            boxShadow: "6px 6px 0 #0A0A0A"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b-3 border-black px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest",
                                                style: {
                                                    backgroundColor: dataset.theme.accentLight
                                                },
                                                children: "Datasets"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-black/40",
                                                        children: "Core"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    coreDatasets.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatasetButton, {
                                                            dataset: d,
                                                            active: datasetId === d.id,
                                                            onClick: ()=>{
                                                                setDatasetId(d.id);
                                                                setMode("original");
                                                            }
                                                        }, d.id, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-black/40",
                                                        children: "Advanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, this),
                                                    advancedDatasets.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DatasetButton, {
                                                            dataset: d,
                                                            active: datasetId === d.id,
                                                            onClick: ()=>{
                                                                setDatasetId(d.id);
                                                                setMode("original");
                                                            }
                                                        }, d.id, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-3 border-black bg-white",
                                        style: {
                                            boxShadow: "6px 6px 0 #0A0A0A"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b-3 border-black bg-black px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white",
                                                children: "Clustering mode"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 space-y-1",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEW_MODES"].map((m)=>{
                                                    const active = mode === m;
                                                    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][m];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMode(m),
                                                        className: "relative w-full px-3 py-2.5 text-left transition-colors",
                                                        style: {
                                                            backgroundColor: active ? dataset.theme.accent : "transparent",
                                                            color: active ? "#FFFDF7" : "#0A0A0A"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold uppercase tracking-wide",
                                                                children: meta.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-0.5 block font-mono text-[9px] uppercase",
                                                                style: {
                                                                    opacity: active ? 0.85 : 0.45
                                                                },
                                                                children: meta.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, m, true, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-3 border-black bg-white p-4",
                                        style: {
                                            boxShadow: "6px 6px 0 #0A0A0A"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-black/50",
                                                children: "Controls"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                        label: "Contrast",
                                                        value: contrast,
                                                        min: 0.7,
                                                        max: 2.5,
                                                        step: 0.1,
                                                        accent: dataset.theme.accent,
                                                        onChange: setContrast,
                                                        format: (v)=>`${v.toFixed(1)}×`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                        label: "Noise",
                                                        value: noise,
                                                        min: 0,
                                                        max: 0.18,
                                                        step: 0.01,
                                                        accent: dataset.theme.secondary,
                                                        onChange: setNoise,
                                                        format: (v)=>`${(v * 100).toFixed(0)}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -6
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: "border-3 border-black bg-white",
                                            style: {
                                                boxShadow: `8px 8px 0 ${dataset.theme.accent}`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-3 border-b-3 border-black px-5 py-4",
                                                    style: {
                                                        backgroundColor: dataset.theme.accentLight
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-lg font-black uppercase tracking-tight",
                                                                    children: dataset.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-0.5 text-xs font-medium text-black/60",
                                                                    children: dataset.subtitle
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-sm",
                                                                    style: {
                                                                        color: dataset.theme.accent
                                                                    },
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["starsLabel"])(dataset.stars)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "border-2 border-black px-2 py-0.5 font-mono text-[9px] font-bold uppercase",
                                                                    style: {
                                                                        backgroundColor: dataset.theme.secondary
                                                                    },
                                                                    children: info.tag
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-b-3 border-black px-5 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold",
                                                            children: info.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-black/60",
                                                            children: info.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        mode === "row" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs font-medium",
                                                            style: {
                                                                color: dataset.theme.accent
                                                            },
                                                            children: [
                                                                "→ ",
                                                                dataset.clusteringInsight
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        mode === "column" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs font-medium",
                                                            style: {
                                                                color: dataset.theme.accent
                                                            },
                                                            children: [
                                                                "→ ",
                                                                dataset.colClusterLabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this),
                                                        mode === "bicluster" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs font-medium",
                                                            style: {
                                                                color: dataset.theme.accent
                                                            },
                                                            children: [
                                                                "→ ",
                                                                dataset.biclusterInsight
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center overflow-x-auto px-5 py-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                                        dataset: dataset,
                                                        cells: cells,
                                                        mode: mode,
                                                        contrast: contrast,
                                                        highlightBlock: dataset.biclusterBlock
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-between gap-3 border-t-3 border-black px-5 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 font-mono text-[9px] font-bold uppercase",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 border border-black/20",
                                                                            style: {
                                                                                background: dataset.theme.heatLow
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Low"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 border border-black/20",
                                                                            style: {
                                                                                background: dataset.theme.heatMid
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "Mid"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 border border-black/20",
                                                                            style: {
                                                                                background: dataset.theme.heatHigh
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        "High"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-mono text-[9px] text-black/40",
                                                            children: [
                                                                dataset.rows.length,
                                                                " ",
                                                                dataset.rowLabel,
                                                                " × ",
                                                                dataset.cols.length,
                                                                " ",
                                                                dataset.colLabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, `${datasetId}-${mode}`, true, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50",
                                                children: "All modes — click to switch"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
                                                children: miniViews.map(({ mode: m, cells: c, info: i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                        onClick: ()=>setMode(m),
                                                        whileHover: {
                                                            y: -3
                                                        },
                                                        whileTap: {
                                                            scale: 0.98
                                                        },
                                                        className: "border-3 border-black bg-white p-3 text-left",
                                                        style: {
                                                            boxShadow: mode === m ? `5px 5px 0 ${dataset.theme.accent}` : "3px 3px 0 #0A0A0A",
                                                            outline: mode === m ? `3px solid ${dataset.theme.accent}` : "none",
                                                            outlineOffset: -3
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-mono text-[9px] font-bold uppercase tracking-widest text-black/50",
                                                                children: i.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs font-bold uppercase",
                                                                children: i.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                                                    dataset: dataset,
                                                                    cells: c,
                                                                    mode: m,
                                                                    contrast: contrast,
                                                                    cellSize: 14,
                                                                    showLabels: false,
                                                                    compact: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, m, true, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConceptCard, {
                                                title: "Regular clustering",
                                                accent: dataset.theme.accent,
                                                active: mode === "row" || mode === "column",
                                                body: `Groups data in ONE direction. ${dataset.rowClusterLabel} appear when clustering rows. ${dataset.colClusterLabel} appear when clustering columns. Never both at once.`
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConceptCard, {
                                                title: "Biclustering",
                                                accent: dataset.theme.secondary,
                                                active: mode === "bicluster",
                                                body: dataset.biclusterInsight,
                                                highlight: dataset.biclusterBlock.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 333,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ClusteringDashboard, "ea4YN8fH7lnDzQThKrFroCXZHio=");
_c = ClusteringDashboard;
function DatasetButton({ dataset, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex w-full items-center justify-between px-3 py-2.5 text-left transition-all",
        style: {
            backgroundColor: active ? dataset.theme.accent : "transparent",
            color: active ? "#FFFDF7" : "#0A0A0A"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold",
                children: dataset.title
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono text-[9px]",
                style: {
                    opacity: active ? 0.9 : 0.5
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["starsLabel"])(dataset.stars)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, this);
}
_c1 = DatasetButton;
function ConceptCard({ title, body, accent, active, highlight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            boxShadow: active ? `6px 6px 0 ${accent}` : "4px 4px 0 #0A0A0A"
        },
        className: "border-3 border-black bg-white p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-black uppercase tracking-wide",
                style: {
                    color: accent
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs leading-relaxed text-black/70",
                children: body
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            highlight && active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 inline-block border-2 border-black px-2 py-1 font-mono text-[9px] font-bold uppercase",
                style: {
                    backgroundColor: accent,
                    color: "#0A0A0A"
                },
                children: highlight
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_c2 = ConceptCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ClusteringDashboard");
__turbopack_context__.k.register(_c1, "DatasetButton");
__turbopack_context__.k.register(_c2, "ConceptCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Notes_Visual%20Analytics_Exercise%205_src_1v139z-._.js.map