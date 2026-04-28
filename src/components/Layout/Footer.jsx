import { Link } from 'react-router-dom'
import { Scale, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'
import { sendWhatsAppMessage } from '../../utils/helpers'

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/fees', label: 'Fees' },
    { href: '/documents', label: 'Documents' },
    { href: '/appointment', label: 'Book Appointment' }
  ]

  const services = [
    'GST Registration',
    'Property Registration',
    'ITR Filing',
    'Company Registration',
    'Legal Consultation'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-dark relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gold p-2 rounded-xl transition-transform group-hover:rotate-12 shadow-lg shadow-gold/20">
                <Scale className="text-navy w-5 h-5" />
              </div>
              <div>
                <h3 className="font-syne font-extrabold text-white text-xl leading-tight tracking-tight">SWARAJ</h3>
                <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase opacity-90">Enterprises</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Trusted legal and business registration services in Bhiwandi & Thane since 2012.
            </p>
            <button
              onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello Swaraj Enterprises!')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/10 text-gold text-sm font-semibold hover:bg-gold/20 transition-all border border-gold/20"
            >
              <Phone size={14} /> Chat on WhatsApp
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Popular Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone size={14} className="text-gold" />
                </div>
                <span>+91 {CONTACT_INFO.primaryPhone}</span>
              </a>
              <a href={`tel:+91${CONTACT_INFO.secondaryPhone}`} className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Phone size={14} className="text-gold" />
                </div>
                <span>+91 {CONTACT_INFO.secondaryPhone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-white/60 hover:text-gold text-sm transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <Mail size={14} className="text-gold" />
                </div>
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-gold" />
                </div>
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Swaraj Enterprises & Legal Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/faq" className="text-white/40 hover:text-gold text-xs transition-colors">FAQ</Link>
            <span className="text-white/20">|</span>
            <Link to="/testimonials" className="text-white/40 hover:text-gold text-xs transition-colors">Testimonials</Link>
            <span className="text-white/20">|</span>
            <Link to="/blog" className="text-white/40 hover:text-gold text-xs transition-colors">Articles</Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}

export default Footer
