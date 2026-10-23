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
    parameter: "Fats & Cooking Oils",
    commercial: "Hydrogenated Palm Oil & Trans Fats",
    purobite: "0% Palm Oil",
    purobiteHighlight: "Whole Almond & Cashew Healthy Fats",
  },
  {
    parameter: "Ingredients Inside",
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
    <section id="benchmark" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Purity Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Commercial Snack Bar vs. <br />
            <span className="text-[#b47919] italic font-serif">PuroBite™ Handcrafted</span>
          </h2>
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-light">
            We don’t cut corners with palm oil, powders, or cane syrups. Here is an honest, side-by-side comparison against mass-market snack bars.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl bg-white border border-[#e8e3d8] p-4 sm:p-6 shadow-xs overflow-hidden">
          {/* Header row on desktop */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 pb-3.5 border-b border-stone-200 text-xs font-bold uppercase tracking-wider font-mono text-stone-500">
            <div className="col-span-3">Metric</div>
            <div className="col-span-4 text-rose-700 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>Mass-Market Snack Bars</span>
            </div>
            <div className="col-span-5 text-[#193322] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#b47919]" />
              <span>PuroBite™ Artisanal Purity</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-100">
            {BENCHMARK_DATA.map((row, idx) => (
              <div
                key={idx}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-start sm:items-center hover:bg-stone-50/60 transition-colors rounded-lg px-2"
              >
                {/* Metric Title */}
                <div className="md:col-span-3">
                  <span className="text-sm font-bold text-stone-900 font-serif-luxury block">
                    {row.parameter}
                  </span>
                </div>

                {/* Commercial Bar Value */}
                <div className="md:col-span-4 flex items-start gap-2.5 p-2.5 sm:p-0 rounded-lg bg-rose-50/70 md:bg-transparent border border-rose-100 md:border-0">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div>
                    <span className="text-xs text-rose-900 font-medium block">
                      {row.commercial}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-0.5 md:hidden">
                      Market Standard
                    </span>
                  </div>
                </div>

                {/* PuroBite Value */}
                <div className="md:col-span-5 flex items-start gap-2.5 p-2.5 sm:p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm text-stone-900 font-bold block font-serif-luxury">
                      {row.purobite}
                    </span>
                    <span className="text-[11px] text-emerald-800 font-medium block mt-0.5">
                      {row.purobiteHighlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Purity Guarantee */}
          <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#eef6f1] text-[#193322] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-bold text-stone-900 font-serif-luxury block">
                  100% Nutritional Honesty
                </span>
                <span className="text-xs text-stone-500 font-light">
                  Batch-tested in Kolkata with zero hidden sugars or hydrogenated oils.
                </span>
              </div>
            </div>

            <a
              href="#shop"
              className="px-5 py-2.5 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs tracking-wide transition-colors whitespace-nowrap shadow-xs"
            >
              Order Handcrafted Pack
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
