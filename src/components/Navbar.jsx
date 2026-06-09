import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',        href: 'home' },
  { label: 'About',       href: 'about' },
  { label: 'Photography', href: 'photography' },
  { label: 'Film',        href: 'film' },
  { label: 'Contact',     href: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(href) },
        { rootMargin: '-40% 0px -55% 0px' },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (id) => { scrollTo(id); setMenuOpen(false) }

  return (
    <>
      {/* ── Bar ───────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-film-black/92 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12
                        flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="font-display text-xl tracking-wide text-film-ivory shrink-0"
          >
            Lucy <em className="not-italic text-film-gold">Gong</em>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = activeSection === href
              return (
                <motion.button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="relative section-label transition-colors duration-200"
                  style={{ color: active ? '#c4a96e' : 'rgba(240,236,227,0.62)' }}
                  whileHover={{ color: active ? '#c4a96e' : '#f0ece3' }}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 inset-x-0 h-px bg-film-gold"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(v => !v)}
          >
            {[
              { rotate: menuOpen ? 45 : 0,  y: menuOpen ?  6 : 0 },
              { opacity: menuOpen ? 0 : 1 },
              { rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 },
            ].map((anim, i) => (
              <motion.span
                key={i}
                animate={{ ...anim, backgroundColor: '#f0ece3' }}
                transition={{ duration: 0.3 }}
                className="w-full h-px block"
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 backdrop-blur-xl
                       flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: 'rgba(19,17,14,0.97)' }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNav(href)}
                className="font-display text-4xl text-film-ivory hover:text-film-gold transition-colors"
              >
                {label}
              </motion.button>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="absolute bottom-12 section-label text-film-gray"
            >
              Filmmaker · Photographer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
