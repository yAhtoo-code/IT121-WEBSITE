const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalImages = slider.querySelectorAll('img').length;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSliderPosition();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSliderPosition();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
