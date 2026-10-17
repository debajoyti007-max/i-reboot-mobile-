import { useState } from "react"
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react"
import { FAQS, PUROBITE_CONTACT } from "../../data/purobiteData"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Clarity & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-stone-300 text-base leading-relaxed">
            Everything you need to know about our slow-dehydration method, clean ingredients, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="glass-panel rounded-2xl overflow-hidden transition-colors border border-white/10 hover:border-amber-400/30"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-400/20 text-amber-300" : "text-stone-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/60 to-amber-950/40 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white font-serif">Still have a question?</h4>
            <p className="text-xs text-stone-300 mt-1">
              Talk directly with our culinary founders in Kolkata.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PUROBITE_CONTACT.phoneTel}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-stone-200 text-xs font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{PUROBITE_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/918250755958?text=${encodeURIComponent(
                "Hello PuroBite team! I have a question about your Banana Chew ingredients and packs."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs font-bold transition-all shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
