import { useEffect } from 'react'
import { motion } from 'framer-motion'

// ── Icon helpers ────────────────────────────────────────────────────
const IconClose = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)
const IconLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const IconRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const IconExpand = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a256" strokeWidth="2">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
)

// ── Control button style ────────────────────────────────────────────
const CtrlBtn = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-10 h-10 flex items-center justify-center border border-white/15
                text-film-gray hover:text-film-ivory hover:border-film-gold
                bg-film-black/60 transition-all duration-200 ${className}`}
  >
    {children}
  </button>
)

export default function LightboxModal({ photos, currentIndex, onClose, onPrev, onNext }) {
  const photo = photos[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowLeft')   onPrev()
      if (e.key === 'ArrowRight')  onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      key="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-film-black/96 backdrop-blur-xl
                 flex flex-col"
      onClick={onClose}
    >
      {/* ── Top bar ──────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="section-label">{photo.category}</p>
          <p className="font-display text-film-ivory text-lg mt-0.5">{photo.title}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="section-label text-film-gray">
            {currentIndex + 1}&thinsp;/&thinsp;{photos.length}
          </span>
          <CtrlBtn onClick={onClose}>
            <IconClose />
          </CtrlBtn>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div
        className="flex-1 flex flex-col lg:flex-row gap-0 overflow-hidden min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image + prev/next */}
        <div className="relative flex-1 flex items-center justify-center p-6 lg:p-10 min-h-0">
          {/* Prev */}
          <CtrlBtn onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <IconLeft />
          </CtrlBtn>

          {/* Image */}
          <motion.img
            key={photo.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            src={photo.src}
            alt={photo.title}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: 'calc(100vh - 12rem)' }}
          />

          {/* Next */}
          <CtrlBtn onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <IconRight />
          </CtrlBtn>
        </div>

        {/* Metadata panel */}
        <div className="lg:w-72 shrink-0 p-6 lg:p-10 flex flex-col justify-center
                        border-t lg:border-t-0 lg:border-l border-white/5 space-y-5">
          <div>
            <p className="text-film-gold text-sm font-body">{photo.year}</p>
            <h3 className="font-display text-2xl text-film-ivory mt-1">{photo.title}</h3>
            <span className="inline-block mt-2 px-3 py-1 border border-film-gold/30
                             text-film-gold text-[10px] tracking-widest uppercase font-body">
              {photo.category}
            </span>
          </div>

          <div className="w-8 h-px bg-film-gold" />

          <p className="font-body text-film-gray-light text-sm leading-relaxed">
            {photo.description}
          </p>

          {/* Open full image */}
          <a
            href={photo.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 section-label text-film-gray hover:text-film-gold transition-colors mt-2"
          >
            <IconExpand /> View full image
          </a>
        </div>
      </div>
    </motion.div>
  )
}
