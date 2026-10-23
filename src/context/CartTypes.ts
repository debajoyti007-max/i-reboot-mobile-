import { createContext } from "react"
import { type ProductPack } from "../data/purobiteData"

export interface CartItem {
  pack: ProductPack
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (pack: ProductPack, quantity?: number) => void
  updateQuantity: (packId: string, quantity: number) => void
  removeFromCart: (packId: string) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  totalCount: number
  subtotal: number
  freeShippingRemaining: number
  isFreeShipping: boolean
  getWhatsAppOrderUrl: () => string
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
