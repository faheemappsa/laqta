export function LaqtaMarketingPage() {
  const useCases = ['منتج واحد', 'عيادة', 'عقار', 'خدمة'];

  const steps = [
    ['01', 'املأ التفاصيل', 'اسم المنتج، السعر، المميزات، صورة، ورابط الطلب.'],
    ['02', 'تتكوّن اللقطة', 'نحوّل بياناتك إلى صفحة بيع فاخرة ومهيّأة للجوال.'],
    ['03', 'انشر الرابط', 'انسخ الرابط وشاركه في واتساب أو سناب أو إعلانك.'],
  ];

  return (
    <>
      <style>{`
        @keyframes soft-orbit {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(0,-14px,0) rotate(1.4deg); }
        }
        @keyframes slow-orbit {
          0%, 100% { transform: translate3d(0,0,0) rotate(0deg); }
          40% { transform: translate3d(0,-22px,0) rotate(-1.2deg); }
          75% { transform: translate3d(0,-7px,0) rotate(.8deg); }
        }
        @keyframes phone-stage {
          0%, 100% { transform: rotateY(-9deg) rotateX(5deg) translateY(0); }
          50% { transform: rotateY(-4deg) rotateX(2deg) translateY(-10px); }
        }
        @keyframes ring-breathe {
          0%, 100% { opacity: .18; transform: translate(-50%, -50%) rotateX(76deg) scale(.9); }
          50% { opacity: .55; transform: translate(-50%, -50%) rotateX(76deg) scale(1.05); }
        }
        @keyframes build-card {
          0%, 20% { opacity: 0; transform: translateY(14px) scale(.96); }
          48%, 100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes sweep {
          0% { opacity: 0; transform: translateX(140%) rotate(18deg); }
          35% { opacity: .7; }
          100% { opacity: 0; transform: translateX(-170%) rotate(18deg); }
        }
        @keyframes aura {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(18px,-16px) scale(1.06); }
        }
        @keyframes pop-in {
          from { opacity: 0; transform: translateY(16px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .stage-perspective { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .float-soft { animation: soft-orbit 7s ease-in-out infinite; }
        .float-slow { animation: slow-orbit 8.5s ease-in-out infinite; }
        .phone-stage { animation: phone-stage 10s ease-in-out infinite; }
        .ring-a { animation: ring-breathe 5.5s ease-in-out infinite; }
        .ring-b { animation: ring-breathe 7s ease-in-out infinite; animation-delay: 1.1s; }
        .build-1 { animation: build-card 3.8s ease-in-out infinite; }
        .build-2 { animation: build-card 3.8s ease-in-out infinite; animation-delay: .35s; }
        .build-3 { animation: build-card 3.8s ease-in-out infinite; animation-delay: .7s; }
        .build-4 { animation: build-card 3.8s ease-in-out infinite; animation-delay: 1.05s; }
        .shine::after {
          content: '';
          position: absolute;
          inset: -28% auto -28% 16%;
          width: 76px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.58), transparent);
          animation: sweep 5.2s ease-in-out infinite;
        }
        .aura { animation: aura 9s ease-in-out infinite; }
        .pop-in { animation: pop-in .75s cubic-bezier(.2,.9,.2,1) both; }
        @media (max-width: 640px) {
          .phone-wrap { transform: scale(.83); transform-origin: center top; }
          .hide-mobile-card { display: none; }
        }
      `}</style>

      <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#fffaf2_0%,#f1e2cf_46%,#ead7c2_100%)] pb-12 text-[#21180f]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="aura absolute -left-44 -top-44 h-[560px] w-[560px] rounded-full bg-[#7f1d3a]/16 blur-3xl" />
          <div className="aura absolute -right-52 top-24 h-[620px] w-[620px] rounded-full bg-[#f0b45b]/28 blur-3xl" style={{ animationDelay: '1.4s' }} />
          <div className="absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full bg-[#4c1d95]/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'linear-gradient(rgba(70,45,25,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(70,45,25,.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
        </div>

        <header className="laqta-shell relative z-20 flex items-center justify-between py-5 sm:py-6">
          <a href="/" className="text-2xl font-black">لقطة</a>
          <a href="/create" className="rounded-full bg-white/70 px-5 py-3 text-sm font-black text-[#2b1b12] shadow-[0_14px_40px_rgba(70,45,25,.12)] backdrop-blur-xl transition hover:-translate-y-0.5">جرّبها الآن</a>
        </header>

        <section className="laqta-shell relative z-10 grid items-center gap-5 pt-2 sm:pt-8 lg:grid-cols-[.88fr_1.12fr] lg:gap-12">
          <div className="pop-in space-y-5 text-center lg:text-right">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#7f1d3a]/15 bg-white/65 px-4 py-2 text-sm font-black text-[#6d4a32] shadow-sm backdrop-blur-xl lg:mx-0">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#7f1d3a] to-[#f0b45b] text-xs text-white">✦</span>
              تجربة مجانية لأصحاب المنتجات والخدمات
            </div>

            <div className="space-y-4">
              <h1 className="mx-auto max-w-[760px] text-[2.75rem] font-black leading-[1.06] sm:text-7xl lg:mx-0">
                صفحة بيع
                <span className="block bg-gradient-to-l from-[#7f1d3a] via-[#9a5b2f] to-[#2d160c] bg-clip-text text-transparent">
                  تشبه إعلانًا فاخرًا.
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-[1.08rem] leading-9 text-[#72583e] sm:text-2xl lg:mx-0">
                لقطة تصنع لك صفحة مبهرة للمنتج أو الخدمة أو العقار أو العيادة، مع رابط مباشر للواتساب أو الدفع.
              </p>
            </div>

            <div className="flex justify-center gap-3 lg:justify-start">
              <a href="/create" className="grid min-h-14 flex-1 place-items-center rounded-full bg-gradient-to-l from-[#7f1d3a] to-[#6b3d1f] px-5 py-4 text-base font-black text-white shadow-[0_20px_50px_rgba(127,29,58,.22)] transition hover:-translate-y-1 sm:flex-none sm:px-8">اصنع لقطتك الآن</a>
              <a href="#how" className="grid min-h-14 flex-1 place-items-center rounded-full bg-white/72 px-5 py-4 text-base font-black text-[#2d160c] shadow-[0_18px_44px_rgba(70,45,25,.12)] backdrop-blur-xl transition hover:-translate-y-1 sm:flex-none sm:px-8">كيف تعمل؟</a>
            </div>

            <div className="grid grid-cols-4 gap-2 pt-1 sm:max-w-xl lg:max-w-lg">
              {useCases.map((item) => (
                <div key={item} className="rounded-[22px] bg-white/66 px-2 py-3 text-center text-sm font-black text-[#6d4a32] shadow-[0_16px_36px_rgba(70,45,25,.10)] backdrop-blur-xl sm:px-4 sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="stage-perspective relative z-10 h-[530px] overflow-visible sm:h-[660px] lg:h-[720px]">
            <div className="phone-wrap absolute inset-x-0 top-2 mx-auto h-[640px] w-[420px] max-w-full preserve-3d sm:top-5 sm:w-[560px]">
              <div className="ring-a absolute left-1/2 top-[48%] h-[350px] w-[350px] rounded-full border border-[#7f1d3a]/22 sm:h-[480px] sm:w-[480px]" />
              <div className="ring-b absolute left-1/2 top-[48%] h-[460px] w-[460px] rounded-full border border-[#f0b45b]/32 sm:h-[610px] sm:w-[610px]" />

              <div className="phone-stage preserve-3d absolute left-1/2 top-20 z-30 w-[282px] -translate-x-1/2 sm:top-24 sm:w-[335px]">
                <div className="relative aspect-[9/18.4] rounded-[48px] border border-white/25 bg-gradient-to-br from-[#120b10] via-[#2c1420] to-[#120b10] p-3 shadow-[0_54px_120px_rgba(48,19,31,.45)]">
                  <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/45" />
                  <div className="shine relative h-full overflow-hidden rounded-[38px] bg-[#fff9ef] shadow-[inset_0_0_35px_rgba(0,0,0,.06)]">
                    <div className="relative h-[37%] overflow-hidden bg-[radial-gradient(circle_at_25%_15%,#fff0d1_0,#e5a94f_34%,#8a2946_74%,#32111f_100%)] p-5 text-white">
                      <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-white/24 blur-2xl" />
                      <div className="relative flex items-center justify-between text-xs font-black">
                        <span>لقطة جاهزة</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">Live</span>
                      </div>
                      <div className="relative mt-7 grid place-items-center">
                        <div className="grid h-24 w-24 place-items-center rounded-[32px] bg-white/18 text-5xl shadow-2xl backdrop-blur-md">🛍️</div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="build-1 opacity-0">
                        <p className="text-xs font-black text-[#7f1d3a]">عرض اليوم</p>
                        <h3 className="text-lg font-black text-[#21180f]">ساعة ذكية فاخرة</h3>
                        <p className="mt-1 text-xs leading-5 text-[#7d6b57]">مقاومة للماء، بطارية طويلة، ومتابعة صحية يومية.</p>
                      </div>

                      <div className="build-2 grid grid-cols-3 gap-2 opacity-0">
                        <div className="rounded-2xl bg-[#f7e9d2] p-2 text-center text-[10px] font-black text-[#7a4a24]">ضمان</div>
                        <div className="rounded-2xl bg-[#f7e9d2] p-2 text-center text-[10px] font-black text-[#7a4a24]">توصيل</div>
                        <div className="rounded-2xl bg-[#f7e9d2] p-2 text-center text-[10px] font-black text-[#7a4a24]">دعم</div>
                      </div>

                      <div className="build-3 flex items-end gap-2 opacity-0">
                        <strong className="text-2xl text-[#21180f]">199 ر.س</strong>
                        <span className="pb-1 text-xs text-[#9a8977] line-through">350 ر.س</span>
                      </div>

                      <div className="build-4 space-y-2 pt-2 opacity-0">
                        <div className="grid h-10 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white shadow-lg shadow-green-900/10">واتساب مباشر</div>
                        <div className="grid h-10 place-items-center rounded-2xl bg-gradient-to-l from-[#7f1d3a] to-[#3c1f12] text-sm font-black text-white shadow-lg shadow-[#7f1d3a]/20">رابط الدفع</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass float-soft absolute right-2 top-8 z-40 w-44 rounded-[28px] p-4 shadow-[0_28px_70px_rgba(48,19,31,.16)] sm:right-16 sm:top-16" style={{ transform: 'rotateY(16deg) rotateX(5deg) translateZ(85px)' }}>
                <p className="mb-2 text-xs font-black text-[#7f1d3a]">مميزات المنتج</p>
                <div className="space-y-1.5 text-sm font-bold text-[#5f4b36]"><p>✓ توصيل سريع</p><p>✓ ضمان واضح</p><p>✓ عرض محدود</p></div>
              </div>

              <div className="glass float-slow absolute left-2 top-28 z-40 w-44 rounded-[28px] p-4 shadow-[0_28px_70px_rgba(47,143,85,.16)] sm:left-10 sm:top-40" style={{ transform: 'rotateY(-17deg) rotateX(5deg) translateZ(70px)' }}>
                <p className="mb-2 text-xs font-black text-[#2f8f55]">زر واتساب</p>
                <div className="grid h-11 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white">تواصل مباشر</div>
              </div>

              <div className="glass float-soft absolute left-8 top-0 z-20 w-40 rounded-[28px] p-4 shadow-[0_28px_70px_rgba(127,29,58,.13)] sm:left-28" style={{ animationDelay: '.8s' }}>
                <p className="mb-2 text-xs font-black text-[#7f1d3a]">رابط جاهز</p>
                <div className="truncate rounded-2xl bg-white/65 px-3 py-3 text-xs font-black text-[#6d5943]">laqta.app/l/offer</div>
              </div>

              <div className="glass float-slow absolute bottom-20 right-3 z-20 w-44 rounded-[28px] p-4 shadow-[0_28px_70px_rgba(199,164,106,.18)] sm:right-28" style={{ animationDelay: '1.1s' }}>
                <p className="mb-3 text-xs font-black text-[#8b5e34]">صورة المنتج</p>
                <div className="grid h-24 place-items-center rounded-[24px] bg-[radial-gradient(circle_at_30%_20%,#fff_0,#f3d39a_38%,#8a2946_100%)] text-5xl">📸</div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="laqta-shell relative z-10 py-10 sm:py-14">
          <div className="mb-7 text-center lg:text-right">
            <p className="mb-3 text-sm font-black text-[#7f1d3a]">آلية العمل</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">من الفكرة إلى رابط جاهز.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([num, title, text]) => (
              <div key={num} className="rounded-[36px] bg-white/70 p-7 shadow-[0_22px_70px_rgba(70,45,25,.13)] backdrop-blur-xl transition duration-300 hover:-translate-y-2">
                <span className="mb-7 inline-grid h-14 w-14 place-items-center rounded-[20px] bg-gradient-to-br from-[#7f1d3a] to-[#3c1f12] font-black text-white">{num}</span>
                <h3 className="mb-3 text-2xl font-black">{title}</h3>
                <p className="text-lg leading-8 text-[#72583e]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="laqta-shell relative z-10 py-8">
          <div className="grid gap-6 overflow-hidden rounded-[38px] bg-[#21180f] p-8 text-white shadow-[0_28px_90px_rgba(33,24,15,.26)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black text-[#f0b45b]">إطلاق تجريبي</p>
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">جرّبها الآن وخلّنا نسمع رأيك.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-white/70">التجربة مخصصة لقياس الاحتياج الحقيقي لأصحاب المتاجر الصغيرة، البراندات، العقار، العيادات، والخدمات.</p>
            </div>
            <a href="/create" className="grid h-14 place-items-center rounded-full bg-white px-8 text-base font-black text-[#21180f]">ابدأ التجربة</a>
          </div>
        </section>
      </main>
    </>
  );
}
