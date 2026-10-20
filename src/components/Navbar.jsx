import React, { useState, useEffect } from 'react'
import { Heart, Menu, X, Music, VolumeX, Calendar, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Navbar({ data, onOpenRsvp }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [audioCtx, setAudioCtx] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Romantic acoustic chime synthesizer using native Web Audio API
  const toggleAmbientMusic = () => {
    if (isPlayingMusic) {
      if (audioCtx) {
        audioCtx.close()
        setAudioCtx(null)
      }
      setIsPlayingMusic(false)
    } else {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 392.0, 329.63] // C major dreamy arpeggio
        let step = 0

        const playChime = () => {
          if (ctx.state === 'closed') return
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sine'
          const freq = notes[step % notes.length]
          osc.frequency.setValueAtTime(freq, ctx.currentTime)
          
          gain.gain.setValueAtTime(0.001, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1)
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8)

          osc.connect(gain)
          gain.connect(ctx.destination)

          osc.start()
          osc.stop(ctx.currentTime + 2.0)

          step++
        }

        const intervalId = setInterval(playChime, 800)
        playChime()

        setAudioCtx({
          close: () => {
            clearInterval(intervalId)
            ctx.close()
          }
        })
        setIsPlayingMusic(true)
      } catch (e) {
        console.error('Audio not supported:', e)
      }
    }
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#cca06b', '#b88647', '#f3d5b5', '#ffffff']
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-[#cca06b]/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wider text-[#3d2a1d] group-hover:text-[#cca06b] transition-colors">
              {data?.couple?.groom?.name || 'Ginil'} <span className="font-script text-[#cca06b] text-3xl sm:text-4xl">&</span> {data?.couple?.bride?.name || 'Ammu'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a
              href="#home"
              className="text-[#4a3f35] hover:text-[#cca06b] transition-colors"
            >
              Home
            </a>
            <a
              href="#story"
              className="text-[#4a3f35] hover:text-[#cca06b] transition-colors"
            >
              Our Story
            </a>
            <a
              href="#events"
              className="text-[#4a3f35] hover:text-[#cca06b] transition-colors"
            >
              Event Details
            </a>
            <a
              href="#gallery"
              className="text-[#4a3f35] hover:text-[#cca06b] transition-colors"
            >
              Gallery
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Ambient Sound Button */}
            <button
              onClick={toggleAmbientMusic}
              title={isPlayingMusic ? "Mute ambient melody" : "Play ambient melody"}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isPlayingMusic
                  ? 'border-[#cca06b] bg-[#fbf8f1] text-[#b88647] shadow-sm'
                  : 'border-[#cca06b]/30 bg-white/70 text-[#7d6b5c] hover:border-[#cca06b]'
              }`}
            >
              {isPlayingMusic ? <Music className="w-4 h-4 animate-bounce" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Sparkle / Celebrate Button */}
            <button
              onClick={triggerConfetti}
              title="Shower Blessings"
              className="p-2 rounded-full border border-[#cca06b]/30 bg-white/70 text-[#b88647] hover:bg-[#cca06b] hover:text-white transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            {/* Event Itinerary Button */}
            <a
              href="#events"
              className="px-5 py-2 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#cca06b] text-white hover:bg-[#b88647] shadow-sm hover:shadow transition-all duration-300"
            >
              Event Itinerary
            </a>
          </div>

          {/* Mobile Menu & Audio Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleAmbientMusic}
              className={`p-2 rounded-full border transition-all ${
                isPlayingMusic
                  ? 'border-[#cca06b] bg-[#fbf8f1] text-[#b88647]'
                  : 'border-[#cca06b]/30 bg-white/70 text-[#7d6b5c]'
              }`}
            >
              {isPlayingMusic ? <Music className="w-4 h-4 animate-bounce" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#4a3f35] hover:text-[#cca06b] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-[#cca06b]/20 px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-4 text-center font-medium">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4a3f35] hover:text-[#cca06b] py-2 border-b border-gray-100"
            >
              Home
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4a3f35] hover:text-[#cca06b] py-2 border-b border-gray-100"
            >
              Our Story
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4a3f35] hover:text-[#cca06b] py-2 border-b border-gray-100"
            >
              Event Details
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4a3f35] hover:text-[#cca06b] py-2 border-b border-gray-100"
            >
              Gallery
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 text-xs uppercase tracking-widest font-semibold rounded-full bg-[#cca06b] text-white hover:bg-[#b88647] shadow transition-colors"
            >
              View Schedule
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
