import type { Dataset, ViewMode } from "./types";

function fill(rows: number, cols: number, value = 0.06): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(value));
}

function setBlock(
  matrix: number[][],
  rowIdxs: number[],
  colIdxs: number[],
  value: number,
) {
  for (const r of rowIdxs) {
    for (const c of colIdxs) {
      matrix[r][c] = value;
    }
  }
}

// ── Movies × Users ───────────────────────────────────────────────────────────

const MOVIE_ROWS = ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "U10", "U11", "U12"];
const MOVIE_COLS = [
  "Scream", "Hereditary", "The Conjuring",
  "Mad Max", "John Wick", "Mission Imp.",
  "Superbad", "Bridesmaids", "The Hangover",
  "Moonlight", "The Lighthouse",
];

function buildMovieMatrix(): number[][] {
  const m = fill(12, 11, 0.05);
  // Horror fans U1–U4
  setBlock(m, [0, 1, 2, 3], [0, 1, 2], 0.92);
  // Action fans U5–U8
  setBlock(m, [4, 5, 6, 7], [3, 4, 5], 0.9);
  // Comedy fans U9–U12
  setBlock(m, [8, 9, 10, 11], [6, 7, 8], 0.88);
  // Niche bicluster: U2, U6, U10 × Moonlight, Lighthouse
  setBlock(m, [1, 5, 9], [9, 10], 0.96);
  return m;
}

const movieRowClustered = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const movieColClustered = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const movieRowScrambled = [7, 2, 10, 0, 5, 11, 3, 8, 1, 6, 9, 4];
const movieColScrambled = [4, 9, 1, 6, 0, 3, 8, 2, 7, 5, 10];
// Bicluster: niche users together + niche movies together
const movieRowBicluster = [1, 5, 9, 0, 2, 3, 4, 6, 7, 8, 10, 11];
const movieColBicluster = [9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// ── Accounts × IP Addresses ──────────────────────────────────────────────────

const ACCOUNT_ROWS = ["acc_01", "acc_02", "acc_03", "acc_04", "acc_05", "acc_06", "acc_07", "acc_08", "acc_09", "acc_10", "acc_11", "acc_12"];
const ACCOUNT_COLS = [
  "192.0.1", "192.0.2", "192.0.3",
  "10.0.1", "10.0.2", "10.0.3",
  "172.1.1", "172.1.2",
  "45.33.1", "45.33.2",
];

function buildAccountMatrix(): number[][] {
  const m = fill(12, 10, 0.03);
  // Normal users — sparse home/office logins
  m[0][0] = 0.85; m[0][1] = 0.12;
  m[1][1] = 0.82; m[1][2] = 0.1;
  m[2][2] = 0.8; m[2][3] = 0.08;
  m[3][3] = 0.84; m[3][4] = 0.11;
  m[4][4] = 0.83; m[4][5] = 0.09;
  m[5][5] = 0.81; m[5][6] = 0.07;
  m[6][6] = 0.86; m[6][7] = 0.1;
  m[7][7] = 0.79; m[7][0] = 0.08;
  // Bot cluster — many accounts, same CDN IPs
  setBlock(m, [8, 9, 10, 11], [6, 7], 0.94);
  // Coordinated attack bicluster
  setBlock(m, [2, 8, 9, 10], [8, 9], 0.98);
  return m;
}

const accountRowClustered = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const accountColClustered = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const accountRowScrambled = [9, 3, 11, 1, 7, 0, 10, 4, 2, 8, 6, 5];
const accountColScrambled = [8, 2, 6, 0, 9, 4, 1, 7, 3, 5];
const accountRowBicluster = [2, 8, 9, 10, 0, 1, 3, 4, 5, 6, 7, 11];
const accountColBicluster = [8, 9, 6, 7, 0, 1, 2, 3, 4, 5];

// ── Registry ─────────────────────────────────────────────────────────────────

function makeOrders(
  rowScrambled: number[],
  colScrambled: number[],
  rowClustered: number[],
  colClustered: number[],
  rowBicluster: number[],
  colBicluster: number[],
): { rowOrders: Record<ViewMode, number[]>; colOrders: Record<ViewMode, number[]> } {
  return {
    rowOrders: {
      original: rowScrambled,
      row: rowClustered,
      column: rowScrambled,
      bicluster: rowBicluster,
    },
    colOrders: {
      original: colScrambled,
      row: colScrambled,
      column: colClustered,
      bicluster: colBicluster,
    },
  };
}

export const DATASETS: Dataset[] = [
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
      heatHigh: "#FF2D6B",
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
      label: "Niche film club",
    },
    ...makeOrders(
      movieRowScrambled, movieColScrambled,
      movieRowClustered, movieColClustered,
      movieRowBicluster, movieColBicluster,
    ),
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
      heatHigh: "#FF0040",
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
      label: "Attack coordination",
    },
    ...makeOrders(
      accountRowScrambled, accountColScrambled,
      accountRowClustered, accountColClustered,
      accountRowBicluster, accountColBicluster,
    ),
  },
];

export function getDataset(id: string): Dataset {
  return DATASETS.find((d) => d.id === id) ?? DATASETS[0];
}
