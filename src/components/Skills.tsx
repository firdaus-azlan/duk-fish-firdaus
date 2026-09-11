import { skills } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Skills() { return <section id="skills" className="section skills"><div className="container"><SectionHeading kicker="Technical toolkit" title="Skills, organized around enterprise delivery." text="Infor SyteLine first, supported by development, database, integration, and engineering capabilities."/><div className="skills-grid">{skills.map((skill) => <article data-reveal key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section> }
