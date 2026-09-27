'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { CONTACT_INFO } from '@/lib/data';

type ContactData = typeof CONTACT_INFO;

interface Props {
  contact: ContactData;
}

export function ContactInfo({ contact }: Props) {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard
      .writeText(contact.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
      {/* Header */}
      <div className="flex items-center gap-3 pb-space-xs">
        <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
          <Icon name="forum" size={22} />
        </div>
        <div>
          <h2 className="text-headline-sm font-bold text-on-surface">
            Restons en contact
          </h2>
          <p className="text-label-code-sm text-on-surface-variant">
            Canaux &amp; Présence réseau
          </p>
        </div>
      </div>

      {/* Intro */}
      <p className="text-body-md text-on-surface-variant leading-relaxed">
        Ingénieur en SI &amp; DevOps (Master 2 UADB), je privilégie des échanges
        fluides, transparents et axés sur la valeur technique concrète de vos
        architectures logicielles.
      </p>

      {/* Canaux */}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        {/* Email avec copier */}
        <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Icon name="alternate_email" size={18} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-label-code-sm text-on-surface-variant">
                Courriel
              </span>
              <span className="text-label-code-lg font-semibold text-on-surface break-all">
                {contact.email}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={copyEmail}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-container-lowest text-on-surface text-label-code-sm font-medium shadow-sm hover:bg-surface-container-high transition-colors"
            >
              <Icon name="content_copy" size={16} className="text-primary" />
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-primary text-on-primary text-label-code-sm font-medium shadow-sm hover:bg-primary-container transition-colors"
            >
              <Icon name="send" size={16} />
              <span>Écrire</span>
            </a>
          </div>
        </div>

        {/* GitHub */}
        <a
          href={contact.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between group hover:bg-surface-container-high transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
              <Icon name="terminal" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-label-code-sm text-on-surface-variant">
                GitHub
              </span>
              <span className="text-label-code-lg font-semibold text-on-surface">
                {contact.socials.github.handle}
              </span>
            </div>
          </div>
          <Icon
            name="arrow_outward"
            size={18}
            className="text-outline group-hover:translate-x-0.5 transition-transform"
          />
        </a>

        {/* LinkedIn */}
        <a
          href={contact.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between group hover:bg-surface-container-high transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
              <Icon name="verified" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-label-code-sm text-on-surface-variant">
                LinkedIn
              </span>
              <span className="text-label-code-lg font-semibold text-on-surface">
                {contact.socials.linkedin.handle}
              </span>
            </div>
          </div>
          <Icon
            name="arrow_outward"
            size={18}
            className="text-outline group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </div>

      {/* Localisation & dispo */}
      <div className="mt-2 p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
        <div className="flex items-center gap-2 text-on-surface">
          <Icon name="my_location" size={20} className="text-primary" />
          <h3 className="text-headline-sm font-bold">
            Localisation &amp; disponibilité
          </h3>
        </div>

        <div className="flex flex-col gap-space-xs">
          <InfoLine
            icon="location_on"
            iconColor="text-tertiary"
            title={contact.location}
            subtitle={contact.timezone}
          />
          <InfoLine
            icon="event_available"
            iconColor="text-primary"
            title={contact.availability}
            subtitle={contact.availabilityDetail}
          />
          <InfoLine
            icon="schedule"
            iconColor="text-secondary"
            title="Temps de réponse moyen"
            subtitle={contact.responseTime}
            subtitleAccent
          />
        </div>
      </div>
    </div>
  );
}

function InfoLine({
  icon,
  iconColor,
  title,
  subtitle,
  subtitleAccent,
}: {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  subtitleAccent?: boolean;
}) {
  return (
    <div className="flex items-start gap-2 pt-1">
      <Icon name={icon} size={18} className={`${iconColor} mt-0.5`} />
      <div className="flex flex-col">
        <span className="text-body-md text-on-surface font-medium">{title}</span>
        <span
          className={`text-label-code-sm ${
            subtitleAccent
              ? 'text-tertiary font-semibold'
              : 'text-on-surface-variant'
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}