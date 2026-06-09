import { Section, SectionHeading } from '@/components/ui';
import { reasons } from '@/content';

export function WhyUsSection() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="Why Danny & Company?"
        title="How we're different"
        subtitle="Most agencies optimise for their own margin. We optimise for your growth."
      />

      <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden">
        {reasons.map((r) => (
          <div
            key={r.id}
            className="flex flex-col gap-3 bg-surface p-8 transition-colors hover:bg-elevated"
          >
            <p className="font-semibold text-foreground">{r.headline}</p>
            <p className="text-sm leading-relaxed text-muted">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
