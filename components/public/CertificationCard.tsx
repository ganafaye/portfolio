import { Icon } from '@/components/ui/Icon';
import type { Certification } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  cert: Certification;
}

const ISSUER_STYLE = {
  Oracle: 'bg-error-container text-on-error-container',
  AWS: 'bg-surface-container-high text-on-surface',
  IBM: 'bg-secondary-fixed text-on-secondary-fixed-variant',
  Meta: 'bg-primary/10 text-primary',
  Coursera: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  Autre: 'bg-surface-container-high text-on-surface',
} as const;

const ISSUER_ICON = {
  Oracle: 'database',
  AWS: 'cloud',
  IBM: 'psychology',
  Meta: 'public',
  Coursera: 'school',
  Autre: 'workspace_premium',
} as const;

export function CertificationCard({ cert }: Props) {
  return (
    <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-all">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-code-sm font-bold',
              ISSUER_STYLE[cert.issuer]
            )}
          >
            <Icon name={ISSUER_ICON[cert.issuer]} size={14} />
            {cert.issuer}
          </span>
          <Icon name="picture_as_pdf" size={24} className="text-error" />
        </div>
        <h3 className="text-headline-sm text-on-surface">{cert.title}</h3>
        <p className="text-body-sm text-on-surface-variant">{cert.description}</p>
      </div>
      <div className="pt-2 flex items-center justify-between">
        <span className="text-label-code-sm text-on-surface-variant">
          {cert.issuerLabel}
        </span>
        <a
          href={cert.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary hover:text-primary-container text-label-code-sm font-bold"
        >
          <span>Visualiser</span>
          <Icon name="visibility" size={16} />
        </a>
      </div>
    </div>
  );
}