"use client";

import { motion } from "framer-motion";
import type { Dataset, HeatmapCell, HighlightBlock, ViewMode } from "@/lib/types";
import { valueToColor } from "@/lib/heatmap-utils";

type HeatmapProps = {
  dataset: Dataset;
  cells: HeatmapCell[];
  mode: ViewMode;
  contrast: number;
  cellSize?: number;
  showLabels?: boolean;
  compact?: boolean;
  highlightBlock?: HighlightBlock | null;
};

export function Heatmap({
  dataset,
  cells,
  mode,
  contrast,
  cellSize = 30,
  showLabels = true,
  compact = false,
  highlightBlock = null,
}: HeatmapProps) {
  const gap = compact ? 2 : 3;
  const labelW = compact ? 36 : 52;
  const { theme } = dataset;

  const rowLabels = [...new Set(cells.map((c) => c.rowId))];
  const colLabels = [...new Set(cells.map((c) => c.colId))];

  const gridW = colLabels.length * (cellSize + gap) - gap;
  const gridH = rowLabels.length * (cellSize + gap) - gap;

  const rowActive = mode === "row" || mode === "bicluster";
  const colActive = mode === "column" || mode === "bicluster";

  const showHighlight = mode === "bicluster" && highlightBlock && !compact;

  return (
    <div className="inline-block">
      {showLabels && (
        <div className="flex" style={{ marginLeft: labelW + 8, marginBottom: 6 }}>
          {colLabels.map((col) => (
            <motion.span
              key={col}
              layout
              className="truncate text-center font-mono text-[9px] font-bold uppercase tracking-tight text-black"
              style={{
                width: cellSize + gap,
                color: colActive ? theme.accent : "#888",
                maxWidth: cellSize + gap,
              }}
              title={col}
            >
              {compact ? col.slice(0, 3) : col.length > 8 ? col.slice(0, 7) + "…" : col}
            </motion.span>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        {showLabels && (
          <div className="flex flex-col" style={{ width: labelW, gap }}>
            {rowLabels.map((row) => (
              <motion.span
                key={row}
                layout
                className="flex items-center justify-end pr-1 font-mono text-[9px] font-bold uppercase text-black"
                style={{
                  height: cellSize,
                  color: rowActive ? "#0A0A0A" : "#888",
                }}
              >
                {row}
              </motion.span>
            ))}
          </div>
        )}

        <div className="relative" style={{ width: gridW, height: gridH }}>
          {showHighlight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="pointer-events-none absolute z-20 border-[3px] border-black"
              style={{
                left: highlightBlock.colStart * (cellSize + gap) - 2,
                top: highlightBlock.rowStart * (cellSize + gap) - 2,
                width:
                  (highlightBlock.colEnd - highlightBlock.colStart + 1) * (cellSize + gap) + 1,
                height:
                  (highlightBlock.rowEnd - highlightBlock.rowStart + 1) * (cellSize + gap) + 1,
                backgroundColor: `${theme.accent}18`,
                boxShadow: `4px 4px 0 ${theme.accent}`,
              }}
            />
          )}

          {cells.map((cell) => (
            <motion.div
              key={cell.id}
              layout
              layoutId={compact ? undefined : cell.id}
              transition={{
                layout: { type: "spring", stiffness: 380, damping: 32 },
                backgroundColor: { duration: 0.25 },
              }}
              className="absolute border border-black/10"
              style={{
                width: cellSize,
                height: cellSize,
                left: cell.col * (cellSize + gap),
                top: cell.row * (cellSize + gap),
                backgroundColor: valueToColor(
                  cell.value,
                  contrast,
                  theme.heatLow,
                  theme.heatMid,
                  theme.heatHigh,
                ),
              }}
              title={`${cell.rowId} × ${cell.colId}: ${cell.value.toFixed(2)}`}
              whileHover={{ scale: 1.2, zIndex: 30, borderColor: "#0A0A0A" }}
            />
          ))}
        </div>
      </div>

      {showLabels && !compact && (
        <div
          className="mt-3 flex justify-between font-mono text-[9px] font-bold uppercase tracking-widest text-black/40"
          style={{ width: labelW + 8 + gridW }}
        >
          <span>→ {dataset.rowLabel}</span>
          <span>↑ {dataset.colLabel}</span>
        </div>
      )}
    </div>
  );
}
