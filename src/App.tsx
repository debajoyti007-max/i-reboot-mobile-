import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import SuperfoodsGrid from "./components/Superfoods/SuperfoodsGrid"
import NutritionShowcase from "./components/Nutrition/NutritionShowcase"
import ProductPacks from "./components/Packs/ProductPacks"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import UnrealEngine4KBackground from "./components/Background/UnrealEngine4KBackground"

export default function App() {
  return (
    <div className="min-h-screen bg-[#060b08] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* 4K Unreal Ambient Background Animation (Floating embers & volumetric light) */}
      <UnrealEngine4KBackground />

      {/* Main Content Experience (Clean, Real & Mobile-Optimized) */}
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

      {/* Quick Mobile Action Pill */}
      <FloatingDock />
    </div>
  )
}
