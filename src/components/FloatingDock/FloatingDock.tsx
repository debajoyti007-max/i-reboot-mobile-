import { MessageSquare, Phone } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function FloatingDock() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <aside
      aria-label="Quick contact dock"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 p-1.5 rounded-full bg-zinc-950/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/90"
    >
      {/* Live bench status pill */}
      <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 py-1 text-[11px] font-mono text-zinc-300">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>{t.dock.status}</span>
      </div>

      {/* Direct Call Button */}
      <a
        href="tel:8697323726"
        className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-cyan-400 flex items-center justify-center transition-all hover:scale-105"
        title="Direct Call to I REBOOT: 8697323726"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20am%20inquiring%20about%20a%20smartphone%20repair%20at%205A%20Lenin%20Sarani."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-mono font-medium shadow-lg shadow-sky-950/60 hover:shadow-sky-600/30 transition-all hover:scale-105"
        title="WhatsApp I REBOOT"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">{t.dock.wa}</span>
      </a>
    </aside>
  )
}
