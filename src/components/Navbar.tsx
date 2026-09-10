import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'

const links = [['Home', '#home'], ['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="nav-wrap">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={close} aria-label={`${profile.name} home`}><span className="brand-mark">S</span><span>{profile.name}</span></a>
      <div className="nav-links">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
      <a className="nav-contact" href="#contact">Let’s talk</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation menu">{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="mobile-menu">{links.map(([label, href]) => <a href={href} onClick={close} key={href}>{label}</a>)}</div>}
  </header>
}
