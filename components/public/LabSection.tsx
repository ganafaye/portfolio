'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { Lab } from '@/lib/data';
import { cn } from '@/lib/utils';

interface Props {
  lab: Lab;
  index: number;
}

const BANNER_GRADIENT = {
  primary: 'from-primary/90 via-primary to-primary-container',
  secondary: 'from-secondary/90 via-secondary to-secondary-fixed',
} as const;

const BULLET_COLOR = {
  primary: 'text-primary',
  secondary: 'text-secondary',
} as const;

const BADGE_STYLE = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
} as const;

const BTN_STYLE = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-primary',
} as const;

const STAT_COLOR = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

const NODE_COLOR = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

const PROJECT_BORDER = {
  live: 'border-l-tertiary',
  version: 'border-l-primary',
  draft: 'border-l-outline',
} as const;

const PROJECT_BADGE = {
  live: 'bg-tertiary/15 text-tertiary',
  version: 'bg-surface-container-high text-on-surface-variant',
  draft: 'bg-outline/15 text-outline',
} as const;

export function LabSection({ lab, index }: Props) {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm">
      {/* ============ BANNIÈRE ============ */}
      <div
        className={cn(
          'relative overflow-hidden px-space-lg lg:px-space-xl pt-space-xl pb-space-lg',
          'bg-gradient-to-br',
          BANNER_GRADIENT[lab.color]
        )}
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg flex-shrink-0 ring-1 ring-white/30">
            <Icon name={lab.icon} size={40} className="text-white" />
          </div>

          <div className="flex flex-col gap-1 text-white">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[28px] lg:text-[36px] font-extrabold tracking-tight leading-none">
                {lab.name}
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-label-code-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {lab.status}
              </span>
            </div>
            <p className="text-body-md font-medium opacity-90">{lab.subtitle}</p>
          </div>
        </div>
      </div>

      {/* ============ CONTENU ============ */}
      <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-xl">
        {/* Image + Description côte à côte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          {/* Image */}
          <div
            className={cn(
              'flex justify-center',
              index % 2 === 1 ? 'lg:order-2 lg:justify-end' : 'lg:order-1 lg:justify-start'
            )}
          >
            <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-outline-variant/20">
              <Image
                src={lab.coverImage}
                alt={`${lab.name} — Aperçu`}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-sm">
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full animate-pulse',
                    lab.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  )}
                />
                <span className="text-[10px] text-on-surface font-semibold tracking-wide">
                  {lab.coverBadge}
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
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {lab.description}
            </p>

            <ul className="flex flex-col gap-2 mt-2">
              {lab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Icon
                    name="check_circle"
                    size={20}
                    className={cn('flex-shrink-0 mt-0.5', BULLET_COLOR[lab.color])}
                  />
                  <span className="text-body-md text-on-surface">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-space-sm mt-3">
              {lab.demoUrl && (
                <a
                  href={lab.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-body-md shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all',
                    BTN_STYLE[lab.color]
                  )}
                >
                  <Icon name="open_in_new" size={18} />
                  <span>Ouvrir le Lab</span>
                </a>
              )}
              {lab.repoUrl && (
                <a
                  href={lab.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-medium text-body-md hover:bg-surface-container-high transition-colors"
                >
                  <Icon name="code" size={18} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Stats du lab */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-4 border-t border-outline-variant/20">
          {lab.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className={cn(
                  'text-label-metric leading-tight',
                  STAT_COLOR[stat.color]
                )}
              >
                {stat.value}
              </span>
              <span className="text-label-code-sm text-on-surface-variant">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="stacks" size={20} className={BULLET_COLOR[lab.color]} />
            <h3 className="text-headline-sm font-bold text-on-surface">
              Stack technique
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-code-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Accordéon */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setSpecsOpen((o) => !o)}
            className="w-full flex items-center justify-between p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all group"
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center',
                  BADGE_STYLE[lab.color]
                )}
              >
                <Icon name="memory" size={22} />
              </div>
              <span className="text-headline-sm font-bold text-on-surface">
                {lab.internalProjects
                  ? 'Stack & Projets internes'
                  : 'Topologie & Stack technique'}
              </span>
            </div>
            <Icon
              name="expand_more"
              size={28}
              className={cn(
                'text-on-surface-variant transition-transform duration-300',
                specsOpen && 'rotate-180'
              )}
            />
          </button>

          <div
            className={cn(
              'overflow-hidden transition-all duration-500',
              specsOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg mt-space-md">
              {/* Projets internes */}
              {lab.internalProjects && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="data_object"
                      size={22}
                      className={BULLET_COLOR[lab.color]}
                    />
                    <h3 className="text-headline-sm font-bold text-on-surface">
                      Projets internes déployés
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                    {lab.internalProjects.map((proj) => (
                      <div
                        key={proj.name}
                        className={cn(
                          'p-4 rounded-xl bg-surface-container-low flex flex-col gap-2 border-l-4',
                          PROJECT_BORDER[proj.statusStyle]
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-headline-sm font-bold text-on-surface">
                            {proj.name}
                          </span>
                          <span
                            className={cn(
                              'px-2 py-0.5 rounded-full text-[10px] font-mono font-bold',
                              PROJECT_BADGE[proj.statusStyle]
                            )}
                          >
                            {proj.status}
                          </span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant leading-snug">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-mono text-on-surface-variant"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topologie */}
              {lab.topology && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="account_tree"
                      size={22}
                      className={BULLET_COLOR[lab.color]}
                    />
                    <h3 className="text-headline-sm font-bold text-on-surface">
                      {lab.topology.title}
                    </h3>
                  </div>
                  <div className="w-full bg-surface-container-low rounded-xl p-4 flex flex-wrap items-center justify-center gap-3">
                    {lab.topology.nodes.map((node, i) => (
                      <div key={node.label} className="flex items-center gap-3">
                        <div className="flex flex-col items-center gap-1 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
                          <Icon
                            name={node.icon}
                            size={18}
                            className={NODE_COLOR[node.color]}
                          />
                          <span className="text-label-code-sm text-on-surface font-medium text-center">
                            {node.label}
                          </span>
                        </div>
                        {i < lab.topology!.nodes.length - 1 && (
                          <span className="font-bold text-[18px] text-on-surface-variant">
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack complète */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Icon
                    name="stacks"
                    size={22}
                    className={BULLET_COLOR[lab.color]}
                  />
                  <h3 className="text-headline-sm font-bold text-on-surface">
                    Stack complète
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {lab.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-code-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}