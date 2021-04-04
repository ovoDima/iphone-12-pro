const card = document.querySelector('.card')
const container = document.querySelector('.container')

const title = document.querySelector('.title')
const iphone = document.querySelector('.iph img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const memory = document.querySelector('.memory')

container.addEventListener('mousemove', (e) => {
    let clientX = (window.innerWidth / 2 - e.pageX) / 25
    let clientY = (window.innerHeight / 2 - e.pageY) / 25
    iphone.style.transform = `rotateY(${clientX}deg) rotateX(${clientY}deg)`
})
