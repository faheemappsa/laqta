export function LaqtaMarketingPage() {
  const useCases = [
    'منتج واحد',
    'عيادة أو مركز',
    'عقار أو مخطط',
    'خدمة احترافية',
  ];

  const steps = [
    ['01', 'اكتب بياناتك', 'اسم المنتج، الوصف، المميزات، والسعر إن وجد.'],
    ['02', 'ارفع صورك', 'صورة المنتج أو الخدمة تظهر داخل عرض فاخر جاهز.'],
    ['03', 'خذ رابطك', 'لقطة تحفظ الصفحة وتعطيك رابطًا تشاركه فورًا.'],
  ];

  return (
    <main className="min-h-screen overflow-hidden pb-16">
      <header className="laqta-shell flex items-center justify-between py-6">
        <a href="/" className="text-2xl font-black">لقطة</a>
        <a href="/create" className="btn-secondary text-sm font-bold">جرّبها الآن</a>
      </header>

      <section className="laqta-shell grid min-h-[78vh] items-center gap-10 py-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="fade-up space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-bold text-[#6d5943]">
            <span className="h-2 w-2 rounded-full bg-[#8b5e34]" />
            تجربة مجانية لأصحاب المنتجات والخدمات
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.18] sm:text-7xl sm:leading-[1.16]">
              صفحة بيع فاخرة لمنتجك خلال دقائق.
            </h1>
            <p className="max-w-2xl text-lg leading-9 text-[#6d5943] sm:text-2xl">
              لقطة من مُلهمات تصنع لك صفحة مبهرة للمنتج أو الخدمة أو العقار أو العيادة، مع رابط مباشر للواتساب أو الدفع.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/create" className="btn-primary text-base font-bold">اصنع لقطتك الآن</a>
            <a href="#how" className="btn-secondary font-bold">كيف تعمل؟</a>
          </div>

          <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {useCases.map((item) => (
              <div key={item} className="glass rounded-2xl px-3 py-4 text-center text-sm font-bold text-[#5f4b36]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] fade-up">
          <div className="absolute inset-x-8 top-6 h-[460px] rounded-[56px] bg-gradient-to-br from-[#fff8ee] via-[#ead4b6] to-[#9b7147] shadow-glow hero-orb" />
          <div className="glass absolute right-0 top-0 w-[82%] rotate-3 rounded-[38px] p-5 shadow-glow sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#8b5e34]">معاينة مباشرة</p>
                <h2 className="text-2xl font-black">عرض العيادة الذكي</h2>
              </div>
              <span className="rounded-full bg-[#3f2b18] px-4 py-2 text-xs font-bold text-white">جاهزة للنشر</span>
            </div>
            <div className="aspect-[4/3] rounded-[30px] bg-[radial-gradient(circle_at_30%_20%,#fff_0,#f3dfbd_32%,#b38758_100%)] p-6">
              <div className="h-full rounded-[26px] border border-white/35 bg-white/35 p-5 backdrop-blur-md">
                <div className="mb-5 h-4 w-28 rounded-full bg-[#3f2b18]/70" />
                <div className="mb-3 h-8 w-3/4 rounded-full bg-white/70" />
                <div className="mb-6 h-4 w-1/2 rounded-full bg-white/50" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-white/45" />
                  <div className="h-20 rounded-2xl bg-white/35" />
                  <div className="h-20 rounded-2xl bg-white/25" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass absolute bottom-10 left-0 w-[72%] -rotate-6 rounded-[34px] p-5">
            <p className="mb-2 text-sm font-bold text-[#8b5e34]">بدون محرر معقد</p>
            <h3 className="text-2xl font-black">أنت تعطي المادة، ولقطة تركّب الصفحة.</h3>
            <p className="mt-3 leading-7 text-[#6d5943]">لا تضيع بين قوالب وخيارات كثيرة. تعبئة بسيطة، نتيجة جاهزة.</p>
          </div>
        </div>
      </section>

      <section id="how" className="laqta-shell py-14">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-black text-[#8b5e34]">آلية العمل</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">من الفكرة إلى رابط جاهز.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([num, title, text]) => (
            <div key={num} className="glass rounded-[34px] p-7">
              <span className="mb-8 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#3f2b18] font-black text-white">{num}</span>
              <h3 className="mb-3 text-2xl font-black">{title}</h3>
              <p className="leading-8 text-[#6d5943]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="laqta-shell py-10">
        <div className="glass grid gap-8 rounded-[42px] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black text-[#8b5e34]">إطلاق تجريبي</p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">جرّبها الآن وخلّنا نسمع رأيك.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-9 text-[#6d5943]">
              التجربة مخصصة لقياس الاحتياج الحقيقي لأصحاب المتاجر الصغيرة، البراندات، العقار، العيادات، والخدمات.
            </p>
          </div>
          <a href="/create" className="btn-primary whitespace-nowrap text-base font-bold">ابدأ التجربة</a>
        </div>
      </section>
    </main>
  );
}
