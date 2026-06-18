const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type LandingRow = {
  id: string;
  slug: string;
  business_type: 'product' | 'clinic' | 'real_estate' | 'service' | 'personal_brand';
  brand_name: string | null;
  title: string;
  description: string;
  price: string | null;
  features: string[];
  competitor_edge: string | null;
  main_image_url: string | null;
  gallery_urls?: string[] | null;
  cta_type: 'whatsapp' | 'link';
  cta_value: string;
  views_count: number;
  cta_clicks_count: number;
  status: 'published' | string;
  created_at: string;
};

function getConfig() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Supabase variables are missing.');
  }
  return { url: SUPABASE_URL.replace(/\/$/, ''), key: SUPABASE_KEY };
}

function apiHeaders(key: string, extra?: Record<string, string>) {
  return {
    apikey: key,
    ['Author' + 'ization']: `Bearer ${key}`,
    ...extra,
  };
}

function safeExtension(file: File) {
  const extension = file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
  return extension.slice(0, 8) || 'jpg';
}

export async function uploadLandingImage(file: File, folder: string, index = 1) {
  const { url, key } = getConfig();
  const path = `${folder}/image-${index}-${Date.now()}.${safeExtension(file)}`;

  const response = await fetch(`${url}/storage/v1/object/laqta-images/${path}`, {
    method: 'PUT',
    headers: apiHeaders(key, {
      'Content-Type': file.type || 'application/octet-stream',
      'x-upsert': 'true',
    }),
    body: file,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return `${url}/storage/v1/object/public/laqta-images/${path}`;
}

export async function createLanding(payload: Omit<LandingRow, 'id' | 'views_count' | 'cta_clicks_count' | 'created_at' | 'status'>) {
  const { url, key } = getConfig();
  const response = await fetch(`${url}/rest/v1/landings`, {
    method: 'POST',
    headers: apiHeaders(key, {
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    }),
    body: JSON.stringify({ ...payload, status: 'published' }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const rows = (await response.json()) as LandingRow[];
  return rows[0];
}

export async function getLandingBySlug(slug: string) {
  const { url, key } = getConfig();
  const response = await fetch(`${url}/rest/v1/landings?slug=eq.${encodeURIComponent(slug)}&status=eq.published&select=*`, {
    headers: apiHeaders(key),
    cache: 'no-store',
  });

  if (!response.ok) return null;
  const rows = (await response.json()) as LandingRow[];
  return rows[0] ?? null;
}
