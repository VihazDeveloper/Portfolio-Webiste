const scriptURL = "https://script.google.com/macros/s/AKfycbzWvlnqvFtPuIa7oYJ3WK5SZrApdFstFdpGiIqpOtMDs0nlAa00UtRgNPA53W563_Pp0w/exec";
const form = document.forms["contact-me"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // When Sending Proggress If Show Btn Loading
    // Show Loading Button and Hide Send Button
    btnLoading.classList.toggle("d-none");
    btnSend.classList.toggle("d-none");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // Show Send Button and Hide Loading Button
            btnLoading.classList.toggle("d-none");
            btnSend.classList.toggle("d-none");

            // Show Succces Alert
            myAlert.classList.toggle("d-none");

            // Reset Form
            form.reset();

            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});
