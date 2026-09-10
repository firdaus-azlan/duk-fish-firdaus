import { Code2, Link2, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const isPlaceholder = (value: string) => value.startsWith('[')
export function Contact() {
  const emailLink = isPlaceholder(profile.email) ? undefined : `mailto:${profile.email}`
  return <section id="contact" className="section contact"><div className="container contact-grid"><div><SectionHeading kicker="Contact" title="Let’s discuss your ERP challenge." text="Whether you need support for a SyteLine initiative, technical troubleshooting, or a future project, the first conversation starts here."/></div><div className="contact-card"><div className="contact-row"><Mail size={19}/><div><small>Email</small>{emailLink ? <a href={emailLink}>{profile.email}</a> : <span>{profile.email}</span>}</div></div><div className="contact-row"><Link2 size={19}/><div><small>LinkedIn</small><span>{profile.linkedIn}</span></div></div><div className="contact-row"><Code2 size={19}/><div><small>GitHub</small><span>{profile.github}</span></div></div><div className="contact-row"><MapPin size={19}/><div><small>Location</small><span>{profile.location}</span></div></div></div></div></section>
}
