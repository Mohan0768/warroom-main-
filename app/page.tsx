import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { MarqueeSection } from '@/components/marquee-section'
import { AboutSection } from '@/components/about-section'
import { OfferingsSection } from '@/components/offerings-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-background" aria-hidden="true">
        <div className="bg-white">
          <Header />
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
          <OfferingsSection />
          <Footer />
        </div>
      </div>

      <section className="maintenance-overlay" aria-labelledby="maintenance-title">
        <div className="maintenance-scrim" aria-hidden="true" />
        <div className="maintenance-ambient maintenance-ambient-one" aria-hidden="true" />
        <div className="maintenance-ambient maintenance-ambient-two" aria-hidden="true" />
        <div className="maintenance-content">
          <div className="maintenance-card">
            <div className="maintenance-status" aria-hidden="true">
              <span className="maintenance-status-dot" />
              <span>Temporary service pause</span>
            </div>
            <h1 id="maintenance-title">Site under maintenance</h1>
            <p>
              We&apos;re currently making some improvements.
              <br className="hidden sm:block" />
              We&apos;ll be back shortly.
            </p>
            <div className="maintenance-progress" role="status" aria-label="Maintenance in progress">
              <span className="maintenance-progress-line" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
