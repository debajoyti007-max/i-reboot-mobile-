import { useState } from "react"
import { ShieldCheck, Sparkles, CheckCircle2, FileText, MessageCircle } from "lucide-react"

export default function BatchAuthenticator() {
  const [showCertificate, setShowCertificate] = useState(false)

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I'd like to reserve a fresh tub from Batch #PB-KOL-0428.`
  )}`

  return (
    <section id="authenticator" className="relative py-20 sm:py-28 overflow-hidden bg-[#060d09] border-t border-amber-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span className="tracking-widest uppercase text-[10px]">Artisanal Provenance & Integrity</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
              Small-Batch Passport. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
                Verified Fresh From Kolkata
              </span>
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              We reject industrial warehousing. Every PuroBite tub is handcrafted in limited runs in Kolkata, assigned a traceable batch code, and hermetically sealed to preserve peak crispness and nutrient vitality.
            </p>

            {/* Quick 3 Purity Guarantees */}
            <div className="w-full space-y-2.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-stone-200">
                  <strong className="text-white font-semibold">24–48 Hour Dispatch:</strong> Freshly prepared and packed upon order confirmation.
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-stone-200">
                  <strong className="text-white font-semibold">6-Month Freshness Lock:</strong> Airtight food-grade recyclable kraft barrier.
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-stone-200">
                  <strong className="text-white font-semibold">FSSAI Certified Kitchen:</strong> Tested for zero cane sugar and zero palm oil.
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setShowCertificate(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 text-xs font-semibold border border-white/15 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Lab Purity Certificate</span>
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-stone-950" />
                <span>Reserve Batch #PB-0428</span>
              </a>
            </div>
          </div>

          {/* Right: The Physical Artisanal Batch Certificate Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-6 sm:p-8 glass-panel-gold border border-amber-400/40 shadow-2xl bg-gradient-to-b from-[#0a1b12] via-[#07130c] to-[#040906] text-stone-100">
              {/* Gold Filigree Header */}
              <div className="flex items-center justify-between border-b border-amber-400/25 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-mono block">
                    Official Kitchen Record
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                    Batch Authenticity Card
                  </span>
                </div>
                {/* Gold Seal Medallion */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 p-[2px] shadow-[0_0_20px_rgba(229,193,121,0.5)]">
                  <div className="w-full h-full rounded-full bg-[#07130c] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Batch Data Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                    Active Kitchen Batch
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-amber-300 block mt-0.5">
                    #PB-KOL-0428
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                    Preparation Date
                  </span>
                  <span className="text-base sm:text-lg font-bold font-mono text-white block mt-0.5">
                    This Week (Fresh)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                    Kitchen Origin
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-white block mt-0.5">
                    Kolkata, WB
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono block">
                    Freshness Window
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-emerald-400 block mt-0.5">
                    6 Months Hermetic
                  </span>
                </div>
              </div>

              {/* 4 Laboratory Verified Tests */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300">
                  <span className="font-medium">Added Cane Sugar Test (HPLC)</span>
                  <span className="font-mono font-bold">0.00g (PASSED)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300">
                  <span className="font-medium">Palm Oil / Trans-Fat Assay</span>
                  <span className="font-mono font-bold">0.00% (PASSED)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300">
                  <span className="font-medium">Chemical Preservatives (INS 211)</span>
                  <span className="font-mono font-bold">NONE DETECTED</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300">
                  <span className="font-medium">8 Whole Superfood Matrix</span>
                  <span className="font-mono font-bold">100% VERIFIED</span>
                </div>
              </div>

              {/* Footprint Signature */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-stone-400 font-mono">
                <span>Handcrafted by PuroBite Kitchen Artisans</span>
                <span className="text-amber-300 font-bold">Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Full Lab Certificate */}
        {showCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-lg rounded-3xl glass-panel-gold p-6 sm:p-8 bg-[#07130c] border border-amber-400/50 shadow-2xl text-stone-100 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="text-center border-b border-amber-400/25 pb-5 mb-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300 font-mono block">
                  Official Quality & Purity Assurance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mt-1">
                  PuroBite™ Certificate of Analysis
                </h3>
                <span className="text-xs text-stone-400 block mt-1">
                  Batch #PB-KOL-0428 • Handcrafted in Kolkata
                </span>
              </div>

              {/* Certificate Body */}
              <div className="space-y-3 text-xs sm:text-sm text-stone-200 mb-6 font-light">
                <p>
                  This certifies that <strong>PuroBite™ Artisanal Banana Chew</strong> complies with stringent artisanal whole-food benchmarks:
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex justify-between">
                    <span>Source Sweetener:</span>
                    <strong className="text-amber-300">100% Dehydrated Cavendish Bananas</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Cane Sugar / Syrups:</span>
                    <strong className="text-emerald-400">0.00g (Zero Added Sugar)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Healthy Fats:</span>
                    <strong className="text-amber-300">California Almonds & Cashews</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Palm Oil & Trans Fats:</span>
                    <strong className="text-emerald-400">0.00% (Zero Palm Oil)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Natural Potassium:</span>
                    <strong className="text-amber-300">480 mg / 100g</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Prebiotic Fiber:</span>
                    <strong className="text-amber-300">6.8 g / 100g</strong>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowCertificate(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs tracking-wider uppercase shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
              >
                Close Certificate
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
