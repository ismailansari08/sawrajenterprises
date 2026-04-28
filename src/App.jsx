import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import ScrollProgress from './components/Layout/ScrollProgress'
import WhatsAppButton from './components/Common/WhatsAppButton'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Documents = lazy(() => import('./pages/Documents'))
const Fees = lazy(() => import('./pages/Fees'))
const Appointment = lazy(() => import('./pages/Appointment'))
const Blog = lazy(() => import('./pages/Blog'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
)

// Page transition wrapper
const PageTransition = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.style.opacity = '0'
      main.style.transform = 'translateY(12px)'
      requestAnimationFrame(() => {
        main.style.transition = 'opacity 0.35s ease-out, transform 0.35s ease-out'
        main.style.opacity = '1'
        main.style.transform = 'translateY(0)'
      })
    }
  }, [location.pathname])

  return children
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1 pt-16">
        <Suspense fallback={<PageLoader />}>
          <PageTransition>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
