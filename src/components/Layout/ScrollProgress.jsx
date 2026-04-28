import { useEffect, useRef, useState } from 'react'

const ScrollProgress = () => {
  const [width, setWidth] = useState(0)
  const rafRef = useRef(null)
  const isTickingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!isTickingRef.current) {
        isTickingRef.current = true
        rafRef.current = requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
          if (height > 0) {
            setWidth((winScroll / height) * 100)
          }
          isTickingRef.current = false
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 z-[1001] transition-all duration-75 bg-gradient-to-r from-gold via-[#d4af37] to-gold shadow-[0_0_10px_rgba(201,160,61,0.5)]"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
