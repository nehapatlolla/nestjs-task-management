import { DataSource, Repository } from 'typeorm';
import { HeyTask } from './task.entity';
import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository extends Repository<HeyTask> {
  constructor(dataSource: DataSource) {
    super(HeyTask, dataSource.createEntityManager());
  }

  async createtask(CreateTaskDto: CreateTaskDto): Promise<HeyTask> {
    const { title, description } = CreateTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
  // Custom method to find tasks by status
  async findByStatus(status: TaskStatus): Promise<HeyTask[]> {
    return this.find({ where: { status } });
  }

  // Custom method to find tasks by title
  async findByTitle(title: string): Promise<HeyTask[]> {
    return this.find({ where: { title } });
  }
}
