import { Icon } from '@/components/ui/Icon';
import type { Publication, PublicationType } from '@/lib/data';
import { cn } from '@/lib/utils';

interface Props {
  publication: Publication;
}

const TYPE_STYLE: Record<PublicationType, string> = {
  TP: 'bg-primary/10 text-primary',
  RETEX: 'bg-secondary/10 text-secondary',
  BLOG: 'bg-tertiary/10 text-tertiary',
  SECURITE: 'bg-error/10 text-error',
  PROJET: 'bg-tertiary/10 text-tertiary',
};

const TYPE_ICON: Record<PublicationType, string> = {
  TP: 'science',
  RETEX: 'reviews',
  BLOG: 'article',
  SECURITE: 'shield',
  PROJET: 'folder_special',
};

const TYPE_BG: Record<PublicationType, string> = {
  TP: 'from-primary/20 to-primary/5',
  RETEX: 'from-secondary/20 to-secondary/5',
  BLOG: 'from-tertiary/20 to-tertiary/5',
  SECURITE: 'from-error/20 to-error/5',
  PROJET: 'from-tertiary/20 to-tertiary/5',
};

const TYPE_ICON_COLOR: Record<PublicationType, string> = {
  TP: 'text-primary',
  RETEX: 'text-secondary',
  BLOG: 'text-tertiary',
  SECURITE: 'text-error',
  PROJET: 'text-tertiary',
};

export function PublicationCard({ publication }: Props) {
  const { type } = publication;

  return (
    <a
      href={publication.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all overflow-hidden"
    >
      {/* Cover */}
      <div
        className={cn(
          'relative aspect-[16/9] overflow-hidden bg-gradient-to-br flex items-center justify-center',
          TYPE_BG[type]
        )}
      >
        <Icon
          name={TYPE_ICON[type]}
          size={80}
          className={cn(
            'transition-transform duration-500 group-hover:scale-110',
            TYPE_ICON_COLOR[type]
          )}
        />

        {/* Badge type */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-label-code-sm font-bold',
              TYPE_STYLE[type]
            )}
          >
            <Icon name={TYPE_ICON[type]} size={12} />
            {type}
          </span>
        </div>

        {/* Icon PDF */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md flex items-center justify-center shadow-sm">
          <Icon name="picture_as_pdf" size={16} className="text-error" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-space-sm p-space-md flex-1">
        <div className="flex items-center gap-2">
          <span className="text-label-code-sm text-on-surface-variant">
            {publication.category}
          </span>
          <span className="text-on-surface-variant/40">·</span>
          <span className="text-label-code-sm text-on-surface-variant">
            {publication.date}
          </span>
        </div>

        <h3 className="text-headline-sm font-bold text-on-surface line-clamp-2 group-hover:text-primary transition-colors">
          {publication.title}
        </h3>

        <p className="text-body-sm text-on-surface-variant line-clamp-3 flex-1">
          {publication.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {publication.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant text-[10px] font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
          <span className="text-label-code-sm text-on-surface-variant flex items-center gap-1">
            <Icon name="description" size={14} />
            {publication.pages ? `${publication.pages} pages` : 'PDF'}
          </span>
          <span className="inline-flex items-center gap-1 text-primary text-label-code-sm font-bold group-hover:gap-2 transition-all">
            Lire
            <Icon name="arrow_forward" size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}