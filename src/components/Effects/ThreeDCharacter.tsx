import { useEffect, useRef, useState, useCallback } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

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
  points: { x: number; y: number }[]
  alpha: number
  life: number
}

export default function ThreeDCharacter() {
  const threeCanvasRef = useRef<HTMLCanvasElement>(null)
  const lightningCanvasRef = useRef<HTMLCanvasElement>(null)

  // Dynamic screen position: follows user and stays where you interact (never snaps back to a fixed corner box)
  const [screenPos, setScreenPos] = useState(() => ({
    x: typeof window !== "undefined" ? Math.max(20, window.innerWidth - 160) : 220,
    y: typeof window !== "undefined" ? Math.max(80, window.innerHeight - 240) : 450,
  }))

  const targetPosRef = useRef({ x: screenPos.x, y: screenPos.y })
  const isRunningRef = useRef(false)
  const isZappingRef = useRef(false)
  const facingAngleRef = useRef(Math.PI / 4)

  // Keep target in bounds on window resize
  const clampPos = useCallback((x: number, y: number) => {
    if (typeof window === "undefined") return { x, y }
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 170
    return {
      x: Math.max(10, Math.min(maxX, x)),
      y: Math.max(60, Math.min(maxY, y)),
    }
  }, [])

  // ==========================================
  // 1. THREE.JS 3D FOX ENGINE (100% Free CC0/Apache Model)
  // ==========================================
  useEffect(() => {
    const canvas = threeCanvasRef.current
    if (!canvas) return

    const size = 150

    // Scene & Perspective Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 1.8, 4.6)
    camera.lookAt(0, 0.7, 0)

    // Transparent WebGL Renderer (Zero background, zero border)
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.35

    // Studio Lighting: Warm Amber Golden Rim + Electric Cyan Fill
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xfbbf24, 3.2)
    keyLight.position.set(3, 4, 3)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.4)
    rimLight.position.set(-3, 2, -2)
    scene.add(rimLight)

    const shockPointLight = new THREE.PointLight(0xfef08a, 0, 8)
    shockPointLight.position.set(0, 1, 1.5)
    scene.add(shockPointLight)

    // Master Model Container
    const modelContainer = new THREE.Group()
    scene.add(modelContainer)

    let mixer: THREE.AnimationMixer | null = null
    let surveyAction: THREE.AnimationAction | null = null
    let runAction: THREE.AnimationAction | null = null
    let currentAnim = "survey"

    // Load High-Quality Rigged Fox Model (Open-source Khronos Group glTF Asset)
    const loader = new GLTFLoader()
    const modelUrl = `${import.meta.env.BASE_URL}models/Fox.glb`

    loader.load(
      modelUrl,
      (gltf) => {
        const foxScene = gltf.scene
        // Scale to ideal viewing size
        foxScene.scale.set(0.016, 0.016, 0.016)
        foxScene.position.set(0, 0, 0)
        modelContainer.add(foxScene)

        // Set up skeletal animations
        mixer = new THREE.AnimationMixer(foxScene)
        const surveyClip = gltf.animations.find((a) => a.name === "Survey") || gltf.animations[0]
        const runClip = gltf.animations.find((a) => a.name === "Run") || gltf.animations[2]

        if (surveyClip && runClip) {
          surveyAction = mixer.clipAction(surveyClip)
          runAction = mixer.clipAction(runClip)

          // Start in idle looking around (Survey)
          surveyAction.play()
        }
      },
      undefined,
      (err) => {
        console.error("3D Model load error:", err)
      }
    )

    // 60FPS Render Loop
    let clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (mixer) {
        mixer.update(delta)

        const isRunning = isRunningRef.current

        // Seamless transition between Running and Idle (Survey)
        if (isRunning && currentAnim !== "run" && runAction && surveyAction) {
          surveyAction.fadeOut(0.2)
          runAction.reset().fadeIn(0.2).play()
          currentAnim = "run"
        } else if (!isRunning && currentAnim !== "survey" && runAction && surveyAction) {
          runAction.fadeOut(0.3)
          surveyAction.reset().fadeIn(0.3).play()
          currentAnim = "survey"
        }
      }

      // Smooth rotation towards travel direction
      modelContainer.rotation.y = THREE.MathUtils.lerp(
        modelContainer.rotation.y,
        facingAngleRef.current,
        0.12
      )

      // Electric surge flash when zapping
      if (isZappingRef.current) {
        shockPointLight.intensity = 6.0 + Math.random() * 4.0
        modelContainer.position.y = 0.15 + (Math.random() - 0.5) * 0.08
      } else {
        shockPointLight.intensity = 0
        modelContainer.position.y = 0
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.dispose()
      scene.clear()
    }
  }, [])

  // ==========================================
  // 2. DYNAMIC POSITIONING & LIGHTNING SYSTEM
  // ==========================================
  useEffect(() => {
    const canvas = lightningCanvasRef.current
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

    let bolts: LightningBolt[] = []
    let sparks: Spark[] = []

    // Fractal lightning arc generator
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
        if (disp < 7) {
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

    // Touch/Click interaction: 3D character sprints to the touched button, shocks it, AND STAYS NEARBY
    const triggerSprintAndShock = (targetX: number, targetY: number) => {
      // 1. Calculate new destination right beside the touched button
      const isRight = targetX > width / 2
      const newX = isRight ? targetX - 110 : targetX + 40
      const newY = targetY - 60

      const clamped = clampPos(newX, newY)
      targetPosRef.current = clamped

      // Point model towards the button
      facingAngleRef.current = isRight ? Math.PI / 2.5 : -Math.PI / 2.5
      isRunningRef.current = true
      isZappingRef.current = true

      // Move companion smoothly to new position
      setScreenPos(clamped)

      // 2. Generate electric shock arcs from character directly into touched button
      for (let i = 0; i < 4; i++) {
        const branch = createLightningBranch(
          clamped.x + 75,
          clamped.y + 75,
          targetX + (Math.random() - 0.5) * 30,
          targetY + (Math.random() - 0.5) * 30,
          65
        )
        bolts.push({
          points: branch,
          alpha: 1,
          life: 0.38,
        })
      }

      // 3. Burst of electric spark particles at touched element
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 2.5 + Math.random() * 8
        const life = 0.4 + Math.random() * 0.4
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

      // Settle down after reaching the button without snapping back to a fixed corner!
      window.setTimeout(() => {
        isZappingRef.current = false
        isRunningRef.current = false
      }, 500)
    }

    // Intercept clicks on buttons & interactive links
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null
      const buttonEl = target?.closest("button, a, input, [role='button']")
      if (buttonEl) {
        const rect = buttonEl.getBoundingClientRect()
        triggerSprintAndShock(rect.left + rect.width / 2, rect.top + rect.height / 2)
      }
    }
    window.addEventListener("click", handleGlobalClick as EventListener)

    // Scroll tracking: character runs alongside the user as they scroll through sections
    let lastScrollY = window.scrollY
    let scrollTimeout: number

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      if (Math.abs(delta) > 1.2) {
        isRunningRef.current = true
        // Turn in direction of scroll
        facingAngleRef.current = delta > 0 ? Math.PI / 1.8 : -Math.PI / 1.8

        // Smoothly pace along the viewport height as user scrolls
        const scrollFactor = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)
        const targetY = 90 + scrollFactor * (window.innerHeight - 250)

        const clamped = clampPos(targetPosRef.current.x, targetY)
        targetPosRef.current = clamped
        setScreenPos(clamped)

        window.clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => {
          isRunningRef.current = false
          facingAngleRef.current = Math.PI / 4 // Natural three-quarter resting pose
        }, 160)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Render loop for lightning arcs & particles
    let lastTime = performance.now()
    const renderCanvas = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Draw Lightning Bolts
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i]
        bolt.life -= dt
        bolt.alpha = Math.max(0, bolt.life / 0.38)

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
          ctx.lineWidth = 3.5
          ctx.stroke()

          // Pure White High-Voltage Core
          ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`
          ctx.lineWidth = 1.4
          ctx.stroke()
          ctx.restore()
        }

        if (bolt.life <= 0) {
          bolts.splice(i, 1)
        }
      }

      // Draw Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.2
        s.life -= dt
        s.alpha = Math.max(0, s.life / s.maxLife)

        ctx.save()
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.shadowBlur = 8
        ctx.shadowColor = s.color
        ctx.globalAlpha = s.alpha
        ctx.fill()
        ctx.restore()

        if (s.life <= 0) {
          sparks.splice(i, 1)
        }
      }

      animId = requestAnimationFrame(renderCanvas)
    }
    animId = requestAnimationFrame(renderCanvas)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("click", handleGlobalClick as EventListener)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [clampPos])

  // Direct tap handler on character: plays thunder surge and playful hop
  const handleDirectTap = () => {
    isZappingRef.current = true
    facingAngleRef.current = 0 // Look directly at user
    setTimeout(() => {
      isZappingRef.current = false
      facingAngleRef.current = Math.PI / 4
    }, 600)
  }

  return (
    <>
      {/* 1. Global Electric Lightning & Sparks Overlay Canvas */}
      <canvas
        ref={lightningCanvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* 2. Free-Roaming 3D Mascot (ZERO box, ZERO background, ZERO text) */}
      <div
        className="fixed z-40 select-none pointer-events-none flex items-center justify-center transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${screenPos.x}px, ${screenPos.y}px, 0)`,
          top: 0,
          left: 0,
        }}
      >
        {/* Transparent, Borderless Three.js 3D WebGL Canvas */}
        <canvas
          ref={threeCanvasRef}
          onClick={handleDirectTap}
          className="w-[140px] h-[140px] sm:w-[155px] sm:h-[155px] pointer-events-auto cursor-pointer block filter drop-shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
          title="3D Companion"
        />
      </div>
    </>
  )
}
