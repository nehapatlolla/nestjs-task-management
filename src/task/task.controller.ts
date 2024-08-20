import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdatetaskStatusDto } from './dto/update-task-status.dto';
import { HeyTask } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { UsersEntity } from '../auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('task')
@UseGuards(AuthGuard())
export class TaskController {
  //instantiating the logger
  private logger = new Logger('TaskController');
  constructor(private taskService: TaskService) {}

  //   //Task service is a property of the taskcontroller

  @Get()
  //we call this method whenever there is a get request
  getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @GetUser() user: UsersEntity,
  ): Promise<HeyTask[]> {
    this.logger.verbose(
      `User ${user.username} retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`,
    );
    //imported the model.ts interface here in the controller
    return this.taskService.getTasks(filterDto, user);
  }

  @Post()
  async CreateTask(
    @Body() CreateTaskDto: CreateTaskDto,
    @GetUser() user: UsersEntity,
  ): Promise<HeyTask> {
    this.logger.verbose(
      `User ${user.username} creating  a new task. Data: ${JSON.stringify(CreateTaskDto)}`,
    );
    return this.taskService.createtask(CreateTaskDto, user);
  }

  //   //when we use /: we are saying nestjs that this is a path parameter

  @Get('/:id')
  async getTaskById(
    @Param('id') id: string,
    @GetUser() user: UsersEntity,
  ): Promise<HeyTask> {
    return this.taskService.getTaskById(id, user); // Correct
  }

  @Delete('/:id')
  DeleteTaskById(
    @Param('id') id: string,
    @GetUser() user: UsersEntity,
  ): Promise<void> {
    return this.taskService.DeleteTaskById(id, user);
  }

  @Patch('/:id/status')
  UpdatetaskStatus(
    @Param('id') id: string,
    @Body() UpdatetaskStatusDto: UpdatetaskStatusDto,
    @GetUser() user: UsersEntity,
  ): Promise<HeyTask> {
    const { status } = UpdatetaskStatusDto;
    return this.taskService.UpdateTaskById(id, status, user);
  }
}
