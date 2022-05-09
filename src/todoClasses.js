// An individual todo item.
class todoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// Class that holds collection of todo items and methods to return the data
class todoItems {
    constructor() {
        this.todoitems = [];
    }
    // Create new todo item and save it in the array
    newTodo(title,description,dueDate,priority){
        let item = new todoItem(title, description, dueDate, priority);
        this.todoitems.push(item);
    }
    get allTodos() {
        return this.todoitems;
    }
}


export default todoItems;