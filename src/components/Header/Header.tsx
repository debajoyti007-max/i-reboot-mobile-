import { useState, useEffect } from "react"
import { MessageCircle, Phone, Menu, X } from "lucide-react"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "What's Inside", href: "#ingredients" },
    { label: "Packs & Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-xs border-b border-[#e8e3d8] py-3"
          : "bg-[#faf8f5] border-b border-[#ece7dc] py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#193322] text-[#f7f3ea] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              PB
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#141b16] font-serif-luxury leading-none">
                Puro<span className="text-[#b47919] italic">Bite</span>
                <span className="text-xs text-stone-500 font-sans ml-1">™</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#55635a] font-medium mt-1">
                Handcrafted Banana Chew
              </span>
            </div>
          </a>

          {/* Clean 3 Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-stone-700 hover:text-[#b47919] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct WhatsApp Order */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="hidden lg:flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#193322] font-mono px-3 py-1.5 rounded-lg border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#b47919]" />
              <span>{PUROBITE_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] text-xs font-semibold tracking-wide transition-all shadow-xs touch-press"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#f7f3ea]" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-stone-200/60 text-stone-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-stone-200/80 pb-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium text-stone-800 hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#193322] text-[#f7f3ea] text-xs font-bold shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp</span>
              </a>
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-stone-300 text-stone-800 text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#b47919]" />
                <span>Call Kitchen: {PUROBITE_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
