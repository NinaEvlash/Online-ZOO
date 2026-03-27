export function createBurger() {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__menu");
  const body = document.querySelector("body");
  const html = document.querySelector("html");

  burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    html.classList.toggle("lock");
    burger.classList.toggle("is-active");
    nav.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      body.classList.remove("lock");
      html.classList.remove("lock");
      nav.classList.remove("active");
      burger.classList.remove("is-active");
    }
  });
}
