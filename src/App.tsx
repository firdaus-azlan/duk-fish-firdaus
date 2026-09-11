import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Approach } from './components/Approach'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Modules } from './components/Modules'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const show = (element: HTMLElement) => element.classList.add('is-visible')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach(show)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && show(entry.target as HTMLElement)),
      { threshold: 0.14 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 500)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return <><Navbar /><main id="main-content"><Hero /><About /><Expertise /><Modules /><Experience /><Projects /><Skills /><Approach /><Contact /></main><Footer />{showBackToTop && <button className="back-to-top" type="button" onClick={goToTop} aria-label="Back to top" title="Back to top"><ArrowUp size={18} aria-hidden="true" /></button>}</>
}
export default App
