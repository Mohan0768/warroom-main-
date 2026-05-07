'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  quickReplies?: string[]
}

const FAQ_DATABASE = {
  'war-room': {
    question: 'What\'s the format of the WAR ROOM?',
    answer: 'The WAR ROOM is a live business simulation where participants navigate a company through multiple stages of growth. It combines strategic thinking, rapid decision-making, and real-world business scenarios to accelerate entrepreneurial thinking.',
  },
  'who-programs': {
    question: 'Who are these programs designed for?',
    answer: 'Our programs are designed for students, early-career professionals, managers, and leaders who want to develop entrepreneurial thinking and prepare for an AI-driven future. Anyone looking to build strategic thinking skills can benefit from our workshops.',
  },
  'custom-programs': {
    question: 'Do you offer custom programs?',
    answer: 'Yes! We offer custom programs tailored to your organization\'s specific needs. Contact us to discuss how we can create a tailored experience for your team, from corporate training to campus workshops.',
  },
  'different': {
    question: 'What makes these programs different?',
    answer: 'Our programs combine interactive simulations, AI integration, real-world case studies, and personalized coaching. We focus on teaching you how to think, not what to think, enabling you to stay in control in an unpredictable world.',
  },
  'pricing': {
    question: 'What is the pricing?',
    answer: 'Pricing varies based on program type, group size, and customization level. For detailed pricing information, please book a call with us or send an inquiry through our contact form.',
  },
  'duration': {
    question: 'How long are the programs?',
    answer: 'Program duration ranges from half-day workshops to multi-week intensive programs depending on the type. The WAR ROOM typically runs 6-8 hours. Contact us to discuss the best duration for your needs.',
  },
}

const QUICK_REPLIES = [
  'What\'s the WAR ROOM?',
  'Who is this for?',
  'Custom programs?',
  'What makes you different?',
  'Book a call',
  'Contact us',
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m here to help answer questions about humanfirstbykk programs. What would you like to know?',
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: QUICK_REPLIES,
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const findMatchingFAQ = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase()
    
    for (const [key, faq] of Object.entries(FAQ_DATABASE)) {
      if (
        lowerInput.includes('war room') || 
        lowerInput.includes('format') ||
        lowerInput.includes('simulation')
      ) {
        return 'war-room'
      }
      if (
        lowerInput.includes('who') ||
        lowerInput.includes('designed') ||
        lowerInput.includes('for whom')
      ) {
        return 'who-programs'
      }
      if (
        lowerInput.includes('custom') ||
        lowerInput.includes('tailored')
      ) {
        return 'custom-programs'
      }
      if (
        lowerInput.includes('different') ||
        lowerInput.includes('unique') ||
        lowerInput.includes('why')
      ) {
        return 'different'
      }
      if (
        lowerInput.includes('price') ||
        lowerInput.includes('cost') ||
        lowerInput.includes('how much')
      ) {
        return 'pricing'
      }
      if (
        lowerInput.includes('duration') ||
        lowerInput.includes('how long') ||
        lowerInput.includes('hours')
      ) {
        return 'duration'
      }
    }
    return null
  }

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response with delay
    setTimeout(() => {
      let botResponse: Message

      if (
        text.toLowerCase().includes('book') ||
        text.toLowerCase().includes('call') ||
        text.toLowerCase().includes('meeting')
      ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: 'Great! You can book a 1-on-1 meeting with KK using our Calendly booking section, or fill out the "Hire me to speak" form to discuss your specific needs.',
          sender: 'bot',
          timestamp: new Date(),
          quickReplies: ['View booking', 'More questions', 'Contact form'],
        }
      } else if (
        text.toLowerCase().includes('contact') ||
        text.toLowerCase().includes('reach')
      ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: 'You can reach us through the contact form on this page, or book a meeting directly. We typically respond within 24 hours!',
          sender: 'bot',
          timestamp: new Date(),
          quickReplies: QUICK_REPLIES,
        }
      } else {
        const faqKey = findMatchingFAQ(text)
        
        if (faqKey) {
          const faq = FAQ_DATABASE[faqKey as keyof typeof FAQ_DATABASE]
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: faq.answer,
            sender: 'bot',
            timestamp: new Date(),
            quickReplies: ['More questions', 'Book a call', 'Contact us'],
          }
        } else {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: 'I\'m not sure about that. Would you like to book a call with KK directly, or explore other options? You can also fill out the contact form below for more specific inquiries.',
            sender: 'bot',
            timestamp: new Date(),
            quickReplies: ['Book a call', 'View FAQs', 'Contact form'],
          }
        }
      }

      setMessages(prev => [...prev, botResponse])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
        aria-label="Open chat"
        suppressHydrationWarning={true}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 animate-slideInUp">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">humanfirstbykk Assistant</h3>
            <p className="text-xs text-red-100">Ask anything about our programs</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages[messages.length - 1]?.quickReplies && (
              <div className="flex flex-wrap gap-2 mt-4" suppressHydrationWarning={true}>
                {messages[messages.length - 1].quickReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
