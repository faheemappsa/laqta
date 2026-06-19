import { redirect } from 'next/navigation';
import { getLandingBySlug } from '../../../lib/supabaseRest';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type PageProps = {
  params: {
    slug: string;
  };
};

function buildCtaUrl(row: Awaited<ReturnType<typeof getLandingBySlug>>) {
  if (!row) return '/';

  if (row.cta_type === 'whatsapp') {
    const clean = row.cta_value.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`مرحبًا، وصلتني صفحة ${row.brand_name || 'لقطة'} من لقطة وأرغب بالتفاصيل`);
    return `https://wa.me/${clean}?text=${message}`;
  }

  return row.cta_value.startsWith('http') ? row.cta_value : `https://${row.cta_value}`;
}

async function trackClick(slug: string, currentClicks: number) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return;
  const baseUrl = SUPABASE_URL.replace(/\/$/, '');

  await fetch(`${baseUrl}/rest/v1/landings?slug=eq.${encodeURIComponent(slug)}`, {
    method: 'PATCH',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ cta_clicks_count: Number(currentClicks || 0) + 1 }),
    cache: 'no-store',
  }).catch(() => undefined);
}

export default async function GoPage({ params }: PageProps) {
  const row = await getLandingBySlug(params.slug);
  if (!row) redirect('/');

  await trackClick(row.slug, row.cta_clicks_count);
  redirect(buildCtaUrl(row));
}
