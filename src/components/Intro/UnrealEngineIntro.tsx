import { useState, useEffect } from "react"
import { Sparkles, ArrowRight } from "lucide-react"

export default function UnrealEngineIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"dark" | "presents" | "logo" | "flare" | "exit">("dark")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Stage 1: Fade in "PUROBITE STUDIOS PRESENTS"
    const t1 = setTimeout(() => setPhase("presents"), 150)

    // Stage 2: Golden Volumetric Logo Reveal
    const t2 = setTimeout(() => setPhase("logo"), 800)

    // Stage 3: Volumetric Light Flare Sweep
    const t3 = setTimeout(() => setPhase("flare"), 1600)

    // Stage 4: Dissolve into Website (2.3s total)
    const t4 = setTimeout(() => {
      setPhase("exit")
      setTimeout(onComplete, 400)
    }, 2300)

    // Progress bar for cinematic feel
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 80)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div
      onClick={onComplete}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#040806] overflow-hidden transition-opacity duration-500 select-none cursor-pointer ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* 1. Volumetric God Rays and Atmospheric Mist */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(229, 184, 105, 0.25) 0%, rgba(52, 211, 153, 0.1) 40%, transparent 75%)",
        }}
      />

      {/* Volumetric Rotating Light Cones (Unreal Engine Lumen style) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 animate-spin"
        style={{
          animationDuration: "35s",
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(245, 158, 11, 0.2) 60deg, transparent 120deg, rgba(16, 185, 129, 0.15) 220deg, transparent 320deg)",
        }}
      />

      {/* 2. Central Cinematic Typography Sequences */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl">
        {/* Phase A: Studio Identifier */}
        <div
          className={`transition-all duration-700 transform ${
            phase === "presents" || phase === "logo" || phase === "flare"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-400/30 text-[10px] font-display-brand uppercase tracking-[0.3em] text-amber-300 mb-6 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Kolkata Artisanal Kitchen</span>
          </div>
        </div>

        {/* Phase B: Main Title Reveal with Specular Metallic Shine */}
        <div
          className={`transition-all duration-1000 transform ${
            phase === "logo" || phase === "flare"
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-6"
          }`}
        >
          <span className="block text-xs uppercase tracking-[0.45em] text-amber-200/70 font-display-brand font-semibold mb-3">
            Presents
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-serif-luxury tracking-tight text-white mb-2 relative">
            Puro<span className="text-amber-300 italic">Bite</span>
            {/* Shimmer sweep */}
            <span
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-clip-text text-transparent pointer-events-none transition-transform duration-1000 ${
                phase === "flare" ? "translate-x-full" : "-translate-x-full"
              }`}
            >
              PuroBite
            </span>
          </h1>

          <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent my-4" />

          <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-stone-200 font-display-brand font-medium">
            Purity In Every Bite
          </p>

          <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono mt-4 block">
            100% Natural • 8 Superfoods • Zero Added Sugar
          </span>
        </div>
      </div>

      {/* 3. Bottom Progress Bar & Skip Button */}
      <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between max-w-4xl mx-auto z-20">
        <div className="flex items-center gap-3">
          <div className="w-24 sm:w-36 h-1 rounded-full bg-stone-900 overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-stone-400 hidden sm:inline">
            Unreal Cinematic
          </span>
        </div>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-stone-200 text-xs font-semibold backdrop-blur-md transition-all touch-press cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  )
}
