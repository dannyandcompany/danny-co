import { cn } from './utils';

/**
 * Tiny, dependency-free class-variance-authority. Zero runtime style
 * computation — just maps selected variant keys to static Tailwind strings,
 * so components stay tree-shakable and fast.
 */
type VariantShape = Record<string, Record<string, string>>;

type VariantSelection<V extends VariantShape> = {
  [K in keyof V]?: keyof V[K];
};

interface CvaConfig<V extends VariantShape> {
  variants?: V;
  defaultVariants?: VariantSelection<V>;
}

export type VariantProps<T> = T extends (props?: infer P) => string
  ? Omit<NonNullable<P>, 'className'>
  : never;

export function cva<V extends VariantShape>(
  base: string,
  config: CvaConfig<V> = {}
) {
  const { variants, defaultVariants } = config;

  return (props: VariantSelection<V> & { className?: string } = {}): string => {
    if (!variants) return cn(base, props.className);

    const selected = (Object.keys(variants) as (keyof V)[]).map((key) => {
      const value = props[key] ?? defaultVariants?.[key];
      return value == null ? undefined : variants[key][value as keyof V[typeof key]];
    });

    return cn(base, ...selected, props.className);
  };
}
