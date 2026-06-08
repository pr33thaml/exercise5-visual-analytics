import type { Dataset, HeatmapCell, ModeInfo, ViewMode } from "./types";

export const MODE_INFO: Record<ViewMode, ModeInfo> = {
  original: {
    title: "No clustering",
    subtitle: "Rows and columns in random order. Patterns are hidden.",
    tag: "Unsorted",
    activeAxis: "none",
  },
  row: {
    title: "Row clustering",
    subtitle: "Similar rows grouped together. Columns stay fixed.",
    tag: "Rows only",
    activeAxis: "rows",
  },
  column: {
    title: "Column clustering",
    subtitle: "Similar columns grouped together. Rows stay fixed.",
    tag: "Columns only",
    activeAxis: "cols",
  },
  bicluster: {
    title: "Biclustering",
    subtitle: "Both rows AND columns reordered. Hidden submatrices emerge.",
    tag: "Both axes",
    activeAxis: "both",
  },
};

export const VIEW_MODES: ViewMode[] = ["original", "row", "column", "bicluster"];

function getCellValue(
  dataset: Dataset,
  rowIdx: number,
  colIdx: number,
  noise: number,
): number {
  const base = dataset.baseMatrix[rowIdx][colIdx];
  const jitter =
    (Math.sin(rowIdx * 5.3 + colIdx * 11.7) * 0.5 + 0.5) * noise;
  return Math.min(1, Math.max(0, base + jitter - noise / 2));
}

export function buildHeatmapCells(
  dataset: Dataset,
  mode: ViewMode,
  noise: number,
): HeatmapCell[] {
  const rowOrder = dataset.rowOrders[mode];
  const colOrder = dataset.colOrders[mode];
  const cells: HeatmapCell[] = [];

  rowOrder.forEach((sourceRow, row) => {
    colOrder.forEach((sourceCol, col) => {
      cells.push({
        id: `${dataset.id}-${dataset.rows[sourceRow]}-${dataset.cols[sourceCol]}`,
        rowId: dataset.rows[sourceRow],
        colId: dataset.cols[sourceCol],
        value: getCellValue(dataset, sourceRow, sourceCol, noise),
        row,
        col,
        sourceRow,
        sourceCol,
      });
    });
  });

  return cells;
}

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbStr(r: number, g: number, b: number) {
  return `rgb(${r}, ${g}, ${b})`;
}

export function valueToColor(
  value: number,
  contrast: number,
  heatLow: string,
  heatMid: string,
  heatHigh: string,
): string {
  const t = Math.pow(Math.min(1, Math.max(0, value)), 1 / contrast);
  const low = hexToRgb(heatLow);
  const mid = hexToRgb(heatMid);
  const high = hexToRgb(heatHigh);

  if (t < 0.45) {
    const s = t / 0.45;
    return rgbStr(
      lerp(low.r, mid.r, s),
      lerp(low.g, mid.g, s),
      lerp(low.b, mid.b, s),
    );
  }
  const s = (t - 0.45) / 0.55;
  return rgbStr(
    lerp(mid.r, high.r, s),
    lerp(mid.g, high.g, s),
    lerp(mid.b, high.b, s),
  );
}

export function starsLabel(n: number) {
  return "★".repeat(n) + "☆".repeat(5 - n);
}
