"use client";

import { motion } from "framer-motion";
import type { BiclusterVizData } from "@/lib/bicluster-viz";

type Props = {
  viz: BiclusterVizData;
  rowOrder: number[];
  colOrder: number[];
  highlightRows?: number[];
  highlightCols?: number[];
  dimOutside?: boolean;
  cellSize?: number;
  showLabels?: boolean;
  animate?: boolean;
};

function cellColor(v: number, accent: string, high: number) {
  const t = high <= 1 ? v : v / high;
  if (t >= 0.75) return accent;
  if (t >= 0.45) return "#FFD23F";
  return "#E8E8E8";
}

export function MiniBiclusterMatrix({
  viz,
  rowOrder,
  colOrder,
  highlightRows = [],
  highlightCols = [],
  dimOutside = false,
  cellSize = 36,
  showLabels = true,
  animate = true,
}: Props) {
  const high = viz.valueHigh ?? 1;
  const br = new Set(highlightRows);
  const bc = new Set(highlightCols);
  const gap = 2;

  const isBlock = (ri: number, ci: number) => br.has(ri) && bc.has(ci);

  return (
    <div className="inline-block">
      {showLabels && (
        <div className="flex" style={{ marginLeft: 44, marginBottom: 4, gap }}>
          {colOrder.map((ci) => (
            <span
              key={viz.cols[ci]}
              className="truncate text-center text-[9px] font-bold"
              style={{
                width: cellSize,
                color: bc.has(ci) ? viz.accent : "#888",
              }}
            >
              {viz.cols[ci].length > 6 ? viz.cols[ci].slice(0, 5) + "…" : viz.cols[ci]}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-1">
        {showLabels && (
          <div className="flex w-10 flex-col" style={{ gap }}>
            {rowOrder.map((ri) => (
              <span
                key={viz.rows[ri]}
                className="flex items-center justify-end pr-1 text-[9px] font-bold"
                style={{ height: cellSize, color: br.has(ri) ? "#0A0A0A" : "#888" }}
              >
                {viz.rows[ri]}
              </span>
            ))}
          </div>
        )}
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${colOrder.length}, ${cellSize}px)`,
            gap,
          }}
        >
          {rowOrder.map((ri, dr) =>
            colOrder.map((ci, dc) => {
              const v = viz.matrix[ri][ci];
              const block = isBlock(ri, ci);
              const dim = dimOutside && !block;
              const Cell = animate ? motion.div : "div";
              return (
                <Cell
                  key={`${ri}-${ci}`}
                  layout={animate}
                  initial={animate ? { opacity: 0, scale: 0.8 } : undefined}
                  animate={{
                    opacity: dim ? 0.22 : 1,
                    backgroundColor: block ? "#FFE600" : cellColor(v, viz.accent, high),
                    scale: 1,
                  }}
                  transition={{ delay: dr * 0.03 + dc * 0.02 }}
                  className="flex items-center justify-center border-2 border-black text-sm font-bold"
                  style={{ width: cellSize, height: cellSize }}
                >
                  {high <= 1 ? "" : v}
                </Cell>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
