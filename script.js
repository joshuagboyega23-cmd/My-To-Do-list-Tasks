const taskForm = document.getElementById("task-form");
const listContainer = document.getElementById("list-container");

let tasks = [];

// Load tasks from localStorage
function loadTasks() {
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    listContainer.innerHTML = ""; 
    
    tasks.forEach((task, index) => {
        createTaskElement(task, index);
    });
}

// Create task 
function createTaskElement(task, index) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-row");

    //   category class
    let categoryClass = task.category.toLowerCase();
    if (categoryClass === "web project") {
        categoryClass = "webproject";
    }

    taskItem.innerHTML = `
        <span class="task-name">${task.name}</span>
        
        <button class="button ${categoryClass}">
            ${task.category}
        </button>
        
        <div class="task-date">
            <i class="fa-regular fa-calendar"></i>
            <span>${task.date}</span>
        </div>
        
        <button class="btn ${task.priority.toLowerCase()}">
            ${task.priority}
        </button>
        
        <i class="fa-solid fa-ellipsis delete-btn"></i>
    `;

    // Delete 
    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        if (confirm("Delete this task?")) {
            tasks.splice(index, 1);
            saveTasks();
            loadTasks(); 
        }
    });

    listContainer.appendChild(taskItem);
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add new task
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
        name: document.getElementById("task-name").value.trim(),
        category: document.getElementById("task-category").value,
        date: document.getElementById("task-date").value,
        priority: document.getElementById("task-priority").value
    };

    if (!newTask.name) {
        alert("Please enter a task name!");
        return;
    }

    tasks.unshift(newTask); 
    saveTasks();
    loadTasks(); 

    taskForm.reset();
});

//  when my page loads
document.addEventListener("DOMContentLoaded", loadTasks);