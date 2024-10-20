document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const themeToggle = document.getElementById('theme-toggle');

    // Handle theme toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    // Handle adding a new task
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();

        if (task) {
            addTask(task);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Function to add a new task to the list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.ariaLabel = 'Delete task';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
