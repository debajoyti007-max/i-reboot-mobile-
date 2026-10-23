import { X, Trash2, Plus, Minus, MessageCircle, Phone, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react"
import { useCart } from "../../context/useCart"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    getWhatsAppOrderUrl,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col justify-between border-l border-[#e8e3d8] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#e8e3d8] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#eef6f1] text-[#193322] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900 font-serif-luxury leading-none">
                  Your Artisanal Basket
                </h3>
                <span className="text-[11px] text-stone-500 font-medium">
                  {items.length} {items.length === 1 ? "pack" : "packs"} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mb-3 text-stone-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-bold text-stone-800 font-serif-luxury mb-1">
                  Your basket is empty
                </h4>
                <p className="text-xs text-stone-500 max-w-xs mb-5 font-light">
                  Explore our handcrafted banana chew tubs made with whole almonds, cashews, and zero added cane sugar.
                </p>
                <a
                  href="#shop"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#193322] text-[#f7f3ea] text-xs font-semibold shadow-xs hover:bg-[#13271a] transition-colors"
                >
                  Explore Handcrafted Tubs
                </a>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.pack.id}
                  className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#e8e3d8] flex gap-3 shadow-xs"
                >
                  {/* Photo */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200/80">
                    <img
                      src={item.pack.image}
                      alt={item.pack.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-serif-luxury line-clamp-1">
                          {item.pack.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.pack.id)}
                          className="text-stone-400 hover:text-rose-500 transition-colors p-0.5 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#b47919] font-medium block">
                        {item.pack.weight}
                      </span>
                    </div>

                    {/* Price and Quantity Selector */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-bold text-stone-900 font-serif-luxury">
                        ₹{item.pack.price * item.quantity}
                      </span>

                      <div className="flex items-center gap-1.5 border border-stone-200 rounded-lg bg-stone-50 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.pack.id, item.quantity - 1)}
                          className="w-5 h-5 rounded hover:bg-white flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-stone-900 font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.pack.id, item.quantity + 1)}
                          className="w-5 h-5 rounded hover:bg-white flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#e8e3d8] space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between text-sm sm:text-base font-bold text-stone-900 font-serif-luxury">
                  <span>Product Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <p className="text-[11px] text-stone-500 font-light pt-1">
                  Courier delivery details and estimate confirmed directly upon WhatsApp order.
                </p>
              </div>

              {/* Checkout Action */}
              <div className="space-y-2 pt-1">
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-bold text-xs sm:text-sm tracking-wide shadow-xs transition-colors touch-press cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Confirm Order on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                  <a
                    href={PUROBITE_CONTACT.phoneTel}
                    className="flex items-center gap-1 hover:text-[#193322] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#b47919]" />
                    <span>Call: {PUROBITE_CONTACT.phoneDisplay}</span>
                  </a>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#193322]" />
                    <span>Kolkata Kitchen Fresh</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
