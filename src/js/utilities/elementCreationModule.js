export const formFieldCreation = function (formElement) {
  /**
   *  @param {string} name - sets label(for) and form(name, id) attributes
   *  @param {string} [type="text"] - sets the type of input (default="text")
   *  @param {string} [field="input"] - sets the type of form field (default="input")
   *  @param {boolean} [addAtEnd=false] - set this to true, if adding element to top of the form
   */
  function createFormField(name, type, field = "input", addAtEnd = false) {
    addAtEnd
      ? formElement.prepend(createField(name, type, field))
      : formElement.appendChild(createField(name, type, field));
  }

  function createField(name, type = "text", field = "input") {
    let userInputElement;
    const div = document.createElement("div");
    div.className = name;

    const element = document.createElement("label");
    element.setAttribute("for", name);
    element.textContent = name.charAt(0).toUpperCase() + name.slice(1);

    switch (field) {
      case "input":
        userInputElement = document.createElement(field);
        userInputElement.setAttribute("type", type);
        break;
      case "select":
        userInputElement = createSelectField(name, type, field);
        break;
      case "textarea":
        userInputElement = document.createElement(field);
        userInputElement.setAttribute("rows", type);
        break;
      case "button":
        userInputElement = document.createElement(field);
        userInputElement.setAttribute("type", type);
        userInputElement.textContent = "Add Project";
        div.appendChild(userInputElement);
        return div;
    }
    userInputElement.setAttribute("name", name);
    userInputElement.setAttribute("id", name);
    div.appendChild(element);
    div.appendChild(userInputElement);

    return div;
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
    toDoContainer.setAttribute("data-id", toDoObject.id);

    const detailContainer = createElementContainer(toDoContainer, "div");
    createElementContainer(detailContainer, "h3", toDoObject.title);
    createElementContainer(detailContainer, "p", toDoObject.dueDate);
    createElementContainer(detailContainer, "p", toDoObject.note);

    const completeBtn = createElementContainer(
      toDoContainer,
      "button",
      "Complete"
    );
    completeBtn.setAttribute("type", "button");
  };

  const createElementContainer = function (parent, newElement, value) {
    const element = document.createElement(newElement);
    value ? (element.innerText = value) : null;
    parent.appendChild(element);
    return element;
  };

  return { createToDo, createElementContainer };
})();
