import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Documents from './pages/Documents'
import Fees from './pages/Fees'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:serviceId', element: <ServiceDetail /> },
      { path: 'documents', element: <Documents /> },
      { path: 'fees', element: <Fees /> },
      { path: 'appointment', element: <Appointment /> },
      { path: 'blog', element: <Blog /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
])