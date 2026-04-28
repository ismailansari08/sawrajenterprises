import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Fees from './pages/Fees';
import Appointment from './pages/Appointment';
import Services from './src/pages/Services';
import Blog from './src/pages/Blog';
import FAQ from './src/pages/FAQ';
import Testimonials from './src/pages/Testimonials';
import Contact from './src/pages/Contact';

/**
 * Centralized Router Configuration
 * Handles top-level navigation and page mapping.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'documents',
        element: <Documents />,
      },
      {
        path: 'fees',
        element: <Fees />,
      },
      {
        path: 'appointment',
        element: <Appointment />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;