import { useState } from "react"
import { MessageCircle, Phone, ArrowRight, Sparkles } from "lucide-react"
import { PUROBITE_CONTACT, GALLERY_VIEWS } from "../../data/purobiteData"

export default function Hero() {
  const [activeViewIndex, setActiveViewIndex] = useState(0)
  const activeView = GALLERY_VIEWS[activeViewIndex]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I'd like to order Banana Chew handcrafted pack.`
  )}`

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Showcase (Displayed FIRST on mobile for instant visual impact) */}
          <div className="w-full lg:col-span-6 lg:order-2">
            <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.12] backdrop-blur-xl shadow-2xl">
              {/* Active High-Res Photo Frame */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-950">
                <img
                  src={activeView.src}
                  alt={activeView.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-950/70 border border-white/10 backdrop-blur-md text-[11px] font-semibold text-amber-300">
                  {activeView.tag}
                </div>

                {/* Bottom Photo Title */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-stone-950/90 to-transparent">
                  <span className="text-sm font-bold text-white font-serif block">
                    {activeView.title}
                  </span>
                  <span className="text-[11px] text-stone-300 line-clamp-1">
                    {activeView.subtitle}
                  </span>
                </div>
              </div>

              {/* 5 Thumbnail Switchers (Large easy tap targets for mobile thumbs) */}
              <div className="grid grid-cols-5 gap-2 pt-2.5">
                {GALLERY_VIEWS.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveViewIndex(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      activeViewIndex === idx
                        ? "border-amber-400 ring-2 ring-amber-400/40 scale-105"
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
          <div className="w-full lg:col-span-6 lg:order-1 flex flex-col gap-4 sm:gap-5 text-center lg:text-left items-center lg:items-start">
            {/* Clean Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Handcrafted in Kolkata • 100% Natural</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>3D Wukong Active ⚡</span>
              </div>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-bold block mb-1">
                Purity In Every Bite
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight leading-tight">
                Artisanal <br className="hidden sm:inline" />
                <span className="text-amber-300">Banana Chew</span>
              </h1>
            </div>

            {/* Clear, honest description */}
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-lg font-normal">
              Slow-dehydrated ripe bananas rolled with whole roasted almonds, crunchy cashews, pumpkin seeds, and dual toasted sesame. No added cane sugar, zero preservatives, 100% pure plant fuel.
            </p>

            {/* 3 Core Fact Pills */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-md pt-1">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-amber-300 font-black text-base sm:text-lg block">0g</span>
                <span className="text-[11px] text-stone-300 font-medium">Added Sugar</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-emerald-400 font-black text-base sm:text-lg block">8</span>
                <span className="text-[11px] text-stone-300 font-medium">Superfoods</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-amber-300 font-black text-base sm:text-lg block">Slow</span>
                <span className="text-[11px] text-stone-300 font-medium">Dehydrated</span>
              </div>
            </div>

            {/* Big Thumb-Friendly CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-sm tracking-wide shadow-lg transition-all touch-press"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-stone-200 text-xs font-semibold transition-all touch-press"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
