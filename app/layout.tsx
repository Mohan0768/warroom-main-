import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Chatbot } from '@/components/chatbot'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'humanfirstbykk — Build the thinking you wish you had learned earlier',
  description: 'Entrepreneurial thinking workshops & business simulations for students and leaders. Learn to think like an entrepreneur and use AI as a tool to move forward with clarity and confidence. War Room simulation, leadership training, and startup education by KK Kannabiran.',
  keywords: ['entrepreneurship', 'leadership training', 'business simulation', 'entrepreneurial thinking', 'AI education', 'startup education', 'war room', 'business workshop'],
  authors: [{ name: 'KK Kannabiran' }],
  creator: 'KK Kannabiran',
  publisher: 'humanfirstbykk',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://humanfirst.app',
    siteName: 'humanfirstbykk',
    title: 'humanfirstbykk — Entrepreneurial Thinking Workshops & Business Simulations',
    description: 'Transform how you think about your future in an AI-driven world. Live business simulations and entrepreneurial thinking training.',
    images: [
      {
        url: 'https://humanfirst.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'humanfirstbykk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'humanfirstbykk',
    description: 'Entrepreneurial thinking workshops & business simulations',
    creator: '@KKKannabiran',
  },
  icons: {
    icon: '/u.png',
    apple: '/u.png',
  },
  metadataBase: new URL('https://humanfirst.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className="font-sans antialiased text-gray-900">
        {children}
        <Chatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
