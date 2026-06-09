import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visual + semantic invalid state (sets aria-invalid + danger ring). */
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        'flex h-11 w-full rounded-lg border bg-surface px-3.5 text-sm text-foreground',
        'placeholder:text-subtle transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        invalid
          ? 'border-danger focus-visible:ring-danger'
          : 'border-border hover:border-subtle focus-visible:ring-accent',
        className
      )}
      {...props}
    />
  );
});

export const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(function Label({ className, ...props }, ref) {
  return (
    <label
      ref={ref}
      className={cn(
        'mb-1.5 block text-sm font-medium text-foreground',
        className
      )}
      {...props}
    />
  );
});
