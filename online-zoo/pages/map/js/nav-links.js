const linksArray = [
  {
    page: "about",
    href: "../../index.html",
  },
  {
    page: "map",
    href: "#",
  },
  {
    page: "zoos",
    href: "../../pages/zoos/panda.html",
  },
  {
    page: "contact us",
    href: "../../pages/contacts/index.html",
  },
  {
    page: "design",
    href: "https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=44-9749&t=DSDHyPzamUd7wD80-0",
  },
];

function createLink(link, extraClass) {
  const item = document.createElement("li");
  item.classList.add("menu-list-item");

  const itemLink = document.createElement("a");
  itemLink.classList.add(`${extraClass}-link`, "nav-link");

  if (link.page === "map") {
    itemLink.classList.add("activ-page");
  }

  itemLink.href = link.href;
  itemLink.textContent = link.page;

  item.append(itemLink);
  return item;
}

const headerNavList = document.getElementById("header-nav-list");
linksArray.forEach((link) => {
  const item = createLink(link, "header");
  headerNavList.append(item);
});

const footerNavList = document.getElementById("footer-nav-list");
for (let i = 0; i < linksArray.length - 1; i += 1) {
  const item = createLink(linksArray[i], "footer");
  footerNavList.append(item);
}
