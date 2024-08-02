import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [];
  //only the task survey has the access to this tasks, not any other controller or the provider cannot use it.
  getAllTasks() {
    return this.tasks;
  }
}
