import { formPage, toDoPage, sidebar } from "../createProjectPage.js";
import { DOMCache } from "./cachingDOM.js";
import { getKeys, toDo } from "./functionsModule.js";
import { formFieldCreation } from "./elementCreationModule.js";

const { sectionProject, createProjectButton, projectList } = DOMCache;

// Listens for create project button click
export const createProjectListener = (e) => {
  let text = "Create New Project";
  if (e.target.innerText === text) {
    const { formBtn } = setupFormPage(e.target, sectionProject);

    const form = formBtn.parentNode.parentNode;
    if (form.children.length !== 7) {
      let createInput = formFieldCreation(form);
      createInput("project-name", "text", "input", true);
    }

    setupPageHeading(text);
  } else {
    try {
      setupToDoPage(e.target, sectionProject, getKeys());
    } catch (err) {
      alert("Error: No active project detect.\nPlease add a new project.");
    }
  }

  sidebar(projectList);
};

// listens for clicks on individual project names in sidebar
export const projectListListener = (e) => {
  e.stopPropagation();

  localStorage.setItem("currentPage", e.target.textContent);
  setupToDoPage(createProjectButton, sectionProject, e.target.value);
};

const completeBtnListener = (element, projectHeadBtn, todoId) => {
  let projectName = projectHeadBtn.previousElementSibling.textContent;
  let projectAllTodo = JSON.parse(localStorage.getItem(projectName));
  let projectList = JSON.parse(localStorage.getItem("projectList"));

  projectAllTodo = projectAllTodo.filter((todo) => todo.id !== todoId);

  if (projectAllTodo.length) {
    localStorage.setItem(projectName, JSON.stringify(projectAllTodo));
  } else {
    localStorage.removeItem(projectName);
    projectList = projectList.filter((project) => project !== projectName);
    if (projectList.length) {
      localStorage.setItem("projectList", JSON.stringify(projectList));
      localStorage.setItem("currentPage", projectList[0]);
    } else {
      localStorage.removeItem("projectList");
      localStorage.removeItem("currentPage");
      setupFormPage(createProjectButton, sectionProject);
    }
    window.location.reload();
  }

  element.remove();
};

// sets up todo page with all its todo and buttons
// listens for add todo button clicks
// grey out all the completed
export const setupToDoPage = (
  btn,
  mainSec,
  projectIdx,
  btnText = "Create New Project"
) => {
  toDoPage(btn, mainSec, btnText, projectIdx);

  const projectHeadBtn = document.querySelector(".projectHead button");
  projectHeadBtn.addEventListener("click", () => {
    setupFormPage(createProjectButton, sectionProject);
    document.querySelector(".project-name")?.remove();
    setupPageHeading("Add ToDo");
  });

  const todoDiv = document.querySelectorAll(".todo");
  todoDiv.forEach((node) => {
    let todoDetail = node.children[0];
    let todoId = node.dataset.id;
    
    todoDetail.addEventListener("click", () => {
      setupFormPage(createProjectButton, sectionProject);
      document.querySelector(".project-name")?.remove();
      setupPageHeading("Edit ToDo");

      let currentTodoList = JSON.parse(
        localStorage.getItem(localStorage.getItem("currentPage"))
      );
      localStorage.setItem("editId", todoId)

      const currentTodo = currentTodoList.find(todo => todo.id === todoId)

      const formNodes = document.querySelectorAll("input, textarea, select");
      formNodes.forEach((element) => (element.value = currentTodo[element.id]));
    });

    let completeBtn = node.children[1];
    completeBtn.addEventListener("click", () =>
      completeBtnListener(node, projectHeadBtn, todoId)
    );
  });
};

export const setupFormPage = (btn, formSec, btnText = "Go To Home") => {
  formPage(btn, formSec, btnText);

  const formBtn = document.querySelector("form button");
  formBtn.addEventListener("click", toDo);

  return { formBtn };
};

export const setupPageHeading = (text) => {
  const pageHead = document.querySelector(".projectHead");
  pageHead.children[0].innerText = text;

  return pageHead;
};
