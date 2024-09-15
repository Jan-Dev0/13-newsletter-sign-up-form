var validate = new Bouncer(".signup__form", {
  messageAfterField: false,
});

const signupForm = document.querySelector(".signup__form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Run Bouncer validation manually
  var invalidFields = validate.validateAll(signupForm);

  if (invalidFields.length === 0) {
    const signup = document.querySelector(".signup");
    const input = document.querySelector("#email");
    const span = document.querySelector(".success-message__email-address");
    span.textContent = input.value;
    signup.classList.add("signup--success");
  }
});

const dismissBtn = document.querySelector(".success-message__dismiss-btn");

dismissBtn.addEventListener("click", () => {
  const signup = document.querySelector(".signup");

  signup.classList.remove("signup--success");

  signupForm.reset();
});
