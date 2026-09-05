import { ArrowUpRight01Icon, Github01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { contacts } from '../../data/profile'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__monogram">{t('person.initials')}</span>
          <div>
            <p className="footer__name">{t('person.name')}</p>
            <p className="footer__role">{t('person.role')}</p>
          </div>
        </div>

        <div className="footer__actions">
          <a
            className="footer__link"
            href={contacts.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <HugeiconsIcon icon={Github01Icon} size={16} strokeWidth={1.9} />
            GitHub
          </a>
          <a className="footer__link" href="#top">
            {t('footer.top')}
            <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
