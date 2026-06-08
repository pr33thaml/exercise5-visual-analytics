import type { DatasetTheme } from "./types";

export type TeachingDataset = {
  id: string;
  title: string;
  rowLabel: string;
  colLabel: string;
  rowUnit: string;
  colUnit: string;
  valueLabel: string;
  stars: number;
  tier: "core" | "advanced";
  theme: DatasetTheme;
  rows: string[];
  cols: string[];
  /** Raw ratings 1–5 (5 = high/like, 1 = low/dislike) */
  matrix: number[][];
  rowClusters: { name: string; indices: number[]; meaning: string }[];
  colClusters: { name: string; indices: number[]; meaning: string }[];
  bicluster: {
    rowIndices: number[];
    colIndices: number[];
    label: string;
    meaning: string;
    whyExcluded: string;
    aftermath: string;
  };
  similarRowPair: [number, number];
  differentRowPair: [number, number];
  similarColPair: [number, number];
  rowClusterInsight: string;
  colClusterInsight: string;
  biclusterInsight: string;
  /** Default copy for the bicluster intro step (editable by user in browser) */
  biclusterIntroText: string;
};

export const TEACHING_DATASETS: TeachingDataset[] = [
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
      heatHigh: "#FF2D6B",
    },
    rows: ["U1", "U2", "U3", "U4"],
    cols: ["Horror1", "Horror2", "Action1", "Action2"],
    matrix: [
      [5, 5, 1, 1],
      [4, 5, 1, 2],
      [1, 1, 5, 5],
      [2, 1, 4, 5],
    ],
    rowClusters: [
      { name: "Cluster A", indices: [0, 1], meaning: "U1 & U2 are horror lovers" },
      { name: "Cluster B", indices: [2, 3], meaning: "U3 & U4 are action lovers" },
    ],
    colClusters: [
      { name: "Cluster A", indices: [0, 1], meaning: "Horror1 & Horror2 rated similarly" },
      { name: "Cluster B", indices: [2, 3], meaning: "Action1 & Action2 rated similarly" },
    ],
    bicluster: {
      rowIndices: [0, 1],
      colIndices: [0, 1],
      label: "Horror fan bicluster",
      meaning: "U1 & U2 jointly love Horror1 & Horror2 — a tight 2×2 preference block.",
      whyExcluded:
        "Look at U1's Action ratings: 1 and 1. U2's: 1 and 2. Those are low — there is no joint 'we both love action' signal. A bicluster needs strong co-occurrence in the same cells. Action movies belong to a different bicluster (U3 & U4 × Action1 & Action2), not this one.",
      aftermath:
        "After finding this bicluster you can: recommend Horror1 & Horror2 to U1 & U2 only; run a separate bicluster for action fans; use this block as a 'horror segment' in a marketing campaign without polluting it with action recommendations.",
    },
    similarRowPair: [0, 1],
    differentRowPair: [0, 2],
    similarColPair: [0, 1],
    rowClusterInsight: "Which USERS behave similarly?",
    colClusterInsight: "Which MOVIES receive similar ratings from users?",
    biclusterInsight:
      "Biclustering identifies a specific user group matched to a specific movie group — not every movie at once.",
    biclusterIntroText:
      "Row clustering finds broad groups, like all horror fans. But it still considers every movie when forming those groups.\n\nBiclustering goes one step deeper, it identifies a specific group of users who share interest in a specific group of movies.",
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
      heatHigh: "#FF0040",
    },
    rows: ["acc1", "acc2", "acc3", "acc4"],
    cols: ["home_IP", "office_IP", "bot_CDN", "sus_IP"],
    matrix: [
      [5, 2, 1, 1],
      [4, 1, 1, 2],
      [1, 1, 5, 5],
      [2, 1, 4, 5],
    ],
    rowClusters: [
      { name: "Cluster A", indices: [0, 1], meaning: "acc1 & acc2 are normal users" },
      { name: "Cluster B", indices: [2, 3], meaning: "acc3 & acc4 are bot accounts" },
    ],
    colClusters: [
      { name: "Cluster A", indices: [0, 1], meaning: "home_IP & office_IP (legitimate)" },
      { name: "Cluster B", indices: [2, 3], meaning: "bot_CDN & sus_IP (suspicious)" },
    ],
    bicluster: {
      rowIndices: [2, 3],
      colIndices: [2, 3],
      label: "Attack coordination bicluster",
      meaning: "acc3 & acc4 jointly hit bot_CDN & sus_IP at high frequency — a 2×2 attack block.",
      whyExcluded:
        "acc3's home_IP=1 and office_IP=1 — nearly zero. Normal IPs don't co-occur with the attack pattern. They're irrelevant to THIS bicluster, not to the whole dataset.",
      aftermath:
        "Security team can: block acc3 & acc4 from sus_IP; flag bot_CDN as compromised; leave normal home/office traffic on a separate watchlist.",
    },
    similarRowPair: [0, 1],
    differentRowPair: [0, 2],
    similarColPair: [2, 3],
    rowClusterInsight: "Which ACCOUNTS behave similarly?",
    colClusterInsight: "Which IPs are accessed by similar accounts?",
    biclusterInsight:
      "A coordinated attack group: specific accounts targeting specific IPs simultaneously.",
    biclusterIntroText:
      "Row clustering finds broad groups, like normal users vs bots. But it still considers every IP address when forming those groups.\n\nBiclustering goes one step deeper, it identifies a specific group of accounts who share activity on a specific group of IP addresses.",
  },
];

export function getTeachingDataset(id: string): TeachingDataset {
  return TEACHING_DATASETS.find((d) => d.id === id) ?? TEACHING_DATASETS[0];
}

export type LessonStepId =
  | "intro"
  | "raw-table"
  | "row-vectors"
  | "row-compare-similar"
  | "row-compare-different"
  | "row-distance-matrix"
  | "row-clusters"
  | "row-reorder"
  | "col-vectors"
  | "col-compare"
  | "col-clusters"
  | "col-reorder"
  | "bicluster-intro"
  | "bicluster-reveal"

export type LessonStep = {
  id: LessonStepId;
  phase: "setup" | "row" | "column" | "bicluster";
  title: string;
  subtitle: string;
};

export const LESSON_STEPS: LessonStep[] = [
  { id: "intro", phase: "setup", title: "Start here", subtitle: "What are we looking at?" },
  { id: "raw-table", phase: "setup", title: "The raw data", subtitle: "A matrix of numbers — rows × columns" },
  { id: "row-vectors", phase: "row", title: "Rows as vectors", subtitle: "Each row becomes a list of numbers" },
  { id: "row-compare-similar", phase: "row", title: "Similar rows", subtitle: "Compare two rows that look alike" },
  { id: "row-compare-different", phase: "row", title: "Different rows", subtitle: "Compare two rows that look nothing alike" },
  { id: "row-distance-matrix", phase: "row", title: "All distances", subtitle: "Every row compared to every other row" },
  { id: "row-clusters", phase: "row", title: "Row clusters", subtitle: "Group similar rows together" },
  { id: "row-reorder", phase: "row", title: "Row clustering result", subtitle: "Reorder rows — columns stay fixed" },
  { id: "col-vectors", phase: "column", title: "Columns as vectors", subtitle: "Flip your thinking — now columns are vectors" },
  { id: "col-compare", phase: "column", title: "Similar columns", subtitle: "Which columns have similar patterns?" },
  { id: "col-clusters", phase: "column", title: "Column clusters", subtitle: "Group similar columns together" },
  { id: "col-reorder", phase: "column", title: "Column clustering result", subtitle: "Reorder columns — rows stay fixed" },
  { id: "bicluster-intro", phase: "bicluster", title: "The limitation", subtitle: "Row OR column — never both… until now" },
  { id: "bicluster-reveal", phase: "bicluster", title: "Bicluster found", subtitle: "Both axes at once — a hidden submatrix" },
];

export const PHASE_COLORS: Record<LessonStep["phase"], string> = {
  setup: "#888888",
  row: "#FF2D6B",
  column: "#0066FF",
  bicluster: "#FFE600",
};
