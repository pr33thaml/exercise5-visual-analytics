"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { DistanceMetric } from "@/lib/math";

const CAPTIONS: Record<DistanceMetric, string> = {
  euclidean: "Straight line — shortest path between two points.",
  manhattan: "City-block path — horizontal steps + vertical steps.",
  cosine: "Angle between directions — similar tilt means close.",
};

type Props = {
  metric: DistanceMetric;
  accent: string;
};

export function MetricIllustration({ metric, accent }: Props) {
  const ax = 48;
  const ay = 132;
  const bx = 172;
  const by = 48;
  const ox = 44;
  const oy = 138;
  const v1x = 118;
  const v1y = 42;
  const v2x = 154;
  const v2y = 78;

  const loop = {
    duration: 1.1,
    repeat: Infinity,
    repeatDelay: 1.4,
    ease: "easeInOut" as const,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={metric}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="border-2 border-black bg-white p-3"
      >
        <svg viewBox="0 0 220 168" className="mx-auto w-full max-w-xs" aria-hidden>
          <line x1={32} y1={148} x2={196} y2={148} stroke="#DDD" strokeWidth={1} />
          <line x1={32} y1={148} x2={32} y2={28} stroke="#DDD" strokeWidth={1} />

          {metric === "euclidean" && (
            <>
              <motion.path
                d={`M ${ax} ${ay} L ${bx} ${by}`}
                fill="none"
                stroke={accent}
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={loop}
              />
              <circle cx={ax} cy={ay} r={7} fill={accent} stroke="#000" strokeWidth={1.5} />
              <circle cx={bx} cy={by} r={7} fill="#FFF" stroke="#000" strokeWidth={1.5} />
              <text x={ax - 10} y={ay + 18} fontSize={10} fontWeight={700}>
                A
              </text>
              <text x={bx + 6} y={by - 6} fontSize={10} fontWeight={700}>
                B
              </text>
            </>
          )}

          {metric === "manhattan" && (
            <>
              <motion.path
                d={`M ${ax} ${ay} L ${bx} ${ay} L ${bx} ${by}`}
                fill="none"
                stroke={accent}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.4 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={loop}
              />
              <motion.line
                x1={bx}
                y1={ay}
                x2={bx}
                y2={ay - 10}
                stroke="#888"
                strokeWidth={1}
                strokeDasharray="2 2"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ ...loop, duration: 2.6 }}
              />
              <circle cx={ax} cy={ay} r={7} fill={accent} stroke="#000" strokeWidth={1.5} />
              <circle cx={bx} cy={by} r={7} fill="#FFF" stroke="#000" strokeWidth={1.5} />
              <text x={ax - 10} y={ay + 18} fontSize={10} fontWeight={700}>
                A
              </text>
              <text x={bx + 6} y={by - 6} fontSize={10} fontWeight={700}>
                B
              </text>
            </>
          )}

          {metric === "cosine" && (
            <>
              <motion.path
                d={`M ${ox} ${oy} L ${v1x} ${v1y}`}
                fill="none"
                stroke={accent}
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ ...loop, duration: 0.7 }}
              />
              <motion.path
                d={`M ${ox} ${oy} L ${v2x} ${v2y}`}
                fill="none"
                stroke="#0066FF"
                strokeWidth={3}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ ...loop, duration: 0.7, delay: 0.25 }}
              />
              <motion.path
                d={`M ${ox + 36} ${oy - 4} A 36 36 0 0 0 ${ox + 28} ${oy - 28}`}
                fill="none"
                stroke="#FFE600"
                strokeWidth={2.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ ...loop, duration: 0.6, delay: 0.55 }}
              />
              <circle cx={ox} cy={oy} r={5} fill="#000" />
              <circle cx={v1x} cy={v1y} r={6} fill={accent} stroke="#000" strokeWidth={1.5} />
              <circle cx={v2x} cy={v2y} r={6} fill="#0066FF" stroke="#000" strokeWidth={1.5} />
              <text x={v1x + 4} y={v1y - 4} fontSize={9} fontWeight={700}>
                x
              </text>
              <text x={v2x + 4} y={v2y + 4} fontSize={9} fontWeight={700}>
                y
              </text>
              <text x={ox + 40} y={oy - 22} fontSize={9} fontWeight={700} fill="#886600">
                θ
              </text>
            </>
          )}
        </svg>
        <p className="mt-2 text-center text-[11px] font-semibold text-[#555]">
          {CAPTIONS[metric]}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
