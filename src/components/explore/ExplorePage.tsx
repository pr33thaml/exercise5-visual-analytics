"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DATASETS, getDataset } from "@/lib/datasets";
import { MODE_INFO, VIEW_MODES, buildHeatmapCells } from "@/lib/heatmap-utils";
import type { ViewMode } from "@/lib/types";
import { EXERCISE_MODULES } from "@/lib/exercises";
import { SCATTERPURPOSE_INTRO } from "@/lib/scatterplot-purposes";
import { SCATTER_CLUTTER_INTRO } from "@/lib/scatterplot-clutter";
import { SCATTER_ADVANCED_INTRO } from "@/lib/scatterplot-advanced";
import { ExerciseModuleFrame } from "@/components/ExerciseModuleFrame";
import { ExploreHeatmaps } from "./ExploreHeatmaps";
import { ExploreBiclusterTechniques } from "./ExploreBiclusterTechniques";
import { ScatterplotPurposesPanel } from "@/components/scatter/ScatterplotPurposesPanel";
import { ScatterClutterPanel } from "@/components/scatter/ScatterClutterPanel";
import { ScatterAdvancedPanel } from "@/components/scatter/ScatterAdvancedPanel";
import { contrastTextOn } from "@/lib/color-utils";

type ExploreSection = "heatmaps" | "biclusters" | "scatter";
type ScatterTopic = "purposes" | "clutter" | "advanced";

const SECTIONS: { id: ExploreSection; label: string; hint: string; accent: string }[] = [
  { id: "heatmaps", label: "Heatmaps", hint: "Row, column & bicluster modes", accent: "#FF5500" },
  { id: "biclusters", label: "Bicluster viz", hint: "Q2 · four techniques", accent: "#FFE600" },
  { id: "scatter", label: "Scatterplots", hint: "Q3–Q5 · purposes, clutter, advanced", accent: "#9B5DE5" },
];

const SCATTER_TOPICS: {
  id: ScatterTopic;
  question: string;
  label: string;
  intro: string;
  accent: string;
}[] = [
  {
    id: "purposes",
    question: "Q3",
    label: "Purposes",
    intro: SCATTERPURPOSE_INTRO,
    accent: "#9B5DE5",
  },
  {
    id: "clutter",
    question: "Q4",
    label: "Clutter & overplotting",
    intro: SCATTER_CLUTTER_INTRO,
    accent: "#0066FF",
  },
  {
    id: "advanced",
    question: "Q5",
    label: "Advanced scatterplots",
    intro: SCATTER_ADVANCED_INTRO,
    accent: "#00B4A0",
  },
];

type Props = { accent?: string };

export function ExplorePage({ accent = "#FF5500" }: Props) {
  const [section, setSection] = useState<ExploreSection>("heatmaps");
  const [scatterTopic, setScatterTopic] = useState<ScatterTopic>("purposes");
  const [datasetId, setDatasetId] = useState("movies");
  const [mode, setMode] = useState<ViewMode>("original");
  const [contrast, setContrast] = useState(1.3);
  const [noise, setNoise] = useState(0.03);

  const dataset = getDataset(datasetId);
  const cells = useMemo(
    () => buildHeatmapCells(dataset, mode, noise),
    [dataset, mode, noise],
  );
  const miniViews = VIEW_MODES.map((m) => ({
    mode: m,
    cells: buildHeatmapCells(dataset, m, noise),
    info: MODE_INFO[m],
  }));
  const scatterInfo = SCATTER_TOPICS.find((t) => t.id === scatterTopic)!;

  return (
    <ExerciseModuleFrame title="Explore" accent={accent}>
      <div className="mb-5 flex flex-wrap gap-2">
        {SECTIONS.map((s) => {
          const selected = section === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className="border-2 border-black px-3 py-2.5 text-left"
              style={{
                backgroundColor: selected ? s.accent : "#FFF",
                color: selected ? contrastTextOn(s.accent) : "#0A0A0A",
              }}
            >
              <span className="block text-sm font-bold">{s.label}</span>
              <span className="block text-[11px] font-normal opacity-75">{s.hint}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {(section === "heatmaps" || section === "biclusters") && (
            <div className="mb-4 flex flex-wrap gap-2">
              {DATASETS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDatasetId(d.id)}
                  className="border-2 border-black px-3 py-1.5 text-sm font-bold"
                  style={{
                    backgroundColor: datasetId === d.id ? d.theme.accent : "#FFF",
                    color:
                      datasetId === d.id ? contrastTextOn(d.theme.accent) : "#0A0A0A",
                  }}
                >
                  {d.title}
                </button>
              ))}
            </div>
          )}

          {section === "heatmaps" && (
            <ExploreHeatmaps
              dataset={dataset}
              mode={mode}
              onMode={setMode}
              contrast={contrast}
              onContrast={setContrast}
              noise={noise}
              onNoise={setNoise}
              cells={cells}
              miniViews={miniViews}
            />
          )}

          {section === "biclusters" && <ExploreBiclusterTechniques dataset={dataset} />}

          {section === "scatter" && (
            <div className="space-y-4">
              <div className="grid gap-2 md:grid-cols-3">
                {SCATTER_TOPICS.map((t) => {
                  const selected = scatterTopic === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setScatterTopic(t.id)}
                      className="border-2 border-black px-3 py-2.5 text-left text-sm font-bold"
                      style={{
                        backgroundColor: selected ? t.accent : "#FFF",
                        color: selected ? contrastTextOn(t.accent) : "#0A0A0A",
                      }}
                    >
                      <span className="block">
                        {t.question} · {t.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={scatterTopic}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border-2 border-black bg-[#FAFAFA] p-4 md:p-5"
                >
                  <p className="text-xs font-semibold text-[#888]">
                    {scatterInfo.question} · {scatterInfo.label}
                  </p>
                  <p className="readable mt-2 text-sm text-[#444]">{scatterInfo.intro}</p>
                  <div className="mt-4">
                    {scatterTopic === "purposes" && (
                      <ScatterplotPurposesPanel accent={scatterInfo.accent} />
                    )}
                    {scatterTopic === "clutter" && (
                      <ScatterClutterPanel accent={scatterInfo.accent} />
                    )}
                    {scatterTopic === "advanced" && (
                      <ScatterAdvancedPanel accent={scatterInfo.accent} />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              <p className="text-center text-xs text-[#888]">
                Guided lessons for each question live in the{" "}
                {EXERCISE_MODULES.filter((m) => m.question).map((m, i, arr) => (
                  <span key={m.id}>
                    <span className="font-semibold">
                      {m.question} · {m.label}
                    </span>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                tabs above.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </ExerciseModuleFrame>
  );
}
