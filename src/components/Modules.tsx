import { Factory } from 'lucide-react'
import { modules } from '../data/profile'
import { SectionHeading } from './SectionHeading'
export function Modules() { return <section className="section modules"><div className="container"><div className="modules-top"><SectionHeading kicker="Business context" title="ERP areas & manufacturing operations." text="Editable content — retain only the business areas you have worked with."/><Factory className="modules-icon" size={44} strokeWidth={1}/></div><div className="module-list">{modules.map((module, index) => <div className="module-item" key={module}><span>{String(index + 1).padStart(2, '0')}</span><strong>{module}</strong><i>Editable</i></div>)}</div></div></section> }
