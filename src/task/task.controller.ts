import { Controller } from '@nestjs/common';
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
}
