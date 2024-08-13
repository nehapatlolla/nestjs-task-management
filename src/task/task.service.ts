import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

import { HeyTask } from './task.entity';
import { TaskStatus } from './task.model';
import { TasksRepository } from './task.repository';
import { UsersEntity } from '../auth/user.entity';

@Injectable()
export class TaskService {
  taskService: any;

  constructor(private readonly tasksRepository: TasksRepository) {}

  async createtask(
    CreateTaskDto: CreateTaskDto,
    user: UsersEntity,
  ): Promise<HeyTask> {
    return this.tasksRepository.createtask(CreateTaskDto, user);
    // return this.taskService.CreateTask(CreateTaskDto);
  }

  async getTaskById(id: string, user: UsersEntity): Promise<HeyTask> {
    const found = await this.tasksRepository.findOne({ where: { id, user } });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  async DeleteTaskById(id: string, user: UsersEntity): Promise<void> {
    const result = await this.tasksRepository.delete({ id, user });
    if (result.affected == 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async UpdateTaskById(
    Id: string,
    status: TaskStatus,
    user: UsersEntity,
  ): Promise<HeyTask> {
    const updateTask = await this.getTaskById(Id, user);
    updateTask.status = status;
    await this.tasksRepository.save(updateTask);
    return updateTask;
  }

  getTasks(
    filterDto: GetTasksFilterDto,
    user: UsersEntity,
  ): Promise<HeyTask[]> {
    return this.tasksRepository.getTasks(filterDto, user);
  }
}
