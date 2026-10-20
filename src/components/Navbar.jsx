import React, { useState, useEffect, useRef } from 'react'
import { Heart, Menu, X, Music, VolumeX, Calendar, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Navbar({ data, onOpenRsvp }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(true)
  const playerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize YouTube Player with requested song: "Kudmayi" (e1SAa-9Sm-A)
  useEffect(() => {
    const initPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        try {
          playerRef.current = new window.YT.Player('yt-wedding-audio', {
            height: '120',
            width: '120',
            videoId: 'e1SAa-9Sm-A',
            playerVars: {
              autoplay: 0,
              loop: 1,
              playlist: 'e1SAa-9Sm-A',
              controls: 0,
              modestbranding: 1,
              playsinline: 1,
            },
            events: {
              onStateChange: (event) => {
                // 1: playing, 2: paused, 0: ended
                if (event.data === 1) {
                  setIsPlayingMusic(true)
                } else if (event.data === 2 || event.data === 0) {
                  setIsPlayingMusic(false)
                }
              },
            },
          })
        } catch (err) {
          console.warn('YouTube Player initialization notice:', err)
        }
      }
    }

    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      } else {
        document.body.appendChild(tag)
      }
      window.onYouTubeIframeAPIReady = initPlayer
    } else {
      initPlayer()
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy()
        } catch (e) { }
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') {
      return
    }
    try {
      if (isPlayingMusic) {
        playerRef.current.pauseVideo()
        setIsPlayingMusic(false)
      } else {
        playerRef.current.playVideo()
        setIsPlayingMusic(true)
      }
    } catch (e) {
      console.warn('Error toggling music:', e)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
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
            {/* Wedding Song Audio Button */}
            <button
              onClick={toggleMusic}
              title={isPlayingMusic ? "Pause 'Kudmayi'" : "Play Wedding Song 'Kudmayi'"}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs tracking-wide transition-all duration-300 ${isPlayingMusic
                  ? 'border-[#cca06b] bg-[#fbf8f1] text-[#b88647] shadow-sm'
                  : 'border-[#cca06b]/30 bg-white/70 text-[#7d6b5c] hover:border-[#cca06b]'
                }`}
            >
              {isPlayingMusic ? (
                <Music className="w-3.5 h-3.5 animate-bounce text-[#cca06b]" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
              <span className="font-medium">
                {isPlayingMusic ? 'Kudmayi ♪' : 'Play Music'}
              </span>
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
              onClick={toggleMusic}
              title={isPlayingMusic ? "Pause 'Kudmayi'" : "Play Wedding Song 'Kudmayi'"}
              className={`p-2 rounded-full border transition-all ${isPlayingMusic
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

      {/* Hidden YouTube Audio Player Container */}
      <div className="overflow-hidden w-0 h-0 opacity-0 pointer-events-none absolute -bottom-10 -left-10">
        <div id="yt-wedding-audio" />
      </div>

      {/* Floating Now Playing Pill */}
      {isPlayingMusic && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2b2725]/90 backdrop-blur-md text-white border border-[#cca06b]/40 rounded-full pl-4 pr-3 py-2 flex items-center space-x-3 shadow-2xl text-xs transition-all animate-bounce-subtle">
          <span className="flex space-x-0.5 items-end h-3">
            <span className="w-0.5 bg-[#cca06b] h-3 animate-pulse" />
            <span className="w-0.5 bg-[#cca06b] h-2 animate-bounce" />
            <span className="w-0.5 bg-[#cca06b] h-3.5 animate-pulse" />
          </span>
          <span className="font-serif italic tracking-wide text-[#e8d7ba]">
            Now Playing: Kudmayi
          </span>
          <button
            onClick={toggleMusic}
            className="text-[#cca06b] hover:text-white transition-colors p-1"
            title="Pause Music"
          >
            <VolumeX className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  )
}
