let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
    });
    dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
    });
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

function setSlide(n) {
    showSlide(n);
}

leftArrow.addEventListener('click', () => moveSlide(-1));
rightArrow.addEventListener('click', () => moveSlide(1));
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => setSlide(i));
});

// Inicializa el carrusel al cargar la página
showSlide(currentSlide);