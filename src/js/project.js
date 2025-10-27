import { Todo } from "./todo.js";

export const projects = (function () {
  const createNewProject = function (todo) {
    let todoList = [];
    let projectList;

    let newTodo = new Todo();
    newTodo.title = todo.title;
    newTodo.description = todo.description;
    newTodo.note = todo.note;
    newTodo.dueDate = todo.dueDate;
    newTodo.priority = todo.priority;

    let storedProjects = localStorage.getItem("projectList");
    let storedTodos = localStorage.getItem(todo["project-name"]);

    if (storedTodos) {
      todoList = JSON.parse(storedTodos);
    } else {
      projectList = JSON.parse(storedProjects) || [];
      projectList.unshift(todo["project-name"]);
      localStorage.setItem("projectList", JSON.stringify(projectList));
    }

    todoList.push(newTodo);

    localStorage.setItem(todo["project-name"], JSON.stringify(todoList));
  };

  const updateProject = function(todo, id) {
    // let storedProjects = localStorage.getItem("projectList");
    let storedTodos = JSON.parse(localStorage.getItem(todo["project-name"]));
    let index = storedTodos.findIndex(element => element.id === id)

    let newTodo = new Todo();
    newTodo.title = todo.title;
    newTodo.description = todo.description;
    newTodo.note = todo.note;
    newTodo.dueDate = todo.dueDate;
    newTodo.priority = todo.priority;

    storedTodos[index] = newTodo

    localStorage.setItem(todo["project-name"], JSON.stringify(storedTodos))
  }

  return {
    createNewProject,
    updateProject
  };
})();
