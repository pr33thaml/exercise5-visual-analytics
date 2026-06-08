"use client";

import type { ReactNode } from "react";

type Props = {
  question?: string;
  title: string;
  intro?: string;
  accent: string;
  children: ReactNode;
};

export function ExerciseModuleFrame({ question, title, intro, accent, children }: Props) {
  return (
    <div
      className="border-3 border-black bg-white"
      style={{ boxShadow: `6px 6px 0 ${accent}` }}
    >
      <header
        className="border-b-3 border-black px-4 py-4 md:px-6"
        style={{ backgroundColor: `${accent}18` }}
      >
        <div className="flex flex-wrap items-center gap-2">
          {question && (
            <span
              className="border-2 border-black px-2 py-0.5 text-xs font-bold"
              style={{ backgroundColor: accent, color: "#0A0A0A" }}
            >
              {question}
            </span>
          )}
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        </div>
        {intro && (
          <p className="readable mt-2 max-w-2xl text-[15px] text-[#444]">{intro}</p>
        )}
      </header>
      <div className="px-4 py-5 md:px-6 md:py-6">{children}</div>
    </div>
  );
}
