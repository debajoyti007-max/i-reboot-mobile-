import { Award, Leaf, Truck, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Clean Label Whole Food",
      highlight: "Zero Added Sugar",
      description:
        "Every single calorie comes from whole sun-ripened bananas and raw nuts. No cane sugar, zero brown sugar, no hidden corn syrup, and zero artificial sweeteners.",
      color: "emerald",
    },
    {
      icon: Sparkles,
      title: "Slow Micro-Dehydration",
      highlight: "Enzymes & Nutrients Intact",
      description:
        "Unlike commercial extruded snacks baked at scorching heats or deep-fried in palm oil, our bananas are slowly dehydrated to preserve vital potassium, active fiber, and rich chewy bite.",
      color: "amber",
    },
    {
      icon: Award,
      title: "8 Synergistic Superfoods",
      highlight: "Whole Nuts & Active Seeds",
      description:
        "Whole California almonds, crunchy cashews, pumpkin pepitas, black & white sesame, and omega-rich chia seeds deliver sustained endurance without post-sugar crashes.",
      color: "emerald",
    },
    {
      icon: Truck,
      title: "Fresh Kolkata Kitchen Dispatch",
      highlight: "Small Batch Crafting",
      description:
        "Handcrafted weekly in small batches in Kolkata, sealed into recyclable kraft containers with an airtight moisture barrier. Arrives fresh at your door.",
      color: "amber",
    },
  ]

  return (
    <section id="why-choose-us" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase & Floating Stats */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] group">
              <img
                src={PUROBITE_IMAGES.hero}
                alt="PuroBite Banana Chew purity"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-white font-serif font-bold text-base block">
                    Purity In Every Bite
                  </span>
                  <span className="text-stone-300 text-xs">
                    Handcrafted in Kolkata • 100% Natural
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
              </div>
            </div>

            {/* VNPR Style Floating Trust Badge 1 */}
            <div className="hidden sm:flex absolute -top-6 -left-6 z-20 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-2xl border border-amber-500/30 shadow-2xl items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                  Gold Standard
                </span>
                <span className="text-sm font-bold text-white">4.9★ Customer Rating</span>
              </div>
            </div>

            {/* VNPR Style Floating Trust Badge 2 */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 z-20 p-4 rounded-2xl bg-stone-900/90 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                  Clean Formula
                </span>
                <span className="text-sm font-bold text-white">5,000+ Happy Snackers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 4 Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold w-fit backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THE PUROBITE PROMISE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
              Why Choose <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
                Our Banana Chew?
              </span>
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              We started PuroBite with a single uncompromising mission: to create real, nutrient-dense snacking that tastes indulgent without using industrial shortcuts, cane sugars, or synthetic binders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((b) => {
                const IconComponent = b.icon
                const isAmber = b.color === "amber"

                return (
                  <div
                    key={b.title}
                    className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                            isAmber
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                          {b.highlight}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white font-serif mb-2 group-hover:text-amber-300 transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-xs text-stone-300 leading-relaxed">{b.description}</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Clean Quality</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* VNPR Style 3-Metric Banner */}
            <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-amber-950/50 border border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">5000+</span>
                <span className="block text-[11px] text-stone-400 mt-0.5">Tubs Enjoyed</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-serif">100%</span>
                <span className="block text-[11px] text-stone-400 mt-0.5">Natural Ingredients</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-300 font-serif">0g</span>
                <span className="block text-[11px] text-stone-400 mt-0.5">Added Sugar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
