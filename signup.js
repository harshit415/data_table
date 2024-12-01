document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    let errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Error collection
    let errors = [];

    // Validate name
    if (name === "") {
        errors.push("Name is required.");
    }

    // Validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Invalid email address.");
    }

    // Validate password length
    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Display errors or submit form
    if (errors.length > 0) {
        errors.forEach(function(error) {
            const errorParagraph = document.createElement("p");
            errorParagraph.textContent = error;
            errorMessages.appendChild(errorParagraph);
        });
    } else {
        alert("Form submitted successfully!");
        // You can submit the form here if required
        // e.g., this.submit();
    }
});
