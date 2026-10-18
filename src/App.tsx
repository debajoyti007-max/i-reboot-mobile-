import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import PurityStandard from "./components/Purity/PurityStandard"
import ProductPacks from "./components/Packs/ProductPacks"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import UnrealEngine4KBackground from "./components/Background/UnrealEngine4KBackground"
import ThreeDCharacter from "./components/Effects/ThreeDCharacter"

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a07] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Ambient 4K Unreal Background (Floating golden embers & volumetric god rays) */}
      <UnrealEngine4KBackground />

      {/* 2. Interactive 3D Concierge (Tap to explore ingredients & nutrition, runs on scroll) */}
      <ThreeDCharacter />

      {/* 3. Main Luxury Editorial Content Experience */}
      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Hero Showcase with 5-Photo Interactive Gallery */}
          <Hero />

          {/* The Purity Standard: 0g Added Sugar, 8 Superfoods, Nutrition & Kolkata Craft */}
          <PurityStandard />

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
