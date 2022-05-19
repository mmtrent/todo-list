
// todo data is formatted as:

// todo list object
// todo list object consists of title property and array of project objects
// project objects consist of title and array of todo item objects
// todo item objecs consist of 4 properties (title, desc., duedate, priority)

import { todolist } from "./index.js"
import TodoList from "./todoClasses.js";

export const localSaveTodo = () => {
    let todoListStringified = JSON.stringify(todolist.projects);

    localStorage.setItem("todoList", todoListStringified);
}

export const localLoadTodo = (todolist) => {
    if(localStorage.getItem("todoList") != null) {
    let todoListStringified = localStorage.getItem("todoList");
    let todoListParsed = JSON.parse(todoListStringified);
    todoListParsed.forEach(function(project, index) {
        todolist.createNewProject(project.title)
        project.todoItems.forEach(todo => {
            todolist.projects[index].addNewTodoItemToProject(todo.title, todo.description, todo.dueDate, todo.priority)
        })
    });

    };
}