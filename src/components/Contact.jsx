import { useState } from 'react'
import { motion } from 'framer-motion'

// ── Social links — update href / handle to your real accounts ──────
const SOCIALS = [
  {
    name: 'Email',
    handle: 'lucygong205@gmail.com',
    href: 'mailto:lucygong205@gmail.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@lucygong',
    href: 'https://instagram.com/lucygong',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Lucy Gong',
    href: 'https://linkedin.com/in/lucygong',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Vimeo',
    handle: 'vimeo.com/lucygong',
    href: 'https://vimeo.com/lucygong',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 7.42c-.09 2-1.49 4.74-4.2 8.2C15.07 19.1 12.67 21 10.63 21c-1.28 0-2.37-1.18-3.26-3.55L6.05 13.6C5.34 11.22 4.59 10.03 3.8 10.03c-.16 0-.72.34-1.68 1.01L1 9.8a217.95 217.95 0 003.64-3.25C6.1 5.2 7.19 4.47 7.93 4.4c1.73-.17 2.79 1.02 3.18 3.55.43 2.72.73 4.42.9 5.08.5 2.27 1.05 3.4 1.65 3.4.47 0 1.17-.74 2.1-2.23.94-1.49 1.44-2.62 1.5-3.4.13-1.28-.37-1.93-1.5-1.93-.53 0-1.08.12-1.65.37 1.1-3.6 3.19-5.35 6.3-5.23 2.3.09 3.39 1.56 3.29 4.39z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'youtube.com/@lucygong',
    href: 'https://youtube.com/@lucygong',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" />
      </svg>
    ),
  },
]

const inView = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Contact() {
  const [form,      setForm]      = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // ── Replace this block with your real form handler ──
    // e.g. EmailJS, Formspree, or a serverless function
    await new Promise(r => setTimeout(r, 900)) // fake delay
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section id="contact" className="py-28 lg:py-40 bg-film-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">

          {/* ── Left: headline + socials ───────────────────────── */}
          <div className="space-y-10">
            <div className="space-y-5">
              <motion.p {...inView(0)} className="section-label">
                Get In Touch
              </motion.p>
              <motion.h2 {...inView(0.08)} className="font-display text-4xl lg:text-5xl text-film-ivory leading-tight">
                Let's create something
                <br />
                <em className="text-film-gold not-italic">meaningful.</em>
              </motion.h2>
              <motion.div {...inView(0.12)} className="w-14 h-px bg-film-gold" />
              <motion.p {...inView(0.16)} className="font-body text-film-gray-light leading-relaxed">
                Let's collaborate on visual stories, films, and creative projects. Whether
                you have a clear vision or just a feeling you want to express, I'd love to
                hear about it.
              </motion.p>
            </div>

            {/* Social links */}
            <motion.div {...inView(0.2)} className="space-y-4">
              {SOCIALS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 border border-white/10 flex items-center justify-center
                               text-film-gray group-hover:text-film-gold group-hover:border-film-gold
                               transition-all duration-300 shrink-0"
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="section-label text-film-gray">{link.name}</p>
                    <p className="font-body text-sm text-film-ivory group-hover:text-film-gold transition-colors duration-300">
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: contact form ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="h-full min-h-[360px] flex items-center justify-center">
                <div className="text-center space-y-5">
                  <div className="w-16 h-16 border border-film-gold flex items-center justify-center mx-auto">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a256" strokeWidth="1.8">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-film-ivory">Message Sent</h3>
                  <p className="font-body text-film-gray-light text-sm">
                    Thank you — I'll be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block section-label text-film-gray mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block section-label text-film-gray mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block section-label text-film-gray mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
