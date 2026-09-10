import { approach } from '../data/profile'
import { SectionHeading } from './SectionHeading'
export function Approach() { return <section id="approach" className="section approach"><div className="container"><SectionHeading kicker="How I work" title="A disciplined path from issue to outcome."/><div className="approach-list">{approach.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section> }
