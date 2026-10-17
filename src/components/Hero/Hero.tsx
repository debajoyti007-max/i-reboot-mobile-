import { useState, useRef } from "react"
import { Sparkles, MessageCircle, Phone, ShieldCheck, Flame, ArrowRight, Eye, CheckCircle2 } from "lucide-react"
import { PUROBITE_CONTACT, GALLERY_VIEWS } from "../../data/purobiteData"

export default function Hero() {
  const [activeViewIndex, setActiveViewIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const showcaseRef = useRef<HTMLDivElement>(null)

  const activeView = GALLERY_VIEWS[activeViewIndex]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!showcaseRef.current) return
    const rect = showcaseRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  const whatsappOrderUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I saw your Banana Chew ${activeView.title} and would like to order a fresh artisanal pack.`
  )}`

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authentic Brand Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">
            {/* Superfood Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-950/70 via-amber-950/30 to-emerald-950/70 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-xl w-fit">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
                100% Natural • 8 Superfoods • Zero Added Sugar
              </span>
              <span className="text-stone-500 text-xs">|</span>
              <span className="text-xs font-medium text-emerald-300">Kolkata Handcrafted</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-emerald-400 font-bold">
                Purity In Every Bite
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] font-serif">
                Handcrafted <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
                  Banana Chew
                </span>
              </h1>
            </div>

            {/* Clean Label Subtitle - Strictly authentic, zero robotic text */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              Slow-dehydrated ripe bananas naturally rolled with whole roasted California almonds, crunchy cashews, pumpkin seeds, and mineral-dense sesame. No cane sugar, zero preservatives, zero palm oil. Real, honest energy designed for conscious snacking.
            </p>

            {/* Quick Clean Benefits Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
                <span className="text-amber-400 font-extrabold text-xl">0g</span>
                <span className="text-xs text-stone-300 font-medium">Added Sugar</span>
                <span className="text-[10px] text-stone-400">Pure fruit sweetness</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
                <span className="text-emerald-400 font-extrabold text-xl">8</span>
                <span className="text-xs text-stone-300 font-medium">Superfoods</span>
                <span className="text-[10px] text-stone-400">Whole nuts & seeds</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
                <span className="text-amber-400 font-extrabold text-xl">480mg</span>
                <span className="text-xs text-stone-300 font-medium">Potassium</span>
                <span className="text-[10px] text-stone-400">Electrolyte fuel</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col">
                <span className="text-emerald-400 font-extrabold text-xl">100%</span>
                <span className="text-xs text-stone-300 font-medium">Clean Label</span>
                <span className="text-[10px] text-stone-400">Zero artificial additives</span>
              </div>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noreferrer"
                className="relative group overflow-hidden flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-stone-950 font-extrabold text-sm tracking-wide shadow-[0_0_35px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950 text-stone-950" />
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/50 text-stone-200 hover:text-white font-medium text-sm transition-all backdrop-blur-xl group"
              >
                <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">Direct Hotline</span>
                  <span className="font-semibold text-stone-100">{PUROBITE_CONTACT.phoneDisplay}</span>
                </div>
              </a>
            </div>

            {/* Kitchen Guarantee Tag */}
            <div className="flex items-center gap-6 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Small Batch Hand-Packed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>FSSAI Compliant Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Slow Dehydrated Not Fried</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unreal-Engine 4K Interactive Glass Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 via-amber-500/20 to-emerald-400/10 rounded-3xl blur-3xl opacity-70 pointer-events-none animate-pulse" />

            {/* Main Interactive Glassmorphic Frame */}
            <div
              ref={showcaseRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              className="relative rounded-3xl p-3 bg-gradient-to-b from-white/[0.12] via-white/[0.03] to-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden group cursor-crosshair"
            >
              {/* Dynamic Specular Reflection following mouse */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.18), transparent 60%)`,
                }}
              />

              {/* Top View Badge */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/15 text-xs text-amber-300 font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeView.tag}</span>
              </div>

              {/* Interactive Zoom Indicator Pill */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-950/70 backdrop-blur-md border border-white/10 text-[11px] text-stone-300 font-medium">
                <Eye className="w-3 h-3 text-emerald-400" />
                <span>{isZoomed ? "2X Magnifier" : "Hover to Zoom"}</span>
              </div>

              {/* High-Definition Image with Zoom Magnifier Effect */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-950 border border-white/10">
                <img
                  src={activeView.src}
                  alt={activeView.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
                    isZoomed ? "scale-125" : "scale-100"
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                        }
                      : undefined
                  }
                  loading="eager"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent flex flex-col">
                  <span className="text-white font-serif font-bold text-base sm:text-lg">
                    {activeView.title}
                  </span>
                  <span className="text-xs text-stone-300 font-light line-clamp-1">
                    {activeView.subtitle}
                  </span>
                </div>
              </div>

              {/* Gallery View Switcher Tabs (Thumbnails) */}
              <div className="grid grid-cols-5 gap-2 pt-3">
                {GALLERY_VIEWS.map((view, idx) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveViewIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-square border transition-all ${
                      activeViewIndex === idx
                        ? "border-amber-400 ring-2 ring-amber-400/40 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                    }`}
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

            {/* Floating Glassmorphic Product Card Pills */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 p-3.5 rounded-2xl bg-stone-900/90 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">0% Preservatives</span>
                <span className="text-[10px] text-stone-400">Clean Food Guarantee</span>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-5 z-30 p-3.5 rounded-2xl bg-stone-900/90 backdrop-blur-2xl border border-amber-500/30 shadow-2xl items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Banana Chew</span>
                <span className="text-[10px] text-amber-300">8 Real Superfoods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
