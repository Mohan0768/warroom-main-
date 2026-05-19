import { Header } from '@/components/header'
import { PageNavigation } from '@/components/page-navigation'
import { Footer } from '@/components/footer'
import { WarRoomAudio } from '@/components/war-room-audio'

export const metadata = {
  title: 'WAR ROOM LHS - Live Business Simulation | humanfirstbykk',
  description: 'Step into KK’s WAR ROOM, a live business simulation with LIVE Shark Tank–style deal negotiations, powered by AI.',
}

export default function WarRoomPage() {
  return (
    <main className="bg-white">
      <WarRoomAudio />
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
            WAR ROOM LHS
            <br />
            Live Business Simulation
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
           Step into KK’s WAR ROOM, a live business simulation with LIVE Shark Tank–style deal negotiations, powered by AI.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What is it */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">What You'll Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#D4A017' }}>6 Intensive Stages</h3>
                <p className="text-gray-700 leading-relaxed">
                  Progress through each stage of building and scaling a business, from ideation to market expansion. Each stage presents new challenges and opportunities.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#D4A017' }}>Real Decision Making</h3>
                <p className="text-gray-700 leading-relaxed">
                  Make actual strategic decisions about pricing, marketing, hiring, and growth. See how your choices impact your business outcomes in real time.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#D4A017' }}>Consequence-Driven Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Understand cause and effect in business. Every decision has consequences—learn without the financial risk of real failure.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold" style={{ color: '#D4A017' }}>Risk-Free Environment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Make mistakes, learn from them, and iterate. This is a safe space to experiment with entrepreneurial thinking and test new ideas.
                </p>
              </div>
            </div>
          </div>

          {/* For Who */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">Perfect For</h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#D4A017' }}>•</span>
                <span>Students wanting hands-on entrepreneurial experience before starting a company</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#D4A017' }}>•</span>
                <span>Business professionals looking to enhance their strategic thinking</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#D4A017' }}>•</span>
                <span>Teams wanting to align on business fundamentals and decision-making</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#D4A017' }}>•</span>
                <span>Organizations preparing employees for an AI-driven, entrepreneurial future</span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">Key Benefits</h2>
            <div className="p-6 md:p-8 rounded-lg space-y-4" style={{ backgroundColor: 'rgba(212,160,23,0.1)', borderLeft: '4px solid #D4A017' }}>
              <p className="text-gray-700 leading-relaxed">
                The WAR ROOM transforms how people think about business. Participants leave with:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span style={{ color: '#D4A017' }}>✓</span>
                  <span>Deeper understanding of business mechanics and strategy</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#D4A017' }}>✓</span>
                  <span>Confidence to think like an entrepreneur</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#D4A017' }}>✓</span>
                  <span>Practical skills in decision-making under uncertainty</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#D4A017' }}>✓</span>
                  <span>Understanding of how AI impacts business strategy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-8 md:p-12 rounded-lg text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-black">Ready to Experience the WAR ROOM?</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Schedule a call to discuss how this simulation can transform your team's thinking.
            </p>
            <a 
              href="https://calendly.com/kk-humanfirst/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 md:px-8 py-2 md:py-3 text-black text-sm md:text-base font-medium rounded transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: '#D4A017' }}
            >
              BOOK A MEETING
            </a>
          </div>
        </div>
      </section>

      <PageNavigation />
      <Footer />
    </main>
  )
}
