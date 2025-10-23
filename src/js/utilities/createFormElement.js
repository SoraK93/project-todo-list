import { formFieldCreation } from "./elementCreationModule";

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
createInput("title");
createInput("description");
createInput("note");
createInput("dueDate");
createInput("priority", ["High", "Medium", "Low"], "select");

