import { createButton } from "../../../components/section-button.js";
import { createSliderButton } from "./cam-slider-button.js";

export function createCamsSection(animal) {
  const donateContainer = document.createElement("div");
  donateContainer.classList.add("zoo-donate__container");

  const { topWrapper, imageWrapper } = createTopContent(animal);
  const bottomWrapper = createBottomContent(animal);

  donateContainer.append(topWrapper, imageWrapper, bottomWrapper);

  return donateContainer;
}

function createTopContent(animal) {
  const topWrapper = document.createElement("div");
  topWrapper.classList.add("zoo-donate__top__content", "flex");

  const title = document.createElement("h2");
  title.classList.add("zoo-donate__title", "section-title");

  title.textContent = animal.title;

  const button = createButton("donate now", "zoo-cams");

  topWrapper.append(title, button);

  const imageWrapper = document.createElement("a");
  imageWrapper.classList.add("container-player-foto");

  imageWrapper.href = animal.href;

  const playerImg = document.createElement("img");
  playerImg.classList.add("player-foto");

  playerImg.src = animal.image;
  playerImg.alt = animal.name;

  imageWrapper.append(playerImg);

  return {
    topWrapper,
    imageWrapper,
  };
}

function createBottomContent(animal) {
  const bottomWrapper = document.createElement("div");
  bottomWrapper.classList.add("zoo-donate__bottom-content");

  const title = document.createElement("h3");
  title.classList.add("zoo-donate__bottom-itle");

  title.textContent = "more live views";

  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("cams__slider__container", "flex");

  const prevButton = createSliderButton("prev", "cams-slider-btn");
  const nextButton = createSliderButton("next", "cams-slider-btn");

  const slider = document.createElement("div");
  slider.classList.add("cams__slider", "flex");

  const camsArray = animal.slider;

  camsArray.forEach((cam) => {
    const link = document.createElement("a");
    link.href = cam.hrefCam;

    const img = document.createElement("img");
    img.src = cam.imgCam;
    img.alt = cam.nameCam;

    link.append(img);
    slider.append(link);
  });

  sliderContainer.append(prevButton, slider, nextButton);
  bottomWrapper.append(title, sliderContainer);

  return bottomWrapper;
}
