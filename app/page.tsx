import { CyberBackground } from "@/components/cyber-background"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { Footer } from "@/components/footer"

import { StickyDonationTray } from "@/components/sticky-donation-tray"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <StickyDonationTray />
      <CyberBackground />
      <HeroSection />
      <CapabilitiesSection />
      <Footer />
    </main>
  )
}
