"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TEACHING_DATASETS, getTeachingDataset } from "@/lib/lesson-data";
import { EXERCISE_MODULES, type ExerciseModuleId } from "@/lib/exercises";
import { SCATTERPURPOSE_INTRO } from "@/lib/scatterplot-purposes";
import { SCATTER_CLUTTER_INTRO } from "@/lib/scatterplot-clutter";
import { SCATTER_ADVANCED_INTRO } from "@/lib/scatterplot-advanced";
import { LessonWizard } from "./lesson/LessonWizard";
import { ExplorePage } from "./explore/ExplorePage";
import { ExerciseModuleFrame } from "./ExerciseModuleFrame";
import { BiclusterVizPanel } from "./lesson/BiclusterVizPanel";
import { ScatterplotPurposesPanel } from "./scatter/ScatterplotPurposesPanel";
import { ScatterClutterPanel } from "./scatter/ScatterClutterPanel";
import { ScatterAdvancedPanel } from "./scatter/ScatterAdvancedPanel";
import { contrastTextOn } from "@/lib/color-utils";

export function ClusteringDashboard() {
  const [module, setModule] = useState<ExerciseModuleId>("clustering");
  const [datasetId, setDatasetId] = useState("movies");

  const activeModule = EXERCISE_MODULES.find((m) => m.id === module)!;
  const teaching = getTeachingDataset(datasetId);

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black">
      <div className="relative mx-auto max-w-4xl px-4 py-6 md:max-w-5xl md:px-6 md:py-8">
        <header className="mb-6 border-b-4 border-black pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-medium text-[#5c5c5c]">Visual Analytics · Exercise 5</p>
            <a
              href="https://github.com/pr33thaml/exercise5-visual-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black bg-white px-2.5 py-1 text-xs font-bold hover:bg-[#F5F5F5]"
            >
              GitHub ↗
            </a>
          </div>
          <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">
            Exercise Dashboard
          </h1>
          <p className="readable mt-2 max-w-xl text-[15px]">
            Clustering, bicluster visualization, and scatterplot topics — with interactive
            examples and glossary terms.
          </p>

          <div className="mt-4 flex flex-wrap gap-0">
            {EXERCISE_MODULES.map((m) => {
              const selected = module === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setModule(m.id)}
                  className="border-2 border-black px-2 py-2.5 text-xs font-bold md:px-3 md:text-sm"
                  style={{
                    backgroundColor: selected ? m.accent : "#FFF",
                    color: selected ? contrastTextOn(m.accent) : "#0A0A0A",
                    marginRight: -2,
                    zIndex: selected ? 2 : 1,
                  }}
                >
                  {m.question ? `${m.question} · ` : ""}
                  {m.label}
                </button>
              );
            })}
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={module}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {module === "clustering" && (
              <LessonWizard datasetId={datasetId} onDatasetChange={setDatasetId} />
            )}

            {module === "biclusters" && (
              <ExerciseModuleFrame
                question="Q2"
                title="Bicluster visualization"
                intro="Four techniques for visualizing biclusters in a full data matrix. Pick a dataset, then switch between techniques below."
                accent={activeModule.accent}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {TEACHING_DATASETS.map((d) => (
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
                <BiclusterVizPanel data={teaching} accent="#FFE600" />
              </ExerciseModuleFrame>
            )}

            {module === "scatter-purposes" && (
              <ExerciseModuleFrame
                question="Q3"
                title="Purposes of scatterplots"
                intro={SCATTERPURPOSE_INTRO}
                accent={activeModule.accent}
              >
                <ScatterplotPurposesPanel accent={activeModule.accent} />
              </ExerciseModuleFrame>
            )}

            {module === "scatter-clutter" && (
              <ExerciseModuleFrame
                question="Q4"
                title="Clutter & overplotting"
                intro={SCATTER_CLUTTER_INTRO}
                accent={activeModule.accent}
              >
                <ScatterClutterPanel accent={activeModule.accent} />
              </ExerciseModuleFrame>
            )}

            {module === "scatter-advanced" && (
              <ExerciseModuleFrame
                question="Q5"
                title="Advanced scatterplot representations"
                intro={SCATTER_ADVANCED_INTRO}
                accent={activeModule.accent}
              >
                <ScatterAdvancedPanel accent={activeModule.accent} />
              </ExerciseModuleFrame>
            )}

            {module === "explore" && <ExplorePage accent={activeModule.accent} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

