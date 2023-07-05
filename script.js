// JavaScript code
window.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarLists = document.querySelector('.navbar-lists');

  menuToggle.addEventListener('click', () => {
    navbarLists.classList.toggle('open');
  });
});
