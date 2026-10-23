import { useState } from "react"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { GALLERY_VIEWS } from "../../data/purobiteData"

export default function Hero() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const activePhoto = GALLERY_VIEWS[activePhotoIndex]

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            {/* Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Kolkata Artisanal Kitchen • 100% Natural</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#b47919] font-mono font-bold block mb-2">
                Pure Confectionery Reimagined
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-[1.12]">
                Artisanal <br className="hidden sm:inline" />
                <span className="text-[#b47919] italic font-serif">Banana Chew.</span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light max-w-xl">
              Slow-dehydrated ripe Cavendish bananas folded with dry-roasted California whole almonds, creamy cashews, pumpkin seeds, and toasted sesame. <strong>0g added cane sugar</strong>, zero preservatives, 100% natural vitality.
            </p>

            {/* Core Value Pills */}
            <div className="grid grid-cols-3 gap-2.5 w-full max-w-md pt-1">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md pt-2">
              <a
                href="#shop"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs sm:text-sm tracking-wide shadow-sm transition-all touch-press cursor-pointer"
              >
                <span>Shop Fresh Tubs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#purity"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-xs sm:text-sm tracking-wide transition-all touch-press"
              >
                <span>Our Purity Standard</span>
              </a>
            </div>

            {/* Kolkata Kitchen Trust Stamp */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Small-batch crafted in Kolkata & dispatched within 24–48 hours across India</span>
            </div>
          </div>

          {/* Right Column: Hero Photo Showcase with Thumbnail Switcher */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl bg-white p-3 sm:p-4 border border-[#e8e3d8] shadow-sm">
              {/* Active Image Container with fixed 4:3 or square ratio */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200 text-[11px] font-semibold text-stone-800 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#b47919]" />
                  <span>{activePhoto.tag}</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/75 via-black/40 to-transparent text-white">
                  <span className="text-sm sm:text-base font-bold font-serif-luxury block">
                    {activePhoto.title}
                  </span>
                  <span className="text-[11px] text-stone-200 font-light line-clamp-1">
                    {activePhoto.subtitle}
                  </span>
                </div>
              </div>

              {/* 5 Gallery Thumbnails */}
              <div className="grid grid-cols-5 gap-2 pt-3">
                {GALLERY_VIEWS.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      activePhotoIndex === idx
                        ? "border-[#b47919] ring-2 ring-[#b47919]/40 scale-102 shadow-xs"
                        : "border-stone-200 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View ${view.title}`}
                  >
                    <img
                      src={view.src}
                      alt={view.title}
                      className="w-full h-full object-cover"
                    />
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
