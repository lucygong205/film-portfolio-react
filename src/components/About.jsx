import { motion } from 'framer-motion'

const SKILLS = [
  'Filmmaking', 'Photography', 'Visual Storytelling',
  'Creative Direction', 'Documentary', 'Portrait',
]

const STATS = [
  { value: '50+',  label: 'Film Projects' },
  { value: '3K+',  label: 'Photographs' },
  { value: '8',    label: 'Awards' },
  { value: '12',   label: 'Countries' },
]

// Reusable fade-up with viewport trigger
const inView = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true, amount: 0.25 },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
})

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-[#0d0d0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* ── Portrait image column ───────────────────────── */}
          <motion.div {...inView(0)} className="relative">
            {/* Decorative corner accent */}
            <div className="absolute -top-5 -left-5 w-full h-full border border-film-gold/15 pointer-events-none z-0" />

            {/* Image — replace src with your portrait photo */}
            <div className="relative z-10 overflow-hidden aspect-[3/4]">
              <img
                src="https://picsum.photos/seed/about-portrait/600/800"
                alt="Lucy Gong — portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0
                           transition-all duration-700 scale-[1.02] hover:scale-100"
              />
              {/* Gradient vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-film-black/50 via-transparent to-transparent" />
            </div>

            {/* Bottom-right gold accent line */}
            <div className="absolute -bottom-4 -right-4 w-28 h-px bg-film-gold z-20" />
            <div className="absolute -bottom-4 -right-4 w-px h-16 bg-film-gold z-20" />
          </motion.div>

          {/* ── Text column ─────────────────────────────────── */}
          <div className="space-y-7">
            <motion.p {...inView(0)} className="section-label">
              About
            </motion.p>

            <motion.h2 {...inView(0.08)} className="font-display text-4xl lg:text-5xl text-film-ivory leading-tight">
              Creating with <br />
              <em className="text-film-gold not-italic">intention</em> and feeling.
            </motion.h2>

            <motion.div {...inView(0.12)} className="w-14 h-px bg-film-gold" />

            <motion.p {...inView(0.16)} className="font-body text-film-gray-light leading-relaxed text-base lg:text-[1.05rem]">
              I am a filmmaker and photographer interested in visual storytelling, memory,
              identity, travel, and the emotional details of everyday life. My work explores
              the quiet spaces between moments — the pause before a word, the last light
              before dark.
            </motion.p>

            <motion.p {...inView(0.2)} className="font-body text-film-gray-light leading-relaxed text-sm">
              Based between cities, I collaborate with artists, brands, and storytellers who
              believe in the power of authentic visual narrative. Whether through a single
              frame or an hour-long documentary, I seek the truth that lives in the image.
            </motion.p>

            {/* Skill tags */}
            <motion.div {...inView(0.24)} className="flex flex-wrap gap-2 pt-1">
              {SKILLS.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-1.5 border border-film-gold/25 text-film-gold
                             text-[10px] tracking-[0.2em] uppercase font-body
                             hover:border-film-gold hover:bg-film-gold/5
                             transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              {...inView(0.28)}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-white/8"
            >
              {STATS.map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-film-gold">{stat.value}</div>
                  <div className="text-[10px] text-film-gray mt-1.5 font-body tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
