//for input - range

const value = document.querySelector("#value");
const input = document.querySelector("#range");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

//nav-btn & mobile-menu
const navBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.header');

navBtn.addEventListener('click', function(){
  navBtn.classList.toggle('menu-btn--active');
  mobileMenu.classList.toggle('header--active');
})