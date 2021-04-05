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

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'

    title.style.transform = 'translateZ(150deg)'
    memory.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5 ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    title.style.transform = "translateZ(0px)";
    iphone.style.transform = "translateZ(0px) rotateZ(0deg)";
    memory.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)"
})

function specifications () {
    const price = ['1050$', '1090$', '1120$']
    const memory  = [ '128gb.', '256gb.', '512gb.']

    const phone128 = document.querySelector('.memory-128')
    const phone256 = document.querySelector('.memory-256')
    const phone512 = document.querySelector('.memory-512')

    addSpecifications(phone128, memory[0], price[0])
    addSpecifications(phone256, memory[1], price[1])
    addSpecifications(phone512, memory[2], price[2])

}

function addSpecifications (elem, memory, price) {
    elem.addEventListener('click', () => {
        let first = document.querySelector('.add-memory').innerHTML = memory
        let second = document.querySelector('.add-price').innerHTML = price
    })
}

specifications()
