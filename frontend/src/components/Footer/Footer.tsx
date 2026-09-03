import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
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

        <a className="footer__top" href="#top">
          {t('footer.top')}
          <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.9} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
