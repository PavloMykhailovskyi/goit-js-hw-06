const textInput = document.querySelector("#validation-input");
const inputAttribute = textInput.getAttribute("data-length");

const onBlur = (event) => {
  event.currentTarget.value.length === Number(inputAttribute)
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
};

textInput.addEventListener("blur", onBlur);
