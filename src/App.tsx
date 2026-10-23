import AnnouncementBar from "./components/Header/AnnouncementBar"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import PurityStandard from "./components/Purity/PurityStandard"
import ProductSection from "./components/Products/ProductSection"
import FAQSection from "./components/FAQ/FAQSection"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 relative selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      {/* 3. Main Streamlined Content */}
      <main>
        {/* Hero: What is PuroBite Banana Chew */}
        <Hero />

        {/* What's Inside: 5 Real Ingredients & Nutrition Facts */}
        <PurityStandard />

        {/* Pricing & Packs: 3 Real Tubs with 1-Tap WhatsApp Order */}
        <ProductSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Kitchen Contact & Order Inquiries */}
        <Contact />
      </main>

      {/* 4. Complete Footer */}
      <Footer />

      {/* 5. Mobile Quick Action Dock */}
      <FloatingDock />
    </div>
  )
}
