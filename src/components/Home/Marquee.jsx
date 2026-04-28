const Marquee = () => {
  const items = [
    'Property Registration', '✦', 'GST Filing', '✦', 'Income Tax Return', '✦',
    'Company Registration', '✦', 'Shop Act', '✦', 'PAN Card', '✦',
    'Passport Seva', '✦', 'Digital Signature', '✦', 'Legal Advice', '✦',
    'Aaple Sarkar', '✦', 'ITR Filing', '✦', 'Land Records', '✦',
    'Food Licence', '✦', 'Marriage Registration', '✦'
  ]

  return (
    <div className="bg-navy relative overflow-hidden py-3">
      {/* Left fade edge */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      {/* Right fade edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className={`px-4 md:px-6 font-syne font-bold text-xs md:text-sm uppercase tracking-wider ${
              item === '✦' ? 'text-gold/40' : 'text-gold/90'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
