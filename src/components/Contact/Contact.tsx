import { Phone, MapPin, MessageCircle, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#faf8f5] border-b border-[#e8e3d8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full herbal-pill text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kolkata Kitchen Care</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury tracking-tight">
            Connect With Our <span className="text-[#b47919] italic font-serif">Kitchen</span>
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm font-light">
            We are based in Kolkata, West Bengal. Reach out directly for orders, delivery questions, or custom batches.
          </p>
        </div>

        {/* 3 Clean Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          {/* Phone */}
          <a
            href={PUROBITE_CONTACT.phoneTel}
            className="p-5 rounded-2xl bg-white border border-[#e8e3d8] text-center hover:border-[#b47919] transition-colors shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b47919] flex items-center justify-center mx-auto mb-3">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
              Call Hotline
            </span>
            <span className="text-sm font-bold text-stone-900 font-mono block mt-1">
              {PUROBITE_CONTACT.phoneDisplay}
            </span>
            <span className="text-[11px] text-emerald-700 block mt-1">Tap to call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918250755958?text=Hello%20PuroBite!%20I'd%20like%20to%20order%20handcrafted%20Banana%20Chew."
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-white border border-[#e8e3d8] text-center hover:border-[#193322] transition-colors shadow-2xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#193322] flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
              WhatsApp Concierge
            </span>
            <span className="text-sm font-bold text-stone-900 font-mono block mt-1">
              +91 82507 55958
            </span>
            <span className="text-[11px] text-emerald-700 block mt-1">Tap for instant chat</span>
          </a>

          {/* Location & Email */}
          <div className="p-5 rounded-2xl bg-white border border-[#e8e3d8] text-center shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
              Kitchen Origin
            </span>
            <span className="text-sm font-bold text-stone-900 block mt-1">
              {PUROBITE_CONTACT.location}
            </span>
            <a
              href={PUROBITE_CONTACT.emailMailto}
              className="text-[11px] text-[#b47919] hover:underline block mt-1 truncate"
            >
              {PUROBITE_CONTACT.email}
            </a>
          </div>
        </div>

        {/* Social Pill */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={PUROBITE_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e8e3d8] hover:border-stone-400 text-xs font-medium text-stone-700 transition-colors shadow-2xs"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow {PUROBITE_CONTACT.instagramHandle}</span>
          </a>
          <a
            href={PUROBITE_CONTACT.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e8e3d8] hover:border-stone-400 text-xs font-medium text-stone-700 transition-colors shadow-2xs"
          >
            <FacebookIcon className="w-4 h-4" />
            <span>Facebook: PuroBite</span>
          </a>
        </div>
      </div>
    </section>
  )
}
