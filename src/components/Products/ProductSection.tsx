import { useState } from "react"
import { Check, MessageCircle, Sparkles, QrCode } from "lucide-react"
import { PRODUCT_PACKS, type ProductPack } from "../../data/purobiteData"
import UPIPaymentModal from "../Payment/UPIPaymentModal"

export default function ProductSection() {
  const [selectedPackForUPI, setSelectedPackForUPI] = useState<ProductPack | null>(null)

  return (
    <section id="pricing" className="py-14 sm:py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full herbal-pill text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Handcrafted In Kolkata</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Choose Your <span className="text-[#b47919] italic font-serif">Fresh Tub</span>
          </h2>

          <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
            Batch-crafted to order in Kolkata. Sealed in airtight recyclable kraft packaging. Order directly on WhatsApp or pay instantly via UPI.
          </p>
        </div>

        {/* 3 Clear Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 items-stretch">
          {PRODUCT_PACKS.map((pack) => {
            const isSignature = pack.recommended

            const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
              `Hello PuroBite! I'd like to order: 1x ${pack.name} (${pack.weight}) for ₹${pack.price}. Please confirm delivery details for my address.`
            )}`

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all ${
                  isSignature
                    ? "bg-white border-2 border-[#b47919] shadow-md -translate-y-1"
                    : "bg-white border border-[#e8e3d8] shadow-xs"
                }`}
              >
                {/* Badge */}
                {pack.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xs ${
                      isSignature
                        ? "bg-[#193322] text-[#f7f3ea]"
                        : "bg-amber-100 text-amber-900 border border-amber-300"
                    }`}
                  >
                    {pack.badge}
                  </div>
                )}

                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 mb-4 border border-stone-200">
                    <img
                      src={pack.image}
                      alt={pack.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Weight */}
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 font-serif-luxury">
                      {pack.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#b47919] block mt-0.5">
                      {pack.weight} • {pack.servingInfo}
                    </span>
                  </div>

                  {/* Transparent Price */}
                  <div className="flex items-baseline gap-2 my-3">
                    <span className="text-3xl font-bold text-stone-900 font-serif-luxury">
                      ₹{pack.price}
                    </span>
                    <span className="text-xs text-stone-500 font-light">
                      per tub
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-xs leading-relaxed font-light mb-4">
                    {pack.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-1.5 py-3 border-t border-b border-stone-100 mb-5">
                    {pack.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2 Clear Action Buttons: WhatsApp & UPI Pay */}
                <div className="space-y-2 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs tracking-wide shadow-xs transition-colors touch-press cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedPackForUPI(pack)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-xs tracking-wide shadow-2xs transition-colors touch-press cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-[#b47919]" />
                    <span>Pay via UPI / QR (₹{pack.price})</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* UPI Payment Modal */}
      <UPIPaymentModal
        pack={selectedPackForUPI}
        onClose={() => setSelectedPackForUPI(null)}
      />
    </section>
  )
}
