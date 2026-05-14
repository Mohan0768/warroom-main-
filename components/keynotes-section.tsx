import Image from 'next/image'
import Link from 'next/link'

export function KeynotesSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-12 md:mb-16">
          Keynotes &
          <br />
          campus sessions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg h-96 bg-gradient-to-br from-blue-600 to-blue-900">
            <Image
              src="/keynote-ai-future.jpg"
              alt="Campus Session"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest" style={{ color: 'rgb(217,119,6)' }}>SPEAKING ENGAGEMENTS</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold mt-1" style={{ color: 'rgb(217,119,6)' }}>•</span>
                  <span>Fortune 500 companies looking to upskill their workforce in entrepreneurial thinking</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold mt-1" style={{ color: 'rgb(217,119,6)' }}>•</span>
                  <span>Business schools and universities preparing students for the AI era</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold mt-1" style={{ color: 'rgb(217,119,6)' }}>•</span>
                  <span>Leadership conferences and corporate retreats</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 space-y-4" style={{ borderLeft: '4px solid rgb(217,119,6)' }}>
              <p className="text-sm font-semibold text-gray-900">
                "Working with KK transformed how our team thinks about innovation and change."
              </p>
              <p className="text-xs text-gray-600">— Chief Learning Officer, Tech Company</p>
            </div>

            <Link 
              href="/speaking-engagement"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              INQUIRE ABOUT A SPEAKING ENGAGEMENT
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
