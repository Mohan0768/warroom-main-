import { Header } from '@/components/header'
import { PageNavigation } from '@/components/page-navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'The Garage - 3-Day Startup Bootcamp | humanfirstbykk',
  description: 'An intensive 3-day entrepreneurial sprint where you learn to validate ideas, build MVPs, and think like a founder. From $0 to execution in 72 hours.',
}

export default function TheGaragePage() {
  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-20 px-4 md:px-6 text-gray-900" style={{ backgroundColor: '#FFC107' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
            The Garage
            <br />
            Build from $0 in 3 Days
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-black/80 mb-8 leading-relaxed">
            An intensive 3-day entrepreneurial sprint where you validate ideas, build MVPs, and learn to think like a founder. No experience necessary.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* What is it */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">The 3-Day Experience</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Garage is where ideas become reality. In 72 hours, you'll go from concept to MVP. This isn't theory—it's hands-on, practical, and designed for people who want to understand what it actually takes to build something from nothing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a first-time founder, a corporate intrapreneur, or someone curious about entrepreneurship, The Garage teaches you the mindset and skills you need to succeed.
            </p>
          </div>

          {/* The Schedule */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">The 3-Day Schedule</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <h3 className="text-2xl font-black" style={{ color: '#FFC107' }}>Day 1: Ideation & Validation</h3>
                <p className="text-gray-700">
                  Learn the fundamentals of finding a real problem. Test your assumptions with actual customers. Understand what makes an idea worth pursuing.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <h3 className="text-2xl font-black" style={{ color: '#FFC107' }}>Day 2: Building Your MVP</h3>
                <p className="text-gray-700">
                  Create a minimum viable product that proves your concept works. Use no-code tools, scrappy approaches, and rapid prototyping. Speed over perfection.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <h3 className="text-2xl font-black" style={{ color: '#FFC107' }}>Day 3: Pitch & Go-to-Market</h3>
                <p className="text-gray-700">
                  Present your idea to investors, customers, and mentors. Develop your go-to-market strategy. Learn how to position your idea for success.
                </p>
              </div>
            </div>
          </div>

          {/* Skills You'll Gain */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">Skills You'll Master</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#FFC107' }}>Problem Validation</h3>
                <p className="text-gray-700">Learn how to talk to customers and truly understand their pain points.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#FFC107' }}>Rapid Prototyping</h3>
                <p className="text-gray-700">Build and iterate quickly. Get feedback. Pivot based on data, not gut feel.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#FFC107' }}>Founder Mindset</h3>
                <p className="text-gray-700">Develop the resilience, creativity, and bias for action that founders need.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold" style={{ color: '#FFC107' }}>Pitch & Communication</h3>
                <p className="text-gray-700">Tell your story in a way that compels investors, partners, and customers.</p>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">Who Should Apply</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#FFC107' }}>•</span>
                <span>Aspiring founders wanting to test an idea without risking everything</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#FFC107' }}>•</span>
                <span>Corporate employees wanting to develop entrepreneurial skills</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#FFC107' }}>•</span>
                <span>Students wanting real-world startup experience</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-bold mt-1" style={{ color: '#FFC107' }}>•</span>
                <span>Anyone curious about what it takes to build a business</span>
              </li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">What You'll Leave With</h2>
            <div className="p-8 rounded-lg space-y-4" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #FFC107' }}>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span style={{ color: '#FFC107' }}>✓</span>
                  <span>A validated (or invalidated) business idea</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#FFC107' }}>✓</span>
                  <span>A functioning MVP you can show to others</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#FFC107' }}>✓</span>
                  <span>Customer insights and feedback</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#FFC107' }}>✓</span>
                  <span>A clear next-steps strategy</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#FFC107' }}>✓</span>
                  <span>Network of fellow founders and mentors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-8 md:p-12 rounded-lg text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-black">Ready to Build in The Garage?</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Schedule a call to discuss your idea and how The Garage can help you validate and build it.
            </p>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 md:px-8 py-2 md:py-3 text-black text-sm md:text-base font-medium rounded transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: '#FFC107' }}
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
