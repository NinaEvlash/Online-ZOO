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

const headerNavList = document.getElementById("header-gorillas-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerNavList.append(item);
});

const footerNavList = document.getElementById("footer-gorillas-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerNavList.append(item);
}

const headerSocialList = document.getElementById("header-gorillas-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  headerSocialList.append(item);
});

const footerSocialList = document.getElementById("footer-gorillas-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  footerSocialList.append(item);
});

createBurger();

const knowPandaSection = document.getElementById("know-gorillas-section");
const topKnowPandaCard = createTopKnowCard(animalKnowArray[2]);
const knowPandaCardInfo = createAnimalCardInfo(animalKnowArray[2]);
const knowPandaBottomText = createKnowBottomText(animalKnowArray[2]);
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

const footerTop = document.getElementById("footer-top-gorillas");
const buttonFooter = createButton("donate for volunteers", "footer");
footerTop.append(buttonFooter);

const camsPandaSection = document.getElementById("cams-gorillas-section");

const item = createCamsSection(animalPageArray[2]);
const panel = createLeftPanel(panelAnimalArray);
camsPandaSection.append(item, panel);

const list = document.querySelector(".cams__panel__list");
const first = list.children[0];
const second = list.children[2];
list.insertBefore(second, first);

document
  .querySelector(".cams__panel__top-btn")
  .addEventListener("click", () => {
    document
      .querySelector(".cams__panel")
      .classList.toggle("cams__panel--open");
  });
