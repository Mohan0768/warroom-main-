'use client'

import { useEffect } from 'react'

export function CalendlySection() {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-20 px-6 bg-white scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Book a 1-on-1 Meeting
            </h2>
            <p className="text-gray-600 mt-6 max-w-2xl">
              Schedule a call with KK to discuss how humanfirstbykk programs can transform your team&apos;s thinking and prepare them for an AI-driven future.
            </p>
          </div>

          {/* Calendly Embed - Replace with your Calendly URL */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <div
              className="calendly-inline-widget"
              data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mohan20051028/new-meeting'}
              style={{ minHeight: '700px' }}
            />
          </div>

          {/* Fallback text if Calendly URL is not configured */}
          {!process.env.NEXT_PUBLIC_CALENDLY_URL && (
            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-medium">
                Calendly is not configured yet. Please add your NEXT_PUBLIC_CALENDLY_URL environment variable to enable booking.
              </p>
              <p className="text-yellow-700 text-sm mt-2">
                Example: NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
