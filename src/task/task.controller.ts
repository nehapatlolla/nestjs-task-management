import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

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
  //Task service is a property of the taskcontroller

  //   helloWorld() {
  //     this.taskService.doSomething();
  //   }
  @Get()
  //we call this method whenever there is a get request
  getAllTasks(): Task[] {
    //imported the model.ts interface here in the controller
    return this.taskService.getAllTasks();
  }
  // @Post()
  // createNewTasks(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //   return this.taskService.CreateTask(title, description);
  // }
  @Post()
  CreateTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    return this.taskService.CreateTask(CreateTaskDto);
  }
}

// CreateTask(title: string, description: string): Task {
//   const task: Task = {
//     id: uuid(),
//     title,
//     description,
//     status: TaskStatus.OPEN,
//   };
//   //pushing the task which is created into the tasks which is the empty array in the service

//   this.tasks.push(task);
//   return task;
// }
