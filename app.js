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
    container.style.transform = `rotateY(${clientX}deg) rotateX(${clientY}deg)`
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'

    title.style.transform = 'translateZ(150deg)'
    memory.style.transform = 'translateZ(100px)'
    description.style.transform = 'translateZ(125px)'
    purchase.style.transform = 'translateZ(75px)'
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5 ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = "translateZ(0px)";
    iphone.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    memory.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)"
})
