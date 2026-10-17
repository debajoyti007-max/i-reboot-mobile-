import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import SuperfoodsGrid from "./components/Superfoods/SuperfoodsGrid"
import NutritionShowcase from "./components/Nutrition/NutritionShowcase"
import ProductPacks from "./components/Packs/ProductPacks"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import UnrealEngine4KBackground from "./components/Background/UnrealEngine4KBackground"
import UnrealEngineIntro from "./components/Intro/UnrealEngineIntro"
import ElectricShockCompanion from "./components/Effects/ElectricShockCompanion"

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className="min-h-screen bg-[#060b08] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Unreal Engine Cinematic Opening ("PuroBite Presents") */}
      {showIntro && <UnrealEngineIntro onComplete={() => setShowIntro(false)} />}

      {/* 2. 4K Unreal Ambient Background Animation (Embers & volumetric god rays) */}
      <UnrealEngine4KBackground />

      {/* 3. Interactive Electric Mascot Companion (Runs on scroll, sprints to buttons and zaps on click) */}
      <ElectricShockCompanion />

      {/* 4. Main Content Experience (Clean, Real & Mobile-Optimized) */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SuperfoodsGrid />
          <NutritionShowcase />
          <ProductPacks />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* 5. Quick Mobile Action Pill */}
      <FloatingDock />
    </div>
  )
}

