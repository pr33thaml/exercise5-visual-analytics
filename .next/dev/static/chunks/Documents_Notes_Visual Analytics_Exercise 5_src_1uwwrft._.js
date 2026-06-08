(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/cluster-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GENES",
    ()=>GENES,
    "MODE_INFO",
    ()=>MODE_INFO,
    "PATIENTS",
    ()=>PATIENTS,
    "buildHeatmapCells",
    ()=>buildHeatmapCells,
    "getCellValue",
    ()=>getCellValue,
    "getOrders",
    ()=>getOrders,
    "valueToColor",
    ()=>valueToColor
]);
const GENES = [
    "G1",
    "G2",
    "G3",
    "G4",
    "G5",
    "G6",
    "G7",
    "G8"
];
const PATIENTS = [
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6",
    "P7",
    "P8",
    "P9",
    "P10",
    "P11",
    "P12"
];
const ROW_CLUSTERED = [
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
const COL_CLUSTERED = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
];
const ROW_SCRAMBLED = [
    7,
    2,
    9,
    0,
    5,
    11,
    3,
    8,
    1,
    6,
    10,
    4
];
const COL_SCRAMBLED = [
    4,
    7,
    1,
    5,
    0,
    3,
    6,
    2
];
const BASE_MATRIX = [
    [
        0.92,
        0.88,
        0.85,
        0.12,
        0.08,
        0.14,
        0.10,
        0.11
    ],
    [
        0.90,
        0.86,
        0.83,
        0.10,
        0.11,
        0.12,
        0.09,
        0.10
    ],
    [
        0.88,
        0.84,
        0.87,
        0.14,
        0.09,
        0.11,
        0.12,
        0.08
    ],
    [
        0.91,
        0.89,
        0.82,
        0.11,
        0.10,
        0.13,
        0.11,
        0.09
    ],
    [
        0.13,
        0.10,
        0.12,
        0.91,
        0.87,
        0.84,
        0.11,
        0.10
    ],
    [
        0.11,
        0.14,
        0.09,
        0.89,
        0.85,
        0.88,
        0.10,
        0.12
    ],
    [
        0.12,
        0.11,
        0.10,
        0.87,
        0.90,
        0.86,
        0.09,
        0.11
    ],
    [
        0.10,
        0.12,
        0.11,
        0.88,
        0.84,
        0.89,
        0.12,
        0.10
    ],
    [
        0.09,
        0.11,
        0.10,
        0.12,
        0.10,
        0.11,
        0.92,
        0.88
    ],
    [
        0.11,
        0.09,
        0.12,
        0.10,
        0.11,
        0.09,
        0.90,
        0.86
    ],
    [
        0.10,
        0.12,
        0.09,
        0.11,
        0.09,
        0.10,
        0.88,
        0.91
    ],
    [
        0.12,
        0.10,
        0.11,
        0.09,
        0.12,
        0.10,
        0.87,
        0.89
    ]
];
function getOrders(mode) {
    if (mode === "row") return {
        rows: ROW_CLUSTERED,
        cols: COL_SCRAMBLED
    };
    if (mode === "column") return {
        rows: ROW_SCRAMBLED,
        cols: COL_CLUSTERED
    };
    return {
        rows: ROW_SCRAMBLED,
        cols: COL_SCRAMBLED
    };
}
function getCellValue(patientIdx, geneIdx, noise) {
    const base = BASE_MATRIX[patientIdx][geneIdx];
    const jitter = (Math.sin(patientIdx * 7 + geneIdx * 13) * 0.5 + 0.5) * noise;
    return Math.min(1, Math.max(0, base + jitter - noise / 2));
}
function buildHeatmapCells(mode, noise) {
    const { rows, cols } = getOrders(mode);
    const cells = [];
    rows.forEach((patientIdx, row)=>{
        cols.forEach((geneIdx, col)=>{
            cells.push({
                id: `${PATIENTS[patientIdx]}-${GENES[geneIdx]}`,
                patient: PATIENTS[patientIdx],
                gene: GENES[geneIdx],
                value: getCellValue(patientIdx, geneIdx, noise),
                row,
                col
            });
        });
    });
    return cells;
}
const MODE_INFO = {
    original: {
        title: "No clustering",
        subtitle: "Rows and columns are in random order. Structure is hidden.",
        analogy: "Unsorted spreadsheet",
        activeAxis: "none"
    },
    row: {
        title: "Row clustering",
        subtitle: "Similar patients grouped vertically. Columns stay fixed.",
        analogy: "Sort rows only",
        activeAxis: "rows"
    },
    column: {
        title: "Column clustering",
        subtitle: "Similar genes grouped horizontally. Rows stay fixed.",
        analogy: "Sort columns only",
        activeAxis: "cols"
    }
};
function valueToColor(value, contrast) {
    const t = Math.pow(Math.min(1, Math.max(0, value)), 1 / contrast);
    const r = Math.round(15 + t * 20);
    const g = Math.round(23 + t * 130);
    const b = Math.round(42 + t * 200);
    return `rgb(${r}, ${g}, ${b})`;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/cluster-data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Heatmap({ cells, mode, contrast, cellSize = 32, showLabels = true, compact = false }) {
    const gap = compact ? 2 : 3;
    const labelW = compact ? 28 : 40;
    const labelH = compact ? 18 : 24;
    const rowLabels = [
        ...new Set(cells.map((c)=>c.patient))
    ];
    const colLabels = [
        ...new Set(cells.map((c)=>c.gene))
    ];
    const gridW = colLabels.length * (cellSize + gap) - gap;
    const gridH = rowLabels.length * (cellSize + gap) - gap;
    const rowClustered = mode === "row";
    const colClustered = mode === "column";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block",
        children: [
            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                style: {
                    marginLeft: labelW + 8,
                    marginBottom: 6
                },
                children: colLabels.map((gene)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        layout: true,
                        className: "text-center font-mono text-[10px] font-medium",
                        style: {
                            width: cellSize + gap,
                            color: colClustered ? "#67e8f9" : "#64748b"
                        },
                        children: gene
                    }, gene, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 45,
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
                        children: rowLabels.map((patient)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                className: "flex items-center justify-end pr-1 font-mono text-[10px] font-medium",
                                style: {
                                    height: cellSize,
                                    color: rowClustered ? "#a78bfa" : "#64748b"
                                },
                                children: patient
                            }, patient, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        style: {
                            width: gridW,
                            height: gridH
                        },
                        children: cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                layoutId: compact ? undefined : cell.id,
                                transition: {
                                    layout: {
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30
                                    },
                                    backgroundColor: {
                                        duration: 0.3
                                    }
                                },
                                className: "absolute rounded-[4px] border border-white/5",
                                style: {
                                    width: cellSize,
                                    height: cellSize,
                                    left: cell.col * (cellSize + gap),
                                    top: cell.row * (cellSize + gap),
                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["valueToColor"])(cell.value, contrast)
                                },
                                title: `${cell.patient} × ${cell.gene}: ${cell.value.toFixed(2)}`,
                                whileHover: {
                                    scale: 1.15,
                                    zIndex: 10
                                }
                            }, cell.id, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            showLabels && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex justify-between text-[10px] text-slate-500",
                style: {
                    width: labelW + 8 + gridW
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Rows (patients) →"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "↑ Columns (genes)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx",
        lineNumber: 43,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/lib/cluster-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/Heatmap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MODES = [
    "original",
    "row",
    "column"
];
function Slider({ label, value, min, max, step, onChange, format }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-xs font-medium text-slate-400",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-xs text-cyan-400",
                        children: format ? format(value) : value.toFixed(2)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(parseFloat(e.target.value)),
                className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400"
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Slider;
function ClusteringDashboard() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("original");
    const [contrast, setContrast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1.4);
    const [noise, setNoise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.04);
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClusteringDashboard.useMemo[cells]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(mode, noise)
    }["ClusteringDashboard.useMemo[cells]"], [
        mode,
        noise
    ]);
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][mode];
    const miniModes = MODES.map((m)=>({
            mode: m,
            cells: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHeatmapCells"])(m, noise),
            info: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][m]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0b0f17] text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(167,139,250,0.06),_transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: -8
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400/80",
                                children: "Visual Analytics · Exercise 5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: -8
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.05
                                },
                                className: "text-3xl font-semibold tracking-tight text-white",
                                children: "One-Direction Clustering"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.1
                                },
                                className: "mt-3 max-w-2xl text-sm leading-relaxed text-slate-400",
                                children: [
                                    "Regular clustering groups data along ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-slate-200",
                                        children: "one axis only"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 50
                                    }, this),
                                    " — either similar rows (patients) or similar columns (genes), never both at once."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 lg:grid-cols-[280px_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                                initial: {
                                    opacity: 0,
                                    x: -16
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                children: "Clustering mode"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: MODES.map((m)=>{
                                                    const active = mode === m;
                                                    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$lib$2f$cluster$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODE_INFO"][m];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setMode(m),
                                                        className: `relative w-full rounded-xl px-4 py-3 text-left transition-colors ${active ? "bg-cyan-500/10 text-white" : "bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200"}`,
                                                        children: [
                                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                layoutId: "mode-highlight",
                                                                className: "absolute inset-0 rounded-xl border border-cyan-400/30",
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 30
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative text-sm font-medium",
                                                                children: meta.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative mt-0.5 block text-[11px] text-slate-500",
                                                                children: meta.analogy
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, m, true, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                children: "Adjustments"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                                                        label: "Color contrast",
                                                        value: contrast,
                                                        min: 0.6,
                                                        max: 2.5,
                                                        step: 0.1,
                                                        onChange: setContrast,
                                                        format: (v)=>`${v.toFixed(1)}×`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                                                        label: "Data noise",
                                                        value: noise,
                                                        min: 0,
                                                        max: 0.2,
                                                        step: 0.01,
                                                        onChange: setNoise,
                                                        format: (v)=>`${(v * 100).toFixed(0)}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 8
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -8
                                            },
                                            className: "rounded-2xl border border-white/8 bg-white/[0.03] p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-medium text-white",
                                                    children: info.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-xs leading-relaxed text-slate-400",
                                                    children: info.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this),
                                                info.activeAxis !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `h-2 w-2 rounded-full ${info.activeAxis === "rows" ? "bg-violet-400" : "bg-cyan-400"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] text-slate-500",
                                                            children: info.activeAxis === "rows" ? "Rows reordered · columns fixed" : "Columns reordered · rows fixed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, mode, true, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].main, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.1
                                },
                                className: "rounded-2xl border border-white/8 bg-white/[0.02] p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-medium text-white",
                                                        children: "Gene expression matrix"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-slate-500",
                                                        children: "12 patients × 8 genes · synthetic normalized expression (0–1)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-[10px] text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-3 w-3 rounded-sm bg-[rgb(15,23,42)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Low"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-3 w-3 rounded-sm bg-[rgb(35,153,242)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 19
                                                            }, this),
                                                            " High"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center overflow-x-auto py-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                            cells: cells,
                                            mode: mode,
                                            contrast: contrast
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-4 text-sm font-medium text-slate-300",
                                children: "Compare all three modes"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: miniModes.map(({ mode: m, cells: c, info: i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>setMode(m),
                                        whileHover: {
                                            y: -2
                                        },
                                        className: `rounded-2xl border p-4 text-left transition-colors ${mode === m ? "border-cyan-400/40 bg-cyan-500/5" : "border-white/8 bg-white/[0.02] hover:border-white/15"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-slate-300",
                                                children: i.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$src$2f$components$2f$Heatmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heatmap"], {
                                                    cells: c,
                                                    mode: m,
                                                    contrast: contrast,
                                                    cellSize: 18,
                                                    showLabels: false,
                                                    compact: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, m, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-8 grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    borderColor: mode === "row" ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"
                                },
                                className: "rounded-2xl border bg-white/[0.02] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-violet-300",
                                        children: "Row clustering"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs leading-relaxed text-slate-400",
                                        children: [
                                            "Groups similar ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-300",
                                                children: "patients"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 265,
                                                columnNumber: 30
                                            }, this),
                                            " and reorders rows. Columns stay in place. You see horizontal bands of expression."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    borderColor: mode === "column" ? "rgba(34,211,238,0.4)" : "rgba(255,255,255,0.08)"
                                },
                                className: "rounded-2xl border bg-white/[0.02] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium text-cyan-300",
                                        children: "Column clustering"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs leading-relaxed text-slate-400",
                                        children: [
                                            "Groups similar ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Notes$2f$Visual__Analytics$2f$Exercise__5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-slate-300",
                                                children: "genes"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 30
                                            }, this),
                                            " and reorders columns. Rows stay in place. You see vertical bands of co-expression."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Notes/Visual Analytics/Exercise 5/src/components/ClusteringDashboard.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ClusteringDashboard, "kP96OxHcitqAI0XgOFKOEB1ixnc=");
_c1 = ClusteringDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider");
__turbopack_context__.k.register(_c1, "ClusteringDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Notes_Visual%20Analytics_Exercise%205_src_1uwwrft._.js.map