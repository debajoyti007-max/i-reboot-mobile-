import { Phone, Mail, MapPin, MessageCircle, Sparkles, ExternalLink } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Contact() {
  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite team! I'd like to inquire about ordering Banana Chew."
  )}`

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Kolkata Kitchen Concierge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            Connect With Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              Artisanal Kitchen
            </span>
          </h2>

          <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md font-light">
            We are based in Kolkata, West Bengal. Reach out directly for personal orders, dietary queries, or corporate gifting batches.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Hotline */}
          <a
            href={PUROBITE_CONTACT.phoneTel}
            className="glass-panel-luxury p-6 rounded-3xl flex items-center gap-4 hover:border-amber-400/40 group transition-all touch-press"
          >
            <div className="w-13 h-13 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 shadow-[0_0_20px_rgba(229,193,121,0.2)] group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-[10px] font-display-brand uppercase tracking-[0.2em] text-amber-200/70 font-bold block">
                Direct Hotline
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-amber-300 transition-colors">
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
            className="glass-panel-luxury p-6 rounded-3xl flex items-center gap-4 hover:border-emerald-400/40 group transition-all touch-press"
          >
            <div className="w-13 h-13 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0 shadow-[0_0_20px_rgba(52,211,153,0.2)] group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-display-brand uppercase tracking-[0.2em] text-emerald-200/70 font-bold block">
                Instant WhatsApp
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                +91 82507 55958
              </span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Quick orders & inquiries</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={PUROBITE_CONTACT.emailMailto}
            className="glass-panel-luxury p-6 rounded-3xl flex items-center gap-4 hover:border-amber-400/40 group transition-all touch-press"
          >
            <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-display-brand uppercase tracking-[0.2em] text-stone-400 font-bold block">
                Official Kitchen Email
              </span>
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
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
            className="glass-panel-luxury p-6 rounded-3xl flex items-center gap-4 hover:border-pink-500/40 group transition-all touch-press"
          >
            <div className="w-13 h-13 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300 shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-display-brand uppercase tracking-[0.2em] text-stone-400 font-bold block">
                Instagram
              </span>
              <span className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                {PUROBITE_CONTACT.instagramHandle}
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5">Behind-the-scenes stories</span>
            </div>
          </a>
        </div>

        {/* Location & Facebook Strip */}
        <div className="mt-5 p-5 rounded-3xl glass-pill flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Kitchen Origin: <strong className="text-white">Kolkata, West Bengal, India</strong></span>
          </div>

          <a
            href={PUROBITE_CONTACT.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors font-medium"
          >
            <FacebookIcon className="w-4 h-4" />
            <span>Connect on Facebook</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
