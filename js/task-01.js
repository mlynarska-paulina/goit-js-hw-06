const ul = document.querySelector("#categories");
let items = ul.querySelectorAll(".item");
console.log(`Number of categories: ${ul.childElementCount}`);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
