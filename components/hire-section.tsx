'use client'

import Link from 'next/link'
import { useState } from 'react'

export function HireSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    event: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'
    
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required'
    else if (formData.organization.trim().length < 2) newErrors.organization = 'Organization must be at least 2 characters'
    
    if (!formData.event.trim()) newErrors.event = 'Event details are required'
    else if (formData.event.trim().length < 10) newErrors.event = 'Event details must be at least 10 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        setError(data.message || 'Failed to submit inquiry. Please try again.')
        return
      }
      
      console.log("[v0] Email sent successfully")
      setSubmitted(true)
      setFormData({ name: '', email: '', organization: '', event: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('[v0] Submission error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              <span style={{ color: '#D4A017' }}>Let&apos;s build the room.</span>
            </h2>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 lg:p-12 rounded-lg transition-all duration-300">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeInUp">
                <p className="text-green-800 font-medium">Thank you! Your inquiry has been received. We&apos;ll contact you soon.</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeInUp">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning={true}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name 
                        ? 'border-amber-600 focus:border-amber-700 focus:ring-amber-100' 
                        : 'border-gray-300 focus:border-amber-600 focus:ring-amber-100'
                    }`}
                    required
                  />
                  {errors.name && <p className="text-amber-700 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email 
                        ? 'border-amber-600 focus:border-amber-700 focus:ring-amber-100' 
                        : 'border-gray-300 focus:border-amber-600 focus:ring-amber-100'
                    }`}
                    required
                  />
                  {errors.email && <p className="text-amber-700 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="transition-all duration-300">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Organization
                </label>
                <input 
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.organization 
                      ? 'border-amber-600 focus:border-amber-700 focus:ring-amber-100' 
                      : 'border-gray-300 focus:border-amber-600 focus:ring-amber-100'
                  }`}
                  required
                />
                {errors.organization && <p className="text-amber-700 text-xs mt-1">{errors.organization}</p>}
              </div>

              <div className="transition-all duration-300">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What event are you planning?
                </label>
                <textarea 
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  rows={4}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.event 
                      ? 'border-amber-600 focus:border-amber-700 focus:ring-amber-100' 
                      : 'border-gray-300 focus:border-amber-600 focus:ring-amber-100'
                  }`}
                  required
                />
                {errors.event && <p className="text-amber-700 text-xs mt-1">{errors.event}</p>}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="px-6 md:px-8 py-2 md:py-3 text-black font-medium rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#D4A017' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#B8860B'
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = '#D4A017'
                  }
                }}
              >
                {loading ? 'SENDING...' : 'SEND INQUIRY'}
              </button>
            </form>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.3s ease-out;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}
