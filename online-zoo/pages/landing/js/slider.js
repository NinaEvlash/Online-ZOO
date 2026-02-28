const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const cardContainer = document.getElementById("sliders-container");
const cards = document.querySelectorAll(".card-animal");

const cardWidth = 440 + 40;
const visibleWidth = cardContainer.offsetWidth;
const cardsLength = cards.length / 2;
const allCardsWidth = cardWidth * cardsLength;
const maxPosition = -(allCardsWidth - visibleWidth);
let currentPosition = 0;

nextBtn.addEventListener("click", () => {
  if (currentPosition > maxPosition) {
    currentPosition -= cardWidth;
    cardContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  updateButtons();
});

prevBtn.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    cardContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  updateButtons();
});

function updateButtons() {
  if (currentPosition >= 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentPosition <= maxPosition) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
