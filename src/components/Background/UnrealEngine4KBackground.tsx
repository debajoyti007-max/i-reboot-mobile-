import { useEffect, useRef } from "react"

interface Particle3D {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  baseRadius: number
  hue: number // 38-48 for amber/gold, 140-165 for emerald
  alpha: number
  pulseSpeed: number
  pulseOffset: number
}

export default function UnrealEngine4KBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let animId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize)

    // Interactive mouse tracker with smooth physics interpolation
    let mouse = {
      x: width * 0.5,
      y: height * 0.35,
      targetX: width * 0.5,
      targetY: height * 0.35,
      active: false,
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const onMouseLeave = () => {
      mouse.active = false
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
        mouse.active = true
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    window.addEventListener("mouseleave", onMouseLeave, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })

    // Initialize 3D Volumetric Botanical Spores & Golden Embers
    const PARTICLE_COUNT = 90
    const particles: Particle3D[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 70% golden/amber embers, 30% emerald botanical spores
      const isGold = Math.random() > 0.28
      particles.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 1.6,
        z: 0.35 + Math.random() * 2.3, // 0.35 = close bokeh, 2.65 = deep background
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.45, // Gentle natural upward drift like organic embers
        vz: (Math.random() - 0.5) * 0.002,
        baseRadius: 1.4 + Math.random() * 3.8,
        hue: isGold ? 36 + Math.random() * 12 : 145 + Math.random() * 25,
        alpha: 0.25 + Math.random() * 0.65,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }

    let time = 0
    let lastTime = performance.now()

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now
      time += dt

      // Smooth mouse follow (Unreal Engine camera latency simulation)
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Base Obsidian Evergreen Canvas
      ctx.fillStyle = "#030906"
      ctx.fillRect(0, 0, width, height)

      // 1. VOLUMETRIC ATMOSPHERIC NEBULAS (Unreal Lumen Ambient Lighting)
      const grad1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.2) * 50,
        height * 0.25 + Math.cos(time * 0.18) * 40,
        0,
        width * 0.2,
        height * 0.25,
        width * 0.65
      )
      grad1.addColorStop(0, "rgba(5, 46, 26, 0.45)") // Deep emerald glow
      grad1.addColorStop(0.5, "rgba(4, 25, 15, 0.2)")
      grad1.addColorStop(1, "rgba(3, 9, 6, 0)")
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, width, height)

      const grad2 = ctx.createRadialGradient(
        width * 0.82 + Math.cos(time * 0.15) * 60,
        height * 0.68 + Math.sin(time * 0.22) * 50,
        0,
        width * 0.82,
        height * 0.68,
        width * 0.7
      )
      grad2.addColorStop(0, "rgba(70, 42, 6, 0.35)") // Warm caramelized honey/amber glow
      grad2.addColorStop(0.6, "rgba(25, 16, 4, 0.15)")
      grad2.addColorStop(1, "rgba(3, 9, 6, 0)")
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, width, height)

      // 2. VOLUMETRIC GOD RAYS (Cinematic Shafts of Light)
      ctx.save()
      ctx.globalCompositeOperation = "screen"

      const rayCount = 4
      for (let r = 0; r < rayCount; r++) {
        const rayAngle = -0.42 + Math.sin(time * 0.12 + r * 1.3) * 0.04
        const rayOriginX = width * (0.15 + r * 0.26)
        const rayOriginY = -80
        const rayWidth = 140 + r * 45
        const rayLength = height * 1.5
        const rayAlpha = 0.04 + Math.sin(time * 0.35 + r * 1.8) * 0.02

        const endX = rayOriginX + Math.sin(rayAngle) * rayLength
        const endY = rayOriginY + Math.cos(rayAngle) * rayLength

        const rayGrad = ctx.createLinearGradient(rayOriginX, rayOriginY, endX, endY)
        rayGrad.addColorStop(0, `rgba(251, 191, 36, ${rayAlpha * 1.8})`)
        rayGrad.addColorStop(0.35, `rgba(52, 211, 153, ${rayAlpha * 0.8})`)
        rayGrad.addColorStop(0.85, "rgba(4, 30, 18, 0)")

        ctx.beginPath()
        ctx.moveTo(rayOriginX - rayWidth * 0.2, rayOriginY)
        ctx.lineTo(rayOriginX + rayWidth * 0.2, rayOriginY)
        ctx.lineTo(endX + rayWidth * 0.9, endY)
        ctx.lineTo(endX - rayWidth * 0.9, endY)
        ctx.closePath()

        ctx.fillStyle = rayGrad
        ctx.fill()
      }
      ctx.restore()

      // 3. INTERACTIVE CURSOR VOLUMETRIC LIGHT
      if (mouse.active) {
        ctx.save()
        ctx.globalCompositeOperation = "screen"
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        )
        cursorGlow.addColorStop(0, "rgba(245, 158, 11, 0.16)")
        cursorGlow.addColorStop(0.4, "rgba(16, 185, 129, 0.06)")
        cursorGlow.addColorStop(1, "rgba(3, 9, 6, 0)")
        ctx.fillStyle = cursorGlow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 260, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 4. 3D PARTICLE ENGINE WITH DEPTH-OF-FIELD (Bokeh Discs + Sharp Embers)
      const centerX = width * 0.5
      const centerY = height * 0.5

      // Sort particles by Z so distant ones render first, close bokeh renders on top
      particles.sort((a, b) => b.z - a.z)

      ctx.save()
      ctx.globalCompositeOperation = "screen"

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update physics
        p.x += p.vx + Math.sin(time * 0.8 + p.pulseOffset) * 0.25
        p.y += p.vy
        p.z += p.vz

        // Mouse fluid repulsion in 3D
        const scale = 1 / p.z
        const screenX = p.x * scale + centerX
        const screenY = p.y * scale + centerY

        const dx = screenX - mouse.x
        const dy = screenY - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < 180 && mouse.active) {
          const force = (1 - dist / 180) * 2.2
          p.x += (dx / (dist + 0.1)) * force * p.z
          p.y += (dy / (dist + 0.1)) * force * p.z
        }

        // Screen boundary wrapping
        const maxBoundX = (width * 0.9) * p.z
        const maxBoundY = (height * 0.9) * p.z

        if (p.y < -maxBoundY) {
          p.y = maxBoundY
          p.x = (Math.random() - 0.5) * width * 1.5
        }
        if (p.x < -maxBoundX) p.x = maxBoundX
        if (p.x > maxBoundX) p.x = -maxBoundX
        if (p.z < 0.3) p.z = 2.6
        if (p.z > 2.7) p.z = 0.35

        // Depth-of-Field calculation
        // Focal distance ~ 1.1: particles around 1.1 are razor sharp
        // Particles < 0.65 are blurred foreground bokeh
        // Particles > 1.8 are soft background stardust
        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.2 + 0.8
        const currentAlpha = p.alpha * pulse * Math.min(1, scale * 1.2)

        if (p.z < 0.65) {
          // FOREGROUND BOKEH: Large translucent out-of-focus orb
          const bokehRadius = p.baseRadius * 5.2 * scale
          const bokehGrad = ctx.createRadialGradient(
            screenX,
            screenY,
            0,
            screenX,
            screenY,
            bokehRadius
          )
          bokehGrad.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${currentAlpha * 0.4})`)
          bokehGrad.addColorStop(0.5, `hsla(${p.hue}, 85%, 55%, ${currentAlpha * 0.18})`)
          bokehGrad.addColorStop(1, `hsla(${p.hue}, 80%, 40%, 0)`)

          ctx.fillStyle = bokehGrad
          ctx.beginPath()
          ctx.arc(screenX, screenY, bokehRadius, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // MIDGROUND & SHARP EMBERS
          const radius = p.baseRadius * scale
          const glowRadius = radius * 3.4

          // Radiant Halo
          const emberGrad = ctx.createRadialGradient(
            screenX,
            screenY,
            0,
            screenX,
            screenY,
            glowRadius
          )
          emberGrad.addColorStop(0, `hsla(${p.hue}, 95%, 75%, ${currentAlpha * 0.9})`)
          emberGrad.addColorStop(0.35, `hsla(${p.hue}, 90%, 55%, ${currentAlpha * 0.4})`)
          emberGrad.addColorStop(1, `hsla(${p.hue}, 80%, 40%, 0)`)

          ctx.fillStyle = emberGrad
          ctx.beginPath()
          ctx.arc(screenX, screenY, glowRadius, 0, Math.PI * 2)
          ctx.fill()

          // Hot White-Gold Core for crisp realism
          if (p.z < 1.4) {
            ctx.fillStyle = `rgba(255, 253, 240, ${currentAlpha * 0.95})`
            ctx.beginPath()
            ctx.arc(screenX, screenY, Math.max(0.7, radius * 0.45), 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
      ctx.restore()

      // 5. CINEMATIC 4K VIGNETTE & SUBTLE SCANLINES
      const vignette = ctx.createRadialGradient(
        centerX,
        centerY,
        Math.min(width, height) * 0.45,
        centerX,
        centerY,
        Math.max(width, height) * 0.8
      )
      vignette.addColorStop(0, "rgba(3, 9, 6, 0)")
      vignette.addColorStop(1, "rgba(2, 6, 4, 0.82)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, width, height)

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030906]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
      {/* Film grain / specular micro-texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />
    </div>
  )
}
