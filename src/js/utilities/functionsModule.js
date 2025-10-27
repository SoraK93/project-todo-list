import { projects } from "../project";
import { toDoPage } from "../createProjectPage.js";
import { DOMCache } from "./cachingDOM.js";
import { setupToDoPage } from "./eventListeners.js";

const { sectionProject, createProjectButton } = DOMCache;

let todoData = {};

export function getKeys(index = 0) {
  return index;
}

export function toDo(e) {
  const form = e.target.form;
  const formNodes = form.querySelectorAll("input, textarea, select");

  formNodes.forEach((element) => {
    todoData[element.id] = element.value;
  });

  // runs only when addToDo button / edit todo is clicked
  if (!todoData["project-name"]) {
    let currentPage = localStorage.getItem("currentPage");
    todoData["project-name"] = currentPage;

    let currentPageIdx = JSON.parse(
      localStorage.getItem("projectList")
    ).indexOf(currentPage);

    let todoId = localStorage.getItem("editId");
    working(e, formNodes, currentPageIdx, todoId);
  } else {
    working(e, formNodes);

    let projectList = JSON.parse(localStorage.getItem("projectList"));
    localStorage.setItem("currentPage", projectList[0]);

    window.location.reload();
  }
}

function working(e, formNodes, currentPageIdx = 0, todoId = "") {
  // catching any potential user input errors
  try {
    if (todoId) {
      console.log("start edit")
      projects.updateProject(todoData, todoId);
      localStorage.removeItem("editId");
    } else {
      projects.createNewProject(todoData);
    }
  } catch (err) {
    console.log(err);
    return;
  }

  // reset todoData and clear form input field
  todoData = {};
  formNodes.forEach((element) => {
    element.value = element.id === "priority" ? "High" : "";
  });

  // removing event listener and reverting back to homepage
  e.target.removeEventListener("click", toDo);

  setupToDoPage(createProjectButton, sectionProject, getKeys(currentPageIdx));
}
