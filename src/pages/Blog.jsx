import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import { BLOG_ARTICLES, CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'

const Blog = () => {
  const navigate = useNavigate()
  const [selectedArticle, setSelectedArticle] = useState(null)

  const ArticleCard = ({ article }) => (
    <div
      onClick={() => setSelectedArticle(article)}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gold/20 hover:border-gold hover:-translate-y-1 transition-all cursor-pointer"
    >
      <span className="inline-block bg-gold/15 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">{article.tag}</span>
      <h2 className="font-bold text-navy text-lg mb-2 line-clamp-2">{article.title}</h2>
      <p className="text-gray-500 text-sm line-clamp-3">{article.desc}</p>
      <div className="flex justify-between mt-3 text-xs text-gold">
        <span>📅 2025</span>
        <span>⏱️ {article.readTime}</span>
      </div>
    </div>
  )

  const ArticleView = ({ article }) => (
    <div>
      <button onClick={() => setSelectedArticle(null)} className="flex items-center gap-2 text-gold font-semibold mb-4">
        <ArrowLeft size={18} /> Back to Articles
      </button>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  )

  return (
    <>
      <Helmet>
        <title>Legal & Business Articles | Swaraj Enterprises Bhiwandi</title>
        <meta name="description" content="Free articles and guides on GST, ITR, Property Registration, and legal matters in Bhiwandi." />
      </Helmet>

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            📝 Free Guides
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Legal & Business <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Free guides on GST, ITR, property registration, and legal matters.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {!selectedArticle ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_ARTICLES.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center bg-gradient-to-br from-navy to-navy-dark border border-gold/30">
              <h2 className="font-syne text-xl font-bold text-white mb-2">Koi Aur Sawaal Hai?</h2>
              <p className="text-white/70 mb-5 text-sm">WhatsApp ya call karein — humari team aapki madad ke liye tayar hai.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, 'Hello, I need legal help')}
                  className="px-5 py-2.5 rounded-xl font-bold text-sm bg-green-500 text-white hover:bg-green-600 transition"
                >
                  💬 WhatsApp Karen
                </button>
                <button onClick={() => navigate('/faq')} className="px-5 py-2.5 rounded-xl font-bold text-sm border-2 border-gold text-gold hover:bg-gold/10 transition">
                  ❓ FAQ Dekhein
                </button>
              </div>
            </div>
          </>
        ) : (
          <ArticleView article={selectedArticle} />
        )}
      </div>
    </>
  )
}

export default Blog

