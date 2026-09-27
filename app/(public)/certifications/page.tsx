import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { CertificationsGrid } from '@/components/public/CertificationsGrid';
import { Footer } from '@/components/public/Footer';
import { getAllCertifications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Certifications · Gana FAYE',
  description:
    'Toutes les certifications professionnelles de Gana FAYE — Oracle, AWS, IBM, Meta, Coursera.',
};

export default async function CertificationsPage() {
  const certifications = await getAllCertifications();

  return (
    <div className="flex flex-col w-full gap-space-xl">
      {/* === HEADER === */}
      <section className="flex flex-col gap-space-md p-space-lg lg:p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm">
        {/* Fil d'Ariane */}
        <nav className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <Icon name="chevron_right" size={16} />
          <span className="text-on-surface font-medium">Certifications</span>
        </nav>

        {/* Titre + description */}
        <div className="flex items-start gap-space-sm">
          <div className="p-3 rounded-xl bg-surface-container-low text-secondary flex-shrink-0">
            <Icon name="workspace_premium" size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-headline-lg lg:text-4xl text-on-surface">
              Mes Certifications Professionnelles
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-3xl">
              Accréditations validées auprès d&apos;Oracle, Amazon Web Services, IBM,
              Meta et Coursera. Chaque certification atteste de compétences techniques
              vérifiées par des organismes reconnus mondialement.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-4 border-t border-outline-variant/20">
          <div className="flex flex-col">
            <span className="text-label-metric text-secondary">
              {certifications.length}
            </span>
            <span className="text-body-sm text-on-surface-variant">
              Certifications
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-primary">5</span>
            <span className="text-body-sm text-on-surface-variant">
              Organismes
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-tertiary">2022-2026</span>
            <span className="text-body-sm text-on-surface-variant">
              Période
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-metric text-on-surface">100%</span>
            <span className="text-body-sm text-on-surface-variant">
              Vérifiables
            </span>
          </div>
        </div>
      </section>

      {/* === GRILLE FILTRABLE === */}
      <section className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-xs">
          <Icon name="filter_list" size={24} className="text-primary" />
          <h2 className="text-headline-md text-on-surface">
            Toutes les certifications
          </h2>
        </div>

        <CertificationsGrid certifications={certifications} />
      </section>

      {/* === CTA === */}
      <section className="p-space-lg lg:p-space-xl rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 border border-outline-variant/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="p-2 rounded-lg bg-surface-container-lowest text-primary flex-shrink-0">
              <Icon name="verified" size={24} />
            </div>
            <div>
              <h3 className="text-headline-sm text-on-surface">
                Vous souhaitez en savoir plus ?
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Chaque certification est vérifiable via son PDF original.
                Contactez-moi pour tout complément.
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