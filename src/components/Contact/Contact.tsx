import { useState, type FormEvent } from "react"
import { MapPin, Phone, MessageSquare, Clock, Send } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  const [customerName, setCustomerName] = useState("")
  const [deviceModel, setDeviceModel] = useState("")
  const [issueSummary, setIssueSummary] = useState("")

  const handleDispatch = (e: FormEvent) => {
    e.preventDefault()
    const text = `Hello I REBOOT, my name is ${customerName || "Customer"}. I have a ${deviceModel || "Smartphone"} with this problem: ${issueSummary || "repair inquiry"}. Please let me know the quote and when I can visit 5A Lenin Sarani.`
    window.open(`https://wa.me/918697323726?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/20 text-xs font-mono text-sky-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Shop Location & Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="luxury-card rounded-3xl p-6 sm:p-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 shadow-lg shadow-sky-950/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{t.addressTitle}</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-1">
                    {t.address1}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-cyan-300 mt-0.5">
                    {t.address2}
                  </div>
                  <div className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                    {t.landmark}
                  </div>
                </div>
              </div>

              {/* Timing & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">{t.hoursTitle}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">{t.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">{t.callTitle}</div>
                    <a href="tel:8697323726" className="text-xs sm:text-sm font-semibold text-cyan-300 hover:underline mt-0.5 block">
                      {t.callNumber}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="tel:8697323726"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: +91 86973 23726</span>
                </a>
                <a
                  href="https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20am%20coming%20to%20your%205A%20Lenin%20Sarani%20service%20centre."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-xs font-mono font-medium text-white transition-all shadow-lg shadow-sky-950/50"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappLabel}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="luxury-card rounded-3xl overflow-hidden h-64 border border-zinc-800/80 shadow-xl">
              <iframe
                title="I REBOOT Mobile Service Centre Map"
                src="https://maps.google.com/maps?q=5A%20Lenin%20Sarani%20Rd%2C%20Esplanade%2C%20Dharmatala%2C%20Taltala%2C%20Kolkata%20700013&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Problem Dispatcher Form */}
          <div className="lg:col-span-6">
            <div className="luxury-card rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-2xl">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    Direct WhatsApp dispatch to technician bench
                  </p>
                </div>
              </div>

              <form onSubmit={handleDispatch} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sen"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    {t.modelLabel}
                  </label>
                  <input
                    type="text"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. iPhone 14 Pro / Samsung S23"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    {t.issueLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={issueSummary}
                    onChange={(e) => setIssueSummary(e.target.value)}
                    placeholder="e.g. Screen glass cracked, touch working fine, need quote."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-medium text-xs font-mono tracking-wider transition-all shadow-xl shadow-sky-950/60 hover:shadow-sky-600/30 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.submitBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
