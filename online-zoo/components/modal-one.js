const buttonTextArray = ["$20", "$30", "$50", "$80", "$100", "Other amount"];

function createButton(text) {
  const button = document.createElement("button");
  button.classList.add("modal-button", "reset-btn", "section-btn");

  button.textContent = text;

  return button;
}

export function createCareModal() {
  const modalBox = document.createElement("div");
  modalBox.classList.add("modal-box");

  const closeButton = document.createElement("button");
  closeButton.classList.add("modal-close-button", "reset-btn");

  closeButton.innerHTML = `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5599 2.56066C30.1457 1.97487 30.1457 1.02512 29.5599 0.439337C28.9741 -0.146448 28.0243 -0.146445 27.4386 0.439343L14.9997 12.8783L2.56112 0.439648C1.97534 -0.14614 1.02559 -0.146143 0.4398 0.439642C-0.145987 1.02543 -0.14599 1.97517 0.439795 2.56096L12.8784 14.9996L0.439337 27.4387C-0.146448 28.0245 -0.146445 28.9743 0.439343 29.56C1.02513 30.1458 1.97488 30.1458 2.56066 29.56L14.9997 17.1209L27.439 29.5603C28.0248 30.1461 28.9745 30.1461 29.5603 29.5604C30.1461 28.9746 30.1461 28.0248 29.5603 27.439L17.121 14.9996L29.5599 2.56066Z" fill="white"/>
  </svg>
  `;

  const modalContent = document.createElement("div");
  modalBox.classList.add("modal-content");

  const modalImageWrapper = document.createElement("div");
  modalImageWrapper.classList.add("modal-image-wrapper");
  const modalImage = document.createElement("img");
  modalImage.classList.add("modal-image");
  modalImage.src = "../assets/images/modal-care-img.png";
  modalImage.alt = "Modal foto";
  modalImageWrapper.append(modalImage);

  const modalDescr = document.createElement("div");
  modalDescr.classList.add("modal-descr");
  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal-descr-title", "section-title");
  modalTitle.textContent = "together we care, save and protect!";
  const modalText = document.createElement("p");
  modalText.classList.add("modal-descr-text", "section-text");
  modalText.textContent =
    "Your most generous gift not only cares for countless animals, but it also offers hope and a vital lifeline to the world’s most endangered wildlife relying on us to survive.";

  const modalButtonsWrapper = document.createElement("div");
  modalButtonsWrapper.classList.add("modal-buttons-wrapper", "flex");

  buttonTextArray.forEach((text) => {
    const btn = createButton(text);
    modalButtonsWrapper.append(btn);
  });

  modalDescr.append(modalTitle, modalText);
  modalContent.append(modalImageWrapper, modalDescr, modalButtonsWrapper);
  modalBox.append(closeButton, modalContent);

  return modalBox;
}

export function createModalLogic() {
  const modal = document.querySelector(".modal");
  const buttonOpen = document.querySelector(".footer__button");
  const buttonClose = document.querySelector(".modal-close-button");
  const body = document.querySelector("body");
  const html = document.querySelector("html");

  buttonOpen.addEventListener("click", function () {
    body.classList.toggle("modal-lock");
    html.classList.toggle("modal-lock");
    modal.classList.add("open");
  });
  buttonClose.addEventListener("click", function () {
    body.classList.remove("modal-lock");
    html.classList.remove("modal-lock");
    modal.classList.remove("open");
  });
  document.addEventListener("click", (e) => {
    if (e.target === modal) {
      body.classList.remove("modal-lock");
      html.classList.remove("modal-lock");
      modal.classList.remove("open");
    }
  });
}
