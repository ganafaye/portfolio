'use client';

import { useMemo, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { PublicationCard } from './PublicationCard';
import type { Publication } from '@/lib/data';
import { cn } from '@/lib/utils';

interface Props {
  publications: Publication[];
}

const TYPE_LABELS: Record<string, string> = {
  TOUS: 'Tous',
  PROJET: 'Projets',
  TP: 'TPs',
  SECURITE: 'Sécurité',
  BLOG: 'Blog',
  RETEX: 'RETEX',
};

export function PublicationsGrid({ publications }: Props) {
  const [activeType, setActiveType] = useState<string>('TOUS');

  // Types disponibles avec comptage
  const types = useMemo(() => {
    const map = new Map<string, number>();
    publications.forEach((p) => {
      map.set(p.type, (map.get(p.type) ?? 0) + 1);
    });
    return Array.from(map.entries());
  }, [publications]);

  // Filtrage
  const filtered = useMemo(() => {
    if (activeType === 'TOUS') return publications;
    return publications.filter((p) => p.type === activeType);
  }, [publications, activeType]);

  return (
    <div className="flex flex-col gap-space-lg">
      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveType('TOUS')}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-code-sm font-semibold transition-all',
            activeType === 'TOUS'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          )}
        >
          <Icon name="apps" size={14} />
          Tous ({publications.length})
        </button>

        {types.map(([type, count]) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-code-sm font-semibold transition-all',
              activeType === type
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            )}
          >
            {TYPE_LABELS[type] ?? type} ({count})
          </button>
        ))}
      </div>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm text-center">
          <Icon
            name="description"
            size={48}
            className="text-on-surface-variant mx-auto"
          />
          <p className="text-body-md text-on-surface-variant mt-3">
            Aucune publication pour ce type.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
          {filtered.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      )}
    </div>
  );
}