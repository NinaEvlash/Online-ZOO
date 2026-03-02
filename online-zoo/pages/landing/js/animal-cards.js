const animalsArray = [
  {
    name: "Lucas",
    image: "assets/images/panda.png",
    title: "Giant Panda",
    text: "Native to central China, giant pandas have come to symbolize vulnerable species.",
    href: "pages/zoos/panda.html",
  },
  {
    name: "Sam & Lora",
    image: "assets/images/eagles.png",
    title: "West End Bald Eagles",
    text: "Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.",
    href: "pages/zoos/eagles.html",
  },
  {
    name: "Andy",
    image: "assets/images/lemur.png",
    title: "Madagascarian Lemur ",
    text: "Lemurs are considered the world’s most endangered group of mammals.",
    href: "pages/zoos/lemur.html",
  },
  {
    name: " Liz",
    image: "assets/images/koala.png",
    title: "Australian Koala",
    text: "The elevated walkways bring you to eye level with the koalas as they perch in their forest.",
    href: "pages/zoos/koala.html",
  },
  {
    name: "Glen",
    image: "assets/images/gorilla.png",
    title: "Gorilla in Congo ",
    text: "Variety of snacks very important for the healthy life of gorillas and his plenty of babies.",
    href: "pages/zoos/gorillas.html",
  },
  {
    name: "Shake",
    image: "assets/images/lion.png",
    title: "African Lion",
    text: "Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.",
    href: "pages/zoos/lion.html",
  },
  {
    name: "Mike",
    image: "assets/images/crocodile.png",
    title: "Chinese Alligator",
    text: "From nose to tail, belly to back, hard scales protect this petite alligator.",
    href: "pages/zoos/crocodile.html",
  },
  {
    name: " Senja",
    image: "assets/images/tiger.png",
    title: "Sumatran Tiger",
    text: "Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.",
    href: "pages/zoos/tiger.html",
  },
];

const container = document.getElementById("sliders-container");

function createCard(animal) {
  const card = document.createElement("a");
  card.classList.add("card-animal-slider", "card-animal", "flex");

  card.href = animal.href;

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-animal-image");

  const cardImageName = document.createElement("p");
  cardImageName.classList.add("animal-name", "block-text");

  cardImageName.textContent = animal.name;

  const cardImageFoto = document.createElement("img");
  cardImageFoto.classList.add("animal-foto");

  cardImageFoto.src = animal.image;
  cardImageFoto.alt = animal.name;

  cardImage.append(cardImageName, cardImageFoto);

  const title = document.createElement("h3");
  title.classList.add("card-animal-title", "block-text");

  title.textContent = animal.title;

  const descr = document.createElement("p");
  descr.classList.add("card-animal-descr", "section-text");

  descr.textContent = animal.text;

  const button = document.createElement("div");
  button.classList.add("card-animal-button", "section-btn");

  const textBtn = document.createElement("span");
  const iconBtn = document.createElement("span");

  textBtn.textContent = "VIEW LIVE CAM";
  iconBtn.innerHTML = `
  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2098 0.119971C13.0277 0.199174 12.8622 0.315255 12.7229 0.461565C12.5833 0.607505 12.4725 0.780876 12.397 0.971748C12.3214 1.16262 12.2825 1.36724 12.2825 1.57389C12.2825 1.78055 12.3214 1.98517 12.397 2.17604C12.4725 2.36691 12.5833 2.54028 12.7229 2.68622L18.7506 9H1.6C1.17565 9 0.768688 9.21071 0.468629 9.58579C0.168571 9.96086 0 10.4696 0 11C0 11.5304 0.168571 12.0391 0.468629 12.4142C0.768688 12.7893 1.17565 13 1.6 13H18.7514L12.7229 19.3146C12.4414 19.6096 12.2833 20.0097 12.2833 20.4269C12.2833 20.8441 12.4414 21.2443 12.7229 21.5393C13.0045 21.8343 13.3863 22 13.7845 22C14.1826 22 14.5645 21.8343 14.846 21.5393L23.842 12.1127C23.9816 11.9668 24.0924 11.7934 24.168 11.6026C24.2436 11.4117 24.2825 11.2071 24.2825 11.0004C24.2825 10.7938 24.2436 10.5891 24.168 10.3983C24.0924 10.2074 23.9816 10.034 23.842 9.88808L14.846 0.461565C14.7067 0.315255 14.5413 0.199174 14.3591 0.119971C14.177 0.0407677 13.9817 0 13.7845 0C13.5873 0 13.392 0.0407677 13.2098 0.119971Z" fill="currentColor"/>
  </svg>
  `;

  button.append(textBtn, iconBtn);

  const content = document.createElement("div");
  content.classList.add("card-animal-content", "flex");
  content.append(title, descr, button);

  card.append(cardImage, content);

  return card;
}

animalsArray.forEach((animal) => {
  const card = createCard(animal);
  container.append(card);
});
