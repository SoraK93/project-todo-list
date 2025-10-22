export const createProjectForm = document.createElement("form");

createFormField(name="title");
createFormField("description");
createFormField("note");
createFormField("dueDate");
createFormField("priority", ["High", "Medium", "Low"], "select");

function createFormField(name, type, field = "input") {
  createProjectForm.appendChild(createInputField(name, type, field));
}

function createInputField(name, type = "text", field = "input") {
  let userInputElement;
  const element = document.createElement("label");
  element.setAttribute("for", name);
  element.textContent = name.charAt(0).toUpperCase() + name.slice(1);

  if (field === "input") {
    userInputElement = document.createElement(field);
    userInputElement.setAttribute("type", type);
    userInputElement.setAttribute("name", name);
    userInputElement.setAttribute("id", name);
  } else if (field === "select") {
    userInputElement = createSelectField(name, type, field);
  }
  element.appendChild(userInputElement);

  return element;
}

function createSelectField(name, type, field = "select") {
  const select = document.createElement(field);
  select.setAttribute("id", name);

  for (let value of type) {
    let option = document.createElement("option");
    option.innerText = value;
    option.setAttribute("value", value);
    select.appendChild(option);
  }

  return select;
}
