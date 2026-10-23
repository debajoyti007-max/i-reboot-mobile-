import { useState, useEffect, useRef, useCallback } from "react"
import { Search, X, Sparkles, Package, Leaf, HelpCircle } from "lucide-react"
import { PRODUCT_PACKS, REAL_INGREDIENTS, FAQS, NUTRITION_FACTS } from "../../data/purobiteData"
import { useCart } from "../../context/useCart"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setQuery("")
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleClose])

  if (!isOpen) return null

  const cleanQ = query.trim().toLowerCase()

  // Match Products
  const matchedPacks = cleanQ
    ? PRODUCT_PACKS.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQ) ||
          p.weight.toLowerCase().includes(cleanQ) ||
          p.description.toLowerCase().includes(cleanQ) ||
          p.features.some((f) => f.toLowerCase().includes(cleanQ))
      )
    : PRODUCT_PACKS

  // Match Ingredients
  const matchedIngredients = cleanQ
    ? REAL_INGREDIENTS.filter(
        (s) =>
          s.name.toLowerCase().includes(cleanQ) ||
          s.benefit.toLowerCase().includes(cleanQ) ||
          s.highlight.toLowerCase().includes(cleanQ)
      )
    : []

  // Match Nutrition Facts
  const matchedNutrition = cleanQ
    ? NUTRITION_FACTS.filter(
        (n) => n.label.toLowerCase().includes(cleanQ) || n.sub.toLowerCase().includes(cleanQ)
      )
    : []

  // Match FAQs
  const matchedFaqs = cleanQ
    ? FAQS.filter(
        (f) => f.question.toLowerCase().includes(cleanQ) || f.answer.toLowerCase().includes(cleanQ)
      )
    : []

  const totalResults =
    (cleanQ ? matchedPacks.length : 0) +
    matchedIngredients.length +
    matchedNutrition.length +
    matchedFaqs.length

  const handleSelectSection = (hash: string) => {
    handleClose()
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#faf8f5] rounded-2xl shadow-2xl border border-[#e8e3d8] overflow-hidden flex flex-col max-h-[80vh] z-10 animate-in zoom-in-95 duration-200">
        {/* Input Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#e8e3d8] flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search banana chew, almonds, protein, 0g sugar, 350g..."
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Quick Suggestions when empty */}
          {!cleanQ && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-mono block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["0g Added Sugar", "350g Signature Pack", "California Almonds", "Dietary Fiber", "Kolkata Kitchen", "Family Duo"].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-full bg-white border border-stone-200 hover:border-[#b47919] text-xs text-stone-700 transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Product Results */}
          {matchedPacks.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-2.5">
                <Package className="w-3.5 h-3.5 text-[#b47919]" />
                <span>Handcrafted Tubs ({matchedPacks.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {matchedPacks.map((pack) => (
                  <div
                    key={pack.id}
                    className="p-3 rounded-xl bg-white border border-[#e8e3d8] flex items-center justify-between gap-3 hover:border-[#b47919] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={pack.image}
                        alt={pack.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 border border-stone-200"
                      />
                      <div className="min-w-0">
                        <h5 className="text-xs font-bold text-stone-900 font-serif-luxury truncate">
                          {pack.name}
                        </h5>
                        <span className="text-[11px] text-stone-500 block">{pack.weight}</span>
                        <span className="text-xs font-bold text-[#193322]">₹{pack.price}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(pack, 1)
                        handleClose()
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-[#193322] hover:bg-[#122519] text-white text-[11px] font-semibold shrink-0 cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Ingredients */}
          {matchedIngredients.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-2">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ingredients ({matchedIngredients.length})</span>
              </div>
              <div className="space-y-2">
                {matchedIngredients.map((food) => (
                  <div
                    key={food.id}
                    onClick={() => handleSelectSection("#superfoods")}
                    className="p-3 rounded-xl bg-white border border-[#e8e3d8] hover:border-[#224732] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-stone-900 font-serif-luxury">
                        {food.name}
                      </h5>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {food.highlight}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 font-light mt-1">{food.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition Facts */}
          {matchedNutrition.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#b47919]" />
                <span>Nutrition Facts</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {matchedNutrition.map((n, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectSection("#purity")}
                    className="p-2.5 rounded-xl bg-white border border-[#e8e3d8] cursor-pointer"
                  >
                    <span className="text-xs font-bold text-stone-900 block">{n.label}</span>
                    <span className="text-sm font-bold text-[#b47919] font-serif-luxury block">
                      {n.value}
                    </span>
                    <span className="text-[10px] text-stone-500 block">{n.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {matchedFaqs.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
                <span>Frequently Asked Questions ({matchedFaqs.length})</span>
              </div>
              <div className="space-y-2">
                {matchedFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    onClick={() => handleSelectSection("#faq")}
                    className="p-3 rounded-xl bg-white border border-[#e8e3d8] hover:border-stone-400 cursor-pointer transition-colors"
                  >
                    <h5 className="text-xs font-bold text-stone-900">{faq.question}</h5>
                    <p className="text-[11px] text-stone-600 font-light mt-1 line-clamp-2">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cleanQ && totalResults === 0 && (
            <div className="py-8 text-center text-stone-500">
              <p className="text-sm">No results found for "{query}".</p>
              <p className="text-xs text-stone-400 mt-1">
                Try searching for "banana", "sugar", "almonds", or "packs".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
