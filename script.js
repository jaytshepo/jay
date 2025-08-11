let isLogin = true;

const formTitle = document.getElementById("form-title");
const extraField = document.getElementById("extra-field");
const toggleLink = document.getElementById("toggle-link");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const authForm = document.getElementById("auth-form");

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    extraField.style.display = "none";
    submitBtn.textContent = "Login";
    toggleLink.textContent = "Register";
    document.getElementById("toggle-text").firstChild.textContent = "Don't have an account? ";
  } else {
    formTitle.textContent = "Register";
    extraField.style.display = "block";
    submitBtn.textContent = "Register";
    toggleLink.textContent = "Login";
    document.getElementById("toggle-text").firstChild.textContent = "Already have an account? ";
  }
});

authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();

  if (isLogin) {
    message.style.color = "green";
    message.textContent = `Welcome back, ${username}!`;
  } else {
    if (!email) {
      message.style.color = "red";
      message.textContent = "Please enter your email.";
      return;
    }
    message.style.color = "green";
    message.textContent = `Account created for ${username}!`;
  }

  authForm.reset();
});
