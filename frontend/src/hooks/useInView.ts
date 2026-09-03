import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function revealDelay(ms: number): CSSProperties {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties
}
