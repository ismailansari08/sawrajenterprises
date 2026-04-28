import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import router from './router'
import './styles/index.css'

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-navy flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gold font-bold">Loading Swaraj Enterprises...</p>
    </div>
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
)