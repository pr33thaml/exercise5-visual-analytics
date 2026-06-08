"use client";

import { motion } from "framer-motion";
import { LESSON_STEPS } from "@/lib/lesson-data";

type Props = {
  currentStep: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (step: number) => void;
  accent: string;
};

export function StepNavigator({ currentStep, onPrev, onNext, onJump, accent }: Props) {
  const step = LESSON_STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === LESSON_STEPS.length - 1;

  return (
    <div className="border-t-3 border-black bg-[#FAFAFA]">
      <div className="flex gap-1 overflow-x-auto px-3 py-3 md:px-4">
        {LESSON_STEPS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onJump(i)}
            title={s.title}
            className="shrink-0 p-1"
            aria-label={s.title}
          >
            <motion.div
              animate={{
                backgroundColor: i === currentStep ? accent : i < currentStep ? "#0A0A0A" : "#DDD",
                width: i === currentStep ? 20 : 8,
              }}
              className="h-2 border border-black"
            />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 border-t-2 border-black/10 px-4 py-3 md:px-5">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="border-2 border-black px-4 py-2.5 text-sm font-bold disabled:opacity-30"
        >
          Back
        </button>

        <p className="hidden text-center text-sm font-semibold text-black sm:block">
          {step.title}
        </p>

        <button
          onClick={onNext}
          disabled={isLast}
          className="border-2 border-black px-4 py-2.5 text-sm font-bold text-white disabled:opacity-30"
          style={{ backgroundColor: isLast ? "#888" : accent }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
