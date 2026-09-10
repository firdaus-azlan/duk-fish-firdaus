import { skills } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Skills() { return <section id="skills" className="section skills"><div className="container"><SectionHeading kicker="Technical toolkit" title="Skills, organized by focus." text="A practical toolkit spanning enterprise systems, data, software development, automation, and AI-assisted workflows."/><div className="skills-grid">{skills.map((skill) => <article data-reveal key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section> }
