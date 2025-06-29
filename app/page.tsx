import { CyberBackground } from "@/components/cyber-background"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { Footer } from "@/components/footer"
import { FloatingDonationButton } from "@/components/floating-donation-button"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CyberBackground />
      <HeroSection />
      <CapabilitiesSection />
      <Footer />
      <FloatingDonationButton />
    </main>
  )
}