import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { FAQS } from "../../data/purobiteData"

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const filteredFaqs =
    selectedCategory === "all"
      ? FAQS
      : FAQS.filter((f) => {
          if (selectedCategory === "nutrition") return f.category === "nutrition"
          if (selectedCategory === "shipping") return f.category === "shipping"
          if (selectedCategory === "storage") return f.category === "storage"
          return true
        })

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#faf8f5] border-b border-[#e8e3d8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full herbal-pill text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Everything You Need <span className="text-[#b47919] italic font-serif">To Know</span>
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-light">
            Answers to common questions about our ingredients, sugar-free science, shipping, and shelf life.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-1.5 p-1 rounded-xl bg-stone-100 border border-stone-200 mt-6 max-w-full overflow-x-auto">
            {[
              { id: "all", label: "All Questions" },
              { id: "nutrition", label: "Ingredients & Sugar" },
              { id: "shipping", label: "Ordering & Delivery" },
              { id: "storage", label: "Storage & Shelf Life" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-white text-stone-900 shadow-xs border border-stone-200"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-white border border-[#e8e3d8] overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 font-serif-luxury">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#b47919]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Need more help card */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#e8e3d8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div>
            <h4 className="text-sm font-bold text-stone-900 font-serif-luxury">
              Have a specific question or custom batch request?
            </h4>
            <p className="text-xs text-stone-500 font-light mt-0.5">
              Our Kolkata kitchen team is available on WhatsApp daily from 9 AM to 9 PM IST.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/918250755958?text=${encodeURIComponent(
                "Hello PuroBite! I have a question about your handcrafted banana chew."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
