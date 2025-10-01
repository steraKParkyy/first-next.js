

'use client'

import { useState, useEffect } from 'react'

export default function Formular() {
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [status, setStatus] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  useEffect(() => {
    let filledCount = 0
    if (form.name.trim() !== '') filledCount++
    if (form.email.trim() !== '') filledCount++
    if (form.message.trim() !== '') filledCount++
    if (form.consent) filledCount++

    const newProgress = (filledCount / 4) * 100
    setProgress(newProgress)
  }, [form])

  const handleSubmit = e => {
    e.preventDefault()
    if (progress < 100) return

    console.log('Odoslané:', form)
    setStatus('sent')
  }

  return (
    <section className=" px-4 pb-16 px-6 lg:px-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-black text-center text-shadow-black mb-14 mt-0">
        Formulár
      </h2>

      <div className="relative w-full max-w-md rounded-lg overflow-hidden shadow-md">
        {/* Progress bar pozadia s animovanou vlnou */}
        <div
          className="absolute bottom-0 left-0 w-full bg-accent opacity-100 pointer-events-none transition-all duration-1000 ease-in-out z-0"
          style={{ height: `${progress}%` }}
        >
          <div className="wave absolute top-0 left-0 w-full h-6 overflow-visible pointer-events-none">
            <svg
              viewBox="0 0 120 28"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 Q 15 20 30 10 T 60 10 T 90 10 T 120 10 V28 H0 Z"
                fill="rgb(137, 0, 200)"
              >
                <animate
                  attributeName="d"
                  dur="2s"
                  repeatCount="indefinite"
                  values="
                    M0 10 Q 15 20 30 10 T 60 10 T 90 10 T 120 10 V28 H0 Z;
                    M0 12 Q 15 10 30 12 T 60 12 T 90 12 T 120 12 V28 H0 Z;
                    M0 10 Q 15 20 30 10 T 60 10 T 90 10 T 120 10 V28 H0 Z
                  "
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Formulár nad progress barom */}
        <form
          onSubmit={handleSubmit}
          className="relative p-6  rounded-lg z-10 border-2 border-accent"
        >
          <label className="block mb-4 z-20">
            <span className="block text-sm font-medium text-black">
              Meno <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="block mb-4 z-20">
            <span className="block text-sm font-medium text-black">
              E-mail <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="block mb-4 z-20">
            <span className="block text-sm font-medium text-black">Správa</span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="block mb-4 z-20">
            <span className="block text-sm font-medium text-black">
              Prilož obrázok/ nákres/ predstavu
            </span>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full text-gray-700"
            />
          </label>

          <label className="flex items-center mb-6 z-20">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="h-4 w-4 text-accent border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <span className="ml-2 text-sm text-black">
              Súhlasím so spracovaním osobných údajov podľa{' '}
              <a href="#" className="underline">
                zásad ochrany osobných údajov
              </a>{' '}
              za účelom vybavenia mojej požiadavky <span className="text-red-500">*</span>
            </span>
          </label>

          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 bgpurple text-white rounded-md shadow-md button-glow will-change-transform"
            disabled={progress < 100}
          >
            {status === 'sent' ? 'Odoslané' : 'Odoslať'}
          </button>
        </form>
      </div>
    </section>
  )
}




