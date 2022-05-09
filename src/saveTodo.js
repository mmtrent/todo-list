import todoItems from "./todoClasses";

const saveTodo = (project) => {

    let title = document.getElementsByName('title');
    let description = document.getElementsByName('description');
    let dueDate = document.getElementsByName('dueDate');
    let priority = document.getElementsByName('priority');

    project.newTodo(title[0].value, description[0].value, dueDate[0].value, priority[0].value);

    // Hide new todo input fields after save button is selected

}

export default saveTodo;