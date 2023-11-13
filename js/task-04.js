let counterValue = 0;
const button = document.querySelector('button[data-action="increment"]');
const button2 = document.querySelector('button[data-action="decrement"]');
const textHolder = document.getElementById("value");
textHolder.innerHTML = counterValue;

button.addEventListener("click", function () {
  textHolder.innerHTML = ++counterValue;
});

button2.addEventListener("click", function () {
  textHolder.innerHTML = --counterValue;
});
