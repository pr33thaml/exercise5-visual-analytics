"use client";

import { useState } from "react";
import { noteKey, useLessonNotes } from "@/hooks/useLessonNotes";
import { contrastTextOn } from "@/lib/color-utils";

type Props = {
  sectionId: string;
  datasetId: string;
  defaultText: string;
  accent?: string;
  /** Rich default when user hasn't customized (e.g. with TermButtons) */
  children?: React.ReactNode;
};

export function EditableSection({
  sectionId,
  datasetId,
  defaultText,
  accent = "#0A0A0A",
  children,
}: Props) {
  const contentKey = noteKey(datasetId, sectionId, "content");
  const content = useLessonNotes(contentKey, defaultText);

  const [editingContent, setEditingContent] = useState(false);
  const [draft, setDraft] = useState(defaultText);

  const startEditContent = () => {
    setDraft(content.value);
    setEditingContent(true);
  };

  const saveContent = () => {
    content.setValue(draft);
    setEditingContent(false);
  };

  const showCustomText = content.isCustomized || editingContent;

  return (
    <div className="space-y-3">
      <div
        className="readable rounded-none border-l-4 bg-white px-4 py-3 md:px-5 md:py-4"
        style={{ borderColor: accent, backgroundColor: `${accent}0A` }}
      >
        {editingContent ? (
          <div className="space-y-3">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={5}
              className="w-full resize-y border-2 border-black p-3 text-[15px] leading-relaxed outline-none focus:ring-2 focus:ring-black/20"
              placeholder="Write your explanation…"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={saveContent}
                className="border-2 border-black px-4 py-1.5 text-sm font-bold"
                style={{ backgroundColor: accent, color: contrastTextOn(accent) }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingContent(false)}
                className="border-2 border-black px-4 py-1.5 text-sm font-bold"
              >
                Cancel
              </button>
              {content.isCustomized && (
                <button
                  onClick={() => {
                    content.reset();
                    setDraft(defaultText);
                    setEditingContent(false);
                  }}
                  className="border-2 border-black px-4 py-1.5 text-sm font-bold text-[#5c5c5c]"
                >
                  Reset to default
                </button>
              )}
            </div>
          </div>
        ) : showCustomText ? (
          <p className="whitespace-pre-wrap">{content.value}</p>
        ) : (
          children ?? <p className="whitespace-pre-wrap">{defaultText}</p>
        )}
      </div>

      {!editingContent && (
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={startEditContent}
            className="border-2 border-black px-3 py-1 text-xs font-bold hover:bg-black hover:text-white"
          >
            Edit text
          </button>
          {content.isCustomized && (
            <span className="text-xs text-[#5c5c5c]">Custom text saved in this browser</span>
          )}
        </div>
      )}
    </div>
  );
}
