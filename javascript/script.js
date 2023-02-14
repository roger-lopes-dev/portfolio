function initScroll() {
  const tabMenu = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView( {
      behavior: 'smooth',
      block: 'start',
    });
  }

  tabMenu.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
}
initScroll();

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
