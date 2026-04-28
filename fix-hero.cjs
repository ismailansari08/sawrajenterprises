const fs = require('fs');
const content = `import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'
import GradientText from '../Common/GradientText'
import { TRUST_BADGES, CONTACT_INFO } from '../../utils/constants'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-reveal', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out', delay: 0.3 }
      )
      
      gsap.fromTo('.hero-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(1)', delay: 0.6 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#162744] to-navy-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,160,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,160,61,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 left-[15%] w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-[10%] w-96 h-96 bg-navy/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-[5%] w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="hero-reveal opacity-0">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold/20 to-gold/5 text-gold border border-gold/25 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                Established Legal Consultancy - Bhiwandi
              </span>
            </div>
            
            <h1 className="hero-reveal opacity-0 font-syne font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight">
              Swaraj <br/>
              <span className="text-gold">Enterprises</span>
            </h1>
            <p className="hero-reveal opacity-0 text-xl md:text-2xl text-white/60 mt-3 font-light tracking-wide">
              & Legal Solutions
            </p>
            
            <div className="hero-reveal opacity-0 flex flex-wrap gap-3 my-7">
              {TRUST_BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-gold/30 transition-colors duration-300">
                  <CheckCircle size={14} className="text-gold shrink-0" />
                  <span className="text-white/80 text-xs font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
            
            <p className="hero-reveal opacity-0 text-white/50 text-lg max-w-lg leading-relaxed mb-8">
              Your trusted partner for all Legal, Business Registration, and Online Documentation needs in Bhiwandi & Thane region.
            </p>
            
            <div className="hero-reveal opacity-0 flex flex-col sm:flex-row gap-4">
              <Link to="/appointment" className="group bg-gradient-to-r from-gold to-[#d4af37] text-navy px-8 py-4 rounded-2xl font-bold text-center hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Our Services
              </Link>
            </div>

            <div className="hero-reveal opacity-0 flex flex-wrap gap-3 mt-10 items-center">
              <span className="text-white/40 text-sm">Popular:</span>
              {['GST Registration', 'Property', 'ITR Filing', 'PAN Card'].map((s, i) => (
                <Link key={i} to="/services" className="text-xs bg-white/5 border border-white/10 text-white/70 px-3 py-1.5 rounded-lg hover:bg-gold/10 hover:text-gold hover:border-gold/30 transition-all">
                  {s}
                </Link>
              ))}
            </div>

          {/* Right Content - Info Cards with Modern Design */}
          <div className="relative">
            {/* Main Card */}
            <div className="hero-card opacity-0 relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-lg rotate-6">
                <CheckCircle size={28} className="text-navy-dark" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-white text-3xl font-black">10+ Years</p>
                  <p className="text-white/50 text-sm">Serving Bhiwandi & Thane region</p>
                </div>
                
                <div className="h-px bg-gradient-to-r from-gold/30 via-white/10 to-transparent" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white text-2xl font-black">5000+</p>
                    <p className="text-white/50 text-xs">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-white text-2xl font-black">29+</p>
                    <p className="text-white/50 text-xs">Services</p>
                  </div>
                
                <div className="h-px bg-gradient-to-r from-gold/30 via-white/10 to-transparent" />
                
                <div>
                  <p className="text-white text-sm font-semibold mb-3">⚡ Quick Services</p>
                  <div className="flex flex-wrap gap-2">
                    {['GST', 'ITR', 'Property', 'PAN', 'Passport', 'Legal'].map((tag) => (
                      <span key={tag} className="bg-white/10 hover:bg-gold/20 px-3 py-1.5 rounded-lg text-xs text-gold transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
            
            {/* Floating Secondary Card */}
            <div className="hero-card opacity-0 absolute -bottom-6 -left-4 bg-navy-dark/90 backdrop-blur-xl border border-gold/20 rounded-2xl p-5 shadow-xl max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-bold">Available Now</span>
              </div>
              <p className="text-white text-sm font-semibold">Mon - Sat: 9AM - 7PM</p>
              <p className="text-white/50 text-xs mt-1">Sunday: Closed</p>
            </div>
        </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
    </section>
  )
}

export default Hero`;

fs.writeFileSync('src/components/Home/Hero.jsx', content, 'utf8');
console.log('Hero.jsx restored successfully!');
