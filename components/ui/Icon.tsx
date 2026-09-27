import { cn } from '@/lib/utils';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined select-none', className)}
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}