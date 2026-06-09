import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ── Gradient base colour ────────────────────────────────────────────
// Sampled from the dark rock foreground in the bottom-left of the
// fjord/sunset image — very dark warm-brown, matches the landscape's
// shadow tones naturally.
const GRAD = '15, 13, 12'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
}
const up = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.8 } },
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const photoY  = useTransform(scrollYProgress, [0, 1], ['0%',  '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#0f0d0c' }}
    >
      {/* ── Full-bleed background photo ────────────────────────
          Put your image at:  portfolio2/public/hero-bg.jpg
          The landscape image is already wide — object-cover will
          fill the hero perfectly. object-position shows the
          mountain/sunset horizon in the centre of the frame.      */}
      <motion.div style={{ y: photoY }} className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Cinematic landscape — hero background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 42%' }}
        />
      </motion.div>

      {/* ── Gradient overlays ──────────────────────────────────
          Layer 1  Left-to-right diagonal: keeps the left reading
                   zone dark while the right side breathes.
          Layer 2  Bottom vignette: grounds the text block and
                   blends into the dark site sections below.
          Layer 3  Subtle top vignette: ensures navbar is readable
                   against the dark sky at the top of the photo.   */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(
          108deg,
          rgba(${GRAD}, 0.88) 0%,
          rgba(${GRAD}, 0.72) 30%,
          rgba(${GRAD}, 0.36) 58%,
          rgba(${GRAD}, 0.08) 78%,
          transparent          92%
        )`,
      }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(to top, rgba(${GRAD},0.80) 0%, rgba(${GRAD},0.30) 32%, transparent 58%)`,
      }} />
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
        background: `linear-gradient(to bottom, rgba(${GRAD},0.75) 0%, rgba(${GRAD},0.25) 18%, transparent 32%)`,
      }} />

      {/* ── Content ───────────────────────────────────────────── */}
      <motion.div style={{ opacity }} className="relative z-10 flex-1 flex flex-col">

        {/* Top label bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-between
                     px-8 md:px-14 lg:px-20 pt-24 lg:pt-28"
        >
          <span className="font-body text-[9px] tracking-[0.38em] uppercase text-film-gray-light/70">
            Portfolio
          </span>
          <span className="font-body text-[10px] tracking-[0.28em] uppercase hidden sm:block"
                style={{ color: 'rgba(240,236,227,0.82)' }}>
            Filmmaker · Photographer · Visual Storyteller
          </span>
        </motion.div>

        {/* Main text block */}
        <div className="flex-1 flex items-end px-8 md:px-14 lg:px-20 pb-20 md:pb-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">

            {/* Name */}
            <motion.h1 variants={up}
              className="font-display font-normal italic text-film-ivory leading-[0.94] mb-7"
              style={{
                fontSize: 'clamp(4rem, 8.5vw, 8rem)',
                letterSpacing: '-0.03em',
              }}>
              Lucy Gong
            </motion.h1>

            {/* Gold rule */}
            <motion.div variants={fadeIn}
              className="bg-film-gold mb-7"
              style={{ width: 42, height: 1 }} />

            {/* Bio */}
            <motion.p variants={up}
              className="font-body text-film-gray-light leading-relaxed mb-10"
              style={{ fontSize: '1rem', lineHeight: 1.85, maxWidth: '30rem' }}>
              Filmmaker and photographer exploring memory,
              identity, and the emotional details of everyday life.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={up} className="flex flex-wrap items-center gap-4">

              <motion.button
                onClick={() => scrollTo('film')}
                whileHover={{ backgroundColor: '#c4a96e', color: '#0f0d0c' }}
                transition={{ duration: 0.22 }}
                className="font-body text-[10px] tracking-[0.22em] uppercase
                           border border-film-gold text-film-gold"
                style={{ padding: '12px 28px', background: 'transparent' }}>
                View Films
              </motion.button>

              <motion.button
                onClick={() => scrollTo('photography')}
                whileHover={{ borderColor: '#f0ece3', color: '#f0ece3' }}
                transition={{ duration: 0.22 }}
                className="font-body text-[10px] tracking-[0.22em] uppercase"
                style={{
                  padding: '12px 28px',
                  border: '1px solid rgba(240,236,227,0.28)',
                  color: 'rgba(240,236,227,0.65)',
                  background: 'transparent',
                }}>
                Photography
              </motion.button>

              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ color: '#f0ece3' }}
                transition={{ duration: 0.2 }}
                className="font-body text-[10px] tracking-[0.22em] uppercase"
                style={{ color: 'rgba(240,236,227,0.40)', padding: '12px 8px', background: 'transparent' }}>
                Contact →
              </motion.button>

            </motion.div>
          </motion.div>
        </div>


      </motion.div>
    </section>
  )
}
