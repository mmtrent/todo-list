import projectTodos from "./todoClasses";
import saveTodo from "./saveTodo";
import createProjectView from "./projectViewController";
import projects from ".";

// Function to clear new todo input form after saving or closing
const clearForm = () => {
    document.getElementById('add-todo-form').style.display = "none";
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('dueDate').value = "";
    document.getElementById('priority').value = "";
}

const createTodoView = (currentProject) => {
// Assign div that contains todo list to variable
    let todos = document.getElementById('todos');

    // Clear current todo body contents (for use in view refresh)
    while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
    }
    
    // Declare variable to store list of todo item divs
    let todoItemView;

    // Iterate through project's todo item array and display each
    let project = currentProject.todoItems;
    for (let i = 0; i < project.length; i++) {
        todoItemView = document.createElement('div');
        todoItemView.innerText = `${project[i].title} due ${project[i].dueDate}`;
        todos.appendChild(todoItemView);
    }

    // Add new todo button after list of todos
    const newTodoButton = document.createElement('input');
    newTodoButton.setAttribute("type", "button");
    newTodoButton.setAttribute("value", "Add item");
    todos.appendChild(newTodoButton);
    newTodoButton.addEventListener('click', function() {

        // Show new todo info fields under current list of todos
        document.getElementById('add-todo-form').style.display = "flex";

        // Hide 'new todo' button while info fields are shown
        newTodoButton.style.display = "none";

        // Default text cursor to title field
        document.getElementById('title').focus();
    }, {once: true });

    // Display todo save button after the todo info input fields
    const saveButton = document.getElementById('save-todo-btn');
    saveButton.addEventListener('click', function() {

        saveTodo(currentProject);
        clearForm();
        console.log(currentProject)
        createTodoView(currentProject);
    }, { once: true }); // 'Once' option added to event listener to fix multiple entries to object bug

    // Create listener and logic for 'close' button on todo input form
    document.getElementById('close-todo-btn').addEventListener('click', function() {
        clearForm();
        createTodoView(currentProject);
    }, { once: true });
}

export default createTodoView;