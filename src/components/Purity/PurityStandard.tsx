import { useState } from "react"
import { Sparkles, ShieldCheck, Check } from "lucide-react"
import { PUROBITE_IMAGES, SUPERFOODS } from "../../data/purobiteData"

interface PurityPillar {
  id: string
  title: string
  tabLabel: string
  headline: string
  story: string
  image: string
  badge: string
  metrics: { label: string; value: string; sub?: string }[]
  highlights: string[]
}

const PILLARS: PurityPillar[] = [
  {
    id: "sugar",
    title: "Zero Added Cane Sugar",
    tabLabel: "0g Added Sugar",
    headline: "100% Natural Fruit Sweetness. Never Cane Sugar.",
    story:
      "We slow-dehydrate sun-ripened Cavendish bananas under gentle, low-temperature airflow. This naturally concentrates fruit fructose, releasing intense natural fruit sweetness and chewy texture without a single grain of cane sugar, brown sugar, or corn syrups.",
    image: PUROBITE_IMAGES.hero,
    badge: "100% Natural Fruit Fructose",
    metrics: [
      { label: "Added Cane Sugar", value: "0.0 g", sub: "Lab Verified" },
      { label: "Natural Potassium", value: "480 mg", sub: "Per 100g" },
      { label: "Sweetness Source", value: "Ripe Bananas", sub: "Slow Dehydrated" },
    ],
    highlights: [
      "No blood sugar spikes from refined sucrose",
      "Rich in natural potassium and essential electrolytes",
      "Pure fruit fructose delivers steady, crash-free fuel",
    ],
  },
  {
    id: "superfoods",
    title: "8 Whole Superfoods",
    tabLabel: "8 Superfoods",
    headline: "Whole Nuts, Seeds & Superfoods You Can See & Taste.",
    story:
      "Every batch is hand-folded with 8 whole, recognizable superfoods: Slow-Dehydrated Bananas, California Whole Almonds, Creamy Cashews, Roasted Pumpkin Seeds, Toasted White Sesame, Heritage Black Sesame, Golden Sunflower Seeds, and Prebiotic Chia & Melon Seeds. No powders, no fillers.",
    image: PUROBITE_IMAGES.flatlay,
    badge: "Whole-Food Matrix",
    metrics: [
      { label: "Superfoods", value: "8 Real", sub: "Whole Nuts & Seeds" },
      { label: "Palm Oil", value: "0%", sub: "Pure Nut Fats" },
      { label: "Preservatives", value: "Zero", sub: "Clean Label" },
    ],
    highlights: [
      "California Almonds provide natural Vitamin E and heart-healthy fats",
      "Cashews and Pumpkin Seeds supply bioavailable zinc & magnesium",
      "Toasted White & Black Sesame supply bone-nourishing plant calcium",
    ],
  },
  {
    id: "nutrition",
    title: "Clean Nutrition Profile",
    tabLabel: "Nutrition Facts",
    headline: "385 kcal of Pure, Unadulterated Plant Fuel.",
    story:
      "Formulated for athletes, busy professionals, and mindful snackers. PuroBite delivers 8.2g of clean bioavailable plant protein, 6.8g of gut-nourishing prebiotic fiber, and zero trans fats. Certified vegetarian, non-GMO, and palm-oil free.",
    image: PUROBITE_IMAGES.infographic,
    badge: "Official Packaging Verification",
    metrics: [
      { label: "Energy", value: "385 kcal", sub: "Per 100g" },
      { label: "Plant Protein", value: "8.2 g", sub: "Whole Nuts & Seeds" },
      { label: "Prebiotic Fiber", value: "6.8 g", sub: "Gut Friendly" },
    ],
    highlights: [
      "Prebiotic banana fiber nourishes healthy gut microbiome",
      "13.6g of healthy monounsaturated & polyunsaturated fats",
      "Lab-tested clean label with 100% nutritional transparency",
    ],
  },
  {
    id: "craft",
    title: "Handcrafted in Kolkata",
    tabLabel: "Artisanal Craft",
    headline: "Small-Batch Freshness. Never Mass-Produced.",
    story:
      "Unlike factory bars sitting in warehouse pallets for months, PuroBite is prepared fresh upon order in our dedicated Kolkata kitchen. Sealed immediately in recyclable kraft tubs with airtight aroma-fresh barriers to ensure 6 months of peak crunch and fruit chewiness.",
    image: PUROBITE_IMAGES.front,
    badge: "Kolkata Kitchen Origin",
    metrics: [
      { label: "Batch Size", value: "Small-Batch", sub: "Handcrafted" },
      { label: "Shelf Life", value: "6 Months", sub: "Airtight Seal" },
      { label: "Packaging", value: "Kraft Tub", sub: "Recyclable" },
    ],
    highlights: [
      "Freshly batch-crafted upon order confirmation",
      "Recyclable kraft tubs prevent oxidation and moisture ingress",
      "Dispatched directly from Kolkata across India",
    ],
  },
]

export default function PurityStandard() {
  const [activeTab, setActiveTab] = useState("sugar")
  const currentPillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0]

  return (
    <section id="purity" className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Purity Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Nothing Artificial. <br />
            <span className="text-[#b47919] italic font-serif">Nothing Hidden.</span>
          </h2>

          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg font-light">
            Explore the four cornerstones that define PuroBite: honest whole food ingredients, zero cane sugar, and artisanal small-batch freshness.
          </p>
        </div>

        {/* 1. Tab Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none px-1">
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-press ${
                  isActive
                    ? "bg-[#193322] text-[#f7f3ea] shadow-xs"
                    : "bg-white hover:bg-stone-100 text-stone-700 border border-[#e8e3d8]"
                }`}
              >
                {pillar.tabLabel}
              </button>
            )
          })}
        </div>

        {/* 2. Active Pillar Showcase Card */}
        <div className="rounded-2xl bg-white border border-[#e8e3d8] p-6 sm:p-10 shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-stone-200 text-[11px] font-semibold text-stone-800 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#b47919]" />
                  <span>{currentPillar.badge}</span>
                </div>
              </div>
            </div>

            {/* Narrative & Metrics */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#b47919] font-mono font-bold block mb-1">
                  {currentPillar.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-luxury leading-snug">
                  {currentPillar.headline}
                </h3>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                {currentPillar.story}
              </p>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {currentPillar.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] text-center">
                    <span className="text-stone-900 font-bold text-base sm:text-xl block font-serif-luxury">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-[#b47919] font-medium block">
                      {metric.label}
                    </span>
                    {metric.sub && (
                      <span className="text-[10px] text-stone-500 font-light block mt-0.5">
                        {metric.sub}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                {currentPillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. The 8 Whole Superfoods Grid */}
        <div id="superfoods" className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#b47919] font-mono font-bold block mb-1">
              Ingredient Transparency
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury">
              The 8 Whole Superfoods Inside
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
              Every single ingredient is whole, natural, and recognizable. Zero powders, zero fillers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUPERFOODS.map((food) => (
              <div
                key={food.id}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#e8e3d8] hover:border-[#b47919] transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#b47919]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {food.highlight}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 font-serif-luxury">
                    {food.name}
                  </h4>
                  <span className="text-[11px] text-[#b47919] font-medium block mt-0.5">
                    {food.subtitle}
                  </span>
                  <p className="text-xs text-stone-600 mt-2 font-light leading-relaxed">
                    {food.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
