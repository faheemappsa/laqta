import { notFound } from 'next/navigation';
import { GeneratedLandingView } from '../../../components/GeneratedLandingView';
import { getLandingBySlug } from '../../../lib/supabaseRest';
import type { LaqtaData } from '../../../types';

export const dynamic = 'force-dynamic';

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

  if (!data) notFound();

  return <GeneratedLandingView data={data} />;
}
