'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { getArchitecturePatterns } from '@/lib/data';
import { cn } from '@/lib/utils';

const ICON_BG = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
} as const;

const PROGRESS_BG = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
} as const;

export function ArchitecturePatterns() {
  const [open, setOpen] = useState(false);
  const patterns = getArchitecturePatterns();

  return (
    <section className="flex flex-col gap-space-md">
      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            <Icon name="architecture" size={22} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-headline-md font-bold text-on-surface">
              Patterns d&apos;architecture maîtrisés
            </span>
            <span className="text-body-sm text-on-surface-variant">
              Haute disponibilité, réplication, sharding
            </span>
          </div>
        </div>
        <Icon
          name="expand_more"
          size={28}
          className={cn(
            'text-on-surface-variant transition-transform duration-300 group-hover:text-secondary',
            open && 'rotate-180'
          )}
        />
      </button>

      {/* Grille */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-500',
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
          {patterns.map((pattern) => (
            <div
              key={pattern.id}
              className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md"
            >
              <div
                className={cn(
                  'w-11 h-11 rounded-xl flex items-center justify-center',
                  ICON_BG[pattern.color]
                )}
              >
                <Icon name={pattern.icon} size={24} />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface">
                {pattern.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {pattern.description}
              </p>
              <div className="pt-2 mt-auto">
                <div className="flex items-center justify-between text-label-code-sm text-on-surface-variant mb-1">
                  <span>{pattern.metricLabel}</span>
                  <span className="font-bold text-on-surface">
                    {pattern.metricValue}
                  </span>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn('h-full', PROGRESS_BG[pattern.color])}
                    style={{ width: `${pattern.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}