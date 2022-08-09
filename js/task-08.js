const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");

formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const newObj = { email: email.value, password: password.value };

  console.log(newObj);
  evt.currentTarget.reset();
});
