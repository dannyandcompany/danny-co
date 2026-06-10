import { notFound } from 'next/navigation';
import { Landing } from '@/components/Landing';
import { isTenantSlug } from '@/config/brands';

/**
 * Brand landing route — the rewrite target for each domain's homepage
 * (arvispro.id → /arvispro). Renders the shared UI; chrome + metadata are
 * branded by the root layout from the `x-brand` header.
 */
export default async function BrandHome({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  if (!isTenantSlug(domain)) notFound();
  return <Landing />;
}
