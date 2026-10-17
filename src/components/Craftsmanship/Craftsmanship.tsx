import { Sparkles, Leaf, ShieldCheck, HeartHandshake } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export default function Craftsmanship() {
  const steps = [
    {
      num: "01",
      title: "Artisanal Banana Selection",
      description: "We hand-grade fully sun-ripened bananas at peak natural sweetness, completely eliminating any need for cane sugar, jaggery, or liquid sweeteners.",
    },
    {
      num: "02",
      title: "Slow Micro-Dehydration",
      description: "Unlike commercial snacks baked at scorching heat or deep-fried in palm oil, our bananas are slowly dehydrated to preserve vital potassium, active fiber, and rich chewy bite.",
    },
    {
      num: "03",
      title: "Roasted Superfood Fold",
      description: "Each chewy banana slice is gently rolled in whole California almonds, creamy cashews, and a nutrient matrix of pumpkin and dual toasted sesame seeds.",
    },
    {
      num: "04",
      title: "Hand-Packed in Kolkata",
      description: "Every tub is sealed by hand in eco-friendly kraft containers with an airtight moisture shield, delivering 6 months of fresh, crisp crunch without a single preservative.",
    },
  ]

  return (
    <section id="craftsmanship" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Rustic Table Photo with Glass Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src={PUROBITE_IMAGES.table}
                alt="PuroBite artisanal small-batch kitchen"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-white font-serif font-bold text-base block">
                    Kolkata Heritage Kitchen
                  </span>
                  <span className="text-stone-300 text-xs">
                    Pure ingredients • Handcrafted with devotion
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <Leaf className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Photo Badge */}
            <div className="hidden sm:block absolute -top-8 -right-8 w-44 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl backdrop-blur-md">
              <img
                src={PUROBITE_IMAGES.front}
                alt="PuroBite Banana Chew packaging detail"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content: Craftsmanship Steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold w-fit backdrop-blur-md">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              <span>Our Artisanal Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
              Why PuroBite Tastes So <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
                Uncompromisingly Pure.
              </span>
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              Industrial snacking was broken by shortcuts: palm oil, synthetic emulsifiers, and cheap syrups. We went back to ancient culinary integrity: wholesome fruit, whole superfood seeds, and patient craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="glass-panel p-5 rounded-2xl flex flex-col gap-2 hover:border-amber-400/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      STEP {step.num}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white font-serif">{step.title}</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-xs text-stone-300">
                <span className="font-bold text-white">Our Zero-Compromise Kitchen Promise:</span>
                <span>If a child, a grandparent, or an Olympic athlete cannot safely consume it, we do not make it.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
