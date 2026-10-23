import { useState } from "react"
import { Sparkles, CheckCircle2 } from "lucide-react"

interface SensoryDimension {
  id: string
  title: string
  score: string
  scoreNum: number
  badge: string
  icon: string
  description: string
  culinaryNotes: string[]
  sommelierQuote: string
}

const SENSORY_DIMENSIONS: SensoryDimension[] = [
  {
    id: "chewiness",
    title: "Artisanal Banana Chew",
    score: "9.5 / 10",
    scoreNum: 95,
    badge: "Signature Mouthfeel",
    icon: "🍌",
    description:
      "Unlike dry, powdery factory protein bars or rock-hard granola, PuroBite delivers a lush, velvety, yielding chew reminiscent of handcrafted French nougat or traditional fruit leather.",
    culinaryNotes: [
      "Naturally softened by low-temperature slow dehydration",
      "Locks in fruit moisture without sticky cane syrup residues",
      "Melt-in-mouth finish with natural pectin structure",
    ],
    sommelierQuote:
      "“The chewiness is remarkably supple. It yields gently to each bite, delivering a prolonged release of natural caramel notes.”",
  },
  {
    id: "crunch",
    title: "Roasted Nut Shatter",
    score: "8.8 / 10",
    scoreNum: 88,
    badge: "Textural Contrast",
    icon: "🥜",
    description:
      "Whole California almonds and whole cashews are dry-roasted to a precise golden hue, creating an acoustic snap that contrasts harmoniously against the chewy banana base.",
    culinaryNotes: [
      "Whole roasted California almonds retain their crunchy snap",
      "Buttery cashew halves break with a delicate, creamy crumble",
      "Toasted sesame seeds add microscopic crackle across the palate",
    ],
    sommelierQuote:
      "“A sublime tactile interplay: the satisfying crunch of whole roasted nuts puncturing through dense, luscious banana caramel.”",
  },
  {
    id: "sweetness",
    title: "Natural Sun Caramel",
    score: "8.2 / 10",
    scoreNum: 82,
    badge: "0g Added Cane Sugar",
    icon: "🍯",
    description:
      "Zero refined sucrose or artificial sweeteners. 100% of the sweetness emanates from ripe fruit fructose naturally caramelized during gentle dehydration.",
    culinaryNotes: [
      "Zero sickly-sweet cloying aftertaste of cane sugar",
      "Warm notes of honey, ripe Cavendish banana, and vanilla bean",
      "Cleans cleanly from the palate with zero chemical sweetener lingering",
    ],
    sommelierQuote:
      "“Sophisticated, fruit-forward sweetness. It honors the banana’s authentic soul rather than masking it behind processed sugar.”",
  },
  {
    id: "aroma",
    title: "Toasted Sesame & Warm Nut Aroma",
    score: "9.0 / 10",
    scoreNum: 90,
    badge: "Artisanal Fragrance",
    icon: "🌿",
    description:
      "Opening the airtight kraft tub releases a comforting, aromatic cloud of dry-roasted sesame, nutty almond oils, and warm sun-ripened fruit.",
    culinaryNotes: [
      "Heritage black sesame provides an earthy, smoky undertone",
      "Golden sunflower and pumpkin seeds offer a warm harvest bouquet",
      "No artificial fragrance, vanilla synthetic flavor, or sprays",
    ],
    sommelierQuote:
      "“Aromatics that transport you straight into a boutique kitchen where nuts and seeds are being roasted on heavy cast-iron skillets.”",
  },
  {
    id: "energy",
    title: "Sustained Metabolic Stamina",
    score: "9.9 / 10",
    scoreNum: 99,
    badge: "Zero Sugar Crash",
    icon: "⚡",
    description:
      "Engineered by nature for steady stamina. The combination of slow-burning fruit fructose, dietary fiber, and healthy nut fats prevents insulin spikes.",
    culinaryNotes: [
      "Low-glycemic index delivers 4–5 hours of smooth, continuous stamina",
      "480mg natural potassium per 100g prevents muscle fatigue and cramps",
      "6.8g prebiotic fiber supports microbiome digestion without bloating",
    ],
    sommelierQuote:
      "“Clean, sustained physical and cognitive fuel without the jittery peak and precipitous slump of commercial chocolates.”",
  },
]

export default function SensoryProfile() {
  const [activeDimension, setActiveDimension] = useState<SensoryDimension>(SENSORY_DIMENSIONS[0])

  return (
    <section id="sensory" className="relative py-20 sm:py-28 overflow-hidden bg-[#060c08] border-t border-amber-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-widest uppercase text-[10px]">Sommelier Tasting Notes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            The Sensorial Architecture. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              Texture, Aroma & Mouthfeel
            </span>
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            Luxury artisanal confectionery is experienced with all five senses. Explore how every bite performs on your palate.
          </p>
        </div>

        {/* 2-Column Luxury Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 5 Interactive Sensory Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SENSORY_DIMENSIONS.map((dim) => {
              const isSelected = activeDimension.id === dim.id
              return (
                <button
                  key={dim.id}
                  onClick={() => setActiveDimension(dim)}
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-400/15 to-transparent border-amber-400/60 shadow-[0_4px_25px_rgba(229,193,121,0.15)] ring-1 ring-amber-400/30"
                      : "bg-white/[0.02] border-white/10 hover:border-amber-400/30 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl sm:text-2xl">{dim.icon}</span>
                      <div>
                        <span className="text-sm sm:text-base font-bold text-white font-serif-luxury block">
                          {dim.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-amber-300/80 font-mono">
                          {dim.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-black text-amber-300 font-serif-luxury">
                      {dim.score}
                    </span>
                  </div>

                  {/* Tactile Score Bar */}
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mt-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                      style={{ width: `${dim.scoreNum}%` }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detailed Sommelier Inspection Stage */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl glass-panel-gold p-6 sm:p-8 border border-amber-400/30 shadow-2xl bg-gradient-to-b from-[#0a1811] via-[#07110c] to-[#040806]">
              {/* Badge & Rating Stamp */}
              <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-5">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-2xl">{activeDimension.icon}</span>
                  <span>{activeDimension.badge}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                  <span>Score: {activeDimension.score}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury mb-3">
                {activeDimension.title}
              </h3>
              <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-light mb-6">
                {activeDimension.description}
              </p>

              {/* 3 Culinary Tasting Notes */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300/80 font-mono block mb-3">
                  Culinary Notes & Mouthfeel
                </span>
                <div className="space-y-2.5">
                  {activeDimension.culinaryNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-200 font-light">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sommelier Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-400/[0.08] via-amber-400/[0.04] to-transparent border border-amber-400/25">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold font-mono block mb-1">
                  Artisanal Tasting Verdict
                </span>
                <p className="text-xs sm:text-sm italic text-stone-200 font-serif-luxury leading-relaxed">
                  {activeDimension.sommelierQuote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
