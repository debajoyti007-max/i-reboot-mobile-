import { Phone, MessageCircle } from "lucide-react"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function FloatingDock() {
  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order handcrafted Banana Chew."
  )}`

  return (
    <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-2xl bg-[#141b16]/95 backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-2 max-w-[95%]">
      {/* Call Hotline */}
      <a
        href={PUROBITE_CONTACT.phoneTel}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 text-stone-200 text-xs font-medium"
      >
        <Phone className="w-3.5 h-3.5 text-[#d4a961]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Order */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b47919] hover:bg-[#996515] text-white text-xs font-bold shadow-xs"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  )
}
