document.addEventListener('DOMContentLoaded', () => {

  const quote = document.getElementById('quote-text')
  const companyDescriptionText = document.getElementById('company-span')

  const quotes = [
    'My live performance, it just comes from feeling an energy and emotion from the crowd. - Wiz Khalifa',
    'I like a performance, a live performance, so I like little mistakes because that\'s what makes perfect - the mistakes. - Jorja Smith',
    'It always seems impossible until it’s done. – Nelson Mandela',
    'An event is not over until everyone is tired of talking about it. – Mason Cooley',
    'The first rule for choosing vendors is to avoid those who suggest your budget isn’t sufficient. The planning process should be about taking your ideas and making them work. – Mindy Weiss',
    'If you ever need anything please don’t hesitate to ask someone else first. — Kurt Cobain'
  ]

  quote.innerText = quotes[Math.floor(Math.random() * quotes.length)]

  const companyDescriptions = [
    'production',
    'live events',
    'video',
    'conferencing',
    'VMix',
    'podcasting',
    'audio',
    'editing',
    'equipment hire'
  ]

  const changeCompanyText = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * companyDescriptions.length)
    companyDescriptionText.innerText = companyDescriptions[randomIndex]
  }, 3000)

})