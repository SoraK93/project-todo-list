export const DOMCache = (function () {
  const sectionProject = document.querySelector(".project");
  const createProjectButton = document.querySelector(".createProject button");
  const projectList = document.querySelector(".projectList ol")
  return { sectionProject, createProjectButton, projectList };
})();
