import { Section, SectionHeading, Button, Reveal } from '@/components/ui';

const platforms = [
  {
    name: 'Arvispro',
    domain: 'arvispro.id',
    href: 'https://arvispro.id',
    tag: 'Business',
    description:
      'A business platform to run operations, manage growth, and scale with confidence.',
  },
  {
    name: 'Tetuku',
    domain: 'tetuku.id',
    href: 'https://tetuku.id',
    tag: 'Services',
    description:
      'A service marketplace connecting people with trusted providers — fast and reliable.',
  },
  {
    name: 'Lelungo',
    domain: 'lelungo.com',
    href: 'https://lelungo.com',
    tag: 'Travel',
    description:
      'A travel platform to discover, plan, and book unforgettable journeys with ease.',
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function EcosystemSection() {
  return (
    <Section id="ecosystem" className="relative overflow-hidden bg-surface">
      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-fade-grid" />

      <div className="relative">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Explore Our Platforms"
          subtitle="A connected suite of products built to the same standard — pick the one that fits where you are today."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={i * 80} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-fade-grid opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-accent-subtle text-base font-semibold text-accent">
                    {p.name.charAt(0)}
                  </span>
                  <ArrowIcon className="h-5 w-5 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {p.tag}
                  </span>
                  <span className="text-xs text-subtle">{p.domain}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="cta" size="lg" href="https://arvispro.id">
            Explore All Platforms
          </Button>
        </div>
      </div>
    </Section>
  );
}
