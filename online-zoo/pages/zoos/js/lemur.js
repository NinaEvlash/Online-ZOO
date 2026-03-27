import { createAllPagesContent, changeListOrder } from "./all-pages.js";

createAllPagesContent("lemur", 3);

const list = document.querySelector(".cams__panel__list");
changeListOrder(list, '[data-animal="lemur"]');
