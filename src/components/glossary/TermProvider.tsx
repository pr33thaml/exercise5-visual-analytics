"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getTerm, type GlossaryEntry } from "@/lib/glossary";

type TermContextValue = {
  openTerm: (id: string) => void;
  closeTerm: () => void;
  activeTerm: GlossaryEntry | null;
};

const TermContext = createContext<TermContextValue | null>(null);

export function TermProvider({ children }: { children: ReactNode }) {
  const [activeTerm, setActiveTerm] = useState<GlossaryEntry | null>(null);

  const openTerm = useCallback((id: string) => {
    const term = getTerm(id);
    if (term) setActiveTerm(term);
  }, []);

  const closeTerm = useCallback(() => setActiveTerm(null), []);

  return (
    <TermContext.Provider value={{ openTerm, closeTerm, activeTerm }}>
      {children}
      <TermPanel term={activeTerm} onClose={closeTerm} />
    </TermContext.Provider>
  );
}

export function useTerm() {
  const ctx = useContext(TermContext);
  if (!ctx) throw new Error("useTerm must be used within TermProvider");
  return ctx;
}

function TermPanel({
  term,
  onClose,
}: {
  term: GlossaryEntry | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {term && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />
          <motion.aside
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="term-panel fixed z-50 max-h-[85vh] overflow-y-auto border-t-4 border-black bg-[#FFFDF7] shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b-2 border-black bg-white px-4 py-3 md:px-6">
              <h3 className="text-lg font-bold text-black">{term.label}</h3>
              <button
                onClick={onClose}
                className="border-2 border-black px-3 py-1 text-sm font-bold hover:bg-black hover:text-white"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <div className="space-y-5 px-4 py-5 md:px-6 md:py-6">
              <p className="text-base font-semibold leading-relaxed text-black">
                {term.oneLine}
              </p>

              <section>
                <h4 className="mb-2 text-sm font-bold text-black/50">What it is</h4>
                <p className="readable text-[15px] leading-relaxed text-black/85">
                  {term.explanation}
                </p>
              </section>

              <section className="border-l-4 border-[#FFE600] bg-[#FFE60015] py-3 pl-4">
                <h4 className="mb-1 text-sm font-bold text-black/50">Why we use it here</h4>
                <p className="readable text-[15px] leading-relaxed text-black/85">
                  {term.whyItMatters}
                </p>
              </section>

              {term.citation && (
                <section className="border-3 border-black bg-white p-4">
                  <h4 className="mb-3 text-sm font-bold text-black/50">From the literature</h4>
                  <p className="text-sm font-semibold text-black">
                    {term.citation.authors} ({term.citation.year})
                  </p>
                  <p className="mt-1 text-sm italic text-black/70">
                    &ldquo;{term.citation.snippet}&rdquo;
                  </p>
                  <p className="mt-2 text-xs text-black/50">
                    {term.citation.title} — {term.citation.source}
                  </p>
                  {term.citation.url && (
                    <a
                      href={term.citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block border-2 border-black px-3 py-1.5 text-xs font-bold text-black hover:bg-black hover:text-white"
                    >
                      View paper →
                    </a>
                  )}
                </section>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
