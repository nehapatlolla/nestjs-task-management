import { DataSource, Repository } from 'typeorm';
import { HeyTask } from './task.entity';
import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UsersEntity } from 'src/auth/user.entity';

@Injectable()
export class TasksRepository extends Repository<HeyTask> {
  userRepository: any;
  constructor(dataSource: DataSource) {
    super(HeyTask, dataSource.createEntityManager());
  }

  async getTasks(filterDto: GetTasksFilterDto): Promise<HeyTask[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');
    if (status) {
      query.andWhere('task.status= :status', { status });
    }

    if (search) {
      query.andWhere(
        `LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)`,
        {
          search: `%${search}%`,
        },
      );
    }
    const tasks = await query.getMany();
    return tasks;
  }

  async createtask(
    CreateTaskDto: CreateTaskDto,
    user: UsersEntity,
  ): Promise<HeyTask> {
    const { title, description } = CreateTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
      user,
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
