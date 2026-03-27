export const usersArray = [
  {
    name: "Karen Maithlan",
    title: "New Jersey, June 2020",
    text: "I am writing to thank you for your mission is to bring people closer to nature! Like myself, children were very impressed by the opportunity to explore the life of incredible animals in real-time.",
  },
  {
    name: "C. Stockman",
    title: "London, February 2020",
    text: "A fantastic experience for kids and adults alike! If anyone is looking for an attraction that educates people on wild animals - it's for you! I highly recommend seeing for yourself the variety of animals on your screen.",
  },
  {
    name: "Carol Larsen",
    title: "Toronto, November 2020",
    text: "We so enjoy the ever-evolving selection of animals from around the globe. THANK YOU for sharing these fascinating animal friends with us so that we may learn and increase our understanding of the animal kingdom.",
  },
  {
    name: "Tomas Ray",
    title: "Amsterdam, June 2020",
    text: "I want to thank you for the amazing sites you find to put your cameras to let each of us see things that we would probably never see on our own. There are so many positives on Zoo Online and I'm grateful for it. Thank you so much!",
  },
];

export function createUserCard(user) {
  const card = document.createElement("li");
  card.classList.add("user__card");

  const svgWrapper = document.createElement("div");
  svgWrapper.classList.add("user-icon");
  svgWrapper.innerHTML = `
  <svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.2798 19.56C22.5198 20.6 24.2398 22.16 25.4398 24.24C26.7198 26.24 27.3598 28.6 27.3598 31.32C27.3598 35.32 26.0798 38.56 23.5198 41.04C20.9598 43.52 17.6798 44.76 13.6798 44.76C9.67977 44.76 6.39977 43.52 3.83977 41.04C1.27977 38.56 -0.000234291 35.32 -0.000234291 31.32C-0.000234291 29.48 0.239766 27.64 0.719766 25.8C1.19977 23.96 2.27977 21.24 3.95977 17.64L11.6398 -2.71797e-05H25.9198L20.2798 19.56ZM51.7198 19.56C53.9598 20.6 55.6798 22.16 56.8798 24.24C58.1598 26.24 58.7998 28.6 58.7998 31.32C58.7998 35.32 57.5198 38.56 54.9598 41.04C52.3998 43.52 49.1198 44.76 45.1198 44.76C41.1198 44.76 37.8398 43.52 35.2798 41.04C32.7198 38.56 31.4398 35.32 31.4398 31.32C31.4398 29.48 31.6798 27.64 32.1598 25.8C32.6398 23.96 33.7198 21.24 35.3998 17.64L43.0798 -2.71797e-05H57.3598L51.7198 19.56Z" fill="#00A092"/>
  </svg>
  `;

  const title = document.createElement("h3");
  title.classList.add("user-title", "block-text");

  title.textContent = user.title;

  const text = document.createElement("p");
  text.classList.add("user-text", "section-text");

  text.textContent = user.text;

  const userName = document.createElement("p");
  userName.classList.add("user-name", "section-text");

  userName.textContent = user.name;

  card.append(svgWrapper, title, text, userName);

  return card;
}
