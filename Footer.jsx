import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../../utils/constants'

const Footer = () => {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/fees', label: 'Fees' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Articles' },
    { href: '/appointment', label: 'Book' },
    { href: '/testimonials', label: 'Reviews' }
  ]

  return (
    <footer className="bg-navy-dark py-10 px-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-4 text-center md:text-left">
        <div className="text-white/60 text-xs md:text-sm">
          © {new Date().getFullYear()} Swaraj Enterprises & Legal Solutions
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href={`tel:+91${CONTACT_INFO.secondaryPhone}`} className="text-gold hover:text-gold-dark text-xs md:text-sm transition">
            +91 {CONTACT_INFO.secondaryPhone}
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold hover:text-gold-dark text-xs md:text-sm transition">
            Email
          </a>
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-gold hover:text-gold-dark text-xs md:text-sm transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer