import { Phone, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Contact() {
  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite team! I'd like to inquire about ordering Banana Chew."
  )}`

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
            Contact The <span className="text-amber-300">PuroBite Kitchen</span>
          </h2>
          <p className="mt-2 text-stone-400 text-xs sm:text-sm leading-relaxed">
            Reach out directly for retail orders, custom dietary batches, or corporate inquiries.
          </p>
        </div>

        {/* Contact Grid (Mobile-First Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Hotline */}
          <a
            href={PUROBITE_CONTACT.phoneTel}
            className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-amber-400/40 group transition-all touch-press"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                Direct Hotline
              </span>
              <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {PUROBITE_CONTACT.phoneDisplay}
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Tap to call directly</span>
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-emerald-400/40 group transition-all touch-press"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                Instant WhatsApp
              </span>
              <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                +91 82507 55958
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Quick order & inquiries</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={PUROBITE_CONTACT.emailMailto}
            className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-amber-400/40 group transition-all touch-press"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                Official Email
              </span>
              <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                {PUROBITE_CONTACT.email}
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Inquiries & Partnerships</span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={PUROBITE_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-pink-500/40 group transition-all touch-press"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300 shrink-0">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block">
                Instagram
              </span>
              <span className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                {PUROBITE_CONTACT.instagramHandle}
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Follow our clean kitchen</span>
            </div>
          </a>
        </div>

        {/* Location & Facebook Strip */}
        <div className="mt-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Kitchen Origin: <strong>Kolkata, West Bengal, India</strong></span>
          </div>

          <a
            href={PUROBITE_CONTACT.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-stone-300 hover:text-blue-300 transition-colors"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
            <span>PuroBite on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}
