import { useState } from "react"
import { Sparkles, Award, Check } from "lucide-react"
import { SUPERFOODS } from "../../data/purobiteData"

export default function SuperfoodsGrid() {
  const [selectedId, setSelectedId] = useState<string>(SUPERFOODS[0].id)

  const selectedSuperfood = SUPERFOODS.find((s) => s.id === selectedId) || SUPERFOODS[0]

  return (
    <section id="superfoods" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pure Botanical Synergy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            8 Powerful Superfoods. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Zero Synthetic Fillers.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Every bite of PuroBite Banana Chew is an intentional harmony of natural potassium, whole nuts, and nutrient-dense seeds. Nothing stripped away, nothing artificial added.
          </p>
        </div>

        {/* Selected Superfood Spotlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-stone-900/80 to-amber-950/60 border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-500/40">
                  {selectedSuperfood.highlight}
                </span>
                <span className="text-xs text-stone-400">• Spotlit Ingredient</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {selectedSuperfood.name}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {selectedSuperfood.benefits}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedSuperfood.nutrients.map((nutr) => (
                  <span
                    key={nutr}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-300 font-medium"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    {nutr}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 flex items-center justify-center border border-white/15 mb-3 text-amber-300">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-stone-200 font-bold text-sm">Artisanal Quality Standard</span>
              <span className="text-stone-400 text-xs mt-1">Slow processed to preserve living enzymes and micronutrients</span>
            </div>
          </div>
        </div>

        {/* 8 Superfoods Glassmorphic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUPERFOODS.map((item, index) => {
            const isSelected = item.id === selectedId
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`relative rounded-3xl p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? "bg-gradient-to-b from-emerald-950/80 to-amber-950/60 border-amber-400/60 ring-2 ring-amber-400/30 shadow-[0_15px_35px_rgba(245,158,11,0.2)] -translate-y-1.5"
                    : "glass-panel hover:border-emerald-500/40 hover:-translate-y-1"
                }`}
              >
                {/* Number & Highlight Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-stone-300">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-300/90 tracking-wide">
                    {item.subtitle}
                  </span>
                </div>

                {/* Name */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                  {item.name}
                </h4>

                {/* Benefits snippet */}
                <p className="text-xs text-stone-300 leading-relaxed mb-4 line-clamp-3">
                  {item.benefits}
                </p>

                {/* Micro Nutrients Tags */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.nutrients.map((n) => (
                    <span
                      key={n}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-stone-900/60 border border-white/5 text-stone-300 font-medium"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
