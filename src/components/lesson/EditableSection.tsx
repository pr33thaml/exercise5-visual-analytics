"use client";

import { useState } from "react";
import { noteKey, useLessonNotes } from "@/hooks/useLessonNotes";
import { useEditUnlock } from "@/hooks/useEditUnlock";
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
  const { unlocked, tryUnlock, lock } = useEditUnlock();

  const [editingContent, setEditingContent] = useState(false);
  const [draft, setDraft] = useState(defaultText);
  const [needsPassword, setNeedsPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const startEditContent = () => {
    if (!unlocked) {
      setPassword("");
      setPasswordError(false);
      setNeedsPassword(true);
      return;
    }
    setDraft(content.value);
    setEditingContent(true);
  };

  const submitPassword = () => {
    if (tryUnlock(password)) {
      setNeedsPassword(false);
      setPasswordError(false);
      setDraft(content.value);
      setEditingContent(true);
    } else {
      setPasswordError(true);
    }
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

      {needsPassword && !editingContent && (
        <div className="space-y-2 border-2 border-black bg-[#FFF9F0] p-3">
          <p className="text-xs font-bold">Password required to edit</p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && submitPassword()}
            placeholder="Enter password"
            className="w-full max-w-xs border-2 border-black px-3 py-2 text-sm outline-none"
          />
          {passwordError && (
            <p className="text-xs font-semibold text-[#FF0040]">Wrong password</p>
          )}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={submitPassword}
              className="border-2 border-black px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: accent, color: contrastTextOn(accent) }}
            >
              Unlock
            </button>
            <button
              onClick={() => setNeedsPassword(false)}
              className="border-2 border-black px-3 py-1 text-xs font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!editingContent && !needsPassword && (
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={startEditContent}
            className="border-2 border-black px-3 py-1 text-xs font-bold hover:bg-black hover:text-white"
          >
            {unlocked ? "Edit text" : "Edit text 🔒"}
          </button>
          {unlocked && (
            <button
              onClick={lock}
              className="border-2 border-black px-3 py-1 text-xs font-bold text-[#5c5c5c]"
            >
              Lock editing
            </button>
          )}
          {content.isCustomized && (
            <span className="text-xs text-[#5c5c5c]">Custom text saved in this browser</span>
          )}
        </div>
      )}
    </div>
  );
}
