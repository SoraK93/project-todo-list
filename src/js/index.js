import "../css/style.css";
import "../template.html";
import { changePage, toDoPage } from "./createProjectPage";
import { sectionProject, createProjectButton } from "./utilities/cachingDOM";
import { project } from "./project";

// starting page
toDoPage(createProjectButton, sectionProject)

createProjectButton.addEventListener("click", changePage)

// example testing new project creation
// require some way to get the todo object in here
const newProject = project();
newProject.createNewProject({ title: "Lets Todo" });

