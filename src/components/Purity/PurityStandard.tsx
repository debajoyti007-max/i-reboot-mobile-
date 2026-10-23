import { Sparkles, Check } from "lucide-react"
import { REAL_INGREDIENTS, NUTRITION_FACTS } from "../../data/purobiteData"

export default function PurityStandard() {
  return (
    <section id="ingredients" className="py-14 sm:py-20 bg-white border-t border-b border-[#e8e3d8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full herbal-pill text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>100% Whole Food Ingredients</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury tracking-tight">
            What's Inside Our <span className="text-[#b47919] italic font-serif">Banana Chew</span>
          </h2>

          <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
            Every ingredient is whole, natural, and recognizable. Zero powders, zero palm oil, and zero added cane sugar.
          </p>
        </div>

        {/* 5 Real Ingredients Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {REAL_INGREDIENTS.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex flex-col justify-between shadow-2xs hover:border-[#b47919] transition-colors"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-block mb-2">
                  {item.highlight}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 font-serif-luxury mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nutrition Bar (From official box label) */}
        <div className="rounded-2xl bg-[#faf8f5] p-5 sm:p-6 border border-[#e8e3d8]">
          <div className="text-center mb-4">
            <span className="text-[10px] uppercase tracking-widest text-[#b47919] font-mono font-bold block">
              Nutrition Information
            </span>
            <span className="text-xs text-stone-500 font-light">
              Per 100g serving — tested clean label
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {NUTRITION_FACTS.map((n, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white border border-[#e8e3d8] text-center"
              >
                <span className="text-stone-900 font-bold text-base sm:text-lg block font-serif-luxury">
                  {n.value}
                </span>
                <span className="text-[11px] text-[#b47919] font-medium block">
                  {n.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#e8e3d8] flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600 font-light">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Vegetarian</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Palm Oil</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Preservatives</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Airtight 6-Month Freshness</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
