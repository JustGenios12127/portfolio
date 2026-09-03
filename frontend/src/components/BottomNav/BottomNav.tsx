import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { navHrefs, navLinks } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import './BottomNav.css'

function BottomNav() {
  const { t } = useTranslation()
  const active = useActiveSection(navHrefs)

  return (
    <nav className="bottomnav" aria-label={t('nav.aria')}>
      <ul className="bottomnav__list">
        {navLinks.map((link) => {
          const current = active === link.href

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`bottomnav__item${current ? ' bottomnav__item--active' : ''}`}
                aria-current={current ? 'true' : undefined}
              >
                <span className="bottomnav__icon">
                  <HugeiconsIcon icon={link.icon} size={20} strokeWidth={1.8} />
                </span>
                <span className="bottomnav__label">{t(`nav.${link.key}`)}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BottomNav
