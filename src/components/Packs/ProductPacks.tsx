import { useState } from "react"
import { Check, Sparkles, MessageCircle, Phone, ShoppingBag, Plus, Minus, Truck } from "lucide-react"
import { PRODUCT_PACKS, PUROBITE_CONTACT, PUROBITE_IMAGES } from "../../data/purobiteData"
import { useCart } from "../../context/CartContext"

export default function ProductPacks() {
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<Record<string, number>>({
    taster: 0,
    signature: 1,
    "duo-family": 0,
  })

  const updateQuantity = (packId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[packId] || 0
      const next = Math.max(0, current + delta)
      return { ...prev, [packId]: next }
    })
  }

  // Calculate cart total
  const totalItems = Object.values(quantities).reduce((acc, qty) => acc + qty, 0)
  const totalPrice = PRODUCT_PACKS.reduce((acc, pack) => {
    const qty = quantities[pack.id] || 0
    return acc + pack.price * qty
  }, 0)

  // Build custom WhatsApp order string
  const selectedPacksSummary = PRODUCT_PACKS.filter((p) => (quantities[p.id] || 0) > 0)
    .map((p) => `${quantities[p.id]}x ${p.name} (${p.weight}) - ₹${p.price * quantities[p.id]}`)
    .join(", ")

  const whatsappMessage = totalItems > 0
    ? `Hello PuroBite! I would like to place an order:%0A• ${selectedPacksSummary}%0A• Total Amount: ₹${totalPrice}%0A%0APlease let me know the dispatch details and payment options (UPI / COD). Thank you!`
    : `Hello PuroBite! I'm interested in ordering the Banana Chew Signature Gourmet Tub (₹399). Please share delivery details.`

  const whatsappUrl = `https://wa.me/918250755958?text=${whatsappMessage}`

  return (
    <section id="packs" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Kitchen Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Select Your Artisanal <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              Banana Chew Pack.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Freshly batch-crafted upon order to ensure maximum nut crunch, natural aroma, and dense chewy texture. Ships direct to your doorstep.
          </p>
        </div>

        {/* 3 Pack Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCT_PACKS.map((pack) => {
            const qty = quantities[pack.id] || 0
            const isRecommended = pack.recommended

            return (
              <div
                key={pack.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? "glass-panel-gold ring-2 ring-amber-400/50 shadow-[0_25px_60px_-15px_rgba(245,158,11,0.25)] lg:-translate-y-3"
                    : "glass-panel hover:border-white/20"
                }`}
              >
                {/* Highlight Badge */}
                {pack.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-stone-950 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                    <span>{pack.badge}</span>
                  </div>
                )}

                <div>
                  {/* Title & Weight */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                      {pack.name}
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-amber-300 mb-4">
                    {pack.weight}
                  </span>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-black text-white">₹{pack.price}</span>
                    {pack.originalPrice && (
                      <span className="text-base text-stone-500 line-through">
                        ₹{pack.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-emerald-400 font-semibold">Taxes Included</span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {pack.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-stone-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Quantity & Direct Order */}
                <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-400 font-medium">Quantity:</span>
                    <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-black/40 border border-white/15">
                      <button
                        onClick={() => updateQuantity(pack.id, -1)}
                        className="p-1 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-bold text-white w-6 text-center">{qty}</span>
                      <button
                        onClick={() => updateQuantity(pack.id, 1)}
                        className="p-1 rounded text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() =>
                        addToCart(
                          {
                            id: pack.id,
                            name: pack.name,
                            weight: pack.weight,
                            price: pack.price,
                            image: PUROBITE_IMAGES.front,
                          },
                          qty > 0 ? qty : 1
                        )
                      }
                      className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white border border-white/15 text-xs font-bold transition-all cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                      <span>Add to Bag</span>
                    </button>

                    <a
                      href={`https://wa.me/918250755958?text=${encodeURIComponent(
                        `Hello PuroBite! I'd like to order: ${qty > 0 ? qty : 1}x ${pack.name} (${pack.weight}) - Total: ₹${
                          pack.price * (qty > 0 ? qty : 1)
                        }. Please confirm order details.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-1.5 py-3 rounded-xl font-bold text-xs tracking-wide transition-all ${
                        isRecommended
                          ? "bg-gradient-to-r from-amber-400 to-emerald-500 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
                          : "bg-emerald-600 hover:bg-emerald-500 text-stone-950"
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Buy Direct</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Live Order Bar (If items selected) */}
        {totalItems > 0 && (
          <div className="mt-10 p-5 rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 border border-amber-500/40 backdrop-blur-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-extrabold text-lg">
                {totalItems}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base">Your Custom Box Selection</span>
                <span className="text-xs text-stone-300">
                  Total Value: <strong className="text-amber-400 text-base">₹{totalPrice}</strong> ({totalItems} packs)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-400 text-stone-950 font-black text-sm tracking-wide shadow-xl hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Confirm Order via WhatsApp</span>
              </a>
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-stone-200"
                title="Call to Order"
              >
                <Phone className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>
        )}

        {/* Delivery & Kitchen Trust Banner */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Speedy Metro Delivery</span>
              <span className="text-[11px] text-stone-400">24-48 hr courier in Kolkata & Bengal</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Guaranteed Fresh Batch</span>
              <span className="text-[11px] text-stone-400">Handcrafted in small hygienic batches</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
            <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Direct Kitchen Line</span>
              <span className="text-[11px] text-stone-400">{PUROBITE_CONTACT.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
