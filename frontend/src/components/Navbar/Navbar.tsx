import { useEffect, useState } from 'react'
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { navHrefs, navLinks } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'
import LanguageSwitch from '../LanguageSwitch'
import './Navbar.css'

function Navbar() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(navHrefs)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <nav className="nav__inner" aria-label={t('nav.aria')}>
        <a className="nav__brand" href="#top">
          <span className="nav__monogram">{t('person.initials')}</span>
          <span className="nav__brand-text">
            <span className="nav__name">{t('person.name')}</span>
            <span className="nav__role">{t('person.role')}</span>
          </span>
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link${active === link.href ? ' nav__link--active' : ''}`}
                aria-current={active === link.href ? 'true' : undefined}
              >
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <LanguageSwitch />
          <button
            type="button"
            className="nav__icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('nav.toLight') : t('nav.toDark')}
          >
            <HugeiconsIcon
              icon={theme === 'dark' ? Sun03Icon : Moon02Icon}
              size={19}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
