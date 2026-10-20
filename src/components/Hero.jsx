import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Heart, ChevronDown, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Hero({ data }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const heroImages = data.couple.heroImages || [data.couple.heroImage || '/images/hero.jpg']
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length <= 1) return
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  useEffect(() => {
    const targetDate = new Date(data.couple.weddingDate).getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [data.couple.weddingDate])

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#cca06b', '#b88647', '#e8d7ba', '#ffffff', '#e11d48']
    })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Images with Cinematic Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroImages.map((imgSrc, idx) => (
          <img
            key={imgSrc}
            src={imgSrc}
            alt={`${data.couple.groom.name} and ${data.couple.bride.name} Wedding Celebration`}
            className={`absolute inset-0 w-full h-full object-cover object-[center_22%] filter brightness-[0.80] transition-all duration-1000 ease-in-out ${
              idx === currentHeroIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          />
        ))}
        {/* Multilayer Luxury Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b1512]/70 via-[#1b1512]/40 to-[#1b1512]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        
        {/* Subtle Decorative Floral Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 animate-pulse-glow">
          <Heart className="w-3.5 h-3.5 text-[#cca06b] fill-[#cca06b]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#f7f3ed] font-medium">
            Save The Date
          </span>
          <Heart className="w-3.5 h-3.5 text-[#cca06b] fill-[#cca06b]" />
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-2xl text-[#f3ebdb] font-light max-w-xl mx-auto mb-3 tracking-wide">
          Together with our families, we invite you to celebrate the wedding of
        </p>

        {/* Couple Names */}
        <div className="my-2 sm:my-4">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-white drop-shadow-md">
            <span>{data.couple.groom.name}</span>
            <span className="font-script text-[#cca06b] text-6xl sm:text-8xl md:text-9xl mx-3 sm:mx-6 inline-block transform -rotate-6">
              &amp;
            </span>
            <span>{data.couple.bride.name}</span>
          </h1>
        </div>

        {/* Date and Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#f7f3ed] my-6">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-md border border-white/10">
            <Calendar className="w-4 h-4 text-[#cca06b]" />
            <span>{data.couple.displayDate}</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-md border border-white/10">
            <MapPin className="w-4 h-4 text-[#cca06b]" />
            <span>{data.couple.location || "Udumbannoor, Kerala, India"}</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="my-6 w-full max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#cca06b] mb-4 font-semibold">
            Counting Down To Forever
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 sm:p-4 text-center shadow-lg transition-transform hover:scale-105"
              >
                <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-white">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#cca06b] mt-1 font-medium">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={handleCelebrate}
            className="flex items-center space-x-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#cca06b] to-[#b88647] hover:from-[#dbbf92] hover:to-[#cca06b] text-[#1f1610] font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-[#1f1610]" />
            <span>Celebrate With Confetti</span>
          </button>

          <a
            href="#events"
            className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Event Itinerary
          </a>
        </div>

        {/* Hero Slideshow Dots */}
        {heroImages.length > 1 && (
          <div className="flex items-center space-x-2.5 mt-6 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
            {heroImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentHeroIndex(dotIdx)}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentHeroIndex
                    ? 'w-6 h-2 bg-[#cca06b]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Switch to photo ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <a
            href="#story"
            className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to story section"
          >
            <span className="text-[11px] uppercase tracking-widest mb-1">Our Journey</span>
            <ChevronDown className="w-5 h-5 text-[#cca06b]" />
          </a>
        </div>

      </div>
    </section>
  )
}
