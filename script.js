document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let response = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.innerText = "Please fill all fields!";
    } else {
        response.style.color = "green";
        response.innerText = "Message sent successfully!";
    }

});// Simple page load animation
window.onload = function() {
    document.body.style.opacity = "1";
};

// Initially hide content
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.8s";
// Page fade-in effect
document.body.style.opacity = "0";

window.onload = function() {
    document.body.style.opacity = "1";
};