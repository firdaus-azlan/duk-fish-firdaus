import { Link2, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const isConfigured = (value: string) => value && !value.startsWith('[')

export function Contact() {
  const emailLink = isConfigured(profile.email) ? `mailto:${profile.email}` : undefined
  return <section id="contact" className="section contact"><div className="container contact-grid"><div><SectionHeading kicker="Contact" title="Let’s build something useful." text="I’m open to opportunities in software development, enterprise applications, data migration, system integration, automation, and related roles."/></div><div className="contact-card" data-reveal>{emailLink && <div className="contact-row"><Mail size={19}/><div><small>Email</small><a href={emailLink}>{profile.email}</a></div></div>}{isConfigured(profile.linkedIn) && <div className="contact-row"><Link2 size={19}/><div><small>LinkedIn</small><a href={profile.linkedIn} target="_blank" rel="noreferrer">Firdaus Azlan</a></div></div>}{!emailLink && !isConfigured(profile.linkedIn) && <p className="contact-empty">Contact details are being updated. Please check back soon.</p>}</div></div></section>
}
