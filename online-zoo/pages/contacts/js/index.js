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

const headerNavList = document.getElementById("header-contacts-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerNavList.append(item);
});

const footerNavList = document.getElementById("footer-contacts-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerNavList.append(item);
}

setActiveNav();

const headerSocialList = document.getElementById("header-contacts-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  headerSocialList.append(item);
});

const footerSocialList = document.getElementById("footer-contacts-social-list");
socialLinksArray.forEach((link) => {
  const item = createSocialLink(link);
  footerSocialList.append(item);
});

const footerTop = document.getElementById("footer-top-contacts");
const buttonFooter = createButton("donate for volunteers", "footer");
footerTop.append(buttonFooter);

createBurger();

const contactsForm = document.getElementById("contacts-form");
const buttonContacts = createButton("send message", "contacts");
contactsForm.append(buttonContacts);
