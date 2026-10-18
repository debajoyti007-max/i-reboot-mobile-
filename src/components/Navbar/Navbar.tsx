import { useState, useEffect } from "react"
import { Phone, MessageCircle, Sparkles, Menu, X, Play } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Navbar({ onReplayIntro }: { onReplayIntro?: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Banana Chew", href: "#hero" },
    { label: "Purity Standard", href: "#purity" },
    { label: "Packs & Pricing", href: "#packs" },
    { label: "Kitchen Concierge", href: "#contact" },
  ]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050a07]/90 backdrop-blur-2xl border-b border-amber-400/[0.12] py-3 shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-400/35 flex items-center justify-center shadow-[0_0_20px_rgba(229,193,121,0.2)] group-hover:border-amber-400/60 transition-colors">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-luxury leading-none">
                Puro<span className="text-amber-300 italic">Bite</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-amber-200/70 font-display-brand mt-1">
                Purity In Every Bite
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs text-stone-300 hover:text-amber-300 rounded-full transition-all font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Replay Cinematic Intro */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/[0.08] hover:bg-amber-400/[0.15] border border-amber-400/30 text-amber-300 text-xs font-mono transition-all cursor-pointer"
                title="Watch Unreal Engine 4K Opening Video"
              >
                <Play className="w-3 h-3 fill-amber-300 text-amber-300" />
                <span>Intro Video</span>
              </button>
            )}

            {/* Direct Phone Calling */}
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-stone-200 hover:text-amber-300 text-xs font-medium transition-all"
              title="Call Kitchen Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[11px]">{PUROBITE_CONTACT.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs tracking-wider shadow-[0_4px_20px_rgba(229,193,121,0.35)] transition-all touch-press cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline uppercase text-[11px] font-black">Order WhatsApp</span>
              <span className="xs:hidden uppercase text-[11px] font-black">Order</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-[#050a07]/96 backdrop-blur-2xl border-b border-amber-400/20 shadow-2xl animate-fade-in flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-white/[0.04] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[10px] font-mono text-amber-400/60">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onReplayIntro()
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-400/[0.1] border border-amber-400/30 text-amber-300 text-xs font-mono"
              >
                <Play className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Watch Unreal 4K Intro Video</span>
              </button>
            )}

            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-stone-200"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-1 text-stone-400 text-xs">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-300 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>@eatpurobite</span>
              </a>
              <span>•</span>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-300 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>PuroBite</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
