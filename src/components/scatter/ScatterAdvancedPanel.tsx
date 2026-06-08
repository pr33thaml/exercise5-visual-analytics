"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIM_DURATION_S, useLoopingAnimKey } from "@/hooks/useBeforeAfterLoop";
import {
  ADVANCED_SCATTERPLOTS,
  type AdvancedScatterId,
} from "@/lib/scatterplot-advanced";
import { generateDensePoints, type DensePoint } from "@/lib/scatter-demo-data";
import { TermButton } from "@/components/glossary/TermButton";
import type { ReactNode } from "react";

type Props = { accent?: string };

const VARS = ["Hours", "Score", "Attendance"] as const;
const GROUP_COLORS = ["#FF2D6B", "#0066FF", "#00B4A0"];
const GROUP_LABELS = ["Group A", "Group B", "Group C"];

function SplomView({ accent }: { accent: string }) {
  const data = useMemo(() => {
    const raw = generateDensePoints(40);
    return raw.map((p, i) => ({
      a: p.x,
      b: p.y,
      c: (p.x + p.y) / 2 + (i % 5) * 0.3,
    }));
  }, []);

  const cell = 148;
  const pad = 28;
  const keys = ["a", "b", "c"] as const;
  const plotW = cell - pad * 2;

  return (
    <div className="w-full max-w-xl border-2 border-black bg-white p-3">
      <div className="grid grid-cols-3 gap-1.5">
        {VARS.map((rowVar, yi) =>
          VARS.map((colVar, xi) => {
            const isDiag = xi === yi;
            const xKey = keys[xi];
            const yKey = keys[yi];

            return (
              <svg
                key={`${rowVar}-${colVar}`}
                viewBox={`0 0 ${cell} ${cell}`}
                className="aspect-square w-full border border-black/25 bg-white"
              >
                {isDiag ? (
                  <>
                    <rect x={0} y={0} width={cell} height={cell} fill="#F5FFFE" />
                    <text
                      x={cell / 2}
                      y={cell / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={13}
                      fontWeight={700}
                      fill="#333"
                    >
                      {rowVar}
                    </text>
                  </>
                ) : (
                  <>
                    <text x={cell / 2} y={16} textAnchor="middle" fontSize={10} fontWeight={700}>
                      {colVar} × {rowVar}
                    </text>
                    {data.map((d, i) => (
                      <circle
                        key={i}
                        cx={pad + (d[xKey] / 10) * plotW}
                        cy={pad + (1 - d[yKey] / 10) * plotW}
                        r={3.5}
                        fill={accent}
                        opacity={0.65}
                      />
                    ))}
                  </>
                )}
              </svg>
            );
          }),
        )}
      </div>
      <p className="mt-2 text-center text-[11px] font-semibold text-[#666]">
        3 variables → 3×3 grid · diagonal = variable labels
      </p>
    </div>
  );
}

function BubbleView({ resetKey }: { accent: string; resetKey: string }) {
  const pts = useMemo(
    () =>
      generateDensePoints(24).map((p, i) => ({
        hours: p.x,
        score: p.y,
        classSize: 12 + (i % 5) * 9 + p.cluster * 4,
        group: p.cluster,
      })),
    [],
  );
  const cycle = useLoopingAnimKey(pts.length, resetKey, 0.04);
  const w = 400;
  const h = 300;
  const padL = 48;
  const padR = 118;
  const padT = 24;
  const padB = 44;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;
  const sizeScale = (n: number) => 4 + Math.sqrt(n) * 1.1;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-lg border-2 border-black bg-white">
      <text
        x={padL + plotW / 2}
        y={h - 14}
        textAnchor="middle"
        fontSize={10}
        fontWeight={700}
      >
        Study hours / week
      </text>
      <text
        x={16}
        y={padT + plotH / 2}
        textAnchor="middle"
        fontSize={10}
        fontWeight={700}
        transform={`rotate(-90 16 ${padT + plotH / 2})`}
      >
        Exam score
      </text>

      {pts.map((p, i) => (
        <motion.circle
          key={`${cycle}-${i}`}
          cx={padL + (p.hours / 10) * plotW}
          cy={padT + (1 - p.score / 10) * plotH}
          r={sizeScale(p.classSize)}
          fill={GROUP_COLORS[p.group % GROUP_COLORS.length]}
          fillOpacity={0.55}
          stroke="#000"
          strokeWidth={1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.04, duration: ANIM_DURATION_S }}
        />
      ))}

      <g transform={`translate(${w - padR + 8} ${padT})`}>
        <text x={0} y={0} fontSize={9} fontWeight={700}>
          Encoded variables
        </text>
        <text x={0} y={16} fontSize={8} fill="#444">
          ① x → study hours
        </text>
        <text x={0} y={28} fontSize={8} fill="#444">
          ② y → exam score
        </text>
        <text x={0} y={40} fontSize={8} fill="#444">
          ③ size → class size
        </text>
        <text x={0} y={52} fontSize={8} fill="#444">
          ④ colour → study group
        </text>

        <text x={0} y={72} fontSize={8} fontWeight={700}>
          Class size
        </text>
        {[16, 28, 40].map((r, i) => (
          <g key={r} transform={`translate(0 ${84 + i * 22})`}>
            <circle cx={r / 2 + 4} cy={0} r={r / 2} fill="#CCC" stroke="#000" strokeWidth={0.5} />
            <text x={r + 10} y={4} fontSize={7} fill="#555">
              {12 + i * 18} students
            </text>
          </g>
        ))}

        <text x={0} y={158} fontSize={8} fontWeight={700}>
          Study group
        </text>
        {GROUP_LABELS.map((label, i) => (
          <g key={label} transform={`translate(0 ${170 + i * 16})`}>
            <circle cx={6} cy={0} r={5} fill={GROUP_COLORS[i]} stroke="#000" strokeWidth={0.5} />
            <text x={16} y={4} fontSize={7} fill="#555">
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

const HEXBIN_POINT_COUNT = 3000;

function hexPolygon(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const ang = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(ang)},${cy + r * Math.sin(ang)}`;
  }).join(" ");
}

function buildHexBins(pts: DensePoint[], cols: number, rows: number) {
  const bins = new Map<string, number>();
  for (const p of pts) {
    const c = Math.min(cols - 1, Math.floor((p.x / 10) * cols));
    const r = Math.min(rows - 1, Math.floor((1 - p.y / 10) * rows));
    bins.set(`${c}-${r}`, (bins.get(`${c}-${r}`) ?? 0) + 1);
  }
  return bins;
}

function LargePlotFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold text-[#555]">{label}</p>
      {children}
    </div>
  );
}

function HexbinView({ accent }: { accent: string; resetKey: string }) {
  const pts = useMemo(() => generateDensePoints(HEXBIN_POINT_COUNT), []);
  const w = 400;
  const h = 320;
  const pad = 44;
  const cols = 18;
  const rows = 13;
  const plotW = w - pad * 2;
  const plotH = h - pad * 2;
  const hexR = Math.min(plotW / (cols * 1.72), plotH / (rows * 1.48));
  const bins = useMemo(() => buildHexBins(pts, cols, rows), [pts]);
  const max = Math.max(...bins.values(), 1);

  return (
    <div className="w-full max-w-4xl">
      <div className="grid gap-4 md:grid-cols-2">
        <LargePlotFrame label={`Before: ${HEXBIN_POINT_COUNT.toLocaleString()} points — opaque scatterplot`}>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full border-2 border-black bg-white">
            <text x={w / 2} y={h - 16} textAnchor="middle" fontSize={10} fontWeight={700}>
              Variable X
            </text>
            <text
              x={14}
              y={pad + plotH / 2}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              transform={`rotate(-90 14 ${pad + plotH / 2})`}
            >
              Variable Y
            </text>
            {pts.map((p, i) => (
              <circle
                key={i}
                cx={pad + (p.x / 10) * plotW}
                cy={pad + (1 - p.y / 10) * plotH}
                r={2}
                fill={accent}
                opacity={0.55}
                stroke="#000"
                strokeWidth={0.25}
              />
            ))}
            <text x={pad} y={pad - 10} fontSize={9} fill="#666" fontWeight={600}>
              n = {HEXBIN_POINT_COUNT.toLocaleString()} · individual marks overlap into solid blobs
            </text>
          </svg>
        </LargePlotFrame>

        <LargePlotFrame label={`After: same ${HEXBIN_POINT_COUNT.toLocaleString()} points — hexbin density`}>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full border-2 border-black bg-white">
            <text x={w / 2} y={h - 16} textAnchor="middle" fontSize={10} fontWeight={700}>
              Variable X
            </text>
            <text
              x={14}
              y={pad + plotH / 2}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              transform={`rotate(-90 14 ${pad + plotH / 2})`}
            >
              Variable Y
            </text>
            {[...bins.entries()].map(([k, count]) => {
              const [c, row] = k.split("-").map(Number);
              const cx = pad + c * hexR * 1.72 + hexR + (row % 2) * (hexR * 0.86);
              const cy = pad + row * hexR * 1.48 + hexR;
              const t = count / max;
              return (
                <polygon
                  key={k}
                  points={hexPolygon(cx, cy, hexR * 0.92)}
                  fill={accent}
                  fillOpacity={0.12 + t * 0.88}
                  stroke="#000"
                  strokeWidth={0.4}
                />
              );
            })}
            <text x={pad} y={pad - 10} fontSize={9} fill="#666" fontWeight={600}>
              n = {HEXBIN_POINT_COUNT.toLocaleString()} · darker hex = more points per cell
            </text>
            <g transform={`translate(${w - pad - 72} ${pad - 6})`}>
              <text x={0} y={0} fontSize={8} fontWeight={700}>
                Count
              </text>
              {[0.2, 0.5, 0.85, 1].map((t, i) => (
                <g key={t} transform={`translate(0 ${10 + i * 14})`}>
                  <rect
                    x={0}
                    y={-6}
                    width={14}
                    height={10}
                    fill={accent}
                    fillOpacity={0.12 + t * 0.88}
                    stroke="#000"
                    strokeWidth={0.3}
                  />
                  <text x={18} y={2} fontSize={7} fill="#555">
                    {i === 0 ? "low" : i === 3 ? `high (${max})` : ""}
                  </text>
                </g>
              ))}
            </g>
          </svg>
        </LargePlotFrame>
      </div>
      <p className="mt-3 text-center text-[11px] font-semibold text-[#666]">
        Three underlying clusters stay hidden in the raw plot but emerge once points are binned.
      </p>
    </div>
  );
}

export function ScatterAdvancedPanel({ accent = "#00B4A0" }: Props) {
  const [active, setActive] = useState<AdvancedScatterId>("splom");
  const item = ADVANCED_SCATTERPLOTS.find((a) => a.id === active)!;

  return (
    <div className="space-y-4">
      <div className="grid gap-2 md:grid-cols-3">
        {ADVANCED_SCATTERPLOTS.map((a) => (
          <button
            key={a.id}
            onClick={() => setActive(a.id)}
            className="border-2 border-black px-3 py-2.5 text-left text-sm font-bold"
            style={{
              backgroundColor: active === a.id ? accent : "#FFF",
              color: "#0A0A0A",
            }}
          >
            <span className="block">{a.title}</span>
            <span className="block text-[11px] font-normal opacity-70">{a.subtitle}</span>
          </button>
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
            <TermButton termId={item.termId}>{item.title}</TermButton>
          </p>
          <p className="readable mt-2 text-[15px] text-[#333]">{item.description}</p>
          <p className="mt-2 text-sm font-semibold text-[#555]">
            Solves: {item.problemSolved}
          </p>
          <div className="mt-4 flex w-full justify-center overflow-x-auto">
            {active === "splom" && <SplomView accent={accent} />}
            {active === "bubble" && <BubbleView accent={accent} resetKey={active} />}
            {active === "hexbin" && <HexbinView accent={accent} resetKey={active} />}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
