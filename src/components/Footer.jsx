import React, { useState } from 'react'
import { Heart, Share2, ArrowUp, Check } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Footer({ data }) {
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.9 },
    })
    setTimeout(() => setCopied(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1f1915] text-[#e8d7ba] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#cca06b]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Monogram */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#cca06b]/30 bg-[#2b221d] mb-4">
            <span className="font-serif text-2xl text-[#cca06b] tracking-wider">
              {data.couple.groom.name[0]} &amp; {data.couple.bride.name[0]}
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white tracking-wide">
            {data.couple.groom.name} <span className="font-script text-[#cca06b] text-4xl sm:text-5xl">&amp;</span> {data.couple.bride.name}
          </h2>
          <p className="font-script text-2xl text-[#cca06b] mt-1">Forever Begins</p>
        </div>

        {/* Wedding Hashtag */}
        <div className="my-6">
          <span className="inline-block px-5 py-2 rounded-full border border-[#cca06b]/30 bg-[#2b221d]/80 text-xs sm:text-sm font-semibold tracking-widest text-[#cca06b]">
            {data.couple.hashtag}
          </span>
        </div>

        {/* Family Greeting */}
        <p className="text-sm sm:text-base text-[#c4b5a2] max-w-xl mx-auto italic font-serif leading-relaxed mb-8">
          "{data.contact.familyMessage}"
        </p>

        {/* Share Button & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-[#cca06b]/40 text-xs uppercase tracking-wider text-[#cca06b] hover:bg-[#cca06b] hover:text-white transition-all duration-300"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Share Invitation'}</span>
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-gray-300 hover:border-white hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back To Top</span>
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-8 text-xs text-[#8c7b6d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; 2026 {data.couple.groom.name} &amp; {data.couple.bride.name} Wedding. Crafted with love &amp; joy.
          </p>
          <div className="flex items-center space-x-1 text-[#cca06b]">
            <span>With heartfelt love</span>
            <Heart className="w-3.5 h-3.5 fill-[#cca06b] text-[#cca06b]" />
          </div>
        </div>

      </div>
    </footer>
  )
}
