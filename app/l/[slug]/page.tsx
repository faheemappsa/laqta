import { notFound } from 'next/navigation';
import { GeneratedLandingView } from '../../../components/GeneratedLandingView';
import { getLandingBySlug } from '../../../lib/supabaseRest';
import type { LaqtaData } from '../../../types';

export const dynamic = 'force-dynamic';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type PageProps = {
  params: {
    slug: string;
  };
};

type LandingPageData = LaqtaData & {
  galleryUrls?: string[];
};

function toLaqtaData(row: Awaited<ReturnType<typeof getLandingBySlug>>): LandingPageData | null {
  if (!row) return null;

  const features = Array.isArray(row.features) ? row.features : [];
  const galleryUrls = Array.isArray(row.gallery_urls) ? row.gallery_urls : [];

  return {
    type: row.business_type,
    brandName: row.brand_name || 'لقطة',
    title: row.title,
    description: row.description,
    price: row.price || undefined,
    mainImageUrl: row.main_image_url || undefined,
    galleryUrls,
    featureOne: features[0] || 'عرض واضح ومباشر',
    featureTwo: features[1] || 'صفحة مصممة للجوال',
    featureThree: features[2] || 'زر طلب سريع',
    competitorEdge: row.competitor_edge || 'صفحة مرتبة، عرض واضح، وطلب مباشر بدون تعقيد.',
    ctaType: row.cta_type,
    ctaValue: row.cta_value,
  };
}

async function trackView(slug: string, currentViews: number) {
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
    body: JSON.stringify({ views_count: Number(currentViews || 0) + 1 }),
    cache: 'no-store',
  }).catch(() => undefined);
}

export async function generateMetadata({ params }: PageProps) {
  const row = await getLandingBySlug(params.slug);

  if (!row) {
    return {
      title: 'لقطة غير موجودة',
    };
  }

  return {
    title: `${row.title} | لقطة`,
    description: row.description,
    openGraph: {
      title: row.title,
      description: row.description,
      images: row.main_image_url ? [row.main_image_url] : [],
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const row = await getLandingBySlug(params.slug);
  const data = toLaqtaData(row);

  if (!data || !row) notFound();

  await trackView(row.slug, row.views_count);

  return <GeneratedLandingView data={data} />;
}
