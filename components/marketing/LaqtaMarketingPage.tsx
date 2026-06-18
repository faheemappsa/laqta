export function LaqtaMarketingPage() {
  const useCases = ['منتج واحد', 'عيادة أو مركز', 'عقار أو مخطط', 'خدمة احترافية'];

  const steps = [
    ['01', 'املأ التفاصيل', 'اسم المنتج، السعر، المميزات، صورة واحدة، ورابط الطلب.'],
    ['02', 'تتكوّن اللقطة', 'نحوّل بياناتك إلى صفحة بيع فاخرة ومجهزة للجوال.'],
    ['03', 'انشر الرابط', 'خذ رابطًا جاهزًا وشاركه في واتساب، سناب، تيك توك أو إعلانك.'],
  ];

  return (
    <>
      <style>{`
        @keyframes orbitOne {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-26px) rotate(2.5deg); }
        }
        @keyframes orbitTwo {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          35% { transform: translateY(-34px) rotate(-2deg); }
          70% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes orbitThree {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.035); }
        }
        @keyframes phoneMagic {
          0%, 100% { transform: rotateY(-12deg) rotateX(7deg) translateY(0); }
          25% { transform: rotateY(-5deg) rotateX(3deg) translateY(-8px); }
          50% { transform: rotateY(-15deg) rotateX(8deg) translateY(-15px); }
          75% { transform: rotateY(-8deg) rotateX(4deg) translateY(-8px); }
        }
        @keyframes ringGlow {
          0%, 100% { opacity: .25; transform: translate(-50%, -50%) rotateX(74deg) scale(.92); }
          50% { opacity: .7; transform: translate(-50%, -50%) rotateX(74deg) scale(1.06); }
        }
        @keyframes builderIn {
          0%, 15% { opacity: 0; transform: translateY(18px) scale(.94); }
          45%, 100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shineSweep {
          0% { transform: translateX(145%) rotate(18deg); opacity: 0; }
          35% { opacity: .85; }
          100% { transform: translateX(-170%) rotate(18deg); opacity: 0; }
        }
        @keyframes auraMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(18px, -16px) scale(1.08); }
        }
        @keyframes tinyBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .scene-perspective { perspective: 1300px; }
        .preserve-3d { transform-style: preserve-3d; }
        .float-one { animation: orbitOne 7.2s ease-in-out infinite; }
        .float-two { animation: orbitTwo 8.8s ease-in-out infinite; }
        .float-three { animation: orbitThree 6.4s ease-in-out infinite; }
        .phone-magic { animation: phoneMagic 12s ease-in-out infinite; }
        .ring-one { animation: ringGlow 5s ease-in-out infinite; }
        .ring-two { animation: ringGlow 6.5s ease-in-out infinite; animation-delay: 1.3s; }
        .aura-move { animation: auraMove 9s ease-in-out infinite; }
        .builder-1 { animation: builderIn 3.8s ease-in-out infinite; }
        .builder-2 { animation: builderIn 3.8s ease-in-out infinite; animation-delay: .35s; }
        .builder-3 { animation: builderIn 3.8s ease-in-out infinite; animation-delay: .7s; }
        .builder-4 { animation: builderIn 3.8s ease-in-out infinite; animation-delay: 1.05s; }
        .shine-card::after {
          content: '';
          position: absolute;
          inset: -30% auto -30% 22%;
          width: 82px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          animation: shineSweep 5.4s ease-in-out infinite;
        }
        .tiny-bounce { animation: tinyBounce 3.2s ease-in-out infinite; }
        @media (max-width: 640px) {
          .mobile-scale { transform: scale(.84); transform-origin: center; }
        }
      `}</style>

      <main className="relative min-h-screen overflow-hidden pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aura-move absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="aura-move absolute -right-44 top-28 h-[560px] w-[560px] rounded-full bg-[#c7a46a]/30 blur-3xl" style={{ animationDelay: '1.7s' }} />
          <div className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-blue-300/10 blur-3xl" />
        </div>

        <header className="laqta-shell relative z-20 flex items-center justify-between py-6">
          <a href="/" className="text-2xl font-black">لقطة</a>
          <a href="/create" className="btn-secondary text-sm font-bold">جرّبها الآن</a>
        </header>

        <section className="laqta-shell relative z-10 grid min-h-[80vh] items-center gap-8 py-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
          <div className="fade-up space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-white/55 px-4 py-2 text-sm font-black text-[#5f4b36] shadow-sm backdrop-blur-xl">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-[#8b5e34] text-xs text-white">✦</span>
              تجربة مجانية لأصحاب المنتجات والخدمات
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[1.18] sm:text-7xl sm:leading-[1.14]">
                صفحة بيع
                <span className="block bg-gradient-to-l from-indigo-600 via-[#8b5e34] to-[#3f2b18] bg-clip-text text-transparent">
                  تُشبه إعلانًا فاخرًا.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-[#6d5943] sm:text-2xl">
                لقطة من مُلهمات تصنع لك صفحة مبهرة للمنتج أو الخدمة أو العقار أو العيادة، مع رابط مباشر للواتساب أو الدفع.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/create" className="btn-primary text-base font-bold">اصنع لقطتك الآن</a>
              <a href="#how" className="btn-secondary font-bold">شاهد كيف تعمل</a>
            </div>

            <div className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {useCases.map((item, index) => (
                <div key={item} className="glass rounded-2xl px-3 py-4 text-center text-sm font-black text-[#5f4b36] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow" style={{ animationDelay: `${index * 120}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="scene-perspective relative min-h-[650px] overflow-visible lg:min-h-[690px]">
            <div className="mobile-scale absolute inset-0 grid place-items-center preserve-3d">
              <div className="ring-one absolute left-1/2 top-1/2 h-[420px] w-[420px] rounded-full border border-indigo-400/30" />
              <div className="ring-two absolute left-1/2 top-1/2 h-[560px] w-[560px] rounded-full border border-[#c7a46a]/35" />
              <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/15 via-[#c7a46a]/15 to-transparent blur-2xl" />

              <div className="phone-magic preserve-3d relative z-30 w-[285px] sm:w-[326px]">
                <div className="relative aspect-[9/18.7] rounded-[48px] border border-white/30 bg-gradient-to-br from-[#120d18] via-[#24180f] to-[#0d1022] p-3 shadow-[0_55px_120px_rgba(45,32,72,.42)]">
                  <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/45" />
                  <div className="shine-card relative h-full overflow-hidden rounded-[38px] bg-[#fff8ee] shadow-[inset_0_0_30px_rgba(0,0,0,.06)]">
                    <div className="relative h-[38%] overflow-hidden bg-[radial-gradient(circle_at_24%_18%,#fff7e8_0,#d9b47e_32%,#7b4bff_76%,#2d1b57_100%)] p-5 text-white">
                      <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
                      <div className="absolute bottom-3 right-4 h-24 w-24 rounded-full bg-[#c7a46a]/35 blur-xl" />
                      <div className="relative flex items-center justify-between text-xs font-black">
                        <span>لقطة جاهزة</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">Live</span>
                      </div>
                      <div className="relative mt-8 grid place-items-center">
                        <div className="tiny-bounce grid h-24 w-24 place-items-center rounded-[32px] bg-white/18 text-5xl shadow-2xl backdrop-blur-md">🛍️</div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="builder-1 opacity-0">
                        <p className="text-xs font-black text-indigo-600">عرض اليوم</p>
                        <h3 className="text-lg font-black text-[#21180f]">ساعة ذكية فاخرة</h3>
                        <p className="mt-1 text-xs leading-5 text-[#7d6b57]">مقاومة للماء، بطارية طويلة، ومتابعة صحية يومية.</p>
                      </div>

                      <div className="builder-2 grid grid-cols-3 gap-2 opacity-0">
                        <div className="rounded-2xl bg-indigo-50 p-2 text-center text-[10px] font-black text-indigo-700">ضمان</div>
                        <div className="rounded-2xl bg-[#f3e4cf] p-2 text-center text-[10px] font-black text-[#5c4026]">توصيل</div>
                        <div className="rounded-2xl bg-[#f3e4cf] p-2 text-center text-[10px] font-black text-[#5c4026]">دعم</div>
                      </div>

                      <div className="builder-3 flex items-end gap-2 opacity-0">
                        <strong className="text-2xl text-[#21180f]">199 ر.س</strong>
                        <span className="pb-1 text-xs text-[#9a8977] line-through">350 ر.س</span>
                      </div>

                      <div className="builder-4 space-y-2 pt-2 opacity-0">
                        <div className="grid h-10 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white shadow-lg shadow-green-900/10">واتساب مباشر</div>
                        <div className="grid h-10 place-items-center rounded-2xl bg-gradient-to-l from-indigo-600 to-[#3f2b18] text-sm font-black text-white shadow-lg shadow-indigo-900/20">رابط الدفع</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass float-one absolute right-0 top-16 z-40 w-52 rounded-[30px] p-4 shadow-[0_28px_70px_rgba(68,48,118,.18)] sm:right-10" style={{ transform: 'rotateY(18deg) rotateX(6deg) translateZ(90px)' }}>
                <p className="mb-3 text-xs font-black text-indigo-600">مميزات المنتج</p>
                <div className="space-y-2 text-sm font-bold text-[#5f4b36]">
                  <p>✓ توصيل سريع</p>
                  <p>✓ ضمان واضح</p>
                  <p>✓ عرض محدود</p>
                </div>
              </div>

              <div className="glass float-two absolute bottom-28 left-0 z-40 w-56 rounded-[30px] p-4 shadow-[0_28px_70px_rgba(47,143,85,.18)] sm:left-8" style={{ transform: 'rotateY(-18deg) rotateX(5deg) translateZ(70px)' }}>
                <p className="mb-3 text-xs font-black text-[#2f8f55]">زر واتساب</p>
                <div className="grid h-12 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white">تواصل مباشر</div>
              </div>

              <div className="glass float-three absolute left-14 top-6 z-20 w-48 rounded-[30px] p-4 shadow-[0_28px_70px_rgba(139,94,52,.16)]" style={{ transform: 'rotateY(-10deg) rotateX(6deg) translateZ(50px)' }}>
                <p className="mb-2 text-xs font-black text-[#8b5e34]">رابط جاهز</p>
                <div className="truncate rounded-2xl bg-white/65 px-3 py-3 text-xs font-black text-[#6d5943]">laqta-page.vercel.app/l/offer</div>
              </div>

              <div className="glass float-one absolute bottom-12 right-6 z-20 w-48 rounded-[30px] p-4 shadow-[0_28px_70px_rgba(199,164,106,.18)]" style={{ animationDelay: '1.1s', transform: 'rotateY(10deg) rotateX(-5deg) translateZ(42px)' }}>
                <p className="mb-3 text-xs font-black text-[#8b5e34]">صورة المنتج</p>
                <div className="grid h-28 place-items-center rounded-[24px] bg-[radial-gradient(circle_at_30%_20%,#fff_0,#ecd2aa_38%,#7b4bff_100%)] text-5xl">📸</div>
              </div>

              <div className="glass float-two absolute bottom-0 left-1/2 z-10 w-44 -translate-x-1/2 rounded-[30px] p-4 shadow-[0_28px_70px_rgba(47,43,24,.13)]" style={{ animationDelay: '.7s' }}>
                <p className="mb-2 text-xs font-black text-indigo-600">مؤشر جاهزية</p>
                <div className="h-2 overflow-hidden rounded-full bg-white/70">
                  <div className="h-full w-[86%] rounded-full bg-gradient-to-l from-indigo-600 to-[#c7a46a]" />
                </div>
                <p className="mt-2 text-xs font-black text-[#6d5943]">86% صفحة مكتملة</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="laqta-shell relative z-10 py-14">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-black text-indigo-600">آلية العمل</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">من الفكرة إلى رابط جاهز.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([num, title, text]) => (
              <div key={num} className="glass rounded-[34px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                <span className="mb-8 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-[#3f2b18] font-black text-white">{num}</span>
                <h3 className="mb-3 text-2xl font-black">{title}</h3>
                <p className="leading-8 text-[#6d5943]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="laqta-shell relative z-10 py-10">
          <div className="glass grid gap-8 overflow-hidden rounded-[42px] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black text-indigo-600">إطلاق تجريبي</p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">جرّبها الآن وخلّنا نسمع رأيك.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-[#6d5943]">
                التجربة مخصصة لقياس الاحتياج الحقيقي لأصحاب المتاجر الصغيرة، البراندات، العقار، العيادات، والخدمات.
              </p>
            </div>
            <a href="/create" className="btn-primary whitespace-nowrap text-base font-bold">ابدأ التجربة</a>
          </div>
        </section>
      </main>
    </>
  );
}
