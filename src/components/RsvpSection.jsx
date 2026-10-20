import React, { useState, useEffect } from 'react'
import { Heart, Send, CheckCircle2, User, Mail, MessageSquare, Users, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function RsvpSection({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guestCount: '2',
    events: ['wedding-ceremony', 'wedding-reception'],
    dietary: 'both',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [wishesList, setWishesList] = useState([
    {
      name: "Dr. Thomas & Family",
      message: "Dearest Ginil & Ammu, wishing you both a lifetime of divine blessings, love, and immense joy!",
      date: "Oct 2026",
    },
    {
      name: "Sneha & Rahul",
      message: "So thrilled for you both! Can't wait to dance at the Sangeet and celebrate this magnificent bond!",
      date: "Oct 2026",
    },
    {
      name: "George Uncle",
      message: "May your home always be filled with peace, laughter, and endless warmth.",
      date: "Oct 2026",
    }
  ])

  useEffect(() => {
    const saved = localStorage.getItem('ginil_ammu_wishes')
    if (saved) {
      try {
        setWishesList(JSON.parse(saved))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const handleEventToggle = (eventId) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventId)
      return {
        ...prev,
        events: exists
          ? prev.events.filter((id) => id !== eventId)
          : [...prev.events, eventId],
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name) return

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#cca06b', '#b88647', '#ff6b81', '#ffffff']
    })

    if (formData.message) {
      const newWish = {
        name: formData.name,
        message: formData.message,
        date: 'Just now',
      }
      const updated = [newWish, ...wishesList]
      setWishesList(updated)
      localStorage.setItem('ginil_ammu_wishes', JSON.stringify(updated))
    }

    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="py-24 bg-[#f7f3ed] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-script text-[#cca06b] text-4xl sm:text-5xl mb-2">
            Be Our Guest
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2b2725] tracking-wide">
            Kindly RSVP &amp; Send Wishes
          </h2>
          <div className="w-16 h-[2px] bg-[#cca06b] mx-auto my-6" />
          <p className="text-[#685d54] text-base sm:text-lg leading-relaxed">
            Your presence will make our union truly memorable. Please let us know if you can join us by responding below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* RSVP Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#cca06b]/30 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 bg-[#faf6ed] text-[#cca06b] rounded-full flex items-center justify-center mx-auto border border-[#cca06b]/40">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-3xl text-[#2b2725]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-[#685d54] text-base max-w-md mx-auto">
                  {formData.attendance === 'yes'
                    ? "We are delighted and eagerly look forward to celebrating our special day with you!"
                    : "We will miss you dearly, but thank you warmly for sending your heartfelt blessings!"}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#cca06b] text-[#cca06b] hover:bg-[#faf6ed] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#cca06b] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John & Sarah Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#cca06b] focus:ring-1 focus:ring-[#cca06b] outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Email / Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                    Email Address or Phone *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#cca06b] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. yourname@domain.com / +91 98470..."
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#cca06b] focus:ring-1 focus:ring-[#cca06b] outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Will you attend? */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                    Will You Be Joining Us?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider border text-center transition-all ${formData.attendance === 'yes'
                          ? 'border-[#cca06b] bg-[#faf6ed] text-[#9e6d37] shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                    >
                      Joyfully Accepts
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'no' })}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider border text-center transition-all ${formData.attendance === 'no'
                          ? 'border-[#cca06b] bg-[#faf6ed] text-[#9e6d37] shadow-sm'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                        }`}
                    >
                      Regretfully Declines
                    </button>
                  </div>
                </div>

                {formData.attendance === 'yes' && (
                  <>
                    {/* Number of Guests */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                        Total Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#cca06b] absolute left-3.5 top-3.5" />
                        <select
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#cca06b] focus:ring-1 focus:ring-[#cca06b] outline-none text-sm bg-white cursor-pointer"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People (Family)</option>
                        </select>
                      </div>
                    </div>

                    {/* Events attending checkboxes */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                        Events Attending
                      </label>
                      <div className="space-y-2">
                        {data.events.map((evt) => (
                          <label
                            key={evt.id}
                            className="flex items-center space-x-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm text-[#4a3f35]"
                          >
                            <input
                              type="checkbox"
                              checked={formData.events.includes(evt.id)}
                              onChange={() => handleEventToggle(evt.id)}
                              className="w-4 h-4 accent-[#cca06b] rounded cursor-pointer"
                            />
                            <span className="font-medium">{evt.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Blessings / Note */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4a3f35] mb-2">
                    Warm Blessings &amp; Wishes for the Couple
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write a heartfelt note for Ginil & Ammu..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#cca06b] focus:ring-1 focus:ring-[#cca06b] outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#cca06b] to-[#b88647] hover:from-[#d1a868] hover:to-[#cca06b] text-white font-semibold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send RSVP Response</span>
                </button>

              </form>
            )}
          </div>

          {/* Guest Wishes Wall */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-[#cca06b]/20 shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="font-serif text-2xl text-[#2b2725] font-normal flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#cca06b]" />
                  Guest Wishes Wall
                </h3>
                <span className="text-xs font-semibold text-[#b88647] bg-[#faf6ed] px-3 py-1 rounded-full">
                  {wishesList.length} Messages
                </span>
              </div>

              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                {wishesList.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#faf7f2] p-4 rounded-2xl border border-[#cca06b]/15 text-sm space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <strong className="text-[#3d2a1d] font-semibold">{item.name}</strong>
                      <span className="text-gray-400 text-[11px]">{item.date}</span>
                    </div>
                    <p className="text-[#685d54] italic font-serif text-sm">
                      "{item.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support Box */}
            <div className="bg-[#faf6ed] rounded-3xl p-6 border border-[#cca06b]/30 text-center">
              <h4 className="font-serif text-lg text-[#2b2725] mb-1 font-medium">Need Assistance?</h4>
              <p className="text-xs text-[#685d54] mb-3">
                For questions regarding accommodations, travel, or dietary preferences:
              </p>
              <div className="text-xs font-semibold text-[#9e6d37] space-y-1">
                <p>Phone: {data.contact.phone}</p>
                <p>Email: {data.contact.rsvpEmail}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
