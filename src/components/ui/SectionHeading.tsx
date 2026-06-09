import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('text-center', className)}>
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-4xl font-semibold">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
