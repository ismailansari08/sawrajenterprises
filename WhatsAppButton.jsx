import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'
import { sendWhatsAppMessage, trackEvent } from '../../utils/helpers'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const quickOptions = [
    { label: '🏠 Property Registration', message: 'Property Registration' },
    { label: '📊 GST / ITR', message: 'GST Help' },
    { label: '⚖️ Legal Advice', message: 'Legal Advice' },
    { label: '📋 Documents Help', message: 'Document Help' }
  ]

  const handleQuickOption = (message) => {
    trackEvent('WhatsApp', 'click', message)
    sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, `Hello Swaraj Enterprises! I need help with: ${message}`)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 animate-slideUp">
          {quickOptions.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickOption(opt.message)}
              className="bg-white text-navy border-2 border-gold/40 px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:bg-navy hover:text-gold hover:border-gold transition-all whitespace-nowrap"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="WhatsApp Support"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring opacity-50" />
        {isOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
      </button>
    </div>
  )
}

export default WhatsAppButton