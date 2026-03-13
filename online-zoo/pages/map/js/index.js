import { mapIconArray } from "./map-arrays.js";
import { createMapAnimalIcon } from "./map-btn.js";
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

const headerNavList = document.getElementById("header-map-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerNavList.append(item);
});

const footerNavList = document.getElementById("footer-map-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerNavList.append(item);
}

setActiveNav();

const headerMapSocialList = document.getElementById("header-map-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  headerMapSocialList.append(item);
});

const footerMapSocialList = document.getElementById("footer-map-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  footerMapSocialList.append(item);
});

const mapImageContainer = document.getElementById("map-image");

mapIconArray.forEach((icon) => {
  const item = createMapAnimalIcon(icon);
  mapImageContainer.append(item);
});

const footerTop = document.getElementById("footer-map-top");
const buttonFooter = createButton("donate for volunteers", "footer");
footerTop.append(buttonFooter);

createBurger();
