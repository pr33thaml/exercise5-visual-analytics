"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ANIM_DURATION_S,
  ANIM_STAGGER_S,
  useBeforeAfterLoop,
} from "@/hooks/useBeforeAfterLoop";
import {
  CLUTTER_APPROACHES,
  CLUTTER_CATEGORIES,
  type ClutterApproachId,
} from "@/lib/scatterplot-clutter";
import { DENSE_AXES, generateDensePoints, type DensePoint } from "@/lib/scatter-demo-data";
import { TermButton } from "@/components/glossary/TermButton";

type Props = { accent?: string };

const CLUSTER_COLORS = ["#FF2D6B", "#0066FF", "#00B4A0"];

function hexbinCellCount(pts: DensePoint[]) {
  const bins = new Set<string>();
  for (const p of pts) {
    const c = Math.min(11, Math.floor((p.x / 10) * 12));
    const r = Math.min(9, Math.floor((1 - p.y / 10) * 10));
    bins.add(`${c}-${r}`);
  }
  return bins.size;
}

function plotCoords(w: number, h: number, pad: number) {
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  return {
    xAt: (v: number) => pad + (v / 10) * innerW,
    yAt: (v: number) => pad + innerH - (v / 10) * innerH,
  };
}

function PlotFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold text-[#888]">{label}</p>
      {children}
    </div>
  );
}

function DenseScatter({
  pts,
  accent,
  opaque = true,
  alpha = 0.12,
  filterCluster,
  sampleEvery,
  animKey = 0,
}: {
  pts: DensePoint[];
  accent: string;
  opaque?: boolean;
  alpha?: number;
  filterCluster?: number;
  sampleEvery?: number;
  animKey?: number | string;
}) {
  const w = 340;
  const h = 260;
  const pad = 40;
  const { xAt, yAt } = plotCoords(w, h, pad);

  const visible = pts.filter((p, i) => {
    if (sampleEvery && i % sampleEvery !== 0) return false;
    if (filterCluster !== undefined && p.cluster !== filterCluster) return false;
    return true;
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md border-2 border-black bg-white">
      <text x={w / 2} y={h - 6} textAnchor="middle" fontSize={9} fontWeight={700}>
        {DENSE_AXES.xLabel}
      </text>
      {pts.map((p, i) => {
        const filtered = filterCluster !== undefined && p.cluster !== filterCluster;
        const sampled = sampleEvery && i % sampleEvery !== 0;
        if (filtered || sampled) {
          if (filterCluster === undefined && !sampleEvery) return null;
          if (filtered) {
            return (
              <circle
                key={i}
                cx={xAt(p.x)}
                cy={yAt(p.y)}
                r={2}
                fill="#DDD"
                opacity={0.15}
              />
            );
          }
          return null;
        }
        const color = CLUSTER_COLORS[p.cluster % CLUSTER_COLORS.length];
        return (
          <motion.circle
            key={`${animKey}-${i}`}
            cx={xAt(p.x)}
            cy={yAt(p.y)}
            r={opaque ? 4 : 3}
            fill={opaque ? accent : color}
            fillOpacity={opaque ? 1 : alpha}
            stroke={opaque ? "#000" : "none"}
            strokeWidth={opaque ? 1 : 0}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * ANIM_STAGGER_S, duration: ANIM_DURATION_S }}
          />
        );
      })}
      {!opaque && (
        <text x={pad} y={pad + 12} fontSize={8} fill="#666">
          α = {alpha} per point · n = {visible.length}
        </text>
      )}
      {sampleEvery && (
        <text x={pad} y={pad + 12} fontSize={8} fill="#666">
          n = {visible.length} sampled (every {sampleEvery}th)
        </text>
      )}
      {filterCluster !== undefined && (
        <text x={pad} y={pad + 12} fontSize={8} fill="#666">
          cluster {filterCluster} only · n = {visible.length}
        </text>
      )}
    </svg>
  );
}

function BinnedScatter({
  pts,
  accent,
  animKey = 0,
}: {
  pts: DensePoint[];
  accent: string;
  animKey?: number | string;
}) {
  const w = 340;
  const h = 260;
  const pad = 40;
  const cols = 12;
  const rows = 10;
  const cellW = (w - pad * 2) / cols;
  const cellH = (h - pad * 2) / rows;
  const bins = new Map<string, number>();

  for (const p of pts) {
    const c = Math.min(cols - 1, Math.floor((p.x / 10) * cols));
    const r = Math.min(rows - 1, Math.floor((1 - p.y / 10) * rows));
    const k = `${c}-${r}`;
    bins.set(k, (bins.get(k) ?? 0) + 1);
  }
  const max = Math.max(...bins.values(), 1);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md border-2 border-black bg-white">
      {[...bins.entries()].map(([k, count], i) => {
        const [c, r] = k.split("-").map(Number);
        const t = count / max;
        return (
          <motion.rect
            key={`${animKey}-${k}`}
            x={pad + c * cellW}
            y={pad + r * cellH}
            width={cellW - 1}
            height={cellH - 1}
            fill={accent}
            fillOpacity={0.15 + t * 0.85}
            stroke="#000"
            strokeWidth={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.012, duration: ANIM_DURATION_S }}
          />
        );
      })}
      <text x={pad} y={pad + 12} fontSize={8} fill="#666">
        hexbin · cell colour = count
      </text>
    </svg>
  );
}

function BeforeAfterDemo({
  method,
  beforeLabel,
  afterLabel,
  beforeCount,
  afterCount,
  renderBefore,
  renderAfter,
}: {
  method: ClutterApproachId;
  beforeLabel: string;
  afterLabel: string;
  beforeCount: number;
  afterCount: number;
  renderBefore: (animKey: string) => React.ReactNode;
  renderAfter: (animKey: string) => React.ReactNode;
}) {
  const { cycle, showAfter } = useBeforeAfterLoop(method, beforeCount, afterCount);
  const beforeKey = `${cycle}-before`;
  const afterKey = `${cycle}-after`;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <PlotFrame label={beforeLabel}>{renderBefore(beforeKey)}</PlotFrame>
      <PlotFrame label={afterLabel}>
        <AnimatePresence mode="wait">
          {showAfter ? (
            <motion.div
              key={afterKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            >
              {renderAfter(afterKey)}
            </motion.div>
          ) : (
            <motion.div
              key={beforeKey}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            >
              {renderBefore(beforeKey)}
            </motion.div>
          )}
        </AnimatePresence>
      </PlotFrame>
    </div>
  );
}

function MethodDemo({ method, pts, accent }: { method: ClutterApproachId; pts: DensePoint[]; accent: string }) {
  switch (method) {
    case "sampling":
      return (
        <BeforeAfterDemo
          method={method}
          beforeLabel="Before: all 140 points"
          afterLabel="After: sampling (every 4th point)"
          beforeCount={140}
          afterCount={35}
          renderBefore={(k) => <DenseScatter pts={pts} accent={accent} opaque animKey={k} />}
          renderAfter={(k) => (
            <DenseScatter pts={pts} accent={accent} opaque sampleEvery={4} animKey={k} />
          )}
        />
      );
    case "filtering":
      return (
        <BeforeAfterDemo
          method={method}
          beforeLabel="Before: all clusters shown"
          afterLabel="After: filter to cluster 0 only"
          beforeCount={140}
          afterCount={47}
          renderBefore={(k) => <DenseScatter pts={pts} accent={accent} opaque animKey={k} />}
          renderAfter={(k) => (
            <DenseScatter pts={pts} accent={accent} opaque filterCluster={0} animKey={k} />
          )}
        />
      );
    case "transparency":
      return (
        <BeforeAfterDemo
          method={method}
          beforeLabel="Before: opaque overplotting"
          afterLabel="After: alpha blending"
          beforeCount={140}
          afterCount={140}
          renderBefore={(k) => <DenseScatter pts={pts} accent={accent} opaque animKey={k} />}
          renderAfter={(k) => (
            <DenseScatter pts={pts} accent={accent} opaque={false} animKey={k} />
          )}
        />
      );
    case "hexbin":
      return (
        <BeforeAfterDemo
          method={method}
          beforeLabel="Before: individual points"
          afterLabel="After: hexbin aggregation"
          beforeCount={140}
          afterCount={hexbinCellCount(pts)}
          renderBefore={(k) => <DenseScatter pts={pts} accent={accent} opaque animKey={k} />}
          renderAfter={(k) => <BinnedScatter pts={pts} accent={accent} animKey={k} />}
        />
      );
  }
}

export function ScatterClutterPanel({ accent = "#0066FF" }: Props) {
  const [active, setActive] = useState<ClutterApproachId>("sampling");
  const pts = useMemo(() => generateDensePoints(140), []);
  const approach = CLUTTER_APPROACHES.find((a) => a.id === active)!;
  const catInfo = CLUTTER_CATEGORIES[approach.category];

  const reduceMethods = CLUTTER_APPROACHES.filter((a) => a.category === "reduce");
  const changeMethods = CLUTTER_APPROACHES.filter((a) => a.category === "change");

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border-2 border-black bg-[#F5F8FF] p-3">
          <p className="text-xs font-bold">{CLUTTER_CATEGORIES.reduce.label}</p>
          <p className="mt-1 text-[11px] text-[#666]">{CLUTTER_CATEGORIES.reduce.summary}</p>
          <div className="mt-2 flex flex-col gap-1.5">
            {reduceMethods.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className="border-2 border-black px-2 py-2 text-left text-xs font-bold"
                style={{
                  backgroundColor: active === a.id ? accent : "#FFF",
                  color: "#0A0A0A",
                }}
              >
                {a.title}
              </button>
            ))}
          </div>
        </div>
        <div className="border-2 border-black bg-[#F5F8FF] p-3">
          <p className="text-xs font-bold">{CLUTTER_CATEGORIES.change.label}</p>
          <p className="mt-1 text-[11px] text-[#666]">{CLUTTER_CATEGORIES.change.summary}</p>
          <div className="mt-2 flex flex-col gap-1.5">
            {changeMethods.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className="border-2 border-black px-2 py-2 text-left text-xs font-bold"
                style={{
                  backgroundColor: active === a.id ? accent : "#FFF",
                  color: "#0A0A0A",
                }}
              >
                {a.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-2 border-black bg-white p-4 md:p-5"
        >
          <p className="text-xs font-semibold text-[#888]">{catInfo.label}</p>
          <p className="mt-2 text-base font-bold">
            <TermButton termId={approach.termId}>{approach.title}</TermButton>
          </p>
          <p className="readable mt-2 text-[15px] text-[#333]">{approach.description}</p>
          <p className="readable mt-2 text-sm text-[#666]">{approach.example}</p>
          <div className="mt-4">
            <MethodDemo method={active} pts={pts} accent={accent} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
