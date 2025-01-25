// JavaScript to toggle between Login and Sign Up forms
function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-link").style.backgroundColor = "#45a049";
    document.getElementById("signup-link").style.backgroundColor = "#333";
}

function showSignup() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signup-link").style.backgroundColor = "#45a049";
    document.getElementById("login-link").style.backgroundColor = "#333";
}

// By default show the Login form
window.onload = showLogin;