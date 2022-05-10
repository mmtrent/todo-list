// Class that holds collection of todo items and methods in a 'project'
class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = []; // Array to store Todo Item objects
    }
    // Create new todo item and save it in the array
    newTodo(title,description,dueDate,priority){
        let item = new TodoItem(title, description, dueDate, priority);
        this.todoItems.push(item);
    }
    get projectTodos() {
        return this.todoitems;
    }
}

// An individual todo item
class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


export default Project;