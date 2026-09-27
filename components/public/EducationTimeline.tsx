import { Icon } from '@/components/ui/Icon';
import type { Education } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  educations: Education[];
}

const NODE_COLORS = ['primary', 'secondary', 'tertiary'] as const;
const RING_MAP = {
  primary: 'ring-surface-container-low',
  secondary: 'ring-secondary-fixed',
  tertiary: 'ring-surface-container-high',
} as const;
const BG_MAP = {
  primary: 'bg-primary-container',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
} as const;
const SUBTITLE_MAP = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

export function EducationTimeline({ educations }: Props) {
  return (
    <section className="flex flex-col gap-space-md p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-space-sm">
          <div className="p-2 rounded-lg bg-surface-container-low text-primary">
            <Icon name="school" size={24} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-headline-lg text-on-surface">
              Mon Parcours Académique
            </h2>
            <p className="text-body-sm text-on-surface-variant">
              Formation en Systèmes d&apos;Information, Cybersécurité, Data Science &amp;
              Développement d&apos;Applications.
            </p>
          </div>
        </div>
        <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-label-code-sm">
          Cursus Universitaire UADB
        </span>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 mt-4 flex flex-col gap-space-lg">
        <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 bg-surface-container-highest" />

        {educations.map((edu, i) => {
          const color = NODE_COLORS[i % 3];
          return (
            <div key={edu.id} className="relative flex items-start gap-space-md">
              {/* Node dot */}
              <div className="absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center">
                <span
                  className={cn(
                    'relative w-2.5 h-2.5 rounded-full',
                    BG_MAP[color],
                    'ring-4',
                    RING_MAP[color]
                  )}
                >
                  {edu.current && (
                    <span
                      className={cn(
                        'absolute inset-0 rounded-full animate-ping opacity-75',
                        BG_MAP[color]
                      )}
                    />
                  )}
                </span>
              </div>

              {/* Card */}
              <div className="flex flex-col bg-surface-container-low/50 p-space-md rounded-xl w-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-headline-sm text-on-surface">
                    {edu.degree}
                  </span>
                  {edu.current ? (
                    <span className="inline-flex items-center gap-1.5 text-label-code-sm px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {edu.startYear} — {edu.endYear} · En cours
                    </span>
                  ) : (
                    <span className="text-label-code-sm px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-semibold">
                      {edu.startYear} — {edu.endYear}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <span
                    className={cn(
                      'text-body-sm font-medium',
                      SUBTITLE_MAP[color]
                    )}
                  >
                    {edu.school}
                    {edu.current && ' · Sécurité SI & Intelligence Artificielle'}
                    {i === 1 && ' · Data Science & Cloud Computing'}
                  </span>
                  {edu.mention && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-code-sm font-bold">
                      <Icon name="emoji_events" size={14} />
                      {edu.mention}
                    </span>
                  )}
                </div>

                {i === 2 && (
                  <span className="text-body-sm text-on-surface-variant mt-1">
                    Spécialisation : Développement d&apos;Application
                  </span>
                )}

                <p className="text-body-md text-on-surface-variant mt-2">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant text-label-code-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}