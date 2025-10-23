import {
  headingContainer,
  formContainer,
  projectHeadContainer,
  todoListContainer,
} from "./utilities/createElement";

export const formPage = function (button, parentElement, text) {
  button.innerText = text;
  parentElement.innerHTML = "";
  parentElement.appendChild(headingContainer);
  parentElement.appendChild(formContainer);
};

export const toDoPage = function (button, parentElement, text) {
  button.innerText = text;
  parentElement.innerHTML = "";
  parentElement.appendChild(projectHeadContainer);
  parentElement.appendChild(todoListContainer);
};
