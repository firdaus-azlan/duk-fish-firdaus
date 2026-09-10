import { ArrowDownToLine, Database, Layers3, Network } from 'lucide-react'
import { expertise } from '../data/profile'
import { SectionHeading } from './SectionHeading'

const icons = { layers: Layers3, database: Database, network: Network, arrow: ArrowDownToLine }
export function Expertise() {
  return <section id="expertise" className="section expertise"><div className="container"><SectionHeading kicker="Capabilities" title="SyteLine expertise across the delivery lifecycle." text="A structured technical toolkit for supporting and evolving enterprise systems."/><div className="expertise-grid">{expertise.map((area) => { const Icon = icons[area.icon]; return <article className="expertise-card" data-reveal key={area.title}><div className="card-icon"><Icon size={22}/></div><h3>{area.title}</h3><p>{area.description}</p><ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul></article> })}</div></div></section>
}
