import {
  Briefcase01Icon,
  GridViewIcon,
  Layers01Icon,
  Mail01Icon,
  UserIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'

export type NavLink = {
  href: string
  key: string
  icon: IconSvgElement
}

export const navLinks: NavLink[] = [
  { href: '#about', key: 'about', icon: UserIcon },
  { href: '#skills', key: 'skills', icon: Layers01Icon },
  { href: '#experience', key: 'experience', icon: Briefcase01Icon },
  { href: '#projects', key: 'projects', icon: GridViewIcon },
  { href: '#contact', key: 'contact', icon: Mail01Icon },
]

export const navHrefs = navLinks.map((link) => link.href)
