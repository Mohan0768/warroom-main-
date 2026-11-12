'use client'

import { FormEvent, useState } from 'react'

export function WaitlistModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  function close() {
    if (status !== 'loading') {
      setOpen(false)
      setEmail('')
      setStatus('idle')
      setMessage('')
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/ceo-city-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = await response.json()

      if (!response.ok) throw new Error(result.message || 'Something went wrong.')
      setStatus('success')
      setMessage("You're on the waitlist! We'll keep you updated.")
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to join the waitlist. Please try again.')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block rounded bg-[#D4A017] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:opacity-90"
      >
        Enter CEO City
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <div role="dialog" aria-modal="true" aria-labelledby="waitlist-title" className="w-full max-w-md rounded-lg border border-gray-800 bg-[#111] p-7 shadow-2xl md:p-9">
            {status === 'success' ? (
              <div className="text-center">
                <h2 id="waitlist-title" className="mb-4 text-2xl font-black">You&apos;re on the waitlist!</h2>
                <p className="mb-7 text-gray-300">{message}</p>
                <button type="button" onClick={close} className="rounded bg-[#D4A017] px-6 py-3 text-sm font-medium text-black hover:opacity-90">Close</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 id="waitlist-title" className="mb-2 text-2xl font-black">Join the Waitlist</h2>
                <p className="mb-6 text-gray-300">Be the first to hear when CEO City opens its doors.</p>
                <label htmlFor="waitlist-email" className="mb-2 block text-sm font-medium">Email address</label>
                <input id="waitlist-email" name="email" type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === 'loading'} className="mb-4 w-full rounded border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-[#D4A017]" placeholder="you@example.com" />
                {message && <p role="alert" className="mb-4 text-sm text-red-300">{message}</p>}
                <div className="flex justify-end gap-3">
                  <button type="button" onClick={close} disabled={status === 'loading'} className="rounded border border-gray-700 px-5 py-3 text-sm text-gray-300 hover:border-gray-500">Cancel</button>
                  <button type="submit" disabled={status === 'loading'} className="rounded bg-[#D4A017] px-5 py-3 text-sm font-medium text-black hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">{status === 'loading' ? 'Joining…' : 'Join Waitlist'}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
