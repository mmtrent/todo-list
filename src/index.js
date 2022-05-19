import _ from 'lodash';
import './style.css';
import { localLoadTodo } from './localStorage';


import TodoList from './todoClasses';
import createProjectView from './UI.js';


// Create main todo list object
export let todolist = new TodoList('Main Todo List');

localLoadTodo(todolist);
createProjectView(todolist);