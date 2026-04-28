import { useEffect, useRef } from 'react'

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const lastScrollRef = useRef(0)
  const isTickingRef = useRef(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.willChange = 'transform'
    }

    const handleScroll = () => {
      lastScrollRef.current = window.pageYOffset
      if (!isTickingRef.current) {
        isTickingRef.current = true
        rafRef.current = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translateY(${lastScrollRef.current * speed}px)`
          }
          isTickingRef.current = false
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (ref.current) {
        ref.current.style.willChange = 'auto'
      }
    }
  }, [speed])

  return ref
}

export default useParallax

