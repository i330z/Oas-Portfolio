const menuToggler = document.querySelector('.menu-toggler');
var navList = document.getElementsByClassName('.nav-link');
const topMenu = document.querySelector('.top-nav');

menuToggler.addEventListener('click', (e)=>{
    topMenu.classList.toggle("open");
    menuToggler.classList.toggle("open");

})

AOS.init({
    easing: 'ease',
    duration:1800
})

