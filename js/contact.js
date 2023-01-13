const contactForm = document.querySelector(".contact__form");
const formFullName = document.querySelector(".full-name");
const formEmail = document.querySelector(".email");
const formMessage = document.querySelector(".msg");

// FORM ERROR FUNCTION
const formShowError = function (param) {
  param.classList.add("error");
  param.nextElementSibling.classList.add("active");
  setTimeout(() => {
    param.classList.remove("error");
    param.nextElementSibling.classList.remove("active");
  }, 3000);
};

// FORM VALIDATION
contactForm.addEventListener("submit", function (e) {
  if (formFullName.value === "" || formFullName.value == null) {
    e.preventDefault();
    formShowError(formFullName);
  }

  if (formEmail.value === "" || formEmail.value == null) {
    e.preventDefault();
    formShowError(formEmail);
  }

  if (formMessage.value === "" || formMessage.value == null) {
    e.preventDefault();
    formShowError(formMessage);
  }
});
