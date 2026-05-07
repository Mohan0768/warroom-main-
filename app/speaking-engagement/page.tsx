'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { PageNavigation } from '@/components/page-navigation'
import { Footer } from '@/components/footer'

export default function SpeakingEngagementPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    event: '',
    eventDate: '',
    audience: '',
    budget: '',
    additionalInfo: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
    
    if (!formData.event.trim()) newErrors.event = 'Event name is required'
    else if (formData.event.trim().length < 5) newErrors.event = 'Event name must be at least 5 characters'
    
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required'
    if (!formData.audience) newErrors.audience = 'Audience size is required'
    
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          event: `Speaking Engagement Request\n\nEvent: ${formData.event}\nDate: ${formData.eventDate}\nAudience Size: ${formData.audience}\nBudget: ${formData.budget}\n\nAdditional Info: ${formData.additionalInfo}`
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        setError(data.message || 'Failed to submit inquiry. Please try again.')
        return
      }
      
      console.log("[v0] Speaking engagement inquiry sent successfully")
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        organization: '',
        event: '',
        eventDate: '',
        audience: '',
        budget: '',
        additionalInfo: ''
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error('[v0] Submission error:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white">
      <Header />

      {/* Hero */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Inquire About a
            <br />
            Speaking Engagement
          </h1>
          <p className="text-xl text-gray-300">
            Tell us about your event and we'll discuss how KK can inspire and transform your audience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Info */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-black">What We Offer</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  <span>Customized keynotes tailored to your audience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  <span>Interactive workshops for deeper engagement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  <span>Panel participation and special formats</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  <span>Pre- and post-event strategy discussions</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black">Speaking Topics</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>Start With YOU: Building Clarity & Confidence in an AI-Driven World</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>The Entrepreneurial Mindset for Corporate Innovation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>From Students to Founders: Building the Next Generation of Leaders</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-500">•</span>
                  <span>Custom topics tailored to your event</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg transition-all duration-300">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeInUp">
                <p className="text-green-800 font-medium">Thank you! We've received your speaking engagement inquiry. KK will be in touch within 48 hours.</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeInUp">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning={true}>
              <h2 className="text-2xl font-black">Event Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
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
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  />
                  {errors.name && <p className="text-yellow-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
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
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  />
                  {errors.email && <p className="text-yellow-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Organization
                  </label>
                  <input 
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Company or Institution"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.organization 
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  />
                  {errors.organization && <p className="text-yellow-500 text-xs mt-1">{errors.organization}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Event Name
                  </label>
                  <input 
                    type="text"
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    placeholder="e.g., Annual Conference 2024"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.event 
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  />
                  {errors.event && <p className="text-yellow-500 text-xs mt-1">{errors.event}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Event Date
                  </label>
                  <input 
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.eventDate 
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  />
                  {errors.eventDate && <p className="text-yellow-500 text-xs mt-1">{errors.eventDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Audience Size
                  </label>
                  <select
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.audience 
                        ? 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-100' 
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-yellow-100'
                    }`}
                    required
                  >
                    <option value="">Select audience size</option>
                    <option value="50-100">50-100 people</option>
                    <option value="100-250">100-250 people</option>
                    <option value="250-500">250-500 people</option>
                    <option value="500-1000">500-1,000 people</option>
                    <option value="1000+">1,000+ people</option>
                  </select>
                  {errors.audience && <p className="text-yellow-500 text-xs mt-1">{errors.audience}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Budget Range (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-50k">$20,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Additional Information
                </label>
                <textarea 
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, desired topics, or any special requirements..."
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-300"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-yellow-500 text-white font-medium rounded hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 p-8 rounded-lg space-y-4">
            <h3 className="text-xl font-black">Next Steps</h3>
            <p className="text-gray-700">
              Once we receive your inquiry, KK will review the details and get back to you within 48 hours to discuss your event, confirm availability, and finalize logistics.
            </p>
          </div>
        </div>
      </section>

      <PageNavigation />
      <Footer />
    </main>
  )
}
