import "../css/style.css";
import "../template.html";
import { sidebar } from "./createProjectPage.js";
import { getKeys } from "./utilities/functionsModule.js";
import { DOMCache } from "./utilities/cachingDOM.js";
import {
  createProjectListener,
  projectListListener,
  setupToDoPage,
  setupFormPage,
} from "./utilities/eventListeners.js";

const { sectionProject, createProjectButton, projectList } = DOMCache;

// startup setting
// sidebar
sidebar(projectList);

// content section
if (localStorage.length) {
  setupToDoPage(
    createProjectButton,
    sectionProject,
    getKeys()
  );
} else {
  setupFormPage(createProjectButton, sectionProject);
}

// Change page based on user interaction
createProjectButton.addEventListener("click", createProjectListener);
projectList.addEventListener("click", projectListListener);
