import { DataSource, Repository } from 'typeorm';
import { HeyTask } from './task.entity';
import { TaskStatus } from './task.model';

export class TasksRepository extends Repository<HeyTask> {
  constructor(dataSource: DataSource) {
    super(HeyTask, dataSource.createEntityManager());
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
