const fs = require('fs');

const footer = `import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { href: '/services', label: 'Services' },
    { href: '/documents', label: 'Documents' },
    { href: '/fees', label: 'Fees' },
    { href: '/blog', label: 'Articles' },
    { href: '/testimonials', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <footer className="bg-gradient-to-b from-navy-dark to-[#0B1120] pt-16 pb-6 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-syne font-extrabold text-2xl text-white mb-2">
              Swaraj <span className="text-gold">Enterprises</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Professional legal consultancy & business registration services in Bhiwandi.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'Linkedin'].map((social, i) => (
                <button key={i} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all">
                  {social === 'Facebook' && <Facebook size={16} />}
                  {social === 'Instagram' && <Instagram size={16} />}
                  {social === 'Linkedin' && <Linkedin size={16} />}
                </button>
              ))}
            </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {['GST Registration', 'Property', 'ITR Filing', 'Company Registration', 'PAN Card'].map((s, i) => (
                <Link key={i} to="/services" className="text-white/50 text-sm hover:text-gold transition-colors">
                  {s}
                </Link>
              ))}
            </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={\\`tel:+91\\${CONTACT_INFO.primaryPhone}\\`} className="flex items-center gap-2 text-white/50 text-sm hover:text-gold transition-colors">
                <Phone size={14} className="text-gold" />
                +91 {CONTACT_INFO.primaryPhone}
              </a>
              <a href={\\`tel:+91\\${CONTACT_INFO.secondaryPhone}\\`} className="flex items-center gap-2 text-white/50 text-sm hover:text-gold transition-colors">
                <Phone size={14} className="text-gold" />
                +91 {CONTACT_INFO.secondaryPhone}
              </a>
              <a href={\\`mailto:\\${CONTACT_INFO.email}\\`} className="flex items-center gap-2 text-white/50 text-sm hover:text-gold transition-colors">
                <Mail size={14} className="text-gold" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
          </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {currentYear} Swaraj Enterprises & Legal Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/appointment" className="text-gold/60 text-xs hover:text-gold transition-colors">
              Book Appointment
            </Link>
            <Link to="/contact" className="text-gold/60 text-xs hover:text-gold transition-colors">
              Contact Us
            </Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer`;

fs.writeFileSync('src/components/Layout/Footer.jsx', footer, 'utf8');
console.log('Footer.jsx improved!');
