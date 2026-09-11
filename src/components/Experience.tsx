import { CalendarDays, ChevronRight } from 'lucide-react'
import { experience } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return <section id="experience" className="section experience"><div className="container"><SectionHeading kicker="Professional experience" title="Infor SyteLine ERP development, grounded in business processes." text="A capability-led view of the ERP development, integration, data, and enterprise software work represented by this portfolio."/><div className="timeline">{experience.map((item, index) => <article className={`timeline-item ${index === 0 ? 'timeline-item-primary' : ''}`} data-reveal key={`${item.project}-${index}`}><div className="timeline-date"><CalendarDays size={16}/>{item.period}</div><div className="timeline-marker"/><div className="experience-card"><div className="experience-head"><div><p className="project-name">{item.project}</p><h3>{item.role}</h3></div><span className="environment">{item.environment}</span></div><div className="experience-body"><div><h4>Focus</h4><ul>{item.responsibilities.map((task) => <li key={task}><ChevronRight size={14}/>{task}</li>)}</ul></div><div><h4>Technologies</h4><div className="tags">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></div></div></article>)}</div></div></section>
}
