const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const cardWidth = 440 + 40;
const cards = document.querySelectorAll('.card-animal');
const visibleWidth = document.querySelector(
  '.slider__container-cards'
).offsetWidth;

let currentPosition = 0;
const maxPosition = -(cardWidth * cards.length - visibleWidth);

nextBtn.addEventListener('click', () => {
  if (currentPosition > maxPosition) {
    currentPosition -= cardWidth;
    container.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    container.style.transform = `translateX(${currentPosition}px)`;
  }
});
