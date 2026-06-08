"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import type { ScatterAxes, ScatterPoint, ScatterPurposeId } from "@/lib/scatterplot-purposes";

const CLUSTER_COLORS = ["#FF2D6B", "#0066FF", "#FFE600", "#00E5A0"];

type Props = {
  purpose: ScatterPurposeId;
  points: ScatterPoint[];
  axes: ScatterAxes;
  accent: string;
  yMax?: number;
  xMax?: number;
};

export function ScatterPurposeChart({
  purpose,
  points,
  axes,
  accent,
  yMax = 10,
  xMax = 10,
}: Props) {
  const w = 340;
  const h = 260;
  const pad = 44;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const xMin = 0;
  const yMin = 0;

  const xAt = (v: number) => pad + ((v - xMin) / (xMax - xMin)) * innerW;
  const yAt = (v: number) => pad + innerH - ((v - yMin) / (yMax - yMin)) * innerH;

  const trend = useMemo(() => {
    const n = points.length;
    const mx = points.reduce((s, p) => s + p.x, 0) / n;
    const my = points.reduce((s, p) => s + p.y, 0) / n;
    let num = 0;
    let den = 0;
    for (const p of points) {
      num += (p.x - mx) * (p.y - my);
      den += (p.x - mx) ** 2;
    }
    const slope = den === 0 ? 0 : num / den;
    const intercept = my - slope * mx;
    return {
      x1: xMin,
      y1: slope * xMin + intercept,
      x2: xMax,
      y2: slope * xMax + intercept,
    };
  }, [points, xMin, xMax]);

  const clusterStats = useMemo(() => {
    const map = new Map<number, ScatterPoint[]>();
    for (const p of points) {
      const list = map.get(p.cluster) ?? [];
      list.push(p);
      map.set(p.cluster, list);
    }
    return [...map.entries()].map(([ci, pts]) => {
      const mx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
      const my = pts.reduce((s, p) => s + p.y, 0) / pts.length;
      const rx = Math.max(...pts.map((p) => Math.abs(p.x - mx))) + 0.35;
      const ry = Math.max(...pts.map((p) => Math.abs(p.y - my))) + 0.35;
      return { ci, mx, my, rx, ry };
    });
  }, [points]);

  const ticks = [0, 2, 4, 6, 8, 10].filter((t) => t <= xMax && t <= yMax);

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md border-2 border-black bg-white">
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={pad} y1={yAt(tick)} x2={w - pad} y2={yAt(tick)} stroke="#EEE" strokeWidth={1} />
            <line x1={xAt(tick)} y1={pad} x2={xAt(tick)} y2={h - pad} stroke="#EEE" strokeWidth={1} />
            <text x={pad - 6} y={yAt(tick) + 3} textAnchor="end" fontSize={8} fill="#888">
              {tick}
            </text>
            <text x={xAt(tick)} y={h - pad + 14} textAnchor="middle" fontSize={8} fill="#888">
              {tick}
            </text>
          </g>
        ))}
        <text x={w / 2} y={h - 6} textAnchor="middle" fontSize={10} fontWeight={700}>
          {axes.xLabel}
        </text>
        <text
          x={12}
          y={h / 2}
          textAnchor="middle"
          fontSize={10}
          fontWeight={700}
          transform={`rotate(-90 12 ${h / 2})`}
        >
          {axes.yLabel}
        </text>

        {purpose === "correlation" && (
          <motion.line
            x1={xAt(trend.x1)}
            y1={yAt(trend.y1)}
            x2={xAt(trend.x2)}
            y2={yAt(trend.y2)}
            stroke={accent}
            strokeWidth={2.5}
            strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}

        {purpose === "clusters" &&
          clusterStats.map(({ ci, mx, my, rx, ry }) => (
            <motion.ellipse
              key={ci}
              cx={xAt(mx)}
              cy={yAt(my)}
              rx={rx * (innerW / (xMax - xMin))}
              ry={ry * (innerH / (yMax - yMin))}
              fill={CLUSTER_COLORS[ci % CLUSTER_COLORS.length]}
              fillOpacity={0.12}
              stroke={CLUSTER_COLORS[ci % CLUSTER_COLORS.length]}
              strokeWidth={2}
              strokeDasharray="4 3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + ci * 0.15, type: "spring" }}
            />
          ))}

        {purpose === "distribution" &&
          clusterStats.map(({ ci, mx, my, rx, ry }) => (
            <motion.rect
              key={ci}
              x={xAt(mx - rx)}
              y={yAt(my + ry)}
              width={rx * 2 * (innerW / (xMax - xMin))}
              height={ry * 2 * (innerH / (yMax - yMin))}
              fill="none"
              stroke="#0A0A0A"
              strokeWidth={1.5}
              strokeOpacity={0.35}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 + ci * 0.12 }}
            />
          ))}

        {points.map((p, i) => {
          const color = CLUSTER_COLORS[p.cluster % CLUSTER_COLORS.length];
          const isOutlier = purpose === "outliers" && p.outlier;
          const dim = purpose === "outliers" && !p.outlier;
          const showLabel = purpose !== "distribution" || !!p.outlier;

          return (
            <g key={p.id}>
              {isOutlier && (
                <motion.circle
                  cx={xAt(p.x)}
                  cy={yAt(p.y)}
                  r={16}
                  fill="none"
                  stroke="#FF0040"
                  strokeWidth={2}
                  animate={{ scale: [1, 1.2, 1], opacity: 0.7 }}
                  transition={{ repeat: Infinity, duration: 1.6, delay: 0.4 }}
                />
              )}
              <motion.circle
                cx={xAt(p.x)}
                cy={yAt(p.y)}
                r={isOutlier ? 8 : purpose === "clusters" ? 7 : 6}
                fill={purpose === "correlation" ? accent : color}
                stroke="#000"
                strokeWidth={2}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: dim ? 0.3 : 1 }}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260 }}
              />
              {showLabel && (
                <motion.text
                  x={xAt(p.x)}
                  y={yAt(p.y) - 12}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={700}
                  animate={{ opacity: dim ? 0.35 : 1 }}
                >
                  {p.id}
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
