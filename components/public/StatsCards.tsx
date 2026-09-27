import { Icon } from '@/components/ui/Icon';
import { STATS } from '@/lib/data';
import { cn } from '@/lib/utils';

const COLOR_MAP = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
} as const;

const BG_MAP = {
  primary: 'bg-surface-container-low',
  secondary: 'bg-surface-container-high',
  tertiary: 'bg-surface-container-low',
} as const;

export function StatsCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
      {STATS.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center gap-space-md p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            className={cn(
              'w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0',
              BG_MAP[stat.color],
              COLOR_MAP[stat.color]
            )}
          >
            <Icon name={stat.icon} size={32} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-label-metric text-on-surface leading-tight tracking-tight">
              {stat.value}
            </span>
            <span className="text-body-md text-on-surface-variant truncate">
              {stat.label}
            </span>
            <span
              className={cn(
                'text-label-code-sm font-medium',
                COLOR_MAP[stat.color]
              )}
            >
              {stat.detail}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}