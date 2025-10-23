const DOMCache = (function () {
  const sectionProject = document.querySelector(".project");
  const createProjectButton = document.querySelector(".createProject button");
  return { sectionProject, createProjectButton };
})();

export const { sectionProject, createProjectButton } = DOMCache;
