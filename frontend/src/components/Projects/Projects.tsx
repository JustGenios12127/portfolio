import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/profile'
import { revealDelay } from '../../hooks/useInView'
import Section from '../Section'
import './Projects.css'

function Projects() {
  const { t } = useTranslation()

  return (
    <Section
      id="projects"
      eyebrow={t('projects.eyebrow')}
      title={t('projects.title')}
      description={t('projects.description')}
    >
      <div className="projects">
        {projects.map((project, index) => (
          <article
            className={`card card--hover projects__card reveal${
              project.featured ? ' projects__card--featured' : ''
            }`}
            key={project.id}
            style={revealDelay(index * 80)}
          >
            <header className="projects__head">
              <span className="projects__icon">
                <HugeiconsIcon icon={project.icon} size={20} strokeWidth={1.7} />
              </span>
              <span className="projects__track">{t(`tracks.${project.track}.label`)}</span>
            </header>

            <div className="projects__body">
              <p className="projects__kind">{t(`projects.items.${project.id}.kind`)}</p>
              <h3 className="projects__name">{t(`projects.items.${project.id}.name`)}</h3>
              <p className="projects__description">
                {t(`projects.items.${project.id}.description`)}
              </p>
            </div>

            <footer className="projects__footer">
              <ul className="projects__stack">
                {project.stack.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              {project.link ? (
                <a
                  className="projects__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t('projects.openSite')}
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} strokeWidth={1.9} />
                </a>
              ) : null}
            </footer>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
