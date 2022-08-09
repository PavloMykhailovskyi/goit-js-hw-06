const formEl = document.querySelector(".login-form");
const buttonEl = document.querySelector("button");
// const emailEl = formEl.elements["email"];
// const passwordEl = formEl.elements["password"];
// let newObj = {};

// const getLogin = (evt) => {
//   evt.preventDefault();
//   if (emailEl.value === "" || passwordEl === "") {
//     alert("Всі поля повинні бути заповнені!");
//   }
//   newObj.push(`email: ${emailEl.value}`, `password: ${passwordEl.value}`);
// };

// buttonEl.addEventListener("submit", getLogin);

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
