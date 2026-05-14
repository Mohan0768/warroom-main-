'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black scroll-smooth relative">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Background Image */}
          <div className="hidden lg:block animate-fadeInUp">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/hero-background.jpg"
                alt="Build the thinking"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8 animate-fadeInUp">
            {/* Tagline */}
            <p className="text-xs md:text-sm font-medium text-gray-300 tracking-wide">
              KK KANNABIRAN&apos;S humanfirstbykk
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
              BUILD THE
              <br />
              THINKING YOU
              <br />
              WISH YOU HAD
              <br />
              LEARNED{' '}
              <span className="text-yellow-500">EARLIER.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
              In an AI-driven world, how you think determines your career, your direction, and your growth — so you stay in control when the world becomes unpredictable.
            </p>

            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Entrepreneurial thinking workshops & business simulations for students and leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }} suppressHydrationWarning={true}>
              <a 
                href="https://war-roomdemo.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 bg-yellow-500 text-black text-sm md:text-base font-bold rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
              >
                WAR ROOM FREE TRIAL
              </a>
              <a 
                href="https://calendly.com/mohan20051028/new-meeting" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-sm md:text-base font-bold rounded hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center"
              >
                BOOK A CALL
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 md:pt-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-2xl md:text-3xl font-black text-white">15+</p>
                <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">YEARS IN LEADERSHIP</p>
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-2xl md:text-3xl font-black text-white">6 Stages</p>
                <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">LIVE WAR ROOM</p>
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-2xl md:text-3xl font-black text-white">$0 → 5-Figure</p>
                <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium">KK&apos;S BUILD</p>
              </div>
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
