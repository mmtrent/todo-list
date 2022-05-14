import projects from './index';
import saveProject from './saveProject';
import createTodoView from './todoViewController';

const createProjectView = () => {
    let projList = document.getElementById('projectList');

    // Clear current project list contents (for use in view refresh)
    while (projList.firstChild) {
        projList.removeChild(projList.firstChild);
        }
};


// function to create list of projects and add event listeners for when they are selected
const createProjectLi = (project) => {
    let projName = project.title;
    let projList = document.getElementById('projectList');
    let inputLi = document.createElement('li');
    projList.appendChild(inputLi);
    inputLi.innerText = projName;
    inputLi.addEventListener('click', function() {
        createTodoView(project)
    });
}
/*
// Display project and add click listener to select project
projects.forEach(element => createProjectLi(element));
    // Create listener for 'Add Project' button
    document.getElementById('addProject').addEventListener('click', function() {
        //createProjectInput();

    }, { once: true });
}
*/
const createProjectInput = () => {
    let projInput = document.createElement('input');
    projInput.id = 'projectinput';
    projInput.setAttribute("type", "text");
    projInput.setAttribute("name", "newProject");
    projInput.setAttribute("placeholder", "New Project");
    projInput.classList.add('projectInput');

    let inputLi = document.createElement('li');
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

    projInputBtn.addEventListener('click', function() {
        let newProject = document.getElementsByName("newProject");
        saveProject(newProject)

        createProjectView();
    });
}

export default createProjectView;