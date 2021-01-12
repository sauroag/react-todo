export class Todo {
    id: string;
    title: string;
    description: string;
    constructor(todo: any) {
      this.id = todo.id;
      this.title = todo.name;
      this.description = todo.description;
    }
  }
  