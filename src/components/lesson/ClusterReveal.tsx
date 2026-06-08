"use client";

import { motion } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import { TermButton } from "@/components/glossary/TermButton";
import { contrastTextOn } from "@/lib/color-utils";

const CLUSTER_COLORS = ["#FF2D6B", "#0066FF", "#FFE600", "#00E5A0"];

type Props = {
  data: TeachingDataset;
  mode: "row" | "col";
  accent: string;
};

export function ClusterReveal({ data, mode, accent }: Props) {
  const clusters = mode === "row" ? data.rowClusters : data.colClusters;
  const items = mode === "row" ? data.rows : data.cols;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        {clusters.map((cluster, ci) => {
          const color = CLUSTER_COLORS[ci % CLUSTER_COLORS.length];
          const labelColor = contrastTextOn(color);
          return (
            <motion.div
              key={cluster.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.12 }}
              className="border-2 border-black p-4"
              style={{ boxShadow: `4px 4px 0 ${color}` }}
            >
              <span
                className="inline-block border-2 border-black px-2 py-0.5 text-xs font-bold"
                style={{ backgroundColor: color, color: labelColor }}
              >
                {cluster.name}
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {cluster.indices.map((idx, i) => (
                  <motion.span
                    key={items[idx]}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: ci * 0.12 + i * 0.08 }}
                    className="border-2 border-black px-3 py-1 text-sm font-bold"
                    style={{ backgroundColor: color, color: labelColor }}
                  >
                    {items[idx]}
                  </motion.span>
                ))}
              </div>
              <p className="readable mt-3 text-[15px] font-medium">{cluster.meaning}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
