import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Sparkles } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    packPreference: "Signature Gourmet Tub (350g) - ₹399",
    city: "Kolkata",
    message: "",
  })
  const [submittedVia, setSubmittedVia] = useState<string | null>(null)

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello PuroBite!%0A• Name: ${formData.name || "Customer"}%0A• Phone: ${formData.phone || "Not provided"}%0A• Selected Pack: ${formData.packPreference}%0A• Delivery City: ${formData.city}%0A• Note: ${formData.message || "Please share availability and dispatch time."}`
    window.open(`https://wa.me/918250755958?text=${text}`, "_blank")
    setSubmittedVia("whatsapp")
  }

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`PuroBite Order Inquiry - ${formData.packPreference}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nPack: ${formData.packPreference}\nCity: ${formData.city}\nMessage: ${formData.message}`
    )
    window.location.href = `mailto:${PUROBITE_CONTACT.email}?subject=${subject}&body=${body}`
    setSubmittedVia("email")
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect Directly With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Get In Touch With <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              The PuroBite Kitchen.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Have questions about bulk orders, corporate gifting, custom dietary batches, or direct retail dispatch in Kolkata and across India? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: 4 Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Phone Card */}
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="glass-panel p-6 rounded-3xl flex items-center gap-5 hover:border-amber-400/50 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                  Phone & Direct Orders
                </span>
                <span className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {PUROBITE_CONTACT.phoneDisplay}
                </span>
                <span className="text-[11px] text-emerald-400 mt-0.5">Click to call immediately</span>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={PUROBITE_CONTACT.emailMailto}
              className="glass-panel p-6 rounded-3xl flex items-center gap-5 hover:border-emerald-400/50 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                  Official Email
                </span>
                <span className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors break-all">
                  {PUROBITE_CONTACT.email}
                </span>
                <span className="text-[11px] text-stone-400 mt-0.5">Inquiries & Corporate Gifting</span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={PUROBITE_CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 rounded-3xl flex items-center gap-5 hover:border-pink-500/50 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                  Instagram
                </span>
                <span className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {PUROBITE_CONTACT.instagramHandle}
                </span>
                <span className="text-[11px] text-stone-400 mt-0.5">Follow our daily clean kitchen stories</span>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href={PUROBITE_CONTACT.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-panel p-6 rounded-3xl flex items-center gap-5 hover:border-blue-500/50 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <FacebookIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                  Facebook Community
                </span>
                <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  PuroBite Official
                </span>
                <span className="text-[11px] text-stone-400 mt-0.5">Join our clean snack movement</span>
              </div>
            </a>

            {/* Location & Hours Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-stone-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Handcrafted in <strong>Kolkata, West Bengal, India</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Operating Hours: <strong>{PUROBITE_CONTACT.hours}</strong></span>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Direct Order / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-emerald rounded-3xl p-7 sm:p-9 shadow-2xl relative">
              <div className="border-b border-white/10 pb-5 mb-6">
                <h3 className="text-2xl font-black text-white font-serif">
                  Quick Dispatch / Inquiry Request
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Fill in your details below to instantly dispatch your inquiry via WhatsApp or Email.
                </p>
              </div>

              {submittedVia && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Your inquiry has been compiled! Opening {submittedVia === "whatsapp" ? "WhatsApp" : "Email"}...
                  </span>
                </div>
              )}

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanshu Sen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Pack of Interest
                    </label>
                    <select
                      value={formData.packPreference}
                      onChange={(e) => setFormData({ ...formData, packPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Signature Gourmet Tub (350g) - ₹399">
                        Signature Gourmet Tub (350g) - ₹399 [Bestseller]
                      </option>
                      <option value="Superfood Family Duo Pack (700g) - ₹749">
                        Superfood Family Duo Pack (700g) - ₹749 [Save ₹149]
                      </option>
                      <option value="Artisanal Discovery Tub (200g) - ₹249">
                        Artisanal Discovery Tub (200g) - ₹249
                      </option>
                      <option value="Bulk Corporate / Custom Gifting Order">
                        Bulk Corporate / Custom Gifting Order
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Delivery City / Pin Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kolkata, 700091"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Specific Dietary Requests or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Please confirm delivery timeline for Salt Lake, or dispatch 2 gift packs."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Dual Dispatch Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-stone-950 font-black text-xs tracking-wider uppercase shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-stone-950" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-stone-200 hover:text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-stone-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Immediate human response from our culinary team in Kolkata</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
