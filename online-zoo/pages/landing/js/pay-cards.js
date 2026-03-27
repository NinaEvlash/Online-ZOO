export function createPayCard(pay, index) {
  const card = document.createElement("li");
  card.classList.add("pay__card", "flex");

  const cardNumar = document.createElement("div");
  cardNumar.classList.add("pay__card-number");

  cardNumar.textContent = `0${index + 1}`;

  const cardContent = document.createElement("div");
  cardContent.classList.add("pay__card-content", "flex");

  const cardPayImg = document.createElement("img");
  cardPayImg.classList.add("pay__card-img");

  cardPayImg.src = pay.image;
  cardPayImg.alt = pay.name;

  const cardPayDescr = document.createElement("div");
  cardPayDescr.classList.add("pay__card-descr");

  const svgWrapper = document.createElement("div");
  svgWrapper.classList.add("pay-icon");

  svgWrapper.innerHTML = pay.svg;

  const title = document.createElement("h3");
  title.classList.add("pay-title");

  title.textContent = pay.title;

  const text = document.createElement("p");
  text.classList.add("pay-text", "section-text");

  const textSm = document.createElement("p");
  textSm.classList.add("pay-text-320", "section-text", "hidden");

  text.textContent = pay.text;
  textSm.textContent = pay.textsm;

  const imgContent = document.createElement("div");
  imgContent.classList.add("pay__card-img-wrapper");

  imgContent.append(cardPayImg);

  cardPayDescr.append(svgWrapper, title, text, textSm);
  cardContent.append(imgContent, cardPayDescr);
  card.append(cardNumar, cardContent);

  return card;
}
