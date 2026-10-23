import { useState, useEffect } from "react"
import { Search, ShoppingBag, Menu, X, MessageCircle, Phone } from "lucide-react"
import { useCart } from "../../context/useCart"
import { PUROBITE_CONTACT } from "../../data/purobiteData"

interface HeaderProps {
  onOpenSearch: () => void
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalCount, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Shop Tubs", href: "#shop" },
    { label: "Purity Standard", href: "#purity" },
    { label: "Whole Ingredients", href: "#superfoods" },
    { label: "Our Story", href: "#story" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ]

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    "Hello PuroBite! I'd like to order Banana Chew handcrafted pack."
  )}`

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm border-b border-[#e8e3d8] py-3"
          : "bg-[#faf8f5] border-b border-[#ece7dc] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Mark (VNPR Foods inspired elegance) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#193322] text-[#f7f3ea] flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              <span>PB</span>
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
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

          {/* Right Actions: Search, Cart, Order CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full hover:bg-stone-200/60 text-stone-700 transition-colors cursor-pointer"
              aria-label="Search products and ingredients"
              title="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-full hover:bg-stone-200/60 text-stone-700 transition-colors cursor-pointer flex items-center"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-stone-800" />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#b47919] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Order CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#193322] hover:bg-[#13271a] text-[#f7f3ea] text-xs font-semibold tracking-wide transition-all shadow-sm touch-press"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#f7f3ea]" />
              <span>Order WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-stone-200/60 text-stone-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-stone-200/80 pb-3 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-medium text-stone-800 hover:bg-stone-100 hover:text-[#b47919] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-stone-200/60 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#193322] text-[#f7f3ea] text-xs font-bold tracking-wide shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp Order</span>
              </a>
              <a
                href={PUROBITE_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-stone-300 text-stone-800 text-xs font-semibold"
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
