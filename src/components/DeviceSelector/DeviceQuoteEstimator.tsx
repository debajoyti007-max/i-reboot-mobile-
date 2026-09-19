import { useState } from "react"
import { Clock, MessageSquare, ArrowRight, Smartphone } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

const brandsList = [
  "Apple iPhone",
  "Samsung Galaxy",
  "Google Pixel",
  "OnePlus",
  "Xiaomi / Redmi",
  "Vivo / iQOO",
  "Oppo / Realme",
]

const issuesList = [
  { id: "glass", label: "Outer Glass Cracked (Display & Touch OK)" },
  { id: "display", label: "Blank Screen / Lines / Touch Not Working" },
  { id: "battery", label: "Battery Draining Fast / Health Warning" },
  { id: "dead", label: "Phone Dead / Water Damaged / Not Turning On" },
  { id: "camera", label: "Camera Shaking / Blurry Lens / Glass Broken" },
  { id: "charging", label: "Charging Port Issue / Overheating" },
]

export default function DeviceQuoteEstimator() {
  const { lang } = useLanguage()
  const t = translations[lang].estimator

  const [selectedBrand, setSelectedBrand] = useState("Apple iPhone")
  const [selectedIssue, setSelectedIssue] = useState(issuesList[0].label)

  const handleWhatsAppQuote = () => {
    const message = `Hello I REBOOT, I need a repair quote for my ${selectedBrand}. Issue: ${selectedIssue}. Please let me know the estimated cost and when I can visit 5A Lenin Sarani.`
    window.open(`https://wa.me/918697323726?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="estimator" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* Estimator Card */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-zinc-800/80 shadow-2xl">
          {/* Step 1: Select Brand */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span>{t.selectBrand}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {brandsList.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`py-3 px-3 rounded-xl text-xs font-mono text-center transition-all cursor-pointer border ${
                    selectedBrand === brand
                      ? "bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-950/60 font-bold"
                      : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Issue */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
              {t.selectIssue}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {issuesList.map((issue) => (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => setSelectedIssue(issue.label)}
                  className={`p-3.5 rounded-xl text-xs font-mono text-left transition-all cursor-pointer border flex items-center justify-between ${
                    selectedIssue === issue.label
                      ? "bg-cyan-950/80 text-cyan-200 border-cyan-500/60 shadow-lg shadow-cyan-950/40"
                      : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <span>{issue.label}</span>
                  {selectedIssue === issue.label && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Result & WhatsApp Action Bar */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-zinc-400">{t.estimatedRange}</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{t.turnaround}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-medium text-xs font-mono transition-all shadow-xl shadow-sky-950/60 hover:shadow-sky-600/30 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.btnSendWa}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
