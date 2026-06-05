// ─────────────────────────────────────────────────────────────────
//  portfolioData.js
//  Replace placeholder src/poster URLs with your own images/videos.
// ─────────────────────────────────────────────────────────────────

export const categories = ['All', 'Portrait', 'Travel', 'Street', 'Nature', 'Event', 'Editorial']

// ─── Photography ─────────────────────────────────────────────────
// Each entry: id, category, title, year, description, src
// Swap `src` with your own image URLs or local /public paths.
export const photographyData = [
  {
    id: 1,
    category: 'Portrait',
    title: 'Quiet Reflection',
    year: '2024',
    description:
      'A study in natural light and contemplative stillness. Captured during a late afternoon session, this portrait seeks to reveal the subject\'s inner world through the geometry of shadow and form.',
    src: 'https://picsum.photos/seed/pg-p1/600/750',
  },
  {
    id: 2,
    category: 'Travel',
    title: 'Golden Hour, Kyoto',
    year: '2023',
    description:
      'The ancient city glows amber at dusk. Shot during the Higashiyama district\'s quietest hour, when tourists have retreated and the temples breathe.',
    src: 'https://picsum.photos/seed/pg-t1/800/533',
  },
  {
    id: 3,
    category: 'Street',
    title: 'City Drift',
    year: '2024',
    description:
      'Motion and stillness coexist on a rainy evening in Shanghai. The reflections double the world, making the familiar strange.',
    src: 'https://picsum.photos/seed/pg-s1/600/800',
  },
  {
    id: 4,
    category: 'Nature',
    title: 'First Light',
    year: '2023',
    description:
      'Dawn breaks over a misty valley in the Dolomites. Shot at 5 am after a sleepless night of preparation — the world before it wakes.',
    src: 'https://picsum.photos/seed/pg-n1/900/600',
  },
  {
    id: 5,
    category: 'Portrait',
    title: 'The Artist',
    year: '2024',
    description:
      'Environmental portrait of a sculptor in her studio. The texture of clay and canvas mirrors the texture of creative process.',
    src: 'https://picsum.photos/seed/pg-p2/600/900',
  },
  {
    id: 6,
    category: 'Editorial',
    title: 'Monochrome Study III',
    year: '2023',
    description:
      'Part of a series exploring form, fabric, and negative space. The absence of colour forces the eye to read volume differently.',
    src: 'https://picsum.photos/seed/pg-e1/800/600',
  },
  {
    id: 7,
    category: 'Travel',
    title: 'Marrakech Market',
    year: '2022',
    description:
      'Colour as sensory overload. The medina\'s textile souks in late morning, when the light becomes a collaborator.',
    src: 'https://picsum.photos/seed/pg-t2/600/750',
  },
  {
    id: 8,
    category: 'Street',
    title: 'Commute',
    year: '2024',
    description:
      'A single moment extracted from the relentless flow of a Tokyo subway. Everyone travelling; no one arriving.',
    src: 'https://picsum.photos/seed/pg-s2/800/534',
  },
  {
    id: 9,
    category: 'Nature',
    title: 'Tide Pool',
    year: '2023',
    description:
      'The ocean leaves a world behind when it retreats. Shot on the California coast at low tide — microcosms within macrocosms.',
    src: 'https://picsum.photos/seed/pg-n2/600/800',
  },
  {
    id: 10,
    category: 'Event',
    title: 'Opening Night',
    year: '2024',
    description:
      'Gallery opening, downtown Los Angeles. The audience and the art observe each other in equal measure.',
    src: 'https://picsum.photos/seed/pg-ev1/900/600',
  },
  {
    id: 11,
    category: 'Portrait',
    title: 'Dusk Portrait',
    year: '2024',
    description:
      'Golden hour portrait series, exploring the relationship between fading light and human expression.',
    src: 'https://picsum.photos/seed/pg-p3/600/750',
  },
  {
    id: 12,
    category: 'Editorial',
    title: 'Texture & Form',
    year: '2023',
    description:
      'Fashion editorial for an independent label. Shot in an abandoned industrial space — the garments become architecture.',
    src: 'https://picsum.photos/seed/pg-e2/800/600',
  },
  {
    id: 13,
    category: 'Travel',
    title: 'Island Time',
    year: '2022',
    description:
      'The Aegean in August. A photograph about waiting, heat, and the particular quality of Mediterranean light.',
    src: 'https://picsum.photos/seed/pg-t3/900/600',
  },
  {
    id: 14,
    category: 'Street',
    title: 'Neon & Rain',
    year: '2023',
    description:
      'Hong Kong, 11 pm. The city never decides whether it is sleeping or waking.',
    src: 'https://picsum.photos/seed/pg-s3/600/800',
  },
  {
    id: 15,
    category: 'Nature',
    title: 'Birch Forest',
    year: '2023',
    description:
      'Winter in a Scandinavian birch forest. The trees arrange themselves like vertical brushstrokes against the pale sky.',
    src: 'https://picsum.photos/seed/pg-n3/800/600',
  },
  {
    id: 16,
    category: 'Event',
    title: 'The Performance',
    year: '2024',
    description:
      'Contemporary dance, Paris. Available light, no flash — the camera becomes another body in the space.',
    src: 'https://picsum.photos/seed/pg-ev2/800/534',
  },
]

// ─── Films ───────────────────────────────────────────────────────
// Each entry: id, title, year, role, duration, description,
//             poster (replace with own image), tags, videoUrl, featured
export const filmData = [
  {
    id: 1,
    title: 'Between the Frames',
    year: '2024',
    role: 'Director / Editor',
    duration: '18 min',
    description:
      'A documentary short exploring the liminal spaces between memory and forgetting. Following three subjects across one year, the film asks: what do we choose to remember, and what chooses us?',
    poster: 'https://picsum.photos/seed/fm-feat/1200/675',
    tags: ['Documentary', 'Short Film'],
    videoUrl: '#',   // ← replace with real video URL or embed link
    featured: true,
  },
  {
    id: 2,
    title: 'Overnight',
    year: '2023',
    role: 'Director / Writer / Cinematographer',
    duration: '24 min',
    description:
      'A narrative short about two strangers who spend the night in a train station after missing the last connection. A meditation on serendipity and the stories we carry.',
    poster: 'https://picsum.photos/seed/fm-2/800/450',
    tags: ['Narrative', 'Short Film'],
    videoUrl: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Frequencies',
    year: '2023',
    role: 'Director / Producer',
    duration: '42 min',
    description:
      'A mid-length documentary following three musicians as they collaborate on a single piece. About translation, ego, and the democracy of sound.',
    poster: 'https://picsum.photos/seed/fm-3/800/450',
    tags: ['Documentary', 'Music'],
    videoUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Still Water',
    year: '2022',
    role: 'Director / Editor',
    duration: '12 min',
    description:
      'An experimental short blending archival Super 8 footage with contemporary imagery. An exploration of inherited memory and how the past inhabits the present body.',
    poster: 'https://picsum.photos/seed/fm-4/800/450',
    tags: ['Experimental', 'Archival'],
    videoUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'The Long Way',
    year: '2022',
    role: 'Cinematographer / Co-Director',
    duration: '31 min',
    description:
      'A road documentary travelling the length of Highway 1 in California. Seven days, seven strangers, seven stories that intersect in unexpected ways.',
    poster: 'https://picsum.photos/seed/fm-5/800/450',
    tags: ['Documentary', 'Road Film'],
    videoUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Aperture',
    year: '2021',
    role: 'Director / Writer / Editor',
    duration: '8 min',
    description:
      'A short film structured around the aperture settings of a camera — from f/1.4 (wide open, everything blurred) to f/22 (everything sharp). A visual essay on perception.',
    poster: 'https://picsum.photos/seed/fm-6/800/450',
    tags: ['Experimental', 'Essay Film'],
    videoUrl: '#',
    featured: false,
  },
]
