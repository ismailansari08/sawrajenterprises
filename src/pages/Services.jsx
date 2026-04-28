import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Truck, IdCard, Globe, Vote, FileText, Receipt, TrendingUp, Calculator,
  BookOpen, Utensils, Building2, Newspaper, Laptop, Building, Award,
  Store, Signature, Home, FileCheck, Map, LandPlot, Archive, Shield,
  Heart, FileSignature, Users, Factory, Scroll, Gavel, Clock, CheckCircle,
  ChevronRight, Phone, Calendar, FileQuestion
} from 'lucide-react'
import { CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

// Complete Services Data (29+ services)
export const ALL_SERVICES_LIST = [
  // Logistics & Online (4 services)
  { id: 'logistics-consultancy', name: 'Logistics Business Consultancy', category: 'Logistics & Online', icon: 'Truck', description: 'Expert consultancy for logistics business setup and operations. Complete guidance for transport business registration, fleet management, and compliance.', price: '₹1,500+', processingTime: '5-7 Days', documents: ['Business Plan', 'PAN Card', 'Aadhaar Card', 'Address Proof', 'Bank Account Details'], features: ['Fleet Management Consultancy', 'Transport License Assistance', 'Route Planning', 'Compliance Support'] },
  { id: 'pan-card', name: 'PAN Card (पेन कार्ड)', category: 'Logistics & Online', icon: 'IdCard', description: 'New PAN card application and correction services. Get your PAN card delivered to your doorstep.', price: '₹150+', processingTime: '3-5 Days', documents: ['Aadhaar Card', 'Proof of Address', 'Passport Size Photo', 'Date of Birth Proof'], features: ['New PAN Application', 'PAN Card Correction', 'Lost PAN Reprint', 'E-PAN Download'] },
  { id: 'online-services', name: 'Online Services', category: 'Logistics & Online', icon: 'Globe', description: 'Various online form filling and application services for government and private portals.', price: '₹100+', processingTime: '1-3 Days', documents: ['As per service requirement'], features: ['Form Filling Assistance', 'Document Upload Help', 'Application Tracking', 'Status Updates'] },
  { id: 'election-nomination', name: 'Election Nomination Form', category: 'Logistics & Online', icon: 'Vote', description: 'Election nomination form filling and submission assistance for local, state, and general elections.', price: '₹500+', processingTime: '2-3 Days', documents: ['Voter ID Card', 'PAN Card', 'Address Proof', 'Photographs'], features: ['Form Filling', 'Document Verification', 'Submission Assistance', 'Election Guidance'] },
  
  // GST & Tax (4 services)
  { id: 'gst-registration', name: 'GST Registration (GST रिजस्ट्रेशन)', category: 'GST & Tax', icon: 'FileText', description: 'Complete GST registration for businesses and professionals. Get your GSTIN within 7 days.', price: '₹1,500+', processingTime: '5-7 Days', documents: ['PAN Card', 'Aadhaar Card', 'Business Address Proof', 'Bank Account Statement', 'Passport Size Photo'], features: ['New GST Registration', 'GST Amendment', 'GST Cancellation', 'GST Consultancy'] },
  { id: 'gst-filing', name: 'Goods & Service Tax (GST)', category: 'GST & Tax', icon: 'Receipt', description: 'GST return filing, amendments, and compliance services for all types of businesses.', price: '₹500/month', processingTime: 'Monthly', documents: ['GST Credentials', 'Sales/Purchase Invoices', 'Bank Statements'], features: ['GSTR-1 Filing', 'GSTR-3B Filing', 'GSTR-9 Annual Return', 'GST Audit Support'] },
  { id: 'itr-filing', name: 'Income Tax Return (ITR Filing)', category: 'GST & Tax', icon: 'TrendingUp', description: 'Income tax return filing for individuals, businesses, and professionals. Maximize your refund.', price: '₹499+', processingTime: '3-5 Days', documents: ['PAN Card', 'Aadhaar Card', 'Form 16', 'Bank Statements', 'Investment Proofs'], features: ['ITR-1 to ITR-7 Filing', 'Tax Planning', 'Refund Tracking', 'Notice Response'] },
  { id: 'tds-return', name: 'TDS Return', category: 'GST & Tax', icon: 'Calculator', description: 'TDS return filing and compliance services for businesses and individuals.', price: '₹500+', processingTime: '3-5 Days', documents: ['TAN Number', 'PAN Card', 'TDS Payment Challans', 'Salary/Contract Details'], features: ['Form 24Q Filing', 'Form 26Q Filing', 'TDS Certificate Issuance', 'TDS Reconciliation'] },
  
  // Government Documents (4 services)
  { id: 'passport-seva', name: 'Passport Seva (पासपोर्ट सेवा)', category: 'Government Documents', icon: 'Passport', description: 'Passport application, renewal, and appointment booking assistance. Complete document verification support.', price: '₹500+', processingTime: '5-10 Days', documents: ['Aadhaar Card', 'Address Proof', 'Date of Birth Proof', 'Passport Photos', 'Previous Passport (if renewal)'], features: ['Online Application', 'Appointment Booking', 'Document Verification', 'Police Verification Follow-up'] },
  { id: 'food-licence', name: 'Food Licence (फूड लाइसेंस)', category: 'Government Documents', icon: 'Utensils', description: 'FSSAI food license registration and renewal for restaurants, food businesses, and manufacturers.', price: '₹2,000+', processingTime: '7-10 Days', documents: ['PAN Card', 'Aadhaar Card', 'Shop Address Proof', 'Food Safety Management Plan', 'Passport Size Photos'], features: ['FSSAI Registration', 'State License', 'Central License', 'License Renewal'] },
  { id: 'aaple-sarkar', name: 'Aaple Sarkar (आपले सरकार सेवा)', category: 'Government Documents', icon: 'Building2', description: 'Maharashtra government online services portal assistance for certificates and documents.', price: '₹200+', processingTime: '2-5 Days', documents: ['Aadhaar Card', 'Ration Card', 'Address Proof', 'As per certificate requirement'], features: ['Income Certificate', 'Domicile Certificate', 'Caste Certificate', 'Birth/Death Certificate'] },
  { id: 'e-gazette', name: 'E-Gazette (ई-गैज़ेट)', category: 'Government Documents', icon: 'Newspaper', description: 'E-gazette publication for name change, address change, and other legal notifications.', price: '₹1,500+', processingTime: '10-15 Days', documents: ['Affidavit', 'Newspaper Publication', 'Identity Proof', 'Address Proof'], features: ['Name Change Gazette', 'Address Change Gazette', 'Spelling Correction', 'Publication Certificate'] },
  
  // Business Registrations (5 services)
  { id: 'e-registration', name: 'E-Registration', category: 'Business Registrations', icon: 'Laptop', description: 'Online registration services for various business and government registrations.', price: '₹300+', processingTime: '2-4 Days', documents: ['As per registration type'], features: ['MSME Registration', 'Udyam Registration', 'NSIC Registration', 'Startup India Registration'] },
  { id: 'company-registration', name: 'Company Registration (कंपनी रिजस्ट्रेशन)', category: 'Business Registrations', icon: 'Building', description: 'Private Limited, LLP, Partnership, and OPC registration with MCA.', price: '₹8,000+', processingTime: '10-15 Days', documents: ['PAN Card (All Directors)', 'Aadhaar Card (All Directors)', 'Address Proof', 'Registered Office Proof', 'Digital Signature'], features: ['Pvt Ltd Registration', 'LLP Registration', 'Partnership Registration', 'OPC Registration'] },
  { id: 'trademark-iso', name: 'Trade Mark & ISO Certification', category: 'Business Registrations', icon: 'Award', description: 'Trademark registration and ISO certification for brand protection and quality standards.', price: '₹5,000+', processingTime: '15-20 Days', documents: ['Logo/Brand Name', 'Business Registration Proof', 'User Affidavit', 'Power of Attorney'], features: ['Trademark Search', 'Trademark Application', 'ISO 9001 Certification', 'ISO 14001 Certification'] },
  { id: 'shop-act', name: 'Shop Act Licence (शिप एक्ट लाइसेंस - गुणस्तान)', category: 'Business Registrations', icon: 'Store', description: 'Shop & Establishment Act license for shops, restaurants, offices, and commercial establishments.', price: '₹800+', processingTime: '5-7 Days', documents: ['Aadhaar Card', 'PAN Card', 'Shop Address Proof', 'Passport Size Photo', 'Rent Agreement'], features: ['New Shop Act Registration', 'Shop Act Renewal', 'Amendment Services', 'Labour Law Compliance'] },
  { id: 'digital-signature', name: 'Digital Signature', category: 'Business Registrations', icon: 'Signature', description: 'Class 2 and Class 3 Digital Signature Certificates for online document signing.', price: '₹1,200+', processingTime: '1-2 Days', documents: ['PAN Card', 'Aadhaar Card', 'Passport Size Photo', 'Mobile/Email ID'], features: ['Class 2 DSC', 'Class 3 DSC', 'DGFT DSC', 'MCA DSC'] },
  
  // Property & Legal (8 services)
  { id: 'property-registration', name: 'Property Registration', category: 'Property & Legal', icon: 'Home', description: 'Sale deed, gift deed, and property registration services with Sub-Registrar office.', price: '₹2,000+', processingTime: '3-7 Days', documents: ['Sale Deed Draft', 'PAN Card (Buyer & Seller)', 'Aadhaar Card', 'Passport Size Photos', 'Property Tax Receipt'], features: ['Sale Deed Registration', 'Gift Deed Registration', 'Mortgage Deed', 'Lease Deed'] },
  { id: 'revenue-consonant', name: 'Revenue Consonant', category: 'Property & Legal', icon: 'FileCheck', description: 'Revenue department document assistance and certification.', price: '₹1,000+', processingTime: '5-10 Days', documents: ['Land Documents', '7/12 Extract', '8A Extract', 'Property Card'], features: ['Revenue Record Update', 'Mutation Entry', 'Name Transfer', 'Survey Number Verification'] },
  { id: 'bhumiabhilekh', name: 'Bhumiabhilekh (भूमि अभिलेख)', category: 'Property & Legal', icon: 'Map', description: 'Land record documentation and verification services.', price: '₹500+', processingTime: '3-5 Days', documents: ['Survey Number', 'Village Details', 'Owner Details'], features: ['7/12 Extract', '8A Extract', 'Property Card', 'Land Map'] },
  { id: 'land-management', name: 'Land Management', category: 'Property & Legal', icon: 'LandPlot', description: 'Land management and documentation services for agricultural and non-agricultural land.', price: '₹1,000+', processingTime: '5-7 Days', documents: ['Land Documents', '7/12 Extract', 'Owner Identity Proof'], features: ['Land Survey', 'Land Division', 'Land Conversion', 'NA Permission'] },
  { id: 'land-record', name: 'Land Record', category: 'Property & Legal', icon: 'Archive', description: '7/12 extract, 8A extract, and mutation entry services.', price: '₹500+', processingTime: '3-5 Days', documents: ['Survey Number', 'Owner PAN/Aadhaar'], features: ['7/12 Utara', '8A Extract', 'Mutation Entry', 'Feri Farfar'] },
  { id: 'cast-validity', name: 'Cast Validity', category: 'Property & Legal', icon: 'Shield', description: 'Caste certificate validity documentation and verification.', price: '₹1,500+', processingTime: '15-30 Days', documents: ['Caste Certificate', 'School Leaving Certificate', 'Income Proof', 'Address Proof'], features: ['Caste Validity Application', 'Document Verification', 'Committee Hearing Support', 'Validity Certificate'] },
  { id: 'marriage-registration', name: 'Marriage Registration', category: 'Property & Legal', icon: 'Heart', description: 'Marriage registration under Hindu Marriage Act or Special Marriage Act.', price: '₹1,500+', processingTime: '5-10 Days', documents: ['Marriage Invitation', 'Wedding Photos', 'Witness ID Proofs', 'PAN/Aadhaar of Couple'], features: ['Hindu Marriage Registration', 'Special Marriage Act Registration', 'Court Marriage Assistance', 'Marriage Certificate'] },
  { id: 'leave-licence', name: 'Leave and Licence', category: 'Property & Legal', icon: 'FileSignature', description: 'Leave and license agreement drafting and registration for rental properties.', price: '₹1,000+', processingTime: '3-5 Days', documents: ['Property Documents', 'Owner PAN/Aadhaar', 'Tenant PAN/Aadhaar', 'Rent Details'], features: ['Agreement Drafting', 'Notarization', 'Registration', 'Renewal Services'] },
  
  // Licenses & Permits (4 services)
  { id: 'labour-licence', name: 'Labour Contractor Licence', category: 'Licenses & Permits', icon: 'Users', description: 'Labour contractor license registration and renewal for construction and industrial projects.', price: '₹3,000+', processingTime: '10-15 Days', documents: ['PAN Card', 'Aadhaar Card', 'Business Registration', 'Address Proof', 'Bank Account Details'], features: ['Contractor Registration', 'License Renewal', 'Compliance Support', 'Annual Returns'] },
  { id: 'mpcb', name: 'Pollution Control Board (MPCB)', category: 'Licenses & Permits', icon: 'Factory', description: 'MPCB/NOC certificate for industries, factories, and commercial establishments.', price: '₹5,000+', processingTime: '15-20 Days', documents: ['Factory Address Proof', 'PAN Card', 'Aadhaar Card', 'Project Report', 'Site Plan'], features: ['Consent to Establish', 'Consent to Operate', 'CTE/CTO Application', 'Environmental Clearance'] },
  { id: 'election-management', name: 'Election Management', category: 'Licenses & Permits', icon: 'Vote', description: 'Election campaign and management services for candidates and political parties.', price: 'Contact Us', processingTime: 'Varies', documents: ['Candidate Details', 'Party Affiliation', 'Voter List', 'Campaign Materials'], features: ['Campaign Strategy', 'Voter Outreach', 'Nomination Filing', 'Election Day Support'] },
  { id: 'iec-code', name: 'Import Export Code (IEC Code Registration)', category: 'Licenses & Permits', icon: 'Globe', description: 'IEC code for import/export businesses required by DGFT.', price: '₹1,500+', processingTime: '3-5 Days', documents: ['PAN Card', 'Aadhaar Card', 'Bank Account Details', 'Address Proof', 'GST Certificate'], features: ['New IEC Application', 'IEC Modification', 'IEC Cancellation', 'IEC Renewal'] }
]

// Category Icons and Colors
const categoryConfig = {
  'Logistics & Online': { icon: '🚚', color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
  'GST & Tax': { icon: '📊', color: 'bg-green-100 text-green-700', border: 'border-green-200' },
  'Government Documents': { icon: '📋', color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  'Business Registrations': { icon: '🏢', color: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200' },
  'Property & Legal': { icon: '⚖️', color: 'bg-rose-100 text-rose-700', border: 'border-rose-200' },
  'Licenses & Permits': { icon: '📜', color: 'bg-amber-100 text-amber-700', border: 'border-amber-200' }
}

const iconMap = {
  Truck: Truck, IdCard: IdCard, Globe: Globe, Vote: Vote,
  FileText: FileText, Receipt: Receipt, TrendingUp: TrendingUp, Calculator: Calculator,
  Passport: BookOpen, Utensils: Utensils, Building2: Building2, Newspaper: Newspaper,
  Laptop: Laptop, Building: Building, Award: Award, Store: Store,
  Signature: Signature, Home: Home, FileCheck: FileCheck, Map: Map,
  LandPlot: LandPlot, Archive: Archive, Shield: Shield, Heart: Heart,
  FileSignature: FileSignature, Users: Users, Factory: Factory, Scroll: Scroll, Gavel: Gavel
}

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || FileText
  const category = categoryConfig[service.category] || { icon: '📌', color: 'bg-gray-100 text-gray-700' }

  return (
    <Link to={`/services/${service.id}`} className="block">
      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold group h-full">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
              <h3 className="font-bold text-navy text-base group-hover:text-gold transition-colors line-clamp-1">
                {service.name}
              </h3>
              <span className="text-gold font-bold text-sm whitespace-nowrap">{service.price}</span>
            </div>
            <p className="text-gray-500 text-xs mb-2 line-clamp-2">{service.description}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={12} /> {service.processingTime}</span>
              <span className="flex items-center gap-1"><FileQuestion size={12} /> {service.documents?.length || 0} docs</span>
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
          <span className="text-gold text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details <ChevronRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredServices, setFilteredServices] = useState(ALL_SERVICES_LIST)
  const categories = ['all', ...Object.keys(categoryConfig)]

  useEffect(() => {
    let filtered = ALL_SERVICES_LIST
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(s => s.category === activeCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredServices(filtered)
  }, [activeCategory, searchTerm])

  const totalServices = ALL_SERVICES_LIST.length

  const handleWhatsAppInquiry = (serviceName) => {
    sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 
      `Hello Swaraj Enterprises! I'm interested in: ${serviceName}. Please share more details.`
    )
  }

  return (
    <>
      <Helmet>
        <title>All Services | Swaraj Enterprises - 29+ Professional Services in Bhiwandi</title>
        <meta name="description" content="Complete list of 29+ professional services including Logistics, GST, ITR, Property Registration, Company Registration, Passport, and more at Swaraj Enterprises Bhiwandi." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gold/15 text-gold border border-gold/30">
            Our Complete Service List
          </div>
          <h1 className="font-syne text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Everything Under <span className="gradient-text">One Roof</span>
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            From logistics consultancy to legal documentation — we provide {totalServices}+ professional services in Bhiwandi & Thane region.
          </p>
          
          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-gold/30 text-white placeholder-white/50 focus:outline-none focus:border-gold"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          
          {/* Category Tabs - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto pb-3 mb-8 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-navy text-gold border border-gold shadow-md'
                      : 'bg-white text-navy border border-gold/30 hover:border-gold'
                  }`}
                >
                  {category === 'all' ? `All (${totalServices})` : category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-5 flex-wrap gap-2">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-bold text-navy">{filteredServices.length}</span> of {totalServices} services
            </p>
            <button 
              onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I need help with selecting a service.')}
              className="text-gold text-sm font-semibold flex items-center gap-1"
            >
              <Phone size={14} /> Need help? Chat with us
            </button>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <div className="text-5xl mb-3">🔍</div>
              <p className="text-gray-500">No services found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-3 text-gold font-semibold"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Consultation CTA */}
          <div className="mt-12 rounded-2xl p-6 md:p-8 text-center bg-gradient-to-r from-navy to-navy-dark border border-gold/30">
            <h3 className="font-syne text-xl md:text-2xl font-bold text-white mb-2">
              Need Help Choosing a Service?
            </h3>
            <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
              Our experts will guide you through the process and recommend the best solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I need help choosing a service.')}
                className="px-6 py-2.5 rounded-xl font-bold bg-gold text-navy hover:bg-gold-dark transition"
              >
                💬 WhatsApp for Free Consultation
              </button>
              <Link
                to="/appointment"
                className="px-6 py-2.5 rounded-xl font-bold border-2 border-gold text-gold hover:bg-gold/10 transition text-center"
              >
                📅 Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services