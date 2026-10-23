import { useState, useEffect, type ReactNode } from "react"
import { type ProductPack, PUROBITE_CONTACT } from "../data/purobiteData"
import { CartContext, type CartItem } from "./CartTypes"

const CART_STORAGE_KEY = "purobite_cart_v1"

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {
      // fallback
    }
    return []
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addToCart = (pack: ProductPack, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.pack.id === pack.id)
      if (existing) {
        return prev.map((i) =>
          i.pack.id === pack.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { pack, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (packId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(packId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.pack.id === packId ? { ...i, quantity } : i))
    )
  }

  const removeFromCart = (packId: string) => {
    setItems((prev) => prev.filter((i) => i.pack.id !== packId))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.pack.price * item.quantity, 0)
  const freeShippingThreshold = PUROBITE_CONTACT.freeShippingThreshold
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal)
  const isFreeShipping = subtotal >= freeShippingThreshold

  const getWhatsAppOrderUrl = () => {
    if (items.length === 0) {
      return `https://wa.me/918250755958?text=${encodeURIComponent(
        "Hello PuroBite! I'd like to inquire about your handcrafted Banana Chew tubs."
      )}`
    }

    const itemsList = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.pack.name} (${item.pack.weight}) @ ₹${item.pack.price} = ₹${
            item.pack.price * item.quantity
          }`
      )
      .join("\n")

    const shippingText = isFreeShipping
      ? "FREE Express Delivery (Orders over ₹699)"
      : "Standard Courier (₹49)"

    const totalPayable = isFreeShipping ? subtotal : subtotal + 49

    const message = `🌿 *PuroBite™ Handcrafted Order Request* 🌿\n\n*Items Ordered:*\n${itemsList}\n\n*Subtotal:* ₹${subtotal}\n*Shipping:* ${shippingText}\n*Estimated Total:* ₹${totalPayable}\n\n-------------------------\n*Delivery Details:*\nFull Name: \nDelivery Address: \nCity & Pincode: \nContact Phone: \n\nPlease confirm my batch order & delivery estimate! Thank you!`

    return `https://wa.me/918250755958?text=${encodeURIComponent(message)}`
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        subtotal,
        freeShippingRemaining,
        isFreeShipping,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
