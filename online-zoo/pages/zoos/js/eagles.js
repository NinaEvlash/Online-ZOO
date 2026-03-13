import {
  createLink,
  linksArray,
  setActiveNav,
} from "../../../components/nav-links.js";
import {
  createSocialLink,
  socialLinksArray,
} from "../../../components/social-links.js";
import { createBurger } from "../../../components/burger.js";
import { createButton } from "../../../components/section-button.js";
import { createCamsSection } from "./cam-section.js";
import { createLeftPanel } from "./cam-section-panel.js";
import {
  animalPageArray,
  panelAnimalArray,
  animalKnowArray,
} from "./zoo-arrays.js";
import {
  createTopKnowCard,
  createAnimalCardInfo,
  createKnowBottomText,
} from "./know.js";

const headerNavList = document.getElementById("header-eagles-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerNavList.append(item);
});

const footerNavList = document.getElementById("footer-eagles-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerNavList.append(item);
}

const headerSocialList = document.getElementById("header-eagles-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  headerSocialList.append(item);
});

const footerSocialList = document.getElementById("footer-eagles-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  footerSocialList.append(item);
});

createBurger();

const knowPandaSection = document.getElementById("know-eagles-section");
const topKnowPandaCard = createTopKnowCard(animalKnowArray[1]);
const knowPandaCardInfo = createAnimalCardInfo(animalKnowArray[1]);
const knowPandaBottomText = createKnowBottomText(animalKnowArray[1]);
knowPandaSection.append(
  topKnowPandaCard,
  knowPandaCardInfo,
  knowPandaBottomText
);

const donationZoo = document.querySelector(".zoo-donation-btn");
const buttonDonation = createButton("$ Donation Amount", "donation");
donationZoo.append(buttonDonation);

const knowZoo = document.querySelector(".bottom-info-element");
const buttonKnow = createButton("VIEW map", "know");
knowZoo.append(buttonKnow);

const footerTop = document.getElementById("footer-top-eagles");
const buttonFooter = createButton("donate for volunteers", "footer");
footerTop.append(buttonFooter);

const camsPandaSection = document.getElementById("cams-eagles-section");

const item = createCamsSection(animalPageArray[1]);
const panel = createLeftPanel(panelAnimalArray);
camsPandaSection.append(item, panel);

document
  .querySelector(".cams__panel__top-btn")
  .addEventListener("click", () => {
    document
      .querySelector(".cams__panel")
      .classList.toggle("cams__panel--open");
  });
