import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { FAQS } from "../../data/purobiteData"

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-[#e8e3d8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full herbal-pill text-xs font-semibold mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif-luxury tracking-tight">
            Frequently Asked <span className="text-[#b47919] italic font-serif">Questions</span>
          </h2>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm font-light">
            Answers to common questions about ingredients, storage, and ordering.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-2.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#faf8f5] border border-[#e8e3d8] overflow-hidden"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-100/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-stone-900 font-serif-luxury">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#b47919]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed font-light border-t border-stone-200/60 pt-2.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick WhatsApp Help */}
        <div className="mt-8 p-4 rounded-xl bg-[#faf8f5] border border-[#e8e3d8] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-xs text-stone-600 font-light">
            Have a custom order or bulk query? Chat directly with our kitchen.
          </span>
          <a
            href="https://wa.me/918250755958?text=Hello%20PuroBite!%20I%20have%20a%20question%20about%20Banana%20Chew."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#193322] hover:bg-[#122519] text-[#f7f3ea] text-xs font-semibold whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
