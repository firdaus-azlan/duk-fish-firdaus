import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return <section id="about" className="section about"><div className="container about-grid"><SectionHeading kicker="About me" title="SyteLine expertise, connected to the wider enterprise." text={profile.about}/><div className="about-note" data-reveal><span className="note-index">01</span><p>Whether the work involves a process improvement, an integration, a data issue, or a customization, I approach it with both the ERP workflow and its technical foundation in view.</p><a href="#approach">See my approach <ArrowUpRight size={16}/></a></div></div></section>
}
