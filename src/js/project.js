import { Todo } from "./todo";

export const project = function () {
  const toDoList = [];
  // TODO: function create todoList
  // TODO: create get functions for each
  /** Takes a list of todos and create a new project */
  const createNewProject = function (todoObject) {
    let todo = new Todo()
    todo.title = todoObject.title
    toDoList.push(todo)
  };

  // TODO: function review todoList
  const reviewProject = function () {
    return toDoList
  };

  // TODO: function update todoList
  const updateProject = function () {};

  // TODO: function delete todoList
  const deleteProject = function () {};

  return {
    createNewProject,
    reviewProject,
    updateProject,
    deleteProject,
  };
};
