import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { Language } from '../../i18n'
import { languages } from '../../i18n'
import './LanguageSwitch.css'

function LanguageSwitch() {
  const { t, i18n } = useTranslation()
  const current = (languages.find((language) => i18n.language.startsWith(language)) ??
    'ru') as Language

  const style = {
    '--count': languages.length,
    '--index': languages.indexOf(current),
  } as CSSProperties

  return (
    <div className="lang" role="group" aria-label={t('nav.language')} style={style}>
      <span className="lang__thumb" aria-hidden="true" />
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          className={`lang__btn${language === current ? ' lang__btn--active' : ''}`}
          aria-pressed={language === current}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch
