import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] min-w-[280px] md:min-w-[320px] max-w-[90vw] animate-slideUp`}>
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl border-l-4 ${
        type === 'success' 
          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-l-emerald-800'
          : 'bg-gradient-to-r from-rose-700 to-rose-800 text-white border-l-rose-900'
      }`}>
        {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
        <p className="font-semibold text-sm flex-1">{message}</p>
        <button onClick={onClose} className="opacity-70 hover:opacity-100">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default Toast

