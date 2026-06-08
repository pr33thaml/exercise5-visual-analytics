"use client";

import { useCallback, useEffect, useState } from "react";
import type { DistanceMetric } from "@/lib/math";

const STORAGE_KEY = "cluster-lab-metric";

export function useDistanceMetric(defaultMetric: DistanceMetric = "euclidean") {
  const [metric, setMetricState] = useState<DistanceMetric>(defaultMetric);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as DistanceMetric | null;
      if (saved === "euclidean" || saved === "manhattan" || saved === "cosine") {
        setMetricState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setMetric = useCallback((m: DistanceMetric) => {
    setMetricState(m);
    localStorage.setItem(STORAGE_KEY, m);
  }, []);

  return [metric, setMetric] as const;
}
