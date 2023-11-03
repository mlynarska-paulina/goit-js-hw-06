const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const array = document.getElementById("ingredients");
for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  li.setAttribute("class", "item");
  array.appendChild(li);
}
