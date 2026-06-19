'use client';

import { useState } from 'react';
import type { LaqtaData } from '../types';

type LandingData = LaqtaData & { galleryUrls?: string[]; slug?: string };

const labels: Record<LaqtaData['type'], { title: string; icon: string; badge: string; bg: string; accent: string }> = {
  product: { title: 'منتج فاخر', icon: '🛍️', badge: 'عرض منتج', bg: 'from-[#0a0a0a] via-[#1a0e14] to-[#0d0b08]', accent: '#d49b3b' },
  clinic: { title: 'عيادة وموعد', icon: '🩺', badge: 'حجز واهتمام', bg: 'from-[#04120a] via-[#0b2a1a] to-[#061a0e]', accent: '#2f8f55' },
  real_estate: { title: 'عقار وفرصة', icon: '🏡', badge: 'فرصة عقارية', bg: 'from-[#0c0a07] via-[#1f1912] to-[#12100b]', accent: '#c08a4a' },
  service: { title: 'خدمة مميزة', icon: '✨', badge: 'خدمة جاهزة', bg: 'from-[#06061a] via-[#111044] to-[#0a0a1e]', accent: '#7c3aed' },
  personal_brand: { title: 'براند شخصي', icon: '👤', badge: 'حضور احترافي', bg: 'from-[#0a0a0a] via-[#140d15] to-[#0d0b0e]', accent: '#c4496e' },
};

function ctaHref(data: LandingData) {
  if (data.slug) return `/go/${data.slug}`;

  if (data.ctaType === 'whatsapp') {
    const clean = data.ctaValue.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`مرحبًا، وصلتني صفحة ${data.brandName} من لقطة وأرغب بالتفاصيل`);
    return `https://wa.me/${clean}?text=${message}`;
  }
  return data.ctaValue.startsWith('http') ? data.ctaValue : `https://${data.ctaValue}`;
}

export function GeneratedLandingView({ data }: { data: LandingData }) {
  const meta = labels[data.type];
  const features = [data.featureOne, data.featureTwo, data.featureThree].filter(Boolean);
  const images = [...(data.galleryUrls ?? []), data.mainImageUrl].filter(Boolean).slice(0, 3) as string[];
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);
  const selectedImage = images[activeImage];

  async function copyPageLink() {
    if (typeof window === 'undefined') return;
    await navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function sharePage() {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: data.title, url }).catch(() => undefined);
    } else {
      await copyPageLink();
    }
  }

  return (
    <main className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${meta.bg} text-white`}>
      <style>{`
        @keyframes laqtaFloat { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-16px) rotate(1.25deg); } }
        @keyframes laqtaUp { from { opacity:0; transform: translateY(22px); } to { opacity:1; transform: translateY(0); } }
        @keyframes laqtaPulse { 0%,100% { opacity:.25; transform: scale(1); } 50% { opacity:.72; transform: scale(1.1); } }
        @keyframes laqtaShine { from { transform: translateX(120%) skewX(-18deg); } to { transform: translateX(-160%) skewX(-18deg); } }
        @keyframes laqtaPop { 0% { opacity:0; transform: scale(.92) translateY(10px); } 100% { opacity:1; transform: scale(1) translateY(0); } }
        .laqta-float { animation: laqtaFloat 7s ease-in-out infinite; transform-style: preserve-3d; }
        .laqta-up { animation: laqtaUp .7s ease both; }
        .laqta-pulse { animation: laqtaPulse 5s ease-in-out infinite; }
        .laqta-pop { animation: laqtaPop .55s ease both; }
        .laqta-shine { position:absolute; inset:-20%; width:45%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent); animation:laqtaShine 2.8s ease-in-out infinite; }
        .laqta-card { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
        .laqta-card:hover { transform: translateY(-6px) rotateX(2deg); box-shadow:0 30px 70px rgba(0,0,0,.28); border-color:rgba(255,255,255,.22); }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="laqta-pulse absolute -left-40 top-10 h-[55vmin] w-[55vmin] rounded-full blur-[100px]" style={{ backgroundColor: meta.accent }} />
        <div className="absolute -right-36 bottom-20 h-[45vmin] w-[45vmin] rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #fff 0.5px, transparent 0.5px)', backgroundSize: '44px 44px' }} />
      </div>

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <button onClick={sharePage} className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-white/85 backdrop-blur-xl">
          {copied ? 'تم النسخ ✓' : 'مشاركة / نسخ'}
        </button>
        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur-xl">{meta.badge}</span>
      </header>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="laqta-up space-y-7 text-center lg:text-right">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur-xl">
            <span className="grid h-7 w-7 place-items-center rounded-full" style={{ backgroundColor: meta.accent }}>{meta.icon}</span>
            لقطة مخصصة · {meta.title}
          </div>
          <p className="text-sm font-black tracking-[0.35em] text-white/45">{data.brandName}</p>
          <h1 className="mx-auto max-w-2xl text-[2.55rem] font-black leading-[1.05] sm:text-6xl lg:mx-0 lg:text-7xl">{data.title}</h1>
          <p className="mx-auto max-w-xl text-lg leading-9 text-white/65 sm:text-2xl lg:mx-0">{data.description}</p>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-5 py-3 backdrop-blur-xl">
            <span className="text-sm font-bold text-white/50">السعر / العرض</span>
            <strong className="text-2xl font-black" style={{ color: meta.accent }}>{data.price || 'عرض خاص'}</strong>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href={ctaHref(data)} target="_blank" rel="noreferrer" className="relative inline-flex min-h-[54px] items-center overflow-hidden rounded-2xl px-8 text-base font-black shadow-2xl transition hover:scale-[1.03]" style={{ backgroundColor: meta.accent }}>
              <span className="laqta-shine" />
              <span className="relative z-10">{data.ctaType === 'whatsapp' ? 'اطلب عبر واتساب' : 'اطلب الآن'}</span>
            </a>
            <a href="#features" className="inline-flex min-h-[54px] items-center rounded-2xl border border-white/20 bg-white/8 px-7 text-base font-black backdrop-blur-xl">شاهد المميزات ↓</a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {['رابط جاهز', 'طلب مباشر', 'جوال أولًا'].map((item) => <span key={item} className="laqta-pop rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-black text-stone-800">✓ {item}</span>)}
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[286px] sm:w-[350px]">
            <div className="laqta-pulse absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[470px] sm:w-[470px]" />
            <div className="laqta-float relative rounded-[46px] border border-white/10 bg-gradient-to-br from-[#18181b] via-[#0f0f11] to-[#18181b] p-3 shadow-[0_50px_110px_rgba(0,0,0,.55)]">
              <div className="absolute left-1/2 top-3 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-black/60" />
              <div className="overflow-hidden rounded-[34px] bg-[#fafaf8] text-stone-900">
                <div className="flex items-center justify-between bg-black/5 px-5 py-2 text-[9px] font-bold text-black/35"><span>9:41</span><span>●●●●○</span></div>
                <div className="relative mx-3 mt-3 overflow-hidden rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${meta.accent}dd, ${meta.accent}88)` }}>
                  <div className="flex items-center justify-between text-[10px] font-black"><span>{meta.badge}</span><span className="rounded-full bg-white/20 px-2 py-0.5">Live</span></div>
                  <div className="mt-6 grid place-items-center">
                    {selectedImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={selectedImage} alt={data.title} className="h-28 w-28 rounded-2xl object-cover shadow-2xl ring-[3px] ring-white/30 transition duration-500 hover:scale-105" />
                    ) : (
                      <div className="grid h-28 w-28 place-items-center rounded-2xl bg-white/20 text-5xl">{meta.icon}</div>
                    )}
                  </div>
                  {images.length > 1 ? <div className="mt-3 flex justify-center gap-1.5">{images.map((_, index) => <button key={index} type="button" onClick={() => setActiveImage(index)} className={`h-1.5 rounded-full transition-all ${index === activeImage ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`} aria-label={`الصورة ${index + 1}`} />)}</div> : null}
                </div>
                <div className="space-y-3 px-4 py-4 text-right">
                  <p className="text-[11px] font-black" style={{ color: meta.accent }}>{data.price || 'عرض خاص'}</p>
                  <h3 className="line-clamp-2 text-lg font-black">{data.title}</h3>
                  <p className="line-clamp-3 text-[11px] leading-5 text-stone-500">{data.description}</p>
                  <div className="grid grid-cols-3 gap-1.5">{features.slice(0, 3).map((feature) => <div key={feature} className="line-clamp-2 rounded-xl px-2 py-1.5 text-center text-[10px] font-black" style={{ backgroundColor: meta.accent + '18' }}>{feature}</div>)}</div>
                  <div className="rounded-xl bg-stone-100 p-2.5 text-[11px] font-bold leading-5 text-stone-600">{data.competitorEdge}</div>
                  <div className="grid h-10 place-items-center rounded-xl text-xs font-black text-white" style={{ backgroundColor: meta.accent }}>{data.ctaType === 'whatsapp' ? 'واتساب مباشر' : 'رابط الطلب'}</div>
                </div>
              </div>
            </div>
            <div className="laqta-pop absolute -left-4 top-14 rounded-2xl bg-white/90 px-3 py-2 text-[11px] font-black text-stone-700 shadow-xl">جوال أولًا</div>
            <div className="laqta-pop absolute -right-3 bottom-24 rounded-2xl bg-white/90 px-3 py-2 text-[11px] font-black text-stone-700 shadow-xl">فوري</div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="mb-8 text-center lg:text-right"><p className="text-sm font-black tracking-widest text-white/40">المميزات</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">لماذا هذا العرض تحديدًا؟</h2></div>
        <div className="grid gap-4 sm:grid-cols-3">{features.map((feature, index) => <div key={feature} className="laqta-card rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"><span className="mb-5 grid h-10 w-10 place-items-center rounded-xl text-sm font-black" style={{ backgroundColor: meta.accent }}>{index + 1}</span><p className="text-lg font-bold leading-8 text-white/90">{feature}</p></div>)}</div>
        <div className="laqta-card mt-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-10"><p className="mb-3 text-sm font-bold text-white/40">الميزة التنافسية</p><h3 className="text-2xl font-black sm:text-3xl">ليش تختار هذا العرض؟</h3><p className="mt-4 max-w-2xl text-lg leading-9 text-white/65">{data.competitorEdge}</p></div>
        <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:flex-row sm:justify-between"><div className="text-center sm:text-right"><p className="text-sm font-bold text-white/50">جاهز تاخذ الخطوة؟</p><p className="text-xl font-black sm:text-2xl">{data.brandName}</p></div><div className="flex flex-wrap gap-3"><a href={ctaHref(data)} target="_blank" rel="noreferrer" className="relative inline-flex min-h-[50px] items-center overflow-hidden rounded-2xl px-7 text-base font-black" style={{ backgroundColor: meta.accent }}><span className="laqta-shine" /><span className="relative z-10">{data.ctaType === 'whatsapp' ? 'اطلب عبر واتساب' : 'اطلب الآن'}</span></a><button type="button" onClick={copyPageLink} className="min-h-[50px] rounded-2xl border border-white/20 bg-white/8 px-6 text-sm font-black">{copied ? 'تم النسخ' : 'نسخ الرابط'}</button></div></div>
      </section>
    </main>
  );
}
