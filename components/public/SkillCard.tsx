import { Icon } from '@/components/ui/Icon';
import type { SkillDomain } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  domain: SkillDomain;
}

const ICON_BG = {
  primary: 'bg-surface-container-low text-primary',
  secondary: 'bg-surface-container-high text-secondary',
  tertiary: 'bg-surface-container-low text-tertiary',
  error: 'bg-error-container text-error',
} as const;

const BADGE_STYLE = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed-variant',
  tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  error: 'bg-error-container text-on-error-container',
} as const;

export function SkillCard({ domain }: Props) {
  return (
    <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center',
              ICON_BG[domain.color]
            )}
          >
            <Icon name={domain.icon} size={24} />
          </div>
          <div>
            <h3 className="text-headline-md text-on-surface">{domain.title}</h3>
            <span className="text-label-code-sm text-on-surface-variant">
              {domain.subtitle}
            </span>
          </div>
        </div>
        <span
          className={cn(
            'text-label-code-sm px-2 py-0.5 rounded-full font-bold',
            BADGE_STYLE[domain.color]
          )}
        >
          {domain.number}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-2">
        {domain.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface text-label-code-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}