import { useState, useEffect } from "react"
import { Phone, MessageSquare, Menu, X, Globe } from "lucide-react"
import { useLanguage, type Language } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: t.services, href: "#services" },
    { label: t.estimator, href: "#estimator" },
    { label: t.brands, href: "#brands" },
    { label: t.contact, href: "#contact" },
  ]

  const languages: { code: Language; label: string }[] = [
    { code: "bn", label: "বাংলা" },
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06070a]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={`${base}/logo.svg`}
            alt="I REBOOT Logo"
            className="w-10 h-10 object-contain filter drop-shadow-[0_0_12px_rgba(14,165,233,0.4)] group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              <span>{t.brandName}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              {t.brandTag}
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Lang Switcher + Call + WA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono backdrop-blur-md">
            <Globe className="w-3.5 h-3.5 text-zinc-400 ml-1.5 hidden sm:inline" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  lang === l.code
                    ? "bg-cyan-600 text-white font-bold shadow-md shadow-cyan-950"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                title={`Switch to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Direct Call Button */}
          <a
            href="tel:8697323726"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-xs font-mono text-zinc-200 border border-zinc-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.call}</span>
          </a>

          {/* Direct WhatsApp CTA */}
          <a
            href="https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20need%20to%20get%20my%20smartphone%20repaired%20at%20your%20Lenin%20Sarani%20service%20centre."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-mono font-medium shadow-lg shadow-sky-950/50 hover:shadow-sky-600/30 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.whatsapp}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-5 py-6 space-y-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-mono text-zinc-300 hover:text-cyan-400 py-2 border-b border-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href="tel:8697323726"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{t.call}: +91 86973 23726</span>
            </a>
            <a
              href="https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20want%20to%20inquire%20about%20mobile%20repair."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white text-xs font-mono font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
