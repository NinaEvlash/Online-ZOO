const mapIconArray = [
  {
    name: "eagles",
    herf: "../../assets/icons/eagles-map.png",
  },
  {
    name: "crocodile",
    herf: "../../assets/icons/crocodile-map.png",
  },
  {
    name: "lion",
    herf: "../../assets/icons/lion-map.png",
  },
  {
    name: "gorilla",
    herf: "../../assets/icons/gorilla-map.png",
  },
  {
    name: "lemur",
    herf: "../../assets/icons/lemur-map.png",
  },
  {
    name: "panda",
    herf: "../../assets/icons/panda-map.png",
  },
  {
    name: "tiger",
    herf: "../../assets/icons/tiger-map.png",
  },
  {
    name: "koala",
    herf: "../../assets/icons/koala-map.png",
  },
];

function createMapAnimalIcon(icon) {
  const button = document.createElement("button");
  button.classList.add("map__marker", `map__marker--${icon.name}`);

  const image = document.createElement("img");

  image.src = icon.herf;
  image.alt = icon.name;

  button.append(image);

  return button;
}

const mapImageContainer = document.getElementById("map-image");

mapIconArray.forEach((icon) => {
  const item = createMapAnimalIcon(icon);
  mapImageContainer.append(item);
});
