import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { HeyTask } from './task.entity';
import { TaskStatus } from './task.model';
import { TasksRepository } from './task.repository';

@Injectable()
export class TaskService {
  taskService: any;
  // private tasks: Task[] = [];//we are goinfg to store the tasks into the data base
  constructor(
    // @InjectRepository(HeyTask)
    private readonly tasksRepository: TasksRepository, // Use Repository<HeyTask> directly
  ) {}
  // //only the task service has the access to this tasks, not any other controller or the provider cannot use it.
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // // Custom method to find tasks by status
  // async getTasksByStatus(status: TaskStatus): Promise<HeyTask[]> {
  //   return this.tasksRepository.find({ where: { status } });
  // }

  // // Custom method to find tasks by title
  // async getTasksByTitle(title: string): Promise<HeyTask[]> {
  //   return this.tasksRepository.find({ where: { title } });
  // }

  // // CreateTask(title: string, description: string): Task {
  // //   const task: Task = {
  // //     id: uuid(),
  // //     title,
  // //     description,
  // //     status: TaskStatus.OPEN,
  // //   };
  // //pushing the task which is created into the tasks which is the empty array in the service
  // CreateTask(CreateTaskDto: CreateTaskDto): Task {
  //   const { title, description } = CreateTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  async createtask(CreateTaskDto: CreateTaskDto): Promise<HeyTask> {
    return this.tasksRepository.createtask(CreateTaskDto);
    // return this.taskService.CreateTask(CreateTaskDto);
  }

  async getTaskById(id: string): Promise<HeyTask> {
    const found = await this.tasksRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  // getTaskByID(id: string): Task {
  //   const task1 = this.tasks.find((task1) => task1.id == id);
  //   if (!task1) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //   return task1;
  // }

  // // DeletTaskById(id: string): void {
  // //   const deletedTask = this.tasks.findIndex((new1) => new1.id == id);
  // //   this.tasks.splice(deletedTask, 1);
  // // }

  // DeletTaskById(id: string): void {
  //   const found = this.getTaskByID(id);
  //   this.tasks = this.tasks.filter((new1) => new1.id !== found.id);
  // }

  async DeleteTaskById(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async UpdateTaskById(Id: string, status: TaskStatus): Promise<HeyTask> {
    const updateTask = await this.getTaskById(Id);
    updateTask.status = status;
    await this.tasksRepository.save(updateTask);
    return updateTask;
  }
  // UpdateTaskById(id: string, status: TaskStatus) {
  //   const updatetask = this.getTaskByID(id);
  //   updatetask.status = status;
  //   return updatetask;
  // }
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let newtasks = this.getAllTasks();
  //   if (status) {
  //     newtasks = this.tasks.filter((task) => task.status == status);
  //   }
  //   if (search) {
  //     newtasks = this.tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     return newtasks;
  //   }
  //   return newtasks;
  // }
}
