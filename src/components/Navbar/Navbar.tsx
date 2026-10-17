import { useState, useEffect } from "react"
import { Phone, MessageCircle, Menu, X, Sparkles, Leaf, ShoppingBag } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "../icons/SocialIcons"
import { PUROBITE_CONTACT } from "../../data/purobiteData"
import { useCart } from "../../context/CartContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Banana Chew", href: "#hero" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "8 Superfoods", href: "#superfoods" },
    { label: "Nutritional Map", href: "#nutrition" },
    { label: "Packs & Pricing", href: "#packs" },
    { label: "Our Journey", href: "#heritage" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ]

  const whatsappOrderUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew artisanal snack pack."
  )}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030906]/85 backdrop-blur-2xl border-b border-emerald-900/30 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600/30 via-amber-500/20 to-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:border-amber-400/50 transition-colors">
              <Leaf className="w-5 h-5 text-emerald-400 group-hover:text-amber-300 transition-colors" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif">
                  Puro<span className="text-amber-400">Bite</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Natural
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-medium">
                Purity In Every Bite
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-900/40 backdrop-blur-md border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-amber-300 rounded-full hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Contacts */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Quick Call */}
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-stone-200 text-xs font-medium transition-all group"
              title="Call PuroBite"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{PUROBITE_CONTACT.phoneDisplay}</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5">
              <a
                href={PUROBITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-pink-500/10 border border-white/10 hover:border-pink-500/40 text-stone-300 hover:text-pink-400 transition-all"
                title="Follow @eatpurobite on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={PUROBITE_CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 text-stone-300 hover:text-blue-400 transition-all"
                title="PuroBite on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Interactive Cart Button (VNPR Foods style) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-stone-200 hover:text-amber-300 transition-all cursor-pointer"
              title="Open Artisanal Bag"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-[10px] font-black text-stone-950 shadow-md animate-in zoom-in">
                  {totalCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_32px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-stone-950 fill-stone-950" />
              <span className="hidden md:inline">WhatsApp Order</span>
              <Sparkles className="w-3.5 h-3.5 text-stone-950 animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu & Cart Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-white/10 text-stone-200 border border-white/10"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-amber-400 text-[9px] font-black text-stone-950">
                  {totalCount}
                </span>
              )}
            </button>

            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-stone-950 font-bold"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-stone-200 hover:text-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-stone-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[62px] p-4 bg-[#030906]/95 backdrop-blur-2xl border-b border-emerald-900/40 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-emerald-950/40 text-stone-200 hover:text-amber-300 text-sm font-medium border border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setIsCartOpen(true)
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.08] border border-white/15 text-white text-sm font-bold"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>View Bag ({totalCount} items)</span>
              </button>

              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-stone-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {PUROBITE_CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-stone-950 font-bold text-sm shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Order</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={PUROBITE_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-pink-400"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@eatpurobite</span>
                </a>
                <span className="text-stone-700">•</span>
                <a
                  href={PUROBITE_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-blue-400"
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
