import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'
import Toast from '../components/Common/Toast'

const Appointment = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' })
  const [toast, setToast] = useState(null)

  const [availableDates, setAvailableDates] = useState([])
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

  const services = [
    'Property Registration', 'Marriage Registration', 'GST Registration', 'GST Return Filing',
    'Income Tax Return (ITR)', 'Company Registration', 'Shop Act Licence', 'PAN Card',
    'Passport Assistance', 'Digital Signature (DSC)', 'Land Records', 'Legal Advice'
  ]

  useEffect(() => {
    const dates = []
    const today = new Date()
    let added = 0
    let i = 1
    while (added < 5) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      if (d.getDay() !== 0) {
        dates.push({
          date: d,
          display: `${d.toLocaleDateString('en-US', { weekday: 'short' })}, ${d.getDate()} ${d.toLocaleDateString('en-US', { month: 'short' })}`
        })
        added++
      }
      i++
    }
    setAvailableDates(dates)
  }, [])

  const handleSubmit = () => {
    if (!selectedService || !selectedDate || !selectedSlot || !formData.name || !formData.phone) {
      setToast({ message: 'Please fill all required fields', type: 'error' })
      return
    }

    const message = `Hello Swaraj Enterprises! 🙏%0A%0A*New Appointment Request*%0A%0A📋 *Service:* ${encodeURIComponent(selectedService)}%0A📅 *Date:* ${encodeURIComponent(selectedDate.display)}%0A🕐 *Time:* ${encodeURIComponent(selectedSlot)}%0A%0A👤 *Name:* ${encodeURIComponent(formData.name)}%0A📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A📝 *Note:* ${encodeURIComponent(formData.note || '-')}`

    sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, message)
    setToast({ message: 'Appointment requested! We will confirm within 30 minutes.', type: 'success' })
    setStep(5)
  }

  const isSameDate = (d1, d2) => {
    if (!d1 || !d2) return false
    return d1.getTime() === d2.getTime()
  }

  return (
    <>
      <Helmet>
        <title>Book Appointment | Swaraj Enterprises - Bhiwandi</title>
        <meta name="description" content="Book appointment for Property Registration, GST, ITR, Legal Services at Swaraj Enterprises Bhiwandi." />
      </Helmet>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            📅 Book a Visit
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Book an <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose your preferred date and time. We'll confirm your appointment via WhatsApp within 30 minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-white/60">🕘 Mon–Sat: 9:00 AM – 7:00 PM</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/60">📍 Old Jakat Naka, Bhiwandi</span>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Step 1: Service */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-navy text-center mb-6">Select Service</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => { setSelectedService(service); setStep(2) }}
                    className="p-3 rounded-xl border-2 border-gray-200 text-left hover:border-gold transition-all"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-navy text-center mb-6">Select Date</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {availableDates.map((date, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedDate(date); setStep(3) }}
                    className={`p-3 rounded-xl text-center border-2 transition-all ${
                      isSameDate(selectedDate?.date, date.date)
                        ? 'border-gold bg-navy text-gold'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    <div className="text-xs font-bold text-gold uppercase">{date.display.split(',')[0]}</div>
                    <div className="text-xl font-bold">{date.display.split(',')[1]?.split(' ')[1]}</div>
                    <div className="text-xs text-gray-500">{date.display.split(',')[1]?.split(' ')[2]}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-6 text-gold font-semibold">← Back</button>
            </div>
          )}

          {/* Step 3: Time */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-navy text-center mb-6">Select Time Slot</h2>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => { setSelectedSlot(slot); setStep(4) }}
                    className={`p-3 rounded-xl text-center border-2 transition-all ${
                      selectedSlot === slot
                        ? 'border-gold bg-navy text-gold'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="mt-6 text-gold font-semibold">← Back</button>
            </div>
          )}

          {/* Step 4: Details */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-navy text-center mb-6">Your Details</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
                <textarea
                  placeholder="Note (Optional)"
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
              </div>

              <div className="mt-6 p-5 rounded-xl bg-gold/5 border border-gold/20">
                <h3 className="font-bold text-navy mb-2">Appointment Summary</h3>
                <p className="text-sm"><span className="text-gray-500">Service:</span> {selectedService}</p>
                <p className="text-sm"><span className="text-gray-500">Date:</span> {selectedDate?.display}</p>
                <p className="text-sm"><span className="text-gray-500">Time:</span> {selectedSlot}</p>
                <p className="text-sm"><span className="text-gray-500">Name:</span> {formData.name || '-'}</p>
                <p className="text-sm"><span className="text-gray-500">Phone:</span> {formData.phone || '-'}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(3)} className="btn-secondary flex-1">← Back</button>
                <button onClick={handleSubmit} className="btn-primary flex-1">Confirm →</button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === 5 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="font-syne text-2xl font-bold text-green-600 mb-3">Appointment Requested!</h2>
              <p className="text-gray-600 mb-6">Your appointment request has been sent via WhatsApp. We'll confirm within 30 minutes.</p>
              <button onClick={() => navigate('/')} className="btn-primary">← Back to Home</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Appointment

