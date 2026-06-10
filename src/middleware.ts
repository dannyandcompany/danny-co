import { NextResponse, type NextRequest } from 'next/server';
import { DOMAIN_TO_SLUG, type TenantSlug } from '@/config/brands';

// Host-keyed edge cache: repeat visits hit the CDN, not the render function.
// Safe because each custom domain is a separate cache namespace on Vercel.
const CACHE_CONTROL =
  'public, max-age=0, s-maxage=600, stale-while-revalidate=86400';

function resolveTenant(host: string | null): TenantSlug | null {
  if (!host) return null;
  const hostname = host.split(':')[0].toLowerCase();
  return DOMAIN_TO_SLUG[hostname] ?? null;
}

export function middleware(req: NextRequest) {
  const tenant = resolveTenant(req.headers.get('host'));

  // Propagate the resolved brand so server components (layout, metadata)
  // brand the shared chrome without re-parsing the hostname.
  const requestHeaders = new Headers(req.headers);
  if (tenant) requestHeaders.set('x-brand', tenant);

  const { pathname } = req.nextUrl;
  let res: NextResponse;

  // Map each domain's homepage to its brand route: arvispro.id → /arvispro.
  // Shared routes (/coming-soon, …) are left in place and branded via the header.
  if (tenant && pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = `/${tenant}`;
    res = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  } else {
    res = NextResponse.next({ request: { headers: requestHeaders } });
  }

  res.headers.set('Cache-Control', CACHE_CONTROL);
  return res;
}

export const config = {
  // Run on document routes only — skip Next internals, the API, and static files.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|.*\\..*).*)'],
};
