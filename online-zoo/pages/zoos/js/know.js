const animalKnowArray = [
  {
    topDescr:
      "Pandas are often seen eating in a relaxed sitting posture, with their hind legs stretched out before them. They may appear sedentary, but they are skilled tree-climbers and efficient swimmers.",
    image: "../../assets/images/zoo-panda-know.png",
    commonName: "Giant Panda",
    scientificName: "Ailuropoda melanoleuca",
    type: "Herbivore",
    size: "4 to 5 feet",
    diet: "Omnivore",
    habitat: "Forests",
    range: "Eastern Asia",
    bottomDescr:
      "Giant pandas are very unusual animals that eat almost exclusively bamboo, which is very low in nutrients. Because of this, they have many unique adaptations for their low-energy lifestyle. Giant pandas are solitary. They have a highly developed sense of smell that males use to avoid each other and to find females for mating in the spring. After a five-month pregnancy, females give birth to a cub or two, though they cannot care for both twins. The blind infants weigh only 5 ounces at birth and cannot crawl until they reach three months of age. They are born white, and develop their much loved coloring later. Habitat loss is the primary threat to this species. Its popularity around the world has helped the giant panda become the focus of successful conservation programs.",
  },
];

function createTopKnowCard(animal) {
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

function createAnimalCardInfo(animal) {
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

function createKnowBottomText(animal) {
  const text = document.createElement("p");
  text.classList.add("zoo-know__text", "section-text");

  text.textContent = animal.bottomDescr;

  return text;
}

const knowPandaSection = document.getElementById("know-panda-section");
const topKnowPandaCard = createTopKnowCard(animalKnowArray[0]);
const knowPandaCardInfo = createAnimalCardInfo(animalKnowArray[0]);
const knowPandaBottomText = createKnowBottomText(animalKnowArray[0]);
knowPandaSection.append(
  topKnowPandaCard,
  knowPandaCardInfo,
  knowPandaBottomText
);
