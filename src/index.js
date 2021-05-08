import './style.css';

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
let ordered = false;

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

const orderBtn = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
orderBtn.addEventListener('click', changeButton);
