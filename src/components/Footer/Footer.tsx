import { Phone, Mail, MapPin, MessageCircle, Heart, ShieldCheck } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Footer() {
  return (
    <footer className="bg-[#141b16] text-[#e8f1eb] pt-14 pb-12 border-t border-[#233127]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eef6f1] text-[#193322] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                PB
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white font-serif-luxury leading-none">
                  Puro<span className="text-[#d4a961] italic">Bite</span>
                  <span className="text-xs text-stone-400 font-sans ml-1">™</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#a4b8ac] font-medium mt-1">
                  Handcrafted Banana Chew
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-sm">
              Artisanal confectionery made from slow-dehydrated ripe Cavendish bananas, California almonds, whole cashews, and seven superfood seeds. 0g added cane sugar, zero preservatives.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PUROBITE_CONTACT.fssaiInfo}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a961] font-mono mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Shop Tubs
                </a>
              </li>
              <li>
                <a href="#purity" className="hover:text-white transition-colors">
                  The Purity Standard
                </a>
              </li>
              <li>
                <a href="#superfoods" className="hover:text-white transition-colors">
                  8 Whole Superfoods
                </a>
              </li>
              <li>
                <a href="#sensory" className="hover:text-white transition-colors">
                  Tasting Notes
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Kolkata Kitchen Story
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Order */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a961] font-mono mb-4">
              Kolkata Kitchen Care
            </h4>
            <ul className="space-y-3 text-xs text-stone-300 font-light">
              <li>
                <a
                  href={PUROBITE_CONTACT.phoneTel}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4a961] shrink-0" />
                  <span className="font-mono">{PUROBITE_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918250755958"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WhatsApp: +91 82507 55958</span>
                </a>
              </li>
              <li>
                <a
                  href={PUROBITE_CONTACT.emailMailto}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4a961] shrink-0" />
                  <span>{PUROBITE_CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{PUROBITE_CONTACT.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Policies */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a961] font-mono mb-4">
              Follow & Policies
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                title="Follow Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                title="Follow Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-1.5 text-[11px] text-stone-400 font-light">
              <p>• 24–48 Hour Dispatch Across India</p>
              <p>• Free Express Delivery over ₹699</p>
              <p>• Airtight Recyclable Kraft Tubs (6 Months Fresh)</p>
              <p>• Returns accepted for transit-damaged tubs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 text-center sm:text-left font-light">
          <div>
            © {new Date().getFullYear()} {PUROBITE_CONTACT.brandName} • All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>in Kolkata, West Bengal, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
