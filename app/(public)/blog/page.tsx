import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { PublicationsGrid } from '@/components/public/PublicationsGrid';
import { Footer } from '@/components/public/Footer';
import { getPublications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rapports & Publications · Gana FAYE',
  description:
    'Rapports de projets, TPs, retours d\'expérience et travaux en cybersécurité — Gana FAYE.',
};

export default async function BlogPage() {
  const publications = await getPublications();

  return (
    <div className="flex flex-col w-full gap-space-xl">
      {/* === HEADER === */}
      <section className="flex flex-col gap-space-md p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm">
        <nav className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <Icon name="chevron_right" size={16} />
          <span className="text-on-surface font-medium">
            Rapports &amp; Publications
          </span>
        </nav>

        <div className="flex items-start gap-space-sm">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary flex-shrink-0">
            <Icon name="newspaper" size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-headline-lg lg:text-4xl text-on-surface">
              Rapports &amp; Publications
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-3xl">
              Documentation technique, rapports de projets, travaux pratiques
              et retours d&apos;expérience sur l&apos;ingénierie SI, le Cloud,
              le DevOps et la Cybersécurité.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-4 border-t border-outline-variant/20">
          <div className="flex flex-col">
            <span className="text-label-metric text-primary">
              {publications.length}
            </span>
            <span className="text-body-sm text-on-surface-variant">
              Publications
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-secondary">3</span>
            <span className="text-body-sm text-on-surface-variant">
              Domaines
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-tertiary">2024-2026</span>
            <span className="text-body-sm text-on-surface-variant">
              Période
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-error">100%</span>
            <span className="text-body-sm text-on-surface-variant">
              PDF libres
            </span>
          </div>
        </div>
      </section>

      {/* === GRILLE FILTRABLE === */}
      <section className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-xs">
          <Icon name="filter_list" size={24} className="text-primary" />
          <h2 className="text-headline-md text-on-surface">
            Toutes les publications
          </h2>
        </div>

        <PublicationsGrid publications={publications} />
      </section>

      {/* === CTA === */}
      <section className="p-space-lg lg:p-space-xl rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 border border-outline-variant/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="p-2 rounded-lg bg-surface-container-lowest text-primary flex-shrink-0">
              <Icon name="forum" size={24} />
            </div>
            <div>
              <h3 className="text-headline-sm font-bold text-on-surface">
                Un sujet vous intéresse ?
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Échangeons autour de vos projets techniques, Cloud, DevOps ou
                Cybersécurité.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-medium text-body-sm hover:bg-primary-container transition-colors flex-shrink-0"
          >
            <Icon name="mail" size={18} />
            Me contacter
          </Link>
        </div>
      </section>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}