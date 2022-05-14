import projects from './index';
import saveProject from './saveProject';
import createTodoView from './todoViewController';

const createProjectView = (projects) => {
    createProjectList(projects);
    createListeners();
}

const createProjectListItem = (project) => {
    let projName = project.title;
    let projList = document.getElementById('projectList');
    let inputLi = document.createElement('li');
    inputLi.classList.add('projectItem');
    projList.appendChild(inputLi);
    inputLi.innerText = projName;
}

const createProjectList = (projects) => {
    projects.forEach(element => createProjectListItem(element));
}

const clearProjects = () => {
    document.getElementById('projectList').innerText = '';
}

const createListeners = () => {
    document.addEventListener('click', function(event) {
        if (!event.target.matches('projectItem')) return;
        console.log(project.title);       
        createProjectView(project); 
    })
}

export default createProjectView;