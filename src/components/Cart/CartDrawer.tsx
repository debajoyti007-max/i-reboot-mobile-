import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle, Phone, Sparkles, CheckCircle2, Truck } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalPrice,
    freeShippingThreshold,
    amountForFreeShipping,
  } = useCart()

  if (!isCartOpen) return null

  const isFreeShipping = totalPrice >= freeShippingThreshold
  const shippingCost = isFreeShipping ? 0 : 49
  const finalPayable = totalPrice + (totalCount > 0 ? shippingCost : 0)

  // Generate clean formatted WhatsApp receipt
  const buildWhatsAppOrder = () => {
    if (cart.length === 0) return ""

    let text = `*PUROBITE ARTISANAL ORDER INVOICE*%0A`
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━%0A`
    cart.forEach((item) => {
      text += `• ${item.quantity}x ${item.name} (${item.weight})%0A   ₹${item.price} each = *₹${
        item.price * item.quantity
      }*%0A`
    })
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━%0A`
    text += `*Subtotal:* ₹${totalPrice}%0A`
    text += `*Express Delivery:* ${isFreeShipping ? "FREE (Kolkata Metro)" : `₹${shippingCost}`}%0A`
    text += `*Total Amount Payable:* *₹${finalPayable}*%0A`
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━%0A`
    text += `*Delivery Details Required:*%0A`
    text += `Name:%0AAddress & Pin code:%0APreferred Payment: (UPI / GPay / COD)%0A%0A`
    text += `_Please confirm availability and dispatch window. Thank you!_`

    return `https://wa.me/918250755958?text=${text}`
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#040c08] border-l border-emerald-900/40 text-stone-100 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-stone-950/40">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-black text-lg text-white">Your Artisanal Bag</h3>
                <span className="text-[11px] text-stone-400">
                  {totalCount} {totalCount === 1 ? "item" : "items"} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar (VNPR Foods style benefit) */}
          <div className="p-4 bg-emerald-950/30 border-b border-emerald-900/30">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="flex items-center gap-1.5 text-stone-300 font-medium">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                {isFreeShipping ? (
                  <span className="text-emerald-400 font-bold">
                    🎉 Free Express Delivery Unlocked!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-amber-400">₹{amountForFreeShipping}</strong> more for Free Delivery
                  </span>
                )}
              </span>
              <span className="text-[10px] text-stone-400 font-mono">Goal: ₹{freeShippingThreshold}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, (totalPrice / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-stone-500 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-lg text-white mb-1">Your bag is empty</h4>
                <p className="text-xs text-stone-400 max-w-xs mb-6">
                  Add our handcrafted Banana Chew gourmet packs to experience 100% natural superfood fuel.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs"
                >
                  Explore Gourmet Packs
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5 hover:border-amber-400/30 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-stone-900 border border-white/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-bold text-sm text-white truncate">
                      {item.name}
                    </h5>
                    <span className="text-[11px] text-amber-300/80 block">{item.weight}</span>
                    <span className="text-xs font-extrabold text-white mt-1 block">
                      ₹{item.price * item.quantity}{" "}
                      <span className="text-[10px] text-stone-400 font-normal">
                        (₹{item.price} each)
                      </span>
                    </span>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-500 hover:text-red-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-black/50 border border-white/10">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-0.5 text-stone-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-0.5 text-stone-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-stone-950/80 backdrop-blur-xl flex flex-col gap-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-white">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>Express Dispatch</span>
                  <span className={isFreeShipping ? "text-emerald-400 font-bold" : "text-white"}>
                    {isFreeShipping ? "FREE" : `₹${shippingCost}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-black text-white">
                  <span>Total Payable</span>
                  <span className="text-amber-400 text-base">₹{finalPayable}</span>
                </div>
              </div>

              {/* Direct WhatsApp Checkout Button */}
              <a
                href={buildWhatsAppOrder()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950 text-stone-950" />
                <span>Checkout via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Phone Call backup */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-stone-400">
                <a
                  href={PUROBITE_CONTACT.phoneTel}
                  className="flex items-center gap-1.5 hover:text-amber-300"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
                </a>
                <button
                  onClick={clearCart}
                  className="text-stone-500 hover:text-red-400 transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              {/* Trust Tag */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5 text-[10px] text-stone-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  UPI / GPay / COD
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Freshly Sealed Batch
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
