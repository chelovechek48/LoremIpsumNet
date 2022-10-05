import '@/styles/style';

const html = document.querySelector('.html');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
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

document.addEventListener('scroll', () => {
  hideMenu();
});
logo.addEventListener('click', () => {
  hideMenu();
});
menu.addEventListener('click', () => {
  hideMenu();
});

const writeVariable = (name, value) => {
  html.style.setProperty(name, value);
};
const calculateHeaderHeight = () => {
  const headerHeight = `${header.offsetHeight}px`;
  writeVariable('--header-height', headerHeight);
};
const calculateVariables = () => {
  calculateHeaderHeight();
};
document.addEventListener('DOMContentLoaded', calculateVariables);

const resizeWindowHandler = () => {
  hideMenu();
  calculateVariables();
};
document.addEventListener('resize', resizeWindowHandler);
