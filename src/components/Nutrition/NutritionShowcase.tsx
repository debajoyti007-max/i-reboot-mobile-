import { useState } from "react"
import { ShieldCheck, CheckCircle2, XCircle, Scale, Info } from "lucide-react"
import { PUROBITE_IMAGES, NUTRITION_FACTS } from "../../data/purobiteData"

export default function NutritionShowcase() {
  const [activeTab, setActiveTab] = useState<"facts" | "comparison">("facts")

  return (
    <section id="nutrition" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Clean Nutrition Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            What You See Is <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              Exactly What You Eat.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            No proprietary chemical blends, no disguised maltodextrin, no hidden syrups. Every single macro and micro nutrient comes directly from sun-ripened bananas and whole raw superfoods.
          </p>

          {/* Toggle Buttons */}
          <div className="mt-8 flex items-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("facts")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "facts"
                  ? "bg-gradient-to-r from-emerald-600 to-amber-500 text-stone-950 shadow-lg"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              Nutritional Breakdown
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-gradient-to-r from-emerald-600 to-amber-500 text-stone-950 shadow-lg"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              PuroBite vs. Commercial Snacks
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Official Infographic Poster from Packaging */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/30 via-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-stone-950">
              <img
                src={PUROBITE_IMAGES.infographic}
                alt="PuroBite Banana Chew Ingredients Infographic"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 tracking-wide">
                  Official Packaging Diagram
                </span>
                <span className="text-[11px] text-stone-400 font-mono">
                  100% Natural • Handcrafted
                </span>
              </div>
            </div>
          </div>

          {/* Right: Nutrition Facts or Honest Comparison */}
          <div className="lg:col-span-7">
            {activeTab === "facts" ? (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">
                      Nutritional Analysis (Per 100g)
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      Batch test verified • Serving portion recommendation: 35g – 40g
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Lab Tested</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {NUTRITION_FACTS.map((item) => (
                    <div
                      key={item.label}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        item.highlight
                          ? "bg-amber-950/30 border-amber-500/40 shadow-[0_4px_20px_rgba(245,158,11,0.15)]"
                          : "bg-white/[0.03] border-white/10"
                      }`}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs font-semibold text-stone-300">{item.label}</span>
                        <span
                          className={`text-base font-extrabold ${
                            item.highlight ? "text-amber-400" : "text-white"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-400">{item.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Dietary Guarantees */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-xs font-bold text-emerald-300">100% Vegan</span>
                    <span className="text-[10px] text-stone-400">Zero animal products</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-xs font-bold text-amber-300">Gluten Free</span>
                    <span className="text-[10px] text-stone-400">Naturally grain-free</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-xs font-bold text-emerald-300">0% Palm Oil</span>
                    <span className="text-[10px] text-stone-400">Whole nut fats only</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-xs font-bold text-amber-300">High Fiber</span>
                    <span className="text-[10px] text-stone-400">Prebiotic banana fuel</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold text-white font-serif">
                    The Clean Food Standard
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    How PuroBite stacks up against conventional processed snack bars
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-stone-400">
                        <th className="pb-3 font-semibold">Ingredient / Factor</th>
                        <th className="pb-3 font-bold text-amber-400">PuroBite Banana Chew</th>
                        <th className="pb-3 font-medium text-stone-400">Commercial Energy Bars</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 font-medium text-stone-300">Added Cane Sugar / Syrups</td>
                        <td className="py-3 font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>0g (Zero Added Sugar)</span>
                        </td>
                        <td className="py-3 text-red-400/90 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span>18g - 26g High Fructose Corn / Glucose Syrup</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-stone-300">Processing Method</td>
                        <td className="py-3 font-bold text-emerald-400">Slow Natural Dehydration</td>
                        <td className="py-3 text-stone-400">Deep Fried or High Heat Extrusion</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-stone-300">Fats & Oils</td>
                        <td className="py-3 font-bold text-emerald-400">Whole Raw Almonds & Cashews</td>
                        <td className="py-3 text-red-400/90">Refined Palm Oil & Hydrogenated Fats</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-stone-300">Preservatives & Stabilizers</td>
                        <td className="py-3 font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Zero Chemicals • 100% Clean</span>
                        </td>
                        <td className="py-3 text-red-400/90 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span>TBHQ, Potassium Sorbate, BHA</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-stone-300">Texture & Flavor</td>
                        <td className="py-3 font-bold text-amber-300">Natural Chewy Banana & Nut Crunch</td>
                        <td className="py-3 text-stone-400">Artificial Flavorings & Chalky Powders</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-stone-300 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Our pledge is simple: If an ingredient wouldn’t grow in an organic orchard or farm, it will never enter a PuroBite kitchen.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
