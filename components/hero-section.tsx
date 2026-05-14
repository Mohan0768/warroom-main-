'use client'

import Link from 'next/link'
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

      // Create particles at cursor position
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

  // Animate particles
  useEffect(() => {
    const animationFrame = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: p.opacity - 0.02,
            vy: p.vy + 0.1, // gravity
          }))
          .filter(p => p.opacity > 0)
      )
    }, 30)

    return () => clearInterval(animationFrame)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black scroll-smooth overflow-x-hidden"
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

      {/* Main Content - Image on top, text below with spacing */}
      <div className="relative z-10 flex flex-col gap-2 lg:gap-2 items-center px-2 sm:px-3 lg:px-6 py-0 lg:py-0 min-h-screen h-screen pt-2">
        
        {/* Image Section - Top on all devices */}
        <div className="w-full flex items-center justify-center flex-shrink-0 animate-fadeInUp pt-0 lg:pt-0 flex-shrink flex-grow-0 px-1 sm:px-2">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-4xl aspect-video">
            <img 
              src="/hero-background.jpg"
              alt="Build the thinking"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Text Section - Bottom on all devices */}
        <div className="w-full flex flex-col justify-end animate-fadeInUp max-w-4xl mx-auto flex-1 pb-4" style={{ animationDelay: '0.1s' }}>
          {/* Main Headline */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight text-white mb-1 md:mb-2">
            BUILD THE THINKING YOU WISH YOU LEARNED{' '}
            <span style={{ color: '#D4A017' }}>EARLIER.</span>
          </h1>

          {/* Description */}
          <p className="text-xs text-gray-300 leading-relaxed mb-1">
            In an AI-driven world, how you think determines your career, direction, and growth.
          </p>

          <p className="text-xs text-gray-400 font-regular mb-3">
            Entrepreneurial thinking workshops & business simulations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mb-3 mt-2">
            <a 
              href="https://war-roomdemo.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-2.5 text-black text-xs md:text-sm font-bold rounded transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center w-fit shadow-md"
              style={{ backgroundColor: '#D4A017' }}
            >
              WAR ROOM FREE TRIAL
            </a>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-2.5 border-2 text-xs md:text-sm font-bold rounded transition-all duration-300 hover:text-black hover:shadow-lg hover:scale-105 inline-block text-center w-fit shadow-md"
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-2">
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-sm md:text-lg font-black text-white">15+</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">YEARS</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-sm md:text-lg font-black text-white">6</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">STAGES</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-sm md:text-lg font-black text-white">$0→5M</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">GROWTH</p>
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
