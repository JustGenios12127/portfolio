import type { ReactNode } from 'react'
import { revealDelay, useInView } from '../../hooks/useInView'
import './Section.css'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children: ReactNode
}

function Section({ id, eyebrow, title, description, align = 'left', children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>(0.08)

  return (
    <section id={id} ref={ref} className="section" data-visible={inView}>
      <div className="container">
        <header className={`section__head section__head--${align}`}>
          <span className="eyebrow reveal">{eyebrow}</span>
          <h2 className="section__title reveal" style={revealDelay(60)}>
            {title}
          </h2>
          {description ? (
            <p className="section__description reveal" style={revealDelay(120)}>
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export default Section
