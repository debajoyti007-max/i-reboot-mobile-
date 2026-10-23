import { CheckCircle2, Heart } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export default function BrandStory() {
  const steps = [
    {
      num: "01",
      title: "Ripe Cavendish Selection",
      description:
        "We source mature bananas at peak ripeness when natural fruit fructose and dietary potassium are at their highest concentration.",
    },
    {
      num: "02",
      title: "Gentle Slow Dehydration",
      description:
        "Bananas are dehydrated under low-temperature airflow. This retains vitamins and enzymes while creating an intense caramel chew without cane sugar.",
    },
    {
      num: "03",
      title: "Dry-Roasted California Nuts",
      description:
        "Whole California almonds and cashews are dry-roasted on cast iron to achieve a clean acoustic crunch without frying or added oils.",
    },
    {
      num: "04",
      title: "Hand-Packed in Kolkata",
      description:
        "Folded with superseeds and sealed immediately in recyclable food-grade kraft tubs. Dispatched fresh within 24–48 hours.",
    },
  ]

  return (
    <section id="story" className="py-16 sm:py-24 bg-[#faf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Editorial Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
              <Heart className="w-3.5 h-3.5 text-emerald-700" />
              <span>Our Artisanal Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
              Real Food Craft. <br />
              <span className="text-[#b47919] italic font-serif">Born in Kolkata.</span>
            </h2>

            <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              In an era dominated by hyper-processed energy bars loaded with palm oil, glucose syrups, and chemical emulsifiers, <strong>PuroBite™</strong> was founded on a simple, uncompromising premise: <em>nature already perfected the recipe</em>.
            </p>

            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              By gently dehydrating sun-ripened bananas and pairing them with whole roasted nuts and seeds, we create a rich, chewy, nutrient-dense confectionery that honors traditional culinary wisdom. No factories. No warehouse dust. Just honest craftsmanship from our Kolkata kitchen.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-white border border-[#e8e3d8]">
                <span className="text-xs font-bold text-stone-900 block font-serif-luxury">
                  0g Added Cane Sugar
                </span>
                <span className="text-[11px] text-stone-500 font-light block mt-0.5">
                  100% natural fruit fructose
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#e8e3d8]">
                <span className="text-xs font-bold text-stone-900 block font-serif-luxury">
                  Small-Batch Dispatch
                </span>
                <span className="text-[11px] text-stone-500 font-light block mt-0.5">
                  24–48 hours from Kolkata
                </span>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-[#e8e3d8] shadow-sm">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={PUROBITE_IMAGES.table}
                  alt="PuroBite handcrafted on kitchen counter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-mono block">
                      Artisanal Benchmark
                    </span>
                    <span className="text-lg font-bold font-serif-luxury">
                      The Kolkata Kitchen Counter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((st) => (
            <div
              key={st.num}
              className="p-5 rounded-2xl bg-white border border-[#e8e3d8] flex flex-col justify-between shadow-2xs hover:border-[#b47919] transition-colors"
            >
              <div>
                <span className="text-2xl font-bold font-serif text-[#b47919]/70 block mb-2 font-mono">
                  {st.num}
                </span>
                <h4 className="text-base font-bold text-stone-900 font-serif-luxury mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {st.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Purity Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
