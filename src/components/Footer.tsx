import { profile } from '../data/profile'

const isConfigured = (value: string) => value && !value.startsWith('[')

export function Footer() {
  return <footer><div className="container footer-content"><div><strong>{profile.name}</strong><span>{profile.title}</span></div><div className="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>{isConfigured(profile.linkedIn) && <a href={profile.linkedIn}>LinkedIn</a>}{isConfigured(profile.github) && <a href={profile.github}>GitHub</a>}{isConfigured(profile.email) && <a href={`mailto:${profile.email}`}>Email</a>}{isConfigured(profile.resume) && <a href={profile.resume}>Resume</a>}</div><p>© {new Date().getFullYear()} {profile.name}</p></div></footer>
}
