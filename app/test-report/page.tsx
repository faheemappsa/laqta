'use client';

import { useEffect, useMemo, useState } from 'react';

type StoredLanding = {
  slug: string;
  title: string;
  brandName: string;
  ownerName?: string;
  landingUrl: string;
  createdAt: string;
};

type Stats = {
  views_count: number;
  cta_clicks_count: number;
  created_at: string;
};

async function fetchLandingStats(slug: string): Promise<Stats | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  try {
    const base = url.replace(/\/$/, '');
    const response = await fetch(`${base}/rest/v1/landings?slug=eq.${encodeURIComponent(slug)}&select=views_count,cta_clicks_count,created_at`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: 'no-store',
    });
    if (!response.ok) return null;
    const rows = (await response.json()) as Stats[];
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl">
      <p className="text-xs font-black text-white/40">{label}</p>
      <strong className="mt-2 block text-4xl font-black text-white">{value}</strong>
      <p className="mt-2 text-xs font-bold leading-6 text-white/35">{hint}</p>
    </div>
  );
}

function Meter({ value }: { value: number }) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-gradient-to-l from-[#f43f5e] via-[#f59e0b] to-[#8b5cf6] transition-all duration-1000" style={{ width: `${Math.min(100, Math.max(6, value))}%` }} />
    </div>
  );
}

export default function Page() {
  const [items, setItems] = useState<StoredLanding[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('laqta_recent_landings') || '[]') as StoredLanding[];
      setItems(saved);
    } catch {
      setItems([]);
    }
  }, []);

  const item = items[0];

  useEffect(() => {
    if (!item?.slug) {
      setLoading(false);
      return;
    }

    let alive = true;
    setLoading(true);
    fetchLandingStats(item.slug).then((result) => {
      if (!alive) return;
      setStats(result);
      setLoading(false);
    });

    return () => {
      alive = false;
    };
  }, [item?.slug]);

  const numbers = useMemo(() => {
    const views = stats?.views_count ?? 0;
    const clicks = stats?.cta_clicks_count ?? 0;
    const created = item?.createdAt ? new Date(item.createdAt).getTime() : Date.now();
    const hours = Math.max(1, Math.floor((Date.now() - created) / 3600000));
    const pulse = stats ? Math.min(100, Math.round((views * 2 + clicks * 8 + hours + 10) / Math.max(1, hours / 2))) : 0;
    const interest = stats && views > 0 ? Math.min(100, Math.round((clicks / views) * 100)) : 0;
    const momentum = stats ? Math.min(100, Math.round(views * 3 + clicks * 10 + 12)) : 0;
    return { views, clicks, pulse, interest, momentum, hasStats: Boolean(stats) };
  }, [stats, item?.createdAt]);

  function copyLink() {
    if (!item?.landingUrl) return;
    navigator.clipboard?.writeText(item.landingUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  if (!item) {
    return (
      <main dir="rtl" className="grid min-h-screen place-items-center bg-[#100a18] px-5 text-white">
        <section className="max-w-lg rounded-[36px] border border-white/10 bg-white/[0.06] p-7 text-center shadow-[0_30px_120px_rgba(0,0,0,.28)] backdrop-blur-2xl">
          <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-white/10 text-4xl">📄</div>
          <h1 className="text-3xl font-black">ما عندك لقطة محفوظة هنا</h1>
          <p className="mt-4 leading-8 text-white/50">اصنع أول لقطة، ثم ارجع لهذه اللوحة تراقب نبضها وحركتها.</p>
          <a href="/create" className="mt-6 grid min-h-12 place-items-center rounded-2xl bg-violet-600 px-6 font-black text-white">اصنع أول لقطة</a>
        </section>
      </main>
    );
  }

  const displayName = item.ownerName || item.brandName;
  const status = loading ? 'يتم تجهيز القراءة...' : numbers.hasStats ? 'لقطتك بدأت تتحرك' : 'شارك الرابط وارجع لمراقبة النبض';

  return (
    <main dir="rtl" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0a1a] via-[#1a1025] to-[#0d0b14] px-5 py-8 text-white sm:py-12">
      <div className="pointer-events-none absolute -left-40 top-8 h-[55vmin] w-[55vmin] rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[50vmin] w-[50vmin] rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-6">
        <header className="text-center">
          <p className="text-sm font-black tracking-widest text-violet-300/60">لوحة لقطتك</p>
          <h1 className="mt-2 text-4xl font-black">ياهلا {displayName}</h1>
          <p className="mt-3 leading-8 text-white/40">هذه اللوحة تحفظ آخر لقطة على هذا الجهاز.</p>
        </header>

        <section className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_120px_rgba(0,0,0,.28)] backdrop-blur-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black text-violet-300/70">{item.brandName}</p>
              <h2 className="mt-1 text-2xl font-black">{item.title}</h2>
              <p className="mt-2 text-xs font-bold text-white/30">{new Date(item.createdAt).toLocaleDateString('ar-SA')}</p>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-2xl">🚀</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={item.landingUrl} target="_blank" rel="noreferrer" className="grid min-h-11 place-items-center rounded-2xl bg-violet-600 px-5 text-sm font-black text-white">عرض اللقطة</a>
            <button onClick={copyLink} className="grid min-h-11 place-items-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-black text-white/80">{copied ? 'تم النسخ ✓' : 'نسخ الرابط'}</button>
            <a href="/create" className="grid min-h-11 place-items-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-black text-white/80">لقطة جديدة</a>
          </div>
        </section>

        <section className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_120px_rgba(0,0,0,.24)] backdrop-blur-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-500/15 text-2xl">❤️‍🔥</span>
            <div>
              <h2 className="text-2xl font-black">نبض اللقطة</h2>
              <p className="text-sm font-bold text-white/35">{status}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <StatCard label="المشاهدات" value={loading ? '—' : numbers.views.toLocaleString('ar-SA')} hint="رقم حقيقي من صفحة اللقطة" />
            <StatCard label="ضغطات الطلب" value={loading ? '—' : numbers.clicks.toLocaleString('ar-SA')} hint="تتجهز للتفعيل مع زر الطلب" />
            <StatCard label="نبض اللقطة" value={loading ? '—' : String(numbers.pulse)} hint="مؤشر محسوب من النشاط" />
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 flex justify-between text-xs font-black text-white/45"><span>زخم اللقطة</span><span>{numbers.momentum}</span></div>
              <Meter value={numbers.momentum} />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-xs font-black text-white/45"><span>مؤشر الاهتمام</span><span>{numbers.interest}%</span></div>
              <Meter value={numbers.interest} />
            </div>
          </div>

          <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold leading-7 text-white/45">
            كل زيارة وكل ضغطة ترفع نبض لقطتك. شارك الرابط ثم ارجع لمراقبة الحركة.
          </p>
        </section>

        <section className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl">
          <h2 className="text-2xl font-black">رحلة اللقطة</h2>
          <div className="mt-5 space-y-3 text-sm font-black text-white/60">
            {['تم إنشاء اللقطة ✨', 'تم حفظها في جهازك 💾', 'شارك الرابط 🔗', 'راقب النبض 📊'].map((step) => (
              <div key={step} className="rounded-2xl bg-white/5 p-4">{step}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
