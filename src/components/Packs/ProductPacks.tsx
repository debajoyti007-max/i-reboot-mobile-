import { Check, MessageCircle, Phone, Sparkles, Package } from "lucide-react"
import { PRODUCT_PACKS, PUROBITE_CONTACT, PUROBITE_IMAGES } from "../../data/purobiteData"

export default function ProductPacks() {
  return (
    <section id="packs" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Package className="w-3.5 h-3.5 text-amber-400" />
            <span>Artisanal Small-Batch Packs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
            Order Fresh <span className="text-amber-300">Banana Chew</span>
          </h2>
          <p className="mt-2 text-stone-400 text-xs sm:text-sm leading-relaxed">
            Freshly batch-crafted upon order in Kolkata. Sealed in recyclable kraft tubs with airtight freshness barriers.
          </p>
        </div>

        {/* 3 Pack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRODUCT_PACKS.map((pack) => {
            const isBestseller = pack.recommended
            const whatsappOrderUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
              `Hello PuroBite! I'd like to order: 1x ${pack.name} (${pack.weight}) - ₹${pack.price}. Please confirm delivery details for my address.`
            )}`

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isBestseller
                    ? "glass-panel-gold ring-1 ring-amber-400/40 shadow-2xl md:-translate-y-2"
                    : "glass-panel hover:border-white/20"
                }`}
              >
                {/* Bestseller Badge */}
                {pack.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-stone-950" />
                    <span>{pack.badge}</span>
                  </div>
                )}

                <div>
                  {/* Photo thumbnail of the real pack */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-950 mb-5 border border-white/10">
                    <img
                      src={pack.id === "taster" ? PUROBITE_IMAGES.front : pack.id === "signature" ? PUROBITE_IMAGES.hero : PUROBITE_IMAGES.table}
                      alt={pack.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title & Weight */}
                  <div className="mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                      {pack.name}
                    </h3>
                    <span className="text-xs text-amber-300/90 font-medium">
                      {pack.weight}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2.5 my-3">
                    <span className="text-3xl font-black text-white">₹{pack.price}</span>
                    {pack.originalPrice && (
                      <span className="text-sm text-stone-500 line-through">
                        ₹{pack.originalPrice}
                      </span>
                    )}
                    <span className="text-[11px] text-emerald-400 font-semibold">Fresh Batch</span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 text-xs leading-relaxed mb-5">
                    {pack.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6 text-xs text-stone-300">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct 1-Tap WhatsApp Order Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={whatsappOrderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all touch-press cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-stone-950" />
                    <span>Order via WhatsApp</span>
                  </a>

                  <a
                    href={PUROBITE_CONTACT.phoneTel}
                    className="flex items-center justify-center gap-1.5 py-2 text-[11px] text-stone-400 hover:text-amber-300 transition-colors"
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
