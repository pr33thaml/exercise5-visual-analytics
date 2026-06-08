export type DistanceMetric = "euclidean" | "manhattan" | "cosine";

export type MetricTerm = {
  index: number;
  label: string;
  a: number;
  b: number;
  diff: number;
  /** Euclidean: diff² · Manhattan: |diff| · Cosine: a×b */
  contribution: number;
};

export type MetricResult = {
  metric: DistanceMetric;
  distance: number;
  /** Cosine only — similarity in [0, 1] */
  similarity?: number;
  terms: MetricTerm[];
  summary: string;
};

export const METRIC_INFO: Record<
  DistanceMetric,
  { label: string; termId: string; shortFormula: string }
> = {
  euclidean: {
    label: "Euclidean",
    termId: "euclidean-distance",
    shortFormula: "√Σ(xᵢ−yᵢ)²",
  },
  manhattan: {
    label: "Manhattan",
    termId: "manhattan-distance",
    shortFormula: "Σ|xᵢ−yᵢ|",
  },
  cosine: {
    label: "Cosine",
    termId: "cosine-similarity",
    shortFormula: "1 − (x·y)/(‖x‖‖y‖)",
  },
};

function dot(a: number[], b: number[]) {
  return a.reduce((s, v, i) => s + v * b[i], 0);
}

function magnitude(a: number[]) {
  return Math.sqrt(a.reduce((s, v) => s + v * v, 0));
}

export function computeMetric(
  metric: DistanceMetric,
  a: number[],
  b: number[],
  labels: string[],
): MetricResult {
  if (metric === "euclidean") {
    const terms: MetricTerm[] = a.map((val, i) => {
      const diff = val - b[i];
      return {
        index: i,
        label: labels[i] ?? `dim ${i + 1}`,
        a: val,
        b: b[i],
        diff,
        contribution: diff ** 2,
      };
    });
    const sumSq = terms.reduce((s, t) => s + t.contribution, 0);
    const distance = Math.sqrt(sumSq);
    return {
      metric,
      distance,
      terms,
      summary: `√${sumSq} = ${distance.toFixed(3)}`,
    };
  }

  if (metric === "manhattan") {
    const terms: MetricTerm[] = a.map((val, i) => {
      const diff = val - b[i];
      return {
        index: i,
        label: labels[i] ?? `dim ${i + 1}`,
        a: val,
        b: b[i],
        diff,
        contribution: Math.abs(diff),
      };
    });
    const distance = terms.reduce((s, t) => s + t.contribution, 0);
    return {
      metric,
      distance,
      terms,
      summary: `${distance.toFixed(3)}`,
    };
  }

  // Cosine: distance = 1 - similarity (smaller = closer)
  const terms: MetricTerm[] = a.map((val, i) => ({
    index: i,
    label: labels[i] ?? `dim ${i + 1}`,
    a: val,
    b: b[i],
    diff: val - b[i],
    contribution: val * b[i],
  }));
  const dotProd = terms.reduce((s, t) => s + t.contribution, 0);
  const magA = magnitude(a);
  const magB = magnitude(b);
  const similarity = magA === 0 || magB === 0 ? 0 : dotProd / (magA * magB);
  const distance = 1 - similarity;

  return {
    metric,
    distance,
    similarity,
    terms,
    summary: `1 − ${similarity.toFixed(3)} = ${distance.toFixed(3)}`,
  };
}

export function buildDistanceMatrix(
  vectors: number[][],
  metric: DistanceMetric = "euclidean",
): number[][] {
  const n = vectors.length;
  const dimLabels = vectors[0]?.map((_, i) => `d${i + 1}`) ?? [];
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      i === j
        ? 0
        : computeMetric(metric, vectors[i], vectors[j], dimLabels).distance,
    ),
  );
}

export function proximityLabel(
  metric: DistanceMetric,
  distance: number,
): "very close" | "close" | "far" | "very far" {
  if (metric === "cosine") {
    if (distance < 0.08) return "very close";
    if (distance < 0.2) return "close";
    if (distance < 0.45) return "far";
    return "very far";
  }
  if (metric === "manhattan") {
    if (distance < 3) return "very close";
    if (distance < 6) return "close";
    if (distance < 10) return "far";
    return "very far";
  }
  // euclidean
  if (distance < 2) return "very close";
  if (distance < 4) return "close";
  if (distance < 6) return "far";
  return "very far";
}

export function isClosePair(metric: DistanceMetric, distance: number): boolean {
  const label = proximityLabel(metric, distance);
  return label === "very close" || label === "close";
}

/** @deprecated use computeMetric */
export function euclideanDistance(a: number[], b: number[]): number {
  return computeMetric("euclidean", a, b, []).distance;
}

export function normalizeRating(v: number, min = 1, max = 5): number {
  return (v - min) / (max - min);
}
