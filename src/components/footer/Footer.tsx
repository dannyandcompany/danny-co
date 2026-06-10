import { Container } from '@/components/ui';
import type { Brand } from '@/config/brands';
import type { NavLink } from '@/types';

function isExternal(href: string) {
  return /^(https?:|mailto:)/.test(href);
}

export function Footer({ brand }: { brand: Brand }) {
  const year = new Date().getFullYear();

  const columns: { group: string; links: NavLink[] }[] = [
    {
      group: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
      ],
    },
    {
      group: 'Work',
      links: [
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Book a call', href: brand.bookingUrl },
      ],
    },
    {
      group: 'Contact',
      links: [
        { label: brand.email, href: `mailto:${brand.email}` },
        ...brand.socials,
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base font-semibold">{brand.name}.</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Premium digital products for ambitious companies.
            </p>
          </div>

          {columns.map(({ group, links }) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-subtle">
                {group}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                      {...(isExternal(link.href) && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-subtle sm:flex-row">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-muted transition-colors">Privacy</a>
            <a href="#" className="hover:text-muted transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
