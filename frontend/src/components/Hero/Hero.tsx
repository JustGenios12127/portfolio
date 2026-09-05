import {
  ArrowDown01Icon,
  Call02Icon,
  Download04Icon,
  Github01Icon,
  Location01Icon,
  Mail01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import type { TrackId } from '../../data/profile'
import { contacts, gmailComposeUrl, resumes } from '../../data/profile'
import TrackSwitch from '../TrackSwitch'
import './Hero.css'

type Highlight = {
  value: string
  label: string
}

type HeroProps = {
  track: TrackId
  onTrackChange: (id: TrackId) => void
}

function Hero({ track, onTrackChange }: HeroProps) {
  const { t } = useTranslation()
  const resume = resumes[track]
  const highlights = t(`tracks.${track}.highlights`, {
    returnObjects: true,
  }) as unknown as Highlight[]

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <span className="hero__status">
          <span className="hero__pulse" aria-hidden="true" />
          {t('person.status')}
        </span>

        <h1 className="hero__name">{t('person.name')}</h1>

        <div className="hero__swap" key={track}>
          <p className="hero__title">{t(`tracks.${track}.title`)}</p>
          <p className="hero__tagline">{t(`tracks.${track}.tagline`)}</p>
        </div>

        <div className="hero__switch">
          <TrackSwitch value={track} onChange={onTrackChange} />
        </div>

        <div className="hero__actions">
          <a className="btn btn--primary" href={resume.file} download={resume.name}>
            <HugeiconsIcon icon={Download04Icon} size={18} strokeWidth={1.9} />
            {t('hero.download')}
          </a>
          <a
            className="btn btn--ghost"
            href={gmailComposeUrl(t('contact.subject'))}
            target="_blank"
            rel="noreferrer noopener"
          >
            <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.9} />
            {t('hero.write')}
          </a>
        </div>

        <ul className="hero__meta">
          <li>
            <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={1.8} />
            {t('person.location')}
          </li>
          <li>
            <a href={`mailto:${contacts.email}`}>
              <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={1.8} />
              {contacts.email}
            </a>
          </li>
          <li>
            <a href={`tel:${contacts.phoneHref}`}>
              <HugeiconsIcon icon={Call02Icon} size={16} strokeWidth={1.8} />
              {contacts.phone}
            </a>
          </li>
          <li>
            <a href={contacts.github} target="_blank" rel="noreferrer noopener">
              <HugeiconsIcon icon={Github01Icon} size={16} strokeWidth={1.8} />
              {contacts.githubHandle}
            </a>
          </li>
        </ul>

        <div className="hero__highlights" key={`highlights-${track}`}>
          {highlights.map((highlight) => (
            <article className="card card--hover hero__highlight" key={highlight.value}>
              <p className="hero__highlight-value">{highlight.value}</p>
              <p className="hero__highlight-label">{highlight.label}</p>
            </article>
          ))}
        </div>

        <a className="hero__scroll" href="#about" aria-label={t('hero.scroll')}>
          <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={1.8} />
        </a>
      </div>
    </section>
  )
}

export default Hero
