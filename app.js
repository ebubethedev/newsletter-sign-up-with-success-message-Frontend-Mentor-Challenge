let emailError = document.getElementById("email-error");
let emailField = document.getElementById("mail");
let successMsg = document.getElementById("success-msg")

function validateEmail() {

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Valid email required";
        emailField.style.borderColor = "hsl(4, 100%, 67%)";
        return false;

    }
    emailError.innerHTML = "";
    emailField.style.borderColor = "green";
    return true;
}


const successShow = document.querySelector(".success-msg");
const subscribeBtn = document.querySelector(".subscribe-btn");
const hideContainer = document.querySelector(".container");
const dismissBtn = document.querySelector(".success-msg-btn");

subscribeBtn.addEventListener('click', () => {
    const visibility = successShow.getAttribute("data-visible");
    if (visibility === "false") {
        successShow.setAttribute("data-visible", true);
        subscribeBtn.setAttribute("aria-expanded", true);
        hideContainer.setAttribute("data-visibility", false);
        dismissBtn.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        successShow.setAttribute("data-visible", false);
        subscribeBtn.setAttribute("aria-expanded", false);
        hideContainer.setAttribute("data-visibility", true);
        dismissBtn.setAttribute("aria-expanded", false);
    }
})
dismissBtn.addEventListener('click', () => {
    const visibility = successShow.getAttribute("data-visible");
    if (visibility === "true") {
        hideContainer.setAttribute("data-visibility", true);
        successShow.setAttribute("data-visible", false);
    } else if (visibility === "false") {
        hideContainer.setAttribute("data-visibility", false);
        successShow.setAttribute("data-visible", true);
    }
})