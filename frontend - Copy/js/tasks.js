// Fetch tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add Task
document.getElementById("taskForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;
    const status = document.getElementById("status").value;
    const deadline = document.getElementById("deadline").value;

    tasks.push({ title, description, priority, status, deadline });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Task added successfully!");
    displayTasks();
    document.getElementById("taskForm").reset();
});

// Display Tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks
        .map(
            (task, index) => `
        <tr>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.priority}</td>
            <td>
                <select class="form-control statusSelect" data-index="${index}">
                    <option ${task.status === "Yet-to-start" ? "selected" : ""}>Yet-to-start</option>
                    <option ${task.status === "In-progress" ? "selected" : ""}>In-progress</option>
                    <option ${task.status === "Completed" ? "selected" : ""}>Completed</option>
                    <option ${task.status === "Hold" ? "selected" : ""}>Hold</option>
                </select>
            </td>
            <td>${task.deadline}</td>
            <td>
                <button class="btn btn-warning btn-sm editBtn" data-index="${index}">Edit</button>
                <button class="btn btn-danger btn-sm deleteBtn" data-index="${index}">Delete</button>
            </td>
        </tr>`
        )
        .join("");

    // Attach Event Listeners
    document.querySelectorAll(".deleteBtn").forEach(button => {
        button.addEventListener("click", deleteTask);
    });
    document.querySelectorAll(".statusSelect").forEach(select => {
        select.addEventListener("change", updateStatus);
    });
}

// Delete Task
function deleteTask(e) {
    const index = e.target.getAttribute("data-index");
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Task deleted successfully!");
    displayTasks();
}

// Update Task Status
function updateStatus(e) {
    const index = e.target.getAttribute("data-index");
    const newStatus = e.target.value;
    tasks[index].status = newStatus;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Task status updated!");
}

displayTasks();


