import { useState } from "react"
import { Sparkles, ShieldCheck, Check } from "lucide-react"
import { PUROBITE_IMAGES, REAL_INGREDIENTS } from "../../data/purobiteData"

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
      "We slow-dehydrate sun-ripened Cavendish bananas at gentle low temperatures. This evaporates water and naturally concentrates the fruit's inherent fructose, creating a rich chewy texture with 0.0g of added cane sugar, brown sugar, or corn syrups.",
    image: PUROBITE_IMAGES.hero,
    badge: "100% Natural Fruit Sweetness",
    metrics: [
      { label: "Added Cane Sugar", value: "0.0 g", sub: "Packaging Facts" },
      { label: "Natural Potassium", value: "480 mg", sub: "Per 100g" },
      { label: "Sweetness Source", value: "Ripe Bananas", sub: "Slow Dehydrated" },
    ],
    highlights: [
      "No refined sucrose or corn syrups",
      "Rich in natural potassium from ripe bananas",
      "Pure fruit fructose delivers steady, natural energy",
    ],
  },
  {
    id: "ingredients",
    title: "Whole Nuts & Seeds",
    tabLabel: "Whole Ingredients",
    headline: "Whole California Almonds, Cashews & Roasted Seeds.",
    story:
      "Every batch is prepared with whole, recognizable ingredients you can see and crunch: slow-dehydrated bananas, California whole almonds, whole cashews, roasted pumpkin seeds, and toasted sesame seeds. No powders, no palm oil, and no artificial fillers.",
    image: PUROBITE_IMAGES.infographic,
    badge: "Whole Food Ingredients",
    metrics: [
      { label: "Ingredients", value: "100% Real", sub: "Nuts & Seeds" },
      { label: "Palm Oil", value: "0%", sub: "Pure Nut Fats" },
      { label: "Preservatives", value: "Zero", sub: "Clean Label" },
    ],
    highlights: [
      "Whole California almonds provide Vitamin E and heart-healthy fats",
      "Creamy cashews and pumpkin seeds supply bioavailable zinc & protein",
      "Toasted sesame seeds provide traditional aroma and dietary calcium",
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition Facts",
    tabLabel: "Nutrition Facts",
    headline: "385 kcal of Whole-Food Plant Nutrition.",
    story:
      "Honest nutrition for daily vitality, desk energy, or pre-workout fuel. PuroBite delivers 8.2g of plant protein from whole nuts, 6.8g of dietary fiber from ripe bananas, and zero trans fats. Certified 100% vegetarian.",
    image: PUROBITE_IMAGES.flatlay,
    badge: "Nutrition Transparency",
    metrics: [
      { label: "Energy", value: "385 kcal", sub: "Per 100g" },
      { label: "Plant Protein", value: "8.2 g", sub: "Nuts & Seeds" },
      { label: "Dietary Fiber", value: "6.8 g", sub: "Ripe Bananas" },
    ],
    highlights: [
      "Dietary fiber from bananas supports smooth digestion",
      "13.6g of healthy unsaturated fats from almonds & cashews",
      "Zero trans fats and zero hydrogenated vegetable oils",
    ],
  },
  {
    id: "craft",
    title: "Handcrafted in Kolkata",
    tabLabel: "Kolkata Craft",
    headline: "Small-Batch Freshness. Never Mass-Produced.",
    story:
      "PuroBite is prepared fresh upon order confirmation in our Kolkata kitchen. Sealed immediately in recyclable kraft packaging with an airtight barrier to ensure 6 months of peak crunch and fruit chewiness.",
    image: PUROBITE_IMAGES.front,
    badge: "Kolkata Kitchen Origin",
    metrics: [
      { label: "Batch Size", value: "Small-Batch", sub: "Handcrafted" },
      { label: "Shelf Life", value: "6 Months", sub: "Airtight Seal" },
      { label: "Packaging", value: "Kraft Tub", sub: "Recyclable" },
    ],
    highlights: [
      "Freshly batch-crafted upon order confirmation",
      "Airtight recyclable kraft packaging preserves aroma and crunch",
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
            Genuine ingredients, zero added cane sugar, and honest small-batch handcrafting from Kolkata.
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

        {/* 3. The Real Ingredients Grid (Direct from packaging infographic) */}
        <div id="superfoods" className="pt-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#b47919] font-mono font-bold block mb-1">
              What's Inside Our Banana Chew
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury">
              Natural Whole Ingredients
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
              Verified directly from our official packaging. Whole nuts and seeds you can recognize and taste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {REAL_INGREDIENTS.map((food) => (
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
