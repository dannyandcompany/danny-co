import { Section, Button } from '@/components/ui';
import { valueProps } from '@/content';

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            About us
          </span>
          <h2 className="mt-3 text-4xl font-semibold leading-tight">
            A small team with big-company execution
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Danny &amp; Company is a boutique digital studio. We work with
            funded startups and established businesses who want senior-level
            work without the overhead of a full agency.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Every project is led by a founding partner — not handed off to
            juniors. You get direct access, fast decisions, and work that
            moves the needle.
          </p>
          <Button variant="secondary" size="md" href="#process" className="mt-8">
            See how we work
          </Button>
        </div>

        {/* Visual card */}
        <div className="rounded-2xl border border-border bg-surface p-8 space-y-6">
          {valueProps.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
