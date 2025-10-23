export const formFieldCreation = function (formElement) {
  /**
   *  @param {string} name - sets label(for) and form(name, id) attributes
   *  @param {string} [type="text"] - sets the type of input (default="text")
   *  @param {string} [field="input"] - sets the type of form field (default="input")
   */
  function createFormField(name, type, field = "input") {
    formElement.appendChild(createInputField(name, type, field));
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

  return createFormField;
};

export const toDoCreation = (function () {
  const createToDo = function (parent, toDoObject) {
    const toDoContainer = createElementContainer(parent, "div");
    toDoContainer.classList.add("todo", toDoObject.priority);

    const detailContainer = createElementContainer(toDoContainer, "div");
    createElementContainer(detailContainer, "h3", toDoObject.name);
    createElementContainer(detailContainer, "p", toDoObject.description);
    createElementContainer(detailContainer, "p", toDoObject.date);

    const completeBtn = createElementContainer(toDoContainer, "button", "Complete")
    completeBtn.setAttribute("type", "button")
  };

  const createElementContainer = function (parent, newElement, value) {
    const element = document.createElement(newElement);
    value ? (element.innerText = value) : null;
    parent.appendChild(element);
    return element;
  };

  return { createToDo, createElementContainer };
})();
