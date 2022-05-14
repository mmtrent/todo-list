import _ from 'lodash';
import './style.css';
//import Project from './todoClasses';
import TodoList from './todoClasses';
import createTodoView from './todoViewController';
import createProjectView from './projectViewController';

// Create main todo list object
const todolist = new TodoList('Main Todo List');
// createProjectView();

todolist.createNewProject('Main');
todolist.projects[0].addNewTodoItemToProject('Clean Yard', 'Pick up pine needles', 'Tomorrow', 'High');

console.log(todolist.projects[0].todoItems[0].title)

console.log(todolist.title)
todolist.setCurrentProject('test');
console.log(todolist.getCurrentProject());
/*
//Create default project 'main'
const project = new Project('Main'); // 'project' is new Project object
project.newTodo('Clean Yard', 'Pick up pine needles', 'Tomorrow', 'High');
todolist.newProject(project)

project = new Project('House Work'); // 'project' is new Project object
project.newTodo('Paint House', 'Pick up pine needles', 'Tomorrow', 'High');
projects.push(project)



console.log(projects[0].title) // Prints "Main"
console.log(projects[0].todoItems[0].title) // Prints "Clean Yard"

console.log(projects[1].title) // Prints "House Work"
console.log(projects[1].todoItems[0].title) // Prints "Paint House"

// Add todo to "Main" project
projects[0].newTodo('Take out trash', 'Trash day coming', 'Tomorrow', 'High');
console.log(projects[0].todoItems[1].title) // Prints "Take out trash"
*/


export default projects;

//createProjectView(projects);
//createTodoView();