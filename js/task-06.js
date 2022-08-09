const textInput = document.querySelector("#validation-input");
const inputAttribute = textInput.getAttribute("data-length");

const onBlur = (event) => {
  if (event.currentTarget.value.length === Number(inputAttribute)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.remove("valid");
  textInput.classList.add("invalid");
};

textInput.addEventListener("blur", onBlur);
