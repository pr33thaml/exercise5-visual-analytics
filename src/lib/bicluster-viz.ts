export type BiclusterVizTechniqueId = "heatmap" | "parallel" | "bipartite" | "inset";

export type BiclusterVizTechnique = {
  id: BiclusterVizTechniqueId;
  title: string;
  subtitle: string;
  description: string;
  termId: string;
};

export const BICLUSTER_VIZ_PROBLEM = {
  headline: "The basic problem: overlap",
  body:
    "A bicluster is a subset of rows and columns scattered across a big matrix. How do you show it clearly without losing context of the full data? Rows and columns can belong to several biclusters at once — highlights overlap, rectangles compete for attention, and the global structure disappears if you zoom in too far.",
};

export const BICLUSTER_VIZ_TECHNIQUES: BiclusterVizTechnique[] = [
  {
    id: "heatmap",
    title: "Heatmap with reordering",
    subtitle: "Rectangles emerge after permutation",
    description:
      "Reorder rows and columns so biclusters appear as visible rectangles on the full heatmap. You keep every cell in view — only positions change, not values.",
    termId: "heatmap",
  },
  {
    id: "parallel",
    title: "Parallel coordinates",
    subtitle: "One line per row",
    description:
      "Each line traces one row across every column axis. Spikes on the bicluster columns reveal which rows share the same joint pattern — even when the raw table looks messy.",
    termId: "parallel-coordinates",
  },
  {
    id: "bipartite",
    title: "BiGraph / bipartite graph",
    subtitle: "Rows and columns as nodes",
    description:
      "Rows and columns become two node sets. Edges connect members of the same bicluster — membership is explicit without hiding the rest of the matrix.",
    termId: "bipartite-graph",
  },
  {
    id: "inset",
    title: "Submatrix inset",
    subtitle: "Context + zoom",
    description:
      "Keep the full reordered heatmap visible with a border around the bicluster, then pull out an enlarged inset of just that submatrix — context and detail at once.",
    termId: "submatrix-inset",
  },
];

/** Shared shape for technique renderers (lesson + explore) */
export type BiclusterVizData = {
  rows: string[];
  cols: string[];
  /** Values — lesson uses 1–5 ratings, explore uses 0–1 affinity */
  matrix: number[][];
  biclusterRowIndices: number[];
  biclusterColIndices: number[];
  biclusterLabel: string;
  rowLabel: string;
  colLabel: string;
  accent: string;
  valueHigh?: number;
};
