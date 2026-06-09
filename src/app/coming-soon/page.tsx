import type { Metadata } from 'next';
import { Button } from '@/components/ui';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Our booking experience is almost ready.',
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-24">
      {/* Animated ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-12 h-72 w-72 animate-float rounded-full bg-accent/30 blur-3xl [animation-duration:9s]" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 animate-pulse-glow rounded-full bg-accent/25 blur-3xl [animation-duration:7s]" />
        <div className="absolute bottom-[-4rem] left-1/3 h-72 w-72 animate-float rounded-full bg-accent/20 blur-3xl [animation-delay:1s] [animation-duration:11s]" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-fade-grid" />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-md [animation-delay:0ms]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.name}
        </span>

        <h1 className="mt-8 animate-fade-up text-6xl font-semibold tracking-tight [animation-delay:80ms] md:text-8xl">
          <span className="animate-gradient-x bg-accent-gradient bg-[length:200%_auto] bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-md animate-fade-up text-lg text-muted [animation-delay:160ms]">
          We&apos;re putting the finishing touches on our booking experience.
          Your strategy call is almost ready.
        </p>

        {/* Loading dots */}
        <div className="mt-8 flex animate-fade-up items-center justify-center gap-2 [animation-delay:240ms]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-2.5 w-2.5 animate-bounce rounded-full bg-accent/70"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:320ms] sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button
            href={`mailto:${site.email}?subject=Notify me when booking is live`}
            variant="secondary"
            size="lg"
          >
            Notify me
          </Button>
        </div>
      </div>
    </section>
  );
}
