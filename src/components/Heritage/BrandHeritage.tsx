import { Sparkles, Award, Shield, Users, Clock, Quote, CheckCircle2 } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export default function BrandHeritage() {
  const milestones = [
    {
      year: "2021",
      title: "The Clean Food Epiphany",
      description: "Founded in Kolkata out of frustration with so-called 'health' snacks loaded with palm oil, high-fructose corn syrup, and synthetic preservatives.",
      color: "amber",
    },
    {
      year: "2023",
      title: "The 8-Superfood Formula",
      description: "After extensive kitchen trials, perfected the slow-dehydration curve that locks natural potassium and chewy texture without any cane sugar.",
      color: "emerald",
    },
    {
      year: "2025",
      title: "Kolkata Kitchen Launch",
      description: "Established our artisanal small-batch kitchen in Kolkata, hand-rolling and hand-packing each recyclable kraft tub under rigorous hygiene standards.",
      color: "amber",
    },
    {
      year: "2026",
      title: "Conscious Snacking Pan-India",
      description: "Serving athletes, marathoners, busy founders, and mindful families across India with verified 4.9-star ratings and prompt express courier delivery.",
      color: "emerald",
    },
  ]

  const values = [
    {
      icon: Sparkles,
      title: "Purity",
      description: "100% whole fruits, nuts, and seeds. Zero added cane sugar, jaggery, or chemicals.",
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Slow-dehydrated patiently over hours, never deep-fried or baked at nutrient-destroying heat.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Full nutritional transparency. Complete lab tests and clean-label guarantees.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Every tub is crafted with devotion, treating every customer like our own family.",
    },
  ]

  return (
    <section id="heritage" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>KOLKATA ARTISANAL HERITAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            The Heart Behind <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              PuroBite™ Foods
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            From our kitchen in Kolkata to dining tables and gym bags across India, we bring you honest, handmade nutrition crafted with pride.
          </p>
        </div>

        {/* Milestone Timeline Bar */}
        <div className="mb-16 glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-8 text-amber-400 font-bold text-lg font-serif">
            <Sparkles className="w-5 h-5" />
            <span>Our Journey of Purpose</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={m.year} className="flex flex-col items-center text-center relative group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg mb-3 shadow-lg transition-transform group-hover:scale-110 ${
                    m.color === "amber"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  }`}
                >
                  {m.year}
                </div>
                <h4 className="font-bold text-white text-sm mb-1 font-serif group-hover:text-amber-300 transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed max-w-xs">{m.description}</p>
                {idx < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-7 -right-3 w-6 h-0.5 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Founder & Kitchen Dedication Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Founder Quote Card */}
          <div className="lg:col-span-7 glass-panel-emerald rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold mb-4">
                <Quote className="w-5 h-5 text-amber-400" />
                <span>Founders' Mission Statement</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-serif text-white leading-relaxed mb-6 italic">
                "We built PuroBite because we were tired of buying snacks that claimed to be healthy on the front, but hid sugar and palm oil in the fine print on the back. If an ingredient didn't grow in an orchard or farm, it will never enter our kitchen."
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-bold text-white text-base block font-serif">
                  The PuroBite Culinary Team
                </span>
                <span className="text-xs text-stone-400">
                  Kolkata, West Bengal • Artisanal Health Foods
                </span>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Small Batch Certified</span>
              </div>
            </div>
          </div>

          {/* Kitchen Visual */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={PUROBITE_IMAGES.table}
                alt="PuroBite handcrafted preparation"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-stone-200">
                <strong className="text-amber-400">Clean Label Kitchen:</strong> Every single batch hand-mixed, rolled, and packed in Kolkata.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-stone-900/60 to-amber-950/40 border border-white/10 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white font-serif mb-2">Our 4 Core Values</h3>
            <p className="text-xs text-stone-400">These non-negotiables guide every tub we craft.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const IconComp = v.icon
              return (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 transition-all text-center flex flex-col items-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center text-amber-300 mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base font-serif mb-1 group-hover:text-amber-300 transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
