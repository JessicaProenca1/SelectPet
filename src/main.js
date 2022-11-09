const caoBtn = document.getElementById('cao')
const gatoBtn = document.getElementById('gato')
const imagem = document.getElementById('imagem')
const dog = 'https://dog.ceo/api/breeds/image/random'
const apiKey = 'live_HExbzWwzKEP1zkYdehDuG70NsusYJaBle1JFRmGjltPXPjUSlCSz3pBOrRHkYZUd'
const cat = 'https://api.thecatapi.com/v1/images/search?'

caoBtn.addEventListener('click', (event) => {
  event.preventDefault();
fetch(dog) 
  .then(res => res.json())
  .then(data => {
    imagem.src = data.message
  })
})

gatoBtn.addEventListener('click', (event) => {
  event.preventDefault();
fetch(cat, {
  headers: {
    'x-api-key': apiKey
  }
}) 
  .then(res => res.json())
  .then(data => {
    let imagensData = data
    imagensData.map((imageData) => {
      imagem.src = imageData.url
    })
  })
})