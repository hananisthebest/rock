const headerEl = document.querySelector('.header'); 

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled'); 
    }
});  

$('.carousel').carousel() 

window.onscroll = function() {stickyNavbar()};

var navbar = document.querySelector('.header');
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}