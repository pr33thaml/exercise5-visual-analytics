"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import {
  BICLUSTER_VIZ_PROBLEM,
  BICLUSTER_VIZ_TECHNIQUES,
  type BiclusterVizTechniqueId,
} from "@/lib/bicluster-viz";
import { contrastTextOn } from "@/lib/color-utils";
import { teachingToVizData } from "@/lib/bicluster-viz-data";
import { MiniBiclusterMatrix } from "@/components/bicluster/MiniBiclusterMatrix";
import { RawDataTable } from "./RawDataTable";
import { TermButton } from "@/components/glossary/TermButton";

const SCRAMBLED_ROWS = [2, 0, 3, 1];
const SCRAMBLED_COLS = [2, 3, 0, 1];
const AUTO_MS = 2600;

type Props = {
  data: TeachingDataset;
  accent?: string;
};

type PlaybackProps = {
  stepCount: number;
  resetKey: string;
  children: (step: number, playing: boolean) => React.ReactNode;
  narration: (step: number) => { label: string; text: string };
};

function useVizPlayback(stepCount: number, resetKey: string) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setStep(0);
    setPlaying(false);
  }, [clearTimer]);

  useEffect(() => {
    setStep(0);
    setPlaying(true);
  }, [resetKey]);

  useEffect(() => {
    if (!playing) return;
    if (step >= stepCount - 1) {
      setPlaying(false);
      return;
    }
    timerRef.current = setTimeout(() => setStep((s) => s + 1), AUTO_MS);
    return clearTimer;
  }, [playing, step, stepCount, clearTimer]);

  return {
    step,
    playing,
    isFirst: step === 0,
    isLast: step === stepCount - 1,
    setStep,
    setPlaying,
    clearTimer,
    reset,
  };
}

function VizPlaybackControls({
  step,
  stepCount,
  playing,
  isFirst,
  isLast,
  onPlay,
  onPause,
  onPrev,
  onNext,
  onReset,
  accent,
}: {
  step: number;
  stepCount: number;
  playing: boolean;
  isFirst: boolean;
  isLast: boolean;
  onPlay: () => void;
  onPause: () => void;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  accent: string;
}) {
  const btnColor = contrastTextOn(accent);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={onPlay}
          disabled={playing && !isLast}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-40"
          style={{ backgroundColor: accent, color: btnColor }}
        >
          {isLast ? "Replay" : playing ? "Playing…" : "Play"}
        </button>
        <button
          onClick={onPause}
          disabled={!playing}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          Pause
        </button>
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          ← Step
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          className="border-2 border-black px-4 py-2 text-sm font-bold disabled:opacity-30"
        >
          Step →
        </button>
        <button onClick={onReset} className="border-2 border-black px-4 py-2 text-sm font-bold">
          Reset
        </button>
      </div>
      <p className="text-sm text-[#5c5c5c]">
        Step {step + 1}/{stepCount} · use Pause + Step to go at your own pace
      </p>
      <div className="flex gap-1">
        {Array.from({ length: stepCount }).map((_, i) => (
          <motion.div
            key={i}
            className="h-2 flex-1 border border-black/20"
            animate={{ backgroundColor: i <= step ? accent : "#E8E8E8" }}
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>
    </div>
  );
}

function VizPlaybackShell({ stepCount, resetKey, children, narration }: PlaybackProps) {
  const pb = useVizPlayback(stepCount, resetKey);
  const { label, text } = narration(pb.step);

  return (
    <div className="space-y-4">
      <VizPlaybackControls
        step={pb.step}
        stepCount={stepCount}
        playing={pb.playing}
        isFirst={pb.isFirst}
        isLast={pb.isLast}
        accent="#FFE600"
        onPlay={() => {
          if (pb.isLast) {
            pb.reset();
            pb.setPlaying(true);
          } else {
            pb.setPlaying(true);
          }
        }}
        onPause={() => {
          pb.clearTimer();
          pb.setPlaying(false);
        }}
        onPrev={() => {
          pb.clearTimer();
          pb.setPlaying(false);
          pb.setStep((s) => Math.max(s - 1, 0));
        }}
        onNext={() => {
          pb.clearTimer();
          pb.setPlaying(false);
          pb.setStep((s) => Math.min(s + 1, stepCount - 1));
        }}
        onReset={pb.reset}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${resetKey}-${pb.step}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-2 border-black bg-black px-4 py-3 text-[15px] leading-relaxed text-white"
        >
          <span className="mr-2 font-mono text-xs font-bold text-white/50">{label}</span>
          {text}
        </motion.div>
      </AnimatePresence>
      {children(pb.step, pb.playing)}
    </div>
  );
}

function HeatmapTechnique({ data, accent, resetKey }: Props & { resetKey: string }) {
  const br = data.bicluster.rowIndices;
  const bc = data.bicluster.colIndices;
  const reorderedRows = [
    ...br,
    ...data.rows.map((_, i) => i).filter((i) => !br.includes(i)),
  ];
  const reorderedCols = [
    ...bc,
    ...data.cols.map((_, i) => i).filter((i) => !bc.includes(i)),
  ];

  const rowNames = br.map((i) => data.rows[i]).join(" & ");
  const colNames = bc.map((i) => data.cols[i]).join(" & ");

  const steps = useMemo(
    () => [
      {
        label: "Scattered",
        rowOrder: SCRAMBLED_ROWS,
        colOrder: SCRAMBLED_COLS,
        highlightRows: [] as number[],
        highlightCols: [] as number[],
        dimOutside: false,
        text: `Bicluster cells (${rowNames} × ${colNames}) are scattered — no rectangle yet.`,
      },
      {
        label: "Highlight",
        rowOrder: SCRAMBLED_ROWS,
        colOrder: SCRAMBLED_COLS,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: false,
        text: `Spot the bicluster rows and columns — but they still sit far apart in the grid.`,
      },
      {
        label: "Reorder rows",
        rowOrder: reorderedRows,
        colOrder: SCRAMBLED_COLS,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: false,
        text: `Slide bicluster rows together. Columns still shuffled.`,
      },
      {
        label: "Rectangle",
        rowOrder: reorderedRows,
        colOrder: reorderedCols,
        highlightRows: br,
        highlightCols: bc,
        dimOutside: true,
        text: `Now both axes reorder — a bright bicluster block appears on the full heatmap.`,
      },
    ],
    [br, bc, reorderedRows, reorderedCols, rowNames, colNames],
  );

  return (
    <VizPlaybackShell
      stepCount={steps.length}
      resetKey={resetKey}
      narration={(s) => ({ label: steps[s].label, text: steps[s].text })}
    >
      {(step) => {
        const st = steps[step];
        return (
          <motion.div layout className="flex justify-center overflow-x-auto">
            <RawDataTable
              data={data}
              accent={accent}
              scrambledRowOrder={st.rowOrder}
              scrambledColOrder={st.colOrder}
              highlightRows={st.highlightRows}
              highlightCols={st.highlightCols}
              dimOutside={st.dimOutside}
              animateCells
            />
          </motion.div>
        );
      }}
    </VizPlaybackShell>
  );
}

function polylineToPath(points: string): string {
  const coords = points.split(" ").map((p) => p.split(",").map(Number));
  if (coords.length === 0) return "";
  return (
    `M ${coords[0][0]} ${coords[0][1]} ` +
    coords
      .slice(1)
      .map(([x, y]) => `L ${x} ${y}`)
      .join(" ")
  );
}

function ParallelTechnique({ data, accent, resetKey }: Props & { resetKey: string }) {
  const color = accent ?? data.theme.accent;
  const br = new Set(data.bicluster.rowIndices);
  const bc = new Set(data.bicluster.colIndices);
  const w = 320;
  const h = 200;
  const padX = 36;
  const padY = 24;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;
  const colCount = data.cols.length;

  const xAt = (ci: number) => padX + (ci / (colCount - 1)) * innerW;
  const yAt = (v: number) => padY + innerH - ((v - 1) / 4) * innerH;

  const colNames = [...bc].map((i) => data.cols[i]).join(" & ");

  const steps = [
    {
      label: "Axes",
      text: "Each vertical axis is one column. One line will trace each row across all axes.",
      showAxes: true,
      showGrayLines: false,
      highlightAxes: false,
      showBiclusterLines: false,
      showDots: false,
    },
    {
      label: "All rows",
      text: "Every row draws in as a polyline — the matrix looks messy at first glance.",
      showAxes: true,
      showGrayLines: true,
      highlightAxes: false,
      showBiclusterLines: false,
      showDots: false,
    },
    {
      label: "Bicluster axes",
      text: `The bicluster columns (${colNames}) light up — watch where lines spike.`,
      showAxes: true,
      showGrayLines: true,
      highlightAxes: true,
      showBiclusterLines: false,
      showDots: false,
    },
    {
      label: "Pattern",
      text: "Bicluster rows spike together on the same axes — a joint pattern emerges.",
      showAxes: true,
      showGrayLines: true,
      highlightAxes: true,
      showBiclusterLines: true,
      showDots: true,
    },
  ];

  return (
    <VizPlaybackShell
      stepCount={steps.length}
      resetKey={resetKey}
      narration={(s) => ({ label: steps[s].label, text: steps[s].text })}
    >
      {(step) => {
        const st = steps[step];
        return (
          <div className="overflow-x-auto">
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md border-2 border-black bg-white">
              {st.showAxes &&
                data.cols.map((label, ci) => {
                  const x = xAt(ci);
                  const inBicluster = bc.has(ci);
                  const axisHot = st.highlightAxes && inBicluster;
                  return (
                    <g key={label}>
                      <motion.line
                        x1={x}
                        y1={padY}
                        x2={x}
                        y2={h - padY}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: 1,
                          stroke: axisHot ? "#FFE600" : "#CCC",
                          strokeWidth: axisHot ? 3 : 1,
                        }}
                        transition={{ duration: 0.5, delay: ci * 0.08 }}
                      />
                      <motion.text
                        x={x}
                        y={h - 6}
                        textAnchor="middle"
                        fontSize={9}
                        fontWeight={axisHot ? 700 : 400}
                        fill="#0A0A0A"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: axisHot ? [1, 1.08, 1] : 1 }}
                        transition={{
                          opacity: { delay: 0.3 + ci * 0.08 },
                          scale: axisHot ? { repeat: Infinity, duration: 1.8 } : {},
                        }}
                      >
                        {label.length > 8 ? label.slice(0, 7) + "…" : label}
                      </motion.text>
                    </g>
                  );
                })}
              {data.rows.map((rowLabel, ri) => {
                const inBicluster = br.has(ri);
                const points = data.matrix[ri]
                  .map((v, ci) => `${xAt(ci)},${yAt(v)}`)
                  .join(" ");
                const pathD = polylineToPath(points);
                const showLine =
                  (st.showGrayLines && !inBicluster) ||
                  (st.showBiclusterLines && inBicluster);
                const lineDelay = ri * 0.15;

                return (
                  <g key={rowLabel}>
                    {showLine && (
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke={inBicluster ? color : "#AAA"}
                        strokeWidth={inBicluster ? 2.5 : 1.2}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: inBicluster ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.9, delay: lineDelay, ease: "easeInOut" }}
                      />
                    )}
                    {st.showDots &&
                      data.matrix[ri].map((v, ci) =>
                        bc.has(ci) && br.has(ri) ? (
                          <motion.circle
                            key={ci}
                            cx={xAt(ci)}
                            cy={yAt(v)}
                            r={4}
                            fill={color}
                            stroke="#000"
                            strokeWidth={1}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                            transition={{ delay: lineDelay + 0.6 + ci * 0.1, duration: 0.35 }}
                          />
                        ) : null,
                      )}
                    <motion.text
                      x={4}
                      y={yAt(data.matrix[ri][0]) + 3}
                      fontSize={9}
                      fontWeight={inBicluster && st.showBiclusterLines ? 700 : 400}
                      fill="#0A0A0A"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + ri * 0.1 }}
                    >
                      {rowLabel}
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>
        );
      }}
    </VizPlaybackShell>
  );
}

function BipartiteTechnique({ data, accent, resetKey }: Props & { resetKey: string }) {
  const color = accent ?? data.theme.accent;
  const br = data.bicluster.rowIndices;
  const bc = data.bicluster.colIndices;
  const w = 360;
  const h = 220;
  const leftX = 56;
  const rightX = w - 56;
  const rowYs = data.rows.map((_, i) => 36 + (i / (data.rows.length - 1)) * (h - 72));
  const colYs = data.cols.map((_, i) => 36 + (i / (data.cols.length - 1)) * (h - 72));

  const edges = useMemo(() => {
    const list: { ri: number; ci: number; strong: boolean }[] = [];
    for (let ri = 0; ri < data.rows.length; ri++) {
      for (let ci = 0; ci < data.cols.length; ci++) {
        const inBlock = br.includes(ri) && bc.includes(ci);
        if (inBlock || data.matrix[ri][ci] >= 4) {
          list.push({ ri, ci, strong: inBlock });
        }
      }
    }
    return list;
  }, [data, br, bc]);

  const steps = [
    {
      label: "Nodes",
      text: `Rows (${data.rowLabel}) on the left, columns (${data.colLabel}) on the right — two node sets.`,
      showNodes: true,
      showFaintEdges: false,
      showStrongEdges: false,
      pulseBicluster: false,
    },
    {
      label: "Weak ties",
      text: "Faint edges show other strong connections elsewhere in the matrix.",
      showNodes: true,
      showFaintEdges: true,
      showStrongEdges: false,
      pulseBicluster: false,
    },
    {
      label: "Members",
      text: `Bicluster nodes for ${data.bicluster.label} light up on both sides.`,
      showNodes: true,
      showFaintEdges: true,
      showStrongEdges: false,
      pulseBicluster: true,
    },
    {
      label: "Membership",
      text: "Thick edges connect the exact row–column pairs inside the bicluster block.",
      showNodes: true,
      showFaintEdges: true,
      showStrongEdges: true,
      pulseBicluster: true,
    },
  ];

  return (
    <VizPlaybackShell
      stepCount={steps.length}
      resetKey={resetKey}
      narration={(s) => ({ label: steps[s].label, text: steps[s].text })}
    >
      {(step) => {
        const st = steps[step];
        return (
          <div className="overflow-x-auto">
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md border-2 border-black bg-white">
              <text x={leftX} y={16} textAnchor="middle" fontSize={10} fontWeight={700}>
                {data.rowLabel}
              </text>
              <text x={rightX} y={16} textAnchor="middle" fontSize={10} fontWeight={700}>
                {data.colLabel}
              </text>
              {edges.map(({ ri, ci, strong }, i) => {
                const show =
                  (st.showFaintEdges && !strong) || (st.showStrongEdges && strong);
                if (!show) return null;
                return (
                  <motion.line
                    key={`${ri}-${ci}`}
                    x1={leftX}
                    y1={rowYs[ri]}
                    x2={rightX}
                    y2={colYs[ci]}
                    stroke={strong ? color : "#DDD"}
                    strokeWidth={strong ? 2.5 : 0.8}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: strong ? 0.9 : 0.35,
                    }}
                    transition={{
                      duration: strong ? 0.5 : 0.35,
                      delay: i * (strong ? 0.12 : 0.04),
                      ease: "easeOut",
                    }}
                  />
                );
              })}
              {st.showNodes &&
                data.rows.map((label, i) => {
                  const active = br.includes(i);
                  const hot = active && st.pulseBicluster;
                  return (
                    <g key={label}>
                      <motion.circle
                        cx={leftX}
                        cy={rowYs[i]}
                        r={active && st.pulseBicluster ? 10 : 7}
                        fill={active && st.pulseBicluster ? color : "#F0F0F0"}
                        stroke="#000"
                        strokeWidth={2}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hot ? [1, 1.12, 1] : 1,
                          opacity: 1,
                        }}
                        transition={{
                          scale: hot
                            ? { repeat: Infinity, duration: 1.6, delay: 0.3 }
                            : { type: "spring", stiffness: 260, delay: i * 0.08 },
                          opacity: { delay: i * 0.08 },
                        }}
                      />
                      <motion.text
                        x={leftX - 18}
                        y={rowYs[i] + 4}
                        textAnchor="end"
                        fontSize={10}
                        fontWeight={active && st.pulseBicluster ? 700 : 400}
                        fill="#0A0A0A"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        {label}
                      </motion.text>
                    </g>
                  );
                })}
              {st.showNodes &&
                data.cols.map((label, i) => {
                  const active = bc.includes(i);
                  const hot = active && st.pulseBicluster;
                  return (
                    <g key={label}>
                      <motion.circle
                        cx={rightX}
                        cy={colYs[i]}
                        r={active && st.pulseBicluster ? 10 : 7}
                        fill={active && st.pulseBicluster ? "#FFE600" : "#F0F0F0"}
                        stroke="#000"
                        strokeWidth={2}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hot ? [1, 1.12, 1] : 1,
                          opacity: 1,
                        }}
                        transition={{
                          scale: hot
                            ? { repeat: Infinity, duration: 1.6, delay: 0.4 }
                            : { type: "spring", stiffness: 260, delay: 0.2 + i * 0.08 },
                          opacity: { delay: 0.2 + i * 0.08 },
                        }}
                      />
                      <motion.text
                        x={rightX + 18}
                        y={colYs[i] + 4}
                        textAnchor="start"
                        fontSize={10}
                        fontWeight={active && st.pulseBicluster ? 700 : 400}
                        fill="#0A0A0A"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 + i * 0.08 }}
                      >
                        {label}
                      </motion.text>
                    </g>
                  );
                })}
            </svg>
          </div>
        );
      }}
    </VizPlaybackShell>
  );
}

function InsetTechnique({ data, accent, resetKey }: Props & { resetKey: string }) {
  const viz = useMemo(
    () => teachingToVizData({ ...data, theme: { ...data.theme, accent: accent ?? data.theme.accent } }),
    [data, accent],
  );
  const br = viz.biclusterRowIndices;
  const bc = viz.biclusterColIndices;
  const allRows = viz.rows.map((_, i) => i);
  const allCols = viz.cols.map((_, i) => i);
  const reorderedRows = [...br, ...allRows.filter((i) => !br.includes(i))];
  const reorderedCols = [...bc, ...allCols.filter((i) => !bc.includes(i))];

  const steps = [
    {
      label: "Full context",
      dimOutside: false,
      showInset: false,
      text: "The full reordered heatmap stays visible — you never lose the global picture.",
    },
    {
      label: "Dim outside",
      dimOutside: true,
      showInset: false,
      text: "Fade cells outside the bicluster so the block stands out on the full matrix.",
    },
    {
      label: "Border",
      dimOutside: true,
      showInset: false,
      text: `A thick border marks the ${viz.biclusterLabel} block — same as the Explore heatmap highlight.`,
    },
    {
      label: "Inset zoom",
      dimOutside: true,
      showInset: true,
      text: "Pull out an enlarged inset of just the submatrix — context and detail side by side.",
    },
  ];

  const cellSize = 40;
  const gap = 2;
  const borderW = bc.length * (cellSize + gap) - gap;
  const borderH = br.length * (cellSize + gap) - gap;

  return (
    <VizPlaybackShell
      stepCount={steps.length}
      resetKey={resetKey}
      narration={(s) => ({ label: steps[s].label, text: steps[s].text })}
    >
      {(step) => {
        const st = steps[step];
        const showBorder = step >= 2;
        return (
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="relative inline-block">
              <MiniBiclusterMatrix
                viz={viz}
                rowOrder={reorderedRows}
                colOrder={reorderedCols}
                highlightRows={br}
                highlightCols={bc}
                dimOutside={st.dimOutside}
                cellSize={cellSize}
              />
              {showBorder && (
                <motion.div
                  className="pointer-events-none absolute border-4 border-black"
                  style={{ left: 44, top: 18, width: borderW, height: borderH }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              )}
            </div>
            <AnimatePresence>
              {st.showInset ? (
                <motion.div
                  key="inset"
                  initial={{ opacity: 0, scale: 0.5, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="border-2 border-black bg-[#FFF9D6] p-4"
                >
                  <p className="mb-2 text-xs font-bold uppercase text-[#888]">Inset · {viz.biclusterLabel}</p>
                  <MiniBiclusterMatrix
                    viz={viz}
                    rowOrder={br}
                    colOrder={bc}
                    highlightRows={br}
                    highlightCols={bc}
                    cellSize={52}
                    showLabels
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  className="flex min-h-[160px] items-center justify-center border-2 border-dashed border-black/30 p-4 text-center text-sm text-[#888]"
                >
                  Inset appears in step 4
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </VizPlaybackShell>
  );
}

const TECHNIQUE_VIEWS: Record<
  BiclusterVizTechniqueId,
  (props: Props & { resetKey: string }) => ReactElement
> = {
  heatmap: HeatmapTechnique,
  parallel: ParallelTechnique,
  bipartite: BipartiteTechnique,
  inset: InsetTechnique,
};

export function BiclusterVizPanel({ data, accent = "#FFE600" }: Props) {
  const [active, setActive] = useState<BiclusterVizTechniqueId>("heatmap");
  const technique = BICLUSTER_VIZ_TECHNIQUES.find((t) => t.id === active)!;
  const View = TECHNIQUE_VIEWS[active];
  const resetKey = `${data.id}-${active}`;

  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-black bg-[#FFF9D6] p-4 md:p-5"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-[#888]">Core challenge</p>
        <h3 className="mt-1 text-lg font-bold">{BICLUSTER_VIZ_PROBLEM.headline}</h3>
        <p className="readable mt-2 text-[15px] text-[#333]">{BICLUSTER_VIZ_PROBLEM.body}</p>
      </motion.div>

      <div>
        <p className="text-xs font-semibold text-[#5c5c5c]">Four visualization techniques</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {BICLUSTER_VIZ_TECHNIQUES.map((t) => {
            const selected = active === t.id;
            return (
              <motion.button
                key={t.id}
                layout
                onClick={() => setActive(t.id)}
                className="border-2 border-black px-3 py-2.5 text-left text-sm font-bold"
                style={{
                  backgroundColor: selected ? accent : "#FFF",
                  color: "#0A0A0A",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ layout: { duration: 0.2 } }}
              >
                <span className="block">{t.title}</span>
                <span className="block text-[11px] font-normal opacity-70">{t.subtitle}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.28 }}
          className="border-2 border-black bg-white p-4 md:p-5"
        >
          <p className="text-sm font-bold">
            <TermButton termId={technique.termId}>{technique.title}</TermButton>
          </p>
          <p className="readable mt-2 text-[15px] text-[#444]">{technique.description}</p>
          <div className="mt-4">
            <View data={data} accent={accent} resetKey={resetKey} />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-2">
        {BICLUSTER_VIZ_TECHNIQUES.map((t) => (
          <motion.div
            key={t.id}
            layout
            className="border-2 border-black px-3 py-2 text-xs"
            animate={{
              backgroundColor: active === t.id ? `${accent}44` : "#FAFAFA",
            }}
            transition={{ duration: 0.25 }}
          >
            <span className="font-bold">{t.title}</span>
            <span className="text-[#666]"> — {t.subtitle}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
