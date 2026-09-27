'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  project: Project;
  index: number;
}

const COLOR_BY_INDEX = ['primary', 'secondary', 'tertiary', 'error'] as const;

const GRADIENT_MAP = {
  primary: 'from-primary/10 to-transparent',
  secondary: 'from-secondary/10 to-transparent',
  tertiary: 'from-tertiary/10 to-transparent',
  error: 'from-error/10 to-transparent',
} as const;

const ICON_GRADIENT = {
  primary: 'from-primary to-primary-container',
  secondary: 'from-secondary to-secondary-fixed',
  tertiary: 'from-tertiary to-tertiary-container',
  error: 'from-error to-error-container',
} as const;

const BG_BLUR = {
  primary: 'bg-primary/10',
  secondary: 'bg-secondary/10',
  tertiary: 'bg-tertiary/10',
  error: 'bg-error/10',
} as const;

const BULLET_ICON_COLOR = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  error: 'text-error',
} as const;

const BADGE_STYLE = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
  error: 'bg-error/10 text-error',
} as const;

const BTN_STYLE = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-primary',
  tertiary: 'bg-tertiary text-on-tertiary',
  error: 'bg-error text-on-error',
} as const;

const ICON_NAME = {
  primary: 'inventory_2',
  secondary: 'local_library',
  tertiary: 'warehouse',
  error: 'medical_services',
} as const;

const STATUS_LABEL = {
  primary: 'v2.4 Prod',
  secondary: 'R&D UADB',
  tertiary: 'Production',
  error: 'En ligne',
} as const;

export function ProjectSection({ project, index }: Props) {
  const [open, setOpen] = useState(false);
  const color = COLOR_BY_INDEX[index % 4];
  const bullets = project.tags; // On réutilise les tags comme bullets

  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm">
      {/* Décor */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br pointer-events-none',
          GRADIENT_MAP[color]
        )}
      />
      <div
        className={cn(
          'absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none',
          BG_BLUR[color]
        )}
      />

      <div className="relative p-space-lg lg:p-space-xl flex flex-col gap-space-xl">
        {/* Bloc principal : image + contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          {/* Image */}
          <div
            className={cn(
              'flex justify-center lg:justify-start',
              index % 2 === 1 ? 'lg:order-2 lg:justify-end' : 'lg:order-1'
            )}
          >
            <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-outline-variant/20">
              <Image
                src={project.coverImage}
                alt={`${project.title} — Aperçu`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
              {/* Badge statut */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-sm">
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full animate-pulse',
                    color === 'primary' && 'bg-primary',
                    color === 'secondary' && 'bg-secondary',
                    color === 'tertiary' && 'bg-tertiary',
                    color === 'error' && 'bg-error'
                  )}
                />
                <span className="text-[10px] text-on-surface font-semibold tracking-wide">
                  {STATUS_LABEL[color]}
                </span>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div
            className={cn(
              'flex flex-col gap-space-md',
              index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
            )}
          >
            {/* Header avec icône */}
            <div className="flex items-center gap-3 flex-wrap">
              <div
                className={cn(
                  'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-md flex-shrink-0',
                  ICON_GRADIENT[color]
                )}
              >
                <Icon
                  name={ICON_NAME[color]}
                  size={30}
                  className="text-on-primary"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-[28px] lg:text-[36px] font-extrabold text-on-surface tracking-tight leading-none">
                    {project.title}
                  </h2>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-code-sm font-semibold',
                      BADGE_STYLE[color]
                    )}
                  >
                    <span
                      className={cn(
                        'w-2 h-2 rounded-full animate-pulse',
                        color === 'primary' && 'bg-primary',
                        color === 'secondary' && 'bg-secondary',
                        color === 'tertiary' && 'bg-tertiary',
                        color === 'error' && 'bg-error'
                      )}
                    />
                    {STATUS_LABEL[color]}
                  </span>
                </div>
                <p
                  className={cn(
                    'text-body-md font-semibold mt-0.5',
                    BULLET_ICON_COLOR[color]
                  )}
                >
                  {project.tags.join(' · ')}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {project.summary}
            </p>

            {/* Stack rapide */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-code-sm font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 6 && (
                <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-label-code-sm font-medium">
                  +{project.stack.length - 6}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-space-sm mt-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-body-md shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all',
                    BTN_STYLE[color]
                  )}
                >
                  <Icon name="open_in_new" size={18} />
                  <span>Visiter le site</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-body-md transition-colors',
                    project.demoUrl
                      ? 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'
                      : cn(BTN_STYLE[color], 'font-semibold shadow-sm hover:opacity-90')
                  )}
                >
                  <Icon name="code" size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Accordéon détails techniques */}
        <div className="flex flex-col gap-space-md">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="w-full flex items-center justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all group"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  BADGE_STYLE[color]
                )}
              >
                <Icon name="memory" size={22} />
              </div>
              <span className="text-headline-sm font-bold text-on-surface">
                Détails techniques
              </span>
            </div>
            <Icon
              name="expand_more"
              size={28}
              className={cn(
                'text-on-surface-variant transition-transform duration-300',
                open && 'rotate-180',
                color === 'primary' && 'group-hover:text-primary',
                color === 'secondary' && 'group-hover:text-secondary',
                color === 'tertiary' && 'group-hover:text-tertiary',
                color === 'error' && 'group-hover:text-error'
              )}
            />
          </button>

          <div
            className={cn(
              'overflow-hidden transition-all duration-500',
              open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
              {/* Stack complète */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Icon
                    name="stacks"
                    size={22}
                    className={BULLET_ICON_COLOR[color]}
                  />
                  <h3 className="text-headline-sm font-bold text-on-surface">
                    Stack technique complète
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-code-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags / Points clés */}
              <div className="flex flex-col gap-3 pt-2 border-t border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <Icon
                    name="check_circle"
                    size={22}
                    className={BULLET_ICON_COLOR[color]}
                  />
                  <h3 className="text-headline-sm font-bold text-on-surface">
                    Points clés
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Icon
                        name="arrow_right"
                        size={18}
                        className={cn(
                          'flex-shrink-0 mt-0.5',
                          BULLET_ICON_COLOR[color]
                        )}
                      />
                      <span className="text-body-md text-on-surface">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}