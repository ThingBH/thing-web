import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function RevealSection({ id, className, children }: Props) {
  const { ref, visible } = useInView<HTMLElement>()
  const cls = ['reveal-on-scroll', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')
  return (
    <section id={id} ref={ref} className={cls}>
      {children}
    </section>
  )
}
