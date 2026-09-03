import {
  Atom01Icon,
  CloudServerIcon,
  Database02Icon,
  ServerStack01Icon,
  Shield01Icon,
  ShoppingBag01Icon,
  SmartPhone01Icon,
  SourceCodeIcon,
  Video01Icon,
  WorkflowSquare01Icon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import fullstackResume from '../assets/fullstack_resume.pdf'
import mobileResume from '../assets/mobile_resume.pdf'

export type TrackId = 'fullstack' | 'mobile'

export type SkillGroupId = 'frontend' | 'backend' | 'infrastructure' | 'mobile'

export type ExperienceId = 'ake' | 'rcpkip' | 'she' | 'lucky' | 'antibulling'

export type ProjectId = 'skillpass' | 'lucky' | 'antibulling' | 'rcpkip' | 'she'

export type SkillGroup = {
  id: SkillGroupId
  icon: IconSvgElement
  items: string[]
}

export type ExperienceEntry = {
  id: ExperienceId
  link?: string
}

export type Project = {
  id: ProjectId
  icon: IconSvgElement
  track: TrackId
  stack: string[]
  link?: string
  featured?: boolean
}

export const trackOrder: TrackId[] = ['fullstack', 'mobile']

export const contacts = {
  email: 'artem.skillpass@gmail.com',
  phone: '+7 747 081 90 33',
  phoneHref: '+77470819033',
}

export function gmailComposeUrl(subject: string) {
  const to = encodeURIComponent(contacts.email)
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}`
}

export const resumes: Record<TrackId, { file: string; name: string }> = {
  fullstack: { file: fullstackResume, name: 'Shirin-Artem-Fullstack.pdf' },
  mobile: { file: mobileResume, name: 'Shirin-Artem-Mobile.pdf' },
}

export const skills: Record<TrackId, SkillGroup[]> = {
  fullstack: [
    {
      id: 'frontend',
      icon: Atom01Icon,
      items: ['React / Next.js', 'TypeScript / JavaScript', 'Tailwind CSS', 'Component Architecture'],
    },
    {
      id: 'backend',
      icon: ServerStack01Icon,
      items: ['Go', 'PostgreSQL', 'REST API Integration'],
    },
    {
      id: 'infrastructure',
      icon: CloudServerIcon,
      items: ['Docker', 'VPS / Linux Server', 'Nginx', 'SSH', 'Deployment / CI/CD', 'Git'],
    },
  ],
  mobile: [
    {
      id: 'mobile',
      icon: SmartPhone01Icon,
      items: ['Flutter / Dart', 'State Management', 'Cross-platform (Android / iOS)', 'UI Implementation'],
    },
    {
      id: 'backend',
      icon: Database02Icon,
      items: ['Go (backend)', 'Supabase', 'REST API Integration'],
    },
    {
      id: 'infrastructure',
      icon: WorkflowSquare01Icon,
      items: ['Docker', 'VPS / Linux Server', 'Deployment / CI/CD', 'Git / GitHub'],
    },
  ],
}

export const experience: Record<TrackId, ExperienceEntry[]> = {
  fullstack: [
    { id: 'ake' },
    { id: 'rcpkip', link: 'https://rcpkip.kz/' },
    { id: 'she', link: 'https://shebrand.kz/' },
  ],
  mobile: [{ id: 'lucky' }, { id: 'antibulling' }],
}

export const projects: Project[] = [
  {
    id: 'skillpass',
    icon: Shield01Icon,
    track: 'fullstack',
    stack: ['React', 'TypeScript', 'Tailwind', 'Go', 'PostgreSQL', 'Docker'],
    link: 'https://skillpass.kz/',
    featured: true,
  },
  {
    id: 'lucky',
    icon: Video01Icon,
    track: 'mobile',
    stack: ['Flutter', 'Go', 'gRPC', 'Kafka', 'MinIO', 'Elasticsearch'],
    featured: true,
  },
  {
    id: 'antibulling',
    icon: SmartPhone01Icon,
    track: 'mobile',
    stack: ['Flutter', 'Dart', 'Supabase', 'REST API'],
  },
  {
    id: 'rcpkip',
    icon: SourceCodeIcon,
    track: 'fullstack',
    stack: ['React 18', 'TypeScript', 'Supabase', 'Edge Functions', 'i18next', 'jsPDF'],
    link: 'https://rcpkip.kz/',
  },
  {
    id: 'she',
    icon: ShoppingBag01Icon,
    track: 'fullstack',
    stack: ['React 19', 'TanStack', 'Tailwind 4', 'Go', 'PostgreSQL', 'Redis'],
    link: 'https://shebrand.kz/',
  },
]
