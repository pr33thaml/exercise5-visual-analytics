"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SCATTER_PURPOSES,
  type ScatterPurposeId,
} from "@/lib/scatterplot-purposes";
import { PURPOSE_DEMO } from "@/lib/scatter-demo-data";
import { TermButton } from "@/components/glossary/TermButton";
import { ScatterPurposeChart } from "./ScatterPurposeChart";

type Props = { accent?: string };

export function ScatterplotPurposesPanel({ accent = "#9B5DE5" }: Props) {
  const [active, setActive] = useState<ScatterPurposeId>("correlation");
  const { points, axes } = PURPOSE_DEMO;
  const purpose = SCATTER_PURPOSES.find((p) => p.id === active)!;
  const outlier = points.find((p) => p.outlier);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {SCATTER_PURPOSES.map((p) => (
          <motion.button
            key={p.id}
            onClick={() => setActive(p.id)}
            className="border-2 border-black px-3 py-2.5 text-left text-sm font-bold"
            style={{
              backgroundColor: active === p.id ? accent : "#FFF",
              color: "#0A0A0A",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="block">{p.title}</span>
            <span className="block text-[11px] font-normal opacity-70">{p.subtitle}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-2 border-black bg-white p-4 md:p-5"
        >
          <p className="text-base font-bold">
            <TermButton termId={purpose.termId}>{purpose.title}</TermButton>
          </p>
          <p className="readable mt-2 text-[15px] text-[#333]">{purpose.description}</p>
          <p className="readable mt-2 text-sm text-[#666]">
            {active === "outliers" && outlier
              ? `${outlier.id} deviates from its cluster — ${purpose.displayCaption}`
              : purpose.displayCaption}
          </p>
          <div className="mt-4 flex justify-center">
            <ScatterPurposeChart
              purpose={active}
              points={points}
              axes={axes}
              accent={accent}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
