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
      className="relative h-screen bg-black scroll-smooth overflow-hidden"
    >
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed w-80 h-80 rounded-full transition-opacity duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)',
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
            className="fixed rounded-full bg-yellow-400 shadow-lg"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              pointerEvents: 'none',
              zIndex: 2,
              boxShadow: `0 0 ${p.size * 2}px rgba(250,204,21,${p.opacity * 0.8})`,
            }}
          />
        ))}
      </div>

      {/* Top Half - Image Section */}
      <div className="relative z-10 h-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 animate-fadeInUp">
        <div className="w-full max-w-6xl">
          <img 
            src="/hero-background.jpg"
            alt="Build the thinking"
            className="w-full h-auto max-h-80 md:max-h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Half - Text Section */}
      <div className="relative z-10 h-1/2 bg-black flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-8 md:py-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="w-full max-w-6xl">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-medium text-gray-300 tracking-widest mb-4 md:mb-6">
            KK KANNABIRAN&apos;S humanfirstbykk
          </p>

          {/* Main Headline - Straight line */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-4 md:mb-6">
            BUILD THE THINKING YOU WISH YOU LEARNED{' '}
            <span className="text-yellow-500">EARLIER.</span>
          </h1>

          {/* Description - Straight line text */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-2">
            In an AI-driven world, how you think determines your career, direction, and growth.
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-medium mb-6 md:mb-8">
            Entrepreneurial thinking workshops & business simulations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8">
            <a 
              href="https://war-roomdemo.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 bg-yellow-500 text-black text-xs md:text-sm font-bold rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center w-fit"
            >
              WAR ROOM FREE TRIAL
            </a>
            <a 
              href="https://calendly.com/mohan20051028/new-meeting" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 border-2 border-yellow-500 text-yellow-500 text-xs md:text-sm font-bold rounded hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center w-fit"
            >
              BOOK A CALL
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-black text-white">15+</p>
              <p className="text-xs text-gray-300 mt-1 font-medium">YEARS IN LEADERSHIP</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-black text-white">6 Stages</p>
              <p className="text-xs text-gray-300 mt-1 font-medium">LIVE WAR ROOM</p>
            </div>
            <div className="transition-all duration-300 hover:scale-105">
              <p className="text-2xl md:text-3xl font-black text-white">$0→5-Figure</p>
              <p className="text-xs text-gray-300 mt-1 font-medium">KK&apos;S BUILD</p>
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
