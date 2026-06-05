import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { photographyData, categories } from '../data/portfolioData'
import LightboxModal from './LightboxModal'

export default function PhotographyGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex,  setLightboxIndex]  = useState(null)

  const filtered =
    activeCategory === 'All'
      ? photographyData
      : photographyData.filter(p => p.category === activeCategory)

  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () =>
    setLightboxIndex(i => (i > 0 ? i - 1 : filtered.length - 1))
  const nextPhoto = () =>
    setLightboxIndex(i => (i < filtered.length - 1 ? i + 1 : 0))

  return (
    <section id="photography" className="py-28 lg:py-40 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl text-film-ivory"
          >
            Photography
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-px bg-film-gold mt-6"
          />
        </div>

        {/* ── Category tabs ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-1 mb-12"
        >
          {categories.map(cat => {
            const active = cat === activeCategory
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 section-label transition-colors duration-200 ${
                  active ? 'text-film-gold' : 'text-film-gray hover:text-film-ivory'
                }`}
              >
                {cat}
                {active && (
                  <motion.span
                    layoutId="cat-indicator"
                    className="absolute bottom-0 inset-x-0 h-px bg-film-gold"
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* ── Masonry grid ──────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="masonry-grid"
          >
            {filtered.map((photo, index) => (
              <div key={photo.id} className="masonry-item">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.05, 0.5), duration: 0.5 }}
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Photo */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700
                               group-hover:scale-[1.04]"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center
                               bg-film-black/0 group-hover:bg-film-black/65
                               opacity-0 group-hover:opacity-100
                               transition-all duration-500"
                  >
                    <p className="font-display text-film-ivory text-xl mb-1 px-4 text-center">
                      {photo.title}
                    </p>
                    <p className="section-label text-film-gold">
                      {photo.category}&nbsp;·&nbsp;{photo.year}
                    </p>
                    <div className="mt-5 w-9 h-9 border border-film-gold flex items-center justify-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a256" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-film-gray font-body">
            No photos in this category yet.
          </div>
        )}
      </div>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            photos={filtered}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
