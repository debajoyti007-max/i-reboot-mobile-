import { useState } from "react"
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState<"hero" | "infographic" | "front">("hero")

  const photos = {
    hero: {
      src: PUROBITE_IMAGES.hero,
      label: "Signature Tub",
    },
    infographic: {
      src: PUROBITE_IMAGES.infographic,
      label: "What's Inside",
    },
    front: {
      src: PUROBITE_IMAGES.front,
      label: "Airtight Pack",
    },
  }

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clear, Simple Value Proposition */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            {/* Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full herbal-pill text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Handcrafted in Kolkata • 100% Natural</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#b47919] font-mono font-bold block mb-1.5">
                Pure Confectionery
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
                Artisanal <span className="text-[#b47919] italic font-serif">Banana Chew.</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light max-w-lg">
              Slow-dehydrated ripe Cavendish bananas folded with dry-roasted whole California almonds, creamy cashews, and roasted seeds. <strong>Zero added cane sugar</strong>, zero preservatives.
            </p>

            {/* 3 Clear Highlight Cards */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-md pt-1">
              <div className="p-3 rounded-xl bg-white border border-[#e8e3d8] text-center shadow-xs">
                <span className="text-[#b47919] font-bold text-lg sm:text-xl block font-serif-luxury">
                  0.0g
                </span>
                <span className="text-[11px] text-stone-600 font-medium">Added Sugar</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e8e3d8] text-center shadow-xs">
                <span className="text-[#193322] font-bold text-lg sm:text-xl block font-serif-luxury">
                  Whole
                </span>
                <span className="text-[11px] text-stone-600 font-medium">Nuts & Seeds</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e8e3d8] text-center shadow-xs">
                <span className="text-[#b47919] font-bold text-lg sm:text-xl block font-serif-luxury">
                  6 Mo.
                </span>
                <span className="text-[11px] text-stone-600 font-medium">Airtight Fresh</span>
              </div>
            </div>

            {/* Two Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md pt-2">
              <a
                href="#pricing"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs sm:text-sm tracking-wide shadow-xs transition-all touch-press cursor-pointer"
              >
                <span>View Tubs & Prices</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-xs sm:text-sm tracking-wide transition-all touch-press cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#193322] fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-500 pt-0.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Small-batch prepared upon order in Kolkata • Dispatched in 24–48 hours</span>
            </div>
          </div>

          {/* Right Column: Hero Photo with 3 Simple View Pills */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-2xl bg-white p-3 border border-[#e8e3d8] shadow-xs">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={photos[activePhoto].src}
                  alt={photos[activePhoto].label}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                />
              </div>

              {/* 3 Clean View Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-2.5">
                {(Object.keys(photos) as Array<keyof typeof photos>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActivePhoto(key)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                      activePhoto === key
                        ? "bg-[#193322] text-[#f7f3ea] shadow-xs"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                    }`}
                  >
                    {photos[key].label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
