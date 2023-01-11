const contactForm = document.querySelector(".contact__form");
const formInputs = document.querySelectorAll(".input");
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

// REMOVE BACKGROUND COLOR IF USER LEAVES INPUT ELEMENT EMPTY
formInputs.forEach((input) =>
  input.addEventListener("blur", function () {
    if (input.value == "" || input.value == null) {
      input.style.backgroundColor = "transparent";
    } else {
      if (document.body.classList.contains("light")) {
        input.style.backgroundColor = "rgba(255, 255, 255, 1)";
      } else {
        input.style.backgroundColor = "rgba(1, 14, 42, 1)";
      }
    }
  })
);

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
