import './style.css';

import { Layer } from '../Layer/index';

// export const Drink = ({ id, name, layers }) => {
//   const drinkElm = document.createElement('div');
//   let layersTemplate = '';
//   for (let i = 0; i < layers.length; i++) {
//     layersTemplate += Layer(layers[i]);
//   }
//   drinkElm.classList.add('drink');
//   drinkElm.innerHTML = `
//           <div class="drink">
//           <div class="drink__product">
//             <div class="drink__cup">
//               <img src="../assets/cups/${id}.png" />
//             </div>
//             <div class="drink__info">
//               <h3>${name}</h3>
//            ${layersTemplate}
//         </div>
//           </div>
//           <div class="drink__controls">
//             <button class="order-btn">Objednat</button>
//           </div>
//         </div>
//   `;
//   return drinkElm;
// };

export const Drink = ({ id, name, ordered, layers }) => {
  const drinkElm = document.createElement('div');
  let layersTemplate = '';
  for (let i = 0; i < layers.length; i++) {
    layersTemplate += Layer(layers[i]);
  }
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
          <div class="drink">
          <div class="drink__product">
            <div class="drink__cup">
              <img src="../assets/cups/${id}.png" />
            </div>
            <div class="drink__info">
              <h3>${name}</h3>
           ${layersTemplate}
        </div>
          </div>
          <div class="drink__controls">
            <button class="order-btn">Objednat</button>
          </div>
        </div>
  `;
  const orderBtn = drinkElm.querySelector('.order-btn');
  const drinkCupElm = drinkElm.querySelector('.drink__cup');

  const changeButton = () => {
    if (ordered === false) {
      orderBtn.textContent = 'Zrušit';
      drinkCupElm.classList.add('drink__cup--selected');
      ordered = true;
    } else if (ordered === true) {
      orderBtn.textContent = 'Objednat';
      drinkCupElm.classList.remove('drink__cup--selected');
      ordered = false;
    }
  };
  orderBtn.addEventListener('click', changeButton);

  return drinkElm;
};
