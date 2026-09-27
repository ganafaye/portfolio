'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[40px]" />;
  }

  const isDark = theme === 'dark';

  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-low">
      <div className="flex items-center gap-2 text-on-surface">
        <Icon name="dark_mode" size={18} />
        <span className="text-body-sm font-medium">Dark Mode</span>
      </div>
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="Basculer le mode sombre"
        className={`relative w-10 h-5 rounded-full transition-colors duration-300 flex items-center px-0.5 ${
          isDark ? 'bg-primary-container' : 'bg-outline-variant/50'
        }`}
      >
        <span
          className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isDark ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}