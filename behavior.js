// Copy button: reads the LinkedIn link from the page and hands it to the clipboard

const copyButton = document.querySelector(".copy-linkedin");
const linkedinLink = document.querySelector(".linkedin-link");

function copyLinkedin() {
  navigator.clipboard.writeText(linkedinLink.href);
  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy my LinkedIn link";
  }, 2000);
}

// No parentheses after copyLinkedin: we hand the function to the browser
copyButton.addEventListener("click", copyLinkedin);
