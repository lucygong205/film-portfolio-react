import { motion } from 'framer-motion'
import { filmData } from '../data/portfolioData'
import FilmCard from './FilmCard'

// Play icon for featured film
const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
)

export default function FilmSection() {
  const featured = filmData.find(f => f.featured)
  const rest      = filmData.filter(f => !f.featured)

  return (
    <section id="film" className="py-28 lg:py-40 bg-[#0d0d0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section header ──────────────────────────────────── */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-4"
          >
            Filmography
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl text-film-ivory"
          >
            Film Works
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-px bg-film-gold mt-6"
          />
        </div>

        {/* ── Featured film ─────────────────────────────────────── */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-16 overflow-hidden group"
          >
            {/* Poster — replace src in portfolioData.js with real image */}
            <div className="relative aspect-[21/9] overflow-hidden">
              <img
                src={featured.poster}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-1000
                           group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-film-black via-film-black/65 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-film-black/40 via-transparent to-transparent" />
            </div>

            {/* Text over poster */}
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-16 py-8 max-w-2xl">
                <p className="section-label mb-4">Featured Film</p>
                <h3 className="font-display text-4xl lg:text-[3.5rem] text-film-ivory leading-none mb-3">
                  {featured.title}
                </h3>
                <p className="section-label text-film-gold mb-1">{featured.role}</p>
                <p className="text-film-gray text-sm font-body mb-6">
                  {featured.year} &nbsp;·&nbsp; {featured.duration}
                </p>
                <p className="text-film-gray-light font-body leading-relaxed mb-8 hidden lg:block max-w-md text-sm">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featured.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <PlayIcon /> Watch Trailer
                  </a>
                </div>
              </div>
            </div>

            {/* Featured tags (top right) */}
            <div className="absolute top-5 right-5 flex gap-2">
              {featured.tags.map(tag => (
                <span key={tag}
                  className="px-3 py-1 bg-film-gold text-film-black text-[10px]
                             tracking-widest uppercase font-body font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Film grid ─────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((film, i) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <FilmCard film={film} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
