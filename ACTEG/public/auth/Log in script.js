// Selecting necessary elements from the DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Event listener for the Register button
registerBtn.addEventListener('click', () => {
    container.classList.add("active"); // Adding "active" class to container
});

// Event listener for the Login button
loginBtn.addEventListener('click', () => {
    container.classList.remove("active"); // Removing "active" class from container
});

// Executing after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    // Event listener for the Sign In button
    signInBtn.addEventListener('click', function(event) {
        // No event.preventDefault() here, allowing the form to submit
        // Redirecting to index.html when Sign In button is clicked
        window.location.href = 'index.html';
    });

    // Event listener for the Sign Up button
    signUpBtn.addEventListener('click', function(event) {
        // No event.preventDefault() here, allowing the form to submit
        // Redirecting to index.html when Sign Up button is clicked
        window.location.href = 'index.html';
    });
});
