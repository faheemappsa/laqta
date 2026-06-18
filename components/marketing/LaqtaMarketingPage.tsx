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
    <>
      <style>{`
        @keyframes laqta-float-a {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(1.2deg); }
        }
        @keyframes laqta-float-b {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          35% { transform: translateY(-22px) rotate(-1deg); }
          70% { transform: translateY(-8px) rotate(0.8deg); }
        }
        @keyframes laqta-float-c {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes laqta-device {
          0%, 100% { transform: rotateY(-10deg) rotateX(5deg) translateY(0); }
          50% { transform: rotateY(-5deg) rotateX(2deg) translateY(-10px); }
        }
        @keyframes laqta-shine {
          0% { transform: translateX(120%) rotate(18deg); opacity: 0; }
          35% { opacity: .7; }
          100% { transform: translateX(-160%) rotate(18deg); opacity: 0; }
        }
        @keyframes laqta-pulse {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: .95; transform: scale(1.06); }
        }
        .laqta-perspective { perspective: 1200px; }
        .laqta-preserve { transform-style: preserve-3d; }
        .laqta-float-a { animation: laqta-float-a 7s ease-in-out infinite; }
        .laqta-float-b { animation: laqta-float-b 8.5s ease-in-out infinite; }
        .laqta-float-c { animation: laqta-float-c 6s ease-in-out infinite; }
        .laqta-device { animation: laqta-device 9s ease-in-out infinite; }
        .laqta-shine::after {
          content: '';
          position: absolute;
          inset: -20% auto -20% 25%;
          width: 70px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.46), transparent);
          animation: laqta-shine 4.8s ease-in-out infinite;
        }
        .laqta-pulse { animation: laqta-pulse 4s ease-in-out infinite; }
      `}</style>

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
                <div key={item} className="glass rounded-2xl px-3 py-4 text-center text-sm font-bold text-[#5f4b36] transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="laqta-perspective relative min-h-[570px] fade-up">
            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7a46a]/20 blur-3xl laqta-pulse" />
            <div className="absolute left-12 top-10 h-28 w-28 rounded-[38px] bg-[#8b5e34]/12 blur-2xl" />
            <div className="absolute bottom-14 right-10 h-32 w-32 rounded-full bg-[#3f2b18]/10 blur-2xl" />

            <div className="laqta-preserve absolute inset-0 grid place-items-center">
              <div className="laqta-device laqta-preserve relative z-20 w-[265px] sm:w-[305px]">
                <div className="relative aspect-[9/18.5] rounded-[44px] border border-white/40 bg-[#24180f] p-3 shadow-[0_42px_95px_rgba(63,43,24,.34)]">
                  <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-[#1b120b]" />
                  <div className="laqta-shine relative h-full overflow-hidden rounded-[34px] bg-[#fff8ee]">
                    <div className="relative h-[36%] overflow-hidden bg-[radial-gradient(circle_at_28%_18%,#fff7e8_0,#dfbd86_36%,#8b5e34_100%)] p-5 text-white">
                      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                      <div className="relative flex items-center justify-between text-xs font-bold">
                        <span>لقطة جاهزة</span>
                        <span className="rounded-full bg-white/20 px-3 py-1">نشر فوري</span>
                      </div>
                      <div className="relative mt-8 grid place-items-center text-5xl">🛍️</div>
                    </div>

                    <div className="space-y-3 p-4">
                      <div>
                        <p className="text-xs font-bold text-[#8b5e34]">عرض اليوم</p>
                        <h3 className="text-lg font-black text-[#21180f]">ساعة ذكية فاخرة</h3>
                        <p className="mt-1 text-xs leading-5 text-[#7d6b57]">مقاومة للماء، بطارية طويلة، ومتابعة صحية يومية.</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-2xl bg-[#f3e4cf] p-2 text-center text-[10px] font-bold text-[#5c4026]">ضمان</div>
                        <div className="rounded-2xl bg-[#f3e4cf] p-2 text-center text-[10px] font-bold text-[#5c4026]">توصيل</div>
                        <div className="rounded-2xl bg-[#f3e4cf] p-2 text-center text-[10px] font-bold text-[#5c4026]">دعم</div>
                      </div>

                      <div className="flex items-end gap-2">
                        <strong className="text-2xl text-[#21180f]">199 ر.س</strong>
                        <span className="pb-1 text-xs text-[#9a8977] line-through">350 ر.س</span>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="grid h-10 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white shadow-lg shadow-green-900/10">واتساب مباشر</div>
                        <div className="grid h-10 place-items-center rounded-2xl bg-[#3f2b18] text-sm font-black text-white shadow-lg shadow-[#3f2b18]/20">رابط الدفع</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass laqta-float-a absolute right-0 top-12 z-30 w-48 rounded-[28px] p-4 shadow-glow sm:right-8" style={{ transform: 'rotateY(12deg) rotateX(4deg) translateZ(70px)' }}>
                <p className="mb-3 text-xs font-black text-[#8b5e34]">مميزات المنتج</p>
                <div className="space-y-2 text-sm font-bold text-[#5f4b36]">
                  <p>✓ توصيل سريع</p>
                  <p>✓ ضمان واضح</p>
                  <p>✓ عرض محدود</p>
                </div>
              </div>

              <div className="glass laqta-float-b absolute bottom-20 left-0 z-30 w-52 rounded-[28px] p-4 shadow-glow sm:left-6" style={{ transform: 'rotateY(-14deg) rotateX(3deg) translateZ(55px)' }}>
                <p className="mb-3 text-xs font-black text-[#8b5e34]">زر الطلب</p>
                <div className="grid h-11 place-items-center rounded-2xl bg-[#2f8f55] text-sm font-black text-white">واتساب مباشر</div>
              </div>

              <div className="glass laqta-float-c absolute left-8 top-4 z-10 w-44 rounded-[28px] p-4 shadow-glow" style={{ transform: 'rotateY(-8deg) rotateX(5deg) translateZ(35px)' }}>
                <p className="mb-2 text-xs font-black text-[#8b5e34]">رابط جاهز</p>
                <div className="truncate rounded-2xl bg-white/55 px-3 py-3 text-xs font-bold text-[#6d5943]">laqta.app/offer</div>
              </div>

              <div className="glass laqta-float-a absolute bottom-8 right-10 z-10 w-44 rounded-[28px] p-4 shadow-glow" style={{ animationDelay: '1.2s', transform: 'rotateY(8deg) rotateX(-4deg) translateZ(30px)' }}>
                <p className="mb-3 text-xs font-black text-[#8b5e34]">صورة المنتج</p>
                <div className="grid h-24 place-items-center rounded-[22px] bg-[radial-gradient(circle_at_30%_20%,#fff_0,#ecd2aa_40%,#b18350_100%)] text-4xl">📸</div>
              </div>
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
              <div key={num} className="glass rounded-[34px] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow">
                <span className="mb-8 inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#3f2b18] font-black text-white">{num}</span>
                <h3 className="mb-3 text-2xl font-black">{title}</h3>
                <p className="leading-8 text-[#6d5943]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="laqta-shell py-10">
          <div className="glass grid gap-8 overflow-hidden rounded-[42px] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
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
    </>
  );
}
