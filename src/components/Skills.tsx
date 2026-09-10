import { skills } from '../data/profile'
import { SectionHeading } from './SectionHeading'
export function Skills() { return <section className="section skills"><div className="container"><SectionHeading kicker="Technical toolkit" title="Skills, organized by focus."/><div className="skills-grid">{skills.map((skill) => <article key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div><p className="skills-note">Update this list to reflect only the skills you want to represent.</p></div></section> }
