import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Star } from 'lucide-react'
import { TESTIMONIALS, CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const Testimonials = () => {
  const navigate = useNavigate()
  const stats = [
    { value: '5000+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '4.9', label: 'Average Rating', suffix: '⭐' }
  ]

  return (
    <>
      <Helmet>
        <title>Client Reviews | Swaraj Enterprises - Best Advocate in Bhiwandi</title>
        <meta name="description" content="Real client reviews for Swaraj Enterprises - Property Registration, GST, ITR, Legal Services in Bhiwandi. 5000+ happy clients, 4.9⭐ rating." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            ⭐ Client Reviews
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real feedback from 5000+ happy clients. Your trust is our biggest achievement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-black font-syne text-gold">{stat.value}</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{stat.label} {stat.suffix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20 hover:border-gold hover:-translate-y-1 transition-all">
                <div className="flex gap-1 mb-3 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="pt-3 border-t border-gold/20">
                  <p className="font-bold text-navy text-sm">{review.name}</p>
                  <p className="text-gold text-xs">{review.service} • {review.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl p-8 text-center bg-gradient-to-br from-navy to-navy-dark border border-gold/30">
            <h2 className="font-syne text-xl font-bold text-white mb-3">Hamare Client Hain? Review Dijiye!</h2>
            <p className="text-white/70 mb-5 max-w-md mx-auto">Aapka feedback dusre logon ki madad karta hai.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I want to share my feedback about your service.')}
                className="px-6 py-3 rounded-xl font-bold bg-gold text-navy hover:bg-gold-dark transition"
              >
                💬 Share on WhatsApp
              </button>
              <button onClick={() => navigate('/appointment')} className="px-6 py-3 rounded-xl font-bold border-2 border-gold text-gold hover:bg-gold/10 transition">
                📅 Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials

