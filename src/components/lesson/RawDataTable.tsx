"use client";

import { motion } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";

type Props = {
  data: TeachingDataset;
  highlightRows?: number[];
  highlightCols?: number[];
  dimOutside?: boolean;
  scrambledRowOrder?: number[];
  scrambledColOrder?: number[];
  accent?: string;
  animateCells?: boolean;
};

function ratingColor(v: number, accent: string): string {
  if (v >= 4) return accent;
  if (v >= 3) return "#FFD23F";
  return "#E8E8E8";
}

export function RawDataTable({
  data,
  highlightRows = [],
  highlightCols = [],
  dimOutside = false,
  scrambledRowOrder,
  scrambledColOrder,
  accent,
  animateCells = true,
}: Props) {
  const color = accent ?? data.theme.accent;
  const rowOrder = scrambledRowOrder ?? data.rows.map((_, i) => i);
  const colOrder = scrambledColOrder ?? data.cols.map((_, i) => i);

  const isHighlighted = (r: number, c: number) =>
    highlightRows.includes(r) && highlightCols.includes(c);

  const isDimmed = (r: number, c: number) => {
    if (!dimOutside) return false;
    return !isHighlighted(r, c);
  };

  return (
    <div className="inline-block w-full max-w-full overflow-x-auto">
      <table className="w-full min-w-[260px] border-collapse">
        <thead>
          <tr>
            <th className="border-2 border-black bg-black px-3 py-2.5 text-left text-xs font-bold text-white">
              {data.rowLabel}
            </th>
            {colOrder.map((ci) => (
              <th
                key={data.cols[ci]}
                className="border-2 border-black px-2 py-2.5 text-center text-xs font-bold md:px-3"
                style={{
                  backgroundColor: highlightCols.includes(ci) ? color : "#F0F0F0",
                  color: highlightCols.includes(ci) ? "#FFF" : "#0A0A0A",
                }}
              >
                {data.cols[ci]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowOrder.map((ri, displayRow) => (
            <tr key={data.rows[ri]}>
              <td
                className="border-2 border-black px-3 py-2.5 text-sm font-bold"
                style={{
                  backgroundColor: highlightRows.includes(ri) ? color : "#F0F0F0",
                  color: highlightRows.includes(ri) ? "#FFF" : "#0A0A0A",
                }}
              >
                {data.rows[ri]}
              </td>
              {colOrder.map((ci, displayCol) => {
                const val = data.matrix[ri][ci];
                const highlighted = isHighlighted(ri, ci);
                return (
                  <motion.td
                    key={`${ri}-${ci}`}
                    layout={animateCells}
                    initial={animateCells ? { opacity: 0 } : false}
                    animate={{
                      opacity: isDimmed(ri, ci) ? 0.2 : 1,
                      backgroundColor: highlighted ? "#FFE600" : ratingColor(val, color),
                    }}
                    transition={{ delay: displayRow * 0.04 + displayCol * 0.02 }}
                    className="border-2 border-black px-3 py-2.5 text-center text-lg font-bold md:text-xl"
                  >
                    {val}
                  </motion.td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-[#5c5c5c]">{data.valueLabel}</p>
    </div>
  );
}
