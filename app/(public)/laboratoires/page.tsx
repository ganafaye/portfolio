import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { LabSection } from '@/components/public/LabSection';
import { Footer } from '@/components/public/Footer';
import { getLabs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Laboratoires · Gana FAYE',
  description:
    'Homelabs auto-hébergés — Data Science & IA, DevOps & Cloud Infrastructure.',
};

export default async function LabsPage() {
  const labs = await getLabs();

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* === PAGE HEADER === */}
      <section className="flex flex-col gap-space-xs max-w-3xl">
        <div className="flex items-center gap-space-xs flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-label-code-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            HOMELABS AUTONOMES
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-label-code-sm font-semibold">
            {labs.length} Labs en production
          </span>
        </div>
        <h1 className="text-headline-lg lg:text-4xl text-on-surface tracking-tight">
          Mes Laboratoires
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Environnements de recherche appliquée, bacs à sable DevOps et bancs
          d&apos;essai pour modèles d&apos;intelligence artificielle. Chaque lab
          est hébergé et maintenu en autonomie.
        </p>
      </section>

      {/* === LABS === */}
      <div className="flex flex-col gap-space-xl">
        {labs.map((lab, index) => (
          <LabSection key={lab.id} lab={lab} index={index} />
        ))}
      </div>

      {/* === CTA === */}
      <section className="relative overflow-hidden p-space-lg lg:p-space-xl rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 border border-outline-variant/20">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-sm">
            <div className="p-2 rounded-lg bg-surface-container-lowest text-primary flex-shrink-0">
              <Icon name="forum" size={24} />
            </div>
            <div>
              <h3 className="text-headline-sm font-bold text-on-surface">
                Vous voulez discuter infra, IA ou DevOps ?
              </h3>
              <p className="text-body-sm text-on-surface-variant mt-1">
                Je partage volontiers mes retours d&apos;expérience sur
                l&apos;auto-hébergement, les pipelines ML ou les clusters K8s.
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