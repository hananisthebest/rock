const headerEl = document.querySelector('.header'); 

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled'); 
    }
});  

$('body').on('click','#carouselID .carousel-control',function() {
    $(this).closest('.carousel').carousel( $(this).data('slide') );
 }); 