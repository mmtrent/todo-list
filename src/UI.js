import createListeners from "./createListeners";

export const createProjectView = (todolist, divID) => {
    clearProjects();
    createProjectList(todolist.projects, divID);
    createListeners(todolist);
}

const createProjectList = (projects, divID) => {
    projects.forEach(function (project, index) {
        createProjectListItem(project, index, divID);
    });
}

const createProjectListItem = (project, index, divID) => {
    let projIndex = index;
    let projName = project.title;
    let projList = document.getElementById('projectList');
    let inputLi = document.createElement('li');
    inputLi.classList.add('project-item');
    inputLi.id = projIndex;
    projList.appendChild(inputLi);
    inputLi.innerText = projName;
    if (index == divID) {
        inputLi.classList.add('active-project')
    }
}

const clearProjects = () => {
    document.getElementById('projectList').innerText = '';
}


export const createProjectInput = () => {
    let projInput = document.createElement('input');
    projInput.id = 'projectinput';
    projInput.setAttribute("type", "text");
    projInput.setAttribute("name", "newProject");
    projInput.setAttribute("placeholder", "New Project");
    projInput.classList.add('projectInput');

    let inputLi = document.createElement('li');
    inputLi.classList.add('new-project-box-li')
    let inputDiv = document.createElement('div');
    inputDiv.classList.add('projInputDiv');
    document.getElementById('projectList').appendChild(inputLi);
    inputLi.appendChild(inputDiv);
    inputDiv.appendChild(projInput);

    let projInputBtn = document.createElement('input');
    projInputBtn.setAttribute("type", "button");
    projInputBtn.setAttribute("value", "OK");
    projInputBtn.id = "projInputBtn";
    inputDiv.appendChild(projInputBtn);

}

export const createTodoView = (currentProject) => {

    // Assign div that contains todo list to variable
    let todos = document.getElementById('todos');
    // Clear current todo body contents (for use in view refresh)
    while (todos.firstChild) {
    todos.removeChild(todos.firstChild);
    }
    
    // Declare variable to store list of todo item divs
    let todoItemView;

    // Iterate through project's todo item array and display each
    let project = currentProject.todoItems;
    for (let i = 0; i < project.length; i++) {
        todoItemView = document.createElement('div');
        todoItemView.classList.add('todo-div')
        todoItemView.innerText = `${project[i].title} due ${project[i].dueDate}`;
        todos.appendChild(todoItemView);
    }

    // Add new todo button after list of todos
    const newTodoButton = document.createElement('input');
    newTodoButton.setAttribute("type", "button");
    newTodoButton.setAttribute("value", "+ Add item");
    newTodoButton.id = 'new-todo-btn';
    newTodoButton.classList.add('new-todo-btn');
    todos.appendChild(newTodoButton);
}

export const showNewTodoForm = () => {
    document.getElementById('add-todo-form').style.display = "flex";
    document.getElementById('title').focus();
    document.getElementById('new-todo-btn').style.display = "none";

}

// Function to clear new todo input form after saving or closing
export const clearForm = () => {
    document.getElementById('add-todo-form').style.display = "none";
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('dueDate').value = "";
    document.getElementById('priority').value = "";
}

export default createProjectView;