
// todo data is formatted as:

// todo list object
// todo list object consists of title property and array of project objects
// project objects consist of title and array of todo item objects
// todo item objecs consist of 4 properties (title, desc., duedate, priority)

import { todolist } from "./index.js"
import TodoList from "./todoClasses.js";

export const localSaveTodo = () => {

    // create array of project titles and save to local storage
    let projectTitles = [];
    todolist.projects.forEach(project => projectTitles = [...projectTitles, project.title]);
    localStorage.setItem("projects", projectTitles);

    console.log(JSON.stringify(todolist.projects))
    console.log(todolist.projects[0].todoItems[0].title)
    let todoListStringified = JSON.stringify(todolist);
    //return todoListStringified;


    // save todo items as a json string
    


}

export const localLoadTodo = () => {
    let todoListStringified = localSaveTodo();
    let todoListParsed = JSON.parse(todoListStringified);
    return todoListParsed;

    // load project titles
    localStorage.getItem("projects")
    projectTitles.forEach(project => todolist.createNewProject(project))
}