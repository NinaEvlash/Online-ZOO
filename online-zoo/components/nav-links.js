export const linksArray = [
  {
    page: "about",
    href: "../../index.html",
  },
  {
    page: "map",
    href: "../../pages/map/index.html",
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

export function createLink(link, extraClass) {
  const item = document.createElement("li");
  item.classList.add("menu-list-item");

  const itemLink = document.createElement("a");
  itemLink.classList.add(`${extraClass}-link`, "nav-link");

  itemLink.href = link.href;
  itemLink.textContent = link.page;

  item.append(itemLink);
  return item;
}

export function setActiveNav() {
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.classList.add("activ-page");
    }
  });
}
