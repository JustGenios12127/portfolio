import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import About from '../components/About'
import BottomNav from '../components/BottomNav'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import type { TrackId } from '../data/profile'

function Index() {
  const { t } = useTranslation()
  const [track, setTrack] = useState<TrackId>('fullstack')

  useEffect(() => {
    document.title = t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  }, [t])

  return (
    <>
      <Navbar />
      <main>
        <Hero track={track} onTrackChange={setTrack} />
        <About track={track} />
        <Skills track={track} />
        <Experience track={track} />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}

export default Index
