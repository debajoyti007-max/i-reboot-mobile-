import { Phone, Mail, Leaf, Heart, ArrowUp } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#020604] border-t border-emerald-900/30 pt-16 pb-28 md:pb-16 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600/30 via-amber-500/20 to-emerald-950/80 border border-emerald-500/40 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-2xl font-black text-white font-serif tracking-tight">
                  Puro<span className="text-amber-400">Bite</span>
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-stone-400">
                  Purity In Every Bite
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Artisanal, slow-dehydrated Banana Chew handcrafted in Kolkata with 8 whole superfoods. Zero added cane sugar, zero preservatives, 100% pure botanical vitality.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-stone-300 hover:text-pink-400 transition-colors"
                title="Follow @eatpurobite on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-stone-300 hover:text-blue-400 transition-colors"
                title="PuroBite on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/918250755958`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-stone-300 hover:text-emerald-400 transition-colors"
                title="WhatsApp Us"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Product & Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  Artisanal Banana Chew
                </a>
              </li>
              <li>
                <a href="#superfoods" className="hover:text-amber-300 transition-colors">
                  The 8 Superfoods
                </a>
              </li>
              <li>
                <a href="#nutrition" className="hover:text-amber-300 transition-colors">
                  Lab Nutritional Analysis
                </a>
              </li>
              <li>
                <a href="#packs" className="hover:text-amber-300 transition-colors">
                  Packs & Direct Dispatch
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-amber-300 transition-colors">
                  Slow-Dehydration Method
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  Customer Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Information */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
              Direct Kitchen Contacts
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
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
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <span>@eatpurobite</span>
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-blue-400 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Facebook / PuroBite</span>
              </a>
              <span className="block text-stone-400 text-[11px] pt-1">
                Kitchen Origin: Kolkata, West Bengal, India
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} PuroBite™ Foods. All rights reserved. Handcrafted in India.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for clean eating
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-amber-400 transition-colors"
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
