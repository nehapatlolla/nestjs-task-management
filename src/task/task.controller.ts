import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdatetaskStatusDto } from './dto/update-task-status.dto';
import { HeyTask } from './task.entity';

// @Controller('task')
// export class TaskController {
//   taskService: TaskService;
//   constructor(TaskService: TaskService) {
//     this.taskService = TaskService;}

//   helloWorld() {
//     this.taskService.doSomething();
//   }
//   }

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  //   //Task service is a property of the taskcontroller

  //   //   helloWorld() {
  //   //     this.taskService.doSomething();
  //   //   }
  //   @Get()
  //   //we call this method whenever there is a get request
  //   getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //     //imported the model.ts interface here in the controller

  //     if (Object.keys(filterDto).length) {
  //       return this.taskService.getTasksWithFilters(filterDto);
  //     } else {
  //       return this.taskService.getAllTasks();
  //     }
  //   }
  //   // @Post()
  //   // createNewTasks(
  //   //   @Body('title') title: string,
  //   //   @Body('description') description: string,
  //   // ): Task {
  //   //   return this.taskService.CreateTask(title, description);
  //   // }
  //   @Post()
  //   CreateTask(@Body() CreateTaskDto: CreateTaskDto): Task {
  //     return this.taskService.CreateTask(CreateTaskDto);
  //   }

  @Post()
  async CreateTask(@Body() CreateTaskDto: CreateTaskDto): Promise<HeyTask> {
    return this.taskService.createtask(CreateTaskDto);
  }

  //   //when we use /: we are saying nestjs that this is a path parameter
  //   @Get('/:id')
  //   getTaskById(@Param('id') id: string): Task {
  //     return this.taskService.getTaskByID(id);
  //   }
  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<HeyTask> {
    return this.taskService.getTaskById(id); // Correct
  }

  @Delete('/:id')
  DeleteTaskById(@Param('id') id: string): Promise<void> {
    return this.taskService.DeleteTaskById(id);
  }

  //   @Delete('/:id')
  //   DeleteTaskById(@Param('id') id: string): void {
  //     return this.taskService.DeletTaskById(id);
  //   }

  @Patch('/:id/status')
  UpdatetaskStatus(
    @Param('id') id: string,
    @Body() UpdatetaskStatusDto: UpdatetaskStatusDto,
  ): Promise<HeyTask> {
    const { status } = UpdatetaskStatusDto;
    return this.taskService.UpdateTaskById(id, status);
  }
  //   @Patch('/:id/status')
  //   UpdatetaskStatus(
  //     @Param('id') id: string,
  //     @Body() UpdatetaskStatusDto: UpdatetaskStatusDto,
  //   ): Task {
  //     const { status } = UpdatetaskStatusDto;
  //     return this.taskService.UpdateTaskById(id, status);
  //   }

  //   @Get('status/:status')
  //   async getTasksByStatus(
  //     @Param('status') status: TaskStatus,
  //   ): Promise<HeyTask[]> {
  //     return this.taskService.getTasksByStatus(status);
  //   }

  //   @Get('title/:title')
  //   async getTasksByTitle(@Param('title') title: string): Promise<HeyTask[]> {
  //     return this.taskService.getTasksByTitle(title);
  //   }
  // }

  // // CreateTask(title: string, description: string): Task {
  // //   const task: Task = {
  // //     id: uuid(),
  // //     title,
  // //     description,
  // //     status: TaskStatus.OPEN,
  // //   };
  // //   //pushing the task which is created into the tasks which is the empty array in the service

  // //   this.tasks.push(task);
  // //   return task;
  // // }
}
