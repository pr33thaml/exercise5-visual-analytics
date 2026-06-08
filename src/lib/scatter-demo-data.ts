import type { ScatterAxes, ScatterPoint } from "./scatterplot-purposes";

/** Generic student survey-style demo — not tied to movies/accounts */
export const PURPOSE_DEMO: { points: ScatterPoint[]; axes: ScatterAxes } = {
  axes: {
    xLabel: "Study hours / week",
    yLabel: "Exam score",
    xHint: "hours",
    yHint: "score (0–10)",
  },
  points: [
    { id: "A1", x: 2, y: 3, cluster: 0 },
    { id: "A2", x: 2.5, y: 4, cluster: 0 },
    { id: "A3", x: 8, y: 8.5, cluster: 1 },
    { id: "A4", x: 9, y: 9, cluster: 1 },
    { id: "A5", x: 7.5, y: 4, cluster: 1, outlier: true },
  ],
};

export type DensePoint = { x: number; y: number; cluster: number };

/** Seeded pseudo-random points for clutter / advanced demos */
export function generateDensePoints(count = 140): DensePoint[] {
  const pts: DensePoint[] = [];
  for (let i = 0; i < count; i++) {
    const t = i * 0.17;
    const cluster = i % 3;
    const cx = cluster === 0 ? 2.5 : cluster === 1 ? 6 : 8;
    const cy = cluster === 0 ? 3 : cluster === 1 ? 6.5 : 8;
    pts.push({
      x: cx + Math.sin(t * 4.1) * 1.2 + ((i * 7) % 11) * 0.08,
      y: cy + Math.cos(t * 3.7) * 1.1 + ((i * 13) % 9) * 0.09,
      cluster,
    });
  }
  return pts;
}

export const DENSE_AXES: ScatterAxes = {
  xLabel: "Variable X",
  yLabel: "Variable Y",
  xHint: "continuous",
  yHint: "continuous",
};
