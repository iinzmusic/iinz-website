// copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// nav: add subtle background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 80);
}, { passive: true });
