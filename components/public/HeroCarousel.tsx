'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '@/lib/data';
import { cn } from '@/lib/utils';

const INTERVAL = 5000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <>
      {/* Slides */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              i === current ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, calc(100vw - 292px)"
            />
          </div>
        ))}
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
            )}
          />
        ))}
      </div>
    </>
  );
}