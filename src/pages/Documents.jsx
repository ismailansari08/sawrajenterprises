import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FileText, Upload, CheckCircle, X } from 'lucide-react'
import { CONTACT_INFO } from '../utils/constants'
import { sendWhatsAppMessage } from '../utils/helpers'
import Toast from '../components/Common/Toast'

const Documents = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' })
  const [toast, setToast] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const services = [
    { id: 'property', icon: '🏠', name: 'Property Registration', note: 'All documents must be original + 2 photocopies.' },
    { id: 'gst', icon: '📊', name: 'GST Registration', note: 'Business address proof required.' },
    { id: 'itr', icon: '💰', name: 'Income Tax Return (ITR)', note: 'Last date July 31 each year.' },
    { id: 'company', icon: '🏢', name: 'Company Registration', note: 'DIN and DSC required.' },
    { id: 'shopact', icon: '🏪', name: 'Shop Act Licence', note: 'Mandatory for all shops in Maharashtra.' },
    { id: 'pan', icon: '🪪', name: 'PAN Card', note: 'New or correction services available.' },
    { id: 'passport', icon: '🛂', name: 'Passport Seva', note: 'Fresh or renewal application.' },
    { id: 'food', icon: '🍔', name: 'Food Licence (FSSAI)', note: 'Required for food businesses.' },
    { id: 'iec', icon: '🌍', name: 'Import Export Code (IEC)', note: 'Required for import/export businesses.' },
    { id: 'trademark', icon: '⭐', name: 'Trade Mark Registration', note: 'Protect your brand identity.' },
    { id: 'pollution', icon: '🏭', name: 'Pollution Control Board (MPCB)', note: 'NOC required for industries.' },
    { id: 'labour', icon: '👷', name: 'Labour Contractor Licence', note: 'Required for labour contractors.' }
  ]

  const documentsByService = {
    property: ['Aadhaar Card (Buyer & Seller)', 'PAN Card (Buyer & Seller)', 'Passport Size Photos (2 each)', 'Sale Deed Draft', 'Property Tax Receipt'],
    gst: ['PAN Card (Proprietor)', 'Aadhaar Card (Proprietor)', 'Business Address Proof', 'Bank Account Statement', 'Passport Size Photo'],
    itr: ['PAN Card', 'Aadhaar Card', 'Form 16 (For Salaried)', 'Bank Account Details', 'Investment Proofs (80C, etc.)'],
    company: ['PAN Card (All Directors)', 'Aadhaar Card (All Directors)', 'Address Proof', 'Rent Agreement/NOC', 'Digital Signature'],
    shopact: ['Aadhaar Card', 'PAN Card', 'Shop Address Proof', 'Passport Size Photo', 'Rent Agreement'],
    pan: ['Aadhaar Card', 'Proof of Address (if different)', 'Passport Size Photo', 'Date of Birth Proof'],
    passport: ['Aadhaar Card', 'Address Proof', 'Date of Birth Proof', 'Passport Size Photos (2)', 'Previous Passport (if renewal)'],
    food: ['PAN Card', 'Aadhaar Card', 'Shop Address Proof', 'Food Safety Management Plan', 'Passport Size Photos'],
    iec: ['PAN Card', 'Aadhaar Card', 'Bank Account Details', 'Address Proof', 'GST Certificate (if applicable)'],
    trademark: ['Logo/Brand Name', 'Business Registration Proof', 'User Affidavit', 'Power of Attorney', 'Identity Proof'],
    pollution: ['Factory Address Proof', 'PAN Card', 'Aadhaar Card', 'Project Report', 'Site Plan'],
    labour: ['PAN Card', 'Aadhaar Card', 'Business Registration', 'Address Proof', 'Bank Account Details']
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service)
  }

  const handleFileUpload = (files) => {
    const validFiles = Array.from(files).filter(f => f.size <= 10 * 1024 * 1024)
    setUploadedFiles([...uploadedFiles, ...validFiles])
    setToast({ message: `${validFiles.length} file(s) added`, type: 'success' })
  }

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFileUpload(e.dataTransfer.files)
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      setToast({ message: 'Please enter your name and phone number', type: 'error' })
      return
    }

    const fileList = uploadedFiles.length 
      ? uploadedFiles.map(f => `• ${f.name}`).join('%0A')
      : '• No files uploaded'

    const message = `Hello Swaraj Enterprises! 🙏%0A%0A*New Document Submission*%0A*Service:* ${selectedService.name}%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Note:* ${formData.note || '-'}%0A*Files:*%0A${fileList}`

    sendWhatsAppMessage(CONTACT_INFO.secondaryPhone, message)
    setToast({ message: 'Documents sent successfully! We will contact you soon.', type: 'success' })
    setStep(4)
  }

  return (
    <>
      <Helmet>
        <title>Document Checklist & Upload | Swaraj Enterprises Bhiwandi</title>
        <meta name="description" content="Check required documents and upload them for your legal or business service at Swaraj Enterprises, Bhiwandi." />
      </Helmet>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 text-center bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-gold/15 text-gold border border-gold/30">
            📋 Document Helper
          </div>
          <h1 className="font-syne text-3xl md:text-5xl font-extrabold text-white mb-4">
            Document <span className="gradient-text">Checklist</span> & Upload
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Select your service, check required documents, and send them directly to our office.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">Select Your Service</h2>
              <div className="grid gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      selectedService?.id === service.id
                        ? 'border-gold bg-gold/5'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="font-bold text-navy">{service.name}</h3>
                      <p className="text-gray-500 text-sm">{service.note}</p>
                    </div>
                    {selectedService?.id === service.id && <CheckCircle className="ml-auto text-gold" />}
                  </button>
                ))}
              </div>
              <button
                onClick={() => selectedService && setStep(2)}
                disabled={!selectedService}
                className="w-full mt-8 bg-navy text-white py-3 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-navy-dark transition"
              >
                Next: View Required Documents →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && selectedService && (
            <div>
              <div className="bg-gold/10 p-5 rounded-xl mb-6 border border-gold/20">
                <h3 className="font-bold text-navy text-lg">{selectedService.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{selectedService.note}</p>
              </div>
              <h3 className="font-bold text-lg mb-4 text-navy">Required Documents:</h3>
              <div className="space-y-3 mb-8">
                {documentsByService[selectedService.id]?.map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-800">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1">← Back</button>
                <button onClick={() => setStep(3)} className="btn-primary flex-1">Next: Upload Documents →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && selectedService && (
            <div>
              <h2 className="text-2xl font-bold text-navy text-center mb-6">Upload Your Documents</h2>
              
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  isDragging ? 'border-gold bg-gold/5' : 'border-gray-300 hover:border-gold'
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">Drag & Drop files here or <span className="text-gold font-semibold">click to browse</span></p>
                <p className="text-gray-400 text-xs mt-2">Supported: JPG, PNG, PDF, DOC | Max 10MB each</p>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold text-navy">Uploaded Files:</h4>
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                      <span className="text-sm truncate">{file.name}</span>
                      <button onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
                <textarea
                  placeholder="Additional Note (Optional)"
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full p-3 rounded-xl border focus:border-gold focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 mt-6">
                <button onClick={handleSubmit} className="btn-primary w-full">📲 Send via WhatsApp</button>
                <button onClick={() => setStep(2)} className="btn-secondary w-full">← Back</button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === 4 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="font-syne text-2xl md:text-3xl font-bold text-green-600 mb-3">Request Sent Successfully!</h2>
              <p className="text-gray-600 mb-6">We'll contact you within 4 hours on WhatsApp.</p>
              <button onClick={() => navigate('/')} className="btn-primary">← Back to Home</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Documents

