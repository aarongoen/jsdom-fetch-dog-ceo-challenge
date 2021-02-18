console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener("DOMContentLoaded", function() {

// Challenge 1
fetch(imgUrl) 
    .then(resp => resp.json())
    .then(handleImageAppending)
//Challenge 1

// Challenge 2
makeFetch()
    .then(resp => {
        let breedsArr = Object.keys(resp.message)
        breedsArr.forEach(addLiToDOM)
    })

// Challenge 2

// Challenge 3
let breedUL = document.querySelector('#dog-breeds')

breedUL.addEventListener('click', function(event){
    if (event.target.dataset.info === "breed") {
        event.target.style.color = "red"
    }
})
// Challenge 3

// Challenge 4

let breedDropDown = document.querySelector('#breed-dropdown')
breedDropDown.addEventListener('change', (event) => {
    makeFetch()
    .then(resp => {
        let breedsArr = Object.keys(resp.message)
        let filteredArray = breedsArr.filter(breed => {
            return breed.startsWith(event.target.value)
        })
        breedUL.innerHTML = ""
        filteredArray.forEach(addLiToDOM)
    })
})
// Challenge 4

// DOMContentLoaded

})

function makeFetch() {
    return fetch(breedUrl)
    .then(resp => resp.json())
}

// Challenge 1 functions

function handleImageAppending(jsonObject) {
let arrOfDogURLs = jsonObject.message
arrOfDogURLs.forEach(url => {
    let dogImageContainer = document.querySelector('#dog-image-container')
    dogImageContainer.innerHTML += makeImageTagString(url)
    })
}

function makeImageTagString(imgUrl) {
    return `<img src="${imgUrl}"/>`
}

// Challenge 2 functions

function addLiToDOM(breed) {
    let breedUL = document.querySelector('#dog-breeds')
    breedUL.innerHTML += `<li data-info="breed">${breed}</li>`
}
