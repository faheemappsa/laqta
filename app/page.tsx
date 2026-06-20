'use client';

import { useEffect, useState } from 'react';
import { LaqtaMarketingPage } from '../components/marketing/LaqtaMarketingPage';

type StoredLanding = {
  slug: string;
  title: string;
  brandName: string;
  ownerName?: string;
  landingUrl: string;
  createdAt: string;
};

function RecentLaqtasPanel() {
  const [items, setItems] = useState<StoredLanding[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('laqta_recent_landings') || '[]') as StoredLanding[];
      setItems(saved);
    } catch {
      setItems([]);
    }
  }, []);

  if (!items.length) return null;

  const first = items[0];
  const displayName = first.ownerName || first.brandName;

  return (
    <section className="relative z-30 border-b border-white/5 bg-[#0a0a0a] px-4 py-4 text-white">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="text-sm font-bold text-white/50">ياهلا {displayName} 👋</p>
          <h2 className="mt-1 text-xl font-black text-white/90">عندك لقطة جاهزة: {first.title}</h2>
          <p className="mt-1 text-sm leading-6 text-white/40">حفظناها لك على هذا الجهاز. تقدر ترجع لها، تعرضها، أو تصنع لقطة جديدة.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          <a href={first.landingUrl} target="_blank" rel="noreferrer" className="grid min-h-11 place-items-center rounded-full bg-[#d4af37] px-5 text-sm font-black text-[#0a0a0a] transition hover:bg-[#c4a030]">
            عرض اللقطة
          </a>
          <a href="/create" className="grid min-h-11 place-items-center rounded-full border border-white/10 bg-white/10 px-5 text-sm font-black text-white transition hover:bg-white/20">
            اصنع لقطة جديدة
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <RecentLaqtasPanel />
      <LaqtaMarketingPage />
    </>
  );
}
