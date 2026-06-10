import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { ThemeProvider } from '@/components/theme';
import { getBrandBySlug } from '@/config/brands';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Brand is resolved per request from the hostname (middleware sets `x-brand`),
// so every domain gets its own title, canonical URL, and Open Graph identity.
export async function generateMetadata(): Promise<Metadata> {
  const brand = getBrandBySlug((await headers()).get('x-brand'));
  const titleDefault = `${brand.name} — ${brand.tagline}`;

  return {
    metadataBase: new URL(brand.url),
    title: {
      default: titleDefault,
      template: `%s · ${brand.name}`,
    },
    description: brand.description,
    keywords: [
      'digital product studio',
      'product design',
      'web development',
      'startup agency',
      'Next.js development',
    ],
    authors: [{ name: brand.name }],
    creator: brand.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      url: brand.url,
      siteName: brand.name,
      title: titleDefault,
      description: brand.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: brand.name,
      description: brand.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0B' },
  ],
};

// Runs before paint to set the theme class, eliminating the flash of wrong
// theme. Mirrors ThemeProvider; keep storage key ('theme') + classes in sync.
const noFlickerScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=(t==='light'||t==='dark'||t==='brand')?t:(d?'dark':'light');var c=document.documentElement.classList;c.remove('dark','theme-brand');if(r==='dark')c.add('dark');else if(r==='brand')c.add('theme-brand');}catch(e){}})();`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brand = getBrandBySlug((await headers()).get('x-brand'));

  // Organization structured data — enables rich results in search.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    description: brand.description,
    url: brand.url,
    email: brand.email,
    sameAs: brand.socials.map((s) => s.href),
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlickerScript }} />
      </head>
      <body className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Header brand={brand} />
          <main>{children}</main>
          <Footer brand={brand} />
        </ThemeProvider>
      </body>
    </html>
  );
}
