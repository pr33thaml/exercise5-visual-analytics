"use client";

import { useCallback, useEffect, useState } from "react";
import { getEditPassword } from "@/lib/edit-password";

const SESSION_KEY = "edit-text-unlocked";

export function useEditUnlock() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  const tryUnlock = useCallback((password: string) => {
    const ok = password === getEditPassword();
    if (ok) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
    }
    return ok;
  }, []);

  const lock = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setUnlocked(false);
  }, []);

  return { unlocked, tryUnlock, lock };
}
