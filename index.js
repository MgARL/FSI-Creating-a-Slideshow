const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
//Global Variables
let filledBubble = '●'
let unfilledBubble = '○'
let image = document.querySelector('.image')
let nextButton = document.querySelector('.next')
let previousButton = document.querySelector('.previous')
let bubbleButtons = document.querySelectorAll('.bubble')
let selectedIndex = 0
//Defaults Images
image.src = images[selectedIndex]
bubbleButtons[selectedIndex].textContent = filledBubble
//Next Button
nextButton.addEventListener('click', nextImage)
previousButton.addEventListener('click', previousImage)

function nextImage() {
    if (selectedIndex < images.length - 1) {
        selectedIndex++
    } else {
        selectedIndex = 0
    }
    image.src = images[selectedIndex]

    updateCarrousel()
}

function previousImage() {
    if (selectedIndex === 0) {
        selectedIndex = images.length - 1
    } else {
        selectedIndex--
    }
    image.src = images[selectedIndex]
    updateCarrousel()
}

function updateCarrousel() {
    for (let i = 0; i < bubbleButtons.length; i++) {
        if (i === selectedIndex) {
            bubbleButtons[selectedIndex].textContent = filledBubble
        } else {
            bubbleButtons[i].textContent = unfilledBubble
        }
    }
}

for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', () => {
        selectedIndex = i
        image.src = images[selectedIndex]
        updateCarrousel()

    })
}


// clearInterval(interval)
// let interval = setInterval(() => {
//     nextImage()
// }, 2000)