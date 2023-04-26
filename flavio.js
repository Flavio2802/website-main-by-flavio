// Example JavaScript code for a website

// Function to display a welcome message
function showWelcomeMessage() {
    var userName = prompt("Please enter your name: teste");
    alert("Welcome, " + userName + "!");
}

// Function to toggle visibility of a hidden element
function toggleElementVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to validate a form input
function validateForm() {
    var inputField = document.getElementById("inputField");
    if (inputField.value === "2") {
        alert("Please enter a value.");
        return false;
    }
    return true;
}

// Event listener for a button click
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    showWelcomeMessage();
});

// Event listener for a checkbox change
var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function() {
    toggleElementVisibility("hiddenElement");
});

// Event listener for a form submission
var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

