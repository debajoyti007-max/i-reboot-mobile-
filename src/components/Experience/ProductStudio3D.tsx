import { useEffect, useRef, useState, useCallback } from "react"
import * as THREE from "three"
import { Sparkles, RotateCcw, ShieldCheck, MessageCircle, X } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

interface Hotspot {
  id: string
  label: string
  sublabel: string
  angle: number // Radian angle around tub
  yPos: number // Y position along tub height
  title: string
  badge: string
  image: string
  description: string
  fact: string
  stats: { label: string; value: string }[]
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "sugar",
    label: "0g Added Sugar",
    sublabel: "100% Ripe Fruit Sweetness",
    angle: 0,
    yPos: 0.2,
    title: "Zero Added Cane Sugar",
    badge: "100% Natural Fruit Fructose",
    image: PUROBITE_IMAGES.hero,
    description:
      "Sweetened solely by ripe Cavendish bananas slow-dehydrated at low temperatures. No cane sugar, no brown sugar, no corn syrup, no maltodextrin. Pure, natural fruit caramelization.",
    fact: "480mg natural potassium per 100g with zero post-sugar insulin crash.",
    stats: [
      { label: "Added Cane Sugar", value: "0.0 g" },
      { label: "Natural Potassium", value: "480 mg" },
      { label: "Sweetness", value: "100% Fruit" },
    ],
  },
  {
    id: "superfoods",
    label: "8 Whole Superfoods",
    sublabel: "Whole Nuts & Seeds",
    angle: Math.PI * 0.55,
    yPos: -0.2,
    title: "8 Whole Superfoods",
    badge: "Whole-Food Matrix",
    image: PUROBITE_IMAGES.flatlay,
    description:
      "Every tub is packed with recognizable California whole almonds, buttery cashews, roasted pumpkin seeds, toasted white & black sesame, sunflower seeds, and chia & melon super-seeds.",
    fact: "Zero powders or protein isolates. Every nut and seed is whole and visible.",
    stats: [
      { label: "Superfoods", value: "8 Whole" },
      { label: "Palm Oil", value: "0.0%" },
      { label: "Plant Protein", value: "8.2 g" },
    ],
  },
  {
    id: "seal",
    label: "Airtight Keepsake Tub",
    sublabel: "6 Months Freshness Lock",
    angle: Math.PI * 1.1,
    yPos: 1.15,
    title: "Artisanal Airtight Keepsake Tub",
    badge: "Freshness Preserved",
    image: PUROBITE_IMAGES.front,
    description:
      "Hand-sealed in Kolkata in recyclable food-grade kraft tubs with a moisture-barrier inner lining. Guarantees 6 months of peak crunch and chewy banana texture without chemical preservatives.",
    fact: "Hermetically sealed immediately after hand-packing in our Kolkata kitchen.",
    stats: [
      { label: "Shelf Life", value: "6 Months" },
      { label: "Packaging", value: "Recyclable Kraft" },
      { label: "Preservatives", value: "0.0%" },
    ],
  },
  {
    id: "batch",
    label: "Small-Batch Handcrafted",
    sublabel: "Kolkata Kitchen Origin",
    angle: Math.PI * 1.65,
    yPos: -0.6,
    title: "Fresh Kolkata Small-Batch",
    badge: "Crafted to Order",
    image: PUROBITE_IMAGES.table,
    description:
      "Never mass-produced in giant automated factories. We prepare small daily batches in Kolkata and dispatch within 24–48 hours of order confirmation for peak artisanal freshness.",
    fact: "Each tub is hand-inspected and marked with its unique kitchen batch code.",
    stats: [
      { label: "Batch Size", value: "Small-Batch" },
      { label: "Dispatch", value: "24-48 Hours" },
      { label: "Origin", value: "Kolkata, WB" },
    ],
  },
]

export default function ProductStudio3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  const [isRotating, setIsRotating] = useState(true)
  const [activePreset, setActivePreset] = useState<string>("spin")

  // Hotspot screen positions for 2D overlays
  const [hotspotPositions, setHotspotPositions] = useState<{ id: string; x: number; y: number; visible: boolean }[]>([])

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const tubGroupRef = useRef<THREE.Group | null>(null)
  const rotationVelocityRef = useRef(0)
  const isDraggingRef = useRef(false)
  const lastMouseXRef = useRef(0)
  const targetRotationYRef = useRef<number | null>(null)

  // Generate high-resolution procedural label texture
  const createLabelTexture = useCallback(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    // Background gradient: Deep artisanal emerald & obsidian
    const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    bgGrad.addColorStop(0, "#08130d")
    bgGrad.addColorStop(0.5, "#0b1a13")
    bgGrad.addColorStop(1, "#050d09")
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Subtle kraft paper texture lines
    ctx.fillStyle = "rgba(229, 193, 121, 0.03)"
    for (let i = 0; i < canvas.height; i += 6) {
      ctx.fillRect(0, i, canvas.width, 1)
    }

    // Top and bottom gold foil borders
    ctx.strokeStyle = "#e5c179"
    ctx.lineWidth = 5
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60)
    ctx.strokeStyle = "rgba(229, 193, 121, 0.4)"
    ctx.lineWidth = 2
    ctx.strokeRect(45, 45, canvas.width - 90, canvas.height - 90)

    // Divider vertical lines (panel divisions)
    ctx.strokeStyle = "rgba(229, 193, 121, 0.2)"
    ctx.setLineDash([8, 8])
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.33, 50)
    ctx.lineTo(canvas.width * 0.33, canvas.height - 50)
    ctx.moveTo(canvas.width * 0.67, 50)
    ctx.lineTo(canvas.width * 0.67, canvas.height - 50)
    ctx.stroke()
    ctx.setLineDash([])

    // ================= PANEL 1: FRONT BRAND CREST (CENTER, 33% - 67%) =================
    const centerX = canvas.width * 0.5
    ctx.textAlign = "center"

    // Crown / Leaf Flourish
    ctx.fillStyle = "#e5c179"
    ctx.font = "bold 24px 'Cinzel', serif"
    ctx.letterSpacing = "6px"
    ctx.fillText("✦  KOLKATA ARTISANAL KITCHEN  ✦", centerX, 160)

    // Brand Name: PuroBite
    ctx.font = "bold 110px 'Cormorant Garamond', Georgia, serif"
    ctx.letterSpacing = "4px"
    const goldTextGrad = ctx.createLinearGradient(centerX - 250, 0, centerX + 250, 0)
    goldTextGrad.addColorStop(0, "#fef3c7")
    goldTextGrad.addColorStop(0.5, "#f59e0b")
    goldTextGrad.addColorStop(1, "#d97706")
    ctx.fillStyle = goldTextGrad
    ctx.shadowColor = "rgba(229, 193, 121, 0.5)"
    ctx.shadowBlur = 20
    ctx.fillText("PUROBITE™", centerX, 290)
    ctx.shadowBlur = 0

    // Product Title: BANANA CHEW
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 44px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "8px"
    ctx.fillText("BANANA CHEW", centerX, 360)

    // Subtitle Badge
    ctx.fillStyle = "#fbbf24"
    ctx.font = "italic 32px 'Cormorant Garamond', Georgia, serif"
    ctx.letterSpacing = "2px"
    ctx.fillText("Slow-Dehydrated Ripe Bananas • Whole Superfoods", centerX, 420)

    // Gold Pill Container for 0g Added Sugar
    const pillW = 540
    const pillH = 70
    const pillX = centerX - pillW / 2
    const pillY = 470
    ctx.fillStyle = "rgba(229, 193, 121, 0.15)"
    ctx.strokeStyle = "#e5c179"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.roundRect(pillX, pillY, pillW, pillH, 35)
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 26px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "3px"
    ctx.fillText("🍌  0g ADDED CANE SUGAR  •  100% FRUIT", centerX, pillY + 44)

    // Bottom Specs Bar on Front
    ctx.fillStyle = "#d1d5db"
    ctx.font = "500 22px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "2px"
    ctx.fillText("CALIFORNIA ALMONDS  •  CASHEWS  •  8 SUPERFOODS", centerX, 610)

    // Net Weight and Seal
    ctx.fillStyle = "#e5c179"
    ctx.font = "bold 24px 'Plus Jakarta Sans', sans-serif"
    ctx.fillText("NET WT: 350g e  |  BATCH #PB-KOL-0428", centerX, 670)

    // Guarantee Stamp
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
    ctx.font = "18px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "1px"
    ctx.fillText("Handcrafted with pride in Kolkata, West Bengal • FSSAI Certified", centerX, 730)

    // ================= PANEL 2: NUTRITION & PURITY (LEFT, 0% - 33%) =================
    const leftX = canvas.width * 0.165
    ctx.textAlign = "center"

    ctx.fillStyle = "#e5c179"
    ctx.font = "bold 32px 'Cinzel', serif"
    ctx.letterSpacing = "3px"
    ctx.fillText("NUTRITION FACTS", leftX, 160)

    ctx.fillStyle = "#9ca3af"
    ctx.font = "18px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "1px"
    ctx.fillText("Per 100g Serving Handcrafted Batch", leftX, 200)

    // Nutrition Box
    const facts = [
      { name: "Energy", val: "385 kcal", sub: "Sustained" },
      { name: "Added Cane Sugar", val: "0.0 g", sub: "100% Fruit" },
      { name: "Plant Protein", val: "8.2 g", sub: "Whole Nuts" },
      { name: "Dietary Fiber", val: "6.8 g", sub: "Prebiotic" },
      { name: "Natural Potassium", val: "480 mg", sub: "Cavendish" },
      { name: "Trans Fats", val: "0.0 g", sub: "Zero Palm Oil" },
    ]

    facts.forEach((item, idx) => {
      const y = 260 + idx * 80
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(leftX - 250, y - 30, 500, 65)

      ctx.textAlign = "left"
      ctx.fillStyle = "#f3f4f6"
      ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif"
      ctx.letterSpacing = "1px"
      ctx.fillText(item.name, leftX - 230, y + 8)

      ctx.textAlign = "right"
      ctx.fillStyle = "#fbbf24"
      ctx.font = "bold 26px 'Cormorant Garamond', serif"
      ctx.fillText(item.val, leftX + 230, y + 8)
    })

    // ================= PANEL 3: 8 SUPERFOODS & CRAFT (RIGHT, 67% - 100%) =================
    const rightX = canvas.width * 0.835
    ctx.textAlign = "center"

    ctx.fillStyle = "#e5c179"
    ctx.font = "bold 32px 'Cinzel', serif"
    ctx.letterSpacing = "3px"
    ctx.fillText("8 SUPERFOODS", rightX, 160)

    ctx.fillStyle = "#9ca3af"
    ctx.font = "18px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "1px"
    ctx.fillText("100% Whole Real Food Matrix", rightX, 200)

    const ingredients = [
      "1. Sun-Ripened Cavendish Bananas",
      "2. California Whole Almonds",
      "3. Creamy Whole Cashews",
      "4. Roasted Pumpkin Seeds",
      "5. Toasted White Sesame",
      "6. Heritage Black Sesame",
      "7. Golden Sunflower Seeds",
      "8. Prebiotic Chia & Melon Seeds",
    ]

    ingredients.forEach((ing, idx) => {
      const y = 260 + idx * 60
      ctx.textAlign = "left"
      ctx.fillStyle = "#e5e7eb"
      ctx.font = "500 20px 'Plus Jakarta Sans', sans-serif"
      ctx.letterSpacing = "1px"
      ctx.fillText(ing, rightX - 240, y + 5)
    })

    ctx.textAlign = "center"
    ctx.fillStyle = "#10b981"
    ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif"
    ctx.letterSpacing = "2px"
    ctx.fillText("✓ 100% VEGAN  •  GLUTEN-FREE  •  NON-GMO", rightX, 780)

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.repeat.x = -1 // Fix mirror
    return texture
  }, [])

  // Generate Lid Top Wax Seal Texture
  const createLidTexture = useCallback(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 1024
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    // Dark metallic brass background
    const radGrad = ctx.createRadialGradient(512, 512, 100, 512, 512, 512)
    radGrad.addColorStop(0, "#d97706")
    radGrad.addColorStop(0.7, "#92400e")
    radGrad.addColorStop(1, "#451a03")
    ctx.fillStyle = radGrad
    ctx.fillRect(0, 0, 1024, 1024)

    // Concentric gold rings
    ctx.strokeStyle = "#fef3c7"
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.arc(512, 512, 450, 0, Math.PI * 2)
    ctx.stroke()

    ctx.strokeStyle = "#f59e0b"
    ctx.lineWidth = 12
    ctx.beginPath()
    ctx.arc(512, 512, 420, 0, Math.PI * 2)
    ctx.stroke()

    ctx.strokeStyle = "#fef3c7"
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(512, 512, 380, 0, Math.PI * 2)
    ctx.stroke()

    // Center crest
    ctx.textAlign = "center"
    ctx.fillStyle = "#fffbeb"
    ctx.font = "bold 56px 'Cinzel', serif"
    ctx.fillText("PUROBITE™", 512, 480)

    ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif"
    ctx.fillStyle = "#fde68a"
    ctx.fillText("KOLKATA ARTISANAL SEAL", 512, 540)

    ctx.font = "italic 26px 'Cormorant Garamond', serif"
    ctx.fillStyle = "#ffffff"
    ctx.fillText("0g Added Sugar  •  Pure Freshness Lock", 512, 600)

    return new THREE.CanvasTexture(canvas)
  }, [])

  // Setup Three.js 3D Scene
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Scene & Camera
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const width = container.clientWidth
    const height = container.clientHeight
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 0.4, 5.2)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    rendererRef.current = renderer

    // Studio 3-Point Lighting for Luxury Product Visuals
    const ambientLight = new THREE.AmbientLight(0xfff6e5, 0.9)
    scene.add(ambientLight)

    // Key warm gold light
    const keyLight = new THREE.DirectionalLight(0xffecd1, 2.8)
    keyLight.position.set(4, 5, 4)
    scene.add(keyLight)

    // Rim light (creates gold rim glint on edge)
    const rimLight = new THREE.DirectionalLight(0xf59e0b, 2.2)
    rimLight.position.set(-4, 3, -4)
    scene.add(rimLight)

    // Cool fill light for natural ambient depth
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6)
    fillLight.position.set(0, -4, 3)
    scene.add(fillLight)

    // Master Product Group
    const tubGroup = new THREE.Group()
    scene.add(tubGroup)
    tubGroupRef.current = tubGroup

    // Create 3D Tub Mesh
    const tubRadiusTop = 1.32
    const tubRadiusBottom = 1.15
    const tubHeight = 2.15
    const segments = 64

    // Tub Body
    const tubGeometry = new THREE.CylinderGeometry(tubRadiusTop, tubRadiusBottom, tubHeight, segments, 1, true)
    const labelTexture = createLabelTexture()
    const tubMaterial = new THREE.MeshStandardMaterial({
      map: labelTexture,
      roughness: 0.38,
      metalness: 0.18,
    })
    const tubMesh = new THREE.Mesh(tubGeometry, tubMaterial)
    tubGroup.add(tubMesh)

    // Tub Top Gold Foil Rim
    const topRimGeo = new THREE.CylinderGeometry(tubRadiusTop + 0.05, tubRadiusTop + 0.04, 0.18, segments)
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfb76c,
      roughness: 0.22,
      metalness: 0.88,
    })
    const topRim = new THREE.Mesh(topRimGeo, goldMaterial)
    topRim.position.y = tubHeight / 2 + 0.09
    tubGroup.add(topRim)

    // Tub Top Lid Cap (Wax/Foil Embossed Seal)
    const lidGeo = new THREE.CylinderGeometry(tubRadiusTop + 0.04, tubRadiusTop + 0.04, 0.04, segments)
    const lidTexture = createLidTexture()
    const lidMat = new THREE.MeshStandardMaterial({
      map: lidTexture,
      roughness: 0.3,
      metalness: 0.45,
    })
    const lidMesh = new THREE.Mesh(lidGeo, lidMat)
    lidMesh.position.y = tubHeight / 2 + 0.19
    tubGroup.add(lidMesh)

    // Tub Bottom Base Accent
    const bottomBaseGeo = new THREE.CylinderGeometry(tubRadiusBottom, tubRadiusBottom - 0.03, 0.1, segments)
    const bottomBase = new THREE.Mesh(bottomBaseGeo, goldMaterial)
    bottomBase.position.y = -tubHeight / 2 - 0.05
    tubGroup.add(bottomBase)

    // Soft Studio Drop Shadow on Pedestal
    const shadowGeo = new THREE.CircleGeometry(1.6, 32)
    const shadowCanvas = document.createElement("canvas")
    shadowCanvas.width = 256
    shadowCanvas.height = 256
    const sCtx = shadowCanvas.getContext("2d")
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 128)
      grad.addColorStop(0, "rgba(0, 0, 0, 0.75)")
      grad.addColorStop(0.5, "rgba(0, 0, 0, 0.35)")
      grad.addColorStop(1, "rgba(0, 0, 0, 0)")
      sCtx.fillStyle = grad
      sCtx.fillRect(0, 0, 256, 256)
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas)
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.85,
    })
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat)
    shadowMesh.rotation.x = -Math.PI / 2
    shadowMesh.position.y = -tubHeight / 2 - 0.12
    tubGroup.add(shadowMesh)

    // Animation & Render Loop
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)

      // Idle Rotation or Smooth Slerp to target
      if (tubGroupRef.current) {
        if (targetRotationYRef.current !== null) {
          // Smooth interpolation towards target preset angle
          tubGroupRef.current.rotation.y += (targetRotationYRef.current - tubGroupRef.current.rotation.y) * 0.08
          if (Math.abs(targetRotationYRef.current - tubGroupRef.current.rotation.y) < 0.005) {
            targetRotationYRef.current = null
          }
        } else if (!isDraggingRef.current && isRotating) {
          tubGroupRef.current.rotation.y += 0.003
        }

        // Apply drag inertia decay
        if (!isDraggingRef.current && Math.abs(rotationVelocityRef.current) > 0.0001) {
          tubGroupRef.current.rotation.y += rotationVelocityRef.current
          rotationVelocityRef.current *= 0.92
        }

        // Subtle floating tilt
        tubGroupRef.current.rotation.x = 0.12 + Math.sin(Date.now() * 0.0012) * 0.03
      }

      // Update 2D Hotspot Overlay Positions
      if (tubGroupRef.current && cameraRef.current && containerRef.current) {
        const curRotY = tubGroupRef.current.rotation.y
        const tubRadius = 1.35
        const cWidth = containerRef.current.clientWidth
        const cHeight = containerRef.current.clientHeight

        const updatedPositions = HOTSPOTS.map((hs) => {
          // Compute hotspot position in 3D world space
          const worldAngle = hs.angle + curRotY
          const localPos = new THREE.Vector3(
            Math.sin(worldAngle) * tubRadius,
            hs.yPos,
            Math.cos(worldAngle) * tubRadius
          )

          // Project to 2D screen coordinates
          const projected = localPos.clone().project(cameraRef.current!)
          const screenX = ((projected.x + 1) * cWidth) / 2
          const screenY = ((-projected.y + 1) * cHeight) / 2

          // Only visible if facing the camera (z > 0 in camera space)
          const isFacingFront = localPos.z > -0.2

          return {
            id: hs.id,
            x: screenX,
            y: screenY,
            visible: isFacingFront,
          }
        })

        setHotspotPositions(updatedPositions)
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      cameraRef.current.aspect = w / h
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(w, h)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
    }
  }, [createLabelTexture, createLidTexture, isRotating])

  // Mouse & Touch Drag Handlers for 360 Spin
  const handlePointerDown = (clientX: number) => {
    isDraggingRef.current = true
    lastMouseXRef.current = clientX
    rotationVelocityRef.current = 0
    targetRotationYRef.current = null
  }

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current || !tubGroupRef.current) return
    const deltaX = clientX - lastMouseXRef.current
    lastMouseXRef.current = clientX
    const deltaRot = deltaX * 0.007
    tubGroupRef.current.rotation.y += deltaRot
    rotationVelocityRef.current = deltaRot
  }

  const handlePointerUp = () => {
    isDraggingRef.current = false
  }

  // Camera Presets
  const setPreset = (preset: "spin" | "front" | "nutrition" | "seal") => {
    setActivePreset(preset)
    if (preset === "spin") {
      setIsRotating(true)
      targetRotationYRef.current = null
    } else {
      setIsRotating(false)
      if (preset === "front") {
        targetRotationYRef.current = 0
      } else if (preset === "nutrition") {
        targetRotationYRef.current = Math.PI * 0.55
      } else if (preset === "seal") {
        targetRotationYRef.current = Math.PI * 1.1
      }
    }
  }

  const whatsappUrl = `https://wa.me/918250755958?text=${encodeURIComponent(
    `Hello PuroBite! I'm inspecting the 3D Artisanal Banana Chew Tub and want to order.`
  )}`

  return (
    <section id="studio-3d" className="relative py-20 sm:py-28 overflow-hidden bg-[#050a07]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header: Senior Editorial Aesthetics */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/[0.08] border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-widest uppercase text-[10px]">Interactive 3D Packaging Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury tracking-tight leading-tight">
            Inspect The Artisanal Tub. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 italic">
              Touch & Rotate in 360°
            </span>
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            Every millimeter handcrafted with pride. Drag with your thumb to inspect our airtight seal, clean nutrition label, and small-batch Kolkata kitchen guarantee.
          </p>
        </div>

        {/* 3D Canvas Stage */}
        <div className="relative rounded-3xl glass-panel-gold p-2 sm:p-4 border border-amber-400/25 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
          {/* Main Interactive Viewport */}
          <div
            ref={containerRef}
            className="relative w-full h-[420px] sm:h-[540px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#08150f] via-[#050a07] to-[#030604] touch-none cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onMouseMove={(e) => handlePointerMove(e.clientX)}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
            onTouchEnd={handlePointerUp}
          >
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Mobile Drag Instruction Pill */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/70 border border-white/10 backdrop-blur-md text-[11px] text-stone-300 pointer-events-none">
              <RotateCcw className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Drag to spin 360° • Tap pins</span>
            </div>

            {/* Interactive 3D Hotspot Pins (Projected onto canvas) */}
            {hotspotPositions.map((pos) => {
              const hotspot = HOTSPOTS.find((h) => h.id === pos.id)
              if (!hotspot || !pos.visible) return null

              const isActive = activeHotspot?.id === hotspot.id

              return (
                <div
                  key={pos.id}
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 transition-transform duration-100"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveHotspot(hotspot)
                    }}
                    className={`group relative flex items-center justify-center cursor-pointer transition-all ${
                      isActive ? "scale-125" : "hover:scale-110"
                    }`}
                    aria-label={hotspot.label}
                  >
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" />
                    {/* Pin button */}
                    <span className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-stone-950 flex items-center justify-center font-bold text-xs shadow-[0_0_20px_rgba(229,193,121,0.8)] border border-white">
                      <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                    </span>

                    {/* Tooltip Label (Visible on desktop hover) */}
                    <span className="hidden sm:block absolute left-full ml-2.5 px-3 py-1 rounded-lg bg-stone-950/90 border border-amber-400/40 text-[11px] font-semibold text-amber-200 whitespace-nowrap backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                      {hotspot.label}
                    </span>
                  </button>
                </div>
              )
            })}

            {/* View Preset Buttons Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-stone-950/85 border border-amber-400/25 backdrop-blur-xl shadow-2xl max-w-[95%] overflow-x-auto">
              <button
                onClick={() => setPreset("spin")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activePreset === "spin"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                🔄 360° Auto Spin
              </button>
              <button
                onClick={() => setPreset("front")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activePreset === "front"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                🏷️ Front Label
              </button>
              <button
                onClick={() => setPreset("nutrition")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activePreset === "nutrition"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                ⚖️ Nutrition Facts
              </button>
              <button
                onClick={() => setPreset("seal")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activePreset === "seal"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                👑 Airtight Lid
              </button>
            </div>
          </div>

          {/* Quick-Tap Hotspot Badges Underneath (Mobile accessible) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
            {HOTSPOTS.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(hs)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeHotspot?.id === hs.id
                    ? "bg-amber-400/15 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(229,193,121,0.2)]"
                    : "bg-white/[0.03] border-white/10 text-stone-300 hover:border-amber-400/40"
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="line-clamp-1">{hs.label}</span>
                </div>
                <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">{hs.sublabel}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Modal / Bottom Drawer for Inspected Hotspot */}
        {activeHotspot && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl glass-panel-gold p-5 sm:p-6 border border-amber-400/40 shadow-2xl bg-[#09150f] text-stone-100 max-h-[85vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveHotspot(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tag & Title */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{activeHotspot.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-2">
                {activeHotspot.title}
              </h3>

              {/* Photo Preview */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden my-3 border border-white/10 shadow-lg">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-stone-200 leading-relaxed font-light mb-4">
                {activeHotspot.description}
              </p>

              {/* Verified Fact Box */}
              <div className="p-3.5 rounded-xl bg-amber-400/[0.08] border border-amber-400/25 flex items-start gap-2.5 mb-4">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-amber-200 font-medium leading-snug">
                  {activeHotspot.fact}
                </span>
              </div>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {activeHotspot.stats.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <span className="text-amber-300 font-bold text-base block font-serif-luxury">
                      {st.value}
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Continue Inspecting
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-stone-950" />
                  <span>Order Pack</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
