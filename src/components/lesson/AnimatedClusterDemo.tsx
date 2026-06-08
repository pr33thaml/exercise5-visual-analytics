"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import { TermButton } from "@/components/glossary/TermButton";

const SCRAMBLED_ROWS = [2, 0, 3, 1];
const SCRAMBLED_COLS = [2, 3, 0, 1];
const AUTO_MS = 2800;

type Mode = "row" | "column" | "bicluster";

type AnimStep = {
  label: string;
  narration: string;
  rowOrder: number[];
  colOrder: number[];
  highlightRows?: number[];
  highlightCols?: number[];
  dimOutside?: boolean;
};

type Props = {
  data: TeachingDataset;
  mode: Mode;
  accent: string;
};

function ratingColor(v: number, accent: string) {
  if (v >= 4) return accent;
  if (v >= 3) return "#FFD23F";
  return "#E8E8E8";
}

export function AnimatedClusterDemo({ data, mode, accent }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clusteredRows = data.rowClusters.flatMap((c) => c.indices);
  const clusteredCols = data.colClusters.flatMap((c) => c.indices);
  const naturalRows = data.rows.map((_, i) => i);
  const naturalCols = data.cols.map((_, i) => i);

  const biclusterRows = [
    ...data.bicluster.rowIndices,
    ...naturalRows.filter((i) => !data.bicluster.rowIndices.includes(i)),
  ];
  const biclusterCols = [
    ...data.bicluster.colIndices,
    ...naturalCols.filter((i) => !data.bicluster.colIndices.includes(i)),
  ];

  const steps = useMemo((): AnimStep[] => {
    if (mode === "row") {
      const c0 = data.rowClusters[0].indices;
      const c1 = data.rowClusters[1].indices;
      return [
        {
          label: "Messy",
          narration: `Rows are shuffled — you can't see that ${data.rows[c0[0]]} & ${data.rows[c0[1]]} are horror fans. Columns are untouched.`,
          rowOrder: SCRAMBLED_ROWS,
          colOrder: naturalCols,
        },
        {
          label: "Detect",
          narration: `Distance matrix shows ${data.rows[c0[0]]} & ${data.rows[c0[1]]} are very close. Algorithm flags them as Cluster A.`,
          rowOrder: SCRAMBLED_ROWS,
          colOrder: naturalCols,
          highlightRows: c0,
        },
        {
          label: "Move A",
          narration: `Slide ${data.rows[c0[0]]} & ${data.rows[c0[1]]} next to each other at the top.`,
          rowOrder: [...c0, ...SCRAMBLED_ROWS.filter((r) => !c0.includes(r))],
          colOrder: naturalCols,
          highlightRows: c0,
        },
        {
          label: "Detect B",
          narration: `${data.rows[c1[0]]} & ${data.rows[c1[1]]} are action fans — another cluster.`,
          rowOrder: [...c0, ...SCRAMBLED_ROWS.filter((r) => !c0.includes(r))],
          colOrder: naturalCols,
          highlightRows: c1,
        },
        {
          label: "Done",
          narration: `All rows grouped: horror fans on top, action fans below. Columns never moved — horizontal bands are visible.`,
          rowOrder: clusteredRows,
          colOrder: naturalCols,
          highlightRows: clusteredRows,
        },
      ];
    }

    if (mode === "column") {
      const c0 = data.colClusters[0].indices;
      const c1 = data.colClusters[1].indices;
      return [
        {
          label: "Messy",
          narration: `Columns shuffled — ${data.cols[c0[0]]} & ${data.cols[c0[1]]} are separated. Rows stay fixed.`,
          rowOrder: naturalRows,
          colOrder: SCRAMBLED_COLS,
        },
        {
          label: "Detect",
          narration: `${data.cols[c0[0]]} & ${data.cols[c0[1]]} get similar ratings from the same users — they cluster.`,
          rowOrder: naturalRows,
          colOrder: SCRAMBLED_COLS,
          highlightCols: c0,
        },
        {
          label: "Move A",
          narration: `Slide ${data.cols[c0[0]]} & ${data.cols[c0[1]]} side by side.`,
          rowOrder: naturalRows,
          colOrder: [...c0, ...SCRAMBLED_COLS.filter((c) => !c0.includes(c))],
          highlightCols: c0,
        },
        {
          label: "Move B",
          narration: `Group ${data.cols[c1[0]]} & ${data.cols[c1[1]]} together.`,
          rowOrder: naturalRows,
          colOrder: clusteredCols,
          highlightCols: c1,
        },
        {
          label: "Done",
          narration: `Horror movies together, action movies together. Rows never moved — vertical bands appear.`,
          rowOrder: naturalRows,
          colOrder: clusteredCols,
          highlightCols: clusteredCols,
        },
      ];
    }

    const br = data.bicluster.rowIndices;
    const bc = data.bicluster.colIndices;
    const excludedCols = naturalCols.filter((i) => !bc.includes(i));
    const excludedColNames = excludedCols.map((i) => data.cols[i]).join(", ");

    return [
      {
        label: "Messy",
        narration: "Both axes scrambled. The horror fan block is completely hidden.",
        rowOrder: SCRAMBLED_ROWS,
        colOrder: SCRAMBLED_COLS,
      },
      {
        label: "Find users",
        narration: `Algorithm finds ${br.map((i) => data.rows[i]).join(" & ")} rate the same movies highly.`,
        rowOrder: SCRAMBLED_ROWS,
        colOrder: SCRAMBLED_COLS,
        highlightRows: br,
      },
      {
        label: "Find movies",
        narration: `Those users jointly love ${bc.map((i) => data.cols[i]).join(" & ")} — not ${excludedColNames}.`,
        rowOrder: SCRAMBLED_ROWS,
        colOrder: SCRAMBLED_COLS,
        highlightRows: br,
        highlightCols: bc,
      },
      {
        label: "Reorder",
        narration: "Pull the user group and movie group together into one rectangle.",
        rowOrder: biclusterRows,
        colOrder: biclusterCols,
        highlightRows: br,
        highlightCols: bc,
      },
      {
        label: "Block",
        narration: data.bicluster.meaning,
        rowOrder: biclusterRows,
        colOrder: biclusterCols,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: true,
      },
      {
        label: "Why excluded",
        narration: data.bicluster.whyExcluded,
        rowOrder: biclusterRows,
        colOrder: biclusterCols,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: true,
      },
      {
        label: "Aftermath",
        narration: data.bicluster.aftermath,
        rowOrder: biclusterRows,
        colOrder: biclusterCols,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: true,
      },
    ];
  }, [data, mode, clusteredRows, clusteredCols, biclusterRows, biclusterCols, naturalRows, naturalCols]);

  const current = steps[stepIndex];
  const isLast = stepIndex >= steps.length - 1;
  const isFirst = stepIndex === 0;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    if (!playing || isLast) {
      if (isLast) setPlaying(false);
      return;
    }
    timerRef.current = setTimeout(() => {
      setStepIndex((s) => Math.min(s + 1, steps.length - 1));
    }, AUTO_MS);
    return clearTimer;
  }, [playing, stepIndex, isLast, steps.length, clearTimer]);

  const reset = () => {
    clearTimer();
    setPlaying(false);
    setStepIndex(0);
  };

  const showBiclusterBlock =
    mode === "bicluster" && current.dimOutside;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            if (isLast) {
              reset();
              setPlaying(true);
            } else {
              setPlaying(true);
            }
          }}
          disabled={playing && !isLast}
          className="border-2 border-black px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
          style={{ backgroundColor: accent }}
        >
          {isLast ? "Replay" : playing ? "Playing…" : "Play"}
        </button>
        <button
          onClick={() => {
            clearTimer();
            setPlaying(false);
          }}
          disabled={!playing}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          Pause
        </button>
        <button
          onClick={() => {
            clearTimer();
            setPlaying(false);
            setStepIndex((s) => Math.max(s - 1, 0));
          }}
          disabled={isFirst}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          ← Step
        </button>
        <button
          onClick={() => {
            clearTimer();
            setPlaying(false);
            setStepIndex((s) => Math.min(s + 1, steps.length - 1));
          }}
          disabled={isLast}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          Step →
        </button>
        <button onClick={reset} className="border-2 border-black px-4 py-2 text-sm font-bold">
          Reset
        </button>
      </div>

      <p className="text-sm text-[#5c5c5c]">
        Step {stepIndex + 1}/{steps.length} · use Pause + Step buttons to go at your own pace
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-2 border-black bg-black px-4 py-3 text-[15px] leading-relaxed text-white"
        >
          <span className="mr-2 font-mono text-xs font-bold text-white/50">
            {current.label}
          </span>
          {current.narration}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-1">
        {steps.map((s, i) => (
          <button
            key={s.label}
            onClick={() => {
              clearTimer();
              setPlaying(false);
              setStepIndex(i);
            }}
            className="h-2 flex-1 border border-black/20 transition-colors"
            style={{ backgroundColor: i <= stepIndex ? accent : "#E8E8E8" }}
            title={s.label}
          />
        ))}
      </div>

      <div className="overflow-x-auto border-3 border-black bg-white p-2 md:p-4">
        <table className="w-full min-w-[280px] border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-black bg-black px-2 py-2 text-left text-xs font-bold text-white">
                {data.rowLabel}
              </th>
              {current.colOrder.map((ci) => (
                <motion.th
                  key={data.cols[ci]}
                  layout
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="border-2 border-black px-2 py-2 text-center text-xs font-bold md:px-3"
                  style={{
                    backgroundColor: current.highlightCols?.includes(ci)
                      ? `${accent}55`
                      : "#F5F5F5",
                  }}
                >
                  {data.cols[ci]}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {current.rowOrder.map((ri) => (
              <motion.tr
                key={data.rows[ri]}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <td
                  className="border-2 border-black px-2 py-2 text-sm font-bold md:px-3"
                  style={{
                    backgroundColor: current.highlightRows?.includes(ri)
                      ? `${accent}33`
                      : "#F5F5F5",
                  }}
                >
                  {data.rows[ri]}
                </td>
                {current.colOrder.map((ci) => {
                  const val = data.matrix[ri][ci];
                  const inBlock =
                    showBiclusterBlock &&
                    data.bicluster.rowIndices.includes(ri) &&
                    data.bicluster.colIndices.includes(ci);
                  const dimmed = showBiclusterBlock && !inBlock;
                  return (
                    <motion.td
                      key={ci}
                      layout
                      className="border-2 border-black px-3 py-2 text-center text-base font-bold md:text-lg"
                      style={{
                        backgroundColor: inBlock ? "#FFE600" : ratingColor(val, accent),
                        opacity: dimmed ? 0.2 : 1,
                        outline: inBlock ? "3px solid #0A0A0A" : undefined,
                        outlineOffset: -2,
                      }}
                    >
                      {val}
                    </motion.td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {mode === "bicluster" && stepIndex >= 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3 border-2 border-black bg-[#FFE60018] p-4"
        >
          <p className="text-sm font-bold">
            Why are other movies excluded?{" "}
            <TermButton termId="bicluster-exclusion">Tap for explanation</TermButton>
          </p>
          <p className="readable text-[15px]">{data.bicluster.whyExcluded}</p>
          <p className="text-sm font-bold">What do you do after biclustering?</p>
          <p className="readable text-[15px]">{data.bicluster.aftermath}</p>
        </motion.div>
      )}

      {mode !== "bicluster" && isLast && (
        <p className="readable text-[15px]">
          <strong>What changed?</strong> Only row/column order — every rating is the same number
          as before. The algorithm detected similarity, then{" "}
          <TermButton termId="reorder">reordered</TermButton> the display.
        </p>
      )}
    </div>
  );
}
