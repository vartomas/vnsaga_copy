const sidebar = document.querySelector('.sidebar')
const sidebarHeader = document.querySelector('.sidebarHeader')
const form = document.querySelector('.formWrapper')
const arrow = document.querySelector('.startArrow')
const formHeader = document.querySelector('.formHeader')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')

let openForm = false

sidebarHeader.addEventListener('click', () => {
    if (openForm === false) {
        sidebar.style.width = '50%'
        arrow.style.transform = 'rotate(0deg)'
        wrapper.style.filter = 'brightness(75%)'
        sidebar.style.filter = 'brightness(100%)'
        openForm = true
        setTimeout(
            () => {
                form.style.display = 'flex'
                formHeader.style.transform = 'scaleY(1)'
                body.style.overflow = 'hidden'
                form.style.overflow = 'auto'
                form.style.height = '100%'
            }, 500)
    } else {
        sidebar.style.width = '80px'
        arrow.style.transform = 'rotate(180deg)'
        form.style.display = 'none'
        formHeader.style.transform = 'scaleY(0)'
        body.style.overflow = 'auto'
        openForm = false
        setTimeout(
            () => {
                wrapper.style.filter = 'brightness(100%)'
            }, 400)
    }
})