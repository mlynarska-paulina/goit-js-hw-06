const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const array = document.getElementById("ingredients");

ingredients.map((ingredient) => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  li.setAttribute("class", "item");
  array.appendChild(li);
});
