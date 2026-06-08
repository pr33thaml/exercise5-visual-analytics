"use client";

import { METRIC_INFO, type DistanceMetric } from "@/lib/math";
import { contrastTextOn } from "@/lib/color-utils";
import { TermButton } from "@/components/glossary/TermButton";

const METRICS: DistanceMetric[] = ["euclidean", "manhattan", "cosine"];

type Props = {
  metric: DistanceMetric;
  onChange: (m: DistanceMetric) => void;
  accent: string;
};

export function MetricSelector({ metric, onChange, accent }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-[#5c5c5c]">Similarity metric</p>
      <div className="flex flex-wrap gap-2">
        {METRICS.map((m) => {
          const info = METRIC_INFO[m];
          const active = metric === m;
          return (
            <button
              key={m}
              onClick={() => onChange(m)}
              className="border-2 border-black px-3 py-2 text-left text-sm font-bold transition-colors"
              style={{
                backgroundColor: active ? accent : "#FFF",
                color: active ? contrastTextOn(accent) : "#0A0A0A",
              }}
            >
              <span className="block">{info.label}</span>
              <span
                className="block font-mono text-[10px] font-normal"
                style={{ opacity: active ? 0.9 : 0.55 }}
              >
                {info.shortFormula}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-[#888]">
        Using{" "}
        <TermButton termId={METRIC_INFO[metric].termId}>
          {METRIC_INFO[metric].label}
        </TermButton>{" "}
        — switch metric and watch distances update live.
      </p>
    </div>
  );
}
