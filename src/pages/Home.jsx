import { useEffect, lazy, Suspense } from 'react'
import Hero from '../components/Home/Hero'
import Marquee from '../components/Home/Marquee'
import { Helmet } from 'react-helmet-async'

const Stats = lazy(() => import('../components/Home/Stats'))
const Services = lazy(() => import('../components/Home/Services'))
const WhyChooseUs = lazy(() => import('../components/Home/WhyChooseUs'))
const ContactSection = lazy(() => import('../components/Home/ContactSection'))

const SectionSuspense = ({ children }) => (
  <Suspense fallback={<div className="min-h-[200px]" />}>
    {children}
  </Suspense>
)

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Swaraj Enterprises & Legal Solutions",
    "description": "Professional legal consultation and business services in Bhiwandi-Thane region.",
    "url": "https://swarajenterprises.in",
    "telephone": "+919960586058",
    "email": "contact@swarajenterprises.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "465/7 Gala No 11, Sairaj Apartment, Opp. SBI, Old Jakat Naka",
      "addressLocality": "Bhiwandi",
      "addressRegion": "Maharashtra",
      "postalCode": "421308",
      "addressCountry": "IN"
    },
    "priceRange": "₹500 - ₹10,000"
  }

  return (
    <>
      <Helmet>
        <title>Swaraj Enterprises & Legal Solutions | Best Advocate in Bhiwandi | Legal, GST, Property Services</title>
        <meta name="description" content="Swaraj Enterprises - Professional legal consultation in Bhiwandi. Expert services for GST, ITR, Property Registration, and High Court advocacy in Thane region." />
        <meta name="keywords" content="advocate in bhiwandi, legal services bhiwandi, property registration bhiwandi, gst registration thane, itr filing bhiwandi" />
        <link rel="canonical" href="https://swarajenterprises.in" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Hero />
      <Marquee />
      <SectionSuspense>
        <Stats />
      </SectionSuspense>
      <SectionSuspense>
        <Services />
      </SectionSuspense>
      <SectionSuspense>
        <WhyChooseUs />
      </SectionSuspense>
      <SectionSuspense>
        <ContactSection />
      </SectionSuspense>
    </>
  )
}

export default Home