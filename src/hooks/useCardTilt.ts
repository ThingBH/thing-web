import { useRef, useCallback } from 'react'

export function useCardTilt(maxDeg = 7) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      el.style.transition = 'none'
      el.style.transform = `perspective(900px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg * 0.6}deg) translateZ(10px)`
    },
    [maxDeg],
  )

  // On leave: clear inline transform so CSS pre-tilt takes back over, animated
  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
