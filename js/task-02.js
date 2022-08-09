const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const items = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");

list.innerHTML = items;
