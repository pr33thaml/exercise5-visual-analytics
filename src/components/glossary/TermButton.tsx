"use client";

import { getTerm } from "@/lib/glossary";
import { useTerm } from "./TermProvider";

type Props = {
  termId: string;
  /** Override display label */
  children?: React.ReactNode;
  className?: string;
};

export function TermButton({ termId, children, className = "" }: Props) {
  const { openTerm } = useTerm();
  const term = getTerm(termId);
  if (!term) return <span>{children ?? termId}</span>;

  return (
    <button
      type="button"
      onClick={() => openTerm(termId)}
      className={`term-btn inline align-baseline font-semibold text-black underline decoration-2 decoration-dotted underline-offset-2 transition-colors hover:bg-[#FFE600] hover:decoration-solid ${className}`}
      title={`Learn: ${term.label}`}
    >
      {children ?? term.label}
    </button>
  );
}
