import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Sparkles, ShieldCheck } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Contact() {
  const [name, setName] = useState("")
  const [packChoice, setPackChoice] = useState("Signature Gourmet Tub (350g)")
  const [note, setNote] = useState("")

  const handleCustomOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello PuroBite! My name is ${name || "Customer"}. I'm interested in ordering: ${packChoice}.${
      note ? ` Note: ${note}` : ""
    }`
    window.open(`https://wa.me/918250755958?text=${encodeURIComponent(msg)}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Kolkata Kitchen Concierge</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
                Connect With Our <br />
                <span className="text-[#b47919] italic font-serif">Artisanal Kitchen</span>
              </h2>

              <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                We are proudly based in Kolkata, West Bengal. Reach out directly for personalized orders, corporate gifting, or wholesale inquiries.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-3">
              {/* Phone Hotline */}
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex items-center gap-3.5 hover:border-[#b47919] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#b47919] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
                    Direct Kitchen Hotline
                  </span>
                  <span className="text-sm sm:text-base font-bold text-stone-900 font-mono">
                    {PUROBITE_CONTACT.phoneDisplay}
                  </span>
                  <span className="text-[11px] text-emerald-700 block">Tap to call directly</span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/918250755958?text=${encodeURIComponent(
                  "Hello PuroBite! I'd like to order handcrafted Banana Chew."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex items-center gap-3.5 hover:border-[#193322] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#193322] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
                    WhatsApp Concierge
                  </span>
                  <span className="text-sm sm:text-base font-bold text-stone-900 font-mono">
                    +91 82507 55958
                  </span>
                  <span className="text-[11px] text-emerald-700 block">Instant chat & order confirmation</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={PUROBITE_CONTACT.emailMailto}
                className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex items-center gap-3.5 hover:border-[#b47919] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
                    Official Kitchen Email
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">
                    {PUROBITE_CONTACT.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
                    Kitchen Origin
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-stone-900">
                    {PUROBITE_CONTACT.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: {PUROBITE_CONTACT.instagramHandle}</span>
              </a>

              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Order / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#faf8f5] border border-[#e8e3d8] shadow-xs">
              <div className="border-b border-[#e8e3d8] pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-wider text-[#b47919] font-mono font-bold block">
                  Fast Direct Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-luxury mt-0.5">
                  Send A Message To Our Kitchen
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Fill in your details below to instantly start an order chat with our Kolkata kitchen master.
                </p>
              </div>

              <form onSubmit={handleCustomOrder} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e8e3d8] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#b47919]"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                    Pack of Interest
                  </label>
                  <select
                    value={packChoice}
                    onChange={(e) => setPackChoice(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e8e3d8] text-sm text-stone-900 focus:outline-none focus:border-[#b47919]"
                  >
                    <option value="Signature Gourmet Tub (350g) - ₹399">
                      Signature Gourmet Tub (350g) — ₹399 [Bestseller]
                    </option>
                    <option value="Superfood Family Duo Pack (700g) - ₹749">
                      Superfood Family Duo Pack (700g) — ₹749 [Free Shipping]
                    </option>
                    <option value="Artisanal Discovery Tub (200g) - ₹249">
                      Artisanal Discovery Tub (200g) — ₹249
                    </option>
                    <option value="Custom Bulk / Corporate Gifting Batch">
                      Custom Bulk / Corporate Gifting Batch
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                    Delivery Address or Special Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter your delivery city or special requests..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e8e3d8] text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#b47919]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] font-semibold text-xs sm:text-sm tracking-wide shadow-xs transition-colors touch-press cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Order Inquiry via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Privacy • No spam • Direct communication with kitchen team</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
