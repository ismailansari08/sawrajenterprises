import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Scale } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from './constants';
import { smoothScrollTo, debounce } from './helpers';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/', '');
      smoothScrollTo(targetId, 80);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-dark/95 backdrop-blur-lg py-2 shadow-xl border-b border-gold/10'
            : 'bg-navy-dark/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-2 rounded-xl transition-transform group-hover:rotate-12 shadow-lg shadow-gold/20">
              <Scale className="text-navy w-6 h-6" />
            </div>
            <div>
              <h1 className="font-syne font-extrabold text-white text-xl md:text-2xl leading-tight tracking-tight">SWARAJ</h1>
              <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase opacity-90">Enterprises</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-gold ${
                  location.pathname === link.href ? 'text-gold border-b-2 border-gold/50' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="btn-primary flex items-center gap-2 py-2.5 px-6 rounded-full shadow-lg shadow-navy-dark/40"
            >
              <Phone size={16} /> <span className="text-sm">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-navy-dark border-t border-gold/20 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100 py-6 shadow-2xl' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-lg font-syne font-medium hover:text-gold transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:+91${CONTACT_INFO.primaryPhone}`}
              className="btn-secondary flex items-center justify-center gap-2 mt-4 py-3"
            >
              <Phone size={18} /> Call Specialist
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent layout shift from fixed nav */}
      <div className="h-20 md:h-24" aria-hidden="true" />
    </>
  );
};

export default Navbar;