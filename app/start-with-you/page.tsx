import Link from 'next/link'

export const metadata = {
  title: 'Start With YOU - Leadership Keynote | humanfirstbykk',
  description: 'Transform how leaders and students understand their power in an AI-driven world. This keynote helps you build clarity and confidence for the future.',
}

export default function StartWithYouPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl font-black">humanfirstbykk</Link>
          <Link href="/" className="text-xs md:text-sm font-medium hover:text-yellow-500 transition-colors">← Back Home</Link>
        </div>
      </header>

      {/* Hero Image and Buttons */}
      <section className="py-6 md:py-8 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Image */}
          <div className="w-full rounded-lg overflow-hidden mb-8">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-07%20233137-qjdhlcNi3n3y3CBG52f8Y77sYN6tWV.png"
              alt="Start With YOU - HUMANFIRST BY KK"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Session Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/mohan20051028/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-8 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
            >
              PRE BUSINESS SESSION
            </a>
            <a
              href="https://calendly.com/mohan20051028/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
            >
              CAMPUS FREE SESSION
            </a>
          </div>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="py-8 md:py-10 px-4 md:px-6 bg-yellow-500 text-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 md:mb-6">
            Start With YOU
            <br />
            Leadership Keynote
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Transform how you think about your future. This keynote helps leaders and students understand their power in an AI-driven world and build clarity and confidence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* What is it */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">The Core Message</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Success in an AI-driven world starts with YOU. This keynote transforms how audiences think about innovation, change, and their personal power to shape the future. Whether you're leading a Fortune 500 company or just starting your entrepreneurial journey, the principles are the same.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              KK draws from 15+ years of leadership development experience to deliver insights that are immediately applicable and deeply transformative.
            </p>
          </div>

          {/* Topics Covered */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-yellow-500 pl-6 py-2 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">How to Think Like an Entrepreneur</h3>
                <p className="text-gray-700">Regardless of your role, entrepreneurial thinking is your competitive advantage.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">AI as Your Thinking Tool</h3>
                <p className="text-gray-700">Understand how to use AI to amplify your thinking and move forward with clarity.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">Building Confidence in Uncertainty</h3>
                <p className="text-gray-700">Navigate rapid change with conviction and adaptability.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2 space-y-2">
                <h3 className="text-lg md:text-xl font-bold">Your Personal Impact Strategy</h3>
                <p className="text-gray-700">Clarify your values, vision, and the thinking you need to succeed.</p>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">Ideal For</h2>
            <ul className="space-y-4 text-base md:text-lg text-gray-700">
              <li className="flex items-start gap-4">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Business school keynotes and graduation speeches</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Corporate leadership conferences and retreats</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Team offsites where you want to shift mindsets</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-500 font-bold mt-1">•</span>
                <span>Industry conferences focused on innovation and leadership</span>
              </li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">What Attendees Experience</h2>
            <div className="bg-yellow-50 p-8 rounded-lg space-y-4">
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-yellow-500">✓</span>
                  <span>Clarity on how they personally can thrive in an AI-driven world</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">✓</span>
                  <span>Confidence to think boldly about their future</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">✓</span>
                  <span>Practical frameworks they can apply immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">✓</span>
                  <span>Inspiration to become catalysts for change in their organizations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg space-y-4">
            <p className="text-base md:text-lg italic">
              "KK's keynote completely shifted how our team thinks about innovation. Within weeks, we saw tangible changes in how our leaders approached problems."
            </p>
            <p className="text-yellow-400 font-medium">— VP of Leadership Development, Fortune 500 Tech Company</p>
          </div>

          {/* CTA */}
          <div className="bg-black text-white p-8 md:p-12 rounded-lg text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-black">Ready to Bring This Keynote to Your Event?</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Let's discuss how "Start With YOU" can transform your audience.
            </p>
            <Link 
              href="/speaking-engagement"
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-black text-sm md:text-base font-medium rounded hover:bg-yellow-600 transition-all duration-300 hover:scale-105"
            >
              INQUIRE ABOUT A SPEAKING ENGAGEMENT
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
