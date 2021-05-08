import './style.css';

console.log('funguju!');

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
