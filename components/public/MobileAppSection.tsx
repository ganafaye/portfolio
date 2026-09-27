'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { MobileLightbox } from './MobileLightbox';
import type { MobileApp } from '@/lib/data';
import { cn } from '@/lib/utils';

interface Props {
  app: MobileApp;
  index: number;
}

const BANNER_GRADIENT = {
  primary: 'from-primary/90 via-primary to-primary-container',
  secondary: 'from-secondary/90 via-secondary to-secondary-fixed',
  tertiary: 'from-tertiary/90 via-tertiary to-tertiary-container',
} as const;

const BULLET_COLOR = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

const BADGE_STYLE = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
} as const;

const BTN_STYLE = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-primary',
  tertiary: 'bg-tertiary text-on-tertiary',
} as const;

const DOT_BG = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
} as const;

export function MobileAppSection({ app, index }: Props) {
  const [specsOpen, setSpecsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-surface-container-lowest shadow-sm">
        {/* ============ BANNIÈRE ============ */}
        <div
          className={cn(
            'relative overflow-hidden px-space-lg lg:px-space-xl pt-space-xl pb-space-lg',
            'bg-gradient-to-br',
            BANNER_GRADIENT[app.color]
          )}
        >
          {/* Décor */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg flex-shrink-0 ring-1 ring-white/30 overflow-hidden">
              {app.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={app.logoUrl}
                  alt={`Logo ${app.name}`}
                  className="w-full h-full object-contain p-1.5"
                />
              ) : (
                <Icon
                  name={app.icon}
                  size={40}
                  className="text-white"
                />
              )}
            </div>

            {/* Nom + tagline + badge */}
            <div className="flex flex-col gap-1 text-white">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-[28px] lg:text-[36px] font-extrabold tracking-tight leading-none">
                  {app.name}
                </h2>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-label-code-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {app.status}
                </span>
              </div>
              <p className="text-body-md font-medium opacity-90">
                {app.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* ============ CONTENU ============ */}
        <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg">
          {/* Description */}
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {app.description}
          </p>

          {/* Bullets */}
          <ul className="flex flex-col gap-2">
            {app.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <Icon
                  name="check_circle"
                  size={20}
                  className={cn('flex-shrink-0 mt-0.5', BULLET_COLOR[app.color])}
                />
                <span
                  className="text-body-md text-on-surface"
                  dangerouslySetInnerHTML={{ __html: bullet }}
                />
              </li>
            ))}
          </ul>

          {/* Trio de phones */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-headline-sm font-bold text-on-surface">
                Aperçus de l&apos;application
              </h3>
              <span className="text-label-code-sm text-on-surface-variant">
                {app.captures.length} captures · cliquez pour agrandir
              </span>
            </div>

            {/* Scroll horizontal sur mobile, grid sur desktop */}
            <div className="flex gap-space-md overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:gap-space-lg">
              {app.captures.map((capture, i) => (
                <button
                  key={capture.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={cn(
                    'capture-card group relative flex-shrink-0 w-[200px] sm:w-full cursor-zoom-in',
                    'transition-all duration-300'
                  )}
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div
                    className={cn(
                      'relative aspect-[9/19] rounded-2xl overflow-hidden',
                      'shadow-lg ring-1 ring-outline-variant/30',
                      'transition-all duration-500',
                      'group-hover:scale-[1.03] group-hover:-translate-y-2',
                      app.color === 'primary' &&
                        'group-hover:shadow-[0_30px_60px_-20px_rgba(0,101,145,0.5)]',
                      app.color === 'secondary' &&
                        'group-hover:shadow-[0_30px_60px_-20px_rgba(107,56,212,0.5)]',
                      app.color === 'tertiary' &&
                        'group-hover:shadow-[0_30px_60px_-20px_rgba(0,108,73,0.5)]'
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={capture.src}
                      alt={`${app.name} — ${capture.caption}`}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-inverse-surface/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                        <Icon
                          name="zoom_in"
                          size={24}
                          className="text-on-surface"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="mt-2 text-label-code-sm text-on-surface-variant text-center">
                    {capture.caption}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Stack technique */}
          <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/20">
            <div className="flex items-center gap-2 mb-1">
              <Icon
                name="stacks"
                size={20}
                className={BULLET_COLOR[app.color]}
              />
              <h3 className="text-headline-sm font-bold text-on-surface">
                Stack technique
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {app.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface text-label-code-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-space-sm pt-2">
            {app.repoUrl && (
              <a
                href={app.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-body-md shadow-sm hover:opacity-90 hover:-translate-y-0.5 transition-all',
                  BTN_STYLE[app.color]
                )}
              >
                <Icon name="code" size={18} />
                <span>GitHub</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-medium text-body-md hover:bg-surface-container-high transition-colors"
            >
              <Icon name="photo_library" size={18} />
              <span>Voir les {app.captures.length} captures</span>
            </button>
          </div>

          {/* Accordéon specs */}
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
                    BADGE_STYLE[app.color]
                  )}
                >
                  <Icon name="memory" size={22} />
                </div>
                <span className="text-headline-sm font-bold text-on-surface">
                  Spécifications techniques
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
                specsOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-md">
                {app.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1"
                  >
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-wide font-mono">
                      {spec.label}
                    </span>
                    <span className="text-[14px] font-bold text-on-surface">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <MobileLightbox
          captures={app.captures}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + app.captures.length) % app.captures.length
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % app.captures.length)
          }
        />
      )}
    </>
  );
}