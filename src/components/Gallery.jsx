import React, { useState, useEffect } from 'react'
import { Eye, X, ChevronLeft, ChevronRight, ImagePlus, Sparkles, Filter } from 'lucide-react'

export default function Gallery({ data }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [customPhotos, setCustomPhotos] = useState([])
  const [showHelper, setShowHelper] = useState(false)

  // Combined photo list (configured in weddingData + live preview uploads)
  const allPhotos = [...data.gallery, ...customPhotos]

  const filteredPhotos = activeCategory === 'all'
    ? allPhotos
    : allPhotos.filter((photo) => photo.category === activeCategory)

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredPhotos])

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextPhoto = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length)
  }

  const prevPhoto = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)
  }

  // Interactive instant photo preview integration for testing
  const handlePhotoUpload = (e) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const newItems = Array.from(files).map((file, idx) => ({
      id: Date.now() + idx,
      src: URL.createObjectURL(file),
      title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      category: activeCategory === 'all' ? 'couple' : activeCategory,
      caption: 'Uploaded photo preview ready for wedding gallery integration.',
      span: 'col-span-1',
    }))

    setCustomPhotos((prev) => [...prev, ...newItems])
  }

  return (
    <section id="gallery" className="py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-script text-[#cca06b] text-4xl sm:text-5xl mb-2">
            Cherished Memories
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2b2725] tracking-wide">
            Our Photo Gallery
          </h2>
          <div className="w-16 h-[2px] bg-[#cca06b] mx-auto my-6" />
          <p className="text-[#685d54] text-base sm:text-lg leading-relaxed">
            A celebration of shared laughter, quiet whispers, and radiant smiles. Click any photo to expand into high resolution.
          </p>
        </div>

        {/* Category Filter Pills & Photo Add Helper Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-[#cca06b]/20 pb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {data.galleryCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-[#cca06b] text-white shadow-md'
                    : 'bg-white/80 text-[#685d54] hover:bg-white hover:text-[#2b2725] border border-[#cca06b]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Integration Guide Toggle */}
          <button
            onClick={() => setShowHelper(!showHelper)}
            className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#9e6d37] hover:text-[#7d522c] px-4 py-2 rounded-xl bg-[#f7f3ed] border border-[#cca06b]/30 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#cca06b]" />
            <span>{showHelper ? 'Hide Integration Guide' : 'How To Add More Photos'}</span>
          </button>
        </div>

        {/* Modular Photo Integration Helper Banner */}
        {showHelper && (
          <div className="mb-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#cca06b]/40 shadow-sm transition-all animate-fadeIn">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-[#2b2725] font-semibold flex items-center gap-2">
                  <ImagePlus className="w-5 h-5 text-[#cca06b]" />
                  Modular Photo Integration
                </h3>
                <p className="text-sm text-[#685d54]">
                  To permanently add more photos, place your images in <code className="bg-gray-100 px-2 py-0.5 rounded text-xs text-rose-700 font-mono">public/images/</code> and append an entry in <code className="bg-gray-100 px-2 py-0.5 rounded text-xs text-rose-700 font-mono">src/config/weddingData.js</code>.
                </p>
                <p className="text-xs text-[#9e6d37]">
                  You can also preview how new photos look right now using the instant test upload button on the right!
                </p>
              </div>

              {/* Instant Test Drop/Upload Button */}
              <label className="shrink-0 cursor-pointer inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#cca06b] hover:bg-[#b88647] text-white text-xs uppercase tracking-wider font-semibold shadow transition-colors">
                <ImagePlus className="w-4 h-4" />
                <span>Test Live Photo Upload</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-[#cca06b]/20"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-stone-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className={`w-full h-full object-cover ${photo.focalPoint || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
              </div>

              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-[#cca06b] font-semibold bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm inline-block mb-2 border border-[#cca06b]/30">
                    {data.galleryCategories.find((c) => c.key === photo.category)?.label || photo.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                    {photo.title}
                  </h3>
                  {photo.caption && (
                    <p className="text-xs text-gray-200 mt-1 line-clamp-2 font-light">
                      {photo.caption}
                    </p>
                  )}
                  <div className="mt-3 flex items-center space-x-1.5 text-xs text-[#cca06b] font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View High Res</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Dialog */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white/80 py-3 mb-2 px-2">
              <span className="text-xs tracking-widest uppercase text-[#cca06b] font-medium">
                Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo with Navigation */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Prev Button */}
              {filteredPhotos.length > 1 && (
                <button
                  onClick={prevPhoto}
                  className="absolute left-3 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredPhotos.length > 1 && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Caption & Metadata */}
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="font-serif text-2xl font-light text-white">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              {filteredPhotos[lightboxIndex].caption && (
                <p className="text-sm text-gray-300 mt-1 font-light">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
