"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cluster-lab-notes-v1";

type NotesStore = Record<string, string>;

function readStore(): NotesStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as NotesStore) : {};
  } catch {
    return {};
  }
}

function writeStore(store: NotesStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function noteKey(datasetId: string, sectionId: string, kind: "content" | "notes") {
  return `${datasetId}:${sectionId}:${kind}`;
}

export function useLessonNotes(key: string, defaultValue: string) {
  const [value, setValueState] = useState(defaultValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const store = readStore();
    if (store[key] !== undefined) {
      setValueState(store[key]);
    }
    setHydrated(true);
  }, [key]);

  const setValue = useCallback(
    (next: string) => {
      setValueState(next);
      const store = readStore();
      store[key] = next;
      writeStore(store);
    },
    [key],
  );

  const reset = useCallback(() => {
    const store = readStore();
    delete store[key];
    writeStore(store);
    setValueState(defaultValue);
  }, [key, defaultValue]);

  const isCustomized = hydrated && value !== defaultValue;

  return { value, setValue, reset, isCustomized, hydrated };
}
