import { useState, useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Zap } from "lucide-react"
import { PUROBITE_IMAGES } from "../../data/purobiteData"

export interface FoodGuideItem {
  id: string
  name: string
  category: string
  shortLabel: string
  image: string
  tag: string
  speech: string
  nutritionHighlight: string
  nutritionSub: string
  benefits: string[]
  stats: { label: string; value: string }[]
}

const FOOD_ITEMS: FoodGuideItem[] = [
  {
    id: "bananas",
    name: "Sun-Ripened Bananas",
    category: "Whole Fruit Base",
    shortLabel: "🍌 Bananas",
    image: PUROBITE_IMAGES.hero,
    tag: "100% Pure Fruit Fuel",
    speech:
      "Our bananas are slow-dehydrated under precise controlled heat to concentrate natural fruit fructose. That means 100% natural chewiness and natural sweetness with ZERO added cane sugar!",
    nutritionHighlight: "0.0g Added Sugar",
    nutritionSub: "480mg Natural Potassium per 100g",
    benefits: [
      "Natural sustained fruit energy",
      "Essential dietary potassium for muscle recovery",
      "Prebiotic fruit fiber for smooth digestion",
    ],
    stats: [
      { label: "Added Sugar", value: "0g" },
      { label: "Potassium", value: "480mg" },
      { label: "Prebiotic Fiber", value: "6.8g" },
    ],
  },
  {
    id: "almonds",
    name: "California Whole Almonds",
    category: "Whole Roasted Nut",
    shortLabel: "🌰 Almonds",
    image: PUROBITE_IMAGES.flatlay,
    tag: "Antioxidant & Healthy Fats",
    speech:
      "Whole California almonds slow-roasted to bring out their buttery aroma and signature crunch. Packed with natural Vitamin E and heart-healthy monounsaturated fats that keep you energized.",
    nutritionHighlight: "Vitamin E & Crunch",
    nutritionSub: "13.6g Heart-Healthy Fats (0% Palm Oil)",
    benefits: [
      "High natural Vitamin E antioxidant shield",
      "Sustained fullness from monounsaturated fatty acids",
      "Crunchy contrast to soft dehydrated fruit",
    ],
    stats: [
      { label: "Healthy Fats", value: "13.6g" },
      { label: "Palm Oil", value: "0%" },
      { label: "Plant Crunch", value: "100%" },
    ],
  },
  {
    id: "cashews",
    name: "Whole Crunchy Cashews",
    category: "Plant Protein Fuel",
    shortLabel: "🥜 Cashews",
    image: PUROBITE_IMAGES.table,
    tag: "Creamy Plant Fuel",
    speech:
      "Hand-selected whole cashews giving each bite its luxurious, velvety chew. Rich in bioavailable magnesium, copper, and clean plant protein with zero dairy or artificial flavorings.",
    nutritionHighlight: "8.2g Plant Protein",
    nutritionSub: "Bioavailable Copper & Magnesium",
    benefits: [
      "Rich creamy chew without added oils or butter",
      "Copper and magnesium for cellular enzyme function",
      "Bioavailable plant protein for workout recovery",
    ],
    stats: [
      { label: "Plant Protein", value: "8.2g" },
      { label: "Dairy Free", value: "100%" },
      { label: "Mineral Fuel", value: "High" },
    ],
  },
  {
    id: "pumpkin",
    name: "Roasted Pumpkin Seeds",
    category: "Raw Pepitas",
    shortLabel: "🎃 Pumpkin Seeds",
    image: PUROBITE_IMAGES.flatlay,
    tag: "Zinc & Magnesium Shield",
    speech:
      "Small green nutritional titans! Roasted pumpkin seeds deliver cellular zinc and bioavailable iron, supporting natural stamina, immune vitality, and muscle metabolism.",
    nutritionHighlight: "Zinc & Magnesium",
    nutritionSub: "Daily Immune & Cellular Support",
    benefits: [
      "Essential plant zinc for immune cell activity",
      "High natural magnesium for neuromuscular balance",
      "Pleasant nutty snap in every single chew",
    ],
    stats: [
      { label: "Zinc", value: "Bioavailable" },
      { label: "Magnesium", value: "High" },
      { label: "Form", value: "Roasted" },
    ],
  },
  {
    id: "white-sesame",
    name: "Toasted White Sesame",
    category: "Ancient Calcium",
    shortLabel: "⚪ White Sesame",
    image: PUROBITE_IMAGES.infographic,
    tag: "Plant Calcium Power",
    speech:
      "Lightly roasted for a delicate, nutty aroma. White sesame seeds are one of the world's premier plant-based sources of bioavailable bone calcium and dietary fiber.",
    nutritionHighlight: "Natural Calcium",
    nutritionSub: "Ancient Bone-Nourishing Minerals",
    benefits: [
      "Plant calcium to support bone and dental strength",
      "Sesame lignans for healthy lipid balance",
      "Rich aromatic lift to the fruit base",
    ],
    stats: [
      { label: "Calcium", value: "Plant-Based" },
      { label: "Fiber", value: "Dietary" },
      { label: "Aroma", value: "Toasted" },
    ],
  },
  {
    id: "black-sesame",
    name: "Heritage Black Sesame",
    category: "Ayurvedic Heritage",
    shortLabel: "⚫ Black Sesame",
    image: PUROBITE_IMAGES.infographic,
    tag: "Sesamin Antioxidants",
    speech:
      "Ancient Ayurvedic superfood loaded with deep, earthy sesamin antioxidants and plant iron. It provides deep cellular nourishment and a distinct gourmet appearance.",
    nutritionHighlight: "Sesamin Antioxidants",
    nutritionSub: "Deep Cellular Defense & Iron",
    benefits: [
      "Rare sesamin and sesamolin antioxidant matrix",
      "Plant iron for oxygen transport and stamina",
      "Traditional Ayurvedic revitalizing seed",
    ],
    stats: [
      { label: "Antioxidants", value: "Sesamin" },
      { label: "Plant Iron", value: "Natural" },
      { label: "Origin", value: "Heritage" },
    ],
  },
  {
    id: "sunflower",
    name: "Golden Sunflower Seeds",
    category: "Vitality Seeds",
    shortLabel: "🌻 Sunflower Seeds",
    image: PUROBITE_IMAGES.front,
    tag: "Selenium & Stamina",
    speech:
      "Packed with cellular selenium and vitamin E. These golden seeds balance the earthy nuts with a mild, wholesome flavor while providing continuous, clean daytime stamina.",
    nutritionHighlight: "Selenium & Vitamin E",
    nutritionSub: "Cellular Energy & Skin Nutrition",
    benefits: [
      "Selenium to help protect cells from oxidative stress",
      "Natural Vitamin E complex",
      "Light, crispy texture balance",
    ],
    stats: [
      { label: "Selenium", value: "High" },
      { label: "Stamina", value: "Clean" },
      { label: "Sweetness", value: "0g Cane" },
    ],
  },
  {
    id: "chia-melon",
    name: "Chia & Melon Super-Seeds",
    category: "Prebiotic Matrix",
    shortLabel: "🌱 Chia & Melon",
    image: PUROBITE_IMAGES.table,
    tag: "Omega-3 ALA Matrix",
    speech:
      "High in plant-based Omega-3 ALA and gentle soluble fiber. Together, they create a natural prebiotic cushion that supports gut digestion and smooth nutrient absorption.",
    nutritionHighlight: "6.8g Prebiotic Fiber",
    nutritionSub: "Plant-Based Omega-3 ALA",
    benefits: [
      "Soluble prebiotic fiber for gut microbiome health",
      "Plant-based Omega-3 ALA fatty acids",
      "Hydration-retaining seed matrix",
    ],
    stats: [
      { label: "Fiber", value: "6.8g" },
      { label: "Omega-3", value: "ALA" },
      { label: "Digestion", value: "Gentle" },
    ],
  },
  {
    id: "nutrition-overview",
    name: "Full Nutritional Lab Profile",
    category: "Lab-Verified Metrics",
    shortLabel: "⚖️ Full Nutrition",
    image: PUROBITE_IMAGES.infographic,
    tag: "100% Clean Label Verification",
    speech:
      "Every single batch is handcrafted to order in our Kolkata kitchen. We deliver 385 kcal of clean, unadulterated plant fuel per 100g. 0% palm oil, 100% vegan, and zero artificial preservatives!",
    nutritionHighlight: "385 kcal Sustained Fuel",
    nutritionSub: "Zero Preservatives • Zero Chemicals",
    benefits: [
      "Lab-tested nutritional transparency",
      "No palm oil, no dairy, no gluten, no cane sugar",
      "Handcrafted in small batches upon order",
    ],
    stats: [
      { label: "Calories", value: "385 kcal" },
      { label: "Sugar", value: "0.0g Added" },
      { label: "Protein", value: "8.2g" },
    ],
  },
]

export default function InteractiveFoodShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZapping, setIsZapping] = useState(false)
  const currentItem = FOOD_ITEMS[currentIndex]

  // Canvas refs for 3D Fox & Lightning Effect
  const threeCanvasRef = useRef<HTMLCanvasElement>(null)
  const fxCanvasRef = useRef<HTMLCanvasElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const isRunningRef = useRef(false)
  const isZappingRef = useRef(false)

  // 1. STABLE THREE.JS 3D FOX ENGINE
  useEffect(() => {
    const canvas = threeCanvasRef.current
    if (!canvas) return

    const size = 180
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(0, 1.8, 4.8)
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

    loader.load(modelUrl, (gltf) => {
      const foxScene = gltf.scene
      foxScene.scale.set(0.017, 0.017, 0.017)
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
    })

    let clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (mixer) {
        mixer.update(delta)

        if (isRunningRef.current && currentAnim !== "run" && runAction && surveyAction) {
          surveyAction.fadeOut(0.2)
          runAction.reset().fadeIn(0.2).play()
          currentAnim = "run"
        } else if (!isRunningRef.current && currentAnim !== "survey" && runAction && surveyAction) {
          runAction.fadeOut(0.3)
          surveyAction.reset().fadeIn(0.3).play()
          currentAnim = "survey"
        }
      }

      // Turn playfully towards user
      modelContainer.rotation.y = THREE.MathUtils.lerp(
        modelContainer.rotation.y,
        isZappingRef.current ? 0 : Math.PI / 4,
        0.1
      )

      if (isZappingRef.current) {
        shockPointLight.intensity = 6.0 + Math.random() * 4.0
        modelContainer.position.y = 0.12 + (Math.random() - 0.5) * 0.06
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

  // 2. TRIGGER LIGHTNING ARCS & SPARK BURST WHEN INGREDIENT IS SELECTED
  const selectIngredient = (index: number) => {
    if (index === currentIndex) return

    setCurrentIndex(index)
    setIsZapping(true)
    isZappingRef.current = true
    isRunningRef.current = true

    // Trigger electric canvas shockwave
    const canvas = fxCanvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        const width = (canvas.width = canvas.clientWidth)
        const height = (canvas.height = canvas.clientHeight)

        // Draw instant lightning burst
        ctx.clearRect(0, 0, width, height)
        ctx.save()
        ctx.strokeStyle = "rgba(250, 204, 21, 0.9)"
        ctx.shadowColor = "#fde047"
        ctx.shadowBlur = 15
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(width / 2, 0)
        ctx.lineTo(width / 2 + 20, height / 2)
        ctx.lineTo(width / 2 - 20, height / 2 + 30)
        ctx.lineTo(width / 2, height)
        ctx.stroke()
        ctx.restore()

        setTimeout(() => {
          ctx.clearRect(0, 0, width, height)
        }, 300)
      }
    }

    // Reset Fox animation back to Survey after transition
    setTimeout(() => {
      setIsZapping(false)
      isZappingRef.current = false
      isRunningRef.current = false
    }, 550)
  }

  const handleNext = () => {
    selectIngredient((currentIndex + 1) % FOOD_ITEMS.length)
  }

  const handlePrev = () => {
    selectIngredient((currentIndex - 1 + FOOD_ITEMS.length) % FOOD_ITEMS.length)
  }

  return (
    <section id="superfoods" className="relative py-14 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive 3D Food & Nutrition Guide</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
            Meet What's Inside. <br />
            <span className="text-amber-300">Guided by Our 3D Companion.</span>
          </h2>

          <p className="mt-2 text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg">
            Tap any superfood or nutrition metric below. Watch our 3D companion run, reveal the real ingredients, and explain the science behind PuroBite Banana Chew.
          </p>
        </div>

        {/* 1. Mobile-First Ingredient Selector Carousel (Large touch targets for thumbs) */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none snap-x touch-pan-x px-1">
            {FOOD_ITEMS.map((item, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={item.id}
                  onClick={() => selectIngredient(idx)}
                  className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer snap-start ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105 ring-2 ring-amber-300"
                      : "bg-white/[0.04] hover:bg-white/[0.08] text-stone-300 border border-white/10"
                  }`}
                >
                  <span>{item.shortLabel}</span>
                  {isActive && <Zap className="w-3 h-3 fill-stone-950" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Main Interactive Presentation Stage */}
        <div
          ref={cardRef}
          className={`relative rounded-3xl p-5 sm:p-8 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] border transition-all duration-300 backdrop-blur-2xl shadow-2xl ${
            isZapping ? "border-amber-400/80 shadow-[0_0_40px_rgba(245,158,11,0.35)]" : "border-white/15"
          }`}
        >
          {/* Lightning FX Canvas overlay on the stage */}
          <canvas
            ref={fxCanvasRef}
            className="absolute inset-0 pointer-events-none w-full h-full z-20 rounded-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            {/* Left Column: High-Res Food Visual with Holographic Details */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-950 border border-white/10 shadow-lg">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-950/80 border border-amber-400/40 text-[11px] font-bold text-amber-300 backdrop-blur-md">
                  {currentItem.tag}
                </div>

                {/* Category indicator */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-stone-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-stone-300 font-medium">{currentItem.category}</span>
                  <span className="text-emerald-400 font-mono font-bold">100% Real</span>
                </div>
              </div>

              {/* 3 Real Nutritive Stat Badges */}
              <div className="grid grid-cols-3 gap-2">
                {currentItem.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                  >
                    <span className="text-[10px] text-stone-400 block font-medium">
                      {st.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-amber-300 block">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Fox Storyteller + Voiceover Dialogue & Nutritive Breakdown */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Fox Avatar & Speech Bubble Container */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-amber-400/[0.06] border border-amber-400/30 backdrop-blur-md">
                {/* 3D WebGL Fox (Transparent, borderless) */}
                <div className="shrink-0 flex items-center justify-center">
                  <canvas
                    ref={threeCanvasRef}
                    className="w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] block filter drop-shadow-[0_4px_16px_rgba(245,158,11,0.5)]"
                  />
                </div>

                {/* Companion Speech Bubble */}
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 text-xs font-mono font-bold mb-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>3D Companion Explains:</span>
                  </div>
                  <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-normal italic">
                    "{currentItem.speech}"
                  </p>
                </div>
              </div>

              {/* Ingredient Name & Key Impact Highlight */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold block mb-1">
                  Ingredient 0{currentIndex + 1} of 0{FOOD_ITEMS.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
                  {currentItem.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    {currentItem.nutritionHighlight}
                  </span>
                  <span className="text-xs text-stone-400">
                    {currentItem.nutritionSub}
                  </span>
                </div>
              </div>

              {/* 3 Real Science-Backed Benefits */}
              <div className="flex flex-col gap-2 pt-1">
                {currentItem.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-xs text-stone-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows for One-Tap Mobile Tour */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-1">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 font-semibold cursor-pointer touch-press transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <span className="text-[11px] font-mono text-stone-400">
                  {currentIndex + 1} / {FOOD_ITEMS.length}
                </span>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs text-stone-950 font-bold cursor-pointer touch-press shadow-md transition-all"
                >
                  <span>Next Ingredient</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Nutrition Fact Anchor for seamless #nutrition link handling */}
        <div id="nutrition" className="pt-2" />
      </div>
    </section>
  )
}
