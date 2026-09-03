import { useEffect, useState } from 'react'

export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = hrefs
      .map((href) => document.querySelector(href))
      .filter((element): element is Element => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [hrefs])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 240) {
        setActive('')
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}
