let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (/^\s/.test(input.value)) {
    input.value = "";
  }
  output.textContent = input.value;
  if (input.value == "") {
    input.value.trim();
    output.textContent = "Anonymous";
  }
});
