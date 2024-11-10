const taskList = document.getElementById('task-list');
const taskNameInput = document.getElementById('task-name');
const dueDateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');
const addTaskButton = document.getElementById('add-task');

// Sample task data (replace with database interaction)
let tasks = [];

addTaskButton.addEventListener('click', () => {
    const taskName = taskNameInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    const newTask = {
        name: taskName,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <button>Complete</button>
        `;
        taskList.appendChild(taskElement);
    });
}
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain:   
 "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",   

  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
