import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import PhotographyGallery from './components/PhotographyGallery'
import FilmSection       from './components/FilmSection'
import Contact           from './components/Contact'
import Footer            from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotographyGallery />
        <FilmSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
