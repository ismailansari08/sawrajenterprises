export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `+91${cleaned}`
  }
  return phone
}

export const sendWhatsAppMessage = (phone, message) => {
  const formattedPhone = formatPhoneNumber(phone)
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank')
}

export const trackEvent = (category, action, label) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    })
  }
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.querySelector(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}