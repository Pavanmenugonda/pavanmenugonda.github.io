document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarLists = document.querySelector('.navbar-lists');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navbarLists.classList.toggle('active');
  });

  navbarLists.addEventListener('click', function (event) {
    if (window.innerWidth < 768) {
      const listItem = event.target.closest('li');
      if (listItem) {
        navbarLists.classList.toggle('active');
      }
    }
  });

  // Hide navbar lists on outside click
  document.addEventListener('click', function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !navbarLists.contains(event.target) &&
      !event.target.classList.contains('icon')
    ) {
      navbarLists.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // Show navbar lists on hover for desktop
  navbarLists.addEventListener('mouseenter', function () {
    if (window.innerWidth >= 768) {
      navbarLists.classList.add('active');
      menuToggle.classList.add('active');
    }
  });

  // Hide navbar lists on mouse leave for desktop
  navbarLists.addEventListener('mouseleave', function () {
    if (window.innerWidth >= 768) {
      navbarLists.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });
});
