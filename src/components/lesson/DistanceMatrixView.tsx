"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import { METRIC_INFO, buildDistanceMatrix, type DistanceMetric } from "@/lib/math";
import { TermButton } from "@/components/glossary/TermButton";

type Props = {
  data: TeachingDataset;
  mode: "row" | "col";
  accent: string;
  metric: DistanceMetric;
  onCellClick?: (i: number, j: number) => void;
  highlightPair?: [number, number];
};

export function DistanceMatrixView({
  data,
  mode,
  accent,
  metric,
  onCellClick,
  highlightPair,
}: Props) {
  const labels = mode === "row" ? data.rows : data.cols;
  const vectors = useMemo(
    () =>
      mode === "row"
        ? data.matrix
        : data.cols.map((_, j) => data.matrix.map((row) => row[j])),
    [data, mode],
  );

  const dist = useMemo(
    () => buildDistanceMatrix(vectors, metric),
    [vectors, metric],
  );
  const maxD = Math.max(...dist.flat().filter((d) => d > 0), 0.001);
  const info = METRIC_INFO[metric];

  return (
    <div>
      <p className="readable mb-3 text-[15px]">
        Each cell = <TermButton termId={info.termId}>{info.label}</TermButton> between two{" "}
        {mode === "row" ? data.rowLabel.toLowerCase() : data.colLabel.toLowerCase()}. Darker =
        closer. Tap to inspect.
      </p>
      <div className="overflow-x-auto">
        <table className="border-collapse font-mono text-sm">
          <thead>
            <tr>
              <th className="border-2 border-black bg-black p-2 text-xs text-white" />
              {labels.map((l) => (
                <th
                  key={l}
                  className="border-2 border-black bg-black p-2 text-xs font-bold text-white"
                >
                  {l}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dist.map((row, i) => (
              <tr key={labels[i]}>
                <td className="border-2 border-black bg-black p-2 text-xs font-bold text-white">
                  {labels[i]}
                </td>
                {row.map((d, j) => {
                  const isHighlight =
                    highlightPair &&
                    ((highlightPair[0] === i && highlightPair[1] === j) ||
                      (highlightPair[0] === j && highlightPair[1] === i));
                  const t = i === j ? 0 : 1 - d / maxD;
                  const r = parseInt(accent.slice(1, 3), 16);
                  const g = parseInt(accent.slice(3, 5), 16);
                  const b = parseInt(accent.slice(5, 7), 16);
                  const bg =
                    i === j
                      ? "#E8E8E8"
                      : `rgba(${r}, ${g}, ${b}, ${0.2 + t * 0.8})`;

                  return (
                    <motion.td
                      key={j}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => i !== j && onCellClick?.(i, j)}
                      className="cursor-pointer border-2 border-black p-2 text-center text-sm font-bold md:p-3"
                      style={{
                        backgroundColor: bg,
                        color: t > 0.55 ? "#FFF" : "#0A0A0A",
                        outline: isHighlight ? `3px solid ${accent}` : undefined,
                      }}
                    >
                      {i === j ? "—" : d.toFixed(metric === "cosine" ? 2 : 1)}
                    </motion.td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
