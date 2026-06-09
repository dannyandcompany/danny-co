import { Button, Container, CtaAssurance } from '@/components/ui';
import { site } from '@/config/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-fade-grid" />

      <Container className="relative text-center">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-elevated px-3 py-1 text-xs font-medium text-muted [animation-delay:0ms]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Trusted by 50+ companies
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl animate-fade-up text-5xl font-semibold leading-tight [animation-delay:80ms] md:text-6xl lg:text-7xl">
          We build digital products{' '}
          <span className="bg-accent-gradient bg-clip-text text-transparent">
            that grow your business
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-muted [animation-delay:160ms] md:text-xl">
          Strategy, design, and engineering for companies that take growth
          seriously — led by senior partners, shipped in weeks, built to last.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row">
          <Button variant="cta" size="lg" href={site.bookingUrl}>
            Book your strategy call
          </Button>
          <Button variant="secondary" size="lg" href="#testimonials">
            See our work
          </Button>
        </div>

        {/* Friction-reducing trust cues */}
        <CtaAssurance className="mt-8 animate-fade-up [animation-delay:320ms]" />
      </Container>
    </section>
  );
}
