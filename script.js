// Show prompt when page loads
let userInput = prompt("Please enter your name:");

let alertMessage = "Your Name is, " + userInput;
alert(alertMessage);

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const contactInfo = document.getElementById("contactInfo");

    // Function to hide alert when button is clicked
    function hideAlert() {
        console.clear(); // Clears the console (optional)
    }

    // When "Yes" is clicked
    yesButton.addEventListener("click", function () {
        contactInfo.style.display = "block"; // Show contact info
        hideAlert(); // Hide alert
    });

    // When "No" is clicked
    noButton.addEventListener("click", function () {
        contactInfo.style.display = "none"; // Hide contact info
        hideAlert(); // Hide alert
    });
});
