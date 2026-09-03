import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import type { TrackId } from '../../data/profile'
import { skills } from '../../data/profile'
import { revealDelay } from '../../hooks/useInView'
import Section from '../Section'
import './Skills.css'

type SkillsProps = {
  track: TrackId
}

function Skills({ track }: SkillsProps) {
  const { t } = useTranslation()
  const groups = skills[track]

  return (
    <Section
      id="skills"
      eyebrow={t('skills.eyebrow')}
      title={t('skills.title')}
      description={t('skills.description', { track: t(`tracks.${track}.label`) })}
    >
      <div className="skills" key={track}>
        {groups.map((group, index) => (
          <article
            className="card card--hover skills__group reveal"
            key={group.id}
            style={revealDelay(index * 90)}
          >
            <header className="skills__head">
              <span className="skills__icon">
                <HugeiconsIcon icon={group.icon} size={20} strokeWidth={1.7} />
              </span>
              <h3 className="skills__title">{t(`skills.groups.${group.id}`)}</h3>
            </header>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Skills
