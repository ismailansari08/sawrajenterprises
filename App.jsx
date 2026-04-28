import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollProgress from './components/Layout/ScrollProgress';
import WhatsAppButton from './components/Common/WhatsAppButton';

/**
 * Root Layout Component
 * Wraps all pages with persistent UI elements.
 */
function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <WhatsAppButton phoneNumber="91XXXXXXXXXX" />
      <Footer />
    </div>
  );
}

export default App;