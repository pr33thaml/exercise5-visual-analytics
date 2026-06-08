"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LESSON_STEPS,
  PHASE_COLORS,
  TEACHING_DATASETS,
  getTeachingDataset,
  type LessonStepId,
} from "@/lib/lesson-data";
import { TermButton } from "@/components/glossary/TermButton";
import { RawDataTable } from "./RawDataTable";
import { VectorDisplay } from "./VectorDisplay";
import { DistanceCalculator } from "./DistanceCalculator";
import { DistanceMatrixView } from "./DistanceMatrixView";
import { ClusterReveal } from "./ClusterReveal";
import { StepNavigator } from "./StepNavigator";
import { AnimatedClusterDemo } from "./AnimatedClusterDemo";
import { StepBrief } from "./StepBrief";
import { MetricSelector } from "./MetricSelector";
import { useDistanceMetric } from "@/hooks/useDistanceMetric";
import type { DistanceMetric } from "@/lib/math";
import { contrastTextOn } from "@/lib/color-utils";

type Props = {
  datasetId: string;
  onDatasetChange: (id: string) => void;
};

export function LessonWizard({ datasetId, onDatasetChange }: Props) {
  const data = getTeachingDataset(datasetId);
  const [stepIndex, setStepIndex] = useState(0);
  const [rowA, setRowA] = useState(data.similarRowPair[0]);
  const [rowB, setRowB] = useState(data.similarRowPair[1]);
  const [colA, setColA] = useState(data.similarColPair[0]);
  const [colB, setColB] = useState(2);
  const [metric, setMetric] = useDistanceMetric("euclidean");

  const step = LESSON_STEPS[stepIndex];
  const accent = data.theme.accent;

  const handleDatasetChange = (id: string) => {
    onDatasetChange(id);
    setStepIndex(0);
    const d = getTeachingDataset(id);
    setRowA(d.similarRowPair[0]);
    setRowB(d.similarRowPair[1]);
    setColA(d.similarColPair[0]);
    setColB(2);
  };

  return (
    <div
      className="border-3 border-black bg-white"
      style={{ boxShadow: `6px 6px 0 ${accent}` }}
    >
      <header
        className="flex flex-col gap-3 border-b-3 border-black px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6"
        style={{ backgroundColor: data.theme.accentLight }}
      >
        <div>
          <p className="text-xs font-semibold text-[#5c5c5c]">Clustering walkthrough</p>
          <h2 className="text-xl font-bold text-black md:text-2xl">{data.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {TEACHING_DATASETS.map((d) => (
            <button
              key={d.id}
              onClick={() => handleDatasetChange(d.id)}
              className="border-2 border-black px-3 py-1.5 text-xs font-bold md:text-sm"
              style={{
                backgroundColor: datasetId === d.id ? d.theme.accent : "#FFF",
                color: datasetId === d.id ? "#FFF" : "#0A0A0A",
              }}
            >
              {d.title.split("×")[0].trim()}
            </button>
          ))}
        </div>
      </header>

      <div
        className="flex flex-col gap-1 border-b-3 border-black px-4 py-3 md:flex-row md:items-center md:gap-3 md:px-6"
        style={{ backgroundColor: PHASE_COLORS[step.phase] + "18" }}
      >
        <span
          className="w-fit border-2 border-black px-2 py-0.5 text-xs font-bold"
          style={{
            backgroundColor: PHASE_COLORS[step.phase],
            color: contrastTextOn(PHASE_COLORS[step.phase]),
          }}
        >
          {step.phase}
        </span>
        <div>
          <p className="text-base font-bold text-black">{step.title}</p>
          <p className="text-sm text-[#5c5c5c]">{step.subtitle}</p>
        </div>
      </div>

      <div className="min-h-[360px] px-4 py-5 md:px-6 md:py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${datasetId}-${step.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <StepContent
              stepId={step.id}
              data={data}
              accent={accent}
              metric={metric}
              onMetric={setMetric}
              rowA={rowA}
              rowB={rowB}
              colA={colA}
              colB={colB}
              onRowA={setRowA}
              onRowB={setRowB}
              onColA={setColA}
              onColB={setColB}
              onJumpToStep={(id) => {
                const idx = LESSON_STEPS.findIndex((s) => s.id === id);
                if (idx >= 0) setStepIndex(idx);
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="border-t border-black/10 px-4 py-2 text-center text-xs text-[#5c5c5c] md:px-6">
        Tap <span className="font-semibold underline decoration-dotted">dotted words</span> for definitions · use{" "}
        <span className="font-semibold">Edit text</span> to customize any highlighted section (saved in your browser)
      </p>

      <StepNavigator
        currentStep={stepIndex}
        onPrev={() => setStepIndex((s) => Math.max(s - 1, 0))}
        onNext={() => setStepIndex((s) => Math.min(s + 1, LESSON_STEPS.length - 1))}
        onJump={setStepIndex}
        accent={accent}
      />
    </div>
  );
}

function DistanceMetricBar({
  metric,
  onMetric,
  accent,
}: {
  metric: DistanceMetric;
  onMetric: (m: DistanceMetric) => void;
  accent: string;
}) {
  return (
    <div className="border-2 border-black bg-[#FAFAFA] p-3 md:p-4">
      <MetricSelector metric={metric} onChange={onMetric} accent={accent} />
    </div>
  );
}

function StepContent({
  stepId,
  data,
  accent,
  metric,
  onMetric,
  rowA,
  rowB,
  colA,
  colB,
  onRowA,
  onRowB,
  onColA,
  onColB,
  onJumpToStep,
}: {
  stepId: LessonStepId;
  data: ReturnType<typeof getTeachingDataset>;
  accent: string;
  metric: DistanceMetric;
  onMetric: (m: DistanceMetric) => void;
  rowA: number;
  rowB: number;
  colA: number;
  colB: number;
  onRowA: (i: number) => void;
  onRowB: (i: number) => void;
  onColA: (i: number) => void;
  onColB: (i: number) => void;
  onJumpToStep: (id: LessonStepId) => void;
}) {
  switch (stepId) {
    case "intro":
      return (
        <div className="space-y-5">
          <StepBrief
            sectionId="intro"
            datasetId={data.id}
            defaultText={`A matrix has ${data.rows.length} rows (${data.rowLabel}) and ${data.cols.length} columns (${data.colLabel}). Each cell is a rating.`}
            accent={accent}
          >
            A <TermButton termId="matrix">matrix</TermButton> has {data.rows.length}{" "}
            <TermButton termId="row">rows</TermButton> ({data.rowLabel}) and {data.cols.length}{" "}
            <TermButton termId="column">columns</TermButton> ({data.colLabel}). Each cell is a{" "}
            <TermButton termId="rating">rating</TermButton>.
          </StepBrief>
          <div className="grid gap-3 md:grid-cols-2">
            <InfoBox
              title="Row clustering"
              termId="row-clustering"
              body={data.rowClusterInsight}
              color={accent}
            />
            <InfoBox
              title="Column clustering"
              termId="column-clustering"
              body={data.colClusterInsight}
              color="#0066FF"
            />
          </div>
        </div>
      );

    case "raw-table":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="raw-table"
            datasetId={data.id}
            defaultText={`${data.rows[0]} gave ${data.cols[0]} a rating of ${data.matrix[0][0]}. Read each cell left-to-right per row.`}
            accent={accent}
          >
            <strong>{data.rows[0]}</strong> gave <strong>{data.cols[0]}</strong> a rating of{" "}
            <strong>{data.matrix[0][0]}</strong>. Read each cell left-to-right per row.
          </StepBrief>
          <div className="flex justify-center overflow-x-auto">
            <RawDataTable data={data} accent={accent} />
          </div>
        </div>
      );

    case "row-vectors":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-vectors"
            datasetId={data.id}
            defaultText="Row clustering treats each row as a vector — a list of numbers you can compare."
            accent={accent}
          >
            <TermButton termId="row-clustering">Row clustering</TermButton> treats each row as a{" "}
            <TermButton termId="vector">vector</TermButton> — a list of numbers you can compare.
          </StepBrief>
          <VectorDisplay data={data} mode="row" accent={accent} />
        </div>
      );

    case "row-compare-similar":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-compare-similar"
            datasetId={data.id}
            defaultText={`Compare two similar ${data.rowLabel.toLowerCase()} using a distance metric. Switch between Euclidean, Manhattan, and Cosine below.`}
            accent={accent}
          >
            Compare two similar {data.rowLabel.toLowerCase()}. Pick a metric below — Euclidean,
            Manhattan, or Cosine — and see the calculation update live.
          </StepBrief>
          <DistanceMetricBar metric={metric} onMetric={onMetric} accent={accent} />
          <DistanceCalculator
            data={data}
            mode="row"
            indexA={rowA}
            indexB={rowB}
            accent={accent}
            metric={metric}
            interactive
            onChangeA={onRowA}
            onChangeB={onRowB}
          />
        </div>
      );

    case "row-compare-different":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-compare-different"
            datasetId={data.id}
            defaultText={`Now ${data.rows[data.differentRowPair[0]]} vs ${data.rows[data.differentRowPair[1]]} — opposite patterns, so distance is much larger.`}
            accent="#FF0040"
          >
            Now {data.rows[data.differentRowPair[0]]} vs {data.rows[data.differentRowPair[1]]} —
            opposite patterns, so distance is much larger.
          </StepBrief>
          <DistanceMetricBar metric={metric} onMetric={onMetric} accent={accent} />
          <DistanceCalculator
            data={data}
            mode="row"
            indexA={data.differentRowPair[0]}
            indexB={data.differentRowPair[1]}
            accent={accent}
            metric={metric}
          />
        </div>
      );

    case "row-distance-matrix":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-distance-matrix"
            datasetId={data.id}
            defaultText="The full distance matrix. Tap any cell to jump to that pair's calculation."
            accent={accent}
          >
            The full <TermButton termId="distance-matrix">distance matrix</TermButton>. Tap any
            cell to jump to that pair&apos;s calculation.
          </StepBrief>
          <DistanceMetricBar metric={metric} onMetric={onMetric} accent={accent} />
          <DistanceMatrixView
            data={data}
            mode="row"
            accent={accent}
            metric={metric}
            highlightPair={[rowA, rowB]}
            onCellClick={(i, j) => {
              onRowA(i);
              onRowB(j);
              onJumpToStep("row-compare-similar");
            }}
          />
        </div>
      );

    case "row-clusters":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-clusters"
            datasetId={data.id}
            defaultText="Small distance → same cluster. Here are the groups we found."
            accent={accent}
          >
            Small <TermButton termId="euclidean-distance">distance</TermButton> → same{" "}
            <TermButton termId="cluster">cluster</TermButton>. Here are the groups we found.
          </StepBrief>
          <ClusterReveal data={data} mode="row" accent={accent} />
        </div>
      );

    case "row-reorder":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="row-reorder"
            datasetId={data.id}
            defaultText="Row clustering result: press Play to watch similar rows slide together. Columns never move."
            accent={accent}
          >
            <TermButton termId="row-clustering">Row clustering result</TermButton>: press Play to
            watch similar rows slide together. Columns never move.
          </StepBrief>
          <AnimatedClusterDemo data={data} mode="row" accent={accent} />
        </div>
      );

    case "col-vectors":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="col-vectors"
            datasetId={data.id}
            defaultText="Flip your thinking: each column is now a vector (read top-to-bottom)."
            accent="#0066FF"
          >
            Flip your thinking: each <TermButton termId="column">column</TermButton> is now a{" "}
            <TermButton termId="vector">vector</TermButton> (read top-to-bottom).
          </StepBrief>
          <VectorDisplay data={data} mode="col" accent="#0066FF" />
        </div>
      );

    case "col-compare":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="col-compare"
            datasetId={data.id}
            defaultText={`${data.cols[data.similarColPair[0]]} and ${data.cols[data.similarColPair[1]]} have nearly identical column patterns.`}
            accent="#0066FF"
          >
            {data.cols[data.similarColPair[0]]} and {data.cols[data.similarColPair[1]]} have
            nearly identical column patterns.
          </StepBrief>
          <DistanceMetricBar metric={metric} onMetric={onMetric} accent="#0066FF" />
          <DistanceCalculator
            data={data}
            mode="col"
            indexA={colA}
            indexB={data.similarColPair[1]}
            accent="#0066FF"
            metric={metric}
            interactive
            onChangeA={onColA}
            onChangeB={onColB}
          />
        </div>
      );

    case "col-clusters":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="col-clusters"
            datasetId={data.id}
            defaultText={`Column clusters group similar ${data.colLabel.toLowerCase()}.`}
            accent="#0066FF"
          >
            <TermButton termId="column-clustering">Column clusters</TermButton> group similar{" "}
            {data.colLabel.toLowerCase()}.
          </StepBrief>
          <ClusterReveal data={data} mode="col" accent="#0066FF" />
        </div>
      );

    case "col-reorder":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="col-reorder"
            datasetId={data.id}
            defaultText="Press Play — columns reorder, rows stay fixed. Vertical color bands appear."
            accent="#0066FF"
          >
            Press Play — columns <TermButton termId="reorder">reorder</TermButton>, rows stay
            fixed. Vertical color bands appear.
          </StepBrief>
          <AnimatedClusterDemo data={data} mode="column" accent="#0066FF" />
        </div>
      );

    case "bicluster-intro":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="bicluster-intro"
            datasetId={data.id}
            defaultText={data.biclusterIntroText}
            accent="#FFE600"
          >
            {data.biclusterIntroText.split("\n\n").map((para, i) => (
              <p key={i} className={i > 0 ? "mt-3" : undefined}>
                {para}
              </p>
            ))}
          </StepBrief>
        </div>
      );

    case "bicluster-reveal":
      return (
        <div className="space-y-4">
          <StepBrief
            sectionId="bicluster-reveal"
            datasetId={data.id}
            defaultText="Use Play / Pause / Step to walk through: find users → find movies → isolate block → see why other columns are excluded → learn what to do next."
            accent="#FFE600"
          >
            Use Play / Pause / Step to walk through: find users → find movies → isolate block →
            see why other columns are excluded → learn what to do next.
          </StepBrief>
          <AnimatedClusterDemo data={data} mode="bicluster" accent="#FFE600" />
        </div>
      );

    default:
      return null;
  }
}

function InfoBox({
  title,
  termId,
  body,
  color,
}: {
  title: string;
  termId: string;
  body: string;
  color: string;
}) {
  return (
    <div
      className="border-2 border-black p-4"
      style={{ boxShadow: `3px 3px 0 ${color}` }}
    >
      <p className="text-sm font-bold" style={{ color }}>
        <TermButton termId={termId}>{title}</TermButton>
      </p>
      <p className="readable mt-2 text-[15px]">{body}</p>
    </div>
  );
}

