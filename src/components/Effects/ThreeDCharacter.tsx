import { useEffect, useRef, useState, useCallback } from "react"
import * as THREE from "three"
import { Zap, Sparkles } from "lucide-react"

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

  const [isRunning, setIsRunning] = useState(false)
  const [isZapping, setIsZapping] = useState(false)
  const [isDashing, setIsDashing] = useState(false)
  const [statusText, setStatusText] = useState("3D Wukong Ready")
  const [showHint, setShowHint] = useState(true)

  // Mutable refs for continuous 60fps Three.js animation without WebGL teardown
  const isRunningRef = useRef(false)
  const isZappingRef = useRef(false)
  const facingRef = useRef<"down" | "up">("down")

  useEffect(() => {
    isRunningRef.current = isRunning
  }, [isRunning])

  useEffect(() => {
    isZappingRef.current = isZapping
  }, [isZapping])

  // Hide hint bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  // Viewport-aware resting position for mobile and desktop
  const getRestingPos = useCallback(() => {
    if (typeof window === "undefined") return { x: 240, y: 500 }
    const isMobile = window.innerWidth < 640
    return {
      x: window.innerWidth - (isMobile ? 116 : 136),
      y: window.innerHeight - (isMobile ? 180 : 190),
    }
  }, [])

  const [screenPos, setScreenPos] = useState(() => ({
    x: typeof window !== "undefined" ? window.innerWidth - 116 : 240,
    y: typeof window !== "undefined" ? window.innerHeight - 180 : 500,
  }))

  useEffect(() => {
    const handleResize = () => {
      if (!isDashing) {
        setScreenPos(getRestingPos())
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getRestingPos, isDashing])

  // ==========================================
  // 1. STABLE THREE.JS 3D ENGINE (Mounts ONCE)
  // ==========================================
  useEffect(() => {
    const canvas = threeCanvasRef.current
    if (!canvas) return

    const size = 110

    // Scene & Perspective Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50)
    camera.position.set(0, 0.45, 4.0)
    camera.lookAt(0, 0.1, 0)

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25

    // Lighting (Lumen God-Ray style warm amber + cyan rim lights)
    const ambientLight = new THREE.AmbientLight(0xfffbeb, 1.5)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xfbbf24, 2.8)
    keyLight.position.set(2.5, 3.5, 3)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0)
    rimLight.position.set(-3, 1.5, -2)
    scene.add(rimLight)

    const zapLight = new THREE.PointLight(0xfef08a, 0, 6)
    zapLight.position.set(0, 0.5, 1)
    scene.add(zapLight)

    // Mascot Master 3D Group
    const mascotGroup = new THREE.Group()
    scene.add(mascotGroup)

    // Materials
    const goldFurMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.35,
      metalness: 0.25,
    })
    const peachSkinMat = new THREE.MeshStandardMaterial({
      color: 0xfef3c7,
      roughness: 0.5,
      metalness: 0.1,
    })
    const goldArmorMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.15,
      metalness: 0.9,
    })
    const rubyMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xb91c1c,
      roughness: 0.1,
      metalness: 0.6,
    })
    const cyanEyeMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      roughness: 0.1,
    })
    const staffMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      metalness: 0.75,
      roughness: 0.25,
    })
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      transparent: true,
      opacity: 0.88,
    })

    // --- 3D Head ---
    const headGroup = new THREE.Group()
    headGroup.position.set(0, 0.35, 0)

    const headGeo = new THREE.SphereGeometry(0.48, 24, 24)
    const headMesh = new THREE.Mesh(headGeo, goldFurMat)
    headGroup.add(headMesh)

    // Face Muzzle
    const faceGeo = new THREE.SphereGeometry(0.32, 20, 20)
    const faceMesh = new THREE.Mesh(faceGeo, peachSkinMat)
    faceMesh.position.set(0, -0.05, 0.26)
    faceMesh.scale.set(1, 0.82, 0.7)
    headGroup.add(faceMesh)

    // Snout
    const noseGeo = new THREE.SphereGeometry(0.06, 12, 12)
    const noseMat = new THREE.MeshBasicMaterial({ color: 0x451a03 })
    const noseMesh = new THREE.Mesh(noseGeo, noseMat)
    noseMesh.position.set(0, -0.02, 0.49)
    headGroup.add(noseMesh)

    // Glowing Cyan Eyes
    const eyeGeo = new THREE.SphereGeometry(0.08, 16, 16)
    const leftEye = new THREE.Mesh(eyeGeo, cyanEyeMat)
    leftEye.position.set(-0.16, 0.08, 0.42)
    const rightEye = new THREE.Mesh(eyeGeo, cyanEyeMat)
    rightEye.position.set(0.16, 0.08, 0.42)
    headGroup.add(leftEye)
    headGroup.add(rightEye)

    // Highlights
    const pupilGeo = new THREE.SphereGeometry(0.03, 8, 8)
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const p1 = new THREE.Mesh(pupilGeo, pupilMat)
    p1.position.set(-0.14, 0.1, 0.48)
    const p2 = new THREE.Mesh(pupilGeo, pupilMat)
    p2.position.set(0.18, 0.1, 0.48)
    headGroup.add(p1)
    headGroup.add(p2)

    // Ears
    const earGeo = new THREE.SphereGeometry(0.16, 16, 16)
    const leftEar = new THREE.Mesh(earGeo, goldFurMat)
    leftEar.position.set(-0.44, 0.12, 0)
    leftEar.scale.set(0.6, 1, 0.8)
    const rightEar = new THREE.Mesh(earGeo, goldFurMat)
    rightEar.position.set(0.44, 0.12, 0)
    rightEar.scale.set(0.6, 1, 0.8)
    headGroup.add(leftEar)
    headGroup.add(rightEar)

    // Golden Circlet (Fillet)
    const circletGeo = new THREE.TorusGeometry(0.49, 0.045, 12, 32)
    const circletMesh = new THREE.Mesh(circletGeo, goldArmorMat)
    circletMesh.rotation.x = Math.PI / 2.3
    circletMesh.position.set(0, 0.12, 0)
    headGroup.add(circletMesh)

    // Center Ruby
    const gemGeo = new THREE.SphereGeometry(0.065, 12, 12)
    const gemMesh = new THREE.Mesh(gemGeo, rubyMat)
    gemMesh.position.set(0, 0.32, 0.42)
    headGroup.add(gemMesh)

    mascotGroup.add(headGroup)

    // --- 3D Torso ---
    const bodyGeo = new THREE.SphereGeometry(0.38, 20, 20)
    const bodyMesh = new THREE.Mesh(bodyGeo, goldFurMat)
    bodyMesh.position.set(0, -0.22, 0)
    bodyMesh.scale.set(0.9, 1.1, 0.8)
    mascotGroup.add(bodyMesh)

    const bellyGeo = new THREE.SphereGeometry(0.26, 16, 16)
    const bellyMesh = new THREE.Mesh(bellyGeo, peachSkinMat)
    bellyMesh.position.set(0, -0.2, 0.18)
    bellyMesh.scale.set(0.9, 1, 0.6)
    mascotGroup.add(bellyMesh)

    // --- 3D Arms & Golden Staff ---
    const armGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.36, 12)
    const leftArm = new THREE.Mesh(armGeo, goldFurMat)
    leftArm.position.set(-0.38, -0.18, 0.05)
    leftArm.rotation.z = Math.PI / 4
    mascotGroup.add(leftArm)

    const rightArm = new THREE.Mesh(armGeo, goldFurMat)
    rightArm.position.set(0.38, -0.18, 0.05)
    rightArm.rotation.z = -Math.PI / 4
    mascotGroup.add(rightArm)

    // Divine Golden Staff (Ruyi Jingu Bang)
    const staffGeo = new THREE.CylinderGeometry(0.035, 0.035, 1.25, 12)
    const staffMesh = new THREE.Mesh(staffGeo, staffMat)
    staffMesh.position.set(0.48, -0.05, 0.22)
    staffMesh.rotation.z = -Math.PI / 7
    mascotGroup.add(staffMesh)

    const capGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.18, 12)
    const topCap = new THREE.Mesh(capGeo, goldArmorMat)
    topCap.position.set(0, 0.52, 0)
    staffMesh.add(topCap)
    const btmCap = new THREE.Mesh(capGeo, goldArmorMat)
    btmCap.position.set(0, -0.52, 0)
    staffMesh.add(btmCap)

    // --- 3D Legs ---
    const legGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.34, 12)
    const leftLeg = new THREE.Mesh(legGeo, goldFurMat)
    leftLeg.position.set(-0.18, -0.55, 0)
    mascotGroup.add(leftLeg)

    const rightLeg = new THREE.Mesh(legGeo, goldFurMat)
    rightLeg.position.set(0.18, -0.55, 0)
    mascotGroup.add(rightLeg)

    // --- 3D Cloud Base ---
    const cloudGroup = new THREE.Group()
    cloudGroup.position.set(0, -0.72, 0)
    for (let i = 0; i < 5; i++) {
      const puffGeo = new THREE.SphereGeometry(0.2 + (i % 2) * 0.08, 12, 12)
      const puff = new THREE.Mesh(puffGeo, cloudMat)
      puff.position.set((i - 2) * 0.18, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.1)
      cloudGroup.add(puff)
    }
    mascotGroup.add(cloudGroup)

    // --- 3D Zigzag Lightning Tail ---
    const tailGroup = new THREE.Group()
    tailGroup.position.set(0, -0.38, -0.28)
    const segGeo = new THREE.BoxGeometry(0.06, 0.14, 0.05)
    for (let i = 0; i < 4; i++) {
      const seg = new THREE.Mesh(segGeo, goldArmorMat)
      seg.position.set(i % 2 === 0 ? 0.06 : -0.06, i * 0.12, -i * 0.08)
      seg.rotation.z = i % 2 === 0 ? 0.35 : -0.35
      tailGroup.add(seg)
    }
    mascotGroup.add(tailGroup)

    // 60FPS Render Loop
    let clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      const running = isRunningRef.current
      const zapping = isZappingRef.current
      const facing = facingRef.current

      if (running) {
        // High-speed running leg cycles
        leftLeg.rotation.x = Math.sin(t * 22) * 0.85
        rightLeg.rotation.x = -Math.sin(t * 22) * 0.85
        leftArm.rotation.x = -Math.sin(t * 22) * 0.75
        rightArm.rotation.x = Math.sin(t * 22) * 0.75

        // Dynamic sprint tilt & bounce
        mascotGroup.rotation.y = facing === "down" ? 0.3 : -0.3
        mascotGroup.rotation.z = facing === "down" ? 0.15 : -0.15
        mascotGroup.position.y = Math.abs(Math.sin(t * 22)) * 0.14
        cloudGroup.scale.setScalar(1 + Math.sin(t * 24) * 0.15)
      } else {
        // Smooth idle floating hover
        leftLeg.rotation.x = 0
        rightLeg.rotation.x = 0
        leftArm.rotation.x = 0
        rightArm.rotation.x = 0

        mascotGroup.position.y = Math.sin(t * 2.8) * 0.08
        mascotGroup.rotation.y = Math.sin(t * 1.5) * 0.22
        mascotGroup.rotation.z = 0
        cloudGroup.rotation.y = t * 0.5
      }

      // Tail crackle
      tailGroup.rotation.z = Math.sin(t * 14) * 0.25
      tailGroup.rotation.y = Math.cos(t * 10) * 0.2

      // Zapping surge
      if (zapping) {
        zapLight.intensity = 5.5 + Math.random() * 4.5
        mascotGroup.position.x = (Math.random() - 0.5) * 0.08
        mascotGroup.position.y += (Math.random() - 0.5) * 0.08
        staffMesh.rotation.z = -Math.PI / 4 + Math.sin(t * 32) * 0.5
      } else {
        zapLight.intensity = 0
        mascotGroup.position.x = 0
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
  // 2. 2D LIGHTNING BOLTS & SPARK PARTICLES
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

    let returnTimeout: number
    const trigger3DLeapAndShock = (targetX: number, targetY: number) => {
      setShowHint(false)
      const isRight = targetX > width / 2
      const dashX = Math.max(12, Math.min(width - 120, isRight ? targetX - 95 : targetX + 25))
      const dashY = Math.max(45, Math.min(height - 130, targetY - 55))

      setIsDashing(true)
      setIsZapping(true)
      setStatusText("⚡ THUNDERBOLT!")
      setScreenPos({ x: dashX, y: dashY })

      // Generate 4 fractal lightning bolts
      for (let i = 0; i < 4; i++) {
        const branch = createLightningBranch(
          dashX + 55,
          dashY + 55,
          targetX + (Math.random() - 0.5) * 35,
          targetY + (Math.random() - 0.5) * 35,
          65
        )
        bolts.push({
          points: branch,
          alpha: 1,
          life: 0.35,
        })
      }

      // Burst of 32 golden sparks
      for (let i = 0; i < 32; i++) {
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
          color: Math.random() > 0.3 ? "#fde047" : "#38bdf8",
        })
      }

      window.setTimeout(() => {
        setIsZapping(false)
        setStatusText("Landing...")
      }, 450)

      window.clearTimeout(returnTimeout)
      returnTimeout = window.setTimeout(() => {
        setIsDashing(false)
        setStatusText("3D Wukong Ready")
        setScreenPos(getRestingPos())
      }, 850)
    }

    // Intercept clicks on buttons & interactive links
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null
      const buttonEl = target?.closest("button, a, input, [role='button']")
      if (buttonEl) {
        const rect = buttonEl.getBoundingClientRect()
        trigger3DLeapAndShock(rect.left + rect.width / 2, rect.top + rect.height / 2)
      }
    }
    window.addEventListener("click", handleGlobalClick as EventListener)

    // Scroll tracking for running animation
    let lastScrollY = window.scrollY
    let scrollTimeout: number

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      if (Math.abs(delta) > 1.2) {
        setIsRunning(true)
        facingRef.current = delta > 0 ? "down" : "up"
        setStatusText(delta > 0 ? "SPRINTING ⚡" : "CLIMBING ⚡")

        window.clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => {
          setIsRunning(false)
          setStatusText("3D Wukong Ready")
        }, 180)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Render loop for lightning & sparks
    let lastTime = performance.now()
    const renderCanvas = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Lightning
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i]
        bolt.life -= dt
        bolt.alpha = Math.max(0, bolt.life / 0.35)

        if (bolt.points.length > 1) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(bolt.points[0].x, bolt.points[0].y)
          for (let p = 1; p < bolt.points.length; p++) {
            ctx.lineTo(bolt.points[p].x, bolt.points[p].y)
          }

          ctx.shadowBlur = 18
          ctx.shadowColor = "rgba(250, 204, 21, 0.95)"
          ctx.strokeStyle = `rgba(254, 240, 138, ${bolt.alpha})`
          ctx.lineWidth = 3.5
          ctx.stroke()

          ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`
          ctx.lineWidth = 1.4
          ctx.stroke()
          ctx.restore()
        }

        if (bolt.life <= 0) {
          bolts.splice(i, 1)
        }
      }

      // Sparks
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
      clearTimeout(returnTimeout)
    }
  }, [getRestingPos])

  // Direct tap handler on the 3D mascot itself
  const handleMascotTap = () => {
    setIsZapping(true)
    setStatusText("⚡ THUNDER SURGE!")
    setTimeout(() => {
      setIsZapping(false)
      setStatusText("3D Wukong Ready")
    }, 600)
  }

  return (
    <>
      {/* 1. Global 2D Lightning & Sparks Overlay */}
      <canvas
        ref={lightningCanvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* 2. Floating 3D WebGL Mascot Container */}
      <div
        className={`fixed z-40 select-none pointer-events-none flex flex-col items-center transition-all ${
          isDashing ? "duration-200 ease-out" : "duration-500 ease-in-out"
        }`}
        style={{
          transform: `translate3d(${screenPos.x}px, ${screenPos.y}px, 0)`,
          top: 0,
          left: 0,
        }}
      >
        {/* Mobile Speech Bubble Callout */}
        {showHint && (
          <div className="mb-2 px-3 py-1 rounded-xl bg-amber-400 text-stone-950 text-[10px] font-bold shadow-xl border border-yellow-200 flex items-center gap-1.5 animate-bounce pointer-events-auto">
            <Sparkles className="w-3 h-3 fill-stone-950" />
            <span>Tap me or scroll!</span>
          </div>
        )}

        {/* Shockwave Radial Halo when zapping */}
        {isZapping && (
          <div className="absolute -inset-6 rounded-full bg-amber-400/40 blur-xl animate-ping pointer-events-none" />
        )}

        {/* 3D WebGL Canvas Card (Tappable for interactive power surge) */}
        <div
          onClick={handleMascotTap}
          role="button"
          tabIndex={0}
          aria-label="Interactive 3D Wukong Mascot"
          className={`relative rounded-3xl bg-gradient-to-b from-[#0e2115]/85 via-[#07130b]/90 to-amber-950/45 border border-amber-400/50 shadow-[0_8px_32px_rgba(245,158,11,0.5)] backdrop-blur-xl p-1 pointer-events-auto cursor-pointer transition-transform ${
            isZapping ? "scale-125 border-yellow-300" : isRunning ? "scale-110" : "scale-100 active:scale-95"
          }`}
        >
          {/* Top-Right Zap Indicator */}
          <div
            className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-md ${
              isZapping ? "animate-spin bg-yellow-300 scale-125" : isRunning ? "animate-bounce" : ""
            }`}
          >
            <Zap className="w-3 h-3 fill-current" />
          </div>

          {/* Three.js 3D WebGL Canvas */}
          <canvas
            ref={threeCanvasRef}
            className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] block filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]"
          />

          {/* Running Sparks beneath Cloud */}
          {isRunning && (
            <div className="absolute -bottom-2 inset-x-0 flex justify-center gap-1.5 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="w-1 h-1 rounded-full bg-amber-300" />
            </div>
          )}
        </div>

        {/* Dynamic Mobile Status Label */}
        <div className="mt-1.5 px-3 py-0.5 rounded-full bg-stone-950/90 border border-amber-400/40 text-[9px] font-mono font-bold text-amber-300 backdrop-blur-md shadow-lg tracking-wider">
          {statusText}
        </div>
      </div>
    </>
  )
}
