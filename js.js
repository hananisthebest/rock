const headerEl = document.querySelector('.header');


function handleScroll() {
  const scrollY = window.scrollY;


  if (scrollY > 50) {
    headerEl.classList.add('header-scrolled');
  } else {
    headerEl.classList.remove('header-scrolled');
  }
  
  if (scrollY > headerEl.offsetTop) {
    headerEl.classList.add('sticky');
  } else {
    headerEl.classList.remove('sticky');
  }
}