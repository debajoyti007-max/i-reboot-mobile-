import { Phone, Mail, Heart, ArrowUp, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#030604] border-t border-amber-400/[0.12] pt-16 pb-28 md:pb-16 text-stone-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-400/35 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-serif-luxury tracking-tight leading-none">
                  Puro<span className="text-amber-300 italic">Bite</span>
                </span>
                <span className="block text-[8px] uppercase tracking-[0.25em] text-amber-200/70 font-display-brand mt-1">
                  Purity In Every Bite
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-light">
              Artisanal, slow-dehydrated Banana Chew handcrafted in Kolkata with 8 whole superfoods. Zero added cane sugar, zero preservatives, 100% whole-food botanical vitality.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-pink-500/15 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-stone-300 hover:text-pink-300 transition-all"
                title="Follow @eatpurobite on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-stone-300 hover:text-blue-300 transition-all"
                title="PuroBite on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/918250755958`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-stone-300 hover:text-emerald-300 transition-all"
                title="WhatsApp Us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-display-brand font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="text-stone-300 hover:text-amber-200 transition-colors">
                  Artisanal Banana Chew
                </a>
              </li>
              <li>
                <a href="#purity" className="text-stone-300 hover:text-amber-200 transition-colors">
                  The Purity Standard
                </a>
              </li>
              <li>
                <a href="#packs" className="text-stone-300 hover:text-amber-200 transition-colors">
                  Packs & Direct Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-300 hover:text-amber-200 transition-colors">
                  Kitchen Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Information */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-display-brand font-bold">
              Direct Kitchen Contacts
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PUROBITE_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href={PUROBITE_CONTACT.emailMailto}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PUROBITE_CONTACT.email}</span>
              </a>
              <div className="text-[11px] text-stone-400 pt-1">
                Kitchen Origin: Kolkata, West Bengal, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} PuroBite™ Foods. All rights reserved. Handcrafted in India.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-400">
              Crafted with <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> for clean living
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
