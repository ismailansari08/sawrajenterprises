import { useRef, useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Truck, IdCard, Globe, Vote, FileText, Receipt, TrendingUp, Calculator,
  BookOpen, Utensils, Building2, Newspaper, Laptop, Building, Award,
  Store, Signature, Home, FileCheck, Map, LandPlot, Archive, Shield,
  Heart, FileSignature, Users, Factory, Scroll, Gavel
} from 'lucide-react'
import { SERVICE_CATEGORIES, ALL_SERVICES } from '../../utils/constants'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Truck: Truck,
  IdCard: IdCard,
  Globe: Globe,
  Vote: Vote,
  FileText: FileText,
  Receipt: Receipt,
  TrendingUp: TrendingUp,
  Calculator: Calculator,
  Passport: BookOpen,
  Utensils: Utensils,
  Building2: Building2,
  Newspaper: Newspaper,
  Laptop: Laptop,
  Building: Building,
  Award: Award,
  Store: Store,
  Signature: Signature,
  Home: Home,
  FileCheck: FileCheck,
  Map: Map,
  LandPlot: LandPlot,
  Archive: Archive,
  Shield: Shield,
  Heart: Heart,
  FileSignature: FileSignature,
  Users: Users,
  Factory: Factory,
  Scroll: Scroll,
  Gavel: Gavel
}

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || FileText
  
  return (
    <div className="service-card bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold/20 group relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 bg-navy/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
          <Icon className="text-navy w-6 h-6 group-hover:text-gold transition-colors duration-300" />
        </div>
        
        <h3 className="text-lg font-bold text-navy mb-2 line-clamp-2">{service.title}</h3>
        <p className="text-gray-500 text-xs mb-3">{service.description}</p>
        
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <span className="text-gold font-bold text-sm">{service.price}</span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <span>⏱ {service.processingTime}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const CategorySection = ({ category, services, index }) => {
  const sectionRef = useRef(null)
  const categoryIcons = {
    'Logistics & Online': '🚚',
    'GST & Tax': '📊',
    'Government Documents': '📋',
    'Business Registrations': '🏢',
    'Property & Legal': '⚖️',
    'Licenses & Permits': '📜'
  }

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [index])

  return (
    <div ref={sectionRef} className="mb-12">
      <div className="flex items-center gap-3 mb-5 pb-2 border-b-2 border-gold/30">
        <span className="text-2xl">{categoryIcons[category] || '📌'}</span>
        <h2 className="font-syne text-xl md:text-2xl font-bold text-navy">{category}</h2>
        <span className="text-gold text-sm ml-auto">{services.length} Services</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </div>
    </div>
  )
}

const Services = () => {
  const [activeTab, setActiveTab] = useState('all')
  const sectionRef = useRef(null)

  // Group services by category
  const servicesByCategory = {
    'Logistics & Online': ALL_SERVICES.filter(s => 
      ['Logistics Business Consultancy', 'PAN Card (पेन कार्ड)', 'Online Services', 'Election Nomination Form'].includes(s.title)
    ),
    'GST & Tax': ALL_SERVICES.filter(s => 
      ['GST Registration (GST रिजस्ट्रेशन)', 'Goods & Service Tax (GST)', 'Income Tax Return (ITR Filing)', 'TDS Return'].includes(s.title)
    ),
    'Government Documents': ALL_SERVICES.filter(s => 
      ['Passport Seva (पासपोर्ट सेवा)', 'Food Licence (फूड लाइसेंस)', 'Aaple Sarkar (आपले सरकार सेवा)', 'E-Gazette (ई-गैज़ेट)'].includes(s.title)
    ),
    'Business Registrations': ALL_SERVICES.filter(s => 
      ['E-Registration', 'Company Registration (कंपनी रिजस्ट्रेशन)', 'Trade Mark & ISO Certification', 'Shop Act Licence (शिप एक्ट लाइसेंस - गुणस्तान)', 'Digital Signature'].includes(s.title)
    ),
    'Property & Legal': ALL_SERVICES.filter(s => 
      ['Property Registration', 'Revenue Consonant', 'Bhumiabhilekh (भूमि अभिलेख)', 'Land Management', 'Land Record', 'Cast Validity', 'Marriage Registration', 'Leave and Licence'].includes(s.title)
    ),
    'Licenses & Permits': ALL_SERVICES.filter(s => 
      ['Labour Contractor Licence', 'Pollution Control Board (MPCB)', 'Election Management', 'Import Export Code (IEC Code Registration)'].includes(s.title)
    )
  }

  const categories = Object.keys(servicesByCategory)
  const tabs = ['all', ...categories]

  const getDisplayServices = () => {
    if (activeTab === 'all') return ALL_SERVICES
    return servicesByCategory[activeTab] || []
  }

  const displayServices = getDisplayServices()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  // Count total services
  const totalServices = ALL_SERVICES.length

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-0.5 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-wider">Our Expertise</span>
            <div className="w-10 h-0.5 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3">
            Everything Under <span className="gradient-text">One Roof</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            From logistics consultancy to legal documentation — we provide {totalServices}+ professional services in Bhiwandi & Thane region.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-navy text-gold border-2 border-gold shadow-lg shadow-navy/20 scale-105'
                  : 'bg-white text-navy border-2 border-gold/20 hover:border-gold/60 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              {tab === 'all' ? `All Services (${totalServices})` : tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {activeTab === 'all' ? (
          <div>
            {categories.map((category, idx) => (
              <CategorySection 
                key={category} 
                category={category} 
                services={servicesByCategory[category]} 
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {displayServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link 
            to="/documents" 
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-dark transition-all"
          >
            View All Services & Document Checklist →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services