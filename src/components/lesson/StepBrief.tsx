"use client";

import type { ReactNode } from "react";
import { EditableSection } from "./EditableSection";

type Props = {
  children: ReactNode;
  accent?: string;
  /** When set, text is editable and saved in the browser */
  sectionId?: string;
  datasetId?: string;
  defaultText?: string;
};

export function StepBrief({
  children,
  accent = "#0A0A0A",
  sectionId,
  datasetId,
  defaultText,
}: Props) {
  if (sectionId && datasetId && defaultText) {
    return (
      <EditableSection
        sectionId={sectionId}
        datasetId={datasetId}
        defaultText={defaultText}
        accent={accent}
      >
        {children}
      </EditableSection>
    );
  }

  return (
    <div
      className="readable rounded-none border-l-4 bg-white px-4 py-3 md:px-5 md:py-4"
      style={{ borderColor: accent, backgroundColor: `${accent}0A` }}
    >
      {children}
    </div>
  );
}
