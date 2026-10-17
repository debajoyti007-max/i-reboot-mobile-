import { Phone, MessageCircle, ShoppingBag, Sparkles } from "lucide-react"
import { InstagramIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function FloatingDock() {
  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew artisanal snack pack."
  )}`

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-stone-950/85 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.85)] flex items-center gap-2 sm:gap-3">
      {/* Quick Call */}
      <a
        href={PUROBITE_CONTACT.phoneTel}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-200 text-xs font-semibold border border-white/10 transition-colors"
        title="Call PuroBite"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Call Us</span>
      </a>

      {/* Instagram */}
      <a
        href={PUROBITE_CONTACT.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full bg-white/5 hover:bg-pink-500/10 text-stone-200 hover:text-pink-400 text-xs font-semibold border border-white/10 transition-colors"
        title="Follow @eatpurobite"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>

      {/* Jump to Packs */}
      <a
        href="#packs"
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-emerald-950/40 text-stone-200 hover:text-emerald-300 text-xs font-semibold border border-white/10 transition-colors"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
        <span>View Packs</span>
      </a>

      {/* Instant WhatsApp Order Primary CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 text-stone-950 font-extrabold text-xs tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-stone-950 text-stone-950" />
        <span>Order WhatsApp</span>
        <Sparkles className="w-3 h-3 text-stone-950 hidden sm:inline" />
      </a>
    </div>
  )
}
