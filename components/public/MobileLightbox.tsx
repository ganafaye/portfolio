'use client';

import { useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

interface Capture {
  src: string;
  caption: string;
}

interface Props {
  captures: Capture[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function MobileLightbox({
  captures,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Navigation clavier
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev]);

  const current = captures[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-inverse-surface/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
      >
        <Icon name="close" size={24} />
      </button>

      {/* Prev */}
      {captures.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Précédent"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
        >
          <Icon name="chevron_left" size={24} />
        </button>
      )}

      {/* Next */}
      {captures.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Suivant"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
        >
          <Icon name="chevron_right" size={24} />
        </button>
      )}

      {/* Image */}
      <div className="flex flex-col items-center gap-3 max-h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.caption}
          className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <p className="text-body-md text-white/80 text-center">
          {current.caption}
        </p>
        <p className="text-label-code-sm text-white/40 font-mono">
          {currentIndex + 1} / {captures.length}
        </p>
      </div>
    </div>
  );
}