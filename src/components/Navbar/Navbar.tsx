import { useState, useEffect } from "react"
import { Phone, MessageCircle, Leaf, Menu, X } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Banana Chew", href: "#hero" },
    { label: "8 Superfoods", href: "#superfoods" },
    { label: "Nutrition", href: "#nutrition" },
    { label: "Packs & Pricing", href: "#packs" },
    { label: "Contact", href: "#contact" },
  ]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060b08]/92 backdrop-blur-xl border-b border-white/[0.08] py-2.5 shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-950/60 border border-amber-400/30 flex items-center justify-center shadow-lg">
              <Leaf className="w-4 h-4 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif">
                Puro<span className="text-amber-300">Bite</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400 font-medium">
                Purity In Every Bite
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs text-stone-300 hover:text-amber-200 rounded-full transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone Hotline */}
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-stone-200 text-xs transition-colors"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{PUROBITE_CONTACT.phoneDisplay}</span>
            </a>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-1">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-stone-300 hover:text-pink-300 border border-white/5 transition-colors"
                title="Instagram @eatpurobite"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-stone-300 hover:text-blue-300 border border-white/5 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* WhatsApp Direct Order CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all touch-press"
            >
              <MessageCircle className="w-4 h-4 fill-stone-950" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-stone-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 bg-[#060b08]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/[0.03] text-stone-200 text-sm font-medium border border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-stone-200 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
              </a>
              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href={PUROBITE_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-pink-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@eatpurobite</span>
                </a>
                <span className="text-stone-700">•</span>
                <a
                  href={PUROBITE_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-blue-300"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
