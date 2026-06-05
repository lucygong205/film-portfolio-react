import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// ── Animation variants ─────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 1.2 } },
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax + fade on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%',  '28%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%',  '14%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layer ──────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a09] via-[#0e0d0b] to-[#080808]" />

        {/* Hero image placeholder — swap src with your own cinematic still */}
        <img
          src="https://picsum.photos/seed/hero-film/1920/1080"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />

        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-film-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgba(201,162,86,0.07)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)]" />
      </motion.div>

      {/* ── Hero content ──────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Label */}
          <motion.p variants={fadeUp} className="section-label mb-10">
            Portfolio &nbsp;·&nbsp; 2024
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-none tracking-tight text-film-ivory mb-5"
          >
            Lucy <em className="text-film-gold not-italic">Gong</em>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            variants={fadeIn}
            className="w-20 h-px bg-film-gold mx-auto mb-6"
          />

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body text-[clamp(0.65rem,1.5vw,0.8rem)] tracking-[0.35em] uppercase text-film-gray-light mb-14"
          >
            Filmmaker &nbsp;&nbsp;·&nbsp;&nbsp; Photographer &nbsp;&nbsp;·&nbsp;&nbsp; Visual Storyteller
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={() => scrollTo('photography')} className="btn-primary min-w-[190px]">
              View Photography
            </button>
            <button onClick={() => scrollTo('film')} className="btn-primary min-w-[190px]">
              Watch Films
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-ghost min-w-[190px]">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2 group"
      >
        <span className="section-label text-film-gray group-hover:text-film-gold transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-film-gold to-transparent"
        />
      </motion.button>
    </section>
  )
}
