'use client'

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-white scroll-smooth overflow-x-hidden flex items-center justify-center"
    >

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-6 lg:gap-8 items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-12 w-full max-w-4xl">
        
        {/* Text Section - Centered */}
        <div className="w-full flex flex-col items-center text-center animate-fadeInUp">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-snug text-gray-900 mb-6 md:mb-8">
            BUILD THE THINKING YOU WISH YOU LEARNED{' '}
            <span style={{ color: '#FFC107' }}>EARLIER.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            In an AI-driven world, how you think determines your career, direction, and growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
            <a 
              href="https://war-roomdemo.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 md:px-10 py-3 md:py-3.5 text-gray-900 text-sm md:text-base font-bold rounded transition-all duration-300 hover:shadow-2xl hover:scale-110 inline-block text-center w-fit shadow-lg"
              style={{ backgroundColor: '#FFC107' }}
            >
              WAR ROOM FREE TRIAL
            </a>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 md:px-10 py-3 md:py-3.5 border-2 text-sm md:text-base font-bold rounded transition-all duration-300 hover:text-gray-900 hover:shadow-2xl hover:scale-110 inline-block text-center w-fit shadow-lg"
              style={{ borderColor: '#FFC107', color: '#FFC107', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC107'
                e.currentTarget.style.color = '#1a1a1a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#FFC107'
              }}
            >
              BOOK A CALL
            </a>
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
