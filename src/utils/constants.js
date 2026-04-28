export const CONTACT_INFO = {
  primaryPhone: '9960586058',
  secondaryPhone: '8424070609',
  email: 'contact@swarajenterprises.in',
  address: '465/7 Gala No 11, Sairaj Apartment, Opp. State Bank of India, Old Jakat Naka, Bhiwandi, District Thane, Maharashtra 421308',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0!2d73.064!3d19.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf0000000001%3A0x0!2sSairaj+Apartment%2C+Old+Jakat+Naka%2C+Bhiwandi%2C+Maharashtra+421308!5e0!3m2!1sen!2sin!4v1700000000000'
}

export const ALL_SERVICES = [
  // LOGISTICS & ONLINE SERVICES
  { title: "Logistics Business Consultancy", category: "Business", icon: "Truck", description: "Expert consultancy for logistics business setup and operations.", processingTime: "5-7 Days", price: "₹1,500+" },
  { title: "PAN Card (पेन कार्ड)", category: "Digital", icon: "IdCard", description: "New PAN card application and correction services.", processingTime: "3-5 Days", price: "₹150+" },
  { title: "Online Services", category: "Digital", icon: "Globe", description: "Various online form filling and application services.", processingTime: "1-3 Days", price: "₹100+" },
  { title: "Election Nomination Form", category: "Legal", icon: "Vote", description: "Election nomination form filling and submission assistance.", processingTime: "2-3 Days", price: "₹500+" },
  
  // GST & TAX
  { title: "GST Registration (GST रिजस्ट्रेशन)", category: "Business", icon: "FileText", description: "Complete GST registration for businesses and professionals.", processingTime: "5-7 Days", price: "₹1,500+" },
  { title: "Goods & Service Tax (GST)", category: "Business", icon: "Receipt", description: "GST return filing, amendments, and compliance.", processingTime: "Monthly", price: "₹500/month" },
  { title: "Income Tax Return (ITR Filing)", category: "Business", icon: "TrendingUp", description: "Income tax return filing for individuals and businesses.", processingTime: "3-5 Days", price: "₹499+" },
  { title: "TDS Return", category: "Business", icon: "Calculator", description: "TDS return filing and compliance services.", processingTime: "3-5 Days", price: "₹500+" },
  
  // GOVERNMENT DOCUMENTS
  { title: "Passport Seva (पासपोर्ट सेवा)", category: "Digital", icon: "Passport", description: "Passport application, renewal, and appointment booking.", processingTime: "5-10 Days", price: "₹500+" },
  { title: "Food Licence (फूड लाइसेंस)", category: "Business", icon: "Utensils", description: "FSSAI food license registration and renewal.", processingTime: "7-10 Days", price: "₹2,000+" },
  { title: "Aaple Sarkar (आपले सरकार सेवा)", category: "Digital", icon: "Building2", description: "Maharashtra government online services portal assistance.", processingTime: "2-5 Days", price: "₹200+" },
  { title: "E-Gazette (ई-गैज़ेट)", category: "Digital", icon: "Newspaper", description: "E-gazette publication for name change, etc.", processingTime: "10-15 Days", price: "₹1,500+" },
  
  // REGISTRATIONS
  { title: "E-Registration", category: "Digital", icon: "Laptop", description: "Online registration services for various documents.", processingTime: "2-4 Days", price: "₹300+" },
  { title: "Company Registration (कंपनी रिजस्ट्रेशन)", category: "Business", icon: "Building", description: "Private Limited, LLP, Partnership, and OPC registration.", processingTime: "10-15 Days", price: "₹8,000+" },
  { title: "Trade Mark & ISO Certification", category: "Business", icon: "Award", description: "Trademark registration and ISO certification services.", processingTime: "15-20 Days", price: "₹5,000+" },
  { title: "Shop Act Licence (शिप एक्ट लाइसेंस - गुणस्तान)", category: "Business", icon: "Store", description: "Shop & Establishment Act license for businesses.", processingTime: "5-7 Days", price: "₹800+" },
  { title: "Digital Signature", category: "Digital", icon: "Signature", description: "Class 2 and Class 3 Digital Signature Certificates.", processingTime: "1-2 Days", price: "₹1,200+" },
  
  // PROPERTY & LEGAL
  { title: "Property Registration", category: "Legal", icon: "Home", description: "Sale deed, gift deed, and property registration services.", processingTime: "3-7 Days", price: "₹2,000+" },
  { title: "Revenue Consonant", category: "Legal", icon: "FileCheck", description: "Revenue department document assistance.", processingTime: "5-10 Days", price: "₹1,000+" },
  { title: "Bhumiabhilekh (भूमि अभिलेख)", category: "Legal", icon: "Map", description: "Land record documentation and verification.", processingTime: "3-5 Days", price: "₹500+" },
  { title: "Land Management", category: "Legal", icon: "LandPlot", description: "Land management and documentation services.", processingTime: "5-7 Days", price: "₹1,000+" },
  { title: "Land Record", category: "Legal", icon: "Archive", description: "7/12 extract, 8A extract, and mutation entries.", processingTime: "3-5 Days", price: "₹500+" },
  { title: "Cast Validity", category: "Legal", icon: "Shield", description: "Caste certificate validity documentation.", processingTime: "15-30 Days", price: "₹1,500+" },
  { title: "Marriage Registration", category: "Legal", icon: "Heart", description: "Marriage registration under Hindu/Special Marriage Act.", processingTime: "5-10 Days", price: "₹1,500+" },
  { title: "Leave and Licence", category: "Legal", icon: "FileSignature", description: "Leave and license agreement drafting and registration.", processingTime: "3-5 Days", price: "₹1,000+" },
  
  // LICENSES
  { title: "Labour Contractor Licence", category: "Business", icon: "Users", description: "Labour contractor license registration and renewal.", processingTime: "10-15 Days", price: "₹3,000+" },
  { title: "Pollution Control Board (MPCB)", category: "Business", icon: "Factory", description: "MPCB/NOC certificate for industries.", processingTime: "15-20 Days", price: "₹5,000+" },
  { title: "Election Management", category: "Legal", icon: "Vote", description: "Election campaign and management services.", processingTime: "Varies", price: "Contact Us" },
  { title: "Import Export Code (IEC Code Registration)", category: "Business", icon: "Globe2", description: "IEC code for import/export businesses.", processingTime: "3-5 Days", price: "₹1,500+" }
]

// Service Categories for Display
export const SERVICE_CATEGORIES = [
  {
    title: "📦 Logistics & Online Services",
    icon: "Truck",
    description: "Complete logistics consultancy and online documentation services.",
    items: [
      "Logistics Business Consultancy",
      "PAN Card (पेन कार्ड)",
      "Online Services",
      "Election Nomination Form"
    ]
  },
  {
    title: "📊 GST & Tax Services",
    icon: "Receipt",
    description: "Complete GST, ITR, and tax compliance services.",
    items: [
      "GST Registration (GST रिजस्ट्रेशन)",
      "Goods & Service Tax (GST)",
      "Income Tax Return (ITR Filing)",
      "TDS Return"
    ]
  },
  {
    title: "📋 Government Documents",
    icon: "FileText",
    description: "Government document application and assistance.",
    items: [
      "Passport Seva (पासपोर्ट सेवा)",
      "Food Licence (फूड लाइसेंस)",
      "Aaple Sarkar (आपले सरकार सेवा)",
      "E-Gazette (ई-गैज़ेट)"
    ]
  },
  {
    title: "🏢 Business Registrations",
    icon: "Building",
    description: "All types of business and trade registrations.",
    items: [
      "E-Registration",
      "Company Registration (कंपनी रिजस्ट्रेशन)",
      "Trade Mark & ISO Certification",
      "Shop Act Licence (शिप एक्ट लाइसेंस)",
      "Digital Signature"
    ]
  },
  {
    title: "🏠 Property & Legal Services",
    icon: "Gavel",
    description: "Property registration and legal documentation services.",
    items: [
      "Property Registration",
      "Revenue Consonant",
      "Bhumiabhilekh (भूमि अभिलेख)",
      "Land Management",
      "Land Record",
      "Cast Validity",
      "Marriage Registration",
      "Leave and Licence"
    ]
  },
  {
    title: "📜 Licenses & Permits",
    icon: "Scroll",
    description: "Professional licenses and permits for businesses.",
    items: [
      "Labour Contractor Licence",
      "Pollution Control Board (MPCB)",
      "Election Management",
      "Import Export Code (IEC)"
    ]
  }
]

// All services flat list with icons
export const SERVICE_ITEMS = [
  // Logistics & Online
  { name: "Logistics Business Consultancy", icon: "🚚", category: "Logistics", price: "₹1,500+" },
  { name: "PAN Card (पेन कार्ड)", icon: "🪪", category: "Digital", price: "₹150+" },
  { name: "Online Services", icon: "💻", category: "Digital", price: "₹100+" },
  { name: "Election Nomination Form", icon: "🗳️", category: "Legal", price: "₹500+" },
  // GST & Tax
  { name: "GST Registration", icon: "📊", category: "Business", price: "₹1,500+" },
  { name: "Goods & Service Tax", icon: "📑", category: "Business", price: "₹500/month" },
  { name: "Income Tax Return (ITR)", icon: "💰", category: "Business", price: "₹499+" },
  { name: "TDS Return", icon: "📈", category: "Business", price: "₹500+" },
  // Government
  { name: "Passport Seva", icon: "🛂", category: "Digital", price: "₹500+" },
  { name: "Food Licence", icon: "🍔", category: "Business", price: "₹2,000+" },
  { name: "Aaple Sarkar Services", icon: "🏛️", category: "Digital", price: "₹200+" },
  { name: "E-Gazette", icon: "📰", category: "Digital", price: "₹1,500+" },
  // Registrations
  { name: "E-Registration", icon: "📱", category: "Digital", price: "₹300+" },
  { name: "Company Registration", icon: "🏢", category: "Business", price: "₹8,000+" },
  { name: "Trade Mark & ISO", icon: "⭐", category: "Business", price: "₹5,000+" },
  { name: "Shop Act Licence", icon: "🏪", category: "Business", price: "₹800+" },
  { name: "Digital Signature", icon: "✍️", category: "Digital", price: "₹1,200+" },
  // Property & Legal
  { name: "Property Registration", icon: "🏠", category: "Legal", price: "₹2,000+" },
  { name: "Revenue Consonant", icon: "📄", category: "Legal", price: "₹1,000+" },
  { name: "Bhumiabhilekh", icon: "🗺️", category: "Legal", price: "₹500+" },
  { name: "Land Management", icon: "🌾", category: "Legal", price: "₹1,000+" },
  { name: "Land Record", icon: "📁", category: "Legal", price: "₹500+" },
  { name: "Cast Validity", icon: "🛡️", category: "Legal", price: "₹1,500+" },
  { name: "Marriage Registration", icon: "💍", category: "Legal", price: "₹1,500+" },
  { name: "Leave and Licence", icon: "📝", category: "Legal", price: "₹1,000+" },
  // Licenses
  { name: "Labour Contractor Licence", icon: "👷", category: "Business", price: "₹3,000+" },
  { name: "Pollution Control Board (MPCB)", icon: "🏭", category: "Business", price: "₹5,000+" },
  { name: "Election Management", icon: "🗳️", category: "Legal", price: "Contact Us" },
  { name: "Import Export Code (IEC)", icon: "🌍", category: "Business", price: "₹1,500+" }
]

export const TRUST_BADGES = [
  { icon: "Award", text: "10+ Years Experience" },
  { icon: "Scale", text: "High Court Practice" },
  { icon: "Users", text: "5000+ Happy Clients" },
  { icon: "TrendingUp", text: "99% Success Rate" }
]

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/documents", label: "Docs" },
  { href: "/fees", label: "Fees" },
  { href: "/blog", label: "Articles" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/appointment", label: "Book" }
]

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Legal Accuracy",
    description: "100% error-free documentation & legal backing."
  },
  {
    icon: "FileText",
    title: "One-Stop Solution",
    description: "All services under one roof – save time & money."
  },
  {
    icon: "MessageSquare",
    title: "24/7 WhatsApp Support",
    description: "Emergency assistance anytime, even on holidays."
  }
]

export const FEES_DATA = {
  logistics: [
    { name: "Logistics Business Consultancy", price: "₹1,500+" },
    { name: "PAN Card", price: "₹150+" },
    { name: "Online Services", price: "₹100+" },
    { name: "Election Nomination Form", price: "₹500+" }
  ],
  tax: [
    { name: "GST Registration", price: "₹1,500+" },
    { name: "GST Return Filing", price: "₹500/month" },
    { name: "ITR Filing – Salaried", price: "₹499+" },
    { name: "ITR Filing – Business", price: "₹1,500+" },
    { name: "TDS Return", price: "₹500+" }
  ],
  registration: [
    { name: "Company Registration (Pvt Ltd)", price: "₹8,000+" },
    { name: "Trade Mark Registration", price: "₹5,000+" },
    { name: "ISO Certification", price: "₹5,000+" },
    { name: "Shop Act Licence (Gumasta)", price: "₹800+" },
    { name: "Digital Signature (DSC)", price: "₹1,200+" },
    { name: "Import Export Code (IEC)", price: "₹1,500+" }
  ],
  legal: [
    { name: "Property Registration", price: "₹2,000+" },
    { name: "Marriage Registration", price: "₹1,500+" },
    { name: "Leave & Licence Agreement", price: "₹1,000+" },
    { name: "Land Record (7/12, 8A)", price: "₹500+" },
    { name: "Cast Validity", price: "₹1,500+" }
  ],
  licenses: [
    { name: "Food Licence (FSSAI)", price: "₹2,000+" },
    { name: "Labour Contractor Licence", price: "₹3,000+" },
    { name: "Pollution Control Board (MPCB)", price: "₹5,000+" }
  ],
  digital: [
    { name: "Passport Assistance", price: "₹500+" },
    { name: "Aaple Sarkar Services", price: "₹200+" },
    { name: "E-Gazette", price: "₹1,500+" },
    { name: "E-Registration", price: "₹300+" }
  ]
}

export const TESTIMONIALS = [
  {
    name: "Ramesh Patil",
    location: "Bhiwandi",
    text: "Property registration mein bahut help mili. Sab documents ready karwa diye aur registration ke din seedha office le gaye. Bahut smooth process tha.",
    rating: 5,
    service: "Property Registration"
  },
  {
    name: "Mohammed Shaikh",
    location: "Bhiwandi",
    text: "GST registration bahut jaldi ho gayi — sirf 4 din mein! Fees bhi reasonable thi. Ab monthly return bhi yahi se file karta hun.",
    rating: 5,
    service: "GST Registration"
  },
  {
    name: "Priya Deshmukh",
    location: "Thane",
    text: "ITR file karna tha par samajh nahi aa raha tha. Yahan se bahut achhe se samjhaya aur file kiya. Refund bhi jaldi aaya.",
    rating: 5,
    service: "ITR Filing"
  },
  {
    name: "Suresh Kamble",
    location: "Bhiwandi",
    text: "Marriage registration ke liye aaya tha. Sab documents ki list pehle de di, kuch bhi miss nahi hua. Bahut professional service!",
    rating: 5,
    service: "Marriage Registration"
  },
  {
    name: "Aashish Gaikwad",
    location: "Bhiwandi",
    text: "Mera 7/12 record mein naam galat tha. Yahan se ek hi baar mein ho gaya. Bahut helpful staff hai!",
    rating: 5,
    service: "Land Records"
  },
  {
    name: "Vikram Joshi",
    location: "Kalyan",
    text: "Company registration ke liye aaya. Bahut detailed guidance mili — 10 din mein company register ho gayi. Excellent service!",
    rating: 5,
    service: "Company Registration"
  }
]

export const FAQS = [
  { cat: 'property', q: 'Property registration mein kitna time lagta hai?', a: 'Normal registration 1-3 working days mein hoti hai. Pehle stamp duty pay karni hoti hai, phir Sub-Registrar ke paas jaake registration hoti hai.' },
  { cat: 'property', q: 'Property registration ke liye stamp duty kitni hoti hai?', a: 'Maharashtra mein stamp duty generally property value ka 5-6% hoti hai (women ke naam par 1% kam). Plus 1% registration fees alag se hoti hai.' },
  { cat: 'gst', q: 'GST registration kab zaroor hai?', a: 'Agar aapka annual turnover 20 lakh (services) ya 40 lakh (goods) se zyada hai toh GST registration mandatory hai.' },
  { cat: 'gst', q: 'GST registration kitne din mein hoti hai?', a: 'Documents sahi hone par 3-7 working days mein GST registration complete ho jaati hai.' },
  { cat: 'itr', q: 'ITR file karne ki last date kab hoti hai?', a: 'Salaried individuals ke liye usually July 31. Business owners ke liye (audit required) October 31.' },
  { cat: 'itr', q: 'Kya ITR file karna mandatory hai?', a: 'Agar income basic exemption limit se zyada hai (₹3 lakh) toh mandatory hai.' },
  { cat: 'legal', q: 'Affidavit kya hota hai aur kab chahiye?', a: 'Affidavit ek sworn statement hota hai jo notary ke saamne sign kiya jaata hai. Income proof, name change, residence proof ke liye use hota hai.' },
  { cat: 'legal', q: 'Marriage registration ke liye witnesses kitne chahiye?', a: '2 witnesses zaroor chahiye. Dono witnesses ko registration ke waqt physically present hona padega.' },
  { cat: 'digital', q: 'Digital Signature Certificate (DSC) kya hota hai?', a: 'DSC ek electronic signature hai jo government portals pe documents digitally sign karne ke liye use hota hai. 1-2 saal ke liye valid hota hai.' },
  { cat: 'business', q: 'Shop Act licence kya hai aur kaise milega?', a: 'Shop Act licence (Gumasta) Maharashtra mein har dukan, restaurant, office ke liye mandatory hai. Hum apply karwa dete hain.' }
]

export const BLOG_ARTICLES = [
  {
    id: 'gst',
    tag: '📊 GST',
    title: 'GST Registration Kaise Karein? — Complete Guide',
    desc: 'Step-by-step guide for GST registration. Documents required, process, timeline — sab kuch Hindi mein.',
    readTime: '5 min',
    content: `<h1>GST Registration Kaise Karein?</h1><p>GST (Goods and Services Tax) ek tax hai jo goods aur services pe lagta hai. July 2017 se GST aaya.</p><h2>GST Registration Kab Zaroori Hai?</h2><ul><li>Annual turnover ₹20 lakh (services) ya ₹40 lakh (goods) se zyada</li><li>Interstate supply karte hain</li><li>E-commerce platform pe sell karte hain</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">⚠️ Note: Turnover limit se kam bhi hai toh bhi GST lena faydemand hota hai.</div><h2>Documents Chahiye</h2><ul><li>PAN Card, Aadhaar Card</li><li>Business address proof</li><li>Bank account details</li><li>Passport size photo</li></ul>`
  },
  {
    id: 'itr',
    tag: '💰 ITR',
    title: 'ITR File Karna Kyon Zaroori Hai? — Poori Jankari',
    desc: 'Income Tax Return kya hai, kise file karna chahiye, last date kya hai — simple bhasha mein samjhein.',
    readTime: '4 min',
    content: `<h1>ITR File Karna Kyon Zaroori Hai?</h1><p>ITR ek form hai jisme aap batate hain ki kitna paisa kamaya aur kitna tax diya.</p><h2>ITR File Karne Ke Fayde</h2><ul><li>Refund milta hai</li><li>Loan approval asaan</li><li>Visa mein help</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">⚠️ Last Date: July 31, 2025. Belated return December 31 tak penalty ke saath.</div>`
  },
  {
    id: 'property',
    tag: '🏠 Property',
    title: 'Bhiwandi Mein Property Registration — Poori Process',
    desc: 'Maharashtra mein property registration kaise hoti hai — stamp duty, documents, fees, time — sab kuch ek jagah.',
    readTime: '6 min',
    content: `<h1>Bhiwandi Mein Property Registration</h1><h2>Stamp Duty Kitni Hoti Hai?</h2><ul><li>Maharashtra mein 5% stamp duty (purush)</li><li>Mahila ke naam par 4%</li><li>Plus 1% registration fees</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">💡 Hum draft se lekar registration tak sab kuch handle karte hain.</div>`
  },
  {
    id: 'shopact',
    tag: '🏪 Business',
    title: 'Shop Act Licence (Gumasta) Kya Hai aur Kaise Milega?',
    desc: 'Maharashtra mein har dukan ke liye Shop Act zaroori hai. Kaise apply karein, kya documents chahiye.',
    readTime: '3 min',
    content: `<h1>Shop Act Licence (Gumasta) Kya Hai?</h1><h2>Kise Chahiye?</h2><ul><li>Har dukan, restaurant, salon, office</li><li>Home-based business agar employees hain</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">💡 Humari service fee ₹800 se shuru.</div>`
  },
  {
    id: 'pan',
    tag: '🪪 Documents',
    title: 'PAN Card Kyon Zaroori Hai? Naya PAN Kaise Banwayein?',
    desc: 'PAN card ke bina bank account, loan, property — kuch nahi hoga. Naya PAN ya correction kaise karein.',
    readTime: '3 min',
    content: `<h1>PAN Card — Kyun Zaroori, Kaise Banwayein?</h1><h2>PAN Kab Zaroori Hai?</h2><ul><li>Bank account ke liye</li><li>₹50,000+ transaction</li><li>Property kharidne/bechne ke liye</li><li>ITR file karne ke liye</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">💡 Hum PAN apply ya correction ₹150 mein kar dete hain.</div>`
  },
  {
    id: 'passport',
    tag: '🛂 Digital',
    title: 'Passport Seva — Online Appointment aur Documents Guide',
    desc: 'Passport ke liye online appointment kaise book karein, kya documents chahiye — poori jankari.',
    readTime: '4 min',
    content: `<h1>Passport Seva — Complete Guide</h1><h2>Documents Required</h2><ul><li>Proof of Address (Aadhaar, Voter ID, Electricity Bill)</li><li>Proof of Date of Birth (Birth Certificate, 10th Marksheet)</li><li>Identity Proof (PAN Card, Voter ID)</li><li>Passport size photos (2 copies)</li></ul><div class="bg-gold/10 p-4 rounded-xl my-4">💡 Hum appointment se lekar document verification tak sab karte hain.</div>`
  }
]