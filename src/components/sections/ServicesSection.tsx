import {
  Section,
  SectionHeading,
  Card,
  CardTitle,
  CardDescription,
  Button,
  Reveal,
} from '@/components/ui';
import { site } from '@/config/site';
import { services } from '@/content';

export function ServicesSection() {
  return (
    <Section id="services" className="bg-surface">
      <SectionHeading
        eyebrow="Services"
        title="What we do"
        subtitle="End-to-end capabilities so you have one team, one point of contact, and zero handoff friction."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 80} className="h-full">
            <Card interactive className="flex h-full flex-col gap-4">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {s.tag}
              </span>
              <div>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.description}</CardDescription>
              </div>
              <ul className="mt-2 space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <Button variant="cta" href={site.bookingUrl}>Discuss your project</Button>
        <p className="text-sm text-subtle">
          Not sure where to start? We&apos;ll help you scope it on the call.
        </p>
      </div>
    </Section>
  );
}
