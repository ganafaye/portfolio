import type { Metadata } from 'next';
import { Icon } from '@/components/ui/Icon';
import { ContactInfo } from '@/components/public/ContactInfo';
import { ContactForm } from '@/components/public/ContactForm';
import { ContactFAQ } from '@/components/public/ContactFAQ';
import { getContactInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact · Gana FAYE',
  description:
    'Contactez Gana FAYE — Ingénieur SI & DevOps. Disponible pour stages, CDI et missions freelance.',
};

export default async function ContactPage() {
  const contact = getContactInfo();

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* === PAGE HEADER === */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs max-w-3xl">
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-label-code-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              TERMINAL DE LIAISON SI
            </span>
          </div>
          <h1 className="text-headline-lg text-on-surface tracking-tight">
            Me Contacter
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Vous avez un projet, une opportunité de collaboration ou souhaitez
            échanger autour de l&apos;ingénierie des Systèmes d&apos;Information ?
            N&apos;hésitez pas à me joindre.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-surface-container-lowest shadow-sm self-start md:self-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
          <span className="text-label-code-sm font-semibold text-tertiary">
            Disponible
          </span>
          <span className="text-label-code-sm text-on-surface-variant/60 font-mono pl-1">
            2026
          </span>
        </div>
      </section>

      {/* === GRILLE : Info (1/3) + Form (2/3) === */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* Colonne gauche */}
        <section className="lg:col-span-4">
          <ContactInfo contact={contact} />
        </section>

        {/* Colonne droite */}
        <section className="lg:col-span-8 flex flex-col gap-space-lg">
          <ContactForm recipientEmail={contact.email} />
        </section>
      </div>

      {/* === FAQ === */}
      <ContactFAQ />

      {/* === FOOTER === */}
      <footer className="mt-4 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant">
        <div className="text-body-sm text-center sm:text-left">
          <strong className="text-on-surface font-medium">
            Réponse garantie
          </strong>{' '}
          · &lt; 24h en moyenne
        </div>
        <div className="text-body-sm text-center sm:text-right">
          Conçu par{' '}
          <strong className="text-on-surface font-medium">Gana FAYE</strong> · ©
          2026
        </div>
      </footer>
    </div>
  );
}