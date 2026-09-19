// TaskFlow - Team Task Management System
// Starter code for the Chaos Exercise

// Sample task data to show the structure
let tasks = [
    {
        id: 1,
        title: "Sample Task",
        description: "This is what a task looks like",
        dueDate: "2025-10-15",
        assignedTo: "",
        completed: false
    }
];
//function to create a new task and add it to the tasks array
function createTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('taskDueDate').value;
    const assignedTo = document.getElementById('taskAssignedTo').value.trim();

    if (!title || !description || !dueDate) {
        alert("Please fill in all required fields.");
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        dueDate: dueDate,
        assignedTo: assignedTo,
        completed: false
    };

    tasks.push(newTask);

    renderTasks();

    document.getElementById('createTaskForm').reset();
}
// Function to mark a task as completed
function markTaskCompleted(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        renderTasks();
    }
}
// Function to render all tasks to the page
function renderTasks() {
    
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        if (!task.completed) {
            const taskItem = document.createElement('div');
            taskItem.className = 'card task-item';
            
            taskItem.innerHTML = `
            <div class="card-body">
                <div class="overdue">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="task-content">
                        <div class="task-title">${task.title}</div>
                        <div class="task-description">${task.description}</div>
                        <p>
                        <strong>Due:</strong>
                        ${new Date(task.dueDate).toLocaleString()}
                        </p>
                        ${task.assignedTo ? `<div class="task-date">Assigned to: ${task.assignedTo}</div>` : ''}
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-success btn-sm me-2" onclick="markTaskCompleted(${task.id})" ${task.completed ? 'disabled' : ''}>${task.completed ? 'Completed' : 'Mark as Completed'}</button>
                    </div>
                </div>
            </div>
            </div>
        `;

        
        taskList.appendChild(taskItem);
    }
    });
}




// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderTasks();

    const form = document.getElementById('createTaskForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        createTask();
    });
});