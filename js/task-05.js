const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (ev) => {
  if (textInput.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = ev.currentTarget.value;
  }
});
