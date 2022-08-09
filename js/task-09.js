function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const nameEl = document.querySelector(".color");

const getColor = (evt) => {
  const bgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = bgColor;

  nameEl.textContent = bgColor;

  console.log(bgColor);
};

buttonEl.addEventListener("click", getColor);
