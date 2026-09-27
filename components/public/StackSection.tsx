import { Icon } from '@/components/ui/Icon';
import type { Skill } from '@/lib/types';
import { cn } from '@/lib/utils';

interface Props {
  skills: Skill[];
}

const CATEGORY_COLORS = [
  'text-primary',
  'text-secondary',
  'text-tertiary',
  'text-on-surface-variant',
] as const;

export function StackSection({ skills }: Props) {
  return (
    <div className="flex flex-col gap-space-lg p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-space-sm pb-2">
        <div className="p-2 rounded-lg bg-surface-container-low text-primary">
          <Icon name="stacks" size={24} />
        </div>
        <div>
          <h2 className="text-headline-md text-on-surface">Stack Technique</h2>
          <span className="text-label-code-sm text-on-surface-variant">
            Outils du quotidien
          </span>
        </div>
      </div>

      {/* Catégories */}
      {skills.map((skill, i) => (
        <div key={skill.id} className="flex flex-col gap-2">
          <span
            className={cn(
              'text-label-code-sm uppercase font-bold tracking-wider',
              CATEGORY_COLORS[i % CATEGORY_COLORS.length]
            )}
          >
            {skill.category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface text-label-code-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}