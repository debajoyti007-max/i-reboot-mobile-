import { useState } from "react"
import { CartProvider } from "./context/CartContext"
import AnnouncementBar from "./components/Header/AnnouncementBar"
import Header from "./components/Header/Header"
import CartDrawer from "./components/Cart/CartDrawer"
import SearchModal from "./components/Search/SearchModal"
import Hero from "./components/Hero/Hero"
import ProductSection from "./components/Products/ProductSection"
import BrandStory from "./components/Story/BrandStory"
import PurityStandard from "./components/Purity/PurityStandard"
import SensoryProfile from "./components/Experience/SensoryProfile"
import FAQSection from "./components/FAQ/FAQSection"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#faf8f5] text-stone-900 relative selection:bg-amber-200 selection:text-amber-950 font-sans">
        {/* 1. Top Announcement Bar */}
        <AnnouncementBar />

        {/* 2. Main Navigation Header */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* 3. Interactive Live Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* 4. Sliding Shopping Basket Drawer */}
        <CartDrawer />

        {/* 5. Main E-Commerce Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Handcrafted Products Menu */}
          <ProductSection />

          {/* Artisanal Brand Story & Kolkata Kitchen Craft */}
          <BrandStory />

          {/* The Purity Standard & Whole Ingredients */}
          <PurityStandard />

          {/* Taste & Texture Characteristics */}
          <SensoryProfile />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* Kolkata Kitchen Concierge & Direct Inquiries */}
          <Contact />
        </main>

        {/* 6. Comprehensive E-Commerce Footer */}
        <Footer />

        {/* 7. Mobile Thumb Quick-Action Dock */}
        <FloatingDock />
      </div>
    </CartProvider>
  )
}
