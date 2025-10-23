import { toDoCreation } from "./elementCreationModule";

const { createToDo, createElementContainer } = toDoCreation;

export const projectHeadContainer = document.createElement("div");
projectHeadContainer.className = "projectHead";

createElementContainer(projectHeadContainer, "h1", "Project 1")

const buttonAddToDo = createElementContainer(projectHeadContainer, "button", "Add ToDo")
buttonAddToDo.setAttribute("type", "button");

export const todoListContainer = document.createElement("div");
todoListContainer.className = "todoList";

// todoObject = {name, date, description, priority}
createToDo(todoListContainer, {
  name: "ToDo1",
  description: "My new ToDo task",
  date: "23.10.2025",
  priority: "High"
})

createToDo(todoListContainer, {
  name: "ToDo2",
  description: "My new ToDo task 2",
  date: "23.10.2025",
  priority: "Low"
})
