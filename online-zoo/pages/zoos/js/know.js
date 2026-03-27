export function createTopKnowCard(animal) {
  const topCard = document.createElement("div");
  topCard.classList.add("zoo-know__card");

  const title = document.createElement("h2");
  title.classList.add("zoo-know__card-title", "section-title");
  title.textContent = "did you know?";

  const topDescr = document.createElement("p");
  topDescr.classList.add("zoo-know__card-descr", "block-text");
  topDescr.textContent = animal.topDescr;

  topCard.append(title, topDescr);

  return topCard;
}

export function createAnimalCardInfo(animal) {
  const infoCard = document.createElement("div");
  infoCard.classList.add("animal-card__info", "flex");

  const cardStats = document.createElement("dl");
  cardStats.classList.add("animal-card__stats");

  const commonNameEL = createElementInfo("Common name:", animal.commonName);
  const scientificNameEL = createElementInfo(
    "Scientific name:",
    animal.scientificName
  );
  const typeEL = createElementInfo("Type:", animal.type);
  const sizeEL = createElementInfo("Size:", animal.size);
  const dietEL = createElementInfo("Diet:", animal.diet);
  const habitatEL = createElementInfo("Habitat:", animal.habitat);
  const rangeEL = createElementInfo("Range:", animal.range);
  rangeEL.classList.add("bottom-info-element");

  cardStats.append(
    commonNameEL,
    scientificNameEL,
    typeEL,
    sizeEL,
    dietEL,
    habitatEL,
    rangeEL
  );

  const cardImgWrapper = document.createElement("div");
  cardImgWrapper.classList.add("animal-card__image");
  const cardImg = document.createElement("img");
  cardImg.src = animal.image;
  cardImg.alt = animal.commonName;
  cardImgWrapper.append(cardImg);

  infoCard.append(cardStats, cardImgWrapper);

  return infoCard;
}

function createElementInfo(dtDescr, ddDescr) {
  const commonEL = document.createElement("div");
  const commonDT = document.createElement("dt");
  const commonDD = document.createElement("dd");
  commonDT.textContent = dtDescr;
  commonDD.textContent = ddDescr;
  commonEL.append(commonDT, commonDD);

  return commonEL;
}

export function createKnowBottomText(animal) {
  const text = document.createElement("p");
  text.classList.add("zoo-know__text", "section-text");

  text.textContent = animal.bottomDescr;

  return text;
}
