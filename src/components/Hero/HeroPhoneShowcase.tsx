import { useState, useRef, type MouseEvent } from "react"
import { Cpu, Smartphone, Zap, CheckCircle2, RotateCcw } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function HeroPhoneShowcase() {
  const { lang } = useLanguage()
  const t = translations[lang].hero
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  const [activeMode, setActiveMode] = useState<"chassis" | "internals">("chassis")
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    // 3D Tilt angle: -12 to +12 degrees
    setTilt({
      x: (px - 0.5) * 16,
      y: (py - 0.5) * -14,
    })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div className="relative w-full max-w-xl mx-auto select-none py-4">
      {/* Interactive Mode Switcher Pill */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveMode("chassis")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeMode === "chassis"
                ? "bg-sky-600 text-white shadow-md shadow-sky-900/40"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.inspectToggleA}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("internals")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeMode === "internals"
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-900/40"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.inspectToggleB}</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full border border-zinc-800">
          <RotateCcw className="w-3 h-3 text-cyan-400 animate-spin-slow" />
          <span>Interactive 3D Tilt</span>
        </div>
      </div>

      {/* 3D Perspective Canvas Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1200px" }}
        className="relative w-full aspect-[16/12] rounded-3xl bg-gradient-to-b from-zinc-900/50 via-zinc-900/20 to-black/80 border border-zinc-800/60 p-6 flex items-center justify-center overflow-hidden cursor-crosshair shadow-2xl shadow-black/80"
      >
        {/* Ambient Backlight Glow behind phone */}
        <div
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              activeMode === "chassis"
                ? "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.25) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 75%)"
                : "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, rgba(16, 185, 129, 0.12) 55%, transparent 75%)",
          }}
        />

        {/* 3D Parallax Master Layer */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* VIEW A: Ultra-High-Resolution Flagship iPhone Pro */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              activeMode === "chassis"
                ? "opacity-100 scale-100 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            <img
              src={`${base}/smartphone_hero_ultra.png`}
              alt="Flagship Smartphone Repair"
              className="max-h-[92%] max-w-[92%] object-contain filter drop-shadow-[0_15px_30px_rgba(14,165,233,0.3)]"
              draggable={false}
            />
          </div>

          {/* VIEW B: Real Disassembled Smartphone Logic Board */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              activeMode === "internals"
                ? "opacity-100 scale-100 filter drop-shadow-[0_25px_40px_rgba(6,182,212,0.35)]"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            <img
              src={`${base}/smartphone_logic_ultra.png`}
              alt="Smartphone Logic Board PCB"
              className="max-h-[85%] max-w-[85%] object-contain rounded-2xl"
              draggable={false}
            />
          </div>

          {/* FLOATING 3D BADGE 1 (Top-Right): OLED OCA Lamination */}
          <div
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 text-xs font-mono backdrop-blur-xl shadow-xl transition-transform duration-300"
            style={{
              transform: `translateZ(55px) translate(${tilt.x * 1.3}px, ${tilt.y * 1.3}px)`,
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-cyan-500/30 overflow-hidden flex items-center justify-center p-0.5">
              <img
                src={`${base}/oled_screen_ultra.png`}
                alt="OCA Lamination"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-white tracking-tight">{t.telemetry1Title}</span>
              </div>
              <div className="text-[10px] text-zinc-400">{t.telemetry1Sub}</div>
            </div>
          </div>

          {/* FLOATING 3D BADGE 2 (Bottom-Left): Micro-Soldering */}
          <div
            className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 text-xs font-mono backdrop-blur-xl shadow-xl transition-transform duration-300"
            style={{
              transform: `translateZ(50px) translate(${tilt.x * -1.2}px, ${tilt.y * -1.2}px)`,
            }}
          >
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white tracking-tight">{t.telemetry2Title}</div>
              <div className="text-[10px] text-zinc-400">{t.telemetry2Sub}</div>
            </div>
          </div>

          {/* FLOATING 3D BADGE 3 (Top-Left): 30-Minute Fast Turnaround */}
          <div
            className="hidden sm:flex absolute top-4 left-4 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800/80 text-[10px] font-mono text-zinc-300 backdrop-blur-md transition-transform duration-300"
            style={{
              transform: `translateZ(40px) translate(${tilt.x * -0.8}px, ${tilt.y * -0.8}px)`,
            }}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>30-Min Fast Turnaround</span>
          </div>
        </div>
      </div>
    </div>
  )
}
