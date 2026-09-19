import { useEffect, useRef } from "react"

interface EnergyStreak {
  x: number
  y: number
  length: number
  speed: number
  thickness: number
  color: string
  opacity: number
}

export default function AnimeCyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Mouse tracking for interactive magnetic aura
    let mouseX = width / 2
    let mouseY = height / 2
    let isMouseActive = false

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseActive = true
    }
    window.addEventListener("mousemove", onMouseMove)

    // Cyberpunk mobile repair palette: Cyan laser, Electric blue, Anime violet, Magenta pulse
    const colors = [
      "rgba(14, 165, 233, ", // Electric Sky
      "rgba(59, 130, 246, ", // Cobalt Blue
      "rgba(139, 92, 246, ", // Anime Violet
      "rgba(6, 182, 212, ",  // Cyber Cyan
    ]

    // 1. High-Speed Anime Energy Streaks (Light Trails)
    const streakCount = 45
    const streaks: EnergyStreak[] = Array.from({ length: streakCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 80 + Math.random() * 220,
      speed: 4 + Math.random() * 9,
      thickness: 0.8 + Math.random() * 2.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.2 + Math.random() * 0.55,
    }))

    // 2. Anime Energy Waves (Undulating Sinusoidal Beams)
    let waveTime = 0

    const render = () => {
      ctx.fillStyle = "rgba(6, 7, 10, 0.45)"
      ctx.fillRect(0, 0, width, height)

      waveTime += 0.015

      // LAYER A: Undulating Anime Energy Waves
      for (let w = 0; w < 3; w++) {
        ctx.beginPath()
        const waveBaseY = height * (0.28 + w * 0.25)
        const waveAmp = 35 + w * 20
        const waveFreq = 0.0025 + w * 0.001
        const waveSpeed = waveTime * (1.2 + w * 0.6)

        for (let x = 0; x <= width; x += 12) {
          const distToMouse = isMouseActive ? Math.hypot(x - mouseX, waveBaseY - mouseY) : 999
          const mouseDisplace = distToMouse < 250 ? (1 - distToMouse / 250) * 35 : 0

          const y =
            waveBaseY +
            Math.sin(x * waveFreq + waveSpeed) * waveAmp +
            Math.cos(x * waveFreq * 1.5 - waveSpeed * 0.8) * (waveAmp * 0.4) -
            mouseDisplace

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        const waveGrad = ctx.createLinearGradient(0, 0, width, 0)
        if (w === 0) {
          waveGrad.addColorStop(0, "rgba(59, 130, 246, 0)")
          waveGrad.addColorStop(0.3, "rgba(14, 165, 233, 0.32)")
          waveGrad.addColorStop(0.7, "rgba(99, 102, 241, 0.35)")
          waveGrad.addColorStop(1, "rgba(139, 92, 246, 0)")
        } else if (w === 1) {
          waveGrad.addColorStop(0, "rgba(6, 182, 212, 0)")
          waveGrad.addColorStop(0.4, "rgba(59, 130, 246, 0.32)")
          waveGrad.addColorStop(0.8, "rgba(236, 72, 153, 0.2)")
          waveGrad.addColorStop(1, "rgba(59, 130, 246, 0)")
        } else {
          waveGrad.addColorStop(0, "rgba(139, 92, 246, 0)")
          waveGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.22)")
          waveGrad.addColorStop(1, "rgba(16, 185, 129, 0)")
        }

        ctx.strokeStyle = waveGrad
        ctx.lineWidth = 1.8 + w * 0.8
        ctx.shadowBlur = 12 + w * 6
        ctx.shadowColor = w === 1 ? "rgba(14, 165, 233, 0.6)" : "rgba(99, 102, 241, 0.5)"
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      // LAYER B: Anime Speed Streaks
      const angle = Math.PI / 6
      const dx = Math.cos(angle)
      const dy = Math.sin(angle)

      for (let i = 0; i < streaks.length; i++) {
        const s = streaks[i]
        s.x += dx * s.speed
        s.y += dy * s.speed

        if (s.x > width + 200 || s.y > height + 200) {
          s.x = Math.random() * width - 200
          s.y = Math.random() * -100
          s.speed = 4 + Math.random() * 9
        }

        const headX = s.x
        const headY = s.y
        const tailX = s.x - dx * s.length
        const tailY = s.y - dy * s.length

        const streakGrad = ctx.createLinearGradient(tailX, tailY, headX, headY)
        streakGrad.addColorStop(0, `${s.color}0)`)
        streakGrad.addColorStop(0.7, `${s.color}${s.opacity * 0.4})`)
        streakGrad.addColorStop(1, `${s.color}${s.opacity})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(headX, headY)
        ctx.strokeStyle = streakGrad
        ctx.lineWidth = s.thickness
        ctx.shadowBlur = 8
        ctx.shadowColor = `${s.color}0.8)`
        ctx.stroke()
        ctx.shadowBlur = 0

        ctx.beginPath()
        ctx.arc(headX, headY, s.thickness * 1.1, 0, Math.PI * 2)
        ctx.fillStyle = `${s.color}0.95)`
        ctx.fill()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06070a]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, transparent 20%, rgba(6, 7, 10, 0.75) 85%)",
        }}
      />
    </div>
  )
}
