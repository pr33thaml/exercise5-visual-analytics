export type ViewMode = "original" | "row" | "column" | "bicluster";

export type HighlightBlock = {
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
  label: string;
};

export type DatasetTheme = {
  accent: string;
  accentLight: string;
  secondary: string;
  heatLow: string;
  heatMid: string;
  heatHigh: string;
};

export type Dataset = {
  id: string;
  title: string;
  subtitle: string;
  rowLabel: string;
  colLabel: string;
  rows: string[];
  cols: string[];
  stars: number;
  tier: "core" | "advanced";
  theme: DatasetTheme;
  clusteringInsight: string;
  biclusterInsight: string;
  rowClusterLabel: string;
  colClusterLabel: string;
  baseMatrix: number[][];
  rowOrders: Record<ViewMode, number[]>;
  colOrders: Record<ViewMode, number[]>;
  biclusterBlock: HighlightBlock;
};

export type HeatmapCell = {
  id: string;
  rowId: string;
  colId: string;
  value: number;
  row: number;
  col: number;
  sourceRow: number;
  sourceCol: number;
};

export type ModeInfo = {
  title: string;
  subtitle: string;
  tag: string;
  activeAxis: "none" | "rows" | "cols" | "both";
};
