'use client'

import { useState, useEffect, useRef } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const particleIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePos({ x, y })

      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x,
          y,
          size: Math.random() * 4 + 2,
          opacity: 0.6,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        }
        setParticles(prev => [...prev, newParticle].slice(-30))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: p.opacity - 0.02,
            vy: p.vy + 0.1,
          }))
          .filter(p => p.opacity > 0)
      )
    }, 30)

    return () => clearInterval(animationFrame)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black scroll-smooth overflow-x-hidden pt-0"
    >
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed w-80 h-80 rounded-full transition-opacity duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)',
          left: `${mousePos.x - 160}px`,
          top: `${mousePos.y - 160}px`,
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="fixed rounded-full shadow-lg"
            style={{
              backgroundColor: '#D4A017',
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              pointerEvents: 'none',
              zIndex: 2,
              boxShadow: `0 0 ${p.size * 2}px rgba(212,160,23,${p.opacity * 0.8})`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        {/* Portrait Mosaic "you" Section */}
        <div className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 animate-fadeInUp flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <svg viewBox="0 0 800 300" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              {/* Portrait mosaic "you" text filled with small faces */}
              <defs>
                <pattern id="portraitPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="6" cy="6" r="4" fill="#999999" opacity="0.8" />
                  <circle cx="4" cy="5" r="1.2" fill="#ffffff" opacity="0.6" />
                  <circle cx="8" cy="5" r="1.2" fill="#ffffff" opacity="0.6" />
                  <line x1="6" y1="7" x2="6" y2="8" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
                </pattern>
              </defs>
              
              {/* "you" text with portrait pattern fill */}
              <text 
                x="400" 
                y="200" 
                fontSize="160" 
                fontWeight="900" 
                fontFamily="Arial, sans-serif" 
                textAnchor="middle" 
                fill="url(#portraitPattern)" 
                stroke="#999999" 
                strokeWidth="1" 
                opacity="0.85"
              >
                you
              </text>
            </svg>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-4 md:mb-6 text-balance">
              BUILD THE THINKING YOU WISH YOU LEARNED{' '}
              <span style={{ color: '#D4A017' }}>EARLIER.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-3 md:mb-4 max-w-2xl">
              In an AI-driven world, how you think determines your career, direction, and growth.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 font-regular mb-6 md:mb-8 max-w-2xl">
              Entrepreneurial thinking workshops & business simulations
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 mt-6 md:mt-8">
              <a 
                href="https://war-roomdemo.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 md:px-10 py-3 md:py-3.5 text-black text-sm md:text-base font-bold rounded transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-block text-center w-fit shadow-lg"
                style={{ backgroundColor: '#D4A017' }}
              >
                ENTER WAR ROOM
              </a>
              <a 
                href="https://calendly.com/mohan20051028/new-meeting" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 md:px-10 py-3 md:py-3.5 border-2 text-sm md:text-base font-bold rounded transition-all duration-300 inline-block text-center w-fit shadow-lg"
                style={{ borderColor: '#D4A017', color: '#D4A017', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4A017'
                  e.currentTarget.style.color = 'black'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#D4A017'
                }}
              >
                BOOK A CALL
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-xl md:text-2xl lg:text-3xl font-black text-white">15+</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-medium">YEARS</p>
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-xl md:text-2xl lg:text-3xl font-black text-white">6</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-medium">STAGES</p>
              </div>
              <div className="transition-all duration-300 hover:scale-105">
                <p className="text-xl md:text-2xl lg:text-3xl font-black text-white">$0→5M</p>
                <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 font-medium">GROWTH</p>
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
