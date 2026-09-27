import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-surface">
      <div className="flex flex-col items-center text-center gap-4 max-w-md">
        <div className="p-4 rounded-2xl bg-surface-container-low text-primary">
          <Icon name="explore_off" size={48} />
        </div>
        <h1 className="text-[64px] font-extrabold text-primary leading-none">
          404
        </h1>
        <h2 className="text-headline-lg text-on-surface">Page introuvable</h2>
        <p className="text-body-md text-on-surface-variant">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors mt-2"
        >
          <Icon name="home" size={18} />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}