import { Section, Button, CtaAssurance } from '@/components/ui';
import { site } from '@/config/site';

export function CTASection() {
  return (
    <Section id="contact" className="bg-surface">
      <div className="relative overflow-hidden rounded-2xl bg-accent-gradient px-8 py-20 text-center">
        {/* Subtle overlay texture */}
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-fade-grid" />

        <span className="relative inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
          Now booking new partners — 3 spots this quarter
        </span>

        <h2 className="relative mx-auto mt-6 max-w-2xl text-4xl font-semibold text-white md:text-5xl">
          Let&apos;s talk about where you want to be
        </h2>

        <p className="relative mx-auto mt-5 max-w-prose text-lg text-white/80">
          One call. We&apos;ll pressure-test your idea, map the fastest path to
          results, and tell you honestly whether we&apos;re the right team — even
          if the answer is no.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="inverse" size="lg" href={site.bookingUrl}>
            Book your strategy call
          </Button>
          <Button
            variant="inverse-outline"
            size="lg"
            href={`mailto:${site.email}?subject=Project brief`}
          >
            Send us a brief
          </Button>
        </div>

        <CtaAssurance
          tone="light"
          className="relative mt-8"
          items={[
            'Replies within 4 business hours',
            'Partner-led, never outsourced',
            'No long-term lock-in',
          ]}
        />
      </div>
    </Section>
  );
}
