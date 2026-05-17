'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <div className="text-xs font-bold tracking-wider">KK</div>
              <div className="text-[10px] font-semibold">humanfirstbykk</div>
            </div>
            <p className="text-xs text-gray-400">
              Build the thinking you wish you had learned earlier.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold mb-4">PROGRAMS</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">War Room</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Start With You</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">The Garage</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">CONNECT</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="mailto:kkhumanfirst@gmail.com" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Email</a></li>
              <li><a href="https://www.linkedin.com/in/keerthigak/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61589693099133" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Facebook</a></li>
              <li><a href="https://www.instagram.com/kkkannabiran/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © 2026 humanfirstbykk. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              BUILD THE THINKING
              <br />
              YOU WISH YOU HAD
              <br />
              LEARNED EARLIER.
            </h2>
            <Link 
              href="#"
              className="px-6 md:px-8 py-2 md:py-3 text-black text-sm md:text-base font-medium rounded transition-all duration-300 hover:shadow-lg hover:scale-105 hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: '#D4A017' }}
            >
              BOOK A CALL
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 transition-all duration-300">
          <p className="text-xs text-gray-500 text-center">
            Page Developed by <span className="font-semibold text-gray-400">Mohan</span> &nbsp;|&nbsp; Email:&nbsp;
            <a 
              href="mailto:mohan20051028@gmail.com" 
              className="text-amber-600 hover:text-amber-500 transition-colors duration-300"
            >
              mohan20051028@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
