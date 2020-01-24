/**
 * A Controller is the routing logic of a server... it routes endpoints to providers
 */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskRequestBody } from './tasks.model';

@Controller('tasks') // decorator factory that returns a custom decorator
export class TasksController {

  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  /* In controllers, the REST/CRUD decorators (aka @Get, @Post) are 
  * the ones that tell the controller which methods to route to BASED ON
  * the HTTP request type */
  @Get() 
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks(); // Calls the method in tasksService class which was imported
  }

  @Post()
  createTask(@Body() body: TaskRequestBody) {
    const {title, description, numPeople} = body;
    return this.tasksService.createTask(title, description, numPeople);
  }
}
