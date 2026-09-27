'use client';

import { useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center gap-4 max-w-md">
        <div className="p-4 rounded-2xl bg-error-container text-error">
          <Icon name="error" size={48} />
        </div>
        <h1 className="text-headline-lg text-on-surface">
          Une erreur est survenue
        </h1>
        <p className="text-body-md text-on-surface-variant">
          Quelque chose s&apos;est mal passé. Réessayez ou revenez à
          l&apos;accueil.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors"
          >
            <Icon name="refresh" size={18} />
            Réessayer
          </button>
          <a
            href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-medium hover:bg-surface-container-high transition-colors"
          >
            <Icon name="home" size={18} />
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}