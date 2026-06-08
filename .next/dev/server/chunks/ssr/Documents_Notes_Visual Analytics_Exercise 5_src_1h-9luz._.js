module.exports = [
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/datasets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
            meaning: "U1 & U2 form a user group specifically for Horror1 & Horror2. Action movies are irrelevant to this bicluster."
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
        biclusterInsight: "Biclustering finds a submatrix — a user group AND a movie group together. It ignores everything outside that block."
    },
    {
        id: "articles",
        title: "Articles × Keywords",
        rowLabel: "Articles",
        colLabel: "Keywords",
        rowUnit: "article",
        colUnit: "keyword",
        valueLabel: "term frequency (5 = often, 1 = never)",
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
        rows: [
            "Art1",
            "Art2",
            "Art3",
            "Art4"
        ],
        cols: [
            "goal",
            "score",
            "vote",
            "senate"
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
                meaning: "Art1 & Art2 are sports articles"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "Art3 & Art4 are politics articles"
            }
        ],
        colClusters: [
            {
                name: "Cluster A",
                indices: [
                    0,
                    1
                ],
                meaning: "goal & score appear together (sports)"
            },
            {
                name: "Cluster B",
                indices: [
                    2,
                    3
                ],
                meaning: "vote & senate appear together (politics)"
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
            label: "Sports topic bicluster",
            meaning: "Art1 & Art2 share the sports keyword group (goal, score). Politics keywords don't belong to this bicluster."
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
        rowClusterInsight: "Which ARTICLES use similar vocabulary?",
        colClusterInsight: "Which KEYWORDS appear in similar articles?",
        biclusterInsight: "A hidden sub-topic: specific articles linked to a specific keyword subset."
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
            meaning: "Bot accounts acc3 & acc4 all hammer the same suspicious IPs. Normal home/office logins are outside this block."
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
        biclusterInsight: "A coordinated attack group: specific accounts targeting specific IPs simultaneously."
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
        subtitle: "Three concepts, one dashboard"
    }
];
const PHASE_COLORS = {
    setup: "#888888",
    row: "#FF2D6B",
    column: "#0066FF",
    bicluster: "#FFE600",
    done: "#00E5A0"
};
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heatmap",
    ()=>Heatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block",
        children: [
            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    marginLeft: labelW + 8,
                    marginBottom: 6
                },
                children: colLabels.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            width: labelW,
                            gap
                        },
                        children: rowLabels.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            width: gridW,
                            height: gridH
                        },
                        children: [
                            showHighlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["valueToColor"])(cell.value, contrast, theme.heatLow, theme.heatMid, theme.heatHigh)
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
            showLabels && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex justify-between font-mono text-[9px] font-bold uppercase tracking-widest text-black/40",
                style: {
                    width: labelW + 8 + gridW
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "→ ",
                            dataset.rowLabel
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Slider({ label, value, min, max, step, accent, onChange, format }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "font-mono text-[10px] font-bold uppercase tracking-widest text-black/60",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TermButton",
    ()=>TermButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/glossary.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function TermButton({ termId, children, className = "" }) {
    const { openTerm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTerm"])();
    const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$glossary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTerm"])(termId);
    if (!term) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: children ?? termId
    }, void 0, false, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx",
        lineNumber: 16,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawDataTable",
    ()=>RawDataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block w-full max-w-full overflow-x-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[260px] border-collapse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border-2 border-black bg-black px-3 py-2.5 text-left text-xs font-bold text-white",
                                    children: data.rowLabel
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                colOrder.map((ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rowOrder.map((ri, displayRow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].td, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorDisplay",
    ()=>VectorDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
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
    const dimLabel = mode === "row" ? data.colLabel : data.rowLabel;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            items.map(({ label, vector, index }, i)=>{
                const highlighted = highlightIndices.includes(index);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: i * 0.1
                    },
                    className: "border-3 border-black p-3",
                    style: {
                        backgroundColor: highlighted ? `${accent}15` : "#FFF",
                        boxShadow: highlighted ? `4px 4px 0 ${accent}` : "3px 3px 0 #0A0A0A"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "border-2 border-black px-2 py-0.5 font-mono text-xs font-bold",
                                    style: {
                                        backgroundColor: highlighted ? accent : "#F0F0F0",
                                        color: highlighted ? "#FFF" : "#0A0A0A"
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs text-black/50",
                                    children: "="
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm font-bold",
                                    children: "["
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                vector.map((v, vi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            delay: i * 0.1 + vi * 0.06
                                        },
                                        className: "border-2 border-black px-2 py-0.5 font-mono text-sm font-bold",
                                        style: {
                                            backgroundColor: v >= 4 ? accent : v <= 2 ? "#E8E8E8" : "#FFD23F",
                                            color: v >= 4 ? "#FFF" : "#0A0A0A"
                                        },
                                        children: v
                                    }, vi, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-sm font-bold",
                                    children: "]"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 font-mono text-[9px] uppercase tracking-widest text-black/40",
                            children: mode === "row" ? `One ${data.rowUnit} · ${vector.length} ${data.colUnit} ratings` : `One ${data.colUnit} · ratings from ${vector.length} ${data.rowUnit}s`
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    ]
                }, label, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-black/60",
                children: [
                    "Each number is a rating along a ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: dimLabel
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                        lineNumber: 80,
                        columnNumber: 41
                    }, this),
                    " dimension."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistanceCalculator",
    ()=>DistanceCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function DistanceCalculator({ data, mode, indexA, indexB, accent, interactive = false, onChangeA, onChangeB }) {
    const labels = mode === "row" ? data.rows : data.cols;
    const dimLabels = mode === "row" ? data.cols : data.rows;
    const vecA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>mode === "row" ? data.matrix[indexA] : data.matrix.map((row)=>row[indexA]), [
        data,
        mode,
        indexA
    ]);
    const vecB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>mode === "row" ? data.matrix[indexB] : data.matrix.map((row)=>row[indexB]), [
        data,
        mode,
        indexB
    ]);
    const { distance, terms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["euclideanBreakdown"])(vecA, vecB, dimLabels);
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distanceLabel"])(distance);
    const isClose = distance < 3;
    const picker = (value, onChange)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: labels.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            interactive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorChip, {
                        label: labels[indexA],
                        vector: vecA,
                        accent: accent
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VectorChip, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-semibold text-[#5c5c5c]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 font-mono text-sm leading-relaxed text-black md:text-base",
                        children: [
                            "d(",
                            labels[indexA],
                            ", ",
                            labels[indexB],
                            ") = √(",
                            terms.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        i > 0 && " + ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-1",
                        children: terms.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center gap-3 border-t-2 border-black/10 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function VectorChip({ label, vector, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-3",
        style: {
            backgroundColor: `${accent}12`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-[#5c5c5c]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistanceMatrixView",
    ()=>DistanceMatrixView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/math.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function DistanceMatrixView({ data, mode, accent, onCellClick, highlightPair }) {
    const labels = mode === "row" ? data.rows : data.cols;
    const vectors = mode === "row" ? data.matrix : data.cols.map((_, j)=>data.matrix.map((row)=>row[j]));
    const dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$math$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildDistanceMatrix"])(vectors);
    const maxD = Math.max(...dist.flat());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 text-xs text-black/60",
                children: "Darker = closer (more similar). Click any cell to inspect that pair."
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "border-collapse font-mono text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-2 border-black bg-black p-2 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    labels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border-2 border-black bg-black p-2 text-[9px] font-bold text-white",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: dist.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border-2 border-black bg-black p-2 text-[9px] font-bold text-white",
                                            children: labels[i]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        row.map((d, j)=>{
                                            const isHighlight = highlightPair && (highlightPair[0] === i && highlightPair[1] === j || highlightPair[0] === j && highlightPair[1] === i);
                                            const t = i === j ? 0 : 1 - d / maxD;
                                            const bg = i === j ? "#E8E8E8" : `rgba(${parseInt(accent.slice(1, 3), 16)}, ${parseInt(accent.slice(3, 5), 16)}, ${parseInt(accent.slice(5, 7), 16)}, ${0.15 + t * 0.85})`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].td, {
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                onClick: ()=>i !== j && onCellClick?.(i, j),
                                                className: "cursor-pointer border-2 border-black p-2 text-center font-bold",
                                                style: {
                                                    backgroundColor: bg,
                                                    color: t > 0.6 ? "#FFF" : "#0A0A0A",
                                                    outline: isHighlight ? `3px solid ${accent}` : undefined,
                                                    outlineOffset: -3
                                                },
                                                children: i === j ? "—" : d.toFixed(1)
                                            }, j, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    ]
                                }, labels[i], true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusterReveal",
    ()=>ClusterReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-ssr] (ecmascript)");
"use client";
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: clusters.map((cluster, ci)=>{
                const color = CLUSTER_COLORS[ci % CLUSTER_COLORS.length];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block border-2 border-black px-2 py-0.5 text-xs font-bold text-white",
                            style: {
                                backgroundColor: color
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "cluster",
                                className: "text-white decoration-white/60",
                                children: cluster.name
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-2",
                            children: cluster.indices.map((idx, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "readable mt-3 text-[15px] font-medium",
                            children: cluster.meaning
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx",
                            lineNumber: 55,
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepNavigator",
    ()=>StepNavigator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function StepNavigator({ currentStep, onPrev, onNext, onJump, accent }) {
    const step = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"][currentStep];
    const isFirst = currentStep === 0;
    const isLast = currentStep === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"].length - 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-t-3 border-black bg-[#FAFAFA]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 overflow-x-auto px-3 py-3 md:px-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onJump(i),
                        title: s.title,
                        className: "shrink-0 p-1",
                        "aria-label": s.title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-t-2 border-black/10 px-4 py-3 md:px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onPrev,
                        disabled: isFirst,
                        className: "border-2 border-black px-4 py-2.5 text-sm font-bold disabled:opacity-30",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hidden text-center text-sm font-semibold text-black sm:block",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedClusterDemo",
    ()=>AnimatedClusterDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-ssr] (ecmascript)");
"use client";
;
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
function ratingColor(v, accent) {
    if (v >= 4) return accent;
    if (v >= 3) return "#FFD23F";
    return "#E8E8E8";
}
function AnimatedClusterDemo({ data, mode, accent }) {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const clusteredRowOrder = data.rowClusters.flatMap((c)=>c.indices);
    const clusteredColOrder = data.colClusters.flatMap((c)=>c.indices);
    const biclusterRowOrder = [
        ...data.bicluster.rowIndices,
        ...data.rows.map((_, i)=>i).filter((i)=>!data.bicluster.rowIndices.includes(i))
    ];
    const biclusterColOrder = [
        ...data.bicluster.colIndices,
        ...data.cols.map((_, i)=>i).filter((i)=>!data.bicluster.colIndices.includes(i))
    ];
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (mode === "row") {
            return [
                {
                    label: "Start",
                    narration: "Rows are in random order. The data looks messy."
                },
                ...data.rowClusters.map((c, i)=>({
                        label: `Group ${i + 1}`,
                        narration: `Moving ${c.indices.map((idx)=>data.rows[idx]).join(" & ")} together — ${c.meaning}`
                    })),
                {
                    label: "Done",
                    narration: `Columns did NOT move. Only rows were reordered. You now see horizontal bands.`
                }
            ];
        }
        if (mode === "column") {
            return [
                {
                    label: "Start",
                    narration: "Columns are shuffled. Hard to spot similar movies/keywords."
                },
                ...data.colClusters.map((c, i)=>({
                        label: `Group ${i + 1}`,
                        narration: `Grouping ${c.indices.map((idx)=>data.cols[idx]).join(" & ")} — ${c.meaning}`
                    })),
                {
                    label: "Done",
                    narration: `Rows did NOT move. Only columns were reordered. Vertical bands appear.`
                }
            ];
        }
        return [
            {
                label: "Start",
                narration: "Both axes scrambled. The hidden pattern is invisible."
            },
            {
                label: "Rows",
                narration: `Pulling ${data.bicluster.rowIndices.map((i)=>data.rows[i]).join(", ")} together.`
            },
            {
                label: "Cols",
                narration: `Pulling ${data.bicluster.colIndices.map((i)=>data.cols[i]).join(", ")} together.`
            },
            {
                label: "Block",
                narration: data.bicluster.meaning
            }
        ];
    }, [
        data,
        mode
    ]);
    const rowOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (phase === "idle") {
            return mode === "column" ? data.rows.map((_, i)=>i) : SCRAMBLED_ROWS;
        }
        if (mode === "row") {
            if (step === 0) return SCRAMBLED_ROWS;
            const groups = data.rowClusters.slice(0, step);
            const placed = new Set(groups.flatMap((g)=>g.indices));
            const rest = SCRAMBLED_ROWS.filter((r)=>!placed.has(r));
            return [
                ...groups.flatMap((g)=>g.indices),
                ...rest
            ];
        }
        if (mode === "bicluster") {
            if (step < 2) return SCRAMBLED_ROWS;
            return biclusterRowOrder;
        }
        return data.rows.map((_, i)=>i);
    }, [
        phase,
        step,
        mode,
        data,
        biclusterRowOrder
    ]);
    const colOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (phase === "idle") {
            return mode === "row" ? data.cols.map((_, i)=>i) : SCRAMBLED_COLS;
        }
        if (mode === "column") {
            if (step === 0) return SCRAMBLED_COLS;
            const groups = data.colClusters.slice(0, step);
            const placed = new Set(groups.flatMap((g)=>g.indices));
            const rest = SCRAMBLED_COLS.filter((c)=>!placed.has(c));
            return [
                ...groups.flatMap((g)=>g.indices),
                ...rest
            ];
        }
        if (mode === "bicluster") {
            if (step < 3) return step >= 2 ? biclusterColOrder : SCRAMBLED_COLS;
            return biclusterColOrder;
        }
        return data.cols.map((_, i)=>i);
    }, [
        phase,
        step,
        mode,
        data,
        biclusterColOrder
    ]);
    const finalRow = mode === "bicluster" ? biclusterRowOrder : clusteredRowOrder;
    const finalCol = mode === "bicluster" ? biclusterColOrder : clusteredColOrder;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "playing") return;
        if (step >= steps.length - 1) {
            setPhase("done");
            return;
        }
        const t = setTimeout(()=>setStep((s)=>s + 1), 1400);
        return ()=>clearTimeout(t);
    }, [
        phase,
        step,
        steps.length
    ]);
    const play = ()=>{
        setPhase("playing");
        setStep(0);
    };
    const reset = ()=>{
        setPhase("idle");
        setStep(0);
    };
    const showBiclusterHighlight = mode === "bicluster" && (phase === "done" || step >= 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: play,
                        disabled: phase === "playing",
                        className: "border-3 border-black px-5 py-2.5 text-sm font-bold text-white disabled:opacity-40",
                        style: {
                            backgroundColor: accent,
                            boxShadow: "3px 3px 0 #0A0A0A"
                        },
                        children: phase === "idle" ? "▶ Play animation" : phase === "playing" ? "Playing…" : "▶ Replay"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    phase !== "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        className: "border-2 border-black px-4 py-2 text-sm font-bold",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-black/55",
                        children: [
                            mode === "row" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Watch rows ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "reorder",
                                        children: "reorder"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                        lineNumber: 168,
                                        columnNumber: 26
                                    }, this),
                                    " — columns stay fixed"
                                ]
                            }, void 0, true),
                            mode === "column" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Watch columns ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "reorder",
                                        children: "reorder"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, this),
                                    " — rows stay fixed"
                                ]
                            }, void 0, true),
                            mode === "bicluster" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Watch both axes move to reveal the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "submatrix",
                                        children: "submatrix"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                        lineNumber: 178,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mr-2 font-mono text-xs font-bold text-white/50",
                            children: steps[Math.min(step, steps.length - 1)]?.label
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        steps[Math.min(step, steps.length - 1)]?.narration
                    ]
                }, `${phase}-${step}`, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1.5 flex-1 border border-black/20",
                        style: {
                            backgroundColor: i <= step && phase !== "idle" ? accent : "#E8E8E8"
                        }
                    }, s.label, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto rounded-none border-3 border-black bg-white p-2 md:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full min-w-[280px] border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-2 border-black bg-black px-2 py-2 text-left text-xs font-bold text-white md:px-3",
                                        children: data.rowLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    colOrder.map((ci)=>{
                                        const moving = mode !== "row" && phase !== "idle";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].th, {
                                            layout: true,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 28
                                            },
                                            className: "border-2 border-black px-2 py-2 text-center text-xs font-bold md:px-3",
                                            style: {
                                                backgroundColor: moving ? `${accent}33` : "#F5F5F5",
                                                color: "#0A0A0A"
                                            },
                                            children: data.cols[ci]
                                        }, data.cols[ci], false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rowOrder.map((ri)=>{
                                const moving = mode !== "column" && phase !== "idle";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].tr, {
                                    layout: true,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border-2 border-black px-2 py-2 text-sm font-bold md:px-3",
                                            style: {
                                                backgroundColor: moving ? `${accent}22` : "#F5F5F5"
                                            },
                                            children: data.rows[ri]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        colOrder.map((ci)=>{
                                            const val = data.matrix[ri][ci];
                                            const inBicluster = showBiclusterHighlight && data.bicluster.rowIndices.includes(ri) && data.bicluster.colIndices.includes(ci);
                                            const dimBicluster = showBiclusterHighlight && mode === "bicluster" && !inBicluster;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].td, {
                                                layout: true,
                                                className: "border-2 border-black px-3 py-2 text-center text-base font-bold md:px-4 md:text-lg",
                                                style: {
                                                    backgroundColor: inBicluster ? "#FFE600" : ratingColor(val, accent),
                                                    opacity: dimBicluster ? 0.25 : 1,
                                                    outline: inBicluster ? "3px solid #0A0A0A" : undefined,
                                                    outlineOffset: -2
                                                },
                                                children: val
                                            }, ci, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                                lineNumber: 268,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    ]
                                }, data.rows[ri], true, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            phase === "done" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "readable text-[15px] leading-relaxed text-black/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "What changed?"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    " Only the order of",
                    " ",
                    mode === "column" ? "columns" : mode === "row" ? "rows" : "rows and columns",
                    ". Every number is identical — we just moved them so similar items sit side by side."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepBrief.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepBrief",
    ()=>StepBrief
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function StepBrief({ children, accent = "#0A0A0A" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LessonWizard",
    ()=>LessonWizard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/glossary/TermButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$RawDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/RawDataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/VectorDisplay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceCalculator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceMatrixView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/DistanceMatrixView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/ClusterReveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepNavigator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepNavigator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/AnimatedClusterDemo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/StepBrief.tsx [app-ssr] (ecmascript)");
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
;
function LessonWizard({ datasetId, onDatasetChange }) {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeachingDataset"])(datasetId);
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rowA, setRowA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.similarRowPair[0]);
    const [rowB, setRowB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.similarRowPair[1]);
    const [colA, setColA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.similarColPair[0]);
    const [colB, setColB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const step = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"][stepIndex];
    const accent = data.theme.accent;
    const handleDatasetChange = (id)=>{
        onDatasetChange(id);
        setStepIndex(0);
        const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeachingDataset"])(id);
        setRowA(d.similarRowPair[0]);
        setRowB(d.similarRowPair[1]);
        setColA(d.similarColPair[0]);
        setColB(2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-3 border-black bg-white",
        style: {
            boxShadow: `6px 6px 0 ${accent}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-3 border-b-3 border-black px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6",
                style: {
                    backgroundColor: data.theme.accentLight
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-[#5c5c5c]",
                                children: "Guided lesson"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEACHING_DATASETS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 border-b-3 border-black px-4 py-3 md:flex-row md:items-center md:gap-3 md:px-6",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHASE_COLORS"][step.phase] + "18"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-fit border-2 border-black px-2 py-0.5 text-xs font-bold text-white",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PHASE_COLORS"][step.phase]
                        },
                        children: step.phase
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-bold text-black",
                                children: step.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[360px] px-4 py-5 md:px-6 md:py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StepContent, {
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
                                const idx = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"].findIndex((s)=>s.id === id);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-t border-black/10 px-4 py-2 text-center text-xs text-[#5c5c5c] md:px-6",
                children: [
                    "Tap any ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepNavigator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepNavigator"], {
                currentStep: stepIndex,
                onPrev: ()=>setStepIndex((s)=>Math.max(s - 1, 0)),
                onNext: ()=>setStepIndex((s)=>Math.min(s + 1, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LESSON_STEPS"].length - 1)),
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
function StepContent({ stepId, data, accent, rowA, rowB, colA, colB, onRowA, onRowB, onColA, onColB, onJumpToStep }) {
    switch(stepId){
        case "intro":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "A ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoBox, {
                                title: "Row clustering",
                                termId: "row-clustering",
                                body: data.rowClusterInsight,
                                color: accent
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoBox, {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: data.rows[0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this),
                            " gave ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: data.cols[0]
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 197,
                                columnNumber: 50
                            }, this),
                            " a rating of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$RawDataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawDataTable"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row-clustering",
                                children: "Row clustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            " treats each row as a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VectorDisplay"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "Compare two similar ",
                            data.rowLabel.toLowerCase(),
                            " using",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "The full ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceMatrixView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceMatrixView"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            "Small ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "euclidean-distance",
                                children: "distance"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 280,
                                columnNumber: 19
                            }, this),
                            " → same",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusterReveal"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: accent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            "Flip your thinking: each ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "column",
                                children: "column"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 302,
                                columnNumber: 38
                            }, this),
                            " is now a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$VectorDisplay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VectorDisplay"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$DistanceCalculator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistanceCalculator"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$ClusterReveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusterReveal"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#0066FF",
                        children: [
                            "Press Play — columns ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#FFE600",
                        children: [
                            "Regular clustering: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "row-clustering",
                                children: "rows only"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 355,
                                columnNumber: 33
                            }, this),
                            " OR",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "column-clustering",
                                children: "columns only"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this),
                            ".",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "biclustering",
                                children: "Biclustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            " does both at once."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "readable px-1",
                        children: data.biclusterInsight
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, this);
        case "bicluster-reveal":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$StepBrief$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StepBrief"], {
                        accent: "#FFE600",
                        children: [
                            "Press Play to find the hidden ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                termId: "submatrix",
                                children: "submatrix"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 367,
                                columnNumber: 43
                            }, this),
                            ". Only that block matters — the rest fades out."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$AnimatedClusterDemo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedClusterDemo"], {
                        data: data,
                        mode: "bicluster",
                        accent: "#FFE600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this);
        case "summary":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Row clustering",
                                termId: "row-clustering",
                                color: accent,
                                result: data.rowClusters.map((c)=>c.meaning).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Column clustering",
                                termId: "column-clustering",
                                color: "#0066FF",
                                result: data.colClusters.map((c)=>c.meaning).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryCard, {
                                title: "Biclustering",
                                termId: "biclustering",
                                color: "#FFE600",
                                result: data.bicluster.meaning
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-3 border-black bg-black p-4 text-white md:p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-white/60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                                        termId: "euclidean-distance",
                                        className: "text-white decoration-white/50",
                                        children: "Euclidean distance"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "— tap for the research paper"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 font-mono text-lg",
                                children: "d(x,y) = √(Σ(xᵢ − yᵢ)²)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
function InfoBox({ title, termId, body, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-4",
        style: {
            boxShadow: `3px 3px 0 ${color}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold",
                style: {
                    color
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                    termId: termId,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable mt-2 text-[15px]",
                children: body
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
function SummaryCard({ title, termId, color, result }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 border-black p-4",
        style: {
            boxShadow: `3px 3px 0 ${color}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$glossary$2f$TermButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TermButton"], {
                    termId: termId,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "readable mt-2 text-[14px] text-[#3d3d3d]",
                children: result
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteringDashboard",
    ()=>ClusteringDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/datasets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/lesson-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/heatmap-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$LessonWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/lesson/LessonWizard.tsx [app-ssr] (ecmascript)");
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
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("learn");
    const [datasetId, setDatasetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("movies");
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("original");
    const [contrast, setContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.3);
    const [noise, setNoise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.03);
    const dataset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataset"])(datasetId);
    const teaching = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEACHING_DATASETS"].find((d)=>d.id === datasetId);
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(dataset, mode, noise), [
        dataset,
        mode,
        noise
    ]);
    const miniViews = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEW_MODES"].map((m)=>({
            mode: m,
            cells: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(dataset, m, noise),
            info: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODE_INFO"][m]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FFFDF7] text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed right-0 top-0 h-full w-3",
                style: {
                    background: `repeating-linear-gradient(-45deg, ${teaching.theme.accent}, ${teaching.theme.accent} 6px, transparent 6px, transparent 12px)`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl px-5 py-8 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-6 border-b-4 border-black pb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-black/50",
                                children: "Visual Analytics · Exercise 5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-1 text-4xl font-black uppercase tracking-tight md:text-5xl",
                                style: {
                                    color: teaching.theme.accent
                                },
                                children: "Cluster Lab"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-xl text-sm font-medium text-black/60",
                                children: "Learn clustering step by step with real numbers, then explore full heatmaps."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex gap-0",
                                children: [
                                    "learn",
                                    "explore"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTab(t),
                                        className: "relative border-3 border-black px-6 py-2.5 font-mono text-xs font-bold uppercase",
                                        style: {
                                            backgroundColor: tab === t ? teaching.theme.accent : "#FFF",
                                            color: tab === t ? "#FFF" : "#0A0A0A",
                                            marginRight: -3,
                                            boxShadow: tab === t ? `4px 4px 0 #0A0A0A` : "none",
                                            zIndex: tab === t ? 2 : 1
                                        },
                                        children: t === "learn" ? "① Learn step-by-step" : "② Explore heatmaps"
                                    }, t, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: tab === "learn" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$lesson$2f$LessonWizard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LessonWizard"], {
                                    datasetId: datasetId,
                                    onDatasetChange: setDatasetId
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-3 sm:grid-cols-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$lesson$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEACHING_DATASETS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDatasetId(d.id),
                                            className: "border-3 border-black p-3 text-left",
                                            style: {
                                                backgroundColor: datasetId === d.id ? d.theme.accentLight : "#FFF",
                                                boxShadow: datasetId === d.id ? `4px 4px 0 ${d.theme.accent}` : "2px 2px 0 #0A0A0A"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black uppercase",
                                                    children: d.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 font-mono text-[9px] text-black/50",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["starsLabel"])(d.stars)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[10px] text-black/60",
                                                    children: [
                                                        d.rowClusters[0].meaning.split("&")[0].trim(),
                                                        "…"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, d.id, true, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "learn", true, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            className: "space-y-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExplorePanel, {
                                datasetId: datasetId,
                                onDatasetId: setDatasetId,
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
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, "explore", false, {
                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function ExplorePanel({ datasetId, onDatasetId, dataset, mode, onMode, contrast, onContrast, noise, onNoise, cells, miniViews }) {
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODE_INFO"][mode];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$datasets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATASETS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onDatasetId(d.id),
                        className: "border-2 border-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase",
                        style: {
                            backgroundColor: datasetId === d.id ? d.theme.accent : "#FFF",
                            color: datasetId === d.id ? "#FFF" : "#0A0A0A"
                        },
                        children: d.title
                    }, d.id, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-[220px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-3 border-black bg-white p-3",
                                style: {
                                    boxShadow: `4px 4px 0 ${dataset.theme.accent}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 font-mono text-[9px] font-bold uppercase text-black/40",
                                        children: "Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEW_MODES"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onMode(m),
                                            className: "mb-1 w-full px-2 py-2 text-left font-mono text-[10px] font-bold uppercase",
                                            style: {
                                                backgroundColor: mode === m ? dataset.theme.accent : "transparent",
                                                color: mode === m ? "#FFF" : "#0A0A0A"
                                            },
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$heatmap$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODE_INFO"][m].title
                                        }, m, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-3 border-black bg-white p-3",
                                style: {
                                    boxShadow: "3px 3px 0 #0A0A0A"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
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
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
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
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-3 border-black bg-white",
                        style: {
                            boxShadow: `6px 6px 0 ${dataset.theme.accent}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b-3 border-black px-5 py-3",
                                style: {
                                    backgroundColor: dataset.theme.accentLight
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black uppercase",
                                        children: dataset.title
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-black/60",
                                        children: info.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center overflow-x-auto p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heatmap"], {
                                    dataset: dataset,
                                    cells: cells,
                                    mode: mode,
                                    contrast: contrast,
                                    highlightBlock: dataset.biclusterBlock
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
                children: miniViews.map(({ mode: m, cells: c, info: i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onMode(m),
                        className: "border-3 border-black bg-white p-3 text-left",
                        style: {
                            outline: mode === m ? `3px solid ${dataset.theme.accent}` : undefined,
                            boxShadow: mode === m ? `4px 4px 0 ${dataset.theme.accent}` : "2px 2px 0 #0A0A0A"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[9px] font-bold uppercase text-black/40",
                                children: i.tag
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heatmap"], {
                                    dataset: dataset,
                                    cells: c,
                                    mode: m,
                                    contrast: contrast,
                                    cellSize: 14,
                                    showLabels: false,
                                    compact: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, m, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-black/40",
                children: [
                    "Full-size dataset — switch to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Learn"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 249,
                        columnNumber: 39
                    }, this),
                    " tab for the step-by-step 4×4 walkthrough."
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Documents_Notes_Visual%20Analytics_Exercise%205_src_1h-9luz._.js.map