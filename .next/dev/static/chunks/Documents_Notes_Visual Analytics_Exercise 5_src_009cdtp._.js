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
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LESSON_STEPS",
    ()=>LESSON_STEPS,
    "PHASE_COLORS",
    ()=>PHASE_COLORS,
    "TEACHING_DATASETS",
    ()=>TEACHING_DATASETS,
    "getTeachingDataset",
    ()=>getTeachingDataset
]);
const TEACHING_DATASETS = [
    {
        id: "movies",
        title: "Movies × Users",
        rowLabel: "Users",
        colLabel: "Movies",
        rowUnit: "user",
        colUnit: "movie",
        valueLabel: "rating (5 = loves, 1 = dislikes)",
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
        rows: [
            "U1",
            "U2",
            "U3",
            "U4"
        ],
        cols: [
            "Horror1",
            "Horror2",
            "Action1",
            "Action2"
        ],
        matrix: [
            [
                5,
                5,
                1,
                1
            ],
            [
                4,
                5,
                1,
                2
            ],
            [
                1,
                1,
                5,
                5
            ],
            [
                2,
                1,
                4,
                5
            ]
        ],
        rowClusters: [
            {
                name: "Cluster A",
                indices: [
                    0,
                    1
                ],
                meaning: "U1 & U2 are horror lovers"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "U3 & U4 are action lovers"
            }
        ],
        colClusters: [
            {
                name: "Cluster A",
                indices: [
                    0,
                    1
                ],
                meaning: "Horror1 & Horror2 rated similarly"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "Action1 & Action2 rated similarly"
            }
        ],
        bicluster: {
            rowIndices: [
                0,
                1
            ],
            colIndices: [
                0,
                1
            ],
            label: "Horror fan bicluster",
            meaning: "U1 & U2 jointly love Horror1 & Horror2 — a tight 2×2 preference block.",
            whyExcluded: "Look at U1's Action ratings: 1 and 1. U2's: 1 and 2. Those are low — there is no joint 'we both love action' signal. A bicluster needs strong co-occurrence in the same cells. Action movies belong to a different bicluster (U3 & U4 × Action1 & Action2), not this one.",
            aftermath: "After finding this bicluster you can: recommend Horror1 & Horror2 to U1 & U2 only; run a separate bicluster for action fans; use this block as a 'horror segment' in a marketing campaign without polluting it with action recommendations."
        },
        similarRowPair: [
            0,
            1
        ],
        differentRowPair: [
            0,
            2
        ],
        similarColPair: [
            0,
            1
        ],
        rowClusterInsight: "Which USERS behave similarly?",
        colClusterInsight: "Which MOVIES receive similar ratings from users?",
        biclusterInsight: "Biclustering identifies a specific user group matched to a specific movie group — not every movie at once.",
        biclusterIntroText: "Row clustering finds broad groups, like all horror fans. But it still considers every movie when forming those groups.\n\nBiclustering goes one step deeper, it identifies a specific group of users who share interest in a specific group of movies."
    },
    {
        id: "accounts",
        title: "Accounts × IP Addresses",
        rowLabel: "Accounts",
        colLabel: "IP Addresses",
        rowUnit: "account",
        colUnit: "IP",
        valueLabel: "login count (5 = frequent, 1 = rare)",
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
        rows: [
            "acc1",
            "acc2",
            "acc3",
            "acc4"
        ],
        cols: [
            "home_IP",
            "office_IP",
            "bot_CDN",
            "sus_IP"
        ],
        matrix: [
            [
                5,
                2,
                1,
                1
            ],
            [
                4,
                1,
                1,
                2
            ],
            [
                1,
                1,
                5,
                5
            ],
            [
                2,
                1,
                4,
                5
            ]
        ],
        rowClusters: [
            {
                name: "Cluster A",
                indices: [
                    0,
                    1
                ],
                meaning: "acc1 & acc2 are normal users"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "acc3 & acc4 are bot accounts"
            }
        ],
        colClusters: [
            {
                name: "Cluster A",
                indices: [
                    0,
                    1
                ],
                meaning: "home_IP & office_IP (legitimate)"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "bot_CDN & sus_IP (suspicious)"
            }
        ],
        bicluster: {
            rowIndices: [
                2,
                3
            ],
            colIndices: [
                2,
                3
            ],
            label: "Attack coordination bicluster",
            meaning: "acc3 & acc4 jointly hit bot_CDN & sus_IP at high frequency — a 2×2 attack block.",
            whyExcluded: "acc3's home_IP=1 and office_IP=1 — nearly zero. Normal IPs don't co-occur with the attack pattern. They're irrelevant to THIS bicluster, not to the whole dataset.",
            aftermath: "Security team can: block acc3 & acc4 from sus_IP; flag bot_CDN as compromised; leave normal home/office traffic on a separate watchlist."
        },
        similarRowPair: [
            0,
            1
        ],
        differentRowPair: [
            0,
            2
        ],
        similarColPair: [
            2,
            3
        ],
        rowClusterInsight: "Which ACCOUNTS behave similarly?",
        colClusterInsight: "Which IPs are accessed by similar accounts?",
        biclusterInsight: "A coordinated attack group: specific accounts targeting specific IPs simultaneously.",
        biclusterIntroText: "Row clustering finds broad groups, like normal users vs bots. But it still considers every IP address when forming those groups.\n\nBiclustering goes one step deeper, it identifies a specific group of accounts who share activity on a specific group of IP addresses."
    }
];
function getTeachingDataset(id) {
    return TEACHING_DATASETS.find((d)=>d.id === id) ?? TEACHING_DATASETS[0];
}
const LESSON_STEPS = [
    {
        id: "intro",
        phase: "setup",
        title: "Start here",
        subtitle: "What are we looking at?"
    },
    {
        id: "raw-table",
        phase: "setup",
        title: "The raw data",
        subtitle: "A matrix of numbers — rows × columns"
    },
    {
        id: "row-vectors",
        phase: "row",
        title: "Rows as vectors",
        subtitle: "Each row becomes a list of numbers"
    },
    {
        id: "row-compare-similar",
        phase: "row",
        title: "Similar rows",
        subtitle: "Compare two rows that look alike"
    },
    {
        id: "row-compare-different",
        phase: "row",
        title: "Different rows",
        subtitle: "Compare two rows that look nothing alike"
    },
    {
        id: "row-distance-matrix",
        phase: "row",
        title: "All distances",
        subtitle: "Every row compared to every other row"
    },
    {
        id: "row-clusters",
        phase: "row",
        title: "Row clusters",
        subtitle: "Group similar rows together"
    },
    {
        id: "row-reorder",
        phase: "row",
        title: "Row clustering result",
        subtitle: "Reorder rows — columns stay fixed"
    },
    {
        id: "col-vectors",
        phase: "column",
        title: "Columns as vectors",
        subtitle: "Flip your thinking — now columns are vectors"
    },
    {
        id: "col-compare",
        phase: "column",
        title: "Similar columns",
        subtitle: "Which columns have similar patterns?"
    },
    {
        id: "col-clusters",
        phase: "column",
        title: "Column clusters",
        subtitle: "Group similar columns together"
    },
    {
        id: "col-reorder",
        phase: "column",
        title: "Column clustering result",
        subtitle: "Reorder columns — rows stay fixed"
    },
    {
        id: "bicluster-intro",
        phase: "bicluster",
        title: "The limitation",
        subtitle: "Row OR column — never both… until now"
    },
    {
        id: "bicluster-reveal",
        phase: "bicluster",
        title: "Bicluster found",
        subtitle: "Both axes at once — a hidden submatrix"
    },
    {
        id: "summary",
        phase: "done",
        title: "You got it",
        subtitle: "Row · column · biclustering — recap"
    }
];
const PHASE_COLORS = {
    setup: "#888888",
    row: "#FF2D6B",
    column: "#0066FF",
    bicluster: "#FFE600",
    done: "#00E5A0"
};
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
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TermButton",
    ()=>TermButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/glossary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TermButton({ termId, children, className = "" }) {
    _s();
    const { openTerm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerm"])();
    const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$glossary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTerm"])(termId);
    if (!term) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: children ?? termId
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx",
        lineNumber: 16,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>openTerm(termId),
        className: `term-btn inline align-baseline font-semibold text-black underline decoration-2 decoration-dotted underline-offset-2 transition-colors hover:bg-[#FFE600] hover:decoration-solid ${className}`,
        title: `Learn: ${term.label}`,
        children: children ?? term.label
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(TermButton, "KtZRkGVzaY0N4EafV6nv1WPol6I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTerm"]
    ];
});
_c = TermButton;
var _c;
__turbopack_context__.k.register(_c, "TermButton");
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
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawDataTable",
    ()=>RawDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function ratingColor(v, accent) {
    if (v >= 4) return accent;
    if (v >= 3) return "#FFD23F";
    return "#E8E8E8";
}
function RawDataTable({ data, highlightRows = [], highlightCols = [], dimOutside = false, scrambledRowOrder, scrambledColOrder, accent, animateCells = true }) {
    const color = accent ?? data.theme.accent;
    const rowOrder = scrambledRowOrder ?? data.rows.map((_, i)=>i);
    const colOrder = scrambledColOrder ?? data.cols.map((_, i)=>i);
    const isHighlighted = (r, c)=>highlightRows.includes(r) && highlightCols.includes(c);
    const isDimmed = (r, c)=>{
        if (!dimOutside) return false;
        return !isHighlighted(r, c);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block w-full max-w-full overflow-x-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[260px] border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-2 border-black bg-black px-3 py-2.5 text-left text-xs font-bold text-white",
                                    children: data.rowLabel
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                colOrder.map((ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-2 border-black px-2 py-2.5 text-center text-xs font-bold md:px-3",
                                        style: {
                                            backgroundColor: highlightCols.includes(ci) ? color : "#F0F0F0",
                                            color: highlightCols.includes(ci) ? "#FFF" : "#0A0A0A"
                                        },
                                        children: data.cols[ci]
                                    }, data.cols[ci], false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rowOrder.map((ri, displayRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-2 border-black px-3 py-2.5 text-sm font-bold",
                                        style: {
                                            backgroundColor: highlightRows.includes(ri) ? color : "#F0F0F0",
                                            color: highlightRows.includes(ri) ? "#FFF" : "#0A0A0A"
                                        },
                                        children: data.rows[ri]
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    colOrder.map((ci, displayCol)=>{
                                        const val = data.matrix[ri][ci];
                                        const highlighted = isHighlighted(ri, ci);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].td, {
                                            layout: animateCells,
                                            initial: animateCells ? {
                                                opacity: 0
                                            } : false,
                                            animate: {
                                                opacity: isDimmed(ri, ci) ? 0.2 : 1,
                                                backgroundColor: highlighted ? "#FFE600" : ratingColor(val, color)
                                            },
                                            transition: {
                                                delay: displayRow * 0.04 + displayCol * 0.02
                                            },
                                            className: "border-2 border-black px-3 py-2.5 text-center text-lg font-bold md:text-xl",
                                            children: val
                                        }, `${ri}-${ci}`, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, data.rows[ri], true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[#5c5c5c]",
                children: data.valueLabel
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = RawDataTable;
var _c;
__turbopack_context__.k.register(_c, "RawDataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorDisplay",
    ()=>VectorDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function VectorDisplay({ data, mode, highlightIndices = [], accent }) {
    const items = mode === "row" ? data.rows.map((label, i)=>({
            label,
            vector: data.matrix[i],
            index: i
        })) : data.cols.map((label, j)=>({
            label,
            vector: data.matrix.map((row)=>row[j]),
            index: j
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            items.map(({ label, vector, index }, i)=>{
                const highlighted = highlightIndices.includes(index);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -12
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: i * 0.08
                    },
                    className: "border-2 border-black p-3 md:p-4",
                    style: {
                        backgroundColor: highlighted ? `${accent}10` : "#FFF",
                        boxShadow: highlighted ? `3px 3px 0 ${accent}` : "2px 2px 0 #0A0A0A"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "border-2 border-black px-2 py-1 text-sm font-bold",
                                style: {
                                    backgroundColor: highlighted ? accent : "#F0F0F0",
                                    color: highlighted ? "#FFF" : "#0A0A0A"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-sm",
                                children: "= ["
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            vector.map((v, vi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "border-2 border-black px-2 py-1 font-mono text-sm font-bold",
                                    style: {
                                        backgroundColor: v >= 4 ? accent : v <= 2 ? "#E8E8E8" : "#FFD23F",
                                        color: v >= 4 ? "#FFF" : "#0A0A0A"
                                    },
                                    children: v
                                }, vi, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-sm",
                                children: "]"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, label, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable text-[14px] text-[#5c5c5c]",
                children: [
                    "Each ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                        termId: "vector",
                        children: "vector"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                        lineNumber: 73,
                        columnNumber: 14
                    }, this),
                    " is one",
                    " ",
                    mode === "row" ? data.rowUnit : data.colUnit,
                    " written as numbers."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = VectorDisplay;
var _c;
__turbopack_context__.k.register(_c, "VectorDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildDistanceMatrix",
    ()=>buildDistanceMatrix,
    "distanceLabel",
    ()=>distanceLabel,
    "euclideanBreakdown",
    ()=>euclideanBreakdown,
    "euclideanDistance",
    ()=>euclideanDistance,
    "normalizeRating",
    ()=>normalizeRating
]);
function euclideanDistance(a, b) {
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += (a[i] - b[i]) ** 2;
    }
    return Math.sqrt(sum);
}
function euclideanBreakdown(a, b, labels) {
    const terms = a.map((val, i)=>{
        const diff = val - b[i];
        return {
            index: i,
            label: labels[i] ?? `dim ${i + 1}`,
            a: val,
            b: b[i],
            diff,
            squared: diff ** 2
        };
    });
    const sumSq = terms.reduce((s, t)=>s + t.squared, 0);
    return {
        distance: Math.sqrt(sumSq),
        terms
    };
}
function buildDistanceMatrix(vectors) {
    const n = vectors.length;
    return Array.from({
        length: n
    }, (_, i)=>Array.from({
            length: n
        }, (_, j)=>i === j ? 0 : euclideanDistance(vectors[i], vectors[j])));
}
function distanceLabel(d) {
    if (d < 2) return "very close";
    if (d < 4) return "close";
    if (d < 6) return "far";
    return "very far";
}
function normalizeRating(v, min = 1, max = 5) {
    return (v - min) / (max - min);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistanceCalculator",
    ()=>DistanceCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DistanceCalculator({ data, mode, indexA, indexB, accent, interactive = false, onChangeA, onChangeB }) {
    _s();
    const labels = mode === "row" ? data.rows : data.cols;
    const dimLabels = mode === "row" ? data.cols : data.rows;
    const vecA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DistanceCalculator.useMemo[vecA]": ()=>mode === "row" ? data.matrix[indexA] : data.matrix.map({
                "DistanceCalculator.useMemo[vecA]": (row)=>row[indexA]
            }["DistanceCalculator.useMemo[vecA]"])
    }["DistanceCalculator.useMemo[vecA]"], [
        data,
        mode,
        indexA
    ]);
    const vecB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DistanceCalculator.useMemo[vecB]": ()=>mode === "row" ? data.matrix[indexB] : data.matrix.map({
                "DistanceCalculator.useMemo[vecB]": (row)=>row[indexB]
            }["DistanceCalculator.useMemo[vecB]"])
    }["DistanceCalculator.useMemo[vecB]"], [
        data,
        mode,
        indexB
    ]);
    const { distance, terms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["euclideanBreakdown"])(vecA, vecB, dimLabels);
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceLabel"])(distance);
    const isClose = distance < 3;
    const picker = (value, onChange)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: labels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onChange?.(i),
                    className: "border-2 border-black px-3 py-2 text-sm font-bold transition-colors",
                    style: {
                        backgroundColor: value === i ? accent : "#F5F5F5",
                        color: value === i ? "#FFF" : "#0A0A0A"
                    },
                    children: l
                }, l, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
            lineNumber: 53,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            interactive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs font-semibold text-[#5c5c5c]",
                                children: "Pick A"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            picker(indexA, onChangeA)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-xs font-semibold text-[#5c5c5c]",
                                children: "Pick B"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            picker(indexB, onChangeB)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorChip, {
                        label: labels[indexA],
                        vector: vecA,
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorChip, {
                        label: labels[indexB],
                        vector: vecB,
                        accent: "#888"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "border-3 border-black bg-white p-4 md:p-5",
                style: {
                    boxShadow: `4px 4px 0 ${isClose ? accent : "#0A0A0A"}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-[#5c5c5c]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "euclidean-distance",
                                children: "Euclidean distance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            " calculation"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 font-mono text-sm leading-relaxed text-black md:text-base",
                        children: [
                            "d(",
                            labels[indexA],
                            ", ",
                            labels[indexB],
                            ") = √(",
                            terms.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        i > 0 && " + ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                backgroundColor: "#FFE600"
                                            },
                                            animate: {
                                                backgroundColor: "transparent"
                                            },
                                            transition: {
                                                duration: 1
                                            },
                                            children: [
                                                "(",
                                                t.a,
                                                "−",
                                                t.b,
                                                ")²"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, t.index, true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1",
                        children: terms.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: i * 0.06
                                },
                                className: "font-mono text-sm text-[#3d3d3d]",
                                children: [
                                    "(",
                                    t.a,
                                    "−",
                                    t.b,
                                    ")² = ",
                                    t.squared,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-[#888]",
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.index, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center gap-3 border-t-2 border-black/10 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-2xl font-bold",
                                style: {
                                    color: accent
                                },
                                children: [
                                    "√",
                                    terms.reduce((s, t)=>s + t.squared, 0),
                                    " = ",
                                    distance.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "border-2 border-black px-3 py-1 text-sm font-bold text-white",
                                style: {
                                    backgroundColor: isClose ? accent : "#FF0040"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "readable mt-3 text-[15px]",
                        children: isClose ? `${labels[indexA]} and ${labels[indexB]} land in the same cluster.` : `${labels[indexA]} and ${labels[indexB]} belong in different clusters.`
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, `${indexA}-${indexB}-${distance}`, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(DistanceCalculator, "p3+XZuai974ya4dmRWAYaE4SzQc=");
_c = DistanceCalculator;
function VectorChip({ label, vector, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-3",
        style: {
            backgroundColor: `${accent}12`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-[#5c5c5c]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                        termId: "vector",
                        children: "Vector"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    " ",
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 font-mono text-base font-bold",
                children: [
                    "[",
                    vector.join(", "),
                    "]"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c1 = VectorChip;
var _c, _c1;
__turbopack_context__.k.register(_c, "DistanceCalculator");
__turbopack_context__.k.register(_c1, "VectorChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistanceMatrixView",
    ()=>DistanceMatrixView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DistanceMatrixView({ data, mode, accent, onCellClick, highlightPair }) {
    const labels = mode === "row" ? data.rows : data.cols;
    const vectors = mode === "row" ? data.matrix : data.cols.map((_, j)=>data.matrix.map((row)=>row[j]));
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDistanceMatrix"])(vectors);
    const maxD = Math.max(...dist.flat());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable mb-3 text-[15px]",
                children: [
                    "Each cell = ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                        termId: "euclidean-distance",
                        children: "distance"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    " between two",
                    " ",
                    mode === "row" ? data.rowLabel.toLowerCase() : data.colLabel.toLowerCase(),
                    ". Tap to inspect."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "border-collapse font-mono text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-2 border-black bg-black p-2 text-xs text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    labels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border-2 border-black bg-black p-2 text-xs font-bold text-white",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: dist.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border-2 border-black bg-black p-2 text-xs font-bold text-white",
                                            children: labels[i]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        row.map((d, j)=>{
                                            const isHighlight = highlightPair && (highlightPair[0] === i && highlightPair[1] === j || highlightPair[0] === j && highlightPair[1] === i);
                                            const t = i === j ? 0 : 1 - d / maxD;
                                            const r = parseInt(accent.slice(1, 3), 16);
                                            const g = parseInt(accent.slice(3, 5), 16);
                                            const b = parseInt(accent.slice(5, 7), 16);
                                            const bg = i === j ? "#E8E8E8" : `rgba(${r}, ${g}, ${b}, ${0.2 + t * 0.8})`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].td, {
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                onClick: ()=>i !== j && onCellClick?.(i, j),
                                                className: "cursor-pointer border-2 border-black p-2 text-center text-sm font-bold md:p-3",
                                                style: {
                                                    backgroundColor: bg,
                                                    color: t > 0.55 ? "#FFF" : "#0A0A0A",
                                                    outline: isHighlight ? `3px solid ${accent}` : undefined
                                                },
                                                children: i === j ? "—" : d.toFixed(1)
                                            }, j, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, labels[i], true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = DistanceMatrixView;
var _c;
__turbopack_context__.k.register(_c, "DistanceMatrixView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusterReveal",
    ()=>ClusterReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const CLUSTER_COLORS = [
    "#FF2D6B",
    "#0066FF",
    "#FFE600",
    "#00E5A0"
];
function ClusterReveal({ data, mode, accent }) {
    const clusters = mode === "row" ? data.rowClusters : data.colClusters;
    const items = mode === "row" ? data.rows : data.cols;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: clusters.map((cluster, ci)=>{
                const color = CLUSTER_COLORS[ci % CLUSTER_COLORS.length];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: ci * 0.12
                    },
                    className: "border-2 border-black p-4",
                    style: {
                        boxShadow: `4px 4px 0 ${color}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block border-2 border-black px-2 py-0.5 text-xs font-bold text-white",
                            style: {
                                backgroundColor: color
                            },
                            children: cluster.name
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-2",
                            children: cluster.indices.map((idx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    transition: {
                                        delay: ci * 0.12 + i * 0.08
                                    },
                                    className: "border-2 border-black px-3 py-1 text-sm font-bold text-white",
                                    style: {
                                        backgroundColor: color
                                    },
                                    children: items[idx]
                                }, items[idx], false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                                    lineNumber: 41,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "readable mt-3 text-[15px] font-medium",
                            children: cluster.meaning
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    ]
                }, cluster.name, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ClusterReveal;
var _c;
__turbopack_context__.k.register(_c, "ClusterReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepNavigator",
    ()=>StepNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function StepNavigator({ currentStep, onPrev, onNext, onJump, accent }) {
    const step = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"][currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"].length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t-3 border-black bg-[#FAFAFA]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 overflow-x-auto px-3 py-3 md:px-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onJump(i),
                        title: s.title,
                        className: "shrink-0 p-1",
                        "aria-label": s.title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                backgroundColor: i === currentStep ? accent : i < currentStep ? "#0A0A0A" : "#DDD",
                                width: i === currentStep ? 20 : 8
                            },
                            className: "h-2 border border-black"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, s.id, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-t-2 border-black/10 px-4 py-3 md:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onPrev,
                        disabled: isFirst,
                        className: "border-2 border-black px-4 py-2.5 text-sm font-bold disabled:opacity-30",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hidden text-center text-sm font-semibold text-black sm:block",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNext,
                        disabled: isLast,
                        className: "border-2 border-black px-4 py-2.5 text-sm font-bold text-white disabled:opacity-30",
                        style: {
                            backgroundColor: isLast ? "#888" : accent
                        },
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = StepNavigator;
var _c;
__turbopack_context__.k.register(_c, "StepNavigator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedClusterDemo",
    ()=>AnimatedClusterDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SCRAMBLED_ROWS = [
    2,
    0,
    3,
    1
];
const SCRAMBLED_COLS = [
    2,
    3,
    0,
    1
];
const AUTO_MS = 2800;
function ratingColor(v, accent) {
    if (v >= 4) return accent;
    if (v >= 3) return "#FFD23F";
    return "#E8E8E8";
}
function AnimatedClusterDemo({ data, mode, accent }) {
    _s();
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clusteredRows = data.rowClusters.flatMap((c)=>c.indices);
    const clusteredCols = data.colClusters.flatMap((c)=>c.indices);
    const naturalRows = data.rows.map((_, i)=>i);
    const naturalCols = data.cols.map((_, i)=>i);
    const biclusterRows = [
        ...data.bicluster.rowIndices,
        ...naturalRows.filter((i)=>!data.bicluster.rowIndices.includes(i))
    ];
    const biclusterCols = [
        ...data.bicluster.colIndices,
        ...naturalCols.filter((i)=>!data.bicluster.colIndices.includes(i))
    ];
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedClusterDemo.useMemo[steps]": ()=>{
            if (mode === "row") {
                const c0 = data.rowClusters[0].indices;
                const c1 = data.rowClusters[1].indices;
                return [
                    {
                        label: "Messy",
                        narration: `Rows are shuffled — you can't see that ${data.rows[c0[0]]} & ${data.rows[c0[1]]} are horror fans. Columns are untouched.`,
                        rowOrder: SCRAMBLED_ROWS,
                        colOrder: naturalCols
                    },
                    {
                        label: "Detect",
                        narration: `Distance matrix shows ${data.rows[c0[0]]} & ${data.rows[c0[1]]} are very close. Algorithm flags them as Cluster A.`,
                        rowOrder: SCRAMBLED_ROWS,
                        colOrder: naturalCols,
                        highlightRows: c0
                    },
                    {
                        label: "Move A",
                        narration: `Slide ${data.rows[c0[0]]} & ${data.rows[c0[1]]} next to each other at the top.`,
                        rowOrder: [
                            ...c0,
                            ...SCRAMBLED_ROWS.filter({
                                "AnimatedClusterDemo.useMemo[steps]": (r)=>!c0.includes(r)
                            }["AnimatedClusterDemo.useMemo[steps]"])
                        ],
                        colOrder: naturalCols,
                        highlightRows: c0
                    },
                    {
                        label: "Detect B",
                        narration: `${data.rows[c1[0]]} & ${data.rows[c1[1]]} are action fans — another cluster.`,
                        rowOrder: [
                            ...c0,
                            ...SCRAMBLED_ROWS.filter({
                                "AnimatedClusterDemo.useMemo[steps]": (r)=>!c0.includes(r)
                            }["AnimatedClusterDemo.useMemo[steps]"])
                        ],
                        colOrder: naturalCols,
                        highlightRows: c1
                    },
                    {
                        label: "Done",
                        narration: `All rows grouped: horror fans on top, action fans below. Columns never moved — horizontal bands are visible.`,
                        rowOrder: clusteredRows,
                        colOrder: naturalCols,
                        highlightRows: clusteredRows
                    }
                ];
            }
            if (mode === "column") {
                const c0 = data.colClusters[0].indices;
                const c1 = data.colClusters[1].indices;
                return [
                    {
                        label: "Messy",
                        narration: `Columns shuffled — ${data.cols[c0[0]]} & ${data.cols[c0[1]]} are separated. Rows stay fixed.`,
                        rowOrder: naturalRows,
                        colOrder: SCRAMBLED_COLS
                    },
                    {
                        label: "Detect",
                        narration: `${data.cols[c0[0]]} & ${data.cols[c0[1]]} get similar ratings from the same users — they cluster.`,
                        rowOrder: naturalRows,
                        colOrder: SCRAMBLED_COLS,
                        highlightCols: c0
                    },
                    {
                        label: "Move A",
                        narration: `Slide ${data.cols[c0[0]]} & ${data.cols[c0[1]]} side by side.`,
                        rowOrder: naturalRows,
                        colOrder: [
                            ...c0,
                            ...SCRAMBLED_COLS.filter({
                                "AnimatedClusterDemo.useMemo[steps]": (c)=>!c0.includes(c)
                            }["AnimatedClusterDemo.useMemo[steps]"])
                        ],
                        highlightCols: c0
                    },
                    {
                        label: "Move B",
                        narration: `Group ${data.cols[c1[0]]} & ${data.cols[c1[1]]} together.`,
                        rowOrder: naturalRows,
                        colOrder: clusteredCols,
                        highlightCols: c1
                    },
                    {
                        label: "Done",
                        narration: `Horror movies together, action movies together. Rows never moved — vertical bands appear.`,
                        rowOrder: naturalRows,
                        colOrder: clusteredCols,
                        highlightCols: clusteredCols
                    }
                ];
            }
            const br = data.bicluster.rowIndices;
            const bc = data.bicluster.colIndices;
            const excludedCols = naturalCols.filter({
                "AnimatedClusterDemo.useMemo[steps].excludedCols": (i)=>!bc.includes(i)
            }["AnimatedClusterDemo.useMemo[steps].excludedCols"]);
            const excludedColNames = excludedCols.map({
                "AnimatedClusterDemo.useMemo[steps].excludedColNames": (i)=>data.cols[i]
            }["AnimatedClusterDemo.useMemo[steps].excludedColNames"]).join(", ");
            return [
                {
                    label: "Messy",
                    narration: "Both axes scrambled. The horror fan block is completely hidden.",
                    rowOrder: SCRAMBLED_ROWS,
                    colOrder: SCRAMBLED_COLS
                },
                {
                    label: "Find users",
                    narration: `Algorithm finds ${br.map({
                        "AnimatedClusterDemo.useMemo[steps]": (i)=>data.rows[i]
                    }["AnimatedClusterDemo.useMemo[steps]"]).join(" & ")} rate the same movies highly.`,
                    rowOrder: SCRAMBLED_ROWS,
                    colOrder: SCRAMBLED_COLS,
                    highlightRows: br
                },
                {
                    label: "Find movies",
                    narration: `Those users jointly love ${bc.map({
                        "AnimatedClusterDemo.useMemo[steps]": (i)=>data.cols[i]
                    }["AnimatedClusterDemo.useMemo[steps]"]).join(" & ")} — not ${excludedColNames}.`,
                    rowOrder: SCRAMBLED_ROWS,
                    colOrder: SCRAMBLED_COLS,
                    highlightRows: br,
                    highlightCols: bc
                },
                {
                    label: "Reorder",
                    narration: "Pull the user group and movie group together into one rectangle.",
                    rowOrder: biclusterRows,
                    colOrder: biclusterCols,
                    highlightRows: br,
                    highlightCols: bc
                },
                {
                    label: "Block",
                    narration: data.bicluster.meaning,
                    rowOrder: biclusterRows,
                    colOrder: biclusterCols,
                    highlightRows: br,
                    highlightCols: bc,
                    dimOutside: true
                },
                {
                    label: "Why excluded",
                    narration: data.bicluster.whyExcluded,
                    rowOrder: biclusterRows,
                    colOrder: biclusterCols,
                    highlightRows: br,
                    highlightCols: bc,
                    dimOutside: true
                },
                {
                    label: "Aftermath",
                    narration: data.bicluster.aftermath,
                    rowOrder: biclusterRows,
                    colOrder: biclusterCols,
                    highlightRows: br,
                    highlightCols: bc,
                    dimOutside: true
                }
            ];
        }
    }["AnimatedClusterDemo.useMemo[steps]"], [
        data,
        mode,
        clusteredRows,
        clusteredCols,
        biclusterRows,
        biclusterCols,
        naturalRows,
        naturalCols
    ]);
    const current = steps[stepIndex];
    const isLast = stepIndex >= steps.length - 1;
    const isFirst = stepIndex === 0;
    const clearTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimatedClusterDemo.useCallback[clearTimer]": ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }
    }["AnimatedClusterDemo.useCallback[clearTimer]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedClusterDemo.useEffect": ()=>{
            clearTimer();
            if (!playing || isLast) {
                if (isLast) setPlaying(false);
                return;
            }
            timerRef.current = setTimeout({
                "AnimatedClusterDemo.useEffect": ()=>{
                    setStepIndex({
                        "AnimatedClusterDemo.useEffect": (s)=>Math.min(s + 1, steps.length - 1)
                    }["AnimatedClusterDemo.useEffect"]);
                }
            }["AnimatedClusterDemo.useEffect"], AUTO_MS);
            return clearTimer;
        }
    }["AnimatedClusterDemo.useEffect"], [
        playing,
        stepIndex,
        isLast,
        steps.length,
        clearTimer
    ]);
    const reset = ()=>{
        clearTimer();
        setPlaying(false);
        setStepIndex(0);
    };
    const showBiclusterBlock = mode === "bicluster" && current.dimOutside;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (isLast) {
                                reset();
                                setPlaying(true);
                            } else {
                                setPlaying(true);
                            }
                        },
                        disabled: playing && !isLast,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold text-white disabled:opacity-40",
                        style: {
                            backgroundColor: accent
                        },
                        children: isLast ? "Replay" : playing ? "Playing…" : "Play"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            clearTimer();
                            setPlaying(false);
                        },
                        disabled: !playing,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30",
                        children: "Pause"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            clearTimer();
                            setPlaying(false);
                            setStepIndex((s)=>Math.max(s - 1, 0));
                        },
                        disabled: isFirst,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30",
                        children: "← Step"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            clearTimer();
                            setPlaying(false);
                            setStepIndex((s)=>Math.min(s + 1, steps.length - 1));
                        },
                        disabled: isLast,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30",
                        children: "Step →"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-[#5c5c5c]",
                children: [
                    "Step ",
                    stepIndex + 1,
                    "/",
                    steps.length,
                    " · use Pause + Step buttons to go at your own pace"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "border-2 border-black bg-black px-4 py-3 text-[15px] leading-relaxed text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mr-2 font-mono text-xs font-bold text-white/50",
                            children: current.label
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        current.narration
                    ]
                }, stepIndex, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            clearTimer();
                            setPlaying(false);
                            setStepIndex(i);
                        },
                        className: "h-2 flex-1 border border-black/20 transition-colors",
                        style: {
                            backgroundColor: i <= stepIndex ? accent : "#E8E8E8"
                        },
                        title: s.label
                    }, s.label, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto border-3 border-black bg-white p-2 md:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[280px] border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-2 border-black bg-black px-2 py-2 text-left text-xs font-bold text-white",
                                        children: data.rowLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    current.colOrder.map((ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].th, {
                                            layout: true,
                                            transition: {
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 30
                                            },
                                            className: "border-2 border-black px-2 py-2 text-center text-xs font-bold md:px-3",
                                            style: {
                                                backgroundColor: current.highlightCols?.includes(ci) ? `${accent}55` : "#F5F5F5"
                                            },
                                            children: data.cols[ci]
                                        }, data.cols[ci], false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: current.rowOrder.map((ri)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                    layout: true,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 30
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border-2 border-black px-2 py-2 text-sm font-bold md:px-3",
                                            style: {
                                                backgroundColor: current.highlightRows?.includes(ri) ? `${accent}33` : "#F5F5F5"
                                            },
                                            children: data.rows[ri]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        current.colOrder.map((ci)=>{
                                            const val = data.matrix[ri][ci];
                                            const inBlock = showBiclusterBlock && data.bicluster.rowIndices.includes(ri) && data.bicluster.colIndices.includes(ci);
                                            const dimmed = showBiclusterBlock && !inBlock;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].td, {
                                                layout: true,
                                                className: "border-2 border-black px-3 py-2 text-center text-base font-bold md:text-lg",
                                                style: {
                                                    backgroundColor: inBlock ? "#FFE600" : ratingColor(val, accent),
                                                    opacity: dimmed ? 0.2 : 1,
                                                    outline: inBlock ? "3px solid #0A0A0A" : undefined,
                                                    outlineOffset: -2
                                                },
                                                children: val
                                            }, ci, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                                lineNumber: 374,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, data.rows[ri], true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                    lineNumber: 326,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            mode === "bicluster" && stepIndex >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "space-y-3 border-2 border-black bg-[#FFE60018] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold",
                        children: [
                            "Why are other movies excluded?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "bicluster-exclusion",
                                children: "Tap for explanation"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 401,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "readable text-[15px]",
                        children: data.bicluster.whyExcluded
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold",
                        children: "What do you do after biclustering?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "readable text-[15px]",
                        children: data.bicluster.aftermath
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 396,
                columnNumber: 9
            }, this),
            mode !== "bicluster" && isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable text-[15px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "What changed?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 413,
                        columnNumber: 11
                    }, this),
                    " Only row/column order — every rating is the same number as before. The algorithm detected similarity, then",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                        termId: "reorder",
                        children: "reordered"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this),
                    " the display."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_s(AnimatedClusterDemo, "EdFW2ELO+1TYHLA6Q6y0qRKvYFo=");
_c = AnimatedClusterDemo;
var _c;
__turbopack_context__.k.register(_c, "AnimatedClusterDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepBrief.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepBrief",
    ()=>StepBrief
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function StepBrief({ children, accent = "#0A0A0A" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "readable rounded-none border-l-4 bg-white px-4 py-3 md:px-5 md:py-4",
        style: {
            borderColor: accent,
            backgroundColor: `${accent}0A`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepBrief.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = StepBrief;
var _c;
__turbopack_context__.k.register(_c, "StepBrief");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonWizard",
    ()=>LessonWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$RawDataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceMatrixView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepBrief.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function LessonWizard({ datasetId, onDatasetChange }) {
    _s();
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeachingDataset"])(datasetId);
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rowA, setRowA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.similarRowPair[0]);
    const [rowB, setRowB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.similarRowPair[1]);
    const [colA, setColA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.similarColPair[0]);
    const [colB, setColB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const step = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"][stepIndex];
    const accent = data.theme.accent;
    const handleDatasetChange = (id)=>{
        onDatasetChange(id);
        setStepIndex(0);
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeachingDataset"])(id);
        setRowA(d.similarRowPair[0]);
        setRowB(d.similarRowPair[1]);
        setColA(d.similarColPair[0]);
        setColB(2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-3 border-black bg-white",
        style: {
            boxShadow: `6px 6px 0 ${accent}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-3 border-b-3 border-black px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6",
                style: {
                    backgroundColor: data.theme.accentLight
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-[#5c5c5c]",
                                children: "Guided lesson"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-black md:text-2xl",
                                children: data.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEACHING_DATASETS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDatasetChange(d.id),
                                className: "border-2 border-black px-3 py-1.5 text-xs font-bold md:text-sm",
                                style: {
                                    backgroundColor: datasetId === d.id ? d.theme.accent : "#FFF",
                                    color: datasetId === d.id ? "#FFF" : "#0A0A0A"
                                },
                                children: d.title.split("×")[0].trim()
                            }, d.id, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 border-b-3 border-black px-4 py-3 md:flex-row md:items-center md:gap-3 md:px-6",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASE_COLORS"][step.phase] + "18"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-fit border-2 border-black px-2 py-0.5 text-xs font-bold text-white",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHASE_COLORS"][step.phase]
                        },
                        children: step.phase
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-black",
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#5c5c5c]",
                                children: step.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[360px] px-4 py-5 md:px-6 md:py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -8
                        },
                        transition: {
                            duration: 0.22
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepContent, {
                            stepId: step.id,
                            data: data,
                            accent: accent,
                            rowA: rowA,
                            rowB: rowB,
                            colA: colA,
                            colB: colB,
                            onRowA: setRowA,
                            onRowB: setRowB,
                            onColA: setColA,
                            onColB: setColB,
                            onJumpToStep: (id)=>{
                                const idx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"].findIndex((s)=>s.id === id);
                                if (idx >= 0) setStepIndex(idx);
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, `${datasetId}-${step.id}`, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-t border-black/10 px-4 py-2 text-center text-xs text-[#5c5c5c] md:px-6",
                children: [
                    "Tap any ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold underline decoration-dotted",
                        children: "dotted word"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    " for a definition and research snippet"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepNavigator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepNavigator"], {
                currentStep: stepIndex,
                onPrev: ()=>setStepIndex((s)=>Math.max(s - 1, 0)),
                onNext: ()=>setStepIndex((s)=>Math.min(s + 1, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LESSON_STEPS"].length - 1)),
                onJump: setStepIndex,
                accent: accent
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(LessonWizard, "/lVNAgClZV/JJ24e1w+ote4k1A8=");
_c = LessonWizard;
function StepContent({ stepId, data, accent, rowA, rowB, colA, colB, onRowA, onRowB, onColA, onColB, onJumpToStep }) {
    switch(stepId){
        case "intro":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "A ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "matrix",
                                children: "matrix"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            " has ",
                            data.rows.length,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row",
                                children: "rows"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            " (",
                            data.rowLabel,
                            ") and ",
                            data.cols.length,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "column",
                                children: "columns"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this),
                            " (",
                            data.colLabel,
                            "). Each cell is a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "rating",
                                children: "rating"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoBox, {
                                title: "Row clustering",
                                termId: "row-clustering",
                                body: data.rowClusterInsight,
                                color: accent
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoBox, {
                                title: "Column clustering",
                                termId: "column-clustering",
                                body: data.colClusterInsight,
                                color: "#0066FF"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this);
        case "raw-table":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: data.rows[0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            " gave ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: data.cols[0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 197,
                                columnNumber: 50
                            }, this),
                            " a rating of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: data.matrix[0][0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            ". Read each cell left-to-right per row."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$RawDataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawDataTable"], {
                            data: data,
                            accent: accent
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this);
        case "row-vectors":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row-clustering",
                                children: "Row clustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            " treats each row as a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "vector",
                                children: "vector"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            " — a list of numbers you can compare."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorDisplay"], {
                        data: data,
                        mode: "row",
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this);
        case "row-compare-similar":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "Compare two similar ",
                            data.rowLabel.toLowerCase(),
                            " using",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "euclidean-distance",
                                children: "Euclidean distance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            ". Tap the buttons below to try other pairs."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
                        data: data,
                        mode: "row",
                        indexA: rowA,
                        indexB: rowB,
                        accent: accent,
                        interactive: true,
                        onChangeA: onRowA,
                        onChangeB: onRowB
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this);
        case "row-compare-different":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#FF0040",
                        children: [
                            "Now ",
                            data.rows[data.differentRowPair[0]],
                            " vs ",
                            data.rows[data.differentRowPair[1]],
                            " — opposite patterns, so distance is much larger."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
                        data: data,
                        mode: "row",
                        indexA: data.differentRowPair[0],
                        indexB: data.differentRowPair[1],
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this);
        case "row-distance-matrix":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "The full ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "distance-matrix",
                                children: "distance matrix"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 259,
                                columnNumber: 22
                            }, this),
                            ". Tap any cell to jump to that pair's calculation."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceMatrixView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceMatrixView"], {
                        data: data,
                        mode: "row",
                        accent: accent,
                        highlightPair: [
                            rowA,
                            rowB
                        ],
                        onCellClick: (i, j)=>{
                            onRowA(i);
                            onRowB(j);
                            onJumpToStep("row-compare-similar");
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this);
        case "row-clusters":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "Small ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "euclidean-distance",
                                children: "distance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 280,
                                columnNumber: 19
                            }, this),
                            " → same",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "cluster",
                                children: "cluster"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            ". Here are the groups we found."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClusterReveal"], {
                        data: data,
                        mode: "row",
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this);
        case "row-reorder":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row-clustering",
                                children: "Row clustering result"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            ": press Play to watch similar rows slide together. Columns never move."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
                        data: data,
                        mode: "row",
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this);
        case "col-vectors":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            "Flip your thinking: each ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "column",
                                children: "column"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 302,
                                columnNumber: 38
                            }, this),
                            " is now a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "vector",
                                children: "vector"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            " (read top-to-bottom)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 301,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorDisplay"], {
                        data: data,
                        mode: "col",
                        accent: "#0066FF"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 300,
                columnNumber: 9
            }, this);
        case "col-compare":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            data.cols[data.similarColPair[0]],
                            " and ",
                            data.cols[data.similarColPair[1]],
                            " have nearly identical column patterns."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
                        data: data,
                        mode: "col",
                        indexA: colA,
                        indexB: data.similarColPair[1],
                        accent: "#0066FF",
                        interactive: true,
                        onChangeA: onColA,
                        onChangeB: onColB
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this);
        case "col-clusters":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "column-clustering",
                                children: "Column clusters"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            " group similar",
                            " ",
                            data.colLabel.toLowerCase(),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClusterReveal"], {
                        data: data,
                        mode: "col",
                        accent: "#0066FF"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this);
        case "col-reorder":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            "Press Play — columns ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "reorder",
                                children: "reorder"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 344,
                                columnNumber: 34
                            }, this),
                            ", rows stay fixed. Vertical color bands appear."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
                        data: data,
                        mode: "column",
                        accent: "#0066FF"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, this);
        case "bicluster-intro":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#FFE600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row-clustering",
                                children: "Row clustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this),
                            " finds all horror fans. But it mixes their horror ratings with action columns too.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "biclustering",
                                children: "Biclustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            " isolates one tight story: which users + which movies, together."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "readable px-1",
                        children: data.biclusterInsight
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, this);
        case "bicluster-reveal":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#FFE600",
                        children: "Use Play / Pause / Step to walk through: find users → find movies → isolate block → see why other columns are excluded → learn what to do next."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
                        data: data,
                        mode: "bicluster",
                        accent: "#FFE600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this);
        case "summary":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Row clustering",
                                termId: "row-clustering",
                                color: accent,
                                result: data.rowClusters.map((c)=>c.meaning).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Column clustering",
                                termId: "column-clustering",
                                color: "#0066FF",
                                result: data.colClusters.map((c)=>c.meaning).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Biclustering",
                                termId: "biclustering",
                                color: "#FFE600",
                                result: data.bicluster.meaning
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-3 border-black bg-black p-4 text-white md:p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-white/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "euclidean-distance",
                                        className: "text-white decoration-white/50",
                                        children: "Euclidean distance"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "— tap for the research paper"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 font-mono text-lg",
                                children: "d(x,y) = √(Σ(xᵢ − yᵢ)²)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c1 = StepContent;
function InfoBox({ title, termId, body, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-4",
        style: {
            boxShadow: `3px 3px 0 ${color}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold",
                style: {
                    color
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                    termId: termId,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable mt-2 text-[15px]",
                children: body
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
_c2 = InfoBox;
function SummaryCard({ title, termId, color, result }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-4",
        style: {
            boxShadow: `3px 3px 0 ${color}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                    termId: termId,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable mt-2 text-[14px] text-[#3d3d3d]",
                children: result
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_c3 = SummaryCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LessonWizard");
__turbopack_context__.k.register(_c1, "StepContent");
__turbopack_context__.k.register(_c2, "InfoBox");
__turbopack_context__.k.register(_c3, "SummaryCard");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$LessonWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function ClusteringDashboard() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("learn");
    const [datasetId, setDatasetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("movies");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("original");
    const [contrast, setContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.3);
    const [noise, setNoise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.03);
    const dataset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataset"])(datasetId);
    const teaching = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEACHING_DATASETS"].find((d)=>d.id === datasetId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FFFDF7] text-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-4xl px-4 py-6 md:max-w-5xl md:px-6 md:py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-6 border-b-4 border-black pb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-[#5c5c5c]",
                            children: "Visual Analytics · Exercise 5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-1 text-3xl font-bold tracking-tight md:text-4xl",
                            style: {
                                color: teaching.theme.accent
                            },
                            children: "Cluster Lab"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "readable mt-2 max-w-lg text-[15px]",
                            children: [
                                "Learn ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                    termId: "row-clustering",
                                    children: "row"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 19
                                }, this),
                                ",",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                    termId: "column-clustering",
                                    children: "column"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                ", and",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                    termId: "biclustering",
                                    children: "biclustering"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                " step by step."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex w-full",
                            children: [
                                "learn",
                                "explore"
                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTab(t),
                                    className: "flex-1 border-2 border-black py-3 text-sm font-bold md:flex-none md:px-6",
                                    style: {
                                        backgroundColor: tab === t ? teaching.theme.accent : "#FFF",
                                        color: tab === t ? "#FFF" : "#0A0A0A",
                                        marginRight: t === "learn" ? -2 : 0,
                                        zIndex: tab === t ? 2 : 1
                                    },
                                    children: t === "learn" ? "Learn" : "Explore"
                                }, t, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: tab === "learn" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$LessonWizard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LessonWizard"], {
                            datasetId: datasetId,
                            onDatasetChange: setDatasetId
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this)
                    }, "learn", false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "readable text-[15px]",
                                children: [
                                    "Full ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "heatmap",
                                        children: "heatmap"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 96,
                                        columnNumber: 22
                                    }, this),
                                    " — use after completing the lesson."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATASETS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDatasetId(d.id),
                                        className: "border-2 border-black px-3 py-2 text-sm font-bold",
                                        style: {
                                            backgroundColor: datasetId === d.id ? d.theme.accent : "#FFF",
                                            color: datasetId === d.id ? "#FFF" : "#0A0A0A"
                                        },
                                        children: d.title
                                    }, d.id, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExplorePanel, {
                                dataset: dataset,
                                mode: mode,
                                onMode: setMode,
                                contrast: contrast,
                                onContrast: setContrast,
                                noise: noise,
                                onNoise: setNoise,
                                cells: cells,
                                miniViews: miniViews
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "explore", true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ClusteringDashboard, "KasO/trPa6mmNyxDXBKwsnz0fOU=");
_c = ClusteringDashboard;
function ExplorePanel({ dataset, mode, onMode, contrast, onContrast, noise, onNoise, cells, miniViews }) {
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][mode];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-[200px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-black bg-white p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-xs font-semibold text-[#5c5c5c]",
                                        children: "Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEW_MODES"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onMode(m),
                                            className: "mb-1 block w-full px-2 py-2 text-left text-sm font-bold",
                                            style: {
                                                backgroundColor: mode === m ? dataset.theme.accent : "transparent",
                                                color: mode === m ? "#FFF" : "#0A0A0A"
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][m].title
                                        }, m, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-black bg-white p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                        label: "Contrast",
                                        value: contrast,
                                        min: 0.7,
                                        max: 2.5,
                                        step: 0.1,
                                        accent: dataset.theme.accent,
                                        onChange: onContrast,
                                        format: (v)=>`${v.toFixed(1)}×`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                            label: "Noise",
                                            value: noise,
                                            min: 0,
                                            max: 0.18,
                                            step: 0.01,
                                            accent: dataset.theme.secondary,
                                            onChange: onNoise,
                                            format: (v)=>`${(v * 100).toFixed(0)}%`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-black bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-2 border-black px-4 py-3",
                                style: {
                                    backgroundColor: dataset.theme.accentLight
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold",
                                        children: dataset.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#5c5c5c]",
                                        children: info.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center overflow-x-auto p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                    dataset: dataset,
                                    cells: cells,
                                    mode: mode,
                                    contrast: contrast,
                                    highlightBlock: dataset.biclusterBlock
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-2 md:grid-cols-4",
                children: miniViews.map(({ mode: m, cells: c, info: i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onMode(m),
                        className: "border-2 border-black bg-white p-2 text-left",
                        style: {
                            outline: mode === m ? `2px solid ${dataset.theme.accent}` : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-[#5c5c5c]",
                                children: i.tag
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                    dataset: dataset,
                                    cells: c,
                                    mode: m,
                                    contrast: contrast,
                                    cellSize: 12,
                                    showLabels: false,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = ExplorePanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClusteringDashboard");
__turbopack_context__.k.register(_c1, "ExplorePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Notes_Visual%20Analytics_Exercise%205_src_009cdtp._.js.map