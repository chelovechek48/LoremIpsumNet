const rangeValue = document.querySelector('.form__range-value');
const rangeInput = document.querySelector('.form__range-input');
const updateInputRangePosition = () => {
  rangeValue.textContent = `${rangeInput.value} %`;
};
rangeInput.addEventListener('input', () => {
  updateInputRangePosition();
});

export default updateInputRangePosition;
