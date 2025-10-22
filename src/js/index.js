import "../css/style.css";
import "../template.html";
import { project } from "./project";
import { createProjectForm } from "./createPageElements";

const newProject = project();
newProject.createNewProject({ title: "Lets Todo" });

const newProject2 = project();
newProject2.createNewProject({ title: "Lets Todo 2" });

document.querySelector(".project").appendChild(createProjectForm)

console.log(newProject.reviewProject()[0].title);
console.log(newProject2.reviewProject()[0].title);

