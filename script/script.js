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
    //  Image sliders
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    function changeSlide(direction) {
        if (direction === 'next') {
            slideIndex = (slideIndex + 1) % slides.length;
        } else if (direction === 'prev') {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Add click event listeners for the arrow buttons
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        changeSlide('prev');
    });

    rightArrow.addEventListener('click', () => {
        changeSlide('next');
    });
}