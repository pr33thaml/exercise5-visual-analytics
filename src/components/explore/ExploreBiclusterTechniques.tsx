"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dataset } from "@/lib/types";
import {
  BICLUSTER_VIZ_TECHNIQUES,
  type BiclusterVizData,
  type BiclusterVizTechniqueId,
} from "@/lib/bicluster-viz";
import { datasetToVizData } from "@/lib/bicluster-viz-data";
import { MiniBiclusterMatrix } from "@/components/bicluster/MiniBiclusterMatrix";
import { TermButton } from "@/components/glossary/TermButton";

const EXPLORE_TECHNIQUE_IDS = ["heatmap", "parallel", "bipartite", "inset"] as const;
type ExploreTechniqueId = (typeof EXPLORE_TECHNIQUE_IDS)[number];

function reorderedIndices(viz: BiclusterVizData) {
  const br = viz.biclusterRowIndices;
  const bc = viz.biclusterColIndices;
  const allRows = viz.rows.map((_, i) => i);
  const allCols = viz.cols.map((_, i) => i);
  return {
    br,
    bc,
    reorderedRows: [...br, ...allRows.filter((i) => !br.includes(i))],
    reorderedCols: [...bc, ...allCols.filter((i) => !bc.includes(i))],
  };
}

function ExploreHeatmap({ viz }: { viz: BiclusterVizData }) {
  const { br, bc, reorderedRows, reorderedCols } = reorderedIndices(viz);
  const cellSize = 20;
  const gap = 2;
  const borderW = bc.length * (cellSize + gap) - gap;
  const borderH = br.length * (cellSize + gap) - gap;

  return (
    <div className="relative inline-block overflow-x-auto">
      <MiniBiclusterMatrix
        viz={viz}
        rowOrder={reorderedRows}
        colOrder={reorderedCols}
        highlightRows={br}
        highlightCols={bc}
        dimOutside
        cellSize={cellSize}
        showLabels
      />
      <motion.div
        className="pointer-events-none absolute border-4 border-black"
        style={{ left: 44, top: 18, width: borderW, height: borderH }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
    </div>
  );
}

function ExploreParallel({ viz }: { viz: BiclusterVizData }) {
  const br = new Set(viz.biclusterRowIndices);
  const bc = new Set(viz.biclusterColIndices);
  const high = viz.valueHigh ?? 1;
  const w = 420;
  const h = 220;
  const padX = 28;
  const padY = 16;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;
  const n = viz.cols.length;

  const xAt = (ci: number) => padX + (ci / Math.max(n - 1, 1)) * innerW;
  const yAt = (v: number) => {
    const t = high <= 1 ? v : (v - 1) / (high - 1);
    return padY + innerH - t * innerH;
  };

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full min-w-[320px] border-2 border-black bg-white">
        {viz.cols.map((label, ci) => {
          const hot = bc.has(ci);
          return (
            <g key={label}>
              <line
                x1={xAt(ci)}
                y1={padY}
                x2={xAt(ci)}
                y2={h - padY}
                stroke={hot ? "#FFE600" : "#CCC"}
                strokeWidth={hot ? 2.5 : 0.8}
              />
              <text
                x={xAt(ci)}
                y={h - 4}
                textAnchor="middle"
                fontSize={7}
                fontWeight={hot ? 700 : 400}
                transform={`rotate(-40 ${xAt(ci)} ${h - 4})`}
              >
                {label.slice(0, 8)}
              </text>
            </g>
          );
        })}
        {viz.rows.map((rowLabel, ri) => {
          const inB = br.has(ri);
          const d = viz.matrix[ri]
            .map((v, ci) => `${ci === 0 ? "M" : "L"} ${xAt(ci)} ${yAt(v)}`)
            .join(" ");
          return (
            <motion.path
              key={rowLabel}
              d={d}
              fill="none"
              stroke={inB ? viz.accent : "#BBB"}
              strokeWidth={inB ? 1.8 : 0.6}
              strokeOpacity={inB ? 0.9 : 0.25}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: ri * 0.04 }}
            />
          );
        })}
      </svg>
    </div>
  );
}

function ExploreBipartite({ viz }: { viz: BiclusterVizData }) {
  const br = viz.biclusterRowIndices;
  const bc = viz.biclusterColIndices;
  const high = viz.valueHigh ?? 1;
  const w = 400;
  const h = 240;
  const leftX = 48;
  const rightX = w - 48;
  const rowYs = viz.rows.map((_, i) => 28 + (i / Math.max(viz.rows.length - 1, 1)) * (h - 56));
  const colYs = viz.cols.map((_, i) => 28 + (i / Math.max(viz.cols.length - 1, 1)) * (h - 56));

  const edges: { ri: number; ci: number; strong: boolean }[] = [];
  for (let ri = 0; ri < viz.rows.length; ri++) {
    for (let ci = 0; ci < viz.cols.length; ci++) {
      const strong = br.includes(ri) && bc.includes(ci);
      const v = viz.matrix[ri][ci];
      const hot = high <= 1 ? v >= 0.85 : v >= 4;
      if (strong || hot) edges.push({ ri, ci, strong });
    }
  }

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full min-w-[300px] border-2 border-black bg-white">
        <text x={leftX} y={14} textAnchor="middle" fontSize={9} fontWeight={700}>
          {viz.rowLabel}
        </text>
        <text x={rightX} y={14} textAnchor="middle" fontSize={9} fontWeight={700}>
          {viz.colLabel}
        </text>
        {edges.map(({ ri, ci, strong }, i) => (
          <motion.line
            key={`${ri}-${ci}`}
            x1={leftX}
            y1={rowYs[ri]}
            x2={rightX}
            y2={colYs[ci]}
            stroke={strong ? viz.accent : "#DDD"}
            strokeWidth={strong ? 2 : 0.5}
            strokeOpacity={strong ? 0.85 : 0.2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: i * 0.015, duration: 0.3 }}
          />
        ))}
        {viz.rows.map((label, i) => {
          const active = br.includes(i);
          return (
            <g key={label}>
              <circle
                cx={leftX}
                cy={rowYs[i]}
                r={active ? 6 : 4}
                fill={active ? viz.accent : "#EEE"}
                stroke="#000"
                strokeWidth={1.5}
              />
              <text x={leftX - 8} y={rowYs[i] + 3} textAnchor="end" fontSize={7} fontWeight={active ? 700 : 400}>
                {label}
              </text>
            </g>
          );
        })}
        {viz.cols.map((label, i) => {
          const active = bc.includes(i);
          return (
            <g key={label}>
              <circle
                cx={rightX}
                cy={colYs[i]}
                r={active ? 6 : 4}
                fill={active ? "#FFE600" : "#EEE"}
                stroke="#000"
                strokeWidth={1.5}
              />
              <text x={rightX + 8} y={colYs[i] + 3} textAnchor="start" fontSize={7} fontWeight={active ? 700 : 400}>
                {label.slice(0, 8)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ExploreInset({ viz }: { viz: BiclusterVizData }) {
  const { br, bc, reorderedRows, reorderedCols } = reorderedIndices(viz);

  return (
    <div className="grid items-start gap-3 md:grid-cols-2">
      <div className="overflow-x-auto">
        <MiniBiclusterMatrix
          viz={viz}
          rowOrder={reorderedRows}
          colOrder={reorderedCols}
          highlightRows={br}
          highlightCols={bc}
          dimOutside
          cellSize={20}
        />
      </div>
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="border-2 border-black bg-[#FFF9D6] p-3"
      >
        <p className="mb-2 text-xs font-bold">{viz.biclusterLabel}</p>
        <MiniBiclusterMatrix
          viz={viz}
          rowOrder={br}
          colOrder={bc}
          highlightRows={br}
          highlightCols={bc}
          cellSize={32}
        />
      </motion.div>
    </div>
  );
}

const EXPLORE_VIEWS: {
  [K in ExploreTechniqueId]: (props: { viz: BiclusterVizData }) => React.ReactNode;
} = {
  heatmap: ExploreHeatmap,
  parallel: ExploreParallel,
  bipartite: ExploreBipartite,
  inset: ExploreInset,
};

export function ExploreBiclusterTechniques({ dataset }: { dataset: Dataset }) {
  const [technique, setTechnique] = useState<BiclusterVizTechniqueId>("heatmap");
  const viz = useMemo(() => datasetToVizData(dataset), [dataset]);
  const techniques = BICLUSTER_VIZ_TECHNIQUES.filter((t) =>
    (EXPLORE_TECHNIQUE_IDS as readonly string[]).includes(t.id),
  );
  const info = techniques.find((t) => t.id === technique)!;
  const View = EXPLORE_VIEWS[technique as ExploreTechniqueId];

  return (
    <div className="border-2 border-black bg-white">
      <div className="border-b-2 border-black bg-[#FFF9D6] px-4 py-3">
        <p className="font-bold">Bicluster visualization techniques</p>
        <p className="text-sm text-[#5c5c5c]">
          Four ways to show biclusters on the full {dataset.title} matrix — switch below:
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 border-b-2 border-black p-2 md:grid-cols-4">
        {techniques.map((t) => {
          const selected = technique === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTechnique(t.id)}
              className="border-2 border-black px-2 py-2 text-left text-xs font-bold"
              style={{
                backgroundColor: selected ? dataset.theme.secondary : "#FFF",
                color: "#0A0A0A",
              }}
            >
              <span className="block">{t.title}</span>
              <span className="block font-normal opacity-70">{t.subtitle}</span>
            </button>
          );
        })}
      </div>
      <div className="p-4">
        <p className="text-sm font-bold">
          <TermButton termId={info.termId}>{info.title}</TermButton>
        </p>
        <p className="readable mt-1 text-sm text-[#555]">{info.description}</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={technique}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex justify-center overflow-x-auto"
          >
            <View viz={viz} />
          </motion.div>
        </AnimatePresence>
        <p className="mt-3 text-center text-xs text-[#888]">
          Step-by-step animated walkthroughs for these techniques are in{" "}
          <span className="font-semibold">Q2 · Bicluster viz</span>.
        </p>
      </div>
    </div>
  );
}
