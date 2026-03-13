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

export function createAllPagesContent(pageName, num) {
  const headerNavList = document.getElementById(`header-${pageName}-nav-list`);
  linksArray.forEach((link) => {
    const item = createLink(link, "header");
    headerNavList.append(item);
  });

  const footerNavList = document.getElementById(`footer-${pageName}-nav-list`);
  for (let i = 0; i < linksArray.length - 1; i += 1) {
    const item = createLink(linksArray[i], "footer");
    footerNavList.append(item);
  }

  setActiveNav();

  const headerSocialList = document.getElementById(
    `header-${pageName}-social-list`
  );
  socialLinksArray.forEach((link) => {
    const item = createSocialLink(link);
    headerSocialList.append(item);
  });

  const footerSocialList = document.getElementById(
    `footer-${pageName}-social-list`
  );
  socialLinksArray.forEach((link) => {
    const item = createSocialLink(link);
    footerSocialList.append(item);
  });

  createBurger();

  const knowSection = document.getElementById(`know-${pageName}-section`);
  const topKnowCard = createTopKnowCard(animalKnowArray[num]);
  const knowCardInfo = createAnimalCardInfo(animalKnowArray[num]);
  const knowBottomText = createKnowBottomText(animalKnowArray[num]);
  knowSection.append(topKnowCard, knowCardInfo, knowBottomText);

  const donationZoo = document.querySelector(".zoo-donation-btn");
  const buttonDonation = createButton("$ Donation Amount", "donation");
  donationZoo.append(buttonDonation);

  const knowZoo = document.querySelector(".bottom-info-element");
  const buttonKnow = createButton("VIEW map", "know");
  knowZoo.append(buttonKnow);

  const footerTop = document.getElementById(`footer-top-${pageName}`);
  const buttonFooter = createButton("donate for volunteers", "footer");
  footerTop.append(buttonFooter);

  const camsSection = document.getElementById(`cams-${pageName}-section`);

  const item = createCamsSection(animalPageArray[num]);
  const panel = createLeftPanel(panelAnimalArray);
  camsSection.append(item, panel);

  document
    .querySelector(".cams__panel__top-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".cams__panel")
        .classList.toggle("cams__panel--open");
    });
}
