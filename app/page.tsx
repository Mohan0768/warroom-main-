import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MarqueeSection } from '@/components/marquee-section'
import { AboutSection } from '@/components/about-section'
import { OfferingsSection } from '@/components/offerings-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <OfferingsSection />
      <Footer />
    </main>
  )
}
