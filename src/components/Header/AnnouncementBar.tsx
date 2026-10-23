import { Phone } from "lucide-react"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function AnnouncementBar() {
  return (
    <div className="bg-[#193322] text-[#e8f1eb] text-[11px] sm:text-xs py-2 px-4 border-b border-[#244730]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        {/* Left: Real Brand Proposition */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>Handcrafted in Kolkata • 100% Natural • 0g Added Cane Sugar</span>
          <span className="hidden md:inline text-emerald-300">• Dispatched in 24–48 Hours</span>
        </div>

        {/* Right: Hotline & Instagram */}
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href={PUROBITE_CONTACT.phoneTel}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span className="font-mono">{PUROBITE_CONTACT.phoneDisplay}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href={PUROBITE_CONTACT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-300 transition-colors hidden sm:inline"
          >
            {PUROBITE_CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  )
}
