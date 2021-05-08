import './style.css';

const ingredience = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

const ingredience2 = {
  color: '#fed7b0"',
  label: 'teplé mléko',
};

const ingredience3 = {
  color: '#613916',
  label: 'espresso',
};

export const Layer = ({ color, label }) => {
  return `
<div class="layer">
<div
  class="layer__color"
  style="background-color: ${color}"
></div>
<div class="layer__label">${label}</div>
</div>
`;
};

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer(ingredience);
drinkInfoElm.innerHTML += Layer(ingredience2);
drinkInfoElm.innerHTML += Layer(ingredience3);
