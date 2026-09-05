import { useEffect, useState } from 'react'
import {
  Call02Icon,
  Copy01Icon,
  Github01Icon,
  Location01Icon,
  Mail01Icon,
  Tick02Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { contacts, gmailComposeUrl } from '../../data/profile'
import { useInView } from '../../hooks/useInView'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()
  const { ref, inView } = useInView<HTMLElement>(0.1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }
    const timer = window.setTimeout(() => setCopied(false), 2200)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contacts.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="contact" ref={ref} data-visible={inView}>
      <div className="container">
        <div className="card contact__card reveal">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2 className="contact__title">{t('contact.title')}</h2>
          <p className="contact__text">{t('contact.text')}</p>

          <div className="contact__actions">
            <a
              className="btn btn--primary"
              href={gmailComposeUrl(t('contact.subject'))}
              target="_blank"
              rel="noreferrer noopener"
            >
              <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.9} />
              {contacts.email}
            </a>
            <button type="button" className="btn btn--ghost" onClick={copyEmail}>
              <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} size={18} strokeWidth={1.9} />
              {copied ? t('contact.copied') : t('contact.copy')}
            </button>
            <a className="btn btn--ghost" href={`tel:${contacts.phoneHref}`}>
              <HugeiconsIcon icon={Call02Icon} size={18} strokeWidth={1.9} />
              {contacts.phone}
            </a>
            <a
              className="btn btn--ghost"
              href={contacts.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <HugeiconsIcon icon={Github01Icon} size={18} strokeWidth={1.9} />
              GitHub
            </a>
          </div>

          <p className="contact__location">
            <HugeiconsIcon icon={Location01Icon} size={16} strokeWidth={1.8} />
            {t('person.location')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
