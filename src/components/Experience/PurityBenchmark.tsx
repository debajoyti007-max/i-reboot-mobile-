import { Check, X, ShieldAlert, Sparkles, Award } from "lucide-react"

interface BenchmarkRow {
  parameter: string
  commercial: string
  purobite: string
  purobiteHighlight: string
}

const BENCHMARK_DATA: BenchmarkRow[] = [
  {
    parameter: "Added Cane Sugar",
    commercial: "22g – 28g Refined Sucrose & Glucose Syrup",
    purobite: "0.0g Added Sugar",
    purobiteHighlight: "100% Natural Ripe Fruit Sweetness",
  },
  {
    parameter: "Fats & Oils",
    commercial: "Hydrogenated Palm Oil & Trans Fats",
    purobite: "0% Palm Oil",
    purobiteHighlight: "Whole Almond & Cashew Healthy Fats",
  },
  {
    parameter: "Ingredients Used",
    commercial: "Soy Protein Isolate Powders & Fillers",
    purobite: "8 Whole Superfoods",
    purobiteHighlight: "Recognizable Whole Nuts & Super-Seeds",
  },
  {
    parameter: "Energy Response",
    commercial: "Insulin Spike & 45-Min Sugar Crash",
    purobite: "4–5 Hours Sustained Fuel",
    purobiteHighlight: "Low-Glycemic Natural Stamina & Potassium",
  },
  {
    parameter: "Freshness & Origin",
    commercial: "Mass-produced months ago in automated factories",
    purobite: "Small-Batch Handcrafted",
    purobiteHighlight: "Hand-Prepared in Kolkata & Dispatched Fresh",
  },
  {
    parameter: "Preservatives & Additives",
    commercial: "Synthetic Colors, Flavors & INS 211 Preservatives",
    purobite: "Zero Additives",
    purobiteHighlight: "100% Clean-Label Purity Standard",
  },
]

export default function PurityBenchmark() {
  return (
    <section id="benchmark" className="relative py-20 sm:py-28 overflow-hidden bg-[#050a07] border-t border-amber-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md mb-3.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-widest uppercase text-[10px]">The Purity Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            Commercial Snack Bar vs. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              PuroBite™ Artisanal Purity
            </span>
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            We don’t cut corners with palm oil, powders, or cane syrups. Here is an honest, side-by-side comparison against mass-market snack bars.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="relative rounded-3xl glass-panel-gold p-4 sm:p-6 border border-amber-400/30 shadow-2xl overflow-hidden">
          {/* Header row on desktop */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 pb-4 border-b border-amber-400/20 text-xs font-bold uppercase tracking-widest font-mono text-stone-400">
            <div className="col-span-3 text-stone-300">Metric</div>
            <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Mass-Market Snack Bars</span>
            </div>
            <div className="col-span-5 text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>PuroBite™ Handcrafted</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {BENCHMARK_DATA.map((row, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start sm:items-center hover:bg-white/[0.02] transition-colors rounded-xl px-2"
              >
                {/* Metric Title */}
                <div className="md:col-span-3">
                  <span className="text-sm font-bold text-white font-serif-luxury block">
                    {row.parameter}
                  </span>
                </div>

                {/* Commercial Bar Value */}
                <div className="md:col-span-4 flex items-start gap-2.5 p-2.5 sm:p-0 rounded-xl bg-rose-950/20 md:bg-transparent border border-rose-500/20 md:border-0">
                  <span className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div>
                    <span className="text-xs text-rose-300/90 font-medium block">
                      {row.commercial}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-0.5 md:hidden">
                      Typical Market Standard
                    </span>
                  </div>
                </div>

                {/* PuroBite Value */}
                <div className="md:col-span-5 flex items-start gap-2.5 p-3 rounded-xl bg-amber-400/[0.08] md:bg-amber-400/[0.06] border border-amber-400/25">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(229,193,121,0.5)]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm text-white font-bold block font-serif-luxury">
                      {row.purobite}
                    </span>
                    <span className="text-[11px] text-amber-200/90 font-light block mt-0.5">
                      {row.purobiteHighlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Purity Seal Footer */}
          <div className="mt-6 pt-5 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-white font-serif-luxury block">
                  100% Transparency Guarantee
                </span>
                <span className="text-xs text-stone-400">
                  Every batch tested and certified in Kolkata, India.
                </span>
              </div>
            </div>

            <a
              href="#packs"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-transform"
            >
              Order Handcrafted Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
