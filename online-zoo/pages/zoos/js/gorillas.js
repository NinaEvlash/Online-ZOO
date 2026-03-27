import { createAllPagesContent, changeListOrder } from "./all-pages.js";

createAllPagesContent("gorillas", 2);

const list = document.querySelector(".cams__panel__list");
changeListOrder(list, '[data-animal="gorilla"]');
