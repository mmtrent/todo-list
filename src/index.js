import _ from 'lodash';
import './style.css';
import { localLoadTodo } from './localStorage';


import TodoList from './todoClasses';
import createProjectView from './UI.js';


// Create main todo list object
export let todolist = new TodoList('Main Todo List');


todolist.createNewProject('Main');
todolist.createNewProject('House exterior');
todolist.projects[0].addNewTodoItemToProject('Clean Yard', 'Pick up pine needles', 'Tomorrow', 'High');
//todolist = localLoadTodo();
createProjectView(todolist);