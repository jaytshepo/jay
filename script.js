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



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyADfkLMNqakJ7oe_17JD7yHT2vsAWTmSfs",
    authDomain: "login-tester-bbcd4.firebaseapp.com",
    projectId: "login-tester-bbcd4",
    storageBucket: "login-tester-bbcd4.firebasestorage.app",
    messagingSenderId: "269641711240",
    appId: "1:269641711240:web:f7ceb8893f1c54d44fe93d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

