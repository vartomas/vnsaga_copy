const sidebar = document.querySelector('.sidebar')
const sidebarHeader = document.querySelector('.sidebarHeader')
const form = document.querySelector('.formWrapper')
const arrow = document.querySelector('.startArrow')
const formHeader = document.querySelector('.formHeader')

let openForm = false

sidebarHeader.addEventListener('click', () => {
    if (openForm === false) {
        sidebar.style.width = '50%'
        arrow.style.transform = 'rotate(0deg)'
        openForm = true
        setTimeout(
            () => {
                form.style.display = 'flex'
                formHeader.style.transform = 'scaleY(1)'
            }, 500)
    } else {
        sidebar.style.width = '80px'
        arrow.style.transform = 'rotate(180deg)'
        form.style.display = 'none'
        formHeader.style.transform = 'scaleY(0)'
        openForm = false
    }
})