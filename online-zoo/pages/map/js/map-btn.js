export function createMapAnimalIcon(icon) {
  const button = document.createElement("button");
  button.classList.add("map__marker", `map__marker--${icon.name}`);

  const image = document.createElement("img");

  image.src = icon.herf;
  image.alt = icon.name;

  button.append(image);

  return button;
}
