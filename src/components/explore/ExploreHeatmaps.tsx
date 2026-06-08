"use client";

import type { Dataset, ViewMode } from "@/lib/types";
import { contrastTextOn } from "@/lib/color-utils";
import { MODE_INFO, VIEW_MODES, buildHeatmapCells } from "@/lib/heatmap-utils";
import { Heatmap } from "@/components/Heatmap";
import { Slider } from "@/components/Slider";

type Props = {
  dataset: Dataset;
  mode: ViewMode;
  onMode: (m: ViewMode) => void;
  contrast: number;
  onContrast: (v: number) => void;
  noise: number;
  onNoise: (v: number) => void;
  cells: ReturnType<typeof buildHeatmapCells>;
  miniViews: {
    mode: ViewMode;
    cells: ReturnType<typeof buildHeatmapCells>;
    info: (typeof MODE_INFO)[ViewMode];
  }[];
};

export function ExploreHeatmaps({
  dataset,
  mode,
  onMode,
  contrast,
  onContrast,
  noise,
  onNoise,
  cells,
  miniViews,
}: Props) {
  const info = MODE_INFO[mode];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[200px_1fr]">
        <aside className="space-y-3">
          <div className="border-2 border-black bg-white p-3">
            <p className="mb-2 text-xs font-semibold text-[#5c5c5c]">Clustering mode</p>
            {VIEW_MODES.map((m) => (
              <button
                key={m}
                onClick={() => onMode(m)}
                className="mb-1 block w-full px-2 py-2 text-left text-sm font-bold"
                style={{
                  backgroundColor: mode === m ? dataset.theme.accent : "transparent",
                  color: mode === m ? contrastTextOn(dataset.theme.accent) : "#0A0A0A",
                }}
              >
                {MODE_INFO[m].title}
              </button>
            ))}
          </div>
          <div className="border-2 border-black bg-white p-3">
            <Slider
              label="Contrast"
              value={contrast}
              min={0.7}
              max={2.5}
              step={0.1}
              accent={dataset.theme.accent}
              onChange={onContrast}
              format={(v) => `${v.toFixed(1)}×`}
            />
            <div className="mt-4">
              <Slider
                label="Noise"
                value={noise}
                min={0}
                max={0.18}
                step={0.01}
                accent={dataset.theme.secondary}
                onChange={onNoise}
                format={(v) => `${(v * 100).toFixed(0)}%`}
              />
            </div>
          </div>
        </aside>

        <div className="border-2 border-black bg-white">
          <div
            className="border-b-2 border-black px-4 py-3"
            style={{ backgroundColor: dataset.theme.accentLight }}
          >
            <p className="font-bold">{dataset.title}</p>
            <p className="text-sm text-[#5c5c5c]">{info.subtitle}</p>
          </div>
          <div className="flex justify-center overflow-x-auto p-4">
            <Heatmap
              dataset={dataset}
              cells={cells}
              mode={mode}
              contrast={contrast}
              highlightBlock={dataset.biclusterBlock}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        {miniViews.map(({ mode: m, cells: c, info: i }) => (
          <button
            key={m}
            onClick={() => onMode(m)}
            className="border-2 border-black bg-white p-2 text-left"
            style={{
              outline: mode === m ? `2px solid ${dataset.theme.accent}` : undefined,
            }}
          >
            <p className="text-xs font-semibold text-[#5c5c5c]">{i.tag}</p>
            <div className="mt-2 flex justify-center">
              <Heatmap
                dataset={dataset}
                cells={c}
                mode={m}
                contrast={contrast}
                cellSize={12}
                showLabels={false}
                compact
              />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
