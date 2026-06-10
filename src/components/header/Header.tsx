'use client';

import { useState } from 'react';
import { Button, Container } from '@/components/ui';
import { ThemeToggle } from '@/components/theme';
import type { Brand } from '@/config/brands';

export function Header({ brand }: { brand: Brand }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <a href="#" className="text-base font-semibold tracking-tight">
          {brand.name}.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {brand.nav.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="cta" size="sm" href={brand.bookingUrl}>
            Book a call
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <Container as="nav" className="flex flex-col gap-1 py-4">
            {brand.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-elevated hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {/* Mobile CTA — previously absent, leaving mobile visitors with no action */}
            <Button
              variant="cta"
              size="md"
              href={brand.bookingUrl}
              className="mt-3 w-full"
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
