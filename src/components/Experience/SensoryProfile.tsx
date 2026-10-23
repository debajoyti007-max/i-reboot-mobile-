import { useState } from "react"
import { Sparkles, CheckCircle2 } from "lucide-react"

interface SensoryDimension {
  id: string
  title: string
  badge: string
  icon: string
  description: string
  culinaryNotes: string[]
}

const SENSORY_DIMENSIONS: SensoryDimension[] = [
  {
    id: "chewiness",
    title: "Natural Banana Chew",
    badge: "Fruit Texture",
    icon: "🍌",
    description:
      "The slow dehydration of ripe bananas evaporates moisture while retaining natural fruit pectin, creating a dense, yielding chew that softens naturally on the palate.",
    culinaryNotes: [
      "Natural fruit pectin provides a soft, pliable chew",
      "Locks in fruit moisture without sticky cane sugar syrups",
      "Traditional low-temperature dehydration preserves clean mouthfeel",
    ],
  },
  {
    id: "crunch",
    title: "Roasted Almond & Cashew Snap",
    badge: "Nut Crunch",
    icon: "🥜",
    description:
      "Whole California almonds and whole cashews are dry-roasted to a golden hue, giving a crisp, audible snap that balances against the chewy fruit base.",
    culinaryNotes: [
      "Whole roasted almonds deliver an audible, satisfying crunch",
      "Buttery cashew halves break with a delicate, creamy texture",
      "Toasted sesame seeds add subtle crispness across every bite",
    ],
  },
  {
    id: "sweetness",
    title: "Natural Fruit Sweetness",
    badge: "0g Added Cane Sugar",
    icon: "🍯",
    description:
      "100% of the sweetness comes directly from ripe Cavendish bananas. Zero cane sugar, zero brown sugar, and zero artificial sweeteners.",
    culinaryNotes: [
      "Naturally concentrated banana fructose without cloying aftertaste",
      "Warm, fruit-forward caramel notes from gentle dehydration",
      "Leaves the palate clean without sticky sugar residue",
    ],
  },
  {
    id: "aroma",
    title: "Toasted Seeds & Nut Aroma",
    badge: "Natural Fragrance",
    icon: "🌿",
    description:
      "Opening the airtight kraft tub releases a pleasant, roasted aroma of dry-roasted nuts, sesame seeds, and sun-ripened fruit.",
    culinaryNotes: [
      "Toasted sesame provides a comforting, nutty aroma",
      "Golden pumpkin seeds and roasted almonds add warmth",
      "Zero artificial flavorings, synthetic sprays, or perfumes",
    ],
  },
  {
    id: "energy",
    title: "Steady Natural Stamina",
    badge: "Clean Fuel",
    icon: "⚡",
    description:
      "Combining natural fruit carbohydrates with healthy nut fats and dietary fiber provides steady, prolonged energy without the sharp peaks and crashes of refined sugar.",
    culinaryNotes: [
      "Natural banana fructose provides smooth, sustained energy",
      "480mg natural potassium per 100g supports muscle and nerve function",
      "6.8g dietary fiber supports healthy digestion",
    ],
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
            <span>Taste & Texture Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Texture, Aroma & <span className="text-[#b47919] italic font-serif">Mouthfeel</span>
          </h2>
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-light">
            Crafted for balance: the chewiness of sun-ripened bananas paired with the crisp snap of whole dry-roasted nuts.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left: 5 Sensory Dimensions */}
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
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-luxury mb-2.5">
                {activeDimension.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
                {activeDimension.description}
              </p>

              {/* Culinary Notes */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono block mb-3">
                  Natural Culinary Characteristics
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
