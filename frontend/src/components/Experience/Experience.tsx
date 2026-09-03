import { useId, useState } from 'react'
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Briefcase01Icon,
  Calendar03Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import type { ExperienceId, TrackId } from '../../data/profile'
import { experience } from '../../data/profile'
import { revealDelay } from '../../hooks/useInView'
import Section from '../Section'
import './Experience.css'

type ExperienceProps = {
  track: TrackId
}

function Experience({ track }: ExperienceProps) {
  const { t } = useTranslation()
  const entries = experience[track]
  const baseId = useId()
  const [openItem, setOpenItem] = useState<ExperienceId | null>(null)

  const toggle = (id: ExperienceId) => {
    setOpenItem((current) => (current === id ? null : id))
  }

  return (
    <Section
      id="experience"
      eyebrow={t('experience.eyebrow')}
      title={t('experience.title')}
      description={t('experience.description')}
    >
      <ol className="timeline" key={track}>
        {entries.map((entry, index) => {
          const open = openItem === entry.id
          const panelId = `${baseId}-${entry.id}`
          const bullets = t(`experience.items.${entry.id}.bullets`, {
            returnObjects: true,
          }) as unknown as string[]

          return (
            <li className="timeline__item reveal" key={entry.id} style={revealDelay(index * 110)}>
              <span className="timeline__marker" aria-hidden="true">
                <HugeiconsIcon icon={Briefcase01Icon} size={17} strokeWidth={1.7} />
              </span>
              <article className={`card timeline__card${open ? ' timeline__card--open' : ''}`}>
                <h3 className="timeline__heading">
                  <button
                    type="button"
                    className="timeline__head"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(entry.id)}
                  >
                    <span className="timeline__titles">
                      <span className="timeline__company">
                        {t(`experience.items.${entry.id}.company`)}
                      </span>
                      <span className="timeline__role">
                        {t(`experience.items.${entry.id}.role`)}
                      </span>
                    </span>
                    <span className="timeline__aside">
                      <span className="timeline__period">
                        <HugeiconsIcon icon={Calendar03Icon} size={15} strokeWidth={1.8} />
                        {t(`experience.items.${entry.id}.period`)}
                      </span>
                      <span className="timeline__chevron" aria-hidden="true">
                        <HugeiconsIcon icon={ArrowDown01Icon} size={18} strokeWidth={1.9} />
                      </span>
                    </span>
                  </button>
                </h3>

                <div className="timeline__panel" id={panelId} aria-hidden={!open}>
                  <div className="timeline__panel-inner">
                    <ul className="timeline__bullets">
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {entry.link ? (
                      <a
                        className="timeline__link"
                        href={entry.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        tabIndex={open ? undefined : -1}
                      >
                        {t('experience.openSite')}
                        <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} strokeWidth={1.9} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export default Experience
