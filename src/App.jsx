import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CoupleStory from './components/CoupleStory'
import EventDetails from './components/EventDetails'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { weddingData } from './config/weddingData'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b2725] selection:bg-[#cca06b]/30 selection:text-[#1a1715]">
      {/* Navigation */}
      <Navbar data={weddingData} />

      {/* Main Sections */}
      <main>
        <Hero data={weddingData} />
        <CoupleStory data={weddingData} />
        <EventDetails data={weddingData} />
        <Gallery data={weddingData} />
      </main>

      {/* Footer */}
      <Footer data={weddingData} />
    </div>
  )
}
