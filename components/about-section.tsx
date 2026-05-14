'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-16 md:py-20 px-4 md:px-6 bg-white scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'animate-slideInLeft opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full max-w-[30rem] h-[40rem] md:max-w-[36rem] md:h-[48rem] hover:scale-105 transition-transform duration-500 rounded-[1.25rem] overflow-hidden shadow-xl">
              <Image
                src="/kk-portrait.jpg"
                alt="KK Kannabiran - Leadership Trainer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className={`flex h-full flex-col justify-center transition-all duration-700 ${isVisible ? 'animate-slideInRight opacity-100' : 'opacity-0'}`}>
            <div className="space-y-8 max-w-2xl">
              <p className="text-sm font-medium text-gray-500 tracking-wide">MY YOU</p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              From uncertainty,
              <br />
              to control — through
              <br />
              <span style={{ color: '#F4C430' }}>entrepreneurial thinking.</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>
                In 2026, nearly 60% of workers are concerned about job security as AI and economic shifts reshape roles (Source: PwC).
              </p>
              
              <p>
                Every year, thousands of talented students graduate, while capable professionals live with the fear of layoffs. AI is accelerating this pressure — for many, the future feels uncertain.
              </p>

              <p>
                I&apos;ve lived through this. I know what it feels like to lose everything in one day. Somewhere through that journey I had to figure it out for myself. Today, I can say with confidence: <strong>I feel in control of my life.</strong>
              </p>

              <p>
                humanfirstbykk exists to help students and leaders think like entrepreneurs and use AI as a tool to move forward with clarity and confidence.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}
