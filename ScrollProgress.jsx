import { useEffect, useState } from 'react'
import { debounce } from '../../../helpers'

const ScrollProgress = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (height > 0) {
        const scrolled = (winScroll / height) * 100
        setWidth(scrolled)
      }
    }, 16)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gold z-[1001] transition-all duration-75"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress