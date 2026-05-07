'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PageNavigation() {
  const pathname = usePathname()

  const pages = [
    {
      name: 'WAR ROOM',
      description: 'Live Business Simulation',
      href: '/war-room',
      icon: '⚔️'
    },
    {
      name: 'START WITH YOU',
      description: 'Leadership Keynote',
      href: '/start-with-you',
      icon: '🎯'
    },
    {
      name: 'THE GARAGE',
      description: 'Build from $0 in 3 Days',
      href: '/the-garage',
      icon: '🚀'
    },
    {
      name: 'SPEAKING',
      description: 'Hire for Events',
      href: '/speaking-engagement',
      icon: '🎤'
    }
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Explore Our Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((page) => {
            const isActive = pathname === page.href
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isActive
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'bg-white text-black border-gray-200 hover:border-yellow-500'
                }`}
              >
                <div className="text-4xl mb-3">{page.icon}</div>
                <h3 className="font-black text-sm md:text-base mb-2">{page.name}</h3>
                <p className={`text-xs md:text-sm ${isActive ? 'text-black' : 'text-gray-600'}`}>
                  {page.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
