import type { LaqtaData } from '../types';

const typeLabels: Record<LaqtaData['type'], string> = {
  product: 'منتج',
  clinic: 'عيادة',
  real_estate: 'عقار',
  service: 'خدمة',
  personal_brand: 'براند شخصي',
};

function getCtaHref(data: LaqtaData) {
  if (data.ctaType === 'whatsapp') {
    const clean = data.ctaValue.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}?text=${encodeURIComponent(`مرحبًا، وصلتني صفحة ${data.brandName} من لقطة وأرغب بالتفاصيل`)}`;
  }

  if (data.ctaValue.startsWith('http')) return data.ctaValue;
  return `https://${data.ctaValue}`;
}

export function LandingView({ data }: { data: LaqtaData }) {
  return (
    <main className="min-h-screen py-6 sm:py-10">
      <section className="laqta-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="fade-up space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm text-[#6d5943]">
            <span className="h-2 w-2 rounded-full bg-[#8b5e34]" />
            لقطة مخصصة · {typeLabels[data.type]}
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#8b5e34]">{data.brandName}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {data.title}
            </h1>
            <p className="max-w-2xl text-lg leading-9 text-[#6d5943] sm:text-xl">{data.description}</p>
          </div>

          {data.price ? (
            <div className="glass inline-flex rounded-[28px] px-5 py-4">
              <span className="text-sm text-[#7d6b57]">السعر / العرض</span>
              <strong className="mr-4 text-2xl">{data.price}</strong>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href={getCtaHref(data)} target="_blank" rel="noreferrer">
              اطلب الآن
            </a>
            <a className="btn-secondary" href="#features">
              شاهد المميزات
            </a>
          </div>
        </div>

        <div className="hero-orb glass relative overflow-hidden rounded-[42px] p-4 sm:p-6">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#c7a46a]/30 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-[#8b5e34]/20 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] bg-gradient-to-br from-[#fff7eb] to-[#d8c3a4] shadow-glow">
            {data.mainImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.mainImageUrl} alt={data.title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                <div className="mb-6 grid h-32 w-32 place-items-center rounded-[36px] bg-white/50 text-5xl shadow-glow">لقطة</div>
                <p className="text-xl font-bold">صورة المنتج أو الخدمة تظهر هنا</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="features" className="laqta-shell py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[data.featureOne, data.featureTwo, data.featureThree].filter(Boolean).map((feature, index) => (
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
