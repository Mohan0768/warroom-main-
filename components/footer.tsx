import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div>
            <div className="flex flex-col items-start mb-4">
              <div className="text-sm font-bold tracking-wider">humanfirstbykk</div>
            </div>
            <p className="text-xs text-gray-400">
              Build the thinking you wish you had learned earlier.
            </p>
          </div>
          <a 
            href="https://calendly.com/mohan20051028/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-black text-sm md:text-base font-medium rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
          >
            BOOK A CALL
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © 2026 humanfirstbykk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
