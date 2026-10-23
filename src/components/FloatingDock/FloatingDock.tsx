import { Phone, ShoppingBag, Package } from "lucide-react"
import { InstagramIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"
import { useCart } from "../../context/useCart"

export default function FloatingDock() {
  const { totalCount, setIsCartOpen } = useCart()

  return (
    <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl bg-[#141b16]/95 backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-2 max-w-[95%]">
      {/* Call Hotline */}
      <a
        href={PUROBITE_CONTACT.phoneTel}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-stone-200 text-xs font-medium"
        title="Call Hotline"
      >
        <Phone className="w-3.5 h-3.5 text-[#d4a961]" />
        <span className="text-[11px] font-mono">Call</span>
      </a>

      {/* Instagram */}
      <a
        href={PUROBITE_CONTACT.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-xl bg-white/10 text-stone-200 text-xs"
        title="Instagram"
      >
        <InstagramIcon className="w-3.5 h-3.5" />
      </a>

      {/* View Shop */}
      <a
        href="#shop"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-stone-200 text-xs font-medium"
      >
        <Package className="w-3.5 h-3.5 text-[#d4a961]" />
        <span className="text-[11px]">Tubs</span>
      </a>

      {/* Basket Trigger with live counter */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#b47919] hover:bg-[#996515] text-white text-xs font-bold shadow-xs cursor-pointer"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span className="text-[11px]">Basket</span>
        {totalCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-white text-[#b47919] text-[10px] font-bold flex items-center justify-center">
            {totalCount}
          </span>
        )}
      </button>
    </div>
  )
}
