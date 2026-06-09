import type { NavLink } from '@/types';


export const site = {
  name: 'Danny & Company',
  shortName: 'Danny & Co',
  tagline: 'Digital products that grow your business',
  description:
    'Strategy, design, and engineering for companies that take growth seriously. Senior-led, shipped in weeks, built to last.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://dannyco.com',
  email: 'danialg.business@gmail.com',

  // Booking isn't live yet — every "book a call" CTA lands on the coming-soon page.
  bookingUrl: '/coming-soon',

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#testimonials' },
  ] satisfies NavLink[],

  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/danny-co' },
    { label: 'Twitter', href: 'https://twitter.com/danny_co' },
  ] satisfies NavLink[],
} as const;
