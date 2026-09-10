import { ArrowDownToLine, Code2, Database, Layers3, Network } from 'lucide-react'
import { expertise } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const icons = { layers: Layers3, database: Database, network: Network, arrow: ArrowDownToLine, code: Code2 }

export function Expertise() {
  return <section id="expertise" className="section expertise"><div className="container"><SectionHeading kicker="What I do" title="Software solutions for real business workflows." text="I combine enterprise systems knowledge with software development, data, integration, and automation to solve practical problems."/><div className="expertise-grid">{expertise.map((area) => { const Icon = icons[area.icon]; return <article className="expertise-card" data-reveal key={area.title}><div className="card-icon"><Icon size={22}/></div><h3>{area.title}</h3><p>{area.description}</p><ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul></article> })}</div></div></section>
}
