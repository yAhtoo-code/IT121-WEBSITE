const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img');

let currentIndex = 0;

function updateSlider() {
    const offset = currentIndex * 500; // Adjust width to match your slider width
    imageContainer.style.transform = `translateX(-${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});
