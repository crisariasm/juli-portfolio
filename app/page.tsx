import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { ViolinClassesBanner } from "@/components/violin-classes-banner"
import { Navbar } from "@/components/navbar"
import { FloatingNotes } from "@/components/floating-notes"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingNotes />
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <PhotoGallery />
        <ViolinClassesBanner />
      </main>
      <Footer />
    </div>
  )
}
