'use client';

import { useMemo, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { CertificationCard } from './CertificationCard';
import type { Certification } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  certifications: Certification[];
}

export function CertificationsGrid({ certifications }: Props) {
  const [activeIssuer, setActiveIssuer] = useState<string>('TOUS');

  // Liste des émetteurs disponibles avec comptage
  const issuers = useMemo(() => {
    const map = new Map<string, number>();
    certifications.forEach((cert) => {
      map.set(cert.issuer, (map.get(cert.issuer) ?? 0) + 1);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [certifications]);

  // Filtrage
  const filtered = useMemo(() => {
    if (activeIssuer === 'TOUS') return certifications;
    return certifications.filter((c) => c.issuer === activeIssuer);
  }, [certifications, activeIssuer]);

  return (
    <div className="flex flex-col gap-space-lg">
      {/* === FILTRES === */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveIssuer('TOUS')}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-code-sm font-semibold transition-all',
            activeIssuer === 'TOUS'
              ? 'bg-primary text-on-primary shadow-sm'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
          )}
        >
          <Icon name="apps" size={14} />
          Tous ({certifications.length})
        </button>

        {issuers.map(([issuer, count]) => (
          <button
            key={issuer}
            type="button"
            onClick={() => setActiveIssuer(issuer)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-label-code-sm font-semibold transition-all',
              activeIssuer === issuer
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            )}
          >
            {issuer} ({count})
          </button>
        ))}
      </div>

      {/* === GRILLE === */}
      {filtered.length === 0 ? (
        <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm text-center">
          <Icon
            name="sentiment_dissatisfied"
            size={48}
            className="text-on-surface-variant mx-auto"
          />
          <p className="text-body-md text-on-surface-variant mt-3">
            Aucune certification pour cet émetteur.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg">
          {filtered.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      )}
    </div>
  );
}