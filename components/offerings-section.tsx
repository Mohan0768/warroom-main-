'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export function OfferingsSection() {
  const [sparks, setSparks] = useState<Array<{ id: number; x: number; y: number; tx: number; ty: number }>>([])
  const sparkIdRef = useRef(0)
  const warRoomRefRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (warRoomRefRef.current) {
        const rect = warRoomRefRef.current.getBoundingClientRect()
        const parentRect = warRoomRefRef.current.parentElement?.getBoundingClientRect()
        
        if (parentRect) {
          const x = Math.random() * (warRoomRefRef.current.offsetWidth - 20)
          const y = Math.random() * (warRoomRefRef.current.offsetHeight - 20)

          const newSpark = {
            id: sparkIdRef.current++,
            x,
            y,
            tx: (Math.random() - 0.5) * 200,
            ty: (Math.random() - 0.5) * 200 - 100
          }

          setSparks(prev => [...prev, newSpark])

          setTimeout(() => {
            setSparks(prev => prev.filter(s => s.id !== newSpark.id))
          }, 800)
        }
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const offerings = [
    {
      title: 'WAR ROOM',
      subtitle: 'Live Business Simulation',
      description: 'A 6-stage intensive simulation where you build a business from scratch, make real decisions, and experience the consequences in a risk-free environment.',
      color: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
      textColor: 'text-white',
      buttonColor: 'text-black',
      buttonStyle: { backgroundColor: '#FF6B35' },
      hasFireEffect: true
    },
    {
      title: 'Start With',
      subtitle: 'YOU — Keynote',
      description: 'Transform how you think about your future. This keynote helps leaders and students understand their power in an AI-driven world.',
      color: '#6B7280',
      textColor: 'text-white',
      buttonColor: 'text-white',
      buttonStyle: { backgroundColor: '#1F2937' }
    },
    {
      title: 'The Garage',
      subtitle: 'Build from $0 in 3 Days',
      description: 'An intensive 3-day entrepreneurial sprint where you learn to validate ideas, build MVPs, and think like a founder.',
      color: '#D4A017',
      textColor: 'text-black',
      buttonColor: 'text-white',
      buttonStyle: { backgroundColor: 'black' }
    }
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-gray-500 tracking-wide mb-4">THREE WAYS TO WORK WITH KK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            Think. Adapt.
            <br />
            Stay in control.
          </h2>
        </div>

        <style>{`
          @keyframes fireFlicker {
            0%, 100% { opacity: 1; }
            25% { opacity: 0.95; }
            50% { opacity: 0.9; }
            75% { opacity: 0.98; }
          }
          @keyframes fireGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 107, 53, 0.2); }
            50% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.3); }
          }
          @keyframes spark {
            0% {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(var(--tx), var(--ty)) scale(0);
            }
          }
          .war-room-card {
            animation: fireFlicker 4s ease-in-out infinite, fireGlow 3s ease-in-out infinite;
            position: relative;
            overflow: hidden;
          }
          .spark {
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #FF6B35, #FF4500);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 8px rgba(255, 107, 53, 0.8);
            animation: spark 0.8s ease-out forwards;
          }
        `}</style>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, idx) => (
            <div 
              key={idx}
              ref={offering.hasFireEffect ? warRoomRefRef : null}
              className={`${typeof offering.color === 'string' && offering.color.startsWith('bg-') ? offering.color : ''} ${offering.textColor} p-6 md:p-8 rounded-lg flex flex-col justify-between min-h-72 md:min-h-96 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${offering.hasFireEffect ? 'war-room-card' : ''}`}
              style={{ 
                ...(typeof offering.color !== 'string' || !offering.color.startsWith('bg-') ? { background: offering.color } : {}),
                animationDelay: `${idx * 0.1}s`
              }}
            >
              {offering.hasFireEffect && sparks.map(spark => (
                <div
                  key={spark.id}
                  className="spark"
                  style={{
                    left: spark.x,
                    top: spark.y,
                    '--tx': `${spark.tx}px`,
                    '--ty': `${spark.ty}px`
                  } as React.CSSProperties & { '--tx': string; '--ty': string }}
                />
              ))}
              <div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                  {offering.title}
                  <br />
                  {offering.subtitle}
                </h3>
                <p className={`text-sm leading-relaxed ${offering.textColor === 'text-white' ? 'opacity-90' : ''}`}>
                  {offering.description}
                </p>
              </div>
              <Link 
                href={idx === 0 ? '/war-room' : idx === 1 ? '/start-with-you' : '/the-garage'}
                className={`${offering.buttonColor} inline-block px-6 py-2 rounded font-medium text-sm transition-all duration-300 mt-6 w-fit hover:shadow-lg hover:scale-105`}
                style={offering.buttonStyle}
              >
                LEARN MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
