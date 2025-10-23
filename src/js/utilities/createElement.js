import { toDoCreation, formFieldCreation } from "./elementCreationModule";

const { createToDo, createElementContainer } = toDoCreation;

// Create Form
export const headingContainer = document.createElement("div")
headingContainer.className = "projectHead"

const pageHeading = document.createElement("h1")
pageHeading.innerText = "Create New Project"
headingContainer.appendChild(pageHeading)

export const formContainer = document.createElement("div")
formContainer.className = "formField"

const form = document.createElement("form");
formContainer.appendChild(form);

let createInput = formFieldCreation(form)
createInput("project");
createInput("title");
createInput("description");
createInput("note");
createInput("dueDate");
createInput("priority", ["High", "Medium", "Low"], "select");

// Create ToDo List
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