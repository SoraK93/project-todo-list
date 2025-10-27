import {
  toDoCreation,
  formFieldCreation,
} from "./utilities/elementCreationModule.js";

const { createToDo, createElementContainer } = toDoCreation;

export const formPage = (button, parentElement, text) => {
  button.innerText = text;
  parentElement.innerHTML = "";
  parentElement.appendChild(headingContainer());
  parentElement.appendChild(formContainer());
};

export const toDoPage = (button, parentElement, text, projectIndex) => {
  let projectName = JSON.parse(localStorage.getItem("projectList"))[projectIndex];
  button.innerText = text;
  parentElement.innerHTML = "";
  parentElement.appendChild(projectHeadContainer(projectName));

  const todoListContainer = document.createElement("div");
  todoListContainer.className = "todoList";

  let currTodo = JSON.parse(localStorage.getItem(projectName));
  for (let key of currTodo) {
    createToDo(todoListContainer, key);
  }

  parentElement.appendChild(todoListContainer);
};

export const sidebar = (projectList) => {
  projectList.innerHTML = "";
  
  let savedProjects = JSON.parse(localStorage.getItem("projectList"));
  if (!savedProjects) return;
  
  for (let i = 0; i < savedProjects.length; i++) {
    let listElement = document.createElement("li");
    listElement.innerText = savedProjects[i];
    listElement.setAttribute("value", i);
    projectList.appendChild(listElement);
  }
};

// Create ToDo List
function projectHeadContainer(projectHead) {
  const headContainer = document.createElement("div");
  headContainer.className = "projectHead";

  createElementContainer(headContainer, "h1", projectHead);

  const buttonAddToDo = createElementContainer(
    headContainer,
    "button",
    "Add ToDo"
  );
  buttonAddToDo.setAttribute("type", "button");

  return headContainer;
}

// Create Form
function headingContainer() {
  const heading = document.createElement("div");
  heading.className = "projectHead";

  const pageHeading = document.createElement("h1");
  pageHeading.innerText = "Create New Project";
  heading.appendChild(pageHeading);

  return heading;
}

function formContainer() {
  const todoForm = document.createElement("div");
  todoForm.className = "formField";

  const form = document.createElement("form");
  todoForm.appendChild(form);

  let createInput = formFieldCreation(form);
  createInput("project-name");
  createInput("title");
  createInput("description", "5", "textarea");
  createInput("note", "3", "textarea");
  createInput("dueDate", "date");
  createInput("priority", ["High", "Medium", "Low"], "select");
  createInput("addButton", "button", "button");

  return todoForm
}
