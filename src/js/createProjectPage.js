import { sectionProject } from "./utilities/cachingDOM";
import { headingContainer, formContainer } from "./utilities/createFormElement";
import { projectHeadContainer, todoListContainer } from "./utilities/createToDoListElement";

export const changePage = function (e) {
  if (e.target.innerText === "Create New Project") {
    formPage(e.target, sectionProject)
  } else {
    toDoPage(e.target, sectionProject)
  }
};

const formPage = function (button, parentElement) {
  button.innerText = "Go To Home"
  parentElement.innerHTML = ""
  parentElement.appendChild(headingContainer)
  parentElement.appendChild(formContainer)
};

export const toDoPage = function (button, parentElement) {
  button.innerText = "Create New Project";
  parentElement.innerHTML = ""
  parentElement.appendChild(projectHeadContainer)
  parentElement.appendChild(todoListContainer)
};
