import { createTodoView } from './UI.js';
import { createProjectView } from './UI.js';
import { createProjectInput } from './UI.js';
import { showNewTodoForm } from './UI.js';
import { clearForm } from './UI.js';
import { underlineCurrentProject } from './UI.js';
import saveTodo from './saveTodo';


const createListeners = (todolist) => {
    document.addEventListener('click', function(event) {
        
        // If user clicks one of the Project titles, load project
        if (event.target.matches('.project-item')) {
            todolist.setCurrentProject(todolist.projects[event.target.id])
            //underlineCurrentProject(event.target.id);
            createProjectView(todolist, event.target.id);
            createTodoView(todolist.currentProject, todolist);
        }

        // If user clicks 'Add Item' on the todolist
        else if (event.target.matches('#new-todo-btn')) {
            showNewTodoForm();
            createTodoView(todolist.currentProject);
            createListeners(todolist);
        }

        // If user clicks 'Add' after entering todo info
        else if (event.target.matches('#save-todo-btn')) {
            saveTodo(todolist.currentProject);
            clearForm();
            createTodoView(todolist.currentProject);
            createListeners(todolist);
        }

        // If user clicks 'Close' to cancel entering todo info
        else if (event.target.matches('#close-todo-btn')) {
            clearForm();
            createTodoView(todolist.currentProject);
            createListeners(todolist);
        }

        // If user clicks 'Add Project'
        else if (event.target.matches('#addProject')) {
            createProjectView(todolist);
            createProjectInput();
        }

        // If user clicks 'OK' after entering new project name
        else if (event.target.matches('#projInputBtn')) {
            let newProject = document.getElementsByName("newProject");
            let newProjectName = newProject[0].value;
            todolist.createNewProject(newProjectName)
            createProjectView(todolist);
        }

        // If user clicks trash can icon on todo item, delete todo from project
        else if (event.target.matches('#Todo-Delete-Btn')) {
            let targetTodo = event.target.parentNode.parentNode.firstChild.innerText;
            console.log(targetTodo);
            todolist.currentProject.removeTodoItemFromProject(targetTodo);
            createTodoView(todolist.currentProject);
            createListeners(todolist);
        }

        // If user misclicks the screen anywhere else, reload the listeners
        else createListeners(todolist);

    }, {once: true});
}

export default createListeners;