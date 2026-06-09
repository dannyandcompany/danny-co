import { Section, SectionHeading, Button } from '@/components/ui';
import { site } from '@/config/site';
import { processSteps as steps } from '@/content';

export function ProcessSection() {
  return (
    <Section id="process" className="bg-surface">
      <SectionHeading
        eyebrow="Our process"
        title="From idea to launch in 4 steps"
        subtitle="A clear, repeatable process built to minimise risk and maximise momentum."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ step, title, desc }, i) => (
          <div key={step} className="relative flex flex-col gap-4">
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div className="absolute left-8 top-4 hidden h-px w-[calc(100%+1.5rem)] bg-border lg:block" />
            )}
            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-xs font-bold text-accent">
              {step}
            </span>
            <p className="font-semibold text-foreground">{title}</p>
            <p className="text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>

      {/* Mid-page CTA — captured at the low-anxiety moment */}
      <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 sm:flex-row sm:p-8">
        <p className="text-center text-lg font-medium text-foreground sm:text-left">
          It starts with a 30-minute conversation.
        </p>
        <Button variant="cta" href={site.bookingUrl} className="flex-shrink-0">
          Book your strategy call
        </Button>
      </div>
    </Section>
  );
}
