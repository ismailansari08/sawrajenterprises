import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Swaraj Enterprises Bhiwandi</title>
        <meta name="description" content="Contact Swaraj Enterprises for legal, tax, and business services in Bhiwandi and Thane region." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            📞 Get In Touch
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="gradient-text">Swaraj Enterprises</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? Reach out to us — we are here to help!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 flex items-start gap-4">
              <div className="bg-navy/10 p-3 rounded-xl">
                <Phone className="text-navy w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Phone</h3>
                <a href={`tel:+91${CONTACT_INFO.primaryPhone}`} className="text-gold font-semibold hover:underline block">
                  +91 {CONTACT_INFO.primaryPhone}
                </a>
                <a href={`tel:+91${CONTACT_INFO.secondaryPhone}`} className="text-gray-500 text-sm hover:text-gold block mt-1">
                  +91 {CONTACT_INFO.secondaryPhone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 flex items-start gap-4">
              <div className="bg-navy/10 p-3 rounded-xl">
                <Mail className="text-navy w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gold font-semibold hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 flex items-start gap-4">
              <div className="bg-navy/10 p-3 rounded-xl">
                <MapPin className="text-navy w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Office Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 flex items-start gap-4">
              <div className="bg-navy/10 p-3 rounded-xl">
                <Clock className="text-navy w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-1">Office Hours</h3>
                <p className="text-gray-600 text-sm">Mon – Sat: 10:00 AM – 7:00 PM</p>
                <p className="text-gray-400 text-xs mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map / WhatsApp CTA */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gold/20 overflow-hidden h-80">
              <iframe
                src={CONTACT_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Swaraj Enterprises Location"
              />
            </div>

            <div className="bg-gold/10 rounded-2xl p-6 border border-gold/30 text-center">
              <h3 className="font-bold text-navy text-lg mb-2">Prefer WhatsApp?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Send us a message on WhatsApp for quick responses and document sharing.
              </p>
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.primaryPhone, 'Hello Swaraj Enterprises! I would like to know more about your services.')}
                className="btn-primary w-full"
              >
                📲 Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

