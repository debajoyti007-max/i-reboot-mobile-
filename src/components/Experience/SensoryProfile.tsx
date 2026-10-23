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
      "Unlike dry, chalky factory protein bars or rock-hard granola, PuroBite delivers a lush, velvety, yielding chew reminiscent of handcrafted fruit leather or gourmet French nougat.",
    culinaryNotes: [
      "Naturally softened by low-temperature slow dehydration",
      "Locks in fruit moisture without sticky cane syrup residues",
      "Melt-in-mouth finish with natural pectin structure",
    ],
    sommelierQuote:
      "“The chewiness is remarkably supple. It yields gently to each bite, delivering a prolonged release of natural banana caramel notes.”",
  },
  {
    id: "crunch",
    title: "Roasted Nut Shatter",
    score: "8.8 / 10",
    scoreNum: 88,
    badge: "Textural Contrast",
    icon: "🥜",
    description:
      "Whole California almonds and whole cashews are dry-roasted on cast-iron to a precise golden hue, creating an acoustic snap that contrasts harmoniously against the chewy banana base.",
    culinaryNotes: [
      "Whole roasted California almonds retain their crunchy snap",
      "Buttery cashew halves break with a delicate, creamy crumble",
      "Toasted sesame seeds add microscopic crackle across the palate",
    ],
    sommelierQuote:
      "“A sublime tactile interplay: the satisfying crunch of whole roasted nuts puncturing through dense, luscious fruit caramel.”",
  },
  {
    id: "sweetness",
    title: "Natural Sun Caramel",
    score: "8.2 / 10",
    scoreNum: 82,
    badge: "0g Added Cane Sugar",
    icon: "🍯",
    description:
      "Zero refined sucrose, brown sugar, or artificial sweeteners. 100% of the sweetness emanates from ripe fruit fructose naturally caramelized during gentle dehydration.",
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
      "No artificial fragrance, synthetic vanilla flavor, or sprays",
    ],
    sommelierQuote:
      "“Aromatics that evoke a boutique kitchen where nuts and seeds are being roasted on heavy cast-iron skillets.”",
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
      "“Clean, sustained physical and cognitive fuel without the jittery peak and precipitous slump of commercial confectionery.”",
  },
]

export default function SensoryProfile() {
  const [activeDimension, setActiveDimension] = useState<SensoryDimension>(SENSORY_DIMENSIONS[0])

  return (
    <section id="sensory" className="py-16 sm:py-24 bg-white border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Sommelier Tasting Notes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Texture, Aroma & <span className="text-[#b47919] italic font-serif">Mouthfeel</span>
          </h2>
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-light">
            Gourmet confectionery is experienced with all five senses. Explore how every handcrafted bite performs on your palate.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: 5 Interactive Sensory Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {SENSORY_DIMENSIONS.map((dim) => {
              const isSelected = activeDimension.id === dim.id
              return (
                <button
                  key={dim.id}
                  onClick={() => setActiveDimension(dim)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#faf8f5] border-[#b47919] shadow-xs ring-1 ring-[#b47919]/30"
                      : "bg-white border-[#e8e3d8] hover:border-stone-400 hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{dim.icon}</span>
                      <div>
                        <span className="text-sm font-bold text-stone-900 font-serif-luxury block">
                          {dim.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#b47919] font-mono">
                          {dim.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-stone-900 font-serif-luxury font-mono">
                      {dim.score}
                    </span>
                  </div>

                  {/* Score Bar */}
                  <div className="w-full h-1.5 rounded-full bg-stone-200 overflow-hidden mt-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#b47919] to-[#193322] transition-all duration-300"
                      style={{ width: `${dim.scoreNum}%` }}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Detailed Inspection Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf8f5] border border-[#e8e3d8] shadow-xs">
              <div className="flex items-center justify-between border-b border-[#e8e3d8] pb-4 mb-5">
                <div className="flex items-center gap-2 text-stone-800 text-xs font-semibold">
                  <span className="text-2xl">{activeDimension.icon}</span>
                  <span className="uppercase tracking-wider font-mono text-[11px] text-[#b47919]">
                    {activeDimension.badge}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white border border-[#e8e3d8] text-xs font-bold font-mono text-stone-800">
                  Rating: {activeDimension.score}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-luxury mb-2.5">
                {activeDimension.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
                {activeDimension.description}
              </p>

              {/* 3 Culinary Notes */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono block mb-3">
                  Tasting Observations
                </span>
                <div className="space-y-2">
                  {activeDimension.culinaryNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#e8e3d8]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-700 font-light">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verdict */}
              <div className="p-4 rounded-xl bg-white border border-[#e8e3d8]">
                <span className="text-[10px] uppercase tracking-widest text-[#b47919] font-bold font-mono block mb-1">
                  Artisanal Verdict
                </span>
                <p className="text-xs sm:text-sm italic text-stone-700 font-serif-luxury leading-relaxed">
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
