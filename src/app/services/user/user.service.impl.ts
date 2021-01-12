
import { APIServiceImpl, ServiceResponse } from '../api';

import { Users } from '@models';
import { Todo } from '@models';
import { UserService } from './user.service';

export default class UserServiceImpl extends APIServiceImpl implements UserService {
  static readonly RESOURCE = '/users';

  async getUsers(): Promise<ServiceResponse<Users>> {
    try {
      const response = await this.get(UserServiceImpl.RESOURCE);
      const users = new Users(response.data)
      return new ServiceResponse<Users>(users);
    } catch (e) {
      return new ServiceResponse<Users>(undefined, APIServiceImpl.parseError(e));
    }
  }
  async addTodo(): Promise<ServiceResponse<Todo>> {
    try {
      const response = await this.post('/todo', {});
      const todo = new Todo(response.data)
      return new ServiceResponse<Todo>(todo);
    } catch (e) {
      return new ServiceResponse<Todo>(undefined, APIServiceImpl.parseError(e));
    }
  }
  async getTodo(): Promise<ServiceResponse<Todo>> {
    try {
      const response = await this.get('/todo/getall');
      const todo = new Todo(response.data)
      return new ServiceResponse<Todo>(todo);
    } catch (e) {
      return new ServiceResponse<Todo>(undefined, APIServiceImpl.parseError(e));
    }
  }
}
