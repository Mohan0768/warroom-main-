'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 bg-black scroll-smooth relative overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-6xl w-full relative z-10 px-4 md:px-6">
        <div className="text-center space-y-6 md:space-y-8 animate-fadeInUp">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-medium text-gray-300 tracking-wide">
            KK KANNABIRAN&apos;S humanfirstbykk
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            BUILD THE THINKING
            <br />
            YOU WISH YOU HAD
            <br />
            LEARNED{' '}
            <span className="text-yellow-500">EARLIER.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            In an AI-driven world, how you think determines your career, your direction, and your growth — so you stay in control when the world becomes unpredictable.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            <strong>Entrepreneurial thinking workshops & business simulations</strong> for students and leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }} suppressHydrationWarning={true}>
            <a 
              href="https://war-roomdemo.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-black text-sm md:text-base font-medium rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
            >
              WAR ROOM FREE TRIAL
            </a>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2 md:py-3 border-2 border-yellow-500 text-yellow-500 text-sm md:text-base font-medium rounded hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
            >
              BOOK A CALL
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">15+</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">YEARS IN LEADERSHIP DEVELOPMENT</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">6 Stages</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">IN THE LIVE WAR ROOM SIMULATION</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">$0 → 5-Figure</p>
              <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">KK&apos;S OWN BUILD, EXITED TO FOLLOW HER YOU</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
