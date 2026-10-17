import { Sparkles, Leaf } from "lucide-react"
import { SUPERFOODS } from "../../data/purobiteData"

export default function SuperfoodsGrid() {
  return (
    <section id="superfoods" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-amber-400" />
            <span>The 8 Core Ingredients</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
            Nothing Added. <span className="text-amber-300">Nothing Hidden.</span>
          </h2>
          <p className="mt-2 text-stone-400 text-xs sm:text-sm leading-relaxed">
            Every bite of PuroBite Banana Chew is rolled with whole, honest superfoods you can recognize immediately.
          </p>
        </div>

        {/* 8 Superfoods Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {SUPERFOODS.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-amber-400/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-mono font-bold text-amber-300/80">
                    0{index + 1}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400/50 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white font-serif mb-1 group-hover:text-amber-200 transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] sm:text-[11px] text-amber-400 font-medium block mb-2">
                  {item.subtitle}
                </span>

                <p className="text-[11px] text-stone-300 leading-relaxed font-light">
                  {item.benefit}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/5">
                <span className="inline-block text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
