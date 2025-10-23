import "../css/style.css";
import "../template.html";
import { project } from "./project";
import { formPage, toDoPage } from "./createProjectPage";
import { DOMCache } from "./utilities/cachingDOM";
import { Todo } from "./todo";

const { sectionProject, createProjectButton } = DOMCache;

// starting page
toDoPage(createProjectButton, sectionProject, "Create New Project");

// Change page based on user interaction
createProjectButton.addEventListener("click", (e) => {
  let text = "Create New Project";
  if (e.target.innerText === text) {
    formPage(e.target, sectionProject, "Go To Home");
    const pageHead = document.querySelector(".projectHead");
    pageHead.children[0].innerText = text;
  } else {
    toDoPage(e.target, sectionProject, text);
  }
});

const projectHeadBtn = document.querySelector(".projectHead button");
projectHeadBtn.addEventListener("click", () => {
  formPage(createProjectButton, sectionProject, "Go To Home");
  const pageHead = document.querySelector(".projectHead");
  pageHead.children[0].innerText = "Add ToDo";
});

// example testing new project creation
// require some way to get the todo object in here
const newProject = project();
newProject.createNewProject({ title: "Lets Todo" });
