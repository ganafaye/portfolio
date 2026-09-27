import { Icon } from '@/components/ui/Icon';
import { getContactFAQ } from '@/lib/data';
import { cn } from '@/lib/utils';

const ICON_STYLE = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
} as const;

export function ContactFAQ() {
  const faq = getContactFAQ();

  return (
    <section className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-space-xs text-primary">
          <Icon name="help_center" size={20} />
          <span className="text-label-code-sm uppercase font-semibold">
            Questions fréquentes
          </span>
        </div>
        <h2 className="text-headline-md font-bold text-on-surface">
          Modalités d&apos;embauche &amp; de collaboration
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Éclaircissements rapides sur mon statut, mon calendrier et mes modes
          d&apos;intervention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
        {faq.map((item) => (
          <div
            key={item.id}
            className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs"
          >
            <div
              className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center mb-1',
                ICON_STYLE[item.color]
              )}
            >
              <Icon name={item.icon} size={20} />
            </div>
            <h3 className="text-headline-sm font-bold text-on-surface">
              {item.title}
            </h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}