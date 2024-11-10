# TaskMaster
A task management web app

This is a simple task management web app built with HTML, CSS, JavaScript and Firebase. It allows you to create, manage, and track your tasks efficiently.

## Features

*   Create tasks: Add new tasks with names, due dates, and priorities.
*   Subtasks:Break down tasks into smaller subtasks for better organization.
*   Reminders:Set reminders for tasks to stay on top of deadlines.
*   Mark as complete:Mark tasks and subtasks as completed when finished.
*   Update tasks:Edit existing tasks to change their details.
*   Delete tasks: Remove tasks that are no longer needed.
*   Database storage:Tasks are stored in a Firebase Firestore database for persistence.

### Technologies Used

*   HTML
*   CSS
*   JavaScript
*   Firebase (Firestore)

#### Getting Started

1.  Set up Firebase:
    *   Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
    *   Enable Firestore Database in your project.
    *   Register your web app and get your Firebase config object.

2.  Clone the repository:

    ```bash
    git clone [https://github.com/your-username/task-manager.git](https://github.com/your-username/task-manager.git)
    ```

3.  Install dependencies:

    ```bash
    npm install firebase  # Or yarn add firebase
    ```

4.  Update Firebase config:
    *   Replace the placeholder Firebase config in `script.js` with your actual config.

5.  Run the app:
    *   Open `index.html` in your web browser.

##### Usage

*   Add a task:Fill in the task details and click "Add Task."
*   Add subtasks: Enter subtask names and click "Add Subtask."
*   Set reminders: Choose a date and time for the reminder and click "Set Reminder."
*   Manage tasks: Use the buttons to mark tasks as complete, edit, or delete them.

###### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

####### License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
