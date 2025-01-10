document.addEventListener('DOMContentLoaded', () => {
  insertFooter();
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  const headerEl = document.querySelector('.header');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    headerEl?.classList.add('header-scrolled');
  } else {
    headerEl?.classList.remove('header-scrolled');
  }

  if (headerEl && scrollY > headerEl.offsetTop) {
    headerEl.classList.add('sticky');
  } else {
    headerEl?.classList.remove('sticky');
  }
}

function insertFooter() {
  const footerHTML = `
    <footer class="footer">
      <div class="footer-top-image">
          <img src="footerheadimg.png" alt="Footer Heading" />
      </div>
      <div class="footerContainer">
          <div class="socialIcons">
              <a href="https://www.instagram.com/officialstagefrightband/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
      </div>
      <div class="footer-bottom-image">
        <img src="footerbottom.png" alt="Footer Bottom" />
      </div>
      <div class="footer-bumper"></div>
      <div class="footerNav">
          <ul>
              <li><a href="about.html">Our History</a></li>
              <li><a href="merch.html">Merch</a></li>
              <li><a href="tour-dates.html">Tour Dates</a></li>
              <li><a href="contact-us.html">Contact Us</a></li>
              <li>©STAGEFRIGHT</li>
          </ul>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}
