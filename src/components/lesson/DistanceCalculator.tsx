"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import type { TeachingDataset } from "@/lib/lesson-data";
import {
  METRIC_INFO,
  computeMetric,
  isClosePair,
  proximityLabel,
  type DistanceMetric,
} from "@/lib/math";
import { TermButton } from "@/components/glossary/TermButton";

type Props = {
  data: TeachingDataset;
  mode: "row" | "col";
  indexA: number;
  indexB: number;
  accent: string;
  metric: DistanceMetric;
  interactive?: boolean;
  onChangeA?: (i: number) => void;
  onChangeB?: (i: number) => void;
};

export function DistanceCalculator({
  data,
  mode,
  indexA,
  indexB,
  accent,
  metric,
  interactive = false,
  onChangeA,
  onChangeB,
}: Props) {
  const labels = mode === "row" ? data.rows : data.cols;
  const dimLabels = mode === "row" ? data.cols : data.rows;

  const vecA = useMemo(
    () =>
      mode === "row"
        ? data.matrix[indexA]
        : data.matrix.map((row) => row[indexA]),
    [data, mode, indexA],
  );
  const vecB = useMemo(
    () =>
      mode === "row"
        ? data.matrix[indexB]
        : data.matrix.map((row) => row[indexB]),
    [data, mode, indexB],
  );

  const result = useMemo(
    () => computeMetric(metric, vecA, vecB, dimLabels),
    [metric, vecA, vecB, dimLabels],
  );

  const label = proximityLabel(metric, result.distance);
  const isClose = isClosePair(metric, result.distance);
  const info = METRIC_INFO[metric];

  const picker = (value: number, onChange?: (i: number) => void) => (
    <div className="flex flex-wrap gap-2">
      {labels.map((l, i) => (
        <button
          key={l}
          onClick={() => onChange?.(i)}
          className="border-2 border-black px-3 py-2 text-sm font-bold transition-colors"
          style={{
            backgroundColor: value === i ? accent : "#F5F5F5",
            color: value === i ? "#FFF" : "#0A0A0A",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-4">
      {interactive && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold text-[#5c5c5c]">Pick A</p>
            {picker(indexA, onChangeA)}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold text-[#5c5c5c]">Pick B</p>
            {picker(indexB, onChangeB)}
          </div>
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        <VectorChip label={labels[indexA]} vector={vecA} accent={accent} />
        <VectorChip label={labels[indexB]} vector={vecB} accent="#888" />
      </div>

      <motion.div
        key={`${metric}-${indexA}-${indexB}-${result.distance}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-3 border-black bg-white p-4 md:p-5"
        style={{ boxShadow: `4px 4px 0 ${isClose ? accent : "#0A0A0A"}` }}
      >
        <p className="text-sm font-semibold text-[#5c5c5c]">
          <TermButton termId={info.termId}>{info.label}</TermButton> calculation
        </p>

        {metric === "euclidean" && (
          <>
            <p className="mt-3 font-mono text-sm leading-relaxed md:text-base">
              d({labels[indexA]}, {labels[indexB]}) = √(
              {result.terms.map((t, i) => (
                <span key={t.index}>
                  {i > 0 && " + "}
                  ({t.a}−{t.b})²
                </span>
              ))}
              )
            </p>
            <div className="mt-3 space-y-1">
              {result.terms.map((t) => (
                <p key={t.index} className="font-mono text-sm text-[#3d3d3d]">
                  ({t.a}−{t.b})² = {t.contribution}
                  <span className="ml-2 text-[#888]">{t.label}</span>
                </p>
              ))}
            </div>
          </>
        )}

        {metric === "manhattan" && (
          <>
            <p className="mt-3 font-mono text-sm leading-relaxed md:text-base">
              d({labels[indexA]}, {labels[indexB]}) ={" "}
              {result.terms.map((t, i) => (
                <span key={t.index}>
                  {i > 0 && " + "}|{t.a}−{t.b}|
                </span>
              ))}
            </p>
            <div className="mt-3 space-y-1">
              {result.terms.map((t) => (
                <p key={t.index} className="font-mono text-sm text-[#3d3d3d]">
                  |{t.a}−{t.b}| = {t.contribution}
                  <span className="ml-2 text-[#888]">{t.label}</span>
                </p>
              ))}
            </div>
          </>
        )}

        {metric === "cosine" && (
          <>
            <p className="mt-3 font-mono text-sm leading-relaxed md:text-base">
              sim = (x·y) / (‖x‖‖y‖) = ({result.terms.map((t) => `${t.a}×${t.b}`).join(" + ")}) / (‖x‖‖y‖)
            </p>
            <div className="mt-3 space-y-1">
              {result.terms.map((t) => (
                <p key={t.index} className="font-mono text-sm text-[#3d3d3d]">
                  {t.a} × {t.b} = {t.contribution}
                  <span className="ml-2 text-[#888]">{t.label}</span>
                </p>
              ))}
              <p className="font-mono text-sm text-[#3d3d3d]">
                dot product = {result.terms.reduce((s, t) => s + t.contribution, 0)}
              </p>
              <p className="font-mono text-sm text-[#3d3d3d]">
                similarity = {result.similarity?.toFixed(3)} · distance = 1 − sim
              </p>
            </div>
          </>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t-2 border-black/10 pt-4">
          <span className="font-mono text-2xl font-bold" style={{ color: accent }}>
            {metric === "cosine" && result.similarity !== undefined && (
              <span className="mr-2 text-base font-semibold text-[#5c5c5c]">
                sim {result.similarity.toFixed(3)} →
              </span>
            )}
            d = {result.summary}
          </span>
          <span
            className="border-2 border-black px-3 py-1 text-sm font-bold text-white"
            style={{ backgroundColor: isClose ? accent : "#FF0040" }}
          >
            {label}
          </span>
        </div>

        <p className="readable mt-3 text-[15px]">
          {isClose
            ? `${labels[indexA]} and ${labels[indexB]} land in the same cluster with ${info.label}.`
            : `${labels[indexA]} and ${labels[indexB]} belong in different clusters with ${info.label}.`}
        </p>
      </motion.div>
    </div>
  );
}

function VectorChip({
  label,
  vector,
  accent,
}: {
  label: string;
  vector: number[];
  accent: string;
}) {
  return (
    <div className="border-2 border-black p-3" style={{ backgroundColor: `${accent}12` }}>
      <p className="text-xs font-semibold text-[#5c5c5c]">
        <TermButton termId="vector">Vector</TermButton> {label}
      </p>
      <p className="mt-1 font-mono text-base font-bold">[{vector.join(", ")}]</p>
    </div>
  );
}
