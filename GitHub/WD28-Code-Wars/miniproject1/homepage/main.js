const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu');

openBtn.addEventListener('click', () => {
  offcanvasMenu.classList.add('active');
});