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

 /*typeing*/
 const textElement = document.getElementById('typing-text');
const texts = [
  "Hi There! Nice to meet you!",
  "Welcome to my website!",
 
 
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Adjust the typing speed by changing the timeout duration (in milliseconds)
  } else {
    setTimeout(eraseText, 3000); // Wait for 5 seconds before erasing the text
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Adjust the erasing speed by changing the timeout duration (in milliseconds)
  } else {
    textIndex++;
    if (textIndex === texts.length) {
      textIndex = 0;
    }
    setTimeout(typeText, 100); // Start typing the next text after erasing is complete
  }
}
typeText();
});
