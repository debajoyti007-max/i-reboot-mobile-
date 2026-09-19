import HeroPhoneShowcase from "./HeroPhoneShowcase"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section id="top" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clean & Confident Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-md shadow-lg shadow-black/60">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{t.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              {t.titleMain} <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                {t.titleAccent}
              </span>
            </h1>

            {/* Human subhead */}
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mb-8 max-w-lg">
              {t.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20have%20a%20smartphone%20problem.%20Can%20you%20give%20me%20a%20quote%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-medium text-xs font-mono tracking-wide transition-all shadow-xl shadow-sky-950/60 hover:shadow-sky-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.btnWhatsapp}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:8697323726"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{t.btnCall}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Smartphone Showcase */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <HeroPhoneShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
