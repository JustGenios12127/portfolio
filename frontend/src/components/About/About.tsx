import { useTranslation } from 'react-i18next'
import type { TrackId } from '../../data/profile'
import { revealDelay } from '../../hooks/useInView'
import Section from '../Section'
import './About.css'

type Fact = {
  label: string
  value: string
}

type AboutProps = {
  track: TrackId
}

function About({ track }: AboutProps) {
  const { t } = useTranslation()
  const bio = t('about.bio', { returnObjects: true }) as unknown as string[]
  const facts = t('about.facts', { returnObjects: true }) as unknown as Fact[]

  return (
    <Section id="about" eyebrow={t('about.eyebrow')} title={t('about.title')}>
      <article className="card about reveal" style={revealDelay(60)}>
        <div className="about__text">
          <p className="about__lead" key={track}>
            {t(`tracks.${track}.summary`)}
          </p>
          {bio.map((paragraph) => (
            <p className="about__paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="about__facts">
          <h3 className="about__facts-title">{t('about.factsTitle')}</h3>
          <dl className="about__facts-list">
            {facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt className="about__fact-label">{fact.label}</dt>
                <dd className="about__fact-value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </article>
    </Section>
  )
}

export default About
