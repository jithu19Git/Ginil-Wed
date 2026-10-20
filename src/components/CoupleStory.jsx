import React from 'react'
import { Heart, Sparkles, Gem, HeartHandshake } from 'lucide-react'

export default function CoupleStory({ data }) {
  const icons = [HeartHandshake, Gem, Heart]

  return (
    <section id="story" className="py-24 bg-[#faf7f2] relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#cca06b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cca06b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-script text-[#cca06b] text-4xl sm:text-5xl mb-2">
            The Journey of Two Hearts
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2b2725] tracking-wide">
            Meet {data.couple.groom.name} &amp; {data.couple.bride.name}
          </h2>
          <div className="w-16 h-[2px] bg-[#cca06b] mx-auto my-6" />
          <p className="text-[#685d54] text-base sm:text-lg leading-relaxed">
            Every love story is beautiful, but ours is our absolute favorite. Here's a glimpse into the serendipitous journey that brought us together.
          </p>
        </div>

        {/* Couple Spotlight & Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Groom Card */}
          <div className="lg:col-span-4 order-2 lg:order-1 text-center lg:text-right bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-[#cca06b]/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#cca06b] font-semibold mb-2">
              {data.couple.groom.role}
            </span>
            <h3 className="font-serif text-3xl text-[#2b2725] font-light mb-4">
              {data.couple.groom.fullName}
            </h3>
            <p className="text-[#685d54] text-sm leading-relaxed mb-6">
              {data.couple.groom.description}
            </p>
            <div className="italic font-serif text-[#9e6d37] text-base border-t border-[#cca06b]/15 pt-4">
              "From the moment I heard her laughter, I knew life would never be ordinary again."
            </div>
          </div>

          {/* Central Portrait with Golden Ornate Frame */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Golden Glow & Border */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#e8d7ba] via-[#cca06b] to-[#b88647] rounded-3xl opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={data.couple.portraitImage || "/images/ginil-ammu-portrait.jpg"}
                  alt={`${data.couple.groom.name} and ${data.couple.bride.name} Portrait`}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-5 left-5 right-5 text-center bg-black/50 backdrop-blur-md py-2.5 px-4 rounded-xl text-white border border-white/20">
                  <span className="font-serif text-lg tracking-wider">{data.couple.groom.name} &amp; {data.couple.bride.name}</span>
                  <p className="text-[11px] tracking-widest uppercase text-[#cca06b]">Forever &amp; Always</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="lg:col-span-4 order-3 text-center lg:text-left bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-[#cca06b]/20 shadow-sm hover:shadow-md transition-shadow">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#cca06b] font-semibold mb-2">
              {data.couple.bride.role}
            </span>
            <h3 className="font-serif text-3xl text-[#2b2725] font-light mb-4">
              {data.couple.bride.fullName}
            </h3>
            <p className="text-[#685d54] text-sm leading-relaxed mb-6">
              {data.couple.bride.description}
            </p>
            <div className="italic font-serif text-[#9e6d37] text-base border-t border-[#cca06b]/15 pt-4">
              "He is my calm in every storm and the warmest companion on every journey."
            </div>
          </div>

        </div>

        {/* Love Milestones Timeline */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#cca06b] font-semibold">
              Chapters of Our Love
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#2b2725] font-light mt-1">
              How Our Story Unfolded
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {data.story.map((item, index) => {
              const IconComponent = icons[index % icons.length]
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-[#cca06b]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#faf6ed] border border-[#cca06b]/30 flex items-center justify-center text-[#cca06b] mb-5 group-hover:bg-[#cca06b] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#b88647]">
                    {item.year}
                  </span>
                  
                  <h4 className="font-serif text-xl sm:text-2xl text-[#2b2725] font-medium mt-1 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-[#685d54] text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.image && (
                    <div className="mt-5 overflow-hidden rounded-xl aspect-[16/10] bg-stone-100 border border-[#cca06b]/20 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
