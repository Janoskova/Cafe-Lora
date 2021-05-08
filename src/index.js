import './style.css';

import { Layer } from './Layer/index';

import { Drink } from './Drink/index';

console.log('funguju!');

//3
const showNavigace = () => {
  navigace.classList.toggle('nav-closed');
};

const navBtn = document.querySelector('#nav-btn');
const navigace = document.querySelector('nav');
navBtn.addEventListener('click', showNavigace);

const polozkaNavigace = document.querySelectorAll('.polozka-navigace');
for (let i = 0; i < polozkaNavigace.length; i++) {
  polozkaNavigace[i].addEventListener('click', showNavigace);
}

//4
// let ordered = false;

// const changeButton = () => {
//   if (ordered === false) {
//     orderBtn.textContent = 'Zrušit';
//     drinkCupElm.classList.add('drink__cup--selected');
//     ordered = true;
//   } else if (ordered === true) {
//     orderBtn.textContent = 'Objednat';
//     drinkCupElm.classList.remove('drink__cup--selected');
//     ordered = false;
//   }
// };

// const orderBtn = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// orderBtn.addEventListener('click', changeButton);

//5
// const ingredience = {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// };

// const ingredience2 = {
//   color: '#fed7b0"',
//   label: 'teplé mléko',
// };

// const ingredience3 = {
//   color: '#613916',
//   label: 'espresso',
// };

// const Layer = ({ color, label }) => {
//   return `
// <div class="layer">
// <div
//   class="layer__color"
//   style="background-color: ${color}"
// ></div>
// <div class="layer__label">${label}</div>
// </div>
// `;
// };

// const drinkInfoElm = document.querySelector('.drink__info');
// drinkInfoElm.innerHTML += Layer(ingredience);
// drinkInfoElm.innerHTML += Layer(ingredience2);
// drinkInfoElm.innerHTML += Layer(ingredience3);

//6
// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];

// for (let i = 0; i < layers.length; i++) {
//   const drinkInfoElm = document.querySelector('.drink__info');
//   drinkInfoElm.innerHTML += Layer(layers[i]);
// }

//7
// const kava = {
//   id: 'romano',
//   name: 'Romano',
//   ordered: false,
//   layers: [
//     {
//       color: '#fbdf5b',
//       label: 'citrón',
//     },
//     {
//       color: '#613916',
//       label: 'espresso',
//     },
//   ],
// };

//9
// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((data) => {
    const drinkListElm = document.querySelector('.drinks-list');
    data.forEach((kava) => drinkListElm.appendChild(Drink(kava)));
  });
