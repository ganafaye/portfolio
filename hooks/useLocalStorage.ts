'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [mounted, setMounted] = useState(false);

  // Lire au montage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw));
    } catch {
      // ignore
    }
    setMounted(true);
  }, [key]);

  // Écrire à chaque changement
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value, mounted]);

  return [value, setValue, mounted] as const;
}