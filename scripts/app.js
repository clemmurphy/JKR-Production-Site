document.addEventListener('DOMContentLoaded', () => {

  const companyDescriptionText = document.getElementById('company-span')

  const companyDescriptions = [
    'production',
    'very very good',
    'very good and very cheap',
    'come and have a look',
    'one pound fish'
  ]

  const changeCompanyText = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * companyDescriptions.length)
    companyDescriptionText.innerText = companyDescriptions[randomIndex]
  }, 3000)

})