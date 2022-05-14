import _ from 'lodash';
import './style.css';

import TodoList from './todoClasses';
import createProjectView from './UI.js';


// Create main todo list object
const todolist = new TodoList('Main Todo List');


todolist.createNewProject('Main');
todolist.createNewProject('House exterior');
todolist.projects[0].addNewTodoItemToProject('Clean Yard', 'Pick up pine needles', 'Tomorrow', 'High');

createProjectView(todolist);