import { useState } from "react"
import { MessageCircle, Phone, ArrowRight, Sparkles, ShieldCheck } from "lucide-react"
import { PUROBITE_CONTACT, GALLERY_VIEWS } from "../../data/purobiteData"

export default function Hero() {
  const [activeViewIndex, setActiveViewIndex] = useState(0)
  const activeView = GALLERY_VIEWS[activeViewIndex]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I'd like to order Banana Chew handcrafted pack.`
  )}`

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Visual Showcase (Displayed FIRST on mobile for instant visual impact) */}
          <div className="w-full lg:col-span-6 lg:order-2">
            <div className="relative rounded-3xl p-3 sm:p-3.5 glass-panel-gold">
              {/* Active High-Res Photo Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-950 border border-white/10 shadow-2xl">
                <img
                  src={activeView.src}
                  alt={activeView.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                />

                {/* Tag Badge */}
                <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 rounded-full bg-stone-950/80 border border-amber-400/40 backdrop-blur-xl text-[11px] font-bold text-amber-300 tracking-wide flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{activeView.tag}</span>
                </div>

                {/* Bottom Photo Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050a07] via-[#050a07]/80 to-transparent">
                  <span className="text-base sm:text-lg font-bold text-white font-serif-luxury block">
                    {activeView.title}
                  </span>
                  <span className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                    {activeView.subtitle}
                  </span>
                </div>
              </div>

              {/* 5 Thumbnail Switchers (Large easy tap targets for mobile thumbs) */}
              <div className="grid grid-cols-5 gap-2 pt-3">
                {GALLERY_VIEWS.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveViewIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      activeViewIndex === idx
                        ? "border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-[0_0_15px_rgba(229,193,121,0.4)]"
                        : "border-white/10 opacity-60 hover:opacity-100"
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

          {/* Core Copy & Action (Clean, zero fluff, mobile optimized) */}
          <div className="w-full lg:col-span-6 lg:order-1 flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start">
            {/* Clean Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-wide">Handcrafted in Kolkata • 100% Natural</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-amber-200/70 font-display-brand font-bold block mb-2">
                Purity In Every Bite
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold text-white font-serif-luxury tracking-tight leading-[1.08]">
                Artisanal <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
                  Banana Chew
                </span>
              </h1>
            </div>

            {/* Clear, honest description */}
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-lg font-light">
              Slow-dehydrated ripe bananas rolled with whole roasted California almonds, creamy cashews, and seven nutrient-dense superfood seeds. 0g added cane sugar, zero preservatives, 100% whole-food vitality.
            </p>

            {/* 3 Core Fact Pills */}
            <div className="grid grid-cols-3 gap-2.5 w-full max-w-md">
              <div className="p-3 rounded-2xl glass-panel-luxury text-center">
                <span className="text-amber-300 font-bold text-lg sm:text-xl block font-serif-luxury">0g</span>
                <span className="text-[10px] sm:text-[11px] text-stone-300 font-medium tracking-wide">Added Sugar</span>
              </div>
              <div className="p-3 rounded-2xl glass-panel-luxury text-center">
                <span className="text-emerald-400 font-bold text-lg sm:text-xl block font-serif-luxury">8</span>
                <span className="text-[10px] sm:text-[11px] text-stone-300 font-medium tracking-wide">Superfoods</span>
              </div>
              <div className="p-3 rounded-2xl glass-panel-luxury text-center">
                <span className="text-amber-300 font-bold text-lg sm:text-xl block font-serif-luxury">Slow</span>
                <span className="text-[10px] sm:text-[11px] text-stone-300 font-medium tracking-wide">Dehydrated</span>
              </div>
            </div>

            {/* Big Thumb-Friendly CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-4 px-7 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-sm tracking-wide shadow-[0_8px_30px_rgba(229,193,121,0.35)] transition-all touch-press cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-stone-200 text-xs font-semibold transition-all touch-press"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Dietary Trust Badges */}
            <div className="flex items-center gap-4 text-xs text-stone-400 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Vegan</span>
              </div>
              <span>•</span>
              <span>Gluten-Free</span>
              <span>•</span>
              <span>0% Palm Oil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
