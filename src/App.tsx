import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import SuperfoodsGrid from "./components/Superfoods/SuperfoodsGrid"
import NutritionShowcase from "./components/Nutrition/NutritionShowcase"
import Craftsmanship from "./components/Craftsmanship/Craftsmanship"
import ProductPacks from "./components/Packs/ProductPacks"
import Reviews from "./components/Reviews/Reviews"
import FAQ from "./components/FAQ/FAQ"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import UnrealEngine4KBackground from "./components/Background/UnrealEngine4KBackground"

export default function App() {
  return (
    <div className="min-h-screen bg-[#030906] text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* AAA Unreal Engine 4K Game-Like Background Canvas (God Rays, 3D Particles & Cursor Lighting) */}
      <UnrealEngine4KBackground />

      {/* Main Foreground Experience */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SuperfoodsGrid />
          <NutritionShowcase />
          <Craftsmanship />
          <ProductPacks />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Quick Action Floating Contact Dock */}
      <FloatingDock />
    </div>
  )
}
