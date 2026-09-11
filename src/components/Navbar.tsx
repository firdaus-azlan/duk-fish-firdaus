import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import logo from '../../logo-fa.png'

const links = [['Home', '#home'], ['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const close = () => setOpen(false)

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.4, 0.8] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <header className="nav-wrap">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={close} aria-label={`${profile.name} home`}><img className="brand-mark" src={logo} alt="Firdaus Azlan logo" /><span>{profile.name}</span></a>
      <div className="nav-links">{links.map(([label, href]) => <a className={active === href.slice(1) ? 'is-active' : ''} href={href} key={href}>{label}</a>)}</div>
      <a className="nav-contact" href="#contact">Let’s talk</a>
      <button type="button" className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div id="mobile-navigation" className="mobile-menu">{links.map(([label, href]) => <a className={active === href.slice(1) ? 'is-active' : ''} href={href} onClick={close} key={href}>{label}</a>)}</div>}
  </header>
}
