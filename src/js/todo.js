export class Todo {
  // private properties
  #title;
  #description;
  #note;
  #dueDate;
  #priority;

  constructor() {
    this.#title = null;
    this.#description = null;
    this.#note = null;
    this.#dueDate = null;
    this.#priority = null;
  }

  // Getter Functions
  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get note() {
    return this.#note;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  // Setter Functions
  set title(value) {
    if (value.length > 100) {
      throw new Error("Title can have 100 characters max.");
    } else if (value.length === 0) {
      throw new Error("Title cannot be empty.");
    } else {
      this.#title = value;
    }
  }

  set description(value) {
    if (value.length > 1000) {
      throw new Error("Description can have 1000 characters max.");
    } else {
      this.#description = value;
    }
  }

  set note(value) {
    if (value.length > 200) {
      throw new Error("note can have 200 characters max.");
    } else {
      this.#note = value;
    }
  }

  set dueDate(value) {
    let today = new Date();
    let dueDate = new Date(value);
    if (dueDate < today) {
      throw new Error("Due date can be today or upcomming date.");
    } else {
      this.#dueDate = new Date(value);
    }
  }

  set priority(value) {
    this.#priority = value;
  }
}
