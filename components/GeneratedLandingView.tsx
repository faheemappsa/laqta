import type { LaqtaData } from '../types';

const labels: Record<LaqtaData['type'], { title: string; icon: string; badge: string; bg: string }> = {
  product: { title: 'منتج فاخر', icon: '🛍️', badge: 'عرض منتج', bg: 'from-[#7f1d3a] via-[#a85d2c] to-[#f0b45b]' },
  clinic: { title: 'عيادة وموعد', icon: '🩺', badge: 'حجز واهتمام', bg: 'from-[#14532d] via-[#2f8f55] to-[#c7e8cd]' },
  real_estate: { title: 'عقار وفرصة', icon: '🏡', badge: 'فرصة عقارية', bg: 'from-[#3b2f24] via-[#9a6a3a] to-[#f0c27a]' },
  service: { title: 'خدمة مميزة', icon: '✨', badge: 'خدمة جاهزة', bg: 'from-[#312e81] via-[#7c3aed] to-[#f0b45b]' },
  personal_brand: { title: 'براند شخصي', icon: '👤', badge: 'حضور احترافي', bg: 'from-[#111827] via-[#7f1d3a] to-[#f0b45b]' },
};

function ctaHref(data: LaqtaData) {
  if (data.ctaType === 'whatsapp') {
    const clean = data.ctaValue.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`مرحبًا، وصلتني صفحة ${data.brandName} من لقطة وأرغب بالتفاصيل`);
    return `https://wa.me/${clean}?text=${message}`;
  }

  return data.ctaValue.startsWith('http') ? data.ctaValue : `https://${data.ctaValue}`;
}

export function GeneratedLandingView({ data }: { data: LaqtaData }) {
  const meta = labels[data.type];
  const features = [data.featureOne, data.featureTwo, data.featureThree].filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-hidden pb-16 text-[#21180f]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-36 top-0 h-[520px] w-[520px] rounded-full bg-[#7f1d3a]/16 blur-3xl" />
        <div className="absolute -left-44 top-56 h-[560px] w-[560px] rounded-full bg-[#f0b45b]/24 blur-3xl" />
      </div>

      <header className="laqta-shell relative z-20 flex items-center justify-between py-5">
        <a href="/" className="text-2xl font-black">لقطة</a>
        <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-black text-[#7f1d3a] shadow-sm">{meta.badge}</span>
      </header>

      <section className="laqta-shell relative z-10 grid items-center gap-8 pt-2 lg:grid-cols-[.9fr_1.1fr] lg:gap-10">
        <div className="fade-up space-y-6 text-center lg:text-right">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#7f1d3a]/15 bg-white/65 px-4 py-2 text-sm font-black text-[#6d4a32] shadow-sm backdrop-blur-xl lg:mx-0">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#7f1d3a] text-xs text-white">✦</span>
            لقطة مخصصة · {meta.title}
          </div>

          <div className="space-y-4">
            <p className="text-lg font-black text-[#8b5e34]">{data.brandName}</p>
            <h1 className="mx-auto max-w-3xl text-[2.8rem] font-black leading-[1.08] sm:text-7xl lg:mx-0">{data.title}</h1>
            <p className="mx-auto max-w-2xl text-lg leading-9 text-[#6d5943] sm:text-2xl lg:mx-0">{data.description}</p>
          </div>

          {data.price ? (
            <div className="glass inline-flex rounded-[28px] px-5 py-4">
              <span className="text-sm text-[#7d6b57]">السعر / العرض</span>
              <strong className="mr-4 text-2xl">{data.price}</strong>
            </div>
          ) : null}

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a className="btn-primary min-h-14 px-8" href={ctaHref(data)} target="_blank" rel="noreferrer">
              {data.ctaType === 'whatsapp' ? 'اطلب عبر واتساب' : 'اطلب الآن'}
            </a>
            <a className="btn-secondary min-h-14" href="#features">شاهد المميزات</a>
          </div>
        </div>

        <div className="relative h-[560px] overflow-visible sm:h-[680px]">
          <div className="absolute inset-x-0 top-3 mx-auto h-[620px] w-[430px] max-w-full">
            <div className="absolute left-1/2 top-[48%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7f1d3a]/22 sm:h-[500px] sm:w-[500px]" />
            <div className="absolute left-1/2 top-[48%] h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f0b45b]/32 sm:h-[630px] sm:w-[630px]" />

            <div className="hero-orb absolute left-1/2 top-10 z-20 w-[305px] -translate-x-1/2 sm:w-[365px]">
              <div className="relative aspect-[9/18] rounded-[50px] border border-white/30 bg-gradient-to-br from-[#120b10] via-[#2c1420] to-[#120b10] p-3 shadow-[0_56px_130px_rgba(48,19,31,.46)]">
                <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/45" />
                <div className="relative h-full overflow-hidden rounded-[38px] bg-[#fff9ef] shadow-[inset_0_0_35px_rgba(0,0,0,.06)]">
                  <div className={`relative h-[42%] overflow-hidden bg-gradient-to-br ${meta.bg} p-5 text-white`}>
                    <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/24 blur-2xl" />
                    <div className="relative flex items-center justify-between text-xs font-black">
                      <span>{meta.badge}</span>
                      <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">Live</span>
                    </div>
                    <div className="relative mt-8 grid place-items-center">
                      {data.mainImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={data.mainImageUrl} alt={data.title} className="h-32 w-32 rounded-[34px] object-cover shadow-2xl ring-4 ring-white/25" />
                      ) : (
                        <div className="grid h-32 w-32 place-items-center rounded-[34px] bg-white/20 text-6xl shadow-2xl backdrop-blur-md">{meta.icon}</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 p-4 text-right">
                    <div>
                      <p className="text-xs font-black text-[#7f1d3a]">{data.price || 'عرض خاص'}</p>
                      <h3 className="mt-1 line-clamp-2 text-xl font-black text-[#21180f]">{data.title}</h3>
                      <p className="mt-1 line-clamp-3 text-xs leading-5 text-[#7d6b57]">{data.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {features.slice(0, 3).map((feature) => (
                        <div key={feature} className="line-clamp-2 rounded-2xl bg-[#f7e9d2] p-2 text-center text-[10px] font-black text-[#7a4a24]">{feature}</div>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-white p-3 text-xs font-bold leading-5 text-[#6d5943] shadow-sm">{data.competitorEdge}</div>
                    <div className="grid h-11 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white shadow-lg shadow-green-900/10">
                      {data.ctaType === 'whatsapp' ? 'واتساب مباشر' : 'رابط طلب مباشر'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-28 z-30 rounded-3xl bg-white/80 p-3 text-xs font-black text-[#6d4a32] shadow-[0_18px_50px_rgba(70,45,25,.16)] backdrop-blur-xl sm:right-4">رابط جاهز</div>
            <div className="absolute bottom-40 left-0 z-30 rounded-3xl bg-white/80 p-3 text-xs font-black text-[#6d4a32] shadow-[0_18px_50px_rgba(70,45,25,.16)] backdrop-blur-xl sm:left-2">تصميم مخصص</div>
          </div>
        </div>
      </section>

      <section id="features" className="laqta-shell relative z-10 py-10 sm:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature} className="glass rounded-[32px] p-6">
              <span className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-[#3f2b18] text-white">{index + 1}</span>
              <p className="text-lg font-bold leading-8">{feature}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-6 rounded-[36px] p-7 sm:p-10">
          <p className="mb-3 text-sm font-bold text-[#8b5e34]">الميزة التنافسية</p>
          <h2 className="text-2xl font-black sm:text-4xl">ليش تختار هذا العرض؟</h2>
          <p className="mt-4 max-w-3xl text-lg leading-9 text-[#6d5943]">{data.competitorEdge}</p>
        </div>
      </section>
    </main>
  );
}
