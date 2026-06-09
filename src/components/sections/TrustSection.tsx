import { Container } from '@/components/ui';
import { logos, stats } from '@/content';

export function TrustSection() {
  return (
    <section className="border-y border-border bg-surface py-14">
      <Container>
        {/* Logo strip */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-subtle">
          Trusted by teams at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-tight text-muted opacity-60 transition-opacity hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-foreground">
                {value}
              </p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
