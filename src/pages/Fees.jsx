import { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { FEES_DATA, CONTACT_INFO, ALL_SERVICES } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const FeeSection = ({ title, icon, items, delay }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="mb-12 opacity-0 translate-y-5 transition-all duration-500">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-3xl">{icon}</span>
        <h2 className="font-syne text-2xl font-bold text-navy">{title}</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-gold/20 hover:border-gold hover:-translate-y-1 transition-all">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h3 className="font-bold text-gray-900">{item.name}</h3>
              <span className="bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Fees = () => {
  const sections = [
    { title: '🚚 Logistics & Online Services', icon: '🚚', items: FEES_DATA.logistics },
    { title: '📊 GST & Tax Services', icon: '📊', items: FEES_DATA.tax },
    { title: '🏢 Business & Company Registrations', icon: '🏢', items: FEES_DATA.registration },
    { title: '⚖️ Legal & Property Services', icon: '⚖️', items: FEES_DATA.legal },
    { title: '📜 Licenses & Permits', icon: '📜', items: FEES_DATA.licenses },
    { title: '💻 Digital & Online Services', icon: '💻', items: FEES_DATA.digital }
  ]

  const totalServices = ALL_SERVICES.length

  return (
    <>
      <Helmet>
        <title>Service Fees | Swaraj Enterprises - Transparent Pricing Bhiwandi</title>
        <meta name="description" content={`Transparent service fees for ${totalServices}+ services including GST, ITR, Property Registration, Company Registration at Swaraj Enterprises Bhiwandi.`} />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            💰 Transparent Pricing
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Service <span className="gradient-text">Fees</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Starting prices for all our {totalServices}+ services. Final charges may vary based on complexity.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gold/15 text-gold border border-gold/30">
            ⚠️ Government fees (stamp duty, registration charges) are extra
          </div>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {sections.map((section, idx) => (
            <FeeSection key={idx} {...section} delay={idx * 0.1} />
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-3xl p-8 text-center bg-gradient-to-br from-navy to-navy-dark border border-gold/30">
            <h2 className="font-syne text-2xl font-extrabold text-white mb-3">Need Exact Pricing?</h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              Contact us with your requirements and we'll give you an exact quote. First consultation is free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I want to know the fees for a service.')}
                className="px-6 py-3 rounded-xl font-bold bg-gold text-navy hover:bg-gold-dark transition"
              >
                💬 WhatsApp Us
              </button>
              <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="px-6 py-3 rounded-xl font-bold border-2 border-gold text-gold text-center hover:bg-gold/10 transition">
                📞 Call: {CONTACT_INFO.primaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Fees