const form = document.querySelector(".form");
const email = document.querySelector(".email");
const error = document.querySelector(".error");
const errorEmpty = document.querySelector(".error-empty");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener("blur", function (e) {
  if (!email.value) {
    error.style.display = "none";
    errorEmpty.style.display = "block";
    email.classList.add("invalid");
  } else {
    error.style.display = "none";
    errorEmpty.style.display = "none";
    email.classList.remove("invalid");
  }
});

form.addEventListener("submit", function (e) {
  if (!email.value) {
    e.preventDefault();
    error.style.display = "none";
    errorEmpty.style.display = "block";
    email.classList.add("invalid");
  } else if (email.value && !validRegex.test(email.value)) {
    e.preventDefault();
    errorEmpty.style.display = "none";
    error.style.display = "block";
    email.classList.add("invalid");
  } else {
    error.style.display = "none";
    errorEmpty.style.display = "none";
    email.classList.remove("invalid");
  }
});
