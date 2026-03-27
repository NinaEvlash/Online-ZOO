import { createAllPagesContent, changeListOrder } from "./all-pages.js";

createAllPagesContent("eagles", 1);

const list = document.querySelector(".cams__panel__list");
changeListOrder(list, '[data-animal="eagle"]');
