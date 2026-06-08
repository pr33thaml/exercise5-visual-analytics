"use client";

import { useEffect, useState } from "react";

export const ANIM_STAGGER_S = 0.008;
export const ANIM_DURATION_S = 0.35;
export const LOOP_HOLD_MS = 2500;

export function animDurationMs(
  itemCount: number,
  stagger = ANIM_STAGGER_S,
  duration = ANIM_DURATION_S,
) {
  return (itemCount * stagger + duration) * 1000;
}

type Phase = "anim-before" | "hold-before" | "show-after" | "hold-after";

export function useBeforeAfterLoop(
  resetKey: string | number,
  beforeCount: number,
  afterCount: number,
) {
  const [phase, setPhase] = useState<Phase>("anim-before");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setPhase("anim-before");
    setCycle(0);
  }, [resetKey]);

  useEffect(() => {
    let delay: number;
    switch (phase) {
      case "anim-before":
        delay = animDurationMs(beforeCount);
        break;
      case "hold-before":
        delay = LOOP_HOLD_MS;
        break;
      case "show-after":
        delay = animDurationMs(afterCount);
        break;
      case "hold-after":
        delay = LOOP_HOLD_MS;
        break;
    }

    const t = setTimeout(() => {
      if (phase === "anim-before") setPhase("hold-before");
      else if (phase === "hold-before") setPhase("show-after");
      else if (phase === "show-after") setPhase("hold-after");
      else {
        setPhase("anim-before");
        setCycle((c) => c + 1);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [phase, beforeCount, afterCount]);

  const showAfter = phase === "show-after" || phase === "hold-after";
  return { phase, cycle, showAfter };
}

export function useLoopingAnimKey(
  itemCount: number,
  resetKey: string | number,
  stagger = ANIM_STAGGER_S,
) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setCycle(0);
  }, [resetKey]);

  useEffect(() => {
    const t = setTimeout(
      () => setCycle((c) => c + 1),
      animDurationMs(itemCount, stagger) + LOOP_HOLD_MS,
    );
    return () => clearTimeout(t);
  }, [cycle, itemCount, stagger]);

  return cycle;
}
