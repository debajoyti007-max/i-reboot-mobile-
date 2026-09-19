import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang].services
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  // Real hardware cutouts with color accents and tech specs
  const serviceHardwareMeta: Record<
    string,
    { image: string; badge: string; glow: string; borderAccent: string }
  > = {
    oled: {
      image: `${base}/oled_screen_ultra.png`,
      badge: "OCA Vacuum Chamber Lamination",
      glow: "rgba(14, 165, 233, 0.22)",
      borderAccent: "group-hover:border-sky-500/40",
    },
    logic: {
      image: `${base}/smartphone_logic_ultra.png`,
      badge: "Apple A-Series & Snapdragon SoC",
      glow: "rgba(6, 182, 212, 0.22)",
      borderAccent: "group-hover:border-cyan-500/40",
    },
    battery: {
      image: `${base}/battery_ultra.png`,
      badge: "Genuine BMS Flex & 100% Health",
      glow: "rgba(16, 185, 129, 0.22)",
      borderAccent: "group-hover:border-emerald-500/40",
    },
    camera: {
      image: `${base}/camera_module_ultra.png`,
      badge: "Optical OIS & Sapphire Glass",
      glow: "rgba(139, 92, 246, 0.22)",
      borderAccent: "group-hover:border-purple-500/40",
    },
    bga: {
      image: `${base}/bga_chip_ultra.png`,
      badge: "Micro-Profile Infrared BGA Rework",
      glow: "rgba(245, 158, 11, 0.22)",
      borderAccent: "group-hover:border-amber-500/40",
    },
    water: {
      image: `${base}/microsoldering_ultra.png`,
      badge: "Ultrasonic Chemical Desoldering",
      glow: "rgba(236, 72, 153, 0.22)",
      borderAccent: "group-hover:border-pink-500/40",
    },
  }

  return (
    <section id="services" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/20 text-xs font-mono text-sky-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* 6-Card Grid with Real Transparent Hardware Cutouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item) => {
            const meta = serviceHardwareMeta[item.id] || {
              image: `${base}/smartphone_logic_ultra.png`,
              badge: "Chip-Level Diagnostics",
              glow: "rgba(14, 165, 233, 0.2)",
              borderAccent: "group-hover:border-sky-500/40",
            }

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/85 border border-zinc-800/80 ${meta.borderAccent} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 backdrop-blur-sm`}
              >
                <div>
                  {/* Hardware Inspection Viewport */}
                  <div className="relative h-48 w-full rounded-2xl bg-black/60 border border-zinc-800/70 overflow-hidden flex items-center justify-center p-3 mb-5 group-hover:border-zinc-700 transition-colors">
                    {/* Backlight Glow */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at center, ${meta.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Category Tag pill */}
                    <div className="absolute top-2.5 right-2.5 z-10 px-2.5 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300 shadow-md">
                      {item.tag}
                    </div>

                    {/* Technical Spec Pill */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-[9px] font-mono text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{meta.badge}</span>
                    </div>

                    {/* Real Cutout Transparent Hardware PNG */}
                    <img
                      src={meta.image}
                      alt={item.title}
                      className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] group-hover:scale-110 transition-transform duration-500 ease-out"
                      draggable={false}
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">
                    {item.brief}
                  </p>
                </div>

                {/* Direct WhatsApp Action Link */}
                <a
                  href={`https://wa.me/918697323726?text=Hello%20I%20REBOOT%2C%20I%20need%20a%20quote%20for%3A%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3.5 text-xs font-mono font-medium text-zinc-300 group-hover:text-cyan-400 transition-colors border-t border-zinc-800/80"
                >
                  <span>{t.askQuote}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
