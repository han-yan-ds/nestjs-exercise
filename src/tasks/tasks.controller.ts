/**
 * A Controller is the routing logic of a server... it routes endpoints to providers
 */

import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks') // decorator factory that returns a custom decorator
export class TasksController {

  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get() 
  /* In controllers, the REST/CRUD decorators (aka @Get, @Post) are 
   * the ones that tell the controller which methods to route to BASED ON
   * the HTTP request type */
  getAllTasks(): Task[] {
    // Call the method in tasks.service.ts, which was imported
    return this.tasksService.getAllTasks();
  }
}
