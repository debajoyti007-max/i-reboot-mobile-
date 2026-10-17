import { ShieldCheck, Scale } from "lucide-react"
import { PUROBITE_IMAGES, NUTRITION_FACTS } from "../../data/purobiteData"

export default function NutritionShowcase() {
  return (
    <section id="nutrition" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Clean Nutrition Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
            Inside Our <span className="text-amber-300">Banana Chew</span>
          </h2>
          <p className="mt-2 text-stone-400 text-xs sm:text-sm leading-relaxed">
            100% natural fruit fructose from sun-ripened bananas. No white sugar, zero brown sugar, zero jaggery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Official Infographic Poster from Packaging */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-stone-950">
              <img
                src={PUROBITE_IMAGES.infographic}
                alt="PuroBite Banana Chew packaging breakdown"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/90 to-transparent flex items-center justify-between text-xs">
                <span className="font-bold text-amber-300">Official Packaging Infographic</span>
                <span className="text-stone-400 text-[10px]">100% Clean Label</span>
              </div>
            </div>
          </div>

          {/* Verified Nutrition Facts Cards */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Nutritional Facts (Per 100g)
                  </h3>
                  <span className="text-xs text-stone-400">
                    Recommended portion: 35g – 40g
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Lab Verified</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {NUTRITION_FACTS.map((item) => (
                  <div
                    key={item.label}
                    className={`p-3 rounded-2xl border transition-all ${
                      item.highlight
                        ? "bg-amber-950/25 border-amber-400/40"
                        : "bg-white/[0.02] border-white/10"
                    }`}
                  >
                    <span className="text-xs text-stone-300 font-medium block mb-0.5">
                      {item.label}
                    </span>
                    <span
                      className={`text-lg font-black ${
                        item.highlight ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {item.value}
                    </span>
                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* 4 Clean Dietary Badges */}
              <div className="pt-3 border-t border-white/10 grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-amber-300 block text-[11px]">0g Sugar</span>
                  <span className="text-[9px] text-stone-400">Added Cane</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-emerald-400 block text-[11px]">Vegan</span>
                  <span className="text-[9px] text-stone-400">100% Plant</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-amber-300 block text-[11px]">Gluten-Free</span>
                  <span className="text-[9px] text-stone-400">No Wheat</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-emerald-400 block text-[11px]">0% Palm Oil</span>
                  <span className="text-[9px] text-stone-400">Nut Fats Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
