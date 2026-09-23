// ======================================
// Career Guidance System
// Main JavaScript
// ======================================


// ======================================
// User Login Validation
// ======================================

function validateLoginForm(form) {

    let email = form.querySelector("#email");
    let password = form.querySelector("#password");

    if (email.value.trim() === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }

    if (password.value.trim() === "") {
        alert("Please enter your password.");
        password.focus();
        return false;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        password.focus();
        return false;
    }

    alert("Login successful!");

    return true;
}


// ======================================
// Registration Validation
// ======================================

function validateRegisterForm(form) {

    let name = form.querySelector("#name");
    let email = form.querySelector("#email");
    let password = form.querySelector("#password");
    let confirmPassword = form.querySelector("#confirm-password");

    if (name.value.trim() === "") {
        alert("Please enter your full name.");
        name.focus();
        return false;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }

    if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        password.focus();
        return false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        confirmPassword.focus();
        return false;
    }

    alert("Registration successful!");

    return true;
}