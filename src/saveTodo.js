export const saveTodo = (project) => {

    let title = document.getElementsByName('title');
    let description = document.getElementsByName('description');
    let dueDate = document.getElementsByName('dueDate');
    let priority = document.getElementsByName('priority');

    project.addNewTodoItemToProject(title[0].value, description[0].value, dueDate[0].value, priority[0].value);
}

export default saveTodo;