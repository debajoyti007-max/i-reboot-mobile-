import { ArrowUp, Phone, MessageSquare } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#040507] border-t border-zinc-800/80 pt-12 pb-10 text-zinc-400 font-sans text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <img
                src={`${base}/logo.svg`}
                alt="I REBOOT"
                className="w-8 h-8 object-contain filter drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]"
              />
              <span className="font-extrabold text-white text-base tracking-tight">
                I REBOOT
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-cyan-400 font-mono">
                MOBILE SERVICE CENTRE
              </span>
            </div>
            <p className="text-zinc-400 text-xs font-mono">
              {t.contact.address1}, {t.contact.address2}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:8697323726"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>8697323726</span>
            </a>
            <a
              href="https://wa.me/918697323726"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-sky-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.dock.wa}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} I REBOOT. {t.footer.copy}
          </div>
          <div className="text-zinc-500">
            Kolkata Smartphone Engineering Lab
          </div>
        </div>
      </div>
    </footer>
  )
}
