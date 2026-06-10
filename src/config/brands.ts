import type { NavLink } from '@/types';
import { site } from '@/config/site';

/**
 * Multi-domain brand registry — the single source of truth for the ecosystem.
 *
 * One Vercel deployment serves every domain; the brand is resolved per request
 * from the hostname (see middleware.ts). Adding a new domain is a one-line
 * change here + the domain in the Vercel dashboard — no new routes or env vars.
 *
 * Must stay edge-safe (pure data + plain functions) so middleware can import it.
 */

export type TenantSlug = 'arvispro' | 'tetuku' | 'lelungo';
export type BrandSlug = 'dannyco' | TenantSlug;

export interface Brand {
  slug: BrandSlug;
  name: string;
  shortName: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  email: string;
  bookingUrl: string;
  nav: NavLink[];
  socials: NavLink[];
}

// Every brand renders the same single-page sections, so the in-page anchors
// (nav) are shared. Only branding + outbound links differ per domain.
const sharedNav: NavLink[] = [...site.nav];

export const DEFAULT_SLUG: BrandSlug = 'dannyco';

export const BRANDS: Record<BrandSlug, Brand> = {
  dannyco: {
    slug: 'dannyco',
    name: site.name,
    shortName: site.shortName,
    // Per-deployment defaults; per-domain values are resolved from the hostname.
    domain: process.env.NEXT_PUBLIC_DOMAIN ?? 'dannyco.com',
    url: process.env.NEXT_PUBLIC_BASE_URL ?? site.url,
    tagline: site.tagline,
    description: site.description,
    email: site.email,
    bookingUrl: site.bookingUrl,
    nav: sharedNav,
    socials: [...site.socials],
  },
  arvispro: {
    slug: 'arvispro',
    name: 'Arvispro',
    shortName: 'Arvispro',
    domain: 'arvispro.id',
    url: 'https://arvispro.id',
    tagline: 'Run operations, manage growth, scale with confidence',
    description:
      'A business platform to run operations, manage growth, and scale with confidence.',
    email: 'hello@arvispro.id',
    bookingUrl: '/coming-soon',
    nav: sharedNav,
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com/company/arvispro' }],
  },
  tetuku: {
    slug: 'tetuku',
    name: 'Tetuku',
    shortName: 'Tetuku',
    domain: 'tetuku.id',
    url: 'https://tetuku.id',
    tagline: 'Trusted providers, matched fast',
    description:
      'A service marketplace connecting people with trusted providers — fast and reliable.',
    email: 'hello@tetuku.id',
    bookingUrl: '/coming-soon',
    nav: sharedNav,
    socials: [{ label: 'Instagram', href: 'https://instagram.com/tetuku.id' }],
  },
  lelungo: {
    slug: 'lelungo',
    name: 'Lelungo',
    shortName: 'Lelungo',
    domain: 'lelungo.com',
    url: 'https://lelungo.com',
    tagline: 'Discover, plan, and book unforgettable journeys',
    description:
      'A travel platform to discover, plan, and book unforgettable journeys with ease.',
    email: 'hello@lelungo.com',
    bookingUrl: '/coming-soon',
    nav: sharedNav,
    socials: [{ label: 'Instagram', href: 'https://instagram.com/lelungo' }],
  },
};

/** Hostname → tenant. Includes the `www.` alias for each apex domain. */
export const DOMAIN_TO_SLUG: Record<string, TenantSlug> = {
  'arvispro.id': 'arvispro',
  'www.arvispro.id': 'arvispro',
  'tetuku.id': 'tetuku',
  'www.tetuku.id': 'tetuku',
  'lelungo.com': 'lelungo',
  'www.lelungo.com': 'lelungo',
};

export const TENANT_SLUGS: TenantSlug[] = ['arvispro', 'tetuku', 'lelungo'];

export const DEFAULT_BRAND = BRANDS[DEFAULT_SLUG];

export function isTenantSlug(value: string): value is TenantSlug {
  return (TENANT_SLUGS as string[]).includes(value);
}

/** Resolve a brand from a slug (e.g. the `x-brand` header). Falls back to default. */
export function getBrandBySlug(slug?: string | null): Brand {
  if (slug && slug in BRANDS) return BRANDS[slug as BrandSlug];
  return DEFAULT_BRAND;
}

/** Resolve a brand directly from a request hostname. Falls back to default. */
export function getBrandByHost(host?: string | null): Brand {
  if (!host) return DEFAULT_BRAND;
  const hostname = host.split(':')[0].toLowerCase();
  const slug = DOMAIN_TO_SLUG[hostname];
  return slug ? BRANDS[slug] : DEFAULT_BRAND;
}
