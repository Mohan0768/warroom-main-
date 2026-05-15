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
          <Link href="/" className="text-xs md:text-sm font-medium transition-colors hover:text-amber-700" style={{ color: 'inherit' }}>← Back Home</Link>
        </div>
      </header>

      {/* Hero Section with Flex Container */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/START%20WITH-tJS6unEaGZJZ6tBRjbcLC5kyYfOAI7.png"
                alt="Start With YOU - HUMANFIRST BY KK"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  Start With YOU
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                  "In the age of AI, the most powerful asset in the room is YOU."
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  <span className="font-semibold">HUMAN ADVANTAGE • ENTREPRENEURIAL THINKING • AI ADOPTION</span>
                </p>
              </div>

              {/* Session Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://calendly.com/mohan20051028/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3 text-black font-bold rounded transition-all duration-300 hover:shadow-lg hover:scale-105 text-center text-sm sm:text-base"
                  style={{ backgroundColor: '#D4A017' }}
                >
                  PRE BUSINESS SESSION
                </a>
                <a
                  href="https://calendly.com/mohan20051028/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-6 sm:px-8 py-3 border-2 font-bold rounded transition-all duration-300 hover:shadow-lg hover:scale-105 text-center text-sm sm:text-base hover:text-black"
                  style={{ borderColor: '#D4A017', color: '#D4A017', backgroundColor: 'transparent' }}
                >
                  CAMPUS FREE SESSION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="py-10 md:py-14 px-4 md:px-6 text-black" style={{ backgroundColor: '#D4A017' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 md:mb-4">
            Start With YOU
            <br />
            Leadership Keynote
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Transform how you think about your future. This keynote helps leaders and students understand their power in an AI-driven world and build clarity and confidence.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-14">
          {/* Core Story */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black">The Core Message</h2>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "AI can answer any question you give it - But it cannot ask the question that only your life has prepared you to ask."
            </p>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-bold text-black">"Jack of all trades. Master of none."</span> One friend even called my resume a biryani — a dish with too many ingredients.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                I had a very successful corporate life as an Award Winning Leadership Trainer but everything changed when I was laid off. I spent a year applying for jobs with a newborn in my arms. Every interview ended the same way: "You have too many skills and you don't fit the role." I drowned myself in imposter syndrome and it nearly broke me.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Then I realised: <span className="font-bold text-black">I cannot change who I am.</span> So I decided to start there instead.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                The moment I stopped trying to fix what made me different and started building from it, everything changed. Turns out, there was a word for that all along — <span className="font-bold text-black">Entrepreneur.</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                I built a five-figure AI Marketing business from $0 and exited it to follow my YOU.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-6 space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Here is what I know about the age of AI: <span className="font-bold">It can answer any question you give it. But it cannot ask the question that only your life has prepared you to ask.</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-bold">AI can generate anything. It cannot become you.</span> No scar tissue. No comeback story. No moment where it had to decide whether to quit or go one more round. That is yours. Only yours.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                I work with students, managers, and business owners who feel the ground shifting and don't know where to stand in the AI world. I help them discover their <span className="font-bold">YOU</span> and I leave them with a piece of themselves, shaped and sharpened ready to be commercialised at any point in their life. Something no layoff can take. No algorithm can replicate. No company can downsize.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-bold text-black">
                Your story, your strengths, your flaws, your obsessions — it is YOU!
              </p>
            </div>
          </div>

          {/* Hire me to speak */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black">Hire Me to Speak</h2>
            
            {/* Business Conferences */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700">Business Conferences</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">AI can't replace YOU</h4>
                  <p className="text-gray-700">Discover what makes you irreplaceable in an AI-driven world and how to leverage your unique perspective.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">AI can't replace YOU</h4>
                  <p className="text-gray-700">Discover what makes you irreplaceable in an AI-driven world and how to leverage your unique perspective.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">AI in Leadership - Untold Stories of Managers in AI adoption</h4>
                  <p className="text-gray-700">Real stories from managers navigating AI integration, their challenges, breakthroughs, and lessons learned.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">Costly AI Mistakes: The Thinking Gap</h4>
                  <p className="text-gray-700">Learn from the most common strategic mistakes companies make with AI and how to avoid them through better thinking.</p>
                </div>
              </div>
              <a
                href="https://calendly.com/mohan20051028/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-black font-bold rounded hover:bg-amber-700 transition-all duration-300 hover:scale-105"
              >
                 Book a pre-session call
              </a>
            </div>

            {/* Students Section */}
            <div className="space-y-6 bg-blue-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">For Students (Free In-Person Sessions)</h3>
              <p className="text-sm font-medium text-gray-600">Southeast Florida</p>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">AI can't replace YOU</h4>
                  <p className="text-gray-700">Understand your unique value in a world where AI is everywhere.</p>
                </div>
                <div className="border-l-4 border-amber-600 pl-6 py-2 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold">Future of Work | Next Gen Entrepreneurs</h4>
                  <p className="text-gray-700">Build the entrepreneurial thinking skills you'll need to thrive in your career.</p>
                </div>
              </div>
              <a
                href="https://calendly.com/mohan20051028/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-bold rounded hover:bg-amber-700 transition-all duration-300 hover:scale-105"
              >
                👉 Apply for a FREE Campus Session
              </a>
            </div>
          </div>



          {/* CTA */}
          <div className="bg-black text-white p-8 md:p-12 rounded-lg text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-black">Let's Start With YOU</h3>
            <p className="text-gray-300 text-base md:text-lg">
              Whether you're looking to hire me for your conference or want a free campus session, let's have a conversation about your needs.
            </p>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-amber-600 text-white text-sm md:text-base font-bold rounded hover:bg-amber-700 transition-all duration-300 hover:scale-105"
            >
              BOOK A CALL NOW
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
