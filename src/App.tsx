import { useEffect } from 'react'
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

  return <><Navbar /><main id="main-content"><Hero /><About /><Expertise /><Modules /><Experience /><Projects /><Skills /><Approach /><Contact /></main><Footer /></>
}
export default App
