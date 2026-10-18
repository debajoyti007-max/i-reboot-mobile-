import { useState } from "react"
import { Sparkles, ShieldCheck } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

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
    tabLabel: "🍌 0g Added Sugar",
    headline: "100% Natural Fruit Sweetness. Never Cane Sugar.",
    story:
      "We slow-dehydrate sun-ripened bananas under gentle, low-temperature airflow. This naturally concentrates fruit fructose, releasing intense natural fruit sweetness and chewy texture without a single grain of cane sugar, brown sugar, or corn syrups.",
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
    tabLabel: "🌱 8 Superfoods",
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
    tabLabel: "⚖️ Nutrition Facts",
    headline: "385 kcal of Pure, Unadulterated Plant Fuel.",
    story:
      "Formulated for athletes, busy professionals, and mindful snackers. PuroBite delivers 8.2g of clean bioavailable plant protein, 6.8g of gut-nourishing prebiotic fiber, and zero trans fats. Certified vegan, gluten-free, and palm-oil free.",
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
    tabLabel: "🏺 Artisanal Craft",
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
    <section id="purity" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Purity Standard</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            Nothing Artificial. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              Nothing Hidden.
            </span>
          </h2>

          <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg font-light">
            Explore the four cornerstones that make PuroBite Banana Chew Kolkata's most distinguished artisanal snack.
          </p>
        </div>

        {/* 1. Interactive Tab Strip (Mobile-first horizontal scroll) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none px-1">
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer touch-press ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 shadow-[0_4px_20px_rgba(229,193,121,0.35)] scale-105"
                    : "bg-white/[0.03] hover:bg-white/[0.07] text-stone-300 border border-white/10"
                }`}
              >
                <span>{pillar.tabLabel}</span>
              </button>
            )
          })}
        </div>

        {/* 2. Main Luxury Editorial Showcase Card */}
        <div className="rounded-3xl p-6 sm:p-10 glass-panel-gold">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-stone-950 border border-white/10 shadow-2xl">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-stone-950/85 border border-amber-400/40 text-[11px] font-bold text-amber-300 backdrop-blur-xl shadow-lg">
                  {currentPillar.badge}
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div>
                <span className="text-[11px] font-display-brand uppercase tracking-[0.25em] text-amber-300 font-bold block mb-1.5">
                  {currentPillar.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury leading-snug">
                  {currentPillar.headline}
                </h3>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                {currentPillar.story}
              </p>

              {/* 3 Real Lab & Sourcing Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {currentPillar.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-2xl glass-panel-luxury text-center"
                  >
                    <span className="text-amber-300 font-bold text-base sm:text-lg block font-serif-luxury">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-stone-300 block font-medium mt-0.5">
                      {m.label}
                    </span>
                    {m.sub && (
                      <span className="text-[9px] text-stone-400 block mt-0.5 font-mono">
                        {m.sub}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Verified Science Highlights */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                {currentPillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-light">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
