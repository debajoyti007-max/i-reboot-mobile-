import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import DeviceQuoteEstimator from "./components/DeviceSelector/DeviceQuoteEstimator"
import Brands from "./components/Brands/Brands"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import StudioBackground from "./components/Background/StudioBackground"
import AnimeCyberBackground from "./components/Background/AnimeCyberBackground"
import { LanguageProvider } from "./context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#06070a] text-zinc-100 relative selection:bg-sky-600/30 selection:text-sky-200">
        {/* Architectural Studio Grid & Atmospheric Backlight Glow */}
        <StudioBackground />

        {/* 60FPS Video-Style Anime Cyber Motion Animation (Waves & Light Streams) */}
        <AnimeCyberBackground />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <DeviceQuoteEstimator />
            <Brands />
            <Contact />
          </main>
          <Footer />
        </div>

        <FloatingDock />
      </div>
    </LanguageProvider>
  )
}
