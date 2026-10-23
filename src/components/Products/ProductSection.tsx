import { useState } from "react"
import { Check, ShoppingBag, MessageCircle, Sparkles, Plus, Minus } from "lucide-react"
import { PRODUCT_PACKS, PRODUCT_CATEGORIES } from "../../data/purobiteData"
import { useCart } from "../../context/useCart"

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "taster-200g": 1,
    "signature-350g": 1,
    "family-700g": 1,
  })

  const { addToCart } = useCart()

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(10, (prev[id] || 1) + delta)),
    }))
  }

  const filteredPacks =
    activeCategory === "all"
      ? PRODUCT_PACKS
      : PRODUCT_PACKS.filter((p) => p.category === activeCategory)

  return (
    <section id="shop" className="py-16 sm:py-24 bg-white border-t border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header (VNPR Foods inspired) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kolkata Artisanal Small-Batch Menu</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Handcrafted <span className="text-[#b47919] italic font-serif">Fresh Tubs</span>
          </h2>

          <p className="mt-2.5 text-stone-600 text-sm sm:text-base font-light">
            Crafted upon order confirmation in Kolkata. Hermetically sealed in recyclable kraft tubs with 6 months of guaranteed fruit chewiness and roasted nut crispness.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-100 border border-stone-200 mt-6 max-w-full overflow-x-auto">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-white text-stone-900 shadow-xs border border-stone-200/60"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* 3 Real Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPacks.map((pack) => {
            const isBestseller = pack.recommended
            const qty = quantities[pack.id] || 1

            const directWhatsAppUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
              `Hello PuroBite! I'd like to order: ${qty}x ${pack.name} (${pack.weight}) - ₹${
                pack.price * qty
              }. Please confirm delivery details for my address.`
            )}`

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 ${
                  isBestseller ? "food-card-featured" : "food-card"
                }`}
              >
                {/* Badge */}
                {pack.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xs flex items-center gap-1 ${
                      isBestseller
                        ? "bg-[#193322] text-[#f7f3ea]"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{pack.badge}</span>
                  </div>
                )}

                <div>
                  {/* Photo Container with consistent 4:3 ratio */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 mb-5 border border-stone-200">
                    <img
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />

                    {/* In-Stock Tag */}
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/95 border border-stone-200 text-[10px] font-semibold text-emerald-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>Fresh Batch</span>
                    </div>
                  </div>

                  {/* Title & Weight */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-luxury leading-tight">
                      {pack.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#b47919] block mt-0.5">
                      {pack.weight} • {pack.servingInfo}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2.5 my-3.5">
                    <span className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-luxury">
                      ₹{pack.price}
                    </span>
                    {pack.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        ₹{pack.originalPrice}
                      </span>
                    )}
                    {pack.originalPrice && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                        Save ₹{pack.originalPrice - pack.price}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-xs leading-relaxed font-light mb-4">
                    {pack.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 py-3 border-t border-b border-stone-100 mb-5">
                    {pack.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions: Quantity + Add To Cart + WhatsApp Order */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5">
                    {/* Quantity Control */}
                    <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 p-1">
                      <button
                        onClick={() => handleQtyChange(pack.id, -1)}
                        className="w-7 h-7 rounded-lg hover:bg-white flex items-center justify-center text-stone-600 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-stone-900 font-mono">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(pack.id, 1)}
                        className="w-7 h-7 rounded-lg hover:bg-white flex items-center justify-center text-stone-600 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(pack, qty)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#193322] text-stone-900 font-semibold text-xs transition-colors shadow-2xs touch-press cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#193322]" />
                      <span>Add to Basket</span>
                    </button>
                  </div>

                  {/* 1-Tap Direct WhatsApp Buy Now */}
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs tracking-wide transition-all shadow-xs touch-press cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Buy Now via WhatsApp</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Free Shipping Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#fdfbf7] border border-[#e8e3d8] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eef6f1] text-[#193322] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 font-serif-luxury">
                Free Express Delivery Across India on Orders Over ₹699
              </h4>
              <p className="text-xs text-stone-500 font-light">
                Dispatched within 24–48 hours from our Kolkata kitchen in hermetically sealed kraft packaging.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918250755958?text=Hello%20PuroBite!%20I'd%20like%20to%20order%20the%20Superfood%20Family%20Duo%20Pack%20(700g)%20with%20Free%20Shipping."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#b47919] hover:bg-[#996515] text-white text-xs font-semibold tracking-wide transition-colors whitespace-nowrap shadow-xs"
          >
            Order Duo & Get Free Delivery
          </a>
        </div>
      </div>
    </section>
  )
}
