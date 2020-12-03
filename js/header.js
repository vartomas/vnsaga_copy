const desktopHeaderLogo = document.querySelector('.logo')
const nav = document.querySelector('.menu')
const mobileLogo = document.querySelector('.mobileLogo')
const mobileLogoText = document.querySelector('.mobileLogoText')
const desktopHeaderLogoText = document.querySelector('#headerLogo')
const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')
const mobileHam = document.querySelector('.mobileHam')
const desktopMenu = document.querySelector('.menu__desktop')



const applyMobileMenu = () => {
    desktopHeaderLogo.style.width = '80px'
    mobileLogo.style.display = 'flex'
    nav.style.transform = 'scaleX(0)'
    header.style.width = '160px'
    desktopMenu.style.transform = 'scaleX(0)'
    mobileHam.style.display = 'flex'
    mobileLogoText.style.opacity = '1'
    desktopHeaderLogoText.style.opacity = '0'
    desktopHeaderLogoText.style.position = 'absolute'
    setTimeout(() => {
        mobileHam.style.opacity = '1'
        hamburger.style.transform = 'scaleX(1)'
    }, 300)
}

const applyDesktopMenu = () => {
    desktopHeaderLogo.style.width = '240px'
    desktopHeaderLogoText.style.display = 'block'
    mobileLogo.style.display = 'none'
    nav.style.transform = 'scaleX(1)'
    header.style.width = '100%'
    hamburger.style.transform = 'scaleX(0)'
    desktopMenu.style.transform = 'scaleX(1)'
    mobileHam.style.opacity = '0'
    mobileHam.style.display = 'none'
    mobileLogoText.style.opacity = '0'
    desktopHeaderLogoText.style.opacity = '1'
    desktopHeaderLogoText.style.position = 'relative'
}

window.addEventListener('scroll', () => {
    const scroll = window.scrollY
    if (scroll > 20) {
        applyMobileMenu()
    } else {
        applyDesktopMenu()
    }
})

mobileHam.addEventListener('click', () => {
    applyDesktopMenu()
})