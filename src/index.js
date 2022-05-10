import _ from 'lodash';
import './style.css';
import Project from './todoClasses';
import createTodoView from './todoViewController';
import createProjectView from './projectViewController';

const projects = []; // Array to store project objects

//Create default project 'main'
let project = new Project('Main'); // 'project' is new Project object
project.newTodo('Clean Yard', 'Pick up pine needles', 'Tomorrow', 'High');
projects.push(project)

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

export default projects;

createProjectView(projects);
//createTodoView();