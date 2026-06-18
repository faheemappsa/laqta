import Link from "next/link";

export default function LaqtaMarketingPage() {
  return (
    <>
      {/* الأنميشن CSS المخصص للبطاقات العائمة والعمق */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(-1deg); }
          66% { transform: translateY(-6px) rotate(0.5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          40% { transform: translateY(-22px) rotate(1.5deg); }
          70% { transform: translateY(-10px) rotate(-0.5deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          45% { transform: translateY(-14px) rotate(0.5deg); }
        }
        @keyframes deviceFloat {
          0%, 100% { transform: translateY(0px) rotateY(-5deg) rotateX(3deg); }
          50% { transform: translateY(-6px) rotateY(-3deg) rotateX(1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 8s ease-in-out infinite; }
        .animate-float4 { animation: float4 5s ease-in-out infinite; }
        .animate-float5 { animation: float5 9s ease-in-out infinite; }
        .animate-device { animation: deviceFloat 10s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .card-shadow-3d {
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1);
        }
        .glass {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.3);
        }
      `}</style>

      <main dir="rtl" className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* ========== HERO ========== */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 md:py-32">
          {/* خلفية أنيقة جداً */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-indigo-200/60 to-purple-200/30 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-200/40 to-blue-200/30 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* النص والعناوين */}
            <div className="text-center lg:text-right animate-fade-up">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-indigo-700 bg-indigo-50 rounded-full border border-indigo-200/60 shadow-sm">
                ⚡ منصة البيع الذكي
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
                صفحة بيع جاهزة
                <br />
                <span className="bg-gradient-to-l from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  في ثوانٍ معدودة
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
                لقطة تحوّل منتجك أو خدمتك إلى صفحة مبيعات احترافية برابط جاهز،
                زر واتساب، عروض، وكل ما تحتاج لتبدأ البيع فوراً.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/create"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  ✨ أنشئ صفحتك الآن
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-indigo-700 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  شاهد الطريقة
                </Link>
              </div>
            </div>

            {/* الموكب الثلاثي الأبعاد */}
            <div className="relative flex items-center justify-center perspective-1000 preserve-3d" style={{ height: "520px" }}>
              {/* بطاقات عائمة حول الجهاز */}
              <div
                className="absolute top-10 right-0 sm:right-5 w-44 p-4 glass rounded-2xl shadow-xl animate-float1 z-20"
                style={{ transform: "rotateY(10deg) rotateX(2deg) translateZ(40px)" }}
              >
                <div className="text-xs font-bold text-slate-500 mb-2">🎯 مميزات المنتج</div>
                <div className="flex flex-col gap-1.5 text-sm text-slate-700">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> توصيل سريع</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> ضمان سنتين</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> دعم فوري</span>
                </div>
              </div>

              <div
                className="absolute bottom-14 left-0 sm:left-2 w-48 p-4 glass rounded-2xl shadow-xl animate-float2 z-20"
                style={{ transform: "rotateY(-12deg) rotateX(1deg) translateZ(30px)" }}
              >
                <div className="text-xs font-bold text-slate-500 mb-2">💬 زر واتساب</div>
                <div className="h-8 w-full bg-green-500/20 rounded-lg flex items-center justify-center gap-1 text-green-700 font-medium text-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  تواصل مباشر
                </div>
              </div>

              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 p-3 glass rounded-2xl shadow-xl animate-float3 z-30"
                style={{ transform: "rotateY(4deg) rotateX(-3deg) translateZ(60px)" }}
              >
                <div className="text-xs font-bold text-slate-500 mb-1">📸 صورة المنتج</div>
                <div className="h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center text-2xl">
                  🛍️
                </div>
              </div>

              <div
                className="absolute bottom-20 -right-6 sm:right-2 w-40 p-3 glass rounded-2xl shadow-xl animate-float4 z-20"
                style={{ transform: "rotateY(-8deg) rotateX(2deg) translateZ(25px)" }}
              >
                <div className="text-xs font-bold text-slate-500 mb-1">💰 زر الدفع</div>
                <div className="h-8 w-full bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold text-sm">
                  ادفع الآن
                </div>
              </div>

              <div
                className="absolute top-32 -left-6 sm:left-0 w-36 p-3 glass rounded-2xl shadow-xl animate-float5 z-10"
                style={{ transform: "rotateY(-6deg) rotateX(4deg) translateZ(15px)" }}
              >
                <div className="text-xs font-bold text-slate-500 mb-1">🔗 رابط جاهز</div>
                <div className="h-8 w-full bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-600 truncate px-2">
                  laqta.app/your-link
                </div>
              </div>

              {/* الجهاز الوهمي */}
              <div
                className="relative animate-device preserve-3d"
                style={{ width: "260px", transform: "rotateY(-4deg) rotateX(4deg) translateZ(0px)" }}
              >
                <div className="relative w-full aspect-[9/19.5] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl card-shadow-3d">
                  {/* الكاميرا الأمامية */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-b-xl z-10" />
                  {/* الشاشة */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
                    {/* محتوى صفحة البيع داخل الجهاز */}
                    <div className="h-1/3 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-2xl">
                      🛒
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2">
                      <h3 className="text-sm font-bold text-slate-800">ساعة ذكية</h3>
                      <p className="text-xs text-slate-500 line-clamp-2">مقاومة للماء، مراقبة نبضات، بطارية ٧ أيام</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs font-bold text-green-600">199 ريال</span>
                        <span className="text-xs text-slate-400 line-through">350 ريال</span>
                      </div>
                      <div className="mt-auto flex flex-col gap-2">
                        <div className="h-8 w-full bg-green-500 rounded-lg flex items-center justify-center text-white text-xs font-bold gap-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..."/></svg>
                          واتساب
                        </div>
                        <div className="h-8 w-full bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          شراء الآن
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* شريحة للأسفل */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </section>

        {/* ========== كيف يعمل ========== */}
        <section id="how" className="py-24 px-4 bg-white/70 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-indigo-700 bg-indigo-50 rounded-full border border-indigo-200/60">
              🧠 البساطة في القمة
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-16">
              ثلاث خطوات بسيطة
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { emoji: "✍️", title: "املأ التفاصيل", desc: "أدخل اسم المنتج، السعر، المميزات وصورة واحدة." },
                { emoji: "⚡", title: "تولّد الصفحة", desc: "لقطة تبني لك صفحة بيع متكاملة في لحظة." },
                { emoji: "🚀", title: "انشر الرابط", desc: "احصل على رابط جاهز وشاركه مع عملائك." },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="group relative glass rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-6">{step.emoji}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              ابدأ بيع منتجك الآن
            </h2>
            <p className="text-lg text-indigo-100 mb-10">
              مجاناً تماماً. لا بطاقة ائتمان. جاهز خلال دقيقة.
            </p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold bg-white text-indigo-700 rounded-2xl shadow-2xl hover:bg-indigo-50 transition-all duration-300"
            >
              🚀 أنشئ صفحتك المجانية
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
