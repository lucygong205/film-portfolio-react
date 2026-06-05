/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'film-black':      '#080808',
        'film-dark':       '#111111',
        'film-charcoal':   '#1c1c1c',
        'film-ivory':      '#f5f0e8',
        'film-cream':      '#ede8de',
        'film-gold':       '#c9a256',
        'film-gold-light': '#d4b06a',
        'film-gray':       '#6b6b6b',
        'film-gray-light': '#9a9a9a',
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
