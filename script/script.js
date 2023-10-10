// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    function changeSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Automatically change slide every 3 seconds (adjust the time as needed)
    setInterval(changeSlide, 3000);
}