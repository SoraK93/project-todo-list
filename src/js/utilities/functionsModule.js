import { projects } from "../project"
import { toDoPage } from "../createProjectPage.js";
import { DOMCache } from "./cachingDOM.js";

const { sectionProject, createProjectButton } = DOMCache;

const todoData = {}

export function getKeys(index = 0) {
  return index
}

export function toDo(e) {
  const form = e.target.form;
  const formNodes = form.querySelectorAll("input, textarea, select");
  formNodes.forEach((element) => {
    todoData[element.id] = element.value;
  });
  // catching any potential user input errors
  try {
    projects.createNewProject(todoData);
  } catch (err) {
    console.log(err);
    return;
  }
  // clearing form input field
  formNodes.forEach((element) => {
    element.value = element.id === "priority" ? "High" : "";
  });
  // removing event listener and reverting back to homepage
  e.target.removeEventListener("click", toDo);
  toDoPage(
    createProjectButton,
    sectionProject,
    "Create New Project",
    getKeys(JSON.parse(localStorage.getItem("projectList")).length - 1)
  );
}
