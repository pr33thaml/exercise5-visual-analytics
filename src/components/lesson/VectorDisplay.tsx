"use client";

import { motion } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import { TermButton } from "@/components/glossary/TermButton";

type Props = {
  data: TeachingDataset;
  mode: "row" | "col";
  highlightIndices?: number[];
  accent: string;
};

export function VectorDisplay({ data, mode, highlightIndices = [], accent }: Props) {
  const items =
    mode === "row"
      ? data.rows.map((label, i) => ({
          label,
          vector: data.matrix[i],
          index: i,
        }))
      : data.cols.map((label, j) => ({
          label,
          vector: data.matrix.map((row) => row[j]),
          index: j,
        }));

  return (
    <div className="space-y-3">
      {items.map(({ label, vector, index }, i) => {
        const highlighted = highlightIndices.includes(index);
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border-2 border-black p-3 md:p-4"
            style={{
              backgroundColor: highlighted ? `${accent}10` : "#FFF",
              boxShadow: highlighted ? `3px 3px 0 ${accent}` : "2px 2px 0 #0A0A0A",
            }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="border-2 border-black px-2 py-1 text-sm font-bold"
                style={{
                  backgroundColor: highlighted ? accent : "#F0F0F0",
                  color: highlighted ? "#FFF" : "#0A0A0A",
                }}
              >
                {label}
              </span>
              <span className="font-mono text-sm">= [</span>
              {vector.map((v, vi) => (
                <span
                  key={vi}
                  className="border-2 border-black px-2 py-1 font-mono text-sm font-bold"
                  style={{
                    backgroundColor: v >= 4 ? accent : v <= 2 ? "#E8E8E8" : "#FFD23F",
                    color: v >= 4 ? "#FFF" : "#0A0A0A",
                  }}
                >
                  {v}
                </span>
              ))}
              <span className="font-mono text-sm">]</span>
            </div>
          </motion.div>
        );
      })}
      <p className="readable text-[14px] text-[#5c5c5c]">
        Each <TermButton termId="vector">vector</TermButton> is one{" "}
        {mode === "row" ? data.rowUnit : data.colUnit} written as numbers.
      </p>
    </div>
  );
}
