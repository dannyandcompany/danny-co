import { Section, SectionHeading, Reveal } from '@/components/ui';
import { testimonials } from '@/content';

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="Don't take our word for it"
        subtitle="Results from founders and product leaders who've shipped with us."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.id} delay={idx * 80} className="h-full">
          <figure
            className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8 transition-colors duration-200 hover:border-accent/40"
          >
            {/* Stars */}
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden="true">★</span>
              ))}
            </div>

            <blockquote className="mt-5 text-sm leading-relaxed text-muted">
              "{t.quote}"
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3">
              {/* Avatar placeholder */}
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-elevated text-xs font-bold text-foreground">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-subtle">
                  {t.role}, {t.company}
                </p>
              </div>
            </figcaption>
          </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
