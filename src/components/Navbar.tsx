import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import logo from '../../logo-fa.png'

const links = [['Home', '#home'], ['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const scrollingTo = useRef<string | null>(null)
  const close = () => setOpen(false)
  const navigate = (href: string) => {
    const id = href.slice(1)
    scrollingTo.current = id
    setActive(id)
    close()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => { scrollingTo.current = null }, 900)
  }

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[]
    const updateActive = () => {
      if (scrollingTo.current) return
      const marker = window.scrollY + 110
      let current = 'home'
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top + window.scrollY <= marker) current = section.id
      })
      setActive(current)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return <header className="nav-wrap">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); navigate('#home') }} aria-label={`${profile.name} home`}><img className="brand-mark" src={logo} alt="Firdaus Azlan logo" /><span>{profile.name}</span></a>
      <div className="nav-links">{links.map(([label, href]) => <a className={active === href.slice(1) ? 'is-active' : ''} href={href} onClick={(event) => { event.preventDefault(); navigate(href) }} key={href}>{label}</a>)}</div>
      <a className="nav-contact" href="#contact" onClick={(event) => { event.preventDefault(); navigate('#contact') }}>Let’s talk</a>
      <button type="button" className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div id="mobile-navigation" className="mobile-menu">{links.map(([label, href]) => <a className={active === href.slice(1) ? 'is-active' : ''} href={href} onClick={(event) => { event.preventDefault(); navigate(href) }} key={href}>{label}</a>)}</div>}
  </header>
}
