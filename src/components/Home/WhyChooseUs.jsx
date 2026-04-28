import { useRef } from 'react'
import { ShieldCheck, FileText, MessageSquare, Phone } from 'lucide-react'
import { WHY_CHOOSE_US, CONTACT_INFO } from '../../utils/constants'
import { sendWhatsAppMessage } from '../../utils/helpers'

const iconMap = {
  ShieldCheck: ShieldCheck,
  FileText: FileText,
  MessageSquare: MessageSquare
}

const WhyChooseUs = () => {
  const handleWhatsAppSubmit = () => {
    sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello Swaraj Enterprises! I would like a free consultation.')
  }

  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-0.5 bg-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-wider">Why Swaraj</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Swaraj Enterprises?</span>
            </h2>
            
            <div className="space-y-5 mt-8">
              {WHY_CHOOSE_US.map((item, idx) => {
                const Icon = iconMap[item.icon] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-gold/15 p-3 rounded-xl flex-shrink-0">
                      <Icon className="text-gold w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base md:text-lg">{item.title}</h3>
                      <p className="text-gold/80 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card p-6 md:p-8 bg-white/10">
            <h3 className="font-syne text-xl md:text-2xl font-bold text-gold mb-5">Get Free Consultation</h3>
            <form id="consultationForm" className="space-y-4">
              <input
                type="text"
                id="consultName"
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-white/10 border border-gold/30 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                required
              />
              <input
                type="tel"
                id="consultPhone"
                placeholder="Phone Number"
                className="w-full p-3 rounded-xl bg-white/10 border border-gold/30 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                required
              />
              <select
                id="consultService"
                className="w-full p-3 rounded-xl bg-white/10 border border-gold/30 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              >
                <option value="" className="text-navy">Select Service</option>
                <option value="Legal Advice" className="text-navy">Legal Advice</option>
                <option value="GST/ITR" className="text-navy">GST/ITR</option>
                <option value="Property" className="text-navy">Property</option>
              </select>
              <textarea
                id="consultMessage"
                rows="3"
                placeholder="Requirement"
                className="w-full p-3 rounded-xl bg-white/10 border border-gold/30 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full py-3 rounded-xl font-bold bg-gold text-navy hover:bg-gold-dark transition-all"
              >
                📲 Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs