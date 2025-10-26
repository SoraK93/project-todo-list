import { formPage, toDoPage, sidebar } from "../createProjectPage.js";
import { DOMCache } from "./cachingDOM.js";
import { getKeys, toDo } from "./functionsModule.js";
import { formFieldCreation } from "./elementCreationModule.js";

const { sectionProject, createProjectButton, projectList } = DOMCache;

// Listens for create project button click
export const createProjectListener = (e) => {
  let text = "Create New Project";
  if (e.target.innerText === text) {
    const { formBtn } = setupFormPage(e.target, sectionProject, "Go To Home");

    const form = formBtn.parentNode.parentNode;
    if (form.children.length !== 7) {
      let createInput = formFieldCreation(form);
      createInput("project-name", "text", "input", true);
    }

    setupPageHeading(text);
  } else {
    setupToDoPage(e.target, sectionProject, text, getKeys());
  }

  sidebar(projectList);
};

// listens for clicks on individual project names in sidebar
export const projectListListener = (e) => {
  e.stopPropagation();

  setupToDoPage(
    createProjectButton,
    sectionProject,
    "Create New Project",
    e.target.value
  );
};

// listens for add todo button clicks
export const projectHeadBtnListener = () => {
  setupFormPage(createProjectButton, sectionProject, "Go To Home");
  document.querySelector(".project-name")?.remove();

  const pageHead = setupPageHeading("Add Todo");
};

// sets up todo page with all its todo and buttons
export const setupToDoPage = (btn, mainSec, btnText, projectIdx) => {
  toDoPage(btn, mainSec, btnText, projectIdx);

  const projectHeadBtn = document.querySelector(".projectHead button");
  projectHeadBtn.addEventListener("click", projectHeadBtnListener);
};

export const setupFormPage = (btn, formSec, btnText) => {
  formPage(btn, formSec, btnText);

  const formBtn = document.querySelector("form button");
  formBtn.addEventListener("click", toDo);

  return { formBtn };
};

export const setupPageHeading = (text) => {
  const pageHead = document.querySelector(".projectHead");
  pageHead.children[0].innerText = text;

  return pageHead
}