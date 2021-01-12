import {Todo} from './todo.model';
import * as _ from 'lodash';

export class AllTodos {
  readonly todos: Todo[] = [];
  constructor(data: Todo[]) {
    this.todos = [];
    data.map(el=> {
        this.todos.push(new Todo(el));
    });
 //   _.forEach(data, (item): void => {
 //     this.users.push(new User(item));
 //   });
  }
}
