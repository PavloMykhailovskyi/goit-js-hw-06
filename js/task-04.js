const actions = document.querySelector("#counter");
console.log(actions);

let counterValue = 0;

const decrButton = document.querySelector("[data-action='decrement']");
const incrButton = document.querySelector("[data-action='increment']");
console.log(decrButton);
let number = document.querySelector("#value");

const decrement = () => {
  counterValue -= 1;
  number.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  number.textContent = counterValue;
};

decrButton.addEventListener("click", decrement);
incrButton.addEventListener("click", increment);
