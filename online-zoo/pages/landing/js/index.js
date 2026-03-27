import {
  animalsArray,
  caresArray,
  payArray,
  linksArray,
} from "./animal-array.js";
import { createLink, setActiveNav } from "../../../components/nav-links.js";
import {
  createSocialLink,
  socialLinksArray,
} from "../../../components/social-links.js";
import { createCard } from "./animal-cards.js";
import { createBurger } from "../../../components/burger.js";
import { createCareCard } from "./care-cards.js";
import { createPayCard } from "./pay-cards.js";
import { createButton } from "../../../components/section-button.js";
import { createSliderButton } from "../../../components/slider-button.js";
import { sliderMove } from "./slider.js";
import { createUserCard, usersArray } from "./users-cards.js";
import {
  createCareModal,
  createModalLogic,
} from "../../../components/modal-one.js";

const headerLandingNavList = document.getElementById("header-landing-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerLandingNavList.append(item);
});

const footerLandingNavList = document.getElementById("footer-landing-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerLandingNavList.append(item);
}

setActiveNav();

const headerLandingSocialList = document.getElementById(
  "header-landing-social-list"
);
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  headerLandingSocialList.append(item);
});

const footerLandingSocialList = document.getElementById(
  "footer-landing-social-list"
);
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  footerLandingSocialList.append(item);
});

const slidersContainer = document.getElementById("sliders-container");
animalsArray.forEach((animal) => {
  const card = createCard(animal);
  slidersContainer.append(card);
});

const containerCareCards = document.getElementById("care-animal-cards");

for (let i = 0; i < caresArray.length; i += 1) {
  const card = createCareCard(caresArray[i], i);
  containerCareCards.append(card);
}

const payContainer = document.getElementById("pay-container");
for (let i = 0; i < payArray.length; i += 1) {
  const card = createPayCard(payArray[i], i);
  payContainer.append(card);
}

const userSlider = document.getElementById("users-slider");

usersArray.forEach((user) => {
  const card = createUserCard(user);
  userSlider.append(card);
});

const sliderButtonsMeetPets = document.getElementById("pets-slider-buttons");

const prevButtonPets = createSliderButton("prev", "pets__slider__prev-btn");
prevButtonPets.disabled = true;
const nextButtonPets = createSliderButton("next", "pets__slider__next-btn");

sliderButtonsMeetPets.append(prevButtonPets, nextButtonPets);

const sliderButtonsUsers = document.getElementById("users-slider-buttons");

const prevButtonUsers = createSliderButton("prev", "users__slider__prev-btn");
const nextButtonUsers = createSliderButton("next", "users__slider__next-btn");

sliderButtonsUsers.append(prevButtonUsers, nextButtonUsers);

const sectionWatch = document.getElementById("watch-btn");
const buttonWatch = createButton("VIEW LIVE CAM", "watch");
sectionWatch.append(buttonWatch);

const sectionSlider = document.getElementById("slider-container");
const buttonSlider = createButton("choose your favourite", "slider");
sectionSlider.append(buttonSlider);

const sectionDonation = document.getElementById("donation-btn");
const buttonDonation = createButton("$ Donation Amount", "donation");
sectionDonation.append(buttonDonation);

const sectionPay = document.getElementById("pay-section");
const buttonPay = createButton("donate now", "pay");
sectionPay.append(buttonPay);

const sectionUsers = document.getElementById("users-section");
const buttonUsers = createButton("leave feedback", "users");
sectionUsers.append(buttonUsers);

const sectionCareTop = document.getElementById("care-top");
const buttonCare = createButton("choose your favourite", "care");
sectionCareTop.append(buttonCare);

const footerTop = document.getElementById("footer-top");
const buttonFooter = createButton("donate for volunteers", "footer");
footerTop.append(buttonFooter);

sliderMove();
createBurger();

const modalContainer = document.getElementById("landing-modal");
const modal = createCareModal();
modalContainer.append(modal);

createModalLogic();
