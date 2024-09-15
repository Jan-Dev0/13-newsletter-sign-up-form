var validate = new Bouncer("#signup-form", {
  messageAfterField: false,
});

const signupForm = document.querySelector("#signup-form");
const signup = document.querySelector(".signup");
const successContainer = document.querySelector(".signup__success-container");
const formContainer = document.querySelector(".signup__form-container");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Run Bouncer validation manually
  var invalidFields = validate.validateAll(signupForm);

  if (invalidFields.length === 0) {
    const input = document.querySelector("#email");
    const span = document.querySelector(".success-message__email-address");
    span.textContent = input.value;

    // Add the success class and hide the form container
    signup.classList.add("signup--success");
    successContainer.style.display = "flex";
    formContainer.style.display = "none";
  }
});

// Handle dismiss button
document.querySelector(".success-message__dismiss-btn").addEventListener("click", () => {
  signup.classList.remove("signup--success");
  signupForm.reset(); 
  successContainer.style.display = "none";
  formContainer.style.display = "flex"; 
});
