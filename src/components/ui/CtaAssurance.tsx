import { cn } from '@/lib/utils';

interface CtaAssuranceProps {
  items?: string[];
  tone?: 'muted' | 'light';
  className?: string;
}

const DEFAULT_ITEMS = [
  'Free 30-minute call',
  'No pitch, no obligation',
  'Speak directly with a founding partner',
];

export function CtaAssurance({
  items = DEFAULT_ITEMS,
  tone = 'muted',
  className,
}: CtaAssuranceProps) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm',
        tone === 'muted' ? 'text-subtle' : 'text-white/70',
        className
      )}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          {i > 0 && (
            <span
              aria-hidden="true"
              className={cn(
                'h-1 w-1 rounded-full',
                tone === 'muted' ? 'bg-border' : 'bg-white/40'
              )}
            />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}
