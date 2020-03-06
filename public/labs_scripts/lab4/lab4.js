let
    nextBtn = document.querySelector('.slider-dots .next'),
    prevBtn = document.querySelector('.slider-dots .prev'),
    count   = document.querySelector('.slider-count .count'),
    slides  = document.getElementsByClassName('slide');

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

let slideIndex = 1;
showSlides(slideIndex);

function prev () {
    showSlides(slideIndex -= 1);
    count.textContent = slideIndex + '';
}

function next() {
    showSlides(slideIndex += 1);
    count.textContent = slideIndex + '';
}

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}