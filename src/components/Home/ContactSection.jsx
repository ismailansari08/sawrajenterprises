import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'
import { sendWhatsAppMessage } from '../../utils/helpers'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-0.5 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-wider">Visit Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Office</h2>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="bg-gold/15 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base md:text-lg">Address</h3>
                  <p className="text-gray-600 text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-gold/15 p-3 rounded-xl flex-shrink-0">
                  <Phone className="text-gold w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base md:text-lg">Call / WhatsApp</h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Suyog: {CONTACT_INFO.primaryPhone}<br />
                    Ismail: {CONTACT_INFO.secondaryPhone}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-5 rounded-2xl bg-navy/5 flex justify-between items-center flex-wrap gap-3">
              <div>
                <span className="font-bold text-navy text-sm md:text-base">Urgent Legal Matter?</span>
                <p className="text-xs text-gray-500">WhatsApp 24/7</p>
              </div>
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I need urgent legal help.')}
                className="px-5 py-2 rounded-xl bg-gold text-navy font-bold text-sm hover:bg-gold-dark transition"
              >
                Chat Now
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gold/20 hover:ring-gold/40 transition-all duration-500">
            <iframe
              src={CONTACT_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '350px' }}
              allowFullScreen
              loading="lazy"
              title="Swaraj Enterprises Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection