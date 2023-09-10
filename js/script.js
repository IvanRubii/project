// Burger menu
const menu = document.querySelector('.menu__body')
const menuWrap = document.querySelector('.wrap__bg')
const menuBtn = document.querySelector('.menu__icon')
const body = document.body;
if (menu && menuWrap) {
    menuWrap.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

//========================================//
