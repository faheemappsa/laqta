export function LaqtaMarketingPage() {
  const useCases = [
    { label: 'منتج فاخر', icon: '🛍️' },
    { label: 'عيادة', icon: '🩺' },
    { label: 'عقار', icon: '🏡' },
    { label: 'خدمة', icon: '✨' },
    { label: 'براند شخصي', icon: '👤' },
  ];

  const steps = [
    { num: '01', title: 'اكتب بياناتك', desc: 'اسم المنتج، السعر، المميزات، الصور، ورابط الطلب.' },
    { num: '02', title: 'تتكوّن اللقطة', desc: 'نحوّل التفاصيل إلى صفحة بيع فاخرة ومهيأة للجوال.' },
    { num: '03', title: 'انشر الرابط', desc: 'انسخه وشاركه في واتساب، سناب، إعلانك، أو بايو حسابك.' },
  ];

  const features = [
    'رابط جاهز للمشاركة',
    'واتساب أو رابط طلب مباشر',
    'صفحة فاخرة للجوال',
    'لوحة متابعة للنبض',
    'مشاهدات وضغطات',
    'بدون مطور وبدون انتظار',
  ];

  return (
    <>
      <style>{`
        @keyframes floatOrb { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.05); } }
        @keyframes pulseRing { 0%,100% { transform: scale(1); opacity:.48; } 50% { transform: scale(1.15); opacity:.12; } }
        @keyframes fadeSlideUp { 0% { opacity:0; transform: translateY(32px); } 100% { opacity:1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes phoneBuild { 0%,20% { opacity:0; transform: translateY(14px) scale(.96); } 48%,100% { opacity:1; transform: translateY(0) scale(1); } }
        @keyframes sweep { 0% { opacity:0; transform: translateX(140%) rotate(18deg); } 35% { opacity:.7; } 100% { opacity:0; transform: translateX(-170%) rotate(18deg); } }
        @keyframes dashboardPulse { 0%,100% { transform: scale(1); background: rgba(255,255,255,.03); } 50% { transform: scale(1.035); background: rgba(212,175,55,.14); } }
        .anim-float { animation: floatOrb 7s ease-in-out infinite; }
        .anim-pulse-ring { animation: pulseRing 4.4s ease-in-out infinite; }
        .anim-fade-up { animation: fadeSlideUp .8s cubic-bezier(.22,.61,.36,1) forwards; opacity:0; }
        .anim-fade-up-d1 { animation-delay:.1s; }
        .anim-fade-up-d2 { animation-delay:.2s; }
        .anim-fade-up-d3 { animation-delay:.3s; }
        .anim-fade-up-d4 { animation-delay:.4s; }
        .anim-shimmer { background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.22) 50%, transparent 75%); background-size:200% 100%; animation: shimmer 3s infinite; }
        .anim-phone-build-1 { animation: phoneBuild 4s ease-in-out infinite; }
        .anim-phone-build-2 { animation: phoneBuild 4s ease-in-out infinite; animation-delay:.35s; }
        .anim-phone-build-3 { animation: phoneBuild 4s ease-in-out infinite; animation-delay:.7s; }
        .anim-phone-build-4 { animation: phoneBuild 4s ease-in-out infinite; animation-delay:1.05s; }
        .anim-dashboard { animation: dashboardPulse 2.7s ease-in-out infinite; }
        .shine::after { content:''; position:absolute; inset:-28% auto -28% 16%; width:76px; background:linear-gradient(90deg,transparent,rgba(255,255,255,.62),transparent); animation:sweep 5.2s ease-in-out infinite; }
        .card-3d { transition: transform .45s cubic-bezier(.25,.46,.45,.94), box-shadow .45s ease, border-color .45s ease; }
        .card-3d:hover { transform: translateY(-8px) rotateX(2deg) rotateY(-1deg); box-shadow:0 32px 70px -14px rgba(0,0,0,.62); border-color:rgba(212,175,55,.24); }
        .hero-screen-3d { perspective:1200px; transform-style:preserve-3d; }
        .hero-screen-3d-inner { transform:rotateY(-4deg) rotateX(5deg); transition:transform .6s ease; }
        .glass-card { background:rgba(255,255,255,.035); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.07); }
        .gold-text { background:linear-gradient(135deg,#d4af37 0%,#f0c27a 52%,#b87333 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        @media (max-width:640px) { .hero-screen-3d-inner { transform:rotateY(0) rotateX(2deg); } }
      `}</style>

      <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white selection:bg-[#d4af37]/30">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[60vmin] w-[60vmin] rounded-full bg-[#d4af37]/10 blur-[100px]" />
          <div className="anim-float absolute -right-32 bottom-20 h-[55vmin] w-[55vmin] rounded-full bg-[#b87333]/10 blur-[95px]" style={{ animationDelay: '-2s' }} />
          <div className="absolute left-1/2 top-1/2 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,.8) .5px, transparent .5px)', backgroundSize: '48px 48px' }} />
        </div>

        <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <a href="/" className="text-2xl font-black tracking-tight">
            <span className="text-white/80">ل</span><span className="gold-text">قطة</span>
          </a>
          <a href="/create" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-black text-white/80 backdrop-blur-xl transition hover:border-[#d4af37]/30 hover:bg-white/10">
            جرّبها الآن
          </a>
        </header>

        <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-6 sm:px-8 sm:pt-12 lg:grid-cols-[1fr_1.12fr] lg:gap-8">
          <div className="space-y-6 text-center lg:text-right">
            <div className="anim-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
              منصة عربية لصناعة صفحات البيع السريعة
            </div>

            <h1 className="anim-fade-up anim-fade-up-d1 mx-auto max-w-2xl text-[2.8rem] font-black leading-[1.08] sm:text-6xl lg:mx-0 lg:text-7xl">
              صفحة بيع <span className="gold-text">تشبه إعلانًا فاخرًا.</span>
            </h1>

            <p className="anim-fade-up anim-fade-up-d2 mx-auto max-w-xl text-lg leading-9 text-white/52 sm:text-2xl lg:mx-0">
              لقطة تصنع لك صفحة مبهرة للمنتج أو الخدمة أو العقار أو العيادة، مع رابط مباشر للواتساب أو الدفع.
            </p>

            <div className="anim-fade-up anim-fade-up-d3 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="/create" className="group relative inline-flex min-h-[54px] items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] px-8 text-base font-black text-[#080808] shadow-[0_20px_60px_rgba(212,175,55,.28)] transition hover:scale-[1.03] active:scale-95 sm:min-h-[60px] sm:px-10 sm:text-lg">
                <span className="anim-shimmer absolute inset-0 rounded-full" />
                <span className="relative z-10">اصنع لقطتك الآن</span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <a href="#how" className="inline-flex min-h-[54px] items-center rounded-full border border-white/10 bg-white/5 px-7 text-base font-black text-white/80 backdrop-blur-xl transition hover:bg-white/10 sm:min-h-[60px] sm:px-8 sm:text-lg">
                كيف تعمل؟
              </a>
            </div>

            <div className="anim-fade-up anim-fade-up-d4 grid grid-cols-5 gap-2 pt-2 sm:max-w-xl lg:max-w-lg">
              {useCases.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/5 bg-white/[0.035] px-2 py-3 text-center text-xs font-black text-white/62 backdrop-blur-xl transition hover:border-[#d4af37]/25 sm:text-sm">
                  <span className="text-lg">{item.icon}</span><br />{item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-screen-3d flex justify-center lg:justify-start">
            <div className="hero-screen-3d-inner relative w-[280px] sm:w-[350px]">
              <div className="anim-pulse-ring absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4af37]/20 sm:h-[470px] sm:w-[470px]" />
              <div className="anim-pulse-ring absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b87333]/16 sm:h-[380px] sm:w-[380px]" style={{ animationDelay: '-1.5s' }} />

              <div className="relative rounded-[48px] border border-white/10 bg-gradient-to-br from-[#18181b] via-[#0f0f11] to-[#18181b] p-3 shadow-[0_50px_100px_rgba(0,0,0,.62),0_0_0_1px_rgba(255,255,255,.035)_inset]">
                <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/60" />
                <div className="shine relative overflow-hidden rounded-[38px] bg-[#fafaf8] shadow-[inset_0_0_50px_rgba(0,0,0,.04)]">
                  <div className="flex items-center justify-between bg-black/4 px-5 py-2 text-[9px] font-bold text-black/35">
                    <span>9:41</span><span>●●●●○</span>
                  </div>

                  <div className="relative overflow-hidden bg-gradient-to-br from-[#d4af37] via-[#b87333] to-[#080808] p-5 text-white">
                    <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
                    <div className="relative flex items-center justify-between text-[10px] font-black">
                      <span>لقطة جاهزة</span><span className="rounded-full bg-white/20 px-2.5 py-0.5 backdrop-blur-md">Live</span>
                    </div>
                    <div className="relative mt-6 flex justify-center">
                      <div className="grid h-24 w-24 place-items-center rounded-2xl bg-white/12 text-5xl shadow-2xl backdrop-blur-md">🛍️</div>
                    </div>
                  </div>

                  <div className="space-y-3 p-4 text-right">
                    <div className="anim-phone-build-1 opacity-0">
                      <p className="text-[11px] font-black text-[#b87333]">عرض اليوم</p>
                      <h3 className="text-lg font-black text-stone-800">ساعة ذكية فاخرة</h3>
                      <p className="mt-1 text-[11px] leading-5 text-stone-500">مقاومة للماء، بطارية طويلة، ومتابعة صحية.</p>
                    </div>
                    <div className="anim-phone-build-2 grid grid-cols-3 gap-1.5 opacity-0">
                      <div className="rounded-xl bg-[#d4af37]/10 p-1.5 text-center text-[10px] font-black text-stone-700">ضمان</div>
                      <div className="rounded-xl bg-[#d4af37]/10 p-1.5 text-center text-[10px] font-black text-stone-700">توصيل</div>
                      <div className="rounded-xl bg-[#d4af37]/10 p-1.5 text-center text-[10px] font-black text-stone-700">دعم</div>
                    </div>
                    <div className="anim-phone-build-3 flex items-end gap-2 opacity-0">
                      <strong className="text-xl text-stone-800">199 ر.س</strong><span className="pb-0.5 text-xs text-stone-400 line-through">350 ر.س</span>
                    </div>
                    <div className="anim-phone-build-4 space-y-2 opacity-0">
                      <div className="grid h-9 place-items-center rounded-xl bg-[#2f8f55] text-xs font-black text-white">💬 واتساب مباشر</div>
                      <div className="grid h-9 place-items-center rounded-xl bg-gradient-to-l from-[#d4af37] to-[#b87333] text-xs font-black text-[#080808]">🔗 رابط الطلب</div>
                    </div>
                  </div>

                  <div className="flex justify-center pb-2"><div className="h-1 w-28 rounded-full bg-stone-300" /></div>
                </div>
              </div>

              <div className="anim-float absolute -left-4 top-14 z-30 glass-card rounded-2xl px-3 py-2 text-[11px] font-black text-white/80 shadow-[0_16px_40px_rgba(0,0,0,.5)] sm:-left-6 sm:top-20">📱 جوال أولًا</div>
              <div className="anim-float absolute -right-3 bottom-24 z-30 glass-card rounded-2xl px-3 py-2 text-[11px] font-black text-white/80 shadow-[0_16px_40px_rgba(0,0,0,.5)] sm:-right-5 sm:bottom-32" style={{ animationDelay: '-1.5s' }}>⚡ خلال دقائق</div>
            </div>
          </div>
        </section>

        <section id="how" className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="mb-8 text-center lg:text-right">
            <p className="text-sm font-black tracking-widest text-[#d4af37]">آلية العمل</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">من الفكرة إلى رابط جاهز.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="glass-card card-3d rounded-3xl p-6 sm:p-8">
                <span className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#b87333] text-xl font-black text-[#080808]">{step.num}</span>
                <h3 className="mb-3 text-xl font-black text-white">{step.title}</h3>
                <p className="text-base leading-7 text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-10">
            <div className="mb-6 text-center lg:text-right">
              <p className="text-sm font-black tracking-widest text-[#d4af37]">لوحة لقطتك</p>
              <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">تابع نبض لقطتك مباشرة.</h2>
              <p className="mt-3 text-lg text-white/42">شاهد المشاهدات، ضغطات الطلب، والزخم بعد ما تشارك الرابط.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-card anim-dashboard rounded-2xl p-5 text-center">
                <p className="text-sm font-bold text-white/40">مثال مشاهدات</p><p className="mt-2 text-3xl font-black text-white">١٢٤</p><p className="mt-1 text-xs text-white/30">نموذج من لوحة المتابعة</p>
              </div>
              <div className="glass-card anim-dashboard rounded-2xl p-5 text-center" style={{ animationDelay: '.5s' }}>
                <p className="text-sm font-bold text-white/40">مثال ضغطات</p><p className="mt-2 text-3xl font-black text-white">١٧</p><p className="mt-1 text-xs text-white/30">تتغير حسب أداء لقطتك</p>
              </div>
              <div className="glass-card anim-dashboard rounded-2xl p-5 text-center" style={{ animationDelay: '1s' }}>
                <p className="text-sm font-bold text-white/40">نبض اللقطة</p><p className="mt-2 text-3xl font-black text-[#d4af37]">عالٍ</p><p className="mt-1 text-xs text-white/30">مؤشر يساعدك تفهم الحركة</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <a href="/test-report" className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-3 text-sm font-black text-[#d4af37] transition hover:bg-[#d4af37]/20">
                شاهد لوحة لقطتك
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </a>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-black tracking-widest text-[#d4af37]">لماذا لقطة؟</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">بدون تعقيد، بدون انتظار.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((item) => <span key={item} className="glass-card rounded-full px-5 py-2.5 text-sm font-black text-white/70">{item}</span>)}
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/10 to-[#b87333]/10 p-8 text-center backdrop-blur-xl sm:p-14">
            <h2 className="text-3xl font-black text-white sm:text-5xl">حوّل فكرتك إلى صفحة بيع <span className="gold-text">خلال دقائق</span>.</h2>
            <p className="mt-4 text-lg text-white/50 sm:text-xl">اصنع صفحتك الأولى الآن، وشاركها مع عملائك مباشرة.</p>
            <a href="/create" className="mt-6 inline-flex min-h-[54px] items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] px-10 text-base font-black text-[#080808] shadow-[0_20px_60px_rgba(212,175,55,.3)] transition hover:scale-[1.03] active:scale-95 sm:min-h-[60px] sm:px-12 sm:text-lg">
              ابدأ الآن مجانًا
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </a>
            <p className="mt-4 text-xs text-white/25">بدون بطاقة ائتمانية · بدون التزام</p>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/5 py-6 text-center">
          <p className="text-xs font-bold text-white/20">صُنعت بواسطة <span className="text-white/40">لقطة</span> · كل الحقوق محفوظة</p>
        </footer>
      </main>
    </>
  );
}
