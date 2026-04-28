import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Clock, FileText, CheckCircle, Phone, Calendar } from 'lucide-react'
import { ALL_SERVICES_LIST } from './Services'
import { CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  
  const service = ALL_SERVICES_LIST.find(s => s.id === serviceId)
  
  if (!service) {
    return (
      <div className="pt-24 pb-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-syne text-3xl font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const handleWhatsAppInquiry = () => {
    sendWhatsAppMessage(
      CONTACT_INFO.secondaryPhone,
      `Hello Swaraj Enterprises! I'm interested in: ${service.name}. Please share more details.`
    )
  }

  return (
    <>
      <Helmet>
        <title>{service.name} | Swaraj Enterprises - Bhiwandi</title>
        <meta name="description" content={`${service.name} services at Swaraj Enterprises, Bhiwandi. ${service.description}`} />
      </Helmet>

      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6">
            <ArrowLeft size={18} /> Back to Services
          </Link>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-gold/15 text-gold px-4 py-2 rounded-full text-sm font-bold border border-gold/30">
              💰 {service.price}
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
              <Clock size={14} /> {service.processingTime}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Documents Required */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-gold" size={20} />
              <h2 className="font-bold text-navy text-lg">Documents Required</h2>
            </div>
            <div className="space-y-3">
              {service.documents?.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-gold" size={20} />
              <h2 className="font-bold text-navy text-lg">What We Offer</h2>
            </div>
            <div className="space-y-3">
              {service.features?.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-gold shrink-0">✦</span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl p-8 text-center bg-gradient-to-br from-navy to-navy-dark border border-gold/30">
          <h2 className="font-syne text-2xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Contact us now for a free consultation. We'll guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppInquiry}
              className="px-6 py-3 rounded-xl font-bold bg-gold text-navy hover:bg-gold-dark transition flex items-center justify-center gap-2"
            >
              <Phone size={18} /> WhatsApp Inquiry
            </button>
            <Link
              to="/appointment"
              className="px-6 py-3 rounded-xl font-bold border-2 border-gold text-gold hover:bg-gold/10 transition flex items-center justify-center gap-2"
            >
              <Calendar size={18} /> Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetail

