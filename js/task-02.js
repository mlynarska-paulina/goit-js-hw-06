const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const array = document.getElementById("ingredients");
const elements = [];
ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  li.setAttribute("class", "item");
  elements.push(li);
});
array.append(...elements);
