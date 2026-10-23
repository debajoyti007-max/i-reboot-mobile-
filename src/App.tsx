import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import ProductStudio3D from "./components/Experience/ProductStudio3D"
import PurityStandard from "./components/Purity/PurityStandard"
import SensoryProfile from "./components/Experience/SensoryProfile"
import PurityBenchmark from "./components/Experience/PurityBenchmark"
import BatchAuthenticator from "./components/Experience/BatchAuthenticator"
import ProductPacks from "./components/Packs/ProductPacks"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import UnrealEngine4KBackground from "./components/Background/UnrealEngine4KBackground"
import UnrealEngineIntro from "./components/Intro/UnrealEngineIntro"

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <div className="min-h-screen bg-[#050a07] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Unreal Engine Cinematic Video Opening ("PuroBite Presents") */}
      {showIntro && <UnrealEngineIntro onComplete={() => setShowIntro(false)} />}

      {/* 2. Ambient 4K Unreal Background (Floating golden embers & volumetric god rays) */}
      <UnrealEngine4KBackground />

      {/* 3. Main Luxury Editorial Content Experience */}
      <div className="relative z-10">
        <Navbar onReplayIntro={() => setShowIntro(true)} />
        <main>
          {/* Hero Showcase with 5-Photo Interactive Gallery */}
          <Hero />

          {/* Interactive 3D Packaging Studio: 360° Drag, Gold Seal, Hotspots */}
          <ProductStudio3D />

          {/* The Purity Standard: 0g Added Sugar, 8 Superfoods, Nutrition & Kolkata Craft */}
          <PurityStandard />

          {/* Sensory Profile: Sommelier-Grade Tasting Notes, Texture & Aroma */}
          <SensoryProfile />

          {/* The Purity Benchmark: Commercial Bars vs. PuroBite Handcrafted Purity */}
          <PurityBenchmark />

          {/* Small-Batch Authenticator: Verified Fresh from Kolkata Kitchen */}
          <BatchAuthenticator />

          {/* Artisanal Small-Batch Menu: 200g, 350g Bestseller, 700g Family Duo */}
          <ProductPacks />

          {/* Kolkata Kitchen Concierge: Phone, WhatsApp, Email, Instagram, Location */}
          <Contact />
        </main>
        <Footer />
      </div>

      {/* 4. Quick Mobile Thumb Action Dock */}
      <FloatingDock />
    </div>
  )
}
