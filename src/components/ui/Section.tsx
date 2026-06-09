import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  contained?: boolean;
}

export function Section({
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-22 lg:py-30', className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
