'use client'

import { useState } from 'react'
import Link from 'next/link'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What's the format of the WAR ROOM?",
      answer: "The WAR ROOM is a 3-5 day intensive business simulation. Participants form teams, build a business from scratch, make real decisions, and experience consequences in stages. It combines hands-on learning with real-time feedback."
    },
    {
      question: "Who are these programs designed for?",
      answer: "Our programs are designed for students preparing for their careers, young professionals, and established leaders looking to sharpen their entrepreneurial thinking and adapt to the AI era. The methodologies work across industries and experience levels."
    },
    {
      question: "Do you offer custom programs?",
      answer: "Yes! We customize all our programs based on your organization's goals, industry, and audience. Whether it's a keynote, workshop, or full simulation, we tailor the content to create maximum impact."
    },
    {
      question: "What makes these programs different?",
      answer: "Rather than teaching abstract concepts, we put you in real situations where you must think, decide, and learn from consequences. This experiential approach creates lasting behavioral change and practical skills."
    }
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-12 md:mb-16">
          Questions,
          <br />
          answers.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 md:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                suppressHydrationWarning={true}
              >
                <span className="text-left text-sm md:text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className={`text-2xl text-yellow-500 flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 animate-expandDown">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 space-y-4 text-center">
          <p className="text-gray-600 text-sm md:text-base">More questions? Get in touch!</p>
          <Link 
            href="https://www.instagram.com/kkkannabiran/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-black text-sm md:text-base font-medium rounded hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes expandDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
        .animate-expandDown {
          animation: expandDown 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
