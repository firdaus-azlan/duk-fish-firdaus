import { ArrowDown, Boxes, Database, ServerCog, Workflow } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const layers = [
  { label: 'External systems', detail: 'Banking · APIs · Files', icon: Boxes },
  { label: 'Integration layer', detail: 'SOAP · REST · H2H · Automation', icon: Workflow },
  { label: 'Infor SyteLine', detail: 'Mongoose · IDOs · Event Handlers', icon: ServerCog },
  { label: 'SQL Server / Database', detail: 'Queries · Procedures · Validation', icon: Database },
]

export function Modules() {
  return <section id="architecture" className="section modules"><div className="container"><div className="modules-top"><SectionHeading kicker="Technical architecture" title="Enterprise systems connected end to end." text="A practical view of how ERP customization, integration, and data engineering work together around Infor SyteLine."/><ServerCog className="modules-icon" size={44} strokeWidth={1}/></div><div className="architecture-flow">{layers.map(({ label, detail, icon: Icon }, index) => <div className="architecture-layer" key={label}><div className="architecture-layer-icon"><Icon size={20}/></div><div><strong>{label}</strong><span>{detail}</span></div>{index < layers.length - 1 && <ArrowDown className="architecture-arrow" size={18} aria-hidden="true"/>}</div>)}</div></div></section>
}
