/* My Website Manager: password screen + Typed.js headline */

(() => {
  "use strict";

  const SITE_PASSWORD = "123456789";

  const loginScreen = document.getElementById("loginScreen");
  const protectedContent = document.getElementById("protectedContent");
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("sitePassword");
  const loginError = document.getElementById("loginError");

  function unlockWebsite() {
    loginScreen.hidden = true;
    protectedContent.hidden = false;

    sessionStorage.setItem("myWebsiteManagerUnlocked", "true");

    startTypedText();
  }

  function startTypedText() {
    if (
      window.Typed &&
      document.getElementById("element") &&
      !window.__websiteManagerTyped
    ) {
      window.__websiteManagerTyped = new Typed("#element", {
        strings: ["Software Developer,", "And Also Designer."],
        typeSpeed: 70,
        backSpeed: 35,
        backDelay: 1200,
        loop: true,
        showCursor: true,
      });
    }
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (passwordInput.value === SITE_PASSWORD) {
      loginError.textContent = "";
      passwordInput.value = "";

      unlockWebsite();
    } else {
      loginError.textContent = "Incorrect password. Please try again.";

      passwordInput.select();
    }
  });

  if (sessionStorage.getItem("myWebsiteManagerUnlocked") === "true") {
    unlockWebsite();
  } else {
    loginScreen.hidden = false;
    protectedContent.hidden = true;

    passwordInput.focus();
  }
})();


document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  const blocked =
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey &&
      ["i", "j", "c", "k"].includes(key)) ||
    (event.ctrlKey && ["u", "s"].includes(key));

  if (blocked) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);
