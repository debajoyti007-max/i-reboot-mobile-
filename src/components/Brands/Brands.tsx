import { ShieldCheck, Sparkles } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

const brandLogos = [
  { name: "Apple iPhone", models: "15 Pro Max, 14, 13, 12, 11, X/SE", accent: "from-zinc-400 to-zinc-200" },
  { name: "Samsung Galaxy", models: "S24 Ultra, S23, Z Fold/Flip, A-Series", accent: "from-sky-400 to-blue-500" },
  { name: "Google Pixel", models: "Pixel 9 Pro, 8 Pro, 7A, 6 Pro", accent: "from-teal-400 to-emerald-500" },
  { name: "OnePlus", models: "OnePlus 12, 11, Open, Nord Series", accent: "from-red-400 to-rose-600" },
  { name: "Xiaomi / Redmi", models: "Xiaomi 14, 13 Pro, Note Series", accent: "from-orange-400 to-amber-500" },
  { name: "Vivo / iQOO", models: "X100 Pro, V30, iQOO 12 Series", accent: "from-blue-400 to-cyan-400" },
]

export default function Brands() {
  const { lang } = useLanguage()
  const t = translations[lang].brands

  return (
    <section id="brands" className="py-24 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {brandLogos.map((b) => (
            <div
              key={b.name}
              className="luxury-card rounded-2xl p-5 text-center flex flex-col justify-center items-center group cursor-default hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                OEM Genuine
              </div>
              <div className="font-extrabold text-base text-white group-hover:text-cyan-300 transition-colors">
                {b.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-1 line-clamp-1">
                {b.models}
              </div>
            </div>
          ))}
        </div>

        {/* Live Bench Testing Guarantee Banner */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-zinc-950/80 border border-zinc-800/80 p-4 sm:p-5 flex items-center justify-center gap-3.5 text-center backdrop-blur-xl shadow-xl">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-mono text-zinc-300">
            {t.guarantee}
          </span>
        </div>
      </div>
    </section>
  )
}
