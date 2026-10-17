import { useEffect, useRef, useState, useCallback } from "react"
import { Zap } from "lucide-react"

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  life: number
  maxLife: number
  color: string
}

interface LightningBolt {
  startX: number
  startY: number
  endX: number
  endY: number
  points: { x: number; y: number }[]
  alpha: number
  life: number
}

export default function ElectricShockCompanion() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [facing, setFacing] = useState<"down" | "up">("down")
  const [isDashing, setIsDashing] = useState(false)
  const [isZapping, setIsZapping] = useState(false)

  // Mascot screen coordinates (docked at bottom-right by default)
  const [coords, setCoords] = useState<{ x: number; y: number }>(() => ({
    x: typeof window !== "undefined" ? window.innerWidth - 76 : 300,
    y: typeof window !== "undefined" ? window.innerHeight - 135 : 550,
  }))

  const getRestingCoords = useCallback(() => {
    if (typeof window === "undefined") return { x: 300, y: 550 }
    const isMobile = window.innerWidth < 640
    return {
      x: window.innerWidth - (isMobile ? 70 : 88),
      y: window.innerHeight - 135,
    }
  }, [])

  // Keep resting coords synced on resize
  useEffect(() => {
    const handleResize = () => {
      if (!isDashing) {
        setCoords(getRestingCoords())
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getRestingCoords, isDashing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const onResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)

    // Lightning arcs and spark particle pools
    let bolts: LightningBolt[] = []
    let sparks: Spark[] = []

    // Helper to generate jagged fractal lightning branch
    const createLightningBranch = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      displace: number
    ): { x: number; y: number }[] => {
      const points: { x: number; y: number }[] = [{ x: x1, y: y1 }]
      const recurse = (
        p1: { x: number; y: number },
        p2: { x: number; y: number },
        disp: number
      ) => {
        if (disp < 8) {
          points.push(p2)
          return
        }
        const midX = (p1.x + p2.x) / 2 + (Math.random() - 0.5) * disp
        const midY = (p1.y + p2.y) / 2 + (Math.random() - 0.5) * disp
        recurse(p1, { x: midX, y: midY }, disp / 2)
        recurse({ x: midX, y: midY }, p2, disp / 2)
      }
      recurse({ x: x1, y: y1 }, { x: x2, y: y2 }, displace)
      return points
    }

    // Trigger electric shock: mascot dashes to target and unleashes thunder
    let returnTimeout: number
    const triggerElectricShock = (targetX: number, targetY: number) => {
      // 1. Calculate dash position right near the clicked button
      const isRight = targetX > width / 2
      const dashX = Math.max(16, Math.min(width - 80, isRight ? targetX - 70 : targetX + 50))
      const dashY = Math.max(60, Math.min(height - 110, targetY - 45))

      setIsDashing(true)
      setIsZapping(true)
      setCoords({ x: dashX, y: dashY })

      // 2. Generate 4 fractal lightning bolts connecting mascot to button
      for (let i = 0; i < 4; i++) {
        const branch = createLightningBranch(
          dashX + 28,
          dashY + 28,
          targetX + (Math.random() - 0.5) * 30,
          targetY + (Math.random() - 0.5) * 30,
          65
        )
        bolts.push({
          startX: dashX + 28,
          startY: dashY + 28,
          endX: targetX,
          endY: targetY,
          points: branch,
          alpha: 1,
          life: 0.32,
        })
      }

      // 3. Emit explosive golden thunder sparks
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 2.5 + Math.random() * 7
        const life = 0.35 + Math.random() * 0.35
        sparks.push({
          x: targetX,
          y: targetY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.5 + Math.random() * 2.5,
          alpha: 1,
          life,
          maxLife: life,
          color: Math.random() > 0.35 ? "#fde047" : "#38bdf8",
        })
      }

      // 4. Reset zapping effect after 400ms
      window.setTimeout(() => {
        setIsZapping(false)
      }, 400)

      // 5. Dash back to resting position after 750ms
      window.clearTimeout(returnTimeout)
      returnTimeout = window.setTimeout(() => {
        setIsDashing(false)
        setCoords(getRestingCoords())
      }, 750)
    }

    // Intercept clicks / taps globally on interactive elements
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null
      const buttonEl = target?.closest("button, a, input, [role='button']")
      if (buttonEl) {
        const rect = buttonEl.getBoundingClientRect()
        triggerElectricShock(rect.left + rect.width / 2, rect.top + rect.height / 2)
      }
    }
    window.addEventListener("click", handleGlobalClick as EventListener)

    // Scroll speed & direction tracking for sprint/run animation
    let lastScrollY = window.scrollY
    let scrollTimeout: number

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      if (Math.abs(delta) > 1.2) {
        setIsRunning(true)
        setFacing(delta > 0 ? "down" : "up")

        window.clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => {
          setIsRunning(false)
        }, 180)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Animation Render Loop
    let lastFrameTime = performance.now()
    const render = (now: number) => {
      const dt = Math.min((now - lastFrameTime) / 1000, 0.1)
      lastFrameTime = now

      ctx.clearRect(0, 0, width, height)

      // Draw Lightning Bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i]
        bolt.life -= dt
        bolt.alpha = Math.max(0, bolt.life / 0.32)

        if (bolt.points.length > 1) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(bolt.points[0].x, bolt.points[0].y)
          for (let p = 1; p < bolt.points.length; p++) {
            ctx.lineTo(bolt.points[p].x, bolt.points[p].y)
          }

          // Electric Aura Glow
          ctx.shadowBlur = 18
          ctx.shadowColor = "rgba(250, 204, 21, 0.95)"
          ctx.strokeStyle = `rgba(254, 240, 138, ${bolt.alpha})`
          ctx.lineWidth = 3
          ctx.stroke()

          // Hot White High-Voltage Core
          ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`
          ctx.lineWidth = 1.2
          ctx.stroke()
          ctx.restore()
        }

        if (bolt.life <= 0) {
          bolts.splice(i, 1)
        }
      }

      // Draw Electric Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.18 // Subtle gravity
        s.life -= dt
        s.alpha = Math.max(0, s.life / s.maxLife)

        ctx.save()
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.shadowBlur = 9
        ctx.shadowColor = s.color
        ctx.globalAlpha = s.alpha
        ctx.fill()
        ctx.restore()

        if (s.life <= 0) {
          sparks.splice(i, 1)
        }
      }

      animId = requestAnimationFrame(render)
    }
    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("click", handleGlobalClick as EventListener)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
      clearTimeout(returnTimeout)
    }
  }, [getRestingCoords])

  return (
    <>
      {/* 1. Global Electric Lightning & Spark Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* 2. Interactive Mythical Thunder Mascot (Wukong - Monkey King) */}
      <div
        className={`fixed z-40 select-none pointer-events-none flex flex-col items-center transition-all ${
          isDashing ? "duration-200 ease-out" : "duration-500 ease-in-out"
        }`}
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          top: 0,
          left: 0,
        }}
      >
        {/* Shockwave Radial Halo when zapping */}
        {isZapping && (
          <div className="absolute -inset-4 rounded-full bg-amber-400/40 blur-md animate-ping pointer-events-none" />
        )}

        {/* Mascot Avatar Card */}
        <div
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#09150d] via-[#12281a] to-amber-500/25 border border-amber-400/40 shadow-[0_0_26px_rgba(245,158,11,0.45)] flex items-center justify-center backdrop-blur-xl transition-transform duration-200 ${
            isRunning
              ? facing === "down"
                ? "rotate-12 scale-110"
                : "-rotate-12 scale-110"
              : isZapping
              ? "scale-125 rotate-3"
              : "scale-100 hover:scale-105"
          }`}
        >
          {/* Lightning Icon Badge */}
          <div
            className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-lg transition-transform ${
              isZapping ? "scale-125 bg-yellow-300 animate-spin" : isRunning ? "animate-bounce" : ""
            }`}
          >
            <Zap className="w-3 h-3 fill-current" />
          </div>

          {/* Detailed Mythical Wukong Vector Illustration */}
          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Somersault Cloud Base (Jindou Yun) */}
            <path
              d="M18 52C14 52 11 49 12 45C13 42 16 41 19 42C21 38 27 37 30 40C33 37 40 37 43 41C47 40 51 43 50 47C50 51 46 53 42 52L18 52Z"
              fill={isZapping ? "#fde047" : "#e2e8f0"}
              fillOpacity={isZapping ? 0.9 : 0.75}
              className={isRunning ? "animate-pulse" : ""}
            />

            {/* Monkey King Ears */}
            <circle cx="16" cy="27" r="5" fill="#d97706" />
            <circle cx="16" cy="27" r="3" fill="#fef08a" />
            <circle cx="48" cy="27" r="5" fill="#d97706" />
            <circle cx="48" cy="27" r="3" fill="#fef08a" />

            {/* Golden Face Contour */}
            <ellipse cx="32" cy="28" rx="14" ry="13" fill="#f59e0b" />
            {/* Heart-Shaped Light Fur Mask */}
            <path
              d="M32 24C30 19 23 20 23 25C23 31 32 37 32 37C32 37 41 31 41 25C41 20 34 19 32 24Z"
              fill="#fef3c7"
            />

            {/* Divine Golden Fillet / Circlet (Guan) */}
            <path
              d="M20 20Q32 15 44 20"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Central Fillet Jewel */}
            <circle cx="32" cy="17.5" r="2" fill="#ef4444" />

            {/* Lightning-Infused Eyes */}
            <ellipse
              cx="28"
              cy="25"
              rx="2"
              ry="2.5"
              fill={isZapping ? "#38bdf8" : "#1e293b"}
            />
            <ellipse
              cx="36"
              cy="25"
              rx="2"
              ry="2.5"
              fill={isZapping ? "#38bdf8" : "#1e293b"}
            />
            {/* Eye Glow highlight */}
            <circle cx="27.5" cy="24" r="0.8" fill="#ffffff" />
            <circle cx="35.5" cy="24" r="0.8" fill="#ffffff" />

            {/* Cute Nose and Smile */}
            <ellipse cx="32" cy="28.5" rx="1.2" ry="0.8" fill="#78350f" />
            <path
              d="M30 31Q32 33 34 31"
              stroke="#78350f"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Electric Ruyi Staff (Crackling golden staff) */}
            <line
              x1="46"
              y1="12"
              x2="52"
              y2="46"
              stroke="#eab308"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="46" cy="12" r="1.5" fill="#f87171" />
            <circle cx="52" cy="46" r="1.5" fill="#f87171" />
          </svg>

          {/* Running sparks trail beneath cloud */}
          {isRunning && (
            <div className="absolute -bottom-2 flex gap-1 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/90" />
              <span className="w-1 h-1 rounded-full bg-sky-400/80" />
            </div>
          )}
        </div>

        {/* Dynamic Status Pill */}
        <div className="mt-1 px-2.5 py-0.5 rounded-full bg-stone-950/85 border border-amber-400/30 text-[9px] font-mono font-bold text-amber-300 backdrop-blur-md shadow-md tracking-wider">
          {isZapping ? "THUNDERBOLT!" : isRunning ? "SPRINTING..." : "Wukong"}
        </div>
      </div>
    </>
  )
}
