export const CONTACT_INFO = {
  primaryPhone: '9960586058',
  secondaryPhone: '8424070609',
  email: 'contact@swarajenterprises.in',
  address: '465/7 Gala No 11, Sairaj Apartment, Opp. SBI, Old Jakat Naka, Bhiwandi, Maharashtra 421308',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0!2d73.064!3d19.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf0000000001%3A0x0!2sSairaj+Apartment%2C+Old+Jakat+Naka%2C+Bhiwandi%2C+Maharashtra+421308!5e0!3m2!1sen!2sin!4v1700000000000'
}

export const SERVICE_CATEGORIES = [
  {
    title: 'Legal & Property Services',
    icon: 'Gavel',
    description: 'Expert legal consultation and property-related documentation.',
    processingTime: '3-7 Days',
    items: [
      'Property Registration',
      'Land Record Management',
      'Revenue Consonant',
      'Bhumiabhlek',
      'Cast Validity Documents',
      'Marriage Registration',
      'Leave and Licence Agreements',
      'High Court Advocacy'
    ]
  },
  {
    title: 'Business & Tax Compliance',
    icon: 'Briefcase',
    description: 'Complete solutions for starting and managing your business.',
    processingTime: '5-10 Days',
    items: [
      'GST Registration & Filing',
      'Income Tax Return (ITR)',
      'Company Registration',
      'Shop Act Licence (Gumasta)',
      'Trade Mark & ISO Certification',
      'Food & Labour Licences',
      'Pollution Control Board (MPCB)',
      'Import Export Code (IEC)'
    ]
  },
  {
    title: 'Digital & Online Services',
    icon: 'Globe',
    description: 'Swift processing of essential government documents.',
    processingTime: '2-5 Days',
    items: [
      'PAN Card (New/Correction)',
      'Passport Seva',
      'Aaple Sarkar Services',
      'Digital Signature (DSC)',
      'E-Gazette Services',
      'Election Management',
      'Logistics Business Consultancy',
      'Online Form Filling'
    ]
  }
]

export const TRUST_BADGES = [
  { icon: 'Award', text: '10+ Years Experience' },
  { icon: 'Scale', text: 'High Court Practice' },
  { icon: 'Users', text: '5000+ Happy Clients' },
  { icon: 'TrendingUp', text: '99% Success Rate' }
]

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/documents', label: 'Docs' },
  { href: '/fees', label: 'Fees' },
  { href: '/blog', label: 'Articles' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/appointment', label: 'Book' }
]

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: 'Legal Accuracy',
    description: '100% error-free documentation & legal backing.'
  },
  {
    icon: 'FileText',
    title: 'One-Stop Solution',
    description: 'All services under one roof – save time & money.'
  },
  {
    icon: 'MessageSquare',
    title: '24/7 WhatsApp Support',
    description: 'Emergency assistance anytime, even on holidays.'
  }
]

export const FEES_DATA = {
  legal: [
    { name: 'Property Registration', price: '₹2,000+', note: 'Stamp duty & registration charges extra' },
    { name: 'Marriage Registration', price: '₹1,500+', note: 'Govt fees extra' },
    { name: 'High Court / Legal Advice', price: '₹500+', note: 'Varies by case complexity' },
    { name: 'Land Records (7/12, 8A)', price: '₹500+', note: 'Per document basis' }
  ],
  business: [
    { name: 'GST Registration', price: '₹1,500+' },
    { name: 'GST Return Filing', price: '₹500/month' },
    { name: 'ITR Filing – Salaried', price: '₹499+' },
    { name: 'ITR Filing – Business', price: '₹1,500+' },
    { name: 'Company Registration (Pvt Ltd)', price: '₹8,000+' },
    { name: 'Shop Act Licence (Gumasta)', price: '₹800+' }
  ],
  digital: [
    { name: 'PAN Card (New)', price: '₹150+' },
    { name: 'Passport Assistance', price: '₹500+' },
    { name: 'Digital Signature (DSC)', price: '₹1,200+' },
    { name: 'Aaple Sarkar Services', price: '₹200+' },
    { name: 'Udyam Registration', price: '₹500+' },
    { name: 'Aadhaar / Voter ID Help', price: '₹100+' }
  ]
}

export const TESTIMONIALS = [
  {
    name: 'Ramesh Patil',
    location: 'Bhiwandi',
    text: 'Property registration mein bahut help mili. Sab documents ready karwa diye aur registration ke din seedha office le gaye. Bahut smooth process tha.',
    rating: 5,
    service: 'Property Registration'
  },
  {
    name: 'Mohammed Shaikh',
    location: 'Bhiwandi',
    text: 'GST registration bahut jaldi ho gayi — sirf 4 din mein! Fees bhi reasonable thi. Ab monthly return bhi yahi se file karta hun.',
    rating: 5,
    service: 'GST Registration'
  },
  {
    name: 'Priya Deshmukh',
    location: 'Thane',
    text: 'ITR file karna tha par samajh nahi aa raha tha. Yahan se bahut achhe se samjhaya aur file kiya. Refund bhi jaldi aaya.',
    rating: 5,
    service: 'ITR Filing'
  }
]

export const BLOG_ARTICLES = [
  {
    id: 'gst',
    tag: '📊 GST',
    title: 'GST Registration Kaise Karein? — Complete Guide',
    desc: 'Step-by-step guide for GST registration. Documents required, process, timeline — sab kuch Hindi mein.',
    readTime: '5 min',
    content: `<h1>GST Registration Kaise Karein?</h1><p>GST (Goods and Services Tax) ek tax hai jo goods aur services pe lagta hai. July 2017 se GST aaya.</p><h2>GST Registration Kab Zaroori Hai?</h2><ul><li>Annual turnover ₹20 lakh (services) ya ₹40 lakh (goods) se zyada</li><li>Interstate supply karte hain</li><li>E-commerce platform pe sell karte hain</li></ul>`
  },
  {
    id: 'itr',
    tag: '💰 ITR',
    title: 'ITR File Karna Kyon Zaroori Hai? — Poori Jankari',
    desc: 'Income Tax Return kya hai, kise file karna chahiye, last date kya hai — simple bhasha mein samjhein.',
    readTime: '4 min',
    content: `<h1>ITR File Karna Kyon Zaroori Hai?</h1><p>ITR ek form hai jisme aap batate hain ki kitna paisa kamaya aur kitna tax diya.</p><h2>ITR File Karne Ke Fayde</h2><ul><li>Refund milta hai</li><li>Loan approval asaan</li><li>Visa mein help</li></ul>`
  },
  {
    id: 'property',
    tag: '🏠 Property',
    title: 'Bhiwandi Mein Property Registration — Poori Process',
    desc: 'Maharashtra mein property registration kaise hoti hai — stamp duty, documents, fees, time — sab kuch ek jagah.',
    readTime: '6 min',
    content: `<h1>Bhiwandi Mein Property Registration</h1><p>Stamp Duty: Maharashtra mein 5% (purush), 4% (mahila). Plus 1% registration fees.</p><h2>Documents Required</h2><ul><li>Sale Deed draft</li><li>Stamp duty payment receipt</li><li>PAN & Aadhaar of parties</li><li>Witnesses with ID proof</li></ul>`
  }
]

export const FAQS = [
  { cat: 'property', q: 'Property registration mein kitna time lagta hai?', a: 'Normal registration 1-3 working days mein hoti hai. Pehle stamp duty pay karni hoti hai, phir Sub-Registrar ke paas jaake registration hoti hai.' },
  { cat: 'property', q: 'Property registration ke liye stamp duty kitni hoti hai?', a: 'Maharashtra mein stamp duty generally property value ka 5-6% hoti hai (women ke naam par 1% kam). Plus 1% registration fees alag se hoti hai.' },
  { cat: 'gst', q: 'GST registration kab zaroor hai?', a: 'Agar aapka annual turnover 20 lakh (services) ya 40 lakh (goods) se zyada hai toh GST registration mandatory hai.' },
  { cat: 'gst', q: 'GST registration kitne din mein hoti hai?', a: 'Documents sahi hone par 3-7 working days mein GST registration complete ho jaati hai. GSTIN aapko email pe milega.' },
  { cat: 'itr', q: 'ITR file karne ki last date kab hoti hai?', a: 'Salaried individuals ke liye usually July 31. Business owners ke liye (audit required) October 31.' },
  { cat: 'legal', q: 'Affidavit kya hota hai aur kab chahiye?', a: 'Affidavit ek sworn statement hota hai jo notary ke saamne sign kiya jaata hai. Income proof, name change, residence proof ke liye use hota hai.' }
]