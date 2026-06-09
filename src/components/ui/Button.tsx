import { forwardRef } from 'react';
import { cva, type VariantProps } from '@/lib/cva';

const button = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // High-contrast solid — auto-inverts per theme
        primary:
          'bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]',
        // Quiet, neutral surface
        secondary:
          'bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 active:scale-[0.98]',
        // Minimal, chrome on hover only
        ghost:
          'bg-transparent text-muted hover:bg-elevated hover:text-foreground active:scale-[0.98]',
        // Dangerous / irreversible actions
        destructive:
          'bg-danger text-danger-foreground hover:bg-danger/90 active:scale-[0.98]',
        // Solid white, brand text — for use on accent/dark surfaces
        inverse:
          'bg-white text-accent-hover hover:bg-white/90 active:scale-[0.98]',
        // Glass outline — secondary action on accent/dark surfaces
        'inverse-outline':
          'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 active:scale-[0.98]',
        // Brand gradient — conversion CTA
        cta: 'bg-accent-gradient text-accent-foreground shadow-glow hover:-translate-y-0.5 hover:opacity-95 active:translate-y-0 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type ButtonVariants = VariantProps<typeof button>;

type ButtonAsButton = ButtonVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonVariants &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Renders a semantic <a> when `href` is provided, otherwise a <button>.
 * External links automatically get safe rel/target. Ref-forwarding keeps it
 * usable as a trigger for menus, tooltips and forms.
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ variant, size, className, ...props }, ref) {
  const classes = button({ variant, size, className });

  if (typeof props.href === 'string') {
    const isExternal = /^https?:\/\//.test(props.href);
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
