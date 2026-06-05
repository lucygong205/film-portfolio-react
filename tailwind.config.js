/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Warm dark palette — derived from the desert photo ──────────
        // Sand shadow:  #13110e  Sky blue: #8ab4c8  Dune highlight: #d4c8a8
        'film-black':      '#13110e',   // deep warm black (sand-shadow dark)
        'film-dark':       '#1a1712',   // warm dark (primary section bg)
        'film-charcoal':   '#231f18',   // warm charcoal (card bg)
        'film-ivory':      '#f0ece3',   // warm ivory text (not cold white)
        'film-cream':      '#e8e2d6',   // warm cream
        'film-gold':       '#c4a96e',   // sandy gold (pulled from dunes + outfit)
        'film-gold-light': '#d4bc86',   // lighter dune highlight
        'film-gray':       '#6b6660',   // warm mid-gray
        'film-gray-light': '#9a9590',   // warm light gray
        'film-sky':        '#8ab4c8',   // desaturated sky-blue (oasis accent)
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
