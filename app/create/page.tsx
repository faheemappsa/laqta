'use client';

import { FormEvent, useState } from 'react';
import { createLanding, uploadLandingImage } from '../../lib/supabaseRest';
import type { LaqtaType } from '../../types';

const types: { value: LaqtaType; label: string }[] = [
  { value: 'product', label: 'منتج' },
  { value: 'clinic', label: 'عيادة' },
  { value: 'real_estate', label: 'عقار' },
  { value: 'service', label: 'خدمة' },
  { value: 'personal_brand', label: 'براند' },
];

function makeSlug(value: string) {
  const base = value.trim().toLowerCase().replace(/[^a-z0-9\u0600-\u06ff]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 42);
  return `${base || 'laqta'}-${Math.random().toString(36).slice(2, 7)}`;
}

function cleanWhatsApp(value: string) {
  const clean = value.replace(/[^0-9]/g, '');
  if (clean.startsWith('966')) return clean;
  if (clean.startsWith('05')) return `966${clean.slice(1)}`;
  if (clean.startsWith('5')) return `966${clean}`;
  return clean;
}

export default function CreatePage() {
  const [businessType, setBusinessType] = useState<LaqtaType>('product');
  const [brandName, setBrandName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [featureOne, setFeatureOne] = useState('');
  const [featureTwo, setFeatureTwo] = useState('');
  const [featureThree, setFeatureThree] = useState('');
  const [competitorEdge, setCompetitorEdge] = useState('');
  const [ctaType, setCtaType] = useState<'whatsapp' | 'link'>('whatsapp');
  const [ctaValue, setCtaValue] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [createdUrl, setCreatedUrl] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setCreatedUrl('');
    setIsLoading(true);

    try {
      const slug = makeSlug(title);
      const mainImageUrl = imageFile ? await uploadLandingImage(imageFile, slug) : null;
      const row = await createLanding({
        slug,
        business_type: businessType,
        brand_name: brandName.trim() || 'لقطة',
        title: title.trim(),
        description: description.trim(),
        price: price.trim() || null,
        features: [featureOne, featureTwo, featureThree].map((item) => item.trim()).filter(Boolean),
        competitor_edge: competitorEdge.trim() || 'صفحة مرتبة، عرض واضح، وطلب مباشر بدون تعقيد.',
        main_image_url: mainImageUrl,
        cta_type: ctaType,
        cta_value: ctaType === 'whatsapp' ? cleanWhatsApp(ctaValue) : ctaValue.trim(),
      });
      setCreatedUrl(`${window.location.origin}/l/${row.slug}`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'تعذر إنشاء اللقطة.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen pb-16">
      <header className="laqta-shell flex items-center justify-between py-5">
        <a href="/" className="text-2xl font-black">لقطة</a>
        <span className="rounded-full bg-white/70 px-4 py-2 text-sm font-black text-[#7f1d3a]">إنشاء صفحة</span>
      </header>

      <section className="laqta-shell grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-[36px] p-6 lg:sticky lg:top-6 lg:self-start">
          <p className="mb-3 text-sm font-black text-[#8b5e34]">منتج لقطة</p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl">اصنع صفحة بيع فاخرة خلال دقائق.</h1>
          <p className="mt-4 text-lg leading-9 text-[#6d5943]">عبّي بيانات بسيطة، ارفع صورة، وخذ رابط جاهز ترسله للعميل أو تستخدمه في إعلانك.</p>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-[36px] p-5 sm:p-7">
          <div className="mb-5 grid grid-cols-5 gap-2">
            {types.map((item) => (
              <button key={item.value} type="button" onClick={() => setBusinessType(item.value)} className={`rounded-2xl px-2 py-3 text-xs font-black ${businessType === item.value ? 'bg-[#3f2b18] text-white' : 'bg-white/70 text-[#6d5943]'}`}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            <input className="input" value={brandName} onChange={(event) => setBrandName(event.target.value)} placeholder="اسم البراند" />
            <input className="input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="عنوان العرض" required />
            <textarea className="input min-h-28 resize-none" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="وصف مختصر" required />
            <input className="input" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="السعر أو العرض" />
            <input className="input" type="file" accept="image/*" onChange={(event) => setImageFile(event.target.files?.[0] ?? null)} />
            <input className="input" value={featureOne} onChange={(event) => setFeatureOne(event.target.value)} placeholder="الميزة الأولى" />
            <input className="input" value={featureTwo} onChange={(event) => setFeatureTwo(event.target.value)} placeholder="الميزة الثانية" />
            <input className="input" value={featureThree} onChange={(event) => setFeatureThree(event.target.value)} placeholder="الميزة الثالثة" />
            <textarea className="input min-h-24 resize-none" value={competitorEdge} onChange={(event) => setCompetitorEdge(event.target.value)} placeholder="وش يميزك؟" />

            <div className="grid grid-cols-2 gap-2">
              <button type="button" onClick={() => setCtaType('whatsapp')} className={`rounded-2xl py-3 font-black ${ctaType === 'whatsapp' ? 'bg-[#2f8f55] text-white' : 'bg-white/70'}`}>واتساب</button>
              <button type="button" onClick={() => setCtaType('link')} className={`rounded-2xl py-3 font-black ${ctaType === 'link' ? 'bg-[#3f2b18] text-white' : 'bg-white/70'}`}>رابط دفع</button>
            </div>
            <input className="input" value={ctaValue} onChange={(event) => setCtaValue(event.target.value)} placeholder={ctaType === 'whatsapp' ? 'رقم الواتساب' : 'رابط الدفع'} required />

            {error ? <div className="rounded-3xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</div> : null}
            {createdUrl ? <a className="rounded-3xl bg-green-50 p-4 text-sm font-bold text-green-800 underline" href={createdUrl} target="_blank" rel="noreferrer">{createdUrl}</a> : null}

            <button className="btn-primary min-h-14" disabled={isLoading} type="submit">{isLoading ? 'جاري صناعة اللقطة...' : 'اصنع لقطتي'}</button>
          </div>
        </form>
      </section>
    </main>
  );
}
