const sidebar = document.querySelector('.sidebar')
const sidebarHeader = document.querySelector('.sidebarHeader')
const form = document.querySelector('.formWrapper')
const arrow = document.querySelector('.startArrow')
const formHeader = document.querySelector('.formHeader')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')

let formOpen = false

const openForm = () => {
    sidebar.style.width = '50%'
    arrow.style.transform = 'rotate(0deg)'
    wrapper.style.filter = 'brightness(75%)'
    formOpen = true
    setTimeout(
        () => {
            form.style.display = 'flex'
            body.style.overflow = 'hidden'
            form.style.overflow = 'auto'
            form.style.height = '100%'
        }, 500)
}

const closeForm = () => {
    sidebar.style.width = '80px'
    arrow.style.transform = 'rotate(180deg)'
    form.style.display = 'none'
    body.style.overflow = 'auto'
    form.style.overflow = 'hidden'
    form.style.height = '100%'
    formOpen = false
    setTimeout(
        () => {
            wrapper.style.filter = 'unset'
        }, 400)
}

sidebarHeader.addEventListener('click', () => {
    if (!formOpen) {
        openForm()
    } else {
        closeForm()
    }
})