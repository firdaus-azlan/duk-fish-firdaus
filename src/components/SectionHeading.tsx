type Props = { kicker: string; title: string; text?: string; align?: 'left' | 'center' }
export function SectionHeading({ kicker, title, text, align = 'left' }: Props) {
  return <div className={`section-heading ${align === 'center' ? 'centered' : ''}`} data-reveal><p className="eyebrow"><span /> {kicker}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
