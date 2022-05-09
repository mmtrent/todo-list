import _ from 'lodash';
import './style.css';
import todoItems from './todoClasses';
import createTodoView from './todoViewController';
import createProjectView from './projectViewController';

//Create default project 'main'
let project0 = new todoItems();
let project1 = new todoItems();

const projects = [{title:"Main", object: project0}, 
{title:"Yard", object: project1}];


createTodoView(projects[1].object);

export default projects;

createProjectView();