import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  //only the task service has the access to this tasks, not any other controller or the provider cannot use it.
  getAllTasks(): Task[] {
    return this.tasks;
  }
  CreateTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    //pushing the task which is created into the tasks which is the empty array in the service

    this.tasks.push(task);
    return task;
  }
}
