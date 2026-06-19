'use client';

import { useEffect, useState } from 'react';

type StoredLanding = {
  slug: string;
  title: string;
  brandName: string;
  ownerName?: string;
  landingUrl: string;
  createdAt: string;
};

export default function Page() {
  const [items, setItems] = useState<StoredLanding[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('laqta_recent_landings') || '[]') as StoredLanding[];
      setItems(saved);
    } catch {
      setItems([]);
    }
  }, []);

  const item = items[0];

  return (
    <main className="min-h-screen bg-[#fffaf2] px-5 py-8 text-[#21180f]">
      <section className="mx-auto max-w-3xl rounded-[32px] bg-white p-6 shadow-[0_24px_80px_rgba(70,45,25,.14)]">
        <a href="/" className="text-sm font-black text-[#8b5e34]">الرئيسية</a>
        {item ? (
          <div className="mt-6">
            <p className="text-sm font-black text-[#8b5e34]">لوحة لقطتك</p>
            <h1 className="mt-2 text-4xl font-black">{item.ownerName || item.brandName}</h1>
            <p className="mt-3 text-lg leading-8 text-[#6d5943]">{item.title}</p>
            <a className="mt-4 block break-all rounded-2xl bg-[#f7ead8] p-4 text-sm font-bold underline" href={item.landingUrl} target="_blank" rel="noreferrer">{item.landingUrl}</a>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a href={item.landingUrl} target="_blank" rel="noreferrer" className="grid min-h-12 place-items-center rounded-full bg-[#2f8f55] text-sm font-black text-white">عرض اللقطة</a>
              <a href="/create" className="grid min-h-12 place-items-center rounded-full bg-[#21180f] text-sm font-black text-white">لقطة جديدة</a>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <h1 className="text-4xl font-black">لا توجد لقطة محفوظة</h1>
            <a href="/create" className="mt-6 grid min-h-12 place-items-center rounded-full bg-[#21180f] text-sm font-black text-white">اصنع لقطتي</a>
          </div>
        )}
      </section>
    </main>
  );
}
