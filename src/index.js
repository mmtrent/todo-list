import _ from 'lodash';
import './style.css';
import todoItems from './todoClasses';
import createTodoView from './todoViewController';
//import createProjectView from './projectViewController';

//Create default project 'main'
let main = new todoItems();

createTodoView(main);
//createProjectView(main);