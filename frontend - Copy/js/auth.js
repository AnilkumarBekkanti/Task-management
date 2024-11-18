i n// Simulating local storage for user data
let users = JSON.parse(localStorage.getItem("users")) || [];

// Registration Logic
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the email already exists
    if (users.some(user => user.email === email)) {
        alert("Email already exists!");
        return;
    }

    // Save the user
    users.push({ username, email, password });
    
    console.log({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "index.html"; // Redirect to login
});

// Login Logic
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate the user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid email or password!");
    }
});

// Logout Logic
document.getElementById("logoutBtn")?.addEventListener("click", function () {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to login
});


