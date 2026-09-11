import { ArrowDownRight, ArrowRight, Database, Network, Settings2 } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  const resumeLink = profile.resume && !profile.resume.startsWith('[') ? profile.resume : undefined
  return <section id="home" className="hero section">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span /> ERP development & customization</p>
        <h1>{profile.name}<em>{profile.title}</em></h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <ArrowRight size={17} /></a>{resumeLink && <a className="button button-quiet" href={resumeLink}>Download CV <ArrowDownRight size={17} /></a>}<a className="button button-quiet" href="#contact">Contact Me <ArrowDownRight size={17} /></a></div>
      </div>
      <div className="system-visual" role="img" aria-label="Illustration representing connected enterprise systems">
        <div className="visual-top"><span>ENTERPRISE SYSTEMS</span><i>LIVE</i></div>
        <div className="visual-core"><Settings2 size={39} strokeWidth={1.45}/><strong>SyteLine</strong><small>Enterprise Core</small></div>
        <div className="visual-node node-one"><Database size={18}/><span>DATA</span></div>
        <div className="visual-node node-two"><Network size={18}/><span>INTEGRATION</span></div>
        <div className="visual-node node-three"><span className="node-dot"/><span>PROCESS</span></div>
        <svg className="visual-lines" viewBox="0 0 430 370" fill="none" aria-hidden="true"><path d="M215 185 L91 109 M215 185 L343 111 M215 185 L302 282"/><circle cx="215" cy="185" r="4"/><circle cx="91" cy="109" r="3"/><circle cx="343" cy="111" r="3"/><circle cx="302" cy="282" r="3"/></svg>
        <div className="visual-footer"><span>DATA</span><span>•</span><span>SOFTWARE</span><span>•</span><span>OUTCOMES</span></div>
      </div>
    </div>
  </section>
}
