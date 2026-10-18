import { useEffect, useRef, useState, useCallback } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Sparkles, X, ArrowLeft, MessageCircle, Zap } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

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

interface TopicInfo {
  id: string
  title: string
  pill: string
  image: string
  badge: string
  story: string
  stats: string[]
}

const TOPICS: Record<string, TopicInfo> = {
  sugar: {
    id: "sugar",
    title: "Why Zero Added Cane Sugar?",
    pill: "🍌 100% Fruit Base (0g Added Sugar)",
    image: PUROBITE_IMAGES.hero,
    badge: "100% Natural Fruit Sweetness",
    story:
      "Our ripe bananas are slow-dehydrated under precise controlled heat. This evaporates moisture while locking in 100% of the natural fruit fructose and dietary potassium. Zero cane sugar, zero brown sugar, zero syrups — pure clean fruit energy!",
    stats: ["0.0g Added Sugar", "480mg Potassium", "Sustained Energy"],
  },
  superfoods: {
    id: "superfoods",
    title: "The 8 Whole Superfoods",
    pill: "🌱 8 Whole Ingredients Inside",
    image: PUROBITE_IMAGES.flatlay,
    badge: "100% Whole Real Food",
    story:
      "Every bite is handcrafted with: Slow-Dehydrated Bananas, California Whole Almonds, Creamy Cashews, Roasted Pumpkin Seeds, Toasted White Sesame, Heritage Black Sesame, Golden Sunflower Seeds, and Chia & Melon Super-Seeds. Zero fillers, 0% palm oil, 100% vegan!",
    stats: ["8 Superfoods", "0% Palm Oil", "100% Plant Fuel"],
  },
  nutrition: {
    id: "nutrition",
    title: "Lab-Verified Nutrition Breakdown",
    pill: "⚖️ Nutrition Facts (Sugar, Protein, Fiber)",
    image: PUROBITE_IMAGES.infographic,
    badge: "Clean Label Lab Verified",
    story:
      "Per 100g: 385 kcal of steady fuel, 8.2g bioavailable plant protein, 6.8g prebiotic fiber for gut digestion, 13.6g heart-healthy nut fats (no trans fats), and 480mg natural electrolytes. No artificial preservatives or coloring.",
    stats: ["385 kcal", "8.2g Protein", "6.8g Fiber"],
  },
  packs: {
    id: "packs",
    title: "Pack Sizes & Artisanal Ordering",
    pill: "📦 Pack Sizes & Fresh Handcrafting",
    image: PUROBITE_IMAGES.front,
    badge: "Handcrafted to Order in Kolkata",
    story:
      "We prepare every tub fresh upon order in Kolkata and pack them in recyclable kraft tubs with airtight freshness seals (6 months shelf life). Available in 200g (₹249), 350g Bestseller (₹399), and 700g Family Duo (₹749) with 1-tap WhatsApp ordering!",
    stats: ["200g Discovery", "350g Bestseller", "700g Duo"],
  },
}

export default function ThreeDCharacter() {
  const threeCanvasRef = useRef<HTMLCanvasElement>(null)
  const lightningCanvasRef = useRef<HTMLCanvasElement>(null)

  // Dialogue Assistant Modal State
  const [isDialogueOpen, setIsDialogueOpen] = useState(false)
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  // Screen coordinates for 3D character
  const [screenPos, setScreenPos] = useState(() => ({
    x: typeof window !== "undefined" ? Math.max(20, window.innerWidth - 160) : 220,
    y: typeof window !== "undefined" ? Math.max(80, window.innerHeight - 240) : 450,
  }))

  const targetPosRef = useRef({ x: screenPos.x, y: screenPos.y })
  const isRunningRef = useRef(false)
  const isZappingRef = useRef(false)
  const facingAngleRef = useRef(Math.PI / 4)

  const clampPos = useCallback((x: number, y: number) => {
    if (typeof window === "undefined") return { x, y }
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 170
    return {
      x: Math.max(10, Math.min(maxX, x)),
      y: Math.max(60, Math.min(maxY, y)),
    }
  }, [])

  // Auto-dismiss dialogue on scroll or touch outside
  useEffect(() => {
    if (!isDialogueOpen) return

    let initialScroll = window.scrollY
    const handleScrollToClose = () => {
      if (Math.abs(window.scrollY - initialScroll) > 30) {
        setIsDialogueOpen(false)
        setActiveTopic(null)
      }
    }

    window.addEventListener("scroll", handleScrollToClose, { passive: true })
    return () => window.removeEventListener("scroll", handleScrollToClose)
  }, [isDialogueOpen])

  // ==========================================
  // 1. THREE.JS 3D FOX ENGINE (100% Free CC0/Apache Model)
  // ==========================================
  useEffect(() => {
    const canvas = threeCanvasRef.current
    if (!canvas) return

    const size = 150

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 1.8, 4.6)
    camera.lookAt(0, 0.7, 0)

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

    const modelContainer = new THREE.Group()
    scene.add(modelContainer)

    let mixer: THREE.AnimationMixer | null = null
    let surveyAction: THREE.AnimationAction | null = null
    let runAction: THREE.AnimationAction | null = null
    let currentAnim = "survey"

    const loader = new GLTFLoader()
    const modelUrl = `${import.meta.env.BASE_URL}models/Fox.glb`

    loader.load(
      modelUrl,
      (gltf) => {
        const foxScene = gltf.scene
        foxScene.scale.set(0.016, 0.016, 0.016)
        foxScene.position.set(0, 0, 0)
        modelContainer.add(foxScene)

        mixer = new THREE.AnimationMixer(foxScene)
        const surveyClip = gltf.animations.find((a) => a.name === "Survey") || gltf.animations[0]
        const runClip = gltf.animations.find((a) => a.name === "Run") || gltf.animations[2]

        if (surveyClip && runClip) {
          surveyAction = mixer.clipAction(surveyClip)
          runAction = mixer.clipAction(runClip)
          surveyAction.play()
        }
      },
      undefined,
      (err) => console.error("Fox model error:", err)
    )

    let clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (mixer) {
        mixer.update(delta)

        const isRunning = isRunningRef.current

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

      modelContainer.rotation.y = THREE.MathUtils.lerp(
        modelContainer.rotation.y,
        facingAngleRef.current,
        0.12
      )

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
  // 2. DYNAMIC MOVEMENT & LIGHTNING ARCS
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

    const triggerSprintAndShock = (targetX: number, targetY: number) => {
      const isRight = targetX > width / 2
      const newX = isRight ? targetX - 110 : targetX + 40
      const newY = targetY - 60

      const clamped = clampPos(newX, newY)
      targetPosRef.current = clamped

      facingAngleRef.current = isRight ? Math.PI / 2.5 : -Math.PI / 2.5
      isRunningRef.current = true
      isZappingRef.current = true
      setScreenPos(clamped)

      for (let i = 0; i < 4; i++) {
        const branch = createLightningBranch(
          clamped.x + 75,
          clamped.y + 75,
          targetX + (Math.random() - 0.5) * 30,
          targetY + (Math.random() - 0.5) * 30,
          65
        )
        bolts.push({ points: branch, alpha: 1, life: 0.38 })
      }

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
          color: Math.random() > 0.35 ? "#fde047" : "#38bdf8",
        })
      }

      window.setTimeout(() => {
        isZappingRef.current = false
        isRunningRef.current = false
      }, 500)
    }

    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null
      // Avoid triggering button leaps if user is interacting with the dialogue assistant
      if (target?.closest("#companion-dialogue")) return

      const buttonEl = target?.closest("button, a, [role='button']")
      if (buttonEl && !target?.closest("canvas")) {
        const rect = buttonEl.getBoundingClientRect()
        triggerSprintAndShock(rect.left + rect.width / 2, rect.top + rect.height / 2)
      }
    }
    window.addEventListener("click", handleGlobalClick as EventListener)

    let lastScrollY = window.scrollY
    let scrollTimeout: number

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      if (Math.abs(delta) > 1.2) {
        isRunningRef.current = true
        facingAngleRef.current = delta > 0 ? Math.PI / 1.8 : -Math.PI / 1.8

        const scrollFactor = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)
        const targetY = 90 + scrollFactor * (window.innerHeight - 250)

        const clamped = clampPos(targetPosRef.current.x, targetY)
        targetPosRef.current = clamped
        setScreenPos(clamped)

        window.clearTimeout(scrollTimeout)
        scrollTimeout = window.setTimeout(() => {
          isRunningRef.current = false
          facingAngleRef.current = Math.PI / 4
        }, 160)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    const renderCanvas = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

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

        if (bolt.life <= 0) bolts.splice(i, 1)
      }

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

        if (s.life <= 0) sparks.splice(i, 1)
      }

      animId = requestAnimationFrame(renderCanvas)
    }
    let lastTime = performance.now()
    animId = requestAnimationFrame(renderCanvas)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("click", handleGlobalClick as EventListener)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [clampPos])

  // Direct Tap on 3D Character opens the Interactive Storyteller Menu
  const handleDirectTap = (e: React.MouseEvent) => {
    e.stopPropagation()
    isZappingRef.current = true
    facingAngleRef.current = 0 // Face user directly
    setIsDialogueOpen(true)
    setActiveTopic(null)
    setTimeout(() => {
      isZappingRef.current = false
    }, 450)
  }

  const closeDialogue = () => {
    setIsDialogueOpen(false)
    setActiveTopic(null)
    facingAngleRef.current = Math.PI / 4
  }

  const activeTopicData = activeTopic ? TOPICS[activeTopic] : null

  return (
    <>
      {/* 1. Global Electric Lightning & Sparks Overlay Canvas */}
      <canvas
        ref={lightningCanvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* 2. Free-Roaming 3D Mascot with Aesthetic Luxury Concierge Pill */}
      <div
        className="fixed z-40 select-none pointer-events-none flex flex-col items-center justify-center transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${screenPos.x}px, ${screenPos.y}px, 0)`,
          top: 0,
          left: 0,
        }}
      >
        {/* Transparent Three.js 3D WebGL Canvas */}
        <canvas
          ref={threeCanvasRef}
          onClick={handleDirectTap}
          className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] pointer-events-auto cursor-pointer block filter drop-shadow-[0_8px_24px_rgba(245,158,11,0.35)]"
          title="Tap me to learn about Banana Chew!"
        />

        {/* Minimal Luxury Concierge Pill */}
        <button
          onClick={handleDirectTap}
          className="pointer-events-auto -mt-2 px-2.5 py-0.5 rounded-full bg-[#050a07]/90 border border-amber-400/40 text-[9px] font-bold text-amber-300 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.8)] flex items-center gap-1 cursor-pointer hover:border-amber-400 hover:text-amber-200 transition-all touch-press"
        >
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          <span>Ask Concierge</span>
        </button>
      </div>

      {/* 3. Interactive 3D Companion Dialogue Modal (Dismiss on scroll or tap outside) */}
      {isDialogueOpen && (
        <div
          onClick={closeDialogue}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div
            id="companion-dialogue"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0f1f15] via-[#09140d] to-[#040805] border border-amber-400/40 p-5 sm:p-6 shadow-[0_0_50px_rgba(245,158,11,0.35)] backdrop-blur-2xl text-stone-100 relative max-h-[88vh] overflow-y-auto"
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-300 block">
                    3D Companion Storyteller
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Handcrafted PuroBite Guide
                  </span>
                </div>
              </div>

              <button
                onClick={closeDialogue}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/15 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* View A: Menu Selection State */}
            {!activeTopicData ? (
              <div className="pt-4 flex flex-col gap-3">
                <div className="text-center sm:text-left mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                    "Is there anything you want to know?"
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 font-light">
                    Tap any topic below to learn what makes PuroBite Banana Chew special:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {Object.values(TOPICS).map((top) => (
                    <button
                      key={top.id}
                      onClick={() => setActiveTopic(top.id)}
                      className="w-full p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-amber-400/25 hover:border-amber-400/60 text-left flex items-center justify-between transition-all group cursor-pointer shadow-sm touch-press"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-stone-100 group-hover:text-amber-200">
                        {top.pill}
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                    </button>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 text-center">
                  <span className="text-[11px] font-mono text-stone-400">
                    💡 Tip: Scroll or tap anywhere outside to close.
                  </span>
                </div>
              </div>
            ) : (
              /* View B: Detailed Topic Presentation with Image, Story & Facts */
              <div className="pt-4 flex flex-col gap-4">
                <button
                  onClick={() => setActiveTopic(null)}
                  className="self-start inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Topics</span>
                </button>

                {/* High-Res Photo Card */}
                <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-stone-950 border border-white/10 shadow-lg">
                  <img
                    src={activeTopicData.image}
                    alt={activeTopicData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-stone-950/80 border border-amber-400/40 text-[10px] font-bold text-amber-300 backdrop-blur-md">
                    {activeTopicData.badge}
                  </div>
                </div>

                {/* Narrative Headline & Story */}
                <div>
                  <h4 className="text-xl font-bold font-serif-luxury text-white mb-1.5">
                    {activeTopicData.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
                    "{activeTopicData.story}"
                  </p>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2">
                  {activeTopicData.stats.map((st, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-xl bg-amber-400/[0.08] border border-amber-400/30 text-center"
                    >
                      <span className="text-[11px] font-bold text-amber-300 block">
                        {st}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <button
                    onClick={() => setActiveTopic(null)}
                    className="text-xs text-stone-400 hover:text-white transition-colors"
                  >
                    Ask Another
                  </button>

                  <a
                    href={`https://wa.me/918250755958?text=${encodeURIComponent(
                      `Hello PuroBite! I'd like to order Banana Chew handcrafted pack.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 text-xs font-bold shadow-md cursor-pointer touch-press transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
