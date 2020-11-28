const desktopHeaderLogo = document.querySelector('.logo')
const desktopNav = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobileNav')

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll > 20) {
        desktopHeaderLogo.style.display = 'none'
        desktopNav.style.display = 'none'
        mobileNav.style.display = 'flex'
    } else {
        desktopHeaderLogo.style.display = 'flex'
        desktopNav.style.display = 'block'
        mobileNav.style.display = 'none'
    }
})