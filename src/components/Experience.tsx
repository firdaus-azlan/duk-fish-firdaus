import { CalendarDays, ChevronRight } from 'lucide-react'
import { experience } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return <section id="experience" className="section experience"><div className="container"><SectionHeading kicker="Enterprise experience" title="Technical work grounded in business processes." text="A view of the systems, responsibilities, and problem-solving areas represented by this portfolio."/><div className="timeline">{experience.map((item, index) => <article className="timeline-item" data-reveal key={`${item.project}-${index}`}><div className="timeline-date"><CalendarDays size={16}/>{item.period}</div><div className="timeline-marker"/><div className="experience-card"><div className="experience-head"><div><p className="project-name">{item.project}</p><h3>{item.role}</h3></div><span className="environment">{item.environment}</span></div><div className="experience-body"><div><h4>Responsibilities</h4><ul>{item.responsibilities.map((task) => <li key={task}><ChevronRight size={14}/>{task}</li>)}</ul></div><div><h4>Technologies</h4><div className="tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div></div></article>)}</div></div></section>
}
