const desktopHeaderLogo = document.querySelector('.logo')
const desktopNav = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobileNav')
const desktopHeaderLogoText = document.querySelector('#headerLogo')
const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')
const mobileHam = document.querySelector('.mobileHam')

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll > 20) {
        desktopHeaderLogo.style.width = '80px'
        desktopHeaderLogoText.style.display = 'none'
        mobileNav.style.visibility = 'visible'
        desktopNav.style.transform = 'scaleX(0)'
        header.style.width = '160px'
        hamburger.style.transform = 'scaleX(1)'
    } else {
        desktopHeaderLogo.style.width = '240px'
        desktopHeaderLogoText.style.display = 'inline-block'
        mobileNav.style.visibility = 'hidden'
        desktopNav.style.transform = 'scaleX(1)'
        header.style.width = '100%'
        hamburger.style.transform = 'scaleX(0.5)'
    }
})

mobileHam.addEventListener('click', () => {
    desktopHeaderLogo.style.width = '240px'
    desktopHeaderLogoText.style.display = 'inline-block'
    mobileNav.style.visibility = 'hidden'
    desktopNav.style.transform = 'scaleX(1)'
    header.style.width = '100%'
    hamburger.style.transform = 'scaleX(0.5)'
})