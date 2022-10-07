const page = document.querySelector('.page');
const logo = document.querySelector('.header__logo');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__menu');

const toggleMenu = () => {
  page.classList.toggle('scroll-lock');
  hamburger.classList.toggle('active');
  menu.classList.toggle('is-open');
};
const hideMenu = () => {
  page.classList.remove('scroll-lock');
  hamburger.classList.remove('active');
  menu.classList.remove('is-open');
};

hamburger.addEventListener('click', () => {
  toggleMenu();
});

logo.addEventListener('click', () => {
  hideMenu();
});
menu.addEventListener('click', () => {
  hideMenu();
});

export default hideMenu;
