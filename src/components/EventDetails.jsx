import React from 'react'
import { Calendar, Clock, MapPin, Sparkles, Navigation, CalendarPlus, Shirt } from 'lucide-react'

export default function EventDetails({ data }) {
  return (
    <section id="events" className="py-24 bg-[#f7f3ed] relative overflow-hidden">
      {/* Decorative Floral Accent Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8c5b2e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-script text-[#cca06b] text-4xl sm:text-5xl mb-2">
            Save The Dates &amp; Times
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2b2725] tracking-wide">
            Wedding Itinerary &amp; Events
          </h2>
          <div className="w-16 h-[2px] bg-[#cca06b] mx-auto my-6" />
          <p className="text-[#685d54] text-base sm:text-lg leading-relaxed">
            We cannot wait to celebrate each cherished moment with you. Here are the schedules, venues, and details for our celebrations.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.events.map((event) => (
            <div
              key={event.id}
              className={`flex flex-col justify-between rounded-3xl transition-all duration-300 relative ${
                event.highlight
                  ? 'bg-white border-2 border-[#cca06b] shadow-xl md:-translate-y-3'
                  : 'bg-white/80 border border-[#cca06b]/20 shadow-md hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Main Ceremony Highlight Badge */}
              {event.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#cca06b] to-[#b88647] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Ceremony</span>
                </div>
              )}

              <div className="p-8 sm:p-9 flex-1">
                {/* Header Tag */}
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88647] block mb-2">
                  {event.subtitle}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2b2725] font-normal mb-5 leading-snug">
                  {event.title}
                </h3>

                {/* Date & Time */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start space-x-3 text-sm text-[#4a3f35]">
                    <Calendar className="w-5 h-5 text-[#cca06b] shrink-0 mt-0.5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-start space-x-3 text-sm text-[#4a3f35]">
                    <Clock className="w-5 h-5 text-[#cca06b] shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Venue & Location */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start space-x-3 text-sm text-[#4a3f35]">
                    <MapPin className="w-5 h-5 text-[#cca06b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2b2725] font-semibold">{event.venue}</strong>
                      <span className="text-xs text-[#7d6b5c]">{event.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs text-[#7d6b5c] pt-2">
                    <Shirt className="w-4 h-4 text-[#cca06b] shrink-0 mt-0.5" />
                    <span><strong>Attire:</strong> {event.attire}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#685d54] leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-8 pb-8 pt-0 flex flex-col sm:flex-row gap-3">
                <a
                  href={event.googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-[#cca06b]/40 text-xs font-semibold uppercase tracking-wider text-[#7d522c] hover:bg-[#faf6ed] transition-colors shadow-sm text-center"
                >
                  <CalendarPlus className="w-4 h-4 text-[#cca06b]" />
                  <span>Add To Calendar</span>
                </a>

                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#cca06b] hover:bg-[#b88647] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
