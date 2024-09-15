

const signupForm = document.querySelector(".signup__form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
    const signup = document.querySelector(".signup");
    const input = document.querySelector("#email");
    const span = document.querySelector(".success-message__email-address");
    console.log(span);
    span.textContent = input.value;
    signup.classList.add("signup--success");
});

const dismissBtn = document.querySelector(".success-message__dismiss-btn");

dismissBtn.addEventListener("click", () => {
  const signup = document.querySelector(".signup");
  signup.classList.remove("signup--success");
});
var validate = new Bouncer(".signup__form", {
  messageAfterField: false,
});