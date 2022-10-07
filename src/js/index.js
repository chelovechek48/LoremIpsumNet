import '@/styles/style';
import calculateVariables from './calculateVariables';
import updateInputRangePosition from './inputs/range';
import hideMenu from './hamburger';

const contentLoadedHandler = () => {
  calculateVariables();
  updateInputRangePosition();
};

const resizeWindowHandler = () => {
  calculateVariables();
  hideMenu();
};

document.addEventListener('DOMContentLoaded', contentLoadedHandler);
document.addEventListener('scroll', hideMenu);
window.addEventListener('resize', resizeWindowHandler);
