let burger = document.querySelector('.burger');
let nav = document.querySelector('.mobile__nav')

burger.addEventListener('click', () => {
burger.classList.toggle('active');
nav.classList.toggle('active');
});

;