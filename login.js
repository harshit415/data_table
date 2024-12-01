document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
  
    // Simple authentication logic for demonstration purposes
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      errorMessage.textContent = ""; // Clear error message
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });
  