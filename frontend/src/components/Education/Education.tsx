import { GraduationScrollIcon, TranslateIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { revealDelay } from '../../hooks/useInView'
import Section from '../Section'
import './Education.css'

type Detail = {
  label: string
  value: string
}

type LanguageLevel = {
  name: string
  level: string
}

function Education() {
  const { t } = useTranslation()
  const details = t('education.details', { returnObjects: true }) as unknown as Detail[]
  const languageLevels = t('education.languages', {
    returnObjects: true,
  }) as unknown as LanguageLevel[]

  return (
    <Section id="education" eyebrow={t('education.eyebrow')} title={t('education.title')}>
      <div className="education">
        <article className="card card--hover education__card reveal">
          <span className="education__icon">
            <HugeiconsIcon icon={GraduationScrollIcon} size={20} strokeWidth={1.7} />
          </span>
          <h3 className="education__title">{t('education.school')}</h3>
          <p className="education__degree">{t('education.degree')}</p>
          <ul className="education__list">
            {details.map((detail) => (
              <li key={detail.label}>
                <span className="education__key">{detail.label}</span>
                <span className="education__value">{detail.value}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card card--hover education__card reveal" style={revealDelay(110)}>
          <span className="education__icon">
            <HugeiconsIcon icon={TranslateIcon} size={20} strokeWidth={1.7} />
          </span>
          <h3 className="education__title">{t('education.languagesTitle')}</h3>
          <p className="education__degree">{t('education.languagesSubtitle')}</p>
          <ul className="education__list">
            {languageLevels.map((language) => (
              <li key={language.name}>
                <span className="education__key">{language.name}</span>
                <span className="education__value">{language.level}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}

export default Education
