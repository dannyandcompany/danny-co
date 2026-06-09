import { cn } from '@/lib/utils';
import { Container } from './Container';

/**
 * Sticky, blurred navigation shell. Layout-only primitive — drop a brand,
 * links and actions inside. The app's <Header> is built on this pattern.
 */
export function Navbar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        'sticky top-0 z-header border-b border-border bg-background/80 backdrop-blur-md',
        className
      )}
      {...props}
    >
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        {children}
      </Container>
    </header>
  );
}
