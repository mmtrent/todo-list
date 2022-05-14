// Class that holds collection of todo items and methods in a 'project'
class TodoList {
    constructor(title) {
    this.title = title;
    this.projects = []; // Array to store projects
    this.currentProject = null;
    }

    createNewProject(title){
    let project = new Project(title);
    this.projects = [...this.projects, project]
    }

    setCurrentProject(project)
    {
        this.currentProject = project;
    }

    getCurrentProject() {
        return this.currentProject;
    }
}

export class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = []; // Array to store Todo Item objects
    }
    // Create new todo item and save it in the array
    addNewTodoItemToProject(title,description,dueDate,priority){
        let item = new TodoItem(title, description, dueDate, priority);
        this.todoItems = [...this.todoItems, item];
    }
    get projectTodos() {
        return this.todoitems;
    }
}

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default TodoList;