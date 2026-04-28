import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, Search } from 'lucide-react'
import { FAQS, CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const FAQ = () => {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [openItems, setOpenItems] = useState({})

  const categories = [
    { id: 'all', label: 'All', icon: '📌' },
    { id: 'property', label: '🏠 Property', icon: '🏠' },
    { id: 'gst', label: '📊 GST', icon: '📊' },
    { id: 'itr', label: '💰 ITR', icon: '💰' },
    { id: 'legal', label: '⚖️ Legal', icon: '⚖️' }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = activeCat === 'all' || faq.cat === activeCat
    const matchesSearch = search === '' || 
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      <Helmet>
        <title>FAQ | Swaraj Enterprises - Common Questions Answered | Bhiwandi</title>
        <meta name="description" content="Frequently asked questions about legal services, GST, ITR, property registration in Bhiwandi." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            ❓ Common Questions
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Quick answers to the most common questions our clients ask.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search your question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gold/30 focus:border-gold focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCat === cat.id
                    ? 'bg-navy text-gold border border-gold'
                    : 'bg-white text-navy border border-gold/30 hover:border-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gold/20 overflow-hidden">
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gold transition-transform ${openItems[idx] ? 'rotate-180' : ''}`}
                  />
                </button>
                {openItems[idx] && (
                  <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    <button
                      onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, `Hello, I have a question about: ${faq.q}`)}
                      className="inline-flex items-center gap-2 mt-3 text-gold font-semibold text-sm"
                    >
                      Ask this on WhatsApp →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-3">🔍</div>
              <p className="text-xl font-medium text-navy">No results found</p>
              <p className="text-gray-500 mt-2">Try a different search or <button onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I have a question')} className="text-gold font-bold">ask us on WhatsApp</button></p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 rounded-2xl p-8 text-center bg-gradient-to-br from-navy to-navy-dark border border-gold/30">
            <div className="text-4xl mb-3">💬</div>
            <h2 className="font-syne text-xl font-bold text-white mb-2">Still have a question?</h2>
            <p className="text-white/70 mb-5">Our team is available on WhatsApp 24/7 for urgent queries.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I have a question.')}
                className="px-6 py-3 rounded-xl font-bold bg-green-500 text-white hover:bg-green-600 transition"
              >
                💬 WhatsApp Now
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

export default FAQ