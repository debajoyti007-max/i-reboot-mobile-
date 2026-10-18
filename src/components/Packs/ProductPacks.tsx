import { Check, MessageCircle, Phone, Sparkles, Package } from "lucide-react"
import { PRODUCT_PACKS, PUROBITE_CONTACT, PUROBITE_IMAGES } from "../../data/purobiteData"

export default function ProductPacks() {
  return (
    <section id="packs" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Package className="w-3.5 h-3.5 text-amber-400" />
            <span>Artisanal Small-Batch Menu</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            Order Fresh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              Handcrafted Tubs
            </span>
          </h2>

          <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md font-light">
            Batch-crafted upon order in Kolkata. Sealed in recyclable kraft tubs with airtight freshness barriers.
          </p>
        </div>

        {/* 3 Pack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRODUCT_PACKS.map((pack) => {
            const isBestseller = pack.recommended
            const whatsappOrderUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
              `Hello PuroBite! I'd like to order: 1x ${pack.name} (${pack.weight}) - ₹${pack.price}. Please confirm delivery details for my address.`
            )}`

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isBestseller
                    ? "glass-panel-gold ring-1 ring-amber-400/50 shadow-[0_24px_60px_rgba(229,193,121,0.2)] md:-translate-y-3"
                    : "glass-panel-luxury hover:border-amber-400/30"
                }`}
              >
                {/* Bestseller Badge */}
                {pack.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-widest shadow-[0_4px_15px_rgba(229,193,121,0.5)] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-stone-950" />
                    <span>{pack.badge}</span>
                  </div>
                )}

                <div>
                  {/* Photo thumbnail */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-950 mb-6 border border-white/10 shadow-lg">
                    <img
                      src={
                        pack.id === "taster"
                          ? PUROBITE_IMAGES.front
                          : pack.id === "signature"
                          ? PUROBITE_IMAGES.hero
                          : PUROBITE_IMAGES.table
                      }
                      alt={pack.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Title & Weight */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                      {pack.name}
                    </h3>
                    <span className="text-xs text-amber-300/90 font-medium">
                      {pack.weight}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-3 my-4">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
                      ₹{pack.price}
                    </span>
                    {pack.originalPrice && (
                      <span className="text-sm text-stone-500 line-through">
                        ₹{pack.originalPrice}
                      </span>
                    )}
                    <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/25">
                      Fresh Batch
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 text-xs leading-relaxed mb-6 font-light">
                    {pack.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 text-xs text-stone-300">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp Ordering */}
                <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(229,193,121,0.3)] transition-all touch-press cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-stone-950" />
                    <span>Order via WhatsApp</span>
                  </a>

                  <a
                    href={PUROBITE_CONTACT.phoneTel}
                    className="flex items-center justify-center gap-1.5 py-2 text-[11px] text-stone-400 hover:text-amber-300 transition-colors font-mono"
                  >
                    <Phone className="w-3 h-3 text-amber-300" />
                    <span>Or call {PUROBITE_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
