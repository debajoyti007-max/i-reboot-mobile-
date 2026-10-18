import { Phone, MessageCircle, Sparkles, Package } from "lucide-react"
import { InstagramIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function FloatingDock() {
  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#050a07]/92 backdrop-blur-2xl border border-amber-400/[0.22] shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex items-center gap-2 sm:gap-3">
      {/* Quick Call */}
      <a
        href={PUROBITE_CONTACT.phoneTel}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-stone-200 text-xs font-medium border border-white/10 transition-colors"
        title="Call Kitchen Hotline"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline font-mono text-[11px]">{PUROBITE_CONTACT.phoneDisplay}</span>
      </a>

      {/* Instagram */}
      <a
        href={PUROBITE_CONTACT.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full bg-white/[0.04] hover:bg-pink-500/15 text-stone-200 hover:text-pink-300 text-xs font-semibold border border-white/10 transition-colors"
        title="Follow @eatpurobite"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>

      {/* View Packs */}
      <a
        href="#packs"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-stone-200 hover:text-amber-300 text-xs font-medium border border-white/10 transition-colors"
      >
        <Package className="w-3.5 h-3.5 text-amber-400" />
        <span>Packs</span>
      </a>

      {/* WhatsApp Order CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 font-bold text-xs tracking-wider shadow-[0_4px_15px_rgba(229,193,121,0.35)] hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span className="font-extrabold uppercase text-[11px]">Order WhatsApp</span>
        <Sparkles className="w-3 h-3 text-stone-950 hidden sm:inline" />
      </a>
    </div>
  )
}
