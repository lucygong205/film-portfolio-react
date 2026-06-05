import { motion } from 'framer-motion'

// Tag colour mapping — add more as needed
const tagStyle = (tag) => {
  const map = {
    'Documentary': 'border-film-gold/40 text-film-gold',
    'Short Film':  'border-white/15 text-film-gray-light',
  }
  return map[tag] ?? 'border-white/15 text-film-gray-light'
}

// ── Play icon ─────────────────────────────────────────────────────
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#080808">
    <polygon points="5,3 19,12 5,21" />
  </svg>
)

export default function FilmCard({ film }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col h-full overflow-hidden
                 border border-white/5
                 hover:border-film-gold/25 transition-colors duration-500"
      style={{ background: '#231f18' }}
    >
      {/* ── Poster ──────────────────────────────────────────── */}
      <div className="relative overflow-hidden aspect-video shrink-0">
        {/* Poster image — replace src with real poster */}
        <img
          src={film.poster}
          alt={film.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700
                     group-hover:scale-105"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-film-black/25 group-hover:bg-film-black/10 transition-colors duration-500" />

        {/* Play button — links to real video URL */}
        <div className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={film.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-14 h-14 bg-film-gold flex items-center justify-center
                       hover:bg-film-gold-light transition-colors duration-200
                       shadow-[0_0_40px_rgba(201,162,86,0.35)]"
          >
            <PlayIcon />
          </a>
        </div>

        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-film-black/80
                         text-film-gray-light text-[10px] font-body tracking-widest uppercase">
          {film.duration}
        </span>
      </div>

      {/* ── Info ────────────────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="font-display text-xl text-film-ivory
                         group-hover:text-film-gold transition-colors duration-300 leading-snug">
            {film.title}
          </h3>
          <span className="text-film-gray text-sm font-body ml-3 shrink-0 mt-0.5">{film.year}</span>
        </div>

        <p className="section-label text-film-gold mb-3">{film.role}</p>

        <p className="font-body text-film-gray-light text-sm leading-relaxed flex-1 mb-4">
          {film.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {film.tags.map(tag => (
            <span
              key={tag}
              className={`px-2.5 py-0.5 border text-[10px] tracking-wider uppercase font-body ${tagStyle(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
