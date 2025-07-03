import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { FloatingNotes } from "@/components/floating-notes"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingNotes />
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
