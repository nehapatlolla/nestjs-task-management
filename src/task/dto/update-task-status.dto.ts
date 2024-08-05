import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdatetaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
