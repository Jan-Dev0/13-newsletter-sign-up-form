const signupForm = document.querySelector(".signup__form");
const signup = document.querySelector(".signup");
const successContainer = document.querySelector(".signup__success");
const formContainer = document.querySelector(".signup__form-container");
const dismissBtn = document.querySelector(".signup__success-dismiss-btn");

const validator = new JustValidate(".signup__form", {
  errorFieldCssClass: "error",
  errorLabelCssClass: "signup__error-message",
  errorsContainer: document.querySelector("#email-error"),
});

validator
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Invalid Email address",
    },
  ])
  .onSuccess((event) => {
    event.preventDefault();

    successContainer.classList.toggle("hidden", false);
    formContainer.classList.toggle("hidden", true);
  });

dismissBtn.addEventListener("click", () => {
  successContainer.classList.toggle("hidden", true);
  formContainer.classList.toggle("hidden", false);

  signupForm.reset();
});
