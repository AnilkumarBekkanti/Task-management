// Fetch logged-in user
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    alert("Please log in first!");
    window.location.href = "index.html";
}

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Update Dashboard Statistics
function updateDashboard() {
    const completedTasks = tasks.filter(task => task.status === "Completed").length;
    const pendingTasks = tasks.filter(task => task.status !== "Completed").length;
    const priorityTasks = tasks.filter(task => task.priority === "High").length;

    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("pendingTasks").textContent = pendingTasks;
    document.getElementById("priorityTasks").textContent = priorityTasks;
}

updateDashboard();
