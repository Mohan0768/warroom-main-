import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MarqueeSection } from '@/components/marquee-section'
import { AboutSection } from '@/components/about-section'
import { OfferingsSection } from '@/components/offerings-section'
import { QuoteSection } from '@/components/quote-section'
import { KeynotesSection } from '@/components/keynotes-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <OfferingsSection />
      <QuoteSection />
      <KeynotesSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
