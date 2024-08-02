import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

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
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
