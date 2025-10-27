import { v4 as uuid4 } from "uuid";

export class Todo {
  // private properties
  #id;
  #title;
  #description;
  #note;
  #dueDate;
  #priority;

  constructor() {
    this.#id = uuid4();
    this.#title = null;
    this.#description = null;
    this.#note = null;
    this.#dueDate = null;
    this.#priority = null;
  }

  // Getter Functions
  get id() {
    return this.#id;
  }

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
  /**@param {String} value  */
  set title(value) {
    if (value.length > 100) {
      throw new Error("Title can have 100 characters max.");
    } else if (value.length === 0) {
      throw new Error("Title cannot be empty.");
    } else {
      this.#title = value;
    }
  }

  /**@param {String} value  */
  set description(value) {
    if (value.length > 1000) {
      throw new Error("Description can have 1000 characters max.");
    } else {
      this.#description = value;
    }
  }

  /**@param {String} value  */
  set note(value) {
    if (value.length > 200) {
      throw new Error("note can have 200 characters max.");
    }else if (value.length === 0) {
      throw new Error("Note cannot be empty.");
    } else {
      this.#note = value;
    }
  }

  /**@param {Date} value  */
  set dueDate(value) {
    const option = { year: "numeric", month: "numeric", day: "numeric" };
    let today = new Date().toLocaleDateString("en-IN", option);
    let dueDate = new Date(value).toLocaleDateString("en-IN", option);

    if (dueDate < today) {
      throw new Error("Due date can be today or upcomming date.");
    } else {
      this.#dueDate = new Date(value).toLocaleDateString("en-IN", option);
    }
  }

  /**@param {String} value  */
  set priority(value) {
    this.#priority = value;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      description: this.#description,
      note: this.#note,
      dueDate: this.#dueDate,
      priority: this.#priority,
    };
  }
}
