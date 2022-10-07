const html = document.querySelector('.html');
const header = document.querySelector('.header');

const writeVariable = (name, value) => {
  html.style.setProperty(name, value);
};
const calculateHeaderHeight = () => {
  const headerHeight = `${header.offsetHeight}px`;
  writeVariable('--header-height', headerHeight);
};
const calculateIconsGap = () => {
  const iconFirst = document.querySelector('.order__features-item:nth-child(1) .order__features-circle');
  const iconSecond = document.querySelector('.order__features-item:nth-child(2) .order__features-circle');
  const iconsGap = `${iconSecond.offsetLeft - (iconFirst.offsetLeft + iconFirst.offsetWidth)}px`;

  writeVariable('--order-circle-gap', iconsGap);
};
const calculateVariables = () => {
  calculateHeaderHeight();
  calculateIconsGap();
};

export default calculateVariables;
