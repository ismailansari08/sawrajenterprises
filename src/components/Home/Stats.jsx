import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, Users, Briefcase, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  'Years Exp.': Clock,
  'Happy Clients': Users,
  'Services': Briefcase,
  'Success Rate': TrendingUp,
}

const StatItem = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)
  const rafRef = useRef(null)
  const Icon = iconMap[label] || Briefcase

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4)
            const current = Math.floor(eased * target)
            setCount(current)

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }

          rafRef.current = requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, hasAnimated])

  return (
    <div ref={elementRef} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
        </div>
        <div className="font-syne text-3xl md:text-4xl font-extrabold gradient-text">
          {count.toLocaleString()}{suffix}
        </div>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2">{label}</p>
      </div>
    </div>
  )
}

const Stats = () => {
  const sectionRef = useRef(null)

  const stats = [
    { target: 12, label: 'Years Exp.', suffix: '+ Yrs' },
    { target: 5200, label: 'Happy Clients', suffix: '+' },
    { target: 55, label: 'Services', suffix: '+' },
    { target: 99, label: 'Success Rate', suffix: '%' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-wider">Our Impact</span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card opacity-0">
              <StatItem target={stat.target} label={stat.label} suffix={stat.suffix} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
