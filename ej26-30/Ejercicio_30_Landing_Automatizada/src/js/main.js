// Lógica del menú hamburguesa


const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () => {

  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

